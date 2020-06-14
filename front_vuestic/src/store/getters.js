const config = state => state.app.config
const palette = state => state.app.config.palette
const isLoading = state => state.app.isLoading



const loggedIn = state => state.auth.accessToken ? true : false
const authenticationError = state => state.auth.authenticationError
const authenticationErrorCode = state => state.auth.authenticationErrorCode
const authenticating = state => state.auth.authenticating
const user = state => state.auth.user



  
export {
  config,
  palette,
  isLoading,
  loggedIn,
  authenticationErrorCode,
  authenticationError,
  authenticating,
  user,
}
