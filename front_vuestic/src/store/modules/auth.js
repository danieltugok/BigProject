import { UserService, AuthenticationError } from '../../services/user.service'
import { TokenService } from '../../services/storage.service'
import router from '../../router'


const state = {
  authenticating: false,
  accessToken: TokenService.getToken(),
  authenticationErrorCode: 0,
  authenticationError: '',
  user: {},
}

const mutations = {
  loginRequest(state) {
    state.authenticating = true;
    state.authenticationError = ''
    state.authenticationErrorCode = 0
  },

  loginSuccess(state, accessToken) {
    state.accessToken = accessToken
    state.authenticating = false;
  },

  loginError(state, { errorCode, errorMessage }) {
    state.authenticating = false
    state.authenticationErrorCode = errorCode
    state.authenticationError = errorMessage
  },

  logoutSuccess(state) {
    state.accessToken = ''
    state.user = {}
  },

  setUser(state, user) {
    state.user = user
  }
}

const actions = {
  async login({ commit }, { email, password }) {
    commit('loginRequest');

    try {
      const user = await UserService.login(email, password);
      commit('loginSuccess', user.token)

      if(user.companies.length == 1){
        // Redirect the user to the page he first tried to visit or to the home view
        router.push(router.history.current.query.redirect || { name: 'dashboard' });
      }else{
        console.log('Ecaminhar para LockScreen')
        //Alterar rota para lockscrennKsKs
        router.push({ name: 'dashboard' });
      }
      

      return true
    } catch (e) {
      if (e instanceof AuthenticationError) {

        commit('loginError', { errorCode: e.errorCode, errorMessage: e.message })
      }

      return false
    }
  },

  async me({ commit }) {
    try {
      const user = await UserService.me();
      commit('setUser', user)

      return true
    } catch (e) {
      UserService.logout()
      router.push({ name: 'login' })
    }


  },

  logout({ commit }) {
    UserService.logout()
    commit('logoutSuccess')
    router.push({ name: 'login' })
  }
}

export default {
  state,
  mutations,
  actions,
}
