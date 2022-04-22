# The Factory Pattern

<img src="/public/factory-pattern.png" alt="Factory Pattern Structure"/>


The "Factory" is a **Creational** Design Pattern used when you don’t know beforehand the exact types and dependencies of the objects your code should work with, and/or when you want to provide users of your library or framework with a way to extend its internal components.

"The Factory Method pattern suggests that you replace direct object construction calls (using the new operator) with calls to a special factory method. Don’t worry: the objects are still created via the new operator, but it’s being called from within the factory method. Objects returned by a factory method are often referred to as products." - [Refactoring Guru](https://refactoring.guru/design-patterns/factory-method).

=======================================================================

**Structure**

<img src="/public/factory-uml.png" alt="Factory Pattern UML Diagram"/>

The **Creator** class declares the factory method that returns new product objects. It’s important that the return type of this method matches the product interface.

You can declare the factory method as abstract to force all subclasses to implement their own versions of the method. As an alternative, the base factory method can return some default product type.

**Concrete Creators** override the base factory method so it returns a different type of product.

The **Product** declares the interface, which is common to all objects that can be produced by the creator and its subclasses.

**Concrete Products** are different implementations of the product interface.

=======================================================================

**Benefits**

- You avoid tight coupling between the creator and the concrete products.
- Single Responsibility Principle. You can move the product creation code into one place in the program, making the code easier to support.
- Open/Closed Principle. You can introduce new types of products into the program without breaking existing client code.
