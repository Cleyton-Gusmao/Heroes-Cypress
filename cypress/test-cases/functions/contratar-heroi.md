# Contratar herói

**ID:**  
**Funcionalidade:**  Contratar herói  
**Título:** Contratar herói  
**Pré-condições:** O usuário deve estar previamente logado no sistema  
**Prioridade:** Média  
**Tipo de teste:** Funcional / Positivo  



## Dados de entrada

**Login:** test@test.com  
**Senha:** test123  



## Passos

1. Acessar o sistema com a URL: http://localhost:3000/heroes  
2. Clicar no botão de login  
3. Inserir o e-mail válido  
4. Inserir a senha correta  
5. Clicar em "Entrar"  
6. Clicar no botão contratar  
8. Clicar em "Yes" no pop-up de confirmação  
7. Verificar se a contagem de contratações aumentou +1  



## Resultado Esperado

O número de contratações no card do herói que o usuário contratou deve aumentar +1 na contagem  



## Evidência

![Contratar herói](../evidencias/save-hero.png)



## Steps & Results

**Given** que o usuário acessou a página incial do sistema  
**And** realizou o login usando credenciais válidas  
**When** clicar no botão de contratar no card de um herói  
**And** confirmar a ação clicando na opção "Yes" no pop-up de confirmação 
**Then** a contagem de contratações do herói deve aumentar +1.  



## Status

**APROVADO**
