class Rover {
   // Write code here!
   constructor(position) {
      //setting parameter to variables in constructor
      this.position = position;
      this.mode = "NORMAL";
      this.generatorWatts = 110;
      };

      receiveMessage(message) {
         let response = {
            message: message.name,
            results: []
         };
        // let results = [], //init structure for array/results

        for(let i = 0; i < message.commands.length; i++) {
         if(message.commands[i].commandType === "MOVE" && this.mode !== "LOW_POWER") {
            this.position = message.commands[i].value; //move command updates current position init
            let result = {
               completed: true //results object and true completed
            };
            response.results.push(result);
         }
         else if(message.commands[i].commandType === "STATUS_CHECK") {
            let result = {
               completed: true,
               roverStatus: {
                  mode: this.mode,
                  generatorWatts: this.generatorWatts,
                  position: this.position
               }
            };
            response.results.push(result);
         }
         else if(message.commands[i].commandType === "MODE_CHANGE") {
            this.mode = message.commands[i].value;
            let result = {
               completed: true
            };
            response.results.push(result);
         }
         else {
            let result = {
               completed: false
            };
            response.results.push(result);
         }
        }
        return response;
      }
   };










        ////ATTEMPT 2, NOT USING, TRYING AGAIN
//          //loop statement (for) to loop over each comm in comm array for msg obj
//             for (let i = 0; i > message.commands.length; i++) { //for loop setup
//                let command = message.commands[i];  //init command to message command loop, loop comm
//                let result = { completed: true };
//          //if else and else statements for diff comm types
//                if (command.commandType === "MODE_CHANGE") {
//                   this.mode = command.value; 
//                } else if (command.commandType === "MOVE") {
//                   if (this.mode === "LOW_POWER") {
//                      result.completed = false;
//                   } else {
//                      this.position = command.value;
//                   }
//                } else if (command.commandType === "STATUS_CHECK") {
//                   result.roverStatus = {
//                      mode: this.mode,
//                      generatorWatts: this.generatorWatts,
//                      position: this.position
//                   };
//                 }
//                 //push result array
//                 results.push(result);
//             }
//          //return and object with message.name and results array 
//          return {message: message.name, results: results}
//        };
//   };

//UNABLE TO FIX ISSUES BELOW, REBUILDING EASIER STRUCTURE DON'T USE~~~~~
//       receiveMessage(message) {
//       //declare output var (message) & init structure (results var array)
//       let responder = {
//       message: message.name,
//       results: []
//    }
//    //for multiple commands - address each separately, not sure if a better method exists
//    //breaks from while loop when none left
//    while (message.commands.length > 0) {
//       //if else statements for commands (move, low power, normal, status_check)
//       if ( message.commands[0].commandType == 'MOVE')
//          let moveObj = {};
//          if (this.mode === 'LOW_POWER') {
//             moveObj.completed = false;
//          } else if (this.mode === 'NORMAL') {
//             moveObj.completed = true;
//             //update position to command value
//             this.position = message.commands[0].value;
//          }
//          //push command object into results array, and splice the command
//          responder.results.push(moveObj);
//          message.commands.splice([0], 1)

//          } else if ( message.commands[0].commandType == 'STATUS_CHECK') {
//             let statObj = {
//                completed: true,
//             };
//             statObj.roverStatus = {
//                mode: this.mode,
//                generatorWatts: this.generatorWatts,
//                position: this.position
//             }
//             //push
//             responder.results.push(statObj);
//             message.commands.splice([0], 1)
//          } else if (message.commands[0].commandType == 'MODE_CHANGE') {
//             //mode updated to command value mode_change
//             this.mode = message.commands[0].value
//             let modeObj = {
//                completed: true
//             };
//             responder.results.push(modeObj);
//             message.commands.splice([0], 1)
//          }
//          return responder;
//    }
// }

//command class reference
// constructor(commandType, value) {
//    this.commandType = commandType;
//    if (!commandType) {
//      throw Error("Command type required.");
//    }
//    this.value = value;
//  }

module.exports = Rover;