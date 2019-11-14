## Whats new in spring 5

1. Support was dropped for Portlet, Velocity, JasperReports, XMLBeans, JDO, Guava,
   Tiles2, and Hibernate3.
   
2. Overall improvements were introduced by harnessing the full power of Java 8          features.

3. Full Servlet 3.1 signature support in Spring-provided Filter implementations.

4. Support for JMS 2.0+, JPA 2.1+.

5. Introduction of Spring Web Flow, a project that is an alternative to Spring MVC     built on a reactive foundation, which means that it is fully asynchronous and non-   blocking, intended for use in an event-loop execution model vs. traditional large     thread pool with a thread-per-request execution model (built upon Project Reactor).

6. There are a lot of improvements in the Spring test module. JUnit 5 is now
  supported, and new annotations were introduced to support the Jupiter
  programming and extension model such as @SpringJUnitConfig,
  @SpringJUnitWebConfig, @EnabledIf, @DisabledIf.

7. Support for parallel test execution in the Spring TestContext Framework.


## Inverting Control or Injecting Dependencies

The core of the Spring Framework is based on the principle of inversion of control. IoC is a technique that externalizes the creation and management of component dependencies. Consider an example in which class Foo depends on an instance of class Bar to perform some kind of processing. Traditionally, Foo creates an instance of Bar by using the new operator or obtains one from some kind of factory class. Using the IoC approach, an instance of Bar (or a subclass) is provided to Foo at runtime by some external process. This behavior, the injection of dependencies at runtime, led to IoC being renamed by Martin Fowler as the much more descriptive dependency injection (DI).


## Dependency injection (DI).

Spring’s DI implementation is based on two core Java concepts: JavaBeans and interfaces. When you
use Spring as the DI provider, you gain the flexibility of defining dependency configuration within your
applications in different ways (for example, XML files, Java configuration classes, annotations within your
code, or the new Groovy bean definition method). JavaBeans (POJOs) provide a standard mechanism for
creating Java resources that are configurable in a number of ways, such as constructors and setter methods.

## Spring Modules

