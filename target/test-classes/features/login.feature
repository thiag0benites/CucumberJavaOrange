#language: pt
@orange
Funcionalidade: Testes de login
  Como um usuário
  Eu quero realizar login no sistema
  De modo seguro

  Contexto: 
    Dado que acesso a url "https://opensource-demo.orangehrmlive.com/"

  @CT01
  Cenario: CT01_Login_com_dados_corretos
    Dado digito o usuario e senha
      | Admin | admin123 |
    E clico em login
    Entao acesso o sistema com sucesso

  @CT02
  Cenario: CT02_Login_com_senha_incorreta
    Dado digito o usuario e senha
      | Admin | admin125 |
    E clico em login
    Entao valido a mensagem de erro "Invalid credentials"

  @CT03
  Cenario: CT03_Login_com_senha_em_branco
    Dado digito o usuario e senha
      | Admin |  |
    E clico em login
    Entao valido a mensagem de erro "Password cannot be empty"

  @CT04
  Cenario: CT04_Login_com_usuario_em_branco
    Dado digito o usuario e senha
      |  | admin125 |
    E clico em login
    Entao valido a mensagem de erro "Username cannot be empty"

  @CT05
  Cenario: CT05_Login_com_usuario_e_senha_em_branco
    Dado digito o usuario e senha
      |  |  |
    E clico em login
    Entao valido a mensagem de erro "Username cannot be empty"
