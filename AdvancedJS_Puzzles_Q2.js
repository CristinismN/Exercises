//Q2 Write a javascript function that takes an array of numbers and a target number. 
//The function should find two different numbers in the array that, when added together, 
//give the target number. For example: answer([1,2,3], 4)should return [1,3]


const answer = (array,inputNumber) => {
	var outputArray = [];
	var counter=0;
	array.forEach((number1,index1) => {
		//debugger;
		var currentNum=array[index1];
		var currentIndex=index1;
		array.forEach((number2,index2) => {
			if (currentNum+array[index2]===inputNumber && index2!=currentIndex) {
				// created sorted array with sum pair
				let tempArray = [];
				if (currentNum < array[index2]) 
				{
					tempArray = [currentNum, array[index2]];
				}
				else {
					tempArray = [array[index2], currentNum];
				}				
				// add sum pair to output if not already found
				for (item of outputArray) {
					// only check first number of the pair
					if (item[0]===tempArray[0]) {
						counter++;
						break;		
					}			
				}
				if (counter===0) {
					outputArray.push(tempArray);
				}
				counter=0;
				
			}
		});
	});	
	return outputArray;
}
answer([1,2,3,3,1,5,9,1,0,-5], 4);
