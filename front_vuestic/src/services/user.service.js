
import ApiService from './api.service'
import { TokenService, CompanyService } from './storage.service'
import router from '../router'

class AuthenticationError extends Error {
    constructor(errorCode, message) {
        super(message)
        this.name = this.constructor.name
        this.message = message
        this.errorCode = errorCode
    }
}

const UserService = {
    /**
     * Login the user and store the access token to TokenService. 
     * 
     * @returns access_token
     * @throws AuthenticationError 
    **/
    login: async function (email, password) {
        const requestData = {
            method: 'post',
            url: "/api/auth/login",
            data: {
                email: email,
                password: password
            },
        }

        try {
            //Faz a requisição à API e recebe como resposta um objeto do usuário logado com um token de acesso no header da reposta
            const response = await ApiService.customRequest(requestData)
            TokenService.saveToken(response.headers.access_token)

            if (response.data.companies.length == 1) {
                CompanyService.saveCompany(response.data.companies[0].slug);
            }else{
                CompanyService.saveCompany(response.data.companies[0].slug);
            }


            TokenService.saveRefreshToken(response.headers.refresh_token)
            ApiService.setHeader()

            // NOTE: We haven't covered this yet in our ApiService 
            //       but don't worry about this just yet - I'll come back to it later
            //ApiService.mount401Interceptor();

            let user = response.data;
            user.token = response.headers.access_token

            return user
        } catch (error) {
            throw new AuthenticationError(error.response.status, error.response.data)
        }
    },
    /**
     * Return user logged
     * 
     * @returns user
     * @throws AuthenticationError 
    **/
    me: async function () {
        const requestData = {
            method: 'post',
            url: "/api/auth/me",
        }
        try {
            const response = await ApiService.customRequest(requestData)
            let companies = response.data.companies

            let check = false
            companies.forEach(function (company) {
                if (company.slug == CompanyService.getCompany()) {
                    check = true
                }
            });
            
            if(!check){
                //Redirecionar para rota de lockscreen qnd estiver pronta
                router.push({ name: 'charts' });
            }

            return response.data;
        } catch (error) {
            throw new AuthenticationError(error.response.status, error.response.data)
        }
    },

    /**
     * Refresh the access token.
    **/
    refreshToken: async function () {
        const refreshToken = TokenService.getRefreshToken()

        const requestData = {
            method: 'post',
            url: "/o/token/",
            data: {
                grant_type: 'refresh_token',
                refresh_token: refreshToken
            },
        }

        try {
            const response = await ApiService.customRequest(requestData)

            TokenService.saveToken(response.data.access_token)
            TokenService.saveRefreshToken(response.data.refresh_token)
            // Update the header in ApiService
            ApiService.setHeader()

            return response.data.access_token
        } catch (error) {
            throw new AuthenticationError(error.response.status, error.response.data.detail)
        }

    },

    /**
     * Logout the current user by removing the token from storage. 
     * 
     * Will also remove `Authorization Bearer <token>` header from future requests.
    **/
    logout() {
        // Remove the token and remove Authorization header from Api Service as well 
        TokenService.removeToken()
        TokenService.removeRefreshToken()
        CompanyService.removeCompany()
        ApiService.removeHeader()

        // NOTE: Again, we'll cover the 401 Interceptor a bit later. 
        //ApiService.unmount401Interceptor()
    }
}

export default UserService

export { UserService, AuthenticationError }
