import Api from './api';

export default {
  searchUser(user) {
    return Api().get('users/' + user.username);
  }
}
