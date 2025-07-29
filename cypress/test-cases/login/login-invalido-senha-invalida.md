# Login com senha inválida

**ID:**  
**Funcionalidade:** Login  
**Título:** Login com senha inválida  
**Pré-condições:** A senha inserida não deve está cadastrada no sistema  
**Prioridade:** Alta  
**Tipo de teste:** Funcional / Negativo  

## Dados de entrada

**Login:** test@test.com  
**Senha:** senha123  



## Passos

1. Acessar o sistema com a URL: http://localhost:3000/heroes  
2. Clicar no botão de login  
3. Inserir o e-mail válido  
4. Inserir a senha incorreta  
5. Clicar em "Sing in"  



## Resultado Esperado

Deve ser exibida a mensagem "Invalid email or password" e o usuário deve permanecer na tela de login.  



## Evidência

![Descrição da imagem](../evidencias/senha-invalida.png)  



## Steps & Results

**Given** o usuário acessou a página de login do sistema  
**And** clicou no botão "Login"  
**When** inserir login válido e senha inválida  
**And** clicar no botão "Sing in"  
**Then** O sistema deve exibir o erro "Invalid email or password"  
**And** o usuário deve permanecer a tela de login.  



## Status

**Aprovado**  