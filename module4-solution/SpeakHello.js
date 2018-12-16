  // STEP 2: Wrap the entire contents of SpeakHello.js inside of an IIFE
// See Lecture 52, part 2


// STEP 3: Create an object, called 'speak' to which you will attach
// the "speak" method and which you will expose to the global context
// See Lecture 52, part 1
// var speak =

// DO NOT attach the speakWord variable to the 'speak' object.


// STEP 4: Rewrite the 'speak' function such that it is attached to the
// speak object instead of being a standalone function.
// See Lecture 52, part 2
// function speakHello(name) {
//   console.log(speakWord + " " + name);
// }

// STEP 5: Expose the 'speak' object to the global scope. Name it
// 'speak' on the global scope as well.
// See Lecture 52, part 2
// (Note, Step 6 will be done in the SpeakGoodBye.js file.)
// xxxx.xxxx = speak;
export class SpeakHello{
  constructor(name){
    this.name= name;
    this.speakWord = "Hello";
  }
  speak(){
    console.log(this.speakWord+ " " + this.name);
  }
}