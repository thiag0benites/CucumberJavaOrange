#language: pt
@orange
Funcionalidade: Testes basicos no google
  Este arquivo contempla testes do google

  Contexto: 
    Dado que acesso a url "https://opensource-demo.orangehrmlive.com/"

  @CT01
  Cenario: CT01_busca_google
    Dado digito o usuario e senha corretamente
      | Admin | admin123 |
    E clico em login
    Entao acesso o sistema com sucesso
