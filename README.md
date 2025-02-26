# Back-End
Backend de blog desenvolvido com Node.js, Express e MongoDB. Permite a criação, edição e exclusão de cards, com controle de permissões baseado no tipo de usuário (admin, lançador ou especialista). A autenticação é realizada via JWT, garantindo acesso seguro e gerenciamento de conteúdo.


# Tecnologias Usadas
Node.js: Ambiente de execução JavaScript no backend.
Express (opcional, dependendo da configuração): Framework para construir APIs.
Vercel: Plataforma de deploy para o ambiente de produção.
dotenv: Pacote para carregar variáveis de ambiente a partir de um arquivo .env localmente.
MongoDB: Banco de dados NoSQL utilizado para armazenar dados (se aplicável).
CORS: Configuração de Cross-Origin Resource Sharing para permitir requisições de diferentes origens.
# Como Rodar Localmente
Para rodar o backend localmente em seu computador, siga os passos abaixo:

# 1. Clonando o Repositório
Clone o repositório para sua máquina local:

bash
Copiar
Editar
git clone <URL do repositório>
cd <diretório do projeto>
# 2. Instalando Dependências
Execute o comando abaixo para instalar todas as dependências necessárias:

bash
Copiar
Editar
npm install
# 3. Configuração de Variáveis de Ambiente
Crie um arquivo .env na raiz do projeto com as variáveis de ambiente necessárias para o funcionamento do backend. Um exemplo básico pode ser:

env
Copiar
Editar
DB_URL=mongodb://localhost:27017/mydb
SECRET_KEY=mysecretkey
Nota: Para garantir que as variáveis de ambiente sejam carregadas, instale o pacote dotenv (se ainda não o fez) e importe-o no arquivo server.js ou no arquivo de configuração principal:

bash
Copiar
Editar
npm install dotenv
No arquivo principal (server.js):

js
Copiar
Editar
require('dotenv').config();
# 4. Rodando o Backend Localmente
Execute o backend com o comando:

bash
Copiar
Editar
npm start
Ou, se você tiver configurado um script de desenvolvimento:

bash
Copiar
Editar
npm run dev
O servidor estará rodando em http://localhost:3000 (ou outra porta configurada).

# 5. Testando o Backend
Você pode testar as rotas da API usando ferramentas como Postman ou Insomnia para fazer requisições HTTP. Usei Insomnia aqui. 

# Dificuldades e Desafios
Durante o desenvolvimento deste backend, enfrentamos alguns desafios que foram importantes para o aprendizado:

Configuração de Variáveis de Ambiente: A principal dificuldade foi garantir que as variáveis de ambiente fossem corretamente carregadas tanto localmente quanto no Vercel. No ambiente local, usamos o pacote dotenv para carregar um arquivo .env, mas no Vercel, é necessário configurar essas variáveis diretamente no painel de controle da plataforma.

Configuração do CORS: A configuração do CORS foi essencial para garantir que o frontend, que pode ser hospedado em um domínio diferente, pudesse interagir com o backend sem problemas de bloqueio de origem cruzada.

Deploy no Vercel, está sendo a partre mais desafiadora (Por isso não foi possivel entregar hospedado até a data limite. Mas em breve subirei uma versão hospedada)

Configuração do Banco de Dados: A configuração do banco de dados (MongoDB) também teve alguns desafios, principalmente relacionados ao acesso remoto no Vercel e à configuração de segurança.

# Variáveis de Ambiente
Para garantir o funcionamento correto do backend, as variáveis de ambiente devem ser configuradas tanto localmente quanto no ambiente de produção (Vercel). Envie o arquivo .env com as variáveis necessárias para o e-mail da Mariana para que ela possa usá-las no ambiente de produção.

As variáveis que devem ser enviadas são:

DB_URL: URL do banco de dados (MongoDB).
SECRET_KEY: Chave secreta para segurança, se necessário.
Enviarei as variáveis de ambiente para o e-mail da Mariana. 

