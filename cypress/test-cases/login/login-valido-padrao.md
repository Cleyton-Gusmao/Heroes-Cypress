# Login com sucesso Padrão

**ID:**  
**Funcionalidade:** Login  
**Título:** Login Padrão com credenciais válidas  
**Pré-condições:** O usuário deve estar previamente cadastrado no sistema  
**Prioridade:** Alta  
**Tipo de teste:** Funcional / Positivo  


## Dados de entrada:
**Login:** test@test.com  
**Senha:** test123  

## Passos:
1. Acessar o sistema com a URL: http://localhost:3000/heroes  
2. Clicar no botão de login  
3. Inserir o e-mail válido  
4. Inserir a senha correta  
5. Clicar em "Entrar"


## Resultado Esperado:
O usuário deve permanecer na tela de heróis e o botão de login deve ser alterado para logout.  

## Evidência:
![Login com sucesso](../evidencias/login-sucesso.png)

## Steps & Results:
**Given** que o usuário acessou a página de login do sistema  
**And** clicou no botão "Login"  
**When** inserir usuário e senha válidas  
**And** clicar no botão "Sing In" 
**Then** o sistema deve autenticar o usuário  
**And** permanecer na tela de heróis.  

## Status:
**APROVADO**
