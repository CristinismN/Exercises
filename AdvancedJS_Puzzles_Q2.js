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
				if (outputArray.length===0) {
					if (currentNum < array[index2]) 
					{
						outputArray.push([currentNum, array[index2]]);
					}
					else {
						outputArray.push([array[index2]], currentNum);
					}
					
				}
				else {
					for (item of outputArray) {
						if (item[0]===currentNum || item[0]===array[index2]) {
							counter++;
							break;		
						}			
					}
					if (counter===0){
						outputArray.push([currentNum, array[index2]]);
					}
					counter=0;
				}
			}
		});
	});	
	return outputArray;
}
answer([1,2,3,3,1,5,9,1,0,-5], 4);
