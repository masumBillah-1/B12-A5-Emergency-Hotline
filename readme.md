##  Questions & Answers

### Q. 1. What is the difference between `getElementById`, `getElementsByClassName`, and `querySelector` / `querySelectorAll`?
`Ans:`
* **getElementByID** Gets the Element with a specific **id**.
* **getelementsByClassName** Gets all elements with a Specified class name and **return HTMLCollection**.
* **querySelector** Grabs the first Element with a **Css Selector**.
* **querySelectorAll** Gets All elements with CSS Selector and **Return Nodelist**.


### Q. 2. How do you create and insert a new element into the DOM?
`Ans:`
* A new element created using `document.createElement('div')`.
* Text and attributes can be added.
* Finally it is added to the parent with `appendchild()` or `append()`

### Q. 3. What is Event Bubbling and how does it work?
`Ans:`
* The event first acts on that element. Then it propagates up step by step from `parent - grandparent - root`. this is called event  Bubbling.

### Q. 4. What is Event Delegation in JavaScript? Why is it useful?
`Ans:`
* Event Delegation is the process of capturing the event of child element by placing an event on the parent element.
* No need to set a separate event for child elements.
* performance is better.
* It is also easier to catch events of elements addded to the DOM later.

### Q. 5 What is the difference between `preventDefault`() and `stopPropagation()` methods?
`Ans:`
* `preventDefault()` - stops the element's default behavior.
* `stopPropagation()`-Turns off event bubbing events will not go to the parent element.



