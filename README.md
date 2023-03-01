# react-entrega-kenzie-hub-aletanus

FEATURES:

Consumo da API  Kenzie Hub API:

https://github.com/Kenzie-Academy-Brasil-Developers/kenziehub-api
O projeto conta com o consumo e envio de dados para esta API de forma a Registrar e Logar usuários dentro da aplicação.

Toastfy
Para deixar toda experiência de utilização da aplicação refinada e fazer as notificações de sucesso e erro com mais facilidade, o recurso de Toastfy foi implementado no projeto.

Dashboard - Cadastro de tecnologias
A aplicação permite o usuário logado cadastre tecnologias

Dashboard - Renderização e Deleção de tecnologias
A aplicação permite que o usuário logado visualize e delete as próprias tecnologias.

Autologin - Proteção de Rotas utilizando Outlet
Autologin foi implementado corretamente no contexto e o usuário que não está logado não consegue acessar a dashboard.

Layout fidedigno ao figma passado para o projeto: 
https://www.figma.com/file/ccZ4uMlJtuBQISDzCCI1Vq/Kenzie-Hub?node-id=0%3A1
A aplicação contém os seguintes componentes: Card Tech, Modal.
A aplicação responsiva.

A aplicação permite o usuário logado editar tecnologias
Aplicação deve permitir o usuário editar a tecnologia utilizando o fluxo extra.

UserContext - ContextAPI
Foi criado um contexto chamado de UserContext com todas as funcionalidades e estados referentes ao usuário.
Foi realizada a refatoração na page Login para utilizar ContextAPI.
Foi realizada a refatoração na page Register para utilizar ContextAPI.


TechContext - ContextAPI
Foi criado um contexto chamado de TechContext com todas as funcionalidades e estados referentes às tecnologias.


Boas práticas
Código bem indentado;
Variáveis bem descritivas;
Padronização
Convetional commits:
Todos os commits estão padronizados utilizando conventional commits

Componentização
Aplicação está componentizada, utilizando props e childrens de forma correta.

React Hook Form
React hook form Utilizado em todos formulários da aplicação.
Utilização do Yup e feedbacks dos erros de validação em todos formulários estão claros.
