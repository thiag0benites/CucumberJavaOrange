package br.com.bdd.config;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.After;
import cucumber.api.java.Before;

public class hooks {
	
	private static WebDriver driver;
	
	@Before
	public void ConfiguracaoInicial() {
		System.out.println("***************************************************");
		System.out.println("                 Iniciando Teste"                   );
		System.out.println("***************************************************");
		driver = new ChromeDriver();
		driver.manage().window().maximize();
	}
	
	@After
	public void FecharJanela() {
		System.out.println("***************************************************");
		System.out.println("                 Finalizando Teste"                 );
		System.out.println("***************************************************");
		driver.quit();	
	}
	
	public static WebDriver GetDriver() {
		return driver;
	}
}