### The @RestController and @RequestMapping Annotations

``` java

import org.springframework.boot.*;
import org.springframework.boot.autoconfigure.*;
import org.springframework.web.bind.annotation.*;
@RestController
@EnableAutoConfiguration
public class Example {
  @RequestMapping("/")
  String home() {
  return "Hello World!";
}
  public static void main(String[] args) {
  SpringApplication.run(Example.class, args);
}

```
The @RestController. This is known as a stereotype annotation. It provides hints for people reading the code and for Spring that the class plays a specific
role. In this case, our class is a web @Controller, so Spring considers it when handling incoming
web requests.

The @RequestMapping annotation provides “routing” information. It tells Spring that any HTTP request
with the / path should be mapped to the home method. The @RestController annotation tells Spring
to render the resulting string directly back to the caller.

# The @EnableAutoConfiguration Annotation.

The @EnableAutoConfiguration. This annotation tells Spring Boot
to “guess” how you want to configure Spring, based on the jar dependencies that you have added. Since
spring-boot-starter-web added Tomcat and Spring MVC, the auto-configuration assumes that
you are developing a web application and sets up Spring accordingly.


You need to opt-in to auto-configuration by adding the @EnableAutoConfiguration or
@SpringBootApplication annotations to one of your @Configuration classes.

### Tip

You should only ever add one @SpringBootApplication or @EnableAutoConfiguration
annotation. We generally recommend that you add one or the other to your primary
@Configuration class only.


@Service
@Entity

https://www.baeldung.com/spring-boot-annotations


