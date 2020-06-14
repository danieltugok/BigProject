
const TOKEN_KEY = 'access_token'
const REFRESH_TOKEN_KEY = 'refresh_token'
const COMPANY = 'company'

/**
 * Manage the how Access Tokens are being stored and retreived from storage.
 *
 * Current implementation stores to localStorage. Local Storage should always be
 * accessed through this instace.
**/
const TokenService = {
    getToken() {
        return localStorage.getItem(TOKEN_KEY)
    },

    saveToken(accessToken) {
        localStorage.setItem(TOKEN_KEY, accessToken)
    },

    removeToken() {
        localStorage.removeItem(TOKEN_KEY)
    },

    getRefreshToken() {
        return localStorage.getItem(REFRESH_TOKEN_KEY)
    },

    saveRefreshToken(refreshToken) {
        localStorage.setItem(REFRESH_TOKEN_KEY, refreshToken)
    },

    removeRefreshToken() {
        localStorage.removeItem(REFRESH_TOKEN_KEY)
    }

}

const CompanyService = {
    getCompany() {
        //return JSON.parse(localStorage.getItem(COMPANY));
        return localStorage.getItem(COMPANY)
    },

    saveCompany(company) {
        //localStorage.setItem(COMPANY, JSON.stringify(company))
        localStorage.setItem(COMPANY, company)
    },

    removeCompany() {
        localStorage.removeItem(COMPANY)
    }
}

export { TokenService, CompanyService }
