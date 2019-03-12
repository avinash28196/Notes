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
