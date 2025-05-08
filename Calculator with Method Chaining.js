/* Design a Calculator class. The class should provide the mathematical operations of addition, subtraction,
multiplication, division, and exponentiation. It should also allow consecutive operations to be performed
using method chaining. The Calculator class constructor should accept a number which serves as the 
initial value of result. Your Calculator class should have the following methods:
add - This method adds the given number value to the result and returns the updated Calculator.
subtract - This method subtracts the given number value from the result and returns the updated 
Calculator.
multiply - This method multiplies the result  by the given number value and returns the updated 
Calculator.
divide - This method divides the result by the given number value and returns the updated Calculator. 
If the passed value is 0, an error "Division by zero is not allowed" should be thrown.
power - This method raises the result to the power of the given number value and returns the updated 
Calculator.
getResult - This method returns the result.
Solutions within 10-5 of the actual result are considered correct. */
class Calculator {    
    /** 
     * @param {number} value
     */
    constructor(value) {
        this.result = value;
    }
    // All function are returning this because it allows you to do chain actions
    /** 
     * @param {number} value
     * @return {Calculator}
     */
    add(value){
        this.result += value;
        return this;
    }
    
    /** 
     * @param {number} value
     * @return {Calculator}
     */
    subtract(value){
        this.result -= value;
        return this;
    }
    
    /** 
     * @param {number} value
     * @return {Calculator}
     */  
    multiply(value) {
        this.result *= value;
        return this;
    }
    
    /** 
     * @param {number} value
     * @return {Calculator}
     */
    divide(value) {
        if (value === 0) {
        throw new Error('Division by zero is not allowed');
        }
        this.result /= value;
        return this;      
    }
    
    /** 
     * @param {number} value
     * @return {Calculator}
     */
    power(value) {
        this.result **= value;
        return this;
    }
    
    /** 
     * @return {number}
     */
    getResult() {
        return this.result;
    }
}

/* In JavaScript, method chaining is a technique that involves calling multiple methods in a single 
statement. This is possible when each method returns an object, allowing the calls to be chained 
together. The fundamental principle behind method chaining is that each method returns an object, and 
then another method is called on that object.this is a special keyword that refers to the context in 
which a function is called. In the case of a method being called on an object (like our Calculator class
methods), this refers to the object itself. This allows the methods to access and modify the object's
properties. In the Calculator class, using this in the add, subtract, multiply, divide, and power 
methods allows us to maintain and manipulate the result property. */