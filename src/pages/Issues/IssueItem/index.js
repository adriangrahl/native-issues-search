import React from 'react';
import PropTypes from 'prop-types';
import {
  View, Text, Image, TouchableOpacity, Linking,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';

const IssueItem = ({ issue }) => (
  <TouchableOpacity style={styles.container} onPress={() => Linking.openURL(issue.html_url)}>
    <Image style={styles.avatar} source={{ uri: issue.user.avatar_url }} />
    <View style={styles.info}>
      <Text style={styles.title} numberOfLines={1} ellipsizeMode="tail">
        {issue.title}
      </Text>
      <Text style={styles.user}>{issue.user.login}</Text>
    </View>
    <Icon style={styles.icon} name="chevron-right" size={12} />
  </TouchableOpacity>
);

IssueItem.propTypes = {
  issue: PropTypes.shape({
    html_url: PropTypes.string,
    title: PropTypes.string,
    user: PropTypes.shape({
      avatar_url: PropTypes.string,
      login: PropTypes.string,
    }),
  }).isRequired,
};

export default IssueItem;
