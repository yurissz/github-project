# KontChallenge (Desafio Técnico - Kontulari)

## Descrição
Este é um projeto fullstack desenvolvido para facilitar o acesso às principais informações de um usuário do GitHub e aos detalhes de seus repositórios. A aplicação oferece uma interface amigável e intuitiva para pesquisar usuários, visualizar estatísticas de perfil, como número de seguidores, linguagens mais usadas, além de listar e detalhar os repositórios públicos disponíveis no perfil.

## Visão Geral
Backend:
  - JDK 17
  - Maven
  - Spring Boot
  - GitHubAPI (https://api.github.com)
  
Frontend:
  - Vite
  - ReactJS
  - Typescript
  - HTML
  - CSS
  - Shadcn/UI
  - TailwindCSS

Geral:
  - Docker

## Estrutura de Pastas do Projeto
Aqui está uma visão geral da organização do projeto:

```plaintext
├── demo-backend/
│   ├── demo.backend/
│   │   ├── .mvn/wrapper
│   │   ├── src/main
│   │   │   ├── java/kontulari/kontchallege/demo_backend
│   │   │   └── resources/
│   │   ├── .gitattributes
│   │   ├── .gitignore
│   │   ├── DockerFile
│   │   ├── mvnw
│   │   ├── mvnw.cmd
│   │   ├── pom.xml
│   ├── .gitignore
├── frontend/kontchallenge-frontend/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── hooks/
│   │   ├── context/
│   │   ├── utils/
│   │   └── styles/
│   ├── public/
│   ├── tests/
│   ├── .env.example
│   ├── index.html
│   ├── vite.config.ts
│   ├── package.json
│   ├── README.md
│   └── tsconfig.json
├── docker.compose.yml
├── start.sh
└── README.md
```


## Instrução de instalação

### Pré-requisitos
- Node 20
- Git 2.4
- JDK 17
- Docker 27

Após clonar este repositório com:

```
git clone <urlDoProjeto>
```
Rode:
```
chmod +x start.sh

./start.sh
```

## Como utilizar a aplicação backend
Operações em '/github'
<table>
  <thread>
    <th>Resouce</th>
    <th>GET</th>
  </thread>
  <tbody>
    <tr>
      <td>{user}</td>
      <td>Consulta as informações do perfil</td>
    </tr>
    <tr>
      <td>{user}/repos</td>
      <td>Consulta os repositorios do usuario e suas informações</td>
    </tr>
  </tbody>
</table>

### GET - /github/{user}
```
{
	"login": "yurissz",
	"id": 138536805,
	"html_url": "https://github.com/yurissz",
	"location": "Bahia, Brasil",
	"bio": "Desenvolvedor Software Full Stack | Node.js | Typescript | SQL | Git",
	"name": "Yuri Souza",
	"avatar_url": "https://avatars.githubusercontent.com/u/138536805?v=4",
	"public_repos": 12,
	"following": 13,
	"followers": 11
}
```
### GET - /github/{user}/repos
```

	{
		"name": "banco_digital",
		"description": "Uma simulação de banco digital integrado com banco de dados. ( A simple Bank simulation with database integration.) em Express",
		"language": "JavaScript",
		"license": null,
		"private": false,
		"html_url": "https://github.com/yurissz/banco_digital",
		"created_at": "2024-06-19T14:18:48Z",
		"updated_at": "2024-09-04T11:38:33Z",
		"pushed_at": "2024-09-04T11:38:30Z"
	},
	{
		"name": "code-connect-alura",
		"description": "Projeto do curso Alura - Next.js: conheça o framework React",
		"language": "TypeScript",
		"license": null,
		"private": false,
		"html_url": "https://github.com/yurissz/code-connect-alura",
		"created_at": "2024-11-05T20:52:01Z",
		"updated_at": "2024-11-08T15:23:39Z",
		"pushed_at": "2024-11-08T15:23:34Z"
	},
	{
		"name": "crud-nest",
		"description": "CRUD básico com Nest.js e TypeORM",
		"language": "TypeScript",
		"license": null,
		"private": false,
		"html_url": "https://github.com/yurissz/crud-nest",
		"created_at": "2024-10-14T21:48:07Z",
		"updated_at": "2024-10-15T13:33:23Z",
		"pushed_at": "2024-10-15T13:33:19Z"
	},
	{
		"name": "direito-facil",
		"description": "Uma simulação de compra e venda de serviços do ramo tributário",
		"language": "JavaScript",
		"license": null,
		"private": false,
		"html_url": "https://github.com/yurissz/direito-facil",
		"created_at": "2024-08-08T19:42:49Z",
		"updated_at": "2024-09-04T11:36:43Z",
		"pushed_at": "2024-09-04T11:36:40Z"
	},
... ]
```

## Como utilizar a aplicação frontend
Acesse a porta:
 -  Local:   http://localhost:9090/
Em um navegador web.

Você terá acesso ás seguintes telas:

![image](https://github.com/user-attachments/assets/dc27a3e9-4547-408e-9e8d-e9556f87c868)
![image](https://github.com/user-attachments/assets/02a18c84-b8de-4dbf-814d-a375d76d5d92)





