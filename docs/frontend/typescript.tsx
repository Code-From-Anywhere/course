import type { NextPage } from "next";

const TypescriptScreen: NextPage = () => {
  //primitive types, string literals, operators, comparisons, typeof and creating your own types

  /*
  This is how you declare variables. Variables can be constant, or they can be flexible.
  */
  const numberA = 1; //  To declare a constant value we use "const". We are declaring a number here.
  let numberB = 2; // To declare a variable we later want to change, we can use "let". Again, we are declaring a number.

  const sum = numberA + numberB; // what is the result?
  /*
  + is called arithmetic operator. 
  You can also use other ones... arithmetic operators: 
  - (subtraction)
  * (multiplication)
  / (division)
  % (modulus)
  ++ (increment)
  -- (decrement)
  */

  const typedSum: number = numberA + numberB;
  // here we have done the exact same as above,
  // only we have specifically told the compiler that the variable must be a number.
  // you can always do that in typescript if you want to be more explicit,
  // but most of the time, it's inferred automatically for you. Typescript 'just knows' ;)

  // usually, you're never that explicit... but I want to explalin these primitives to you.
  // The primitive types that typescript offers
  // we have the following types by default in typescript:
  // string, number, boolean, null, undefined, any, void, array, object

  //these are two ways to create strings.
  const text: string = "The result is"; //normal string
  const text2: string = `The result is ${sum}... ok?`; //template string (using backticks) can also include variables.

  const isLoaded: boolean = true; // booleans can be true or false

  const nothing: null = null; // this can only be null
  const alsoNothing: undefined = undefined; // this can only be undefined.
  //what's the difference?

  const something: any = "hmmm"; // any can hold any value.

  const returnNothing = (): void => {}; //here, I've created a function that returns nothing. It returns void

  const sampleArray = [text, text2];
  //can you guess the type of this?
  //right, it's a string[], a string array. It can also be written like this: Array<string>

  // This is how you create objects. Objects have keys and values.
  // Keys are mostly strings, and values can be anything!
  const textsObject = {
    text,
    text2,
  };

  /* 
  below you can find three ways to log something. 
  console.log is a function that takes any amount of arguments. 
  These arguments can have any value. 
  Those values will then be printed to your debugger
  */
  console.log("The result is", sum); // here we give the console.log function two arguments.
  console.log(text2); // here we give the console.log function one argument. It's
  console.log({ sum });

  return (
    <div>
      Let's learn typescript!
      <div>
        <p>
          {numberA} + {numberB} = {sum}
        </p>
      </div>
    </div>
  );
};

export default TypescriptScreen;

/**
 * All right!
 *
 * There's a lot happening. Have you read it?
 * Then save this, and try to go to this page by clicking the link on the homepage.
 *
 * Have a look what it does, and then go back to the course.
 */
