import React from 'react';
import PropTypes from 'prop-types';
import {
  View, Text, Image, TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';

const RepositoryItem = ({ navigation, repository }) => (
  <TouchableOpacity
    style={styles.container}
    onPress={() => navigation.navigate('Issues', { repository })}
  >
    <Image style={styles.image} source={{ uri: repository.avatar_url }} />
    <View style={styles.info}>
      <Text style={styles.infoRepo}>{repository.name}</Text>
      <Text style={styles.infoOrg}>{repository.login}</Text>
    </View>
    <Icon style={styles.icon} name="chevron-right" size={12} />
  </TouchableOpacity>
);

RepositoryItem.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
  repository: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    login: PropTypes.string,
    avatar_url: PropTypes.string,
    full_name: PropTypes.string,
  }).isRequired,
};

export default RepositoryItem;
