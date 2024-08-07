const Rover = require('../rover.js');
const Message = require('../message.js');
const Command = require('../command.js');

// NOTE: If at any time, you want to focus on the output from a single test, feel free to comment out all the others.
//       However, do NOT edit the grading tests for any reason and make sure to un-comment out your code to get the autograder to pass.


describe("Rover class", function() {
//test 7
  it("constructor sets position and default values for mode and generatorWatts", function() {
    let roverObject = new Rover("position", "NORMAL", 110)
      expect(roverObject.position).toEqual("position");
      expect(roverObject.mode).toEqual("NORMAL");
      expect(roverObject.generatorWatts).toEqual(110);
//     let mode = "NORMAL";
// //      expect(Rover.mode).ToBe("NORMAL"); //can I use expect here to check, or is let init fine?
//     let generatorWatts = 110;
//      expect(Rover.generatorWatts).ToBe(110);
})
//test 8
  it("response returned by receiveMessage contains the name of the message", function() {
    let command = new Command("MODE_CHANGE", "NORMAL"); //init command from command.js
    let message = new Message("TA Power", command); //init message from message.js
    let rover = new Rover(); //init rover class 
    let response = rover.receiveMessage(message); //init response to received message within rover class

    expect(response.message).toEqual("TA Power"); //expect exact response from rover message "TA Power"
  });
  
  //test 9
   it("response returned by receiveMessage includes two results if two commands are sent in the message", function() {

   })

  // it("response returned by receiveMessage includes two results if two commands are sent in the message", function() {
  //   let rover = Rover();
  //   let response = rover.receiveMessage(message);
  //   expect(response.results).toHaveLength(2);
  // })
  // 7 tests here!

});

//reference for previous tests from message
// describe("Message class", function() {
//   it("throws error if a name is NOT passed into the constructor as the first parameter", function() {
//       expect( function() { new Message();}).toThrow(new Error('Name is required'));
//       //  expect( function() { new Command();}).toThrow(new Error('Command type required.'));
//   })
//   it("constructor sets name", function() {
//           let messageType = new Message('test name');
//          expect(messageType.name).toBe('test name');
//       })
//   it("contains a commands array passed into constructor as the 2nd argument", function() {
//           let commands = [new Command('MODE_CHANGE', 'LOW_POWER'), new Command('STATUS_CHECK')];
//           let testMess = new Message('test name', commands)
//           expect(testMess.commands).toStrictEqual(commands); //is this it? not sure what to expect here
//   })
//   })