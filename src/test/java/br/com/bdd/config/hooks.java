package br.com.bdd.config;

import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;

public class hooks {
	
	private Scenario scenario;
	private static WebDriver driver;
	
	@Before
	public void ConfiguracaoInicial(Scenario scenario) {
		this.scenario = scenario;
		System.out.println("Executando cenario " + scenario.getName());
		System.out.println("***************************************************");
		System.out.println("                 Iniciando Teste"                   );
		System.out.println("***************************************************");
		driver = new ChromeDriver();
		driver.manage().window().maximize();
	}
	
	@After
	public void FecharJanela() {
		//Configura screenshot ao fim de cada cenario
		if(!scenario.isFailed()) {
			scenario.write("Cenario Passou");
		}
		else
		{
			scenario.write("Cenario Falhou");
		}
		
		scenario.embed(((TakesScreenshot)driver).getScreenshotAs(OutputType.BYTES), "image/png");
		
		System.out.println("***************************************************");
		System.out.println("                 Finalizando Teste                 ");
		System.out.println("***************************************************");
		driver.quit();	
	}
	
	public static WebDriver GetDriver() {
		return driver;
	}
}