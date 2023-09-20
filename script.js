const sampleObject = { red: "#FF0000", green: "#00FF00", white: "#FFFFFF" };

function hasKey(myKey) {
  //   write your code here
	
	for(let key in sampleObject){
    if(key === myKey){
        return true
    }else{
        false
    }
  }
}


// Do not change the code below
const key = prompt("Enter Key.");
alert(hasKey(key));
