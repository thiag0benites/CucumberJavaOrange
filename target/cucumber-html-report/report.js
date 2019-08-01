$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("login.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#language: pt"
    }
  ],
  "line": 3,
  "name": "Testes de login",
  "description": "Como um usuário\nEu quero realizar login no sistema\nDe modo seguro",
  "id": "testes-de-login",
  "keyword": "Funcionalidade",
  "tags": [
    {
      "line": 2,
      "name": "@orange"
    }
  ]
});
formatter.before({
  "duration": 5262815667,
  "status": "passed"
});
formatter.background({
  "line": 8,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Contexto"
});
formatter.step({
  "line": 9,
  "name": "que acesso a url \"https://opensource-demo.orangehrmlive.com/\"",
  "keyword": "Dado "
});
formatter.match({
  "arguments": [
    {
      "val": "https://opensource-demo.orangehrmlive.com/",
      "offset": 18
    }
  ],
  "location": "login.que_acesso_a_url(String)"
});
formatter.result({
  "duration": 42944852022,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "CT01_Login_com_dados_corretos",
  "description": "",
  "id": "testes-de-login;ct01-login-com-dados-corretos",
  "type": "scenario",
  "keyword": "Cenario",
  "tags": [
    {
      "line": 11,
      "name": "@CT01"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "que digito o usuario e senha",
  "rows": [
    {
      "cells": [
        "Admin",
        "admin123"
      ],
      "line": 14
    }
  ],
  "keyword": "Dado "
});
formatter.step({
  "line": 15,
  "name": "clico em login",
  "keyword": "E "
});
formatter.step({
  "line": 16,
  "name": "acesso o sistema com sucesso",
  "keyword": "Entao "
});
formatter.match({
  "location": "login.digito_o_usuario_e_senha_corretamente(DataTable)"
});
formatter.result({
  "duration": 311103753,
  "status": "passed"
});
formatter.match({
  "location": "login.clico_em_login()"
});
formatter.result({
  "duration": 9339980774,
  "status": "passed"
});
formatter.match({
  "location": "login.acesso_o_sistema_com_sucesso()"
});
formatter.result({
  "duration": 95317693,
  "status": "passed"
});
formatter.write("Cenario Passou");
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 1043552842,
  "status": "passed"
});
formatter.before({
  "duration": 3815562607,
  "status": "passed"
});
formatter.background({
  "line": 8,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Contexto"
});
formatter.step({
  "line": 9,
  "name": "que acesso a url \"https://opensource-demo.orangehrmlive.com/\"",
  "keyword": "Dado "
});
formatter.match({
  "arguments": [
    {
      "val": "https://opensource-demo.orangehrmlive.com/",
      "offset": 18
    }
  ],
  "location": "login.que_acesso_a_url(String)"
});
formatter.result({
  "duration": 10196395007,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "CT02_Login_com_senha_incorreta",
  "description": "",
  "id": "testes-de-login;ct02-login-com-senha-incorreta",
  "type": "scenario",
  "keyword": "Cenario",
  "tags": [
    {
      "line": 18,
      "name": "@CT02"
    }
  ]
});
formatter.step({
  "line": 20,
  "name": "que digito o usuario e senha",
  "rows": [
    {
      "cells": [
        "Admin",
        "admin125"
      ],
      "line": 21
    }
  ],
  "keyword": "Dado "
});
formatter.step({
  "line": 22,
  "name": "clico em login",
  "keyword": "E "
});
formatter.step({
  "line": 23,
  "name": "valido a mensagem de erro \"Invalid credentials\"",
  "keyword": "Entao "
});
formatter.match({
  "location": "login.digito_o_usuario_e_senha_corretamente(DataTable)"
});
formatter.result({
  "duration": 205645743,
  "status": "passed"
});
formatter.match({
  "location": "login.clico_em_login()"
});
formatter.result({
  "duration": 2229622895,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Invalid credentials",
      "offset": 27
    }
  ],
  "location": "login.valido_a_mensagem_de_erro(String)"
});
formatter.result({
  "duration": 103138529,
  "status": "passed"
});
formatter.write("Cenario Passou");
formatter.embedding("image/png", "embedded1.png");
formatter.after({
  "duration": 1138968706,
  "status": "passed"
});
formatter.before({
  "duration": 4042619839,
  "status": "passed"
});
formatter.background({
  "line": 8,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Contexto"
});
formatter.step({
  "line": 9,
  "name": "que acesso a url \"https://opensource-demo.orangehrmlive.com/\"",
  "keyword": "Dado "
});
formatter.match({
  "arguments": [
    {
      "val": "https://opensource-demo.orangehrmlive.com/",
      "offset": 18
    }
  ],
  "location": "login.que_acesso_a_url(String)"
});
formatter.result({
  "duration": 6341270968,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "CT03_Login_com_senha_em_branco",
  "description": "",
  "id": "testes-de-login;ct03-login-com-senha-em-branco",
  "type": "scenario",
  "keyword": "Cenario",
  "tags": [
    {
      "line": 25,
      "name": "@CT03"
    }
  ]
});
formatter.step({
  "line": 27,
  "name": "que digito o usuario e senha",
  "rows": [
    {
      "cells": [
        "Admin",
        ""
      ],
      "line": 28
    }
  ],
  "keyword": "Dado "
});
formatter.step({
  "line": 29,
  "name": "clico em login",
  "keyword": "E "
});
formatter.step({
  "line": 30,
  "name": "valido a mensagem de erro \"Password cannot be empty\"",
  "keyword": "Entao "
});
formatter.match({
  "location": "login.digito_o_usuario_e_senha_corretamente(DataTable)"
});
formatter.result({
  "duration": 157467534,
  "status": "passed"
});
formatter.match({
  "location": "login.clico_em_login()"
});
formatter.result({
  "duration": 82350804,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Password cannot be empty",
      "offset": 27
    }
  ],
  "location": "login.valido_a_mensagem_de_erro(String)"
});
formatter.result({
  "duration": 93415062,
  "status": "passed"
});
formatter.write("Cenario Passou");
formatter.embedding("image/png", "embedded2.png");
formatter.after({
  "duration": 958263323,
  "status": "passed"
});
formatter.before({
  "duration": 3689548330,
  "status": "passed"
});
formatter.background({
  "line": 8,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Contexto"
});
formatter.step({
  "line": 9,
  "name": "que acesso a url \"https://opensource-demo.orangehrmlive.com/\"",
  "keyword": "Dado "
});
formatter.match({
  "arguments": [
    {
      "val": "https://opensource-demo.orangehrmlive.com/",
      "offset": 18
    }
  ],
  "location": "login.que_acesso_a_url(String)"
});
formatter.result({
  "duration": 4603047910,
  "status": "passed"
});
formatter.scenario({
  "line": 33,
  "name": "CT04_Login_com_usuario_em_branco",
  "description": "",
  "id": "testes-de-login;ct04-login-com-usuario-em-branco",
  "type": "scenario",
  "keyword": "Cenario",
  "tags": [
    {
      "line": 32,
      "name": "@CT04"
    }
  ]
});
formatter.step({
  "line": 34,
  "name": "que digito o usuario e senha",
  "rows": [
    {
      "cells": [
        "",
        "admin125"
      ],
      "line": 35
    }
  ],
  "keyword": "Dado "
});
formatter.step({
  "line": 36,
  "name": "clico em login",
  "keyword": "E "
});
formatter.step({
  "line": 37,
  "name": "valido a mensagem de erro \"Username cannot be empty\"",
  "keyword": "Entao "
});
formatter.match({
  "location": "login.digito_o_usuario_e_senha_corretamente(DataTable)"
});
formatter.result({
  "duration": 419061349,
  "status": "passed"
});
formatter.match({
  "location": "login.clico_em_login()"
});
formatter.result({
  "duration": 88064361,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Username cannot be empty",
      "offset": 27
    }
  ],
  "location": "login.valido_a_mensagem_de_erro(String)"
});
formatter.result({
  "duration": 110397903,
  "status": "passed"
});
formatter.write("Cenario Passou");
formatter.embedding("image/png", "embedded3.png");
formatter.after({
  "duration": 996259304,
  "status": "passed"
});
formatter.before({
  "duration": 3567816954,
  "status": "passed"
});
formatter.background({
  "line": 8,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Contexto"
});
formatter.step({
  "line": 9,
  "name": "que acesso a url \"https://opensource-demo.orangehrmlive.com/\"",
  "keyword": "Dado "
});
formatter.match({
  "arguments": [
    {
      "val": "https://opensource-demo.orangehrmlive.com/",
      "offset": 18
    }
  ],
  "location": "login.que_acesso_a_url(String)"
});
formatter.result({
  "duration": 7121854467,
  "status": "passed"
});
formatter.scenario({
  "line": 40,
  "name": "CT05_Login_com_usuario_e_senha_em_branco",
  "description": "",
  "id": "testes-de-login;ct05-login-com-usuario-e-senha-em-branco",
  "type": "scenario",
  "keyword": "Cenario",
  "tags": [
    {
      "line": 39,
      "name": "@CT05"
    }
  ]
});
formatter.step({
  "line": 41,
  "name": "que digito o usuario e senha",
  "rows": [
    {
      "cells": [
        "",
        ""
      ],
      "line": 42
    }
  ],
  "keyword": "Dado "
});
formatter.step({
  "line": 43,
  "name": "clico em login",
  "keyword": "E "
});
formatter.step({
  "line": 44,
  "name": "valido a mensagem de erro \"Username cannot be empty\"",
  "keyword": "Entao "
});
formatter.match({
  "location": "login.digito_o_usuario_e_senha_corretamente(DataTable)"
});
formatter.result({
  "duration": 129863716,
  "status": "passed"
});
formatter.match({
  "location": "login.clico_em_login()"
});
formatter.result({
  "duration": 69826441,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Username cannot be empty",
      "offset": 27
    }
  ],
  "location": "login.valido_a_mensagem_de_erro(String)"
});
formatter.result({
  "duration": 126028247,
  "status": "passed"
});
formatter.write("Cenario Passou");
formatter.embedding("image/png", "embedded4.png");
formatter.after({
  "duration": 973636914,
  "status": "passed"
});
});