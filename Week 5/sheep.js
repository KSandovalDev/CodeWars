// https://www.codewars.com/kata/54edbc7200b811e956000556




function countSheeps(arrayOfSheep) {
    //  Parameter - array of Sheep
    //  Return - # of true 
    // Example 
    // Pseudo
      
    //   use a four loop and loop through the array of booleans
      
      
      let array = [];
      for(let i = 0; i <= arrayOfSheep.length; i++){
          if(arrayOfSheep[i] === true){
              array.push([i])
          }
      }return array.length
    }
