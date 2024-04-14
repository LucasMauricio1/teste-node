<h1 align="center">Teste feito em NestJS🚀</h1>

> O projeto é um cadastro de usuários com diferentes endpoints contendo Get, Post, Path e Delete. Além de autenticação via Bearer Token.

## :page_facing_up: Explicação

Optei por facilitar o acesso as rotas e ao token deixando tudo já mockado no código sem a necessidade de configurar variáveis de ambiente.

Os DTOs são feitos para validar as requisições via body.

Os dados são armazenados em uma constante chamada usersData, ela já vem com um usuário admin cadastrado:
{
    id: 1,
    name: 'admin',
    email: 'admin@spsgroup.com.br',
    type: 'admin',
    password: '1234',
}

Os services são responsáveis por tomar as decisões, quando acionados eles vão buscar, criar, deletar ou apagar dados dependendo da vontade do usuário.

Os controllers vão ser os responsaveis de diferencias as requisições, seja elas get, post, etc...
Além disso é nos controller que são feitas as validações do body e também do retorno para o usuário, e caso o service pegue algum erro, é o controller o responsável por dizer isso ao usuário.

Por fim a pasta strategies ficou responsável por toda a lógica da autorrização com o token gerado no login.

## 📁 Paginas

O sistema é composto por 6 enndpoints diferentes:

- **Login: POST /auth** Nesta página, os usuários podem inserir seus dados cadastrados (email e senha) e fazer login para obter o token.
- **Cadastro: POST /user** Nesta página, os usuários admin podem criar novos usuários.
- **Listar todos os usuários: POST /user/:userId** Aqui você consegue a listagem de todos os usuários cadastrados no sistema.
- **Listar um usuário: POST /user/:userId** Nesta pagina você vai obter os dados de um usuário específico passando seu ID.
- **Editar um usuário: Path /user/:userId** Aqui você consegue editar seu usuário todo ou somente um atributo dele.
- **Apagar um usuário: Delete /user/:userId** Esta ultima request permitira ao usuário logado deletar qualquer usuário pelo ID..

## :dart: Passos

:heavy_check_mark: Rota de cadastro;\
:heavy_check_mark: Rota de buscar todos usuários;\
:heavy_check_mark: Rota de buscar um usuário específico;\
:heavy_check_mark: Rota de deletar um usuário;\
:heavy_check_mark: Rota de editar um usuário;\
:heavy_check_mark: Validação no email;\
:heavy_check_mark: Validar o retorno ao usuário;\
:heavy_check_mark: Criar os modulos de autenticação;\
:heavy_check_mark: Geração do access token;\
:heavy_check_mark: Validação com o token;\
:heavy_check_mark: Bloquear todas as rotas sem o token;\

## :rocket: Tecnologias

As seguintes ferramentas foram utilizadas neste projeto:

- [NestJs](https://docs.nestjs.com)
- [TypeScript](https://www.typescriptlang.org)
- [JWT Token](https://docs.nestjs.com/security/authentication)
- [Class Validator](https://docs.nestjs.com/techniques/validation)

## :closed_book: Requisitos ##

Antes de começar, você precisa ter [Git](https://git-scm.com) e [Node](https://nodejs.org/en/) instalados em seu computador.

## :checkered_flag: Getting Started ##

```bash
# Clone o projeto
$ git clone https://github.com/LucasMauricio1/teste-node
# Accesso
$ cd teste-node
# Instalando dependencias
$ yarn ou npm i
# Rodando o comando
$ yarn run start:dev ou npm run start:dev
# O servidor iniciará na porta: <http://localhost:3000>
```
## 🤝 Contribuidores

Queremos agradecer às seguintes pessoas que contribuíram para este projeto:

<table>
  <tr>
    <td align="center">
      <a href="#">
        <img src="https://avatars.githubusercontent.com/u/122059282?s=400&u=96bc9300d660f1b489efcfb0a557ab08a6298c99&v=4" width="100px;" alt="Lucas Mauricio"/><br>
        <sub>
          <b>Lucas Maurício</b>
        </sub>
      </a>
    </td>
  </tr>
</table>