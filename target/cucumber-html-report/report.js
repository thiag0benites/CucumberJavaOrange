$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("login.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#language: pt"
    }
  ],
  "line": 3,
  "name": "Testes basicos no google",
  "description": "Este arquivo contempla testes do google",
  "id": "testes-basicos-no-google",
  "keyword": "Funcionalidade",
  "tags": [
    {
      "line": 2,
      "name": "@orange"
    }
  ]
});
formatter.before({
  "duration": 12738124510,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Contexto"
});
formatter.step({
  "line": 7,
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
  "duration": 4216070756,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "CT01_busca_google",
  "description": "",
  "id": "testes-basicos-no-google;ct01-busca-google",
  "type": "scenario",
  "keyword": "Cenario",
  "tags": [
    {
      "line": 9,
      "name": "@CT01"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "digito o usuario e senha corretamente",
  "rows": [
    {
      "cells": [
        "Admin",
        "admin123"
      ],
      "line": 12
    }
  ],
  "keyword": "Dado "
});
formatter.step({
  "line": 13,
  "name": "clico em login",
  "keyword": "E "
});
formatter.step({
  "line": 14,
  "name": "acesso o sistema com sucesso",
  "keyword": "Entao "
});
formatter.match({
  "location": "login.digito_o_usuario_e_senha_corretamente(DataTable)"
});
formatter.result({
  "duration": 255809651,
  "status": "passed"
});
formatter.match({
  "location": "login.clico_em_login()"
});
formatter.result({
  "duration": 1576412209,
  "status": "passed"
});
formatter.match({
  "location": "login.acesso_o_sistema_com_sucesso()"
});
formatter.result({
  "duration": 116112970,
  "status": "passed"
});
formatter.after({
  "duration": 811976342,
  "status": "passed"
});
});