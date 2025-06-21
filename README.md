# Automação Cypress Heroes

![Heroes](./client/src/assets/capa-heroes.png)

Aplicação desenvolvida para simular um sistema onde usuários podem realizar login e interagir com heróis fictícios.

As estratégias de automação foram criadas com foco em testes de **ponta a ponta (E2E)**, utilizando **estruturas reutilizáveis** para garantir **eficiência**, **qualidade** e **facilidade de manutenção** dos testes.

### Perfis de Usuário

- 🔹 **Usuário comum:** pode curtir heróis e contratá-los.  
- 🔸 **Administrador:** possui todas as permissões do usuário comum, além de poder **criar**, **editar** e **excluir** heróis.


### **[Link dos casos de teste](https://github.com/Cleyton-Gusmao/Heroes-Cypress/tree/main/client/test-cases/login)**
> **NOTA:**
> Os casos de testes estão localizados no caminho: **Heroes-Cypress/client/test-cases/login/**

## Passo a Passo para Instalação

**1.** **Clone o repositório na sua maquina**

```bash
git clone https://github.com/Cleyton-Gusmao/Heroes-Cypress.git
```

**2.** **Navegue até o diretório do projeto**

```bash
cd Heroes-Cypress/
```

**3.** **Instale as dependências do projeto**

```bash
npm install 
```

**4.** **Configuração de Ambiente**

```bash
npm run setup
```

**5.** **Inicie o servidor de Desenvolvimento**

```bash
npm run dev
```
>
>**Nota** Este Projeto é acessivel em http://localhost:3000.
>


**6.** **Abra outro Terminal e execute o Cypress para rodar os testes**

abrir o Cypress com interface gráfica (GUI - Graphical User Interface)

```bash
npx cypress open
```

> **NOTA:**
> Os testes se encontram no caminho: **client/cypress/tests/e2e**
>
