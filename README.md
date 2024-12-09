# KontChallenge (Desafio Técnico - Kontulari)

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

## Começando
Após clonar este repositório com:

```
git clone <urlDoProjeto>
```
Rode:
```
chmod +x start.sh

./start.sh
```

## Como utilizar a aplicação
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
