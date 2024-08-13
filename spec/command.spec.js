const Command = require('../command.js');

// NOTE: If at any time, you want to focus on the output from a single test, feel free to comment out all the others.
//       However, do NOT edit the grading tests for any reason and make sure to un-comment out your code to get the autograder to pass.


//first three tests - commmand class, commandtype check, command value check - setting as moveCommand and testValue 

describe("Command class", function() {

  it("throws error if command type is NOT passed into constructor as the first parameter", function() {
    expect( function() { new Command();}).toThrow(new Error('Command type required.'));
  });

  //test is checking that when a new command class is started and we pass in "MOVE" that the "commandType" (based on example from reading)
  it("constructor sets command type", function() {
    let moveCommand = new Command('MOVE', 12000);
   expect(moveCommand.commandType).toBe('MOVE');
})
  //test is checking that when a value is passed to command class, the value is 12000 here for testValue.value (based on example from reading)
  it("constructor sets a value passed in as the 2nd argument", function() {
    let testValue = new Command('MOVE', 12000);
    expect(testValue.value).toBe(12000);
})

});