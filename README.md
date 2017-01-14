# lecture-21-Part-1-2-CustomServiceswithfactory-
Lecture 21, Part 1: Custom Services with .factory()
- .factory() allows us to produce any tye of object or function.
	- that includes a service (even a singleton), but is NOT limited to.
	- .service() is just a more limited factory.
- .factory('name', FactoryFunction) - name is whats injected.
- Injected factory function refers to whatever is returned in the factory function.
	- Can be object literal with a prop that's a function that creates something.
	- can be a function that creates something.
  
  - Factory Design Pattern
	- Central place that produces new objects or functions.
	- can produce any type of object, not just a singleton.
	- can be used to produce dynamically customizable services. 	
	
- Factory vs Service confusion
	- .factory() is not just another way of creating the same service you can create with .service() but it can be.
	- .service() is also a factory, but a much more limited one compared to .factory(). It's a factory that always produces the same type of service - a singleton,
		without an easy way to configure it's behavior.
