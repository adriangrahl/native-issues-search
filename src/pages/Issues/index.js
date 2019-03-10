import React, { Component } from 'react';

import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  FlatList,
} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import Header from '~/components/Header';
import api from '~/services/api';
import IssueItem from './IssueItem';

export default class Issues extends Component {
  state = {
    issues: [],
    loading: true,
    filter: null,
    reponame: '',
  };

  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }).isRequired,
  }

  async componentDidMount() {
    const { navigation } = this.props;
    const repository = navigation.getParam('repository');
    this.setState({ reponame: repository.name });
    const { data: issues } = await api.get(`/repos/${repository.full_name}/issues`);
    this.setState({ loading: false, issues });
  }

  renderListItem = ({ item }) => <IssueItem issue={item} />

  renderList = () => {
    const { issues, filter } = this.state;

    return (
      <FlatList
        data={issues.filter(issue => !filter || (issue.state === filter))}
        keyExtractor={item => String(item.id)}
        renderItem={this.renderListItem}
      />
    );
  }

  applyFilter = (filter) => {
    switch (filter) {
      case 'open':
        this.setState({ filter });
        break;
      case 'closed':
        this.setState({ filter });
        break;
      default:
        this.setState({ filter: null });
        break;
    }
  }

  render() {
    const { loading, filter, reponame } = this.state;
    const options = ['all', 'open', 'closed'];

    return (
      <View style={styles.container}>
        <Header title={reponame} />
        <View style={styles.filters}>
          {
            options.map(option => (
              <TouchableOpacity
                key={option}
                onPress={() => this.applyFilter(option)}
              >
                <Text
                  style={((!filter && option === 'all') || filter === option) ? (styles.optionSelected) : (styles.option)}
                >
                  {option}
                </Text>
              </TouchableOpacity>
            ))
          }
        </View>
        <View>
          {
            loading ? (
              <ActivityIndicator style={styles.icon} />
            ) : this.renderList()
          }
        </View>
      </View>
    );
  }
}
