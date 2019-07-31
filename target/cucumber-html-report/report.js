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
  "duration": 11475913728,
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
  "duration": 6515797614,
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
  "name": "digito o usuario e senha",
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
  "duration": 368781146,
  "status": "passed"
});
formatter.match({
  "location": "login.clico_em_login()"
});
formatter.result({
  "duration": 6033844478,
  "status": "passed"
});
formatter.match({
  "location": "login.acesso_o_sistema_com_sucesso()"
});
formatter.result({
  "duration": 92810555,
  "status": "passed"
});
formatter.after({
  "duration": 966582189,
  "status": "passed"
});
formatter.before({
  "duration": 3655043086,
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
  "duration": 6054002020,
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
  "name": "digito o usuario e senha",
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
  "duration": 258235609,
  "status": "passed"
});
formatter.match({
  "location": "login.clico_em_login()"
});
formatter.result({
  "duration": 902737387,
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
  "duration": 150867039,
  "status": "passed"
});
formatter.after({
  "duration": 739101312,
  "status": "passed"
});
formatter.before({
  "duration": 3788899722,
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
  "duration": 4535849433,
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
  "name": "digito o usuario e senha",
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
  "duration": 263547419,
  "status": "passed"
});
formatter.match({
  "location": "login.clico_em_login()"
});
formatter.result({
  "duration": 130518819,
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
  "duration": 110516840,
  "status": "passed"
});
formatter.after({
  "duration": 785327050,
  "status": "passed"
});
formatter.before({
  "duration": 3677319990,
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
  "duration": 3862790822,
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
  "name": "digito o usuario e senha",
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
  "duration": 228410859,
  "status": "passed"
});
formatter.match({
  "location": "login.clico_em_login()"
});
formatter.result({
  "duration": 94585941,
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
  "duration": 101111674,
  "status": "passed"
});
formatter.after({
  "duration": 713318945,
  "status": "passed"
});
formatter.before({
  "duration": 3727361562,
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
  "duration": 6494166373,
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
  "name": "digito o usuario e senha",
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
  "duration": 230163968,
  "status": "passed"
});
formatter.match({
  "location": "login.clico_em_login()"
});
formatter.result({
  "duration": 111759082,
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
  "duration": 95518188,
  "status": "passed"
});
formatter.after({
  "duration": 721454684,
  "status": "passed"
});
});