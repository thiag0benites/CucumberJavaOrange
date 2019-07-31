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
  "duration": 4935662455,
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
  "duration": 4998999032,
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
  "duration": 234046257,
  "status": "passed"
});
formatter.match({
  "location": "login.clico_em_login()"
});
formatter.result({
  "duration": 1406661209,
  "status": "passed"
});
formatter.match({
  "location": "login.acesso_o_sistema_com_sucesso()"
});
formatter.result({
  "duration": 100963285,
  "status": "passed"
});
formatter.write("Cenario Passou");
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 2262105437,
  "status": "passed"
});
formatter.before({
  "duration": 3651343169,
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
  "duration": 4176584085,
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
  "duration": 205275336,
  "status": "passed"
});
formatter.match({
  "location": "login.clico_em_login()"
});
formatter.result({
  "duration": 919554847,
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
  "duration": 106279249,
  "status": "passed"
});
formatter.write("Cenario Passou");
formatter.embedding("image/png", "embedded1.png");
formatter.after({
  "duration": 974799863,
  "status": "passed"
});
formatter.before({
  "duration": 3579771926,
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
  "duration": 3208277860,
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
  "duration": 162517302,
  "status": "passed"
});
formatter.match({
  "location": "login.clico_em_login()"
});
formatter.result({
  "duration": 80199348,
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
  "duration": 91624950,
  "status": "passed"
});
formatter.write("Cenario Passou");
formatter.embedding("image/png", "embedded2.png");
formatter.after({
  "duration": 957480221,
  "status": "passed"
});
formatter.before({
  "duration": 3660018849,
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
  "duration": 5068441851,
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
  "duration": 200090393,
  "status": "passed"
});
formatter.match({
  "location": "login.clico_em_login()"
});
formatter.result({
  "duration": 90231676,
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
  "duration": 84990096,
  "status": "passed"
});
formatter.write("Cenario Passou");
formatter.embedding("image/png", "embedded3.png");
formatter.after({
  "duration": 975524819,
  "status": "passed"
});
formatter.before({
  "duration": 3734901855,
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
  "duration": 4527700479,
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
  "duration": 173695212,
  "status": "passed"
});
formatter.match({
  "location": "login.clico_em_login()"
});
formatter.result({
  "duration": 95708867,
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
  "duration": 102181739,
  "status": "passed"
});
formatter.write("Cenario Passou");
formatter.embedding("image/png", "embedded4.png");
formatter.after({
  "duration": 974031485,
  "status": "passed"
});
});