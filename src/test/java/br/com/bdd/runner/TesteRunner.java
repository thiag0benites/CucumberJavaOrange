package br.com.bdd.runner;


import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features= {"src/test/resources/features/"}, //Caminho dos arquivos features
		plugin = {"pretty", "html:target/cucumber-html-report", "json:target/cucumber-json-report/cucumber.json"}, //Cria e aponta onde o relatório será salvo
		glue= {""} //Responsavel pela execução via junit
		/*monochrome = true, 
		dryRun = false*/
		)

public class TesteRunner {
	
}
