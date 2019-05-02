https://dzone.com/articles/7-things-to-know-getting-started-with-spring-boot

## What is springboot and spring framework?


## Spring boot
Spring Boot is not a Framework, it is Spring's convention-over-configuration solution for creating stand-alone, production-grade Spring-based Applications.

Spring Boot builds on top of Spring Framework, and it makes it easier to use Spring Framework. Over time Spring had grown to be this incomprehensible mess of loosely connected building blocks. Building loosely connected building blocks is a great idea except when you have hundreds of them and it’s hard for anyone to keep track of which building block should be used when. Spring Boot cleans up the mess, and provides an easier way of connecting the building blocks together.

## Why use spring boot.

**Faster developement of project**

* Opinionated ‘starter’ dependencies to simplify build and application configuration
* Embedded server to avoid complexity in application deployment. Metrics, Health check, and externalized configuration.

**Spring boot for productivity** 
* If you are starting a project from scratch, it’s better to use Spring Boot. It provides boilerplate code, configuration and annotation configuration to quick start new spring projects within no time. 
* Spring Boot automatically configures required classes depending on the libraries on its classpath.

**Ease of integration** 
* Spring Boot leverages existing spring projects as well as Third party projects to develop production ready applications. 
* It provides a set of Starter Pom’s or gradle build files which one can use to add required dependencies and also facilitate auto configuration.

Spring Boot provides a number of starter dependencies for different Spring modules. Some of the most commonly used ones are:

1. spring-boot-starter-web
2. spring-boot-starter-security
3. spring-boot-starter-data-jpa
4. spring-boot-starter-test
5. spring-boot-starter-thymeleaf


## Spring framework
The Spring Framework is an application framework and inversion of control container for the Java platform.
One could develope anything using Spring Framework that can be achieved by Spring Boot.

Spring framework is a Injection dependency framework at first (it's still as it is today) targeting managing life-cycle of Java components (what so-called beans). Today, Spring framework is pretty bloated with tons facilities/helpers on top of it; but if you look at the big picture, it's still a framework that glue things together, a middle man to MVC frameworks (Struts 1,2, JSF etc), ORM frameworks (Hibernate, iBatis, JOOQ etc) and other necessary facilities (Quartz, Email, 

### Features
* Core technologies: dependency injection, events, resources, i18n, validation, data binding, type conversion, SpEL, AOP.

* Testing: mock objects, TestContext framework, Spring MVC Test, WebTestClient.

* Data Access: transactions, DAO support, JDBC, ORM, Marshalling XML.

* Spring MVC and Spring WebFlux web frameworks.

* Integration: remoting, JMS, JCA, JMX, email, tasks, scheduling, cache.

* Languages: Kotlin, Groovy, dynamic languages.

7.1. How Spring Bootstraps?
Spring supports both the legacy web.xml way of bootstrapping as well as the latest Servlet 3+ method.

Let’s see the web.xml approach in steps:

Servlet container (the server) reads web.xml
The DispatcherServlet defined in the web.xml is instantiated by the container
DispatcherServlet creates WebApplicationContext by reading WEB-INF/{servletName}-servlet.xml
Finally, the DispatcherServlet registers the beans defined in the application context
Here’s how Spring bootstraps using Servlet 3+ approach:

The container searches for classes implementing ServletContainerInitializer  and executes
The SpringServletContainerInitializer finds all classes implementing WebApplicationInitializer
The WebApplicationInitializer creates the context with XML or @Configuration classes
The WebApplicationInitializer creates the DispatcherServlet with the previously created context.

7.2. How Spring Boot Bootstraps?
The entry point of a Spring Boot application is the class which is annotated with @SpringBootApplication:

```java
@SpringBootApplication
public class Application {
    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }
}
```
By default, Spring Boot uses an embedded container to run the application. In this case, Spring Boot uses the public static void main entry-point to launch an embedded web server.

Also, it takes care of the binding of the Servlet, Filter, and ServletContextInitializer beans from the application context to the embedded servlet container.

Another feature of Spring Boot is that it automatically scans all the classes in the same package or sub packages of Main-class for components.

Spring Boot provides the option of deploying it as a web archive in an external container as well. In this case, we have to extend the SpringBootServletInitializer:

```java
@SpringBootApplication
public class Application extends SpringBootServletInitializer {
    // ...
}
```

Here the external servlet container looks for the Main-class defined in the META-INF file of the web archive and the SpringBootServletInitializer will take care of binding the Servlet, Filter, and ServletContextInitializer.


# What is Spring?

The Spring framework provides complete infrastructure support for developing Java applications.

# How SpringBoot Works Internally

Spring Boot is an implementation of microservice architecture. This is “an architectural style that structures an application as a collection of loosely coupled services, which implement business capabilities.
The Spring Boot framework is designed for this type of implementation where it is a “framework that pulls together a number of common application frameworks (mostly the various spring frameworks) for writing enterprise Java code, providing a quick way to write an enterprise application and deploy it as a single executable jar. 



The magic behind this framework lies in the @EnableAutoConfiguration annotation, which will automatically load all the beans the application requires depending on what Spring Boot finds in the classpath.

## The @Enable* annotations

The @Enable... annotations are not new, they were first introduced in Spring 3 when the idea of replacing the XML files with java annotated classes is born.

A lot of Spring users already know @EnableTransactionManagement, which will enable declarative transaction management, @EnableWebMvc, which enables Spring MVC, or @EnableScheduling, which will initialize a scheduler.

These annotations are in fact a simple configuration import with the @Import annotation.


1. How are Beans getting created (BeanFactory or ApplicationContext)?

When SpringApplication.run() command is invoked, the Application Context is created by calling the method below:

```java
public ConfigurableApplicationContext run(String... args) { 
    // Create, load, refresh, and run the ApplicationContext
    context = createApplicationContext();            
    return context ; // handle to the context object for the developer
}
```


2. How are the beans created once the context is initialized?

When the constructor of the context is invoked, it will register the annotated class beans with the context. That's why no XML configurations are required. All your @Repository, @Component, @Service, and Controller beans will be registered and the context is returned. The following lines of code are executed for context initialization and bean creation for a web application.

```
public AnnotationConfigEmbeddedWebApplicationContext(Class<?>... annotatedClasses) {
    this();
    register(annotatedClasses);
    refresh(); // Refreshing org.springframework.boot.context.embedded. This log appears in the console
}
```


Key Components of Spring Boot Framework
Spring Boot Framework has mainly four major Components.

Spring Boot Starters
Spring Boot AutoConfigurator
Spring Boot CLI
Spring Boot Actuator




Spring Boot Starter
Spring Boot Starters is one of the major key features or components of Spring Boot Framework. The main responsibility of Spring Boot Starter is to combine a group of common or related dependencies into single dependencies. We will explore this statement in detail with one example.

For instance, we would like to develop a Spring WebApplication with Tomcat WebServer. Then we need to add the following minimal jar dependencies in your Maven’s pom.xml file or Gradle’s build.gradle file

Spring core Jar file(spring-core-xx.jar)
Spring Web Jar file(spring-web-xx.jar)
Spring Web MVC Jar file(spring-webmvc-xx.jar)
Servlet Jar file(servlet-xx.jar)
If we want to add some database stuff, then we need to add database related jars like Spring JDBC jar file, Spring ORM jar files,Spring Transaction Jar file etc.

Spring JDBC Jar file(spring-jdbc-xx.jar)
Spring ORM Jar file(spring-orm-xx.jar)
Spring Transaction Jar file(spring-transaction-xx.jar)

3. What about the embedded Tomcat?

Starting an embedded Tomcat is as easy as instantiating the Tomcat class. In Caseof spring boot its built into it.


Include the following dependencies in Maven  POM.xml


```
<dependency>
    <groupId>org.apache.tomcat.embed</groupId>
    <artifactId>tomcat-embed-core</artifactId>
    <version>${tomcat.version}</version>
</dependency>
```
