# SUBWAY
Management of Subway store


##GIT

###SSH
Evitando Informar Usuário e Senha a cada Push para o GitHub:
https://medium.com/@andgomes/git-github-evitando-informar-usu%C3%A1rio-e-senha-a-cada-push-para-o-github-d8edbb5c6de4
OU
Documentacao - https://help.github.com/pt/github/authenticating-to-github/connecting-to-github-with-ssh


##FROTEND

Estrutura de projeto modelo
https://medium.com/@zitko/structuring-a-vue-project-authentication-87032e5bfe16

Tratando erros com vue.js
https://medium.com/js-dojo/error-exception-handling-in-vue-js-application-6c26eeb6b3e4

Configuração do History Mode no Servidor
https://router.vuejs.org/guide/essentials/history-mode.html#example-server-configurations

Resolvendo problema de acesso as variáveis de ambiente na versão do vue-cli acima da 3.0 
https://cli.vuejs.org/guide/mode-and-env.html#modes
https://vuejs-brasil.com.br/trabalhando-com-arquivos-env-no-vue/

Iniciar o servidor: npm run serve


##BACKEND
Rodar o banco com dados de teste (seeds): php artisan migrate:fresh --seed (caso seja necessário, rodar: composer dump-autoload)
Iniciar o servidor: php artisan serve 

Package de configuração do CORS
https://packagist.org/packages/barryvdh/laravel-cors


Rota para teste:
http://127.0.0.1:8000/api/auth/login 
campos: email e password


Padrão da resposta:
1- Erro de validação (status 401)
{
    "email": [
        "The email must be a valid email address."
    ],
    "password": [
        "The password must be at least 3 characters."
    ]
}

2- Email ou password incorretos (status 401)
{
    "error": "Unauthorized"
}

3- Usuário autenticado com sucesso (status 200)
{
    "id": 1,
    "name": "Daniel Kogut",
    "email": "danieltugok@gmail.com",
    "email_verified_at": null,
    "created_at": "2020-04-29T07:25:42.000000Z",
    "updated_at": "2020-04-29T07:25:42.000000Z"
}
Headers:
Access_token: (token gerado pela API)