import React, { Component } from 'react';

import {
  View,
  TextInput,
  TouchableOpacity,
  AsyncStorage,
  ActivityIndicator,
  FlatList,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';
import Header from '~/components/Header';
import { colors } from '~/styles';
import api from '~/services/api';
import RepositoryItem from './RepositoryItem';

export default class Repositories extends Component {
  state = {
    reponame: '',
    repositories: [],
    loading: false,
    refreshing: false,
  };

  async componentDidMount() {
    this.loadRepositories();
  }

  loadRepositories = async () => {
    this.setState({ refreshing: true });
    const repositories = await AsyncStorage.getItem('@NativeIssuesSearch:repositories');
    this.setState({ refreshing: false, repositories: repositories ? JSON.parse(repositories) : [] });
  }

  search = async () => {
    this.setState({ loading: true });
    const { reponame, repositories } = this.state;
    const {
      data: {
        id, name, full_name, organization: { login }, owner: { avatar_url },
      },
    } = await api.get(`/repos/${reponame}`);

    const repository = {
      id,
      name,
      login,
      avatar_url,
      full_name
    };

    await AsyncStorage.setItem('@NativeIssuesSearch:repositories', JSON.stringify([...repositories, repository]));

    this.setState({ reponame: '', loading: false, repositories: [...repositories, repository] });
  };

  renderListItem = ({ item }) => <RepositoryItem repository={item} navigation={this.props.navigation} />

  renderList = () => {
    const { repositories, refreshing } = this.state;

    return (
      <FlatList
        data={repositories}
        keyExtractor={item => String(item.id)}
        renderItem={this.renderListItem}
        onRefresh={this.loadRepositories}
        refreshing={refreshing}
      />
    );
  }

  render() {
    const { reponame, loading } = this.state;

    return (
      <View style={styles.container}>
        <Header title="Native Issues Search" />
        <View style={styles.formSearch}>
          <TextInput
            style={styles.input}
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Organization/Repository"
            underlineColorAndroid={colors.transparent}
            value={reponame}
            onChangeText={text => this.setState({ reponame: text })}
          />
          <TouchableOpacity onPress={this.search}>
            <Icon name="plus" size={16} style={styles.icon} />
          </TouchableOpacity>
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
