import Api from './api';

export default {
  searchUser(user) {
    return Api().get(user.username+'/?__a=1');
    // return Api().get('users/'+user.username);
    // return Api().get('users/1');
  }
}
