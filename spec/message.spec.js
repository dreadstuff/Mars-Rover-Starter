const Message = require('../message.js');
const Command = require('../command.js');

// NOTE: If at any time, you want to focus on the output from a single test, feel free to comment out all the others.
//       However, do NOT edit the grading tests for any reason and make sure to un-comment out your code to get the autograder to pass.

describe("Message class", function() {
    it("throws error if a name is NOT passed into the constructor as the first parameter", function() {
        expect( function() { new Message();}).toThrow(new Error('Name is required'));
        //  expect( function() { new Command();}).toThrow(new Error('Command type required.'));
        //  pulled example from reading/exercises, quick throw error test
    })

    it("constructor sets name", function() { //setting name for Message Class, ensuring it returns the name correctly
            let messageType = new Message('test name');
           expect(messageType.name).toBe('test name');
        })

        //pulled format from task 3 instructions, checks for 
    it("contains a commands array passed into constructor as the 2nd argument", function() {
            let commands = [new Command('MODE_CHANGE', 'LOW_POWER'), new Command('STATUS_CHECK')];
            let testMess = new Message('test name', commands)
            expect(testMess.commands).toStrictEqual(commands); //is this it? not sure what to expect here - pulled expect from https://jestjs.io/docs/expect#tostrictequalvalue
    })
    })

    //not using below
//    it("constructor sets name", function() {

//Reference command.spec.js
// it("throws error if command type is NOT passed into constructor as the first parameter", function() {
//     expect( function() { new Command();}).toThrow(new Error('Command type required.'));
//   });

//   it("constructor sets command type", function() {
//     let moveCommand = new Command('MOVE', 12000);
//    expect(moveCommand.commandType).toBe('MOVE');
// })
//   it("constructor sets a value passed in as the 2nd argument", function() {
//     let testValue = new Command('MOVE', 12000);
//     expect(testValue.value).toBe(12000);

//    })


//});
