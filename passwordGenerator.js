function randomPassword() {
	var length = 4;
    	var charsSpecial = "!@#$%^&*()-+<>";
    	var charsCaps   = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    	var charsNums    = "1234567890";
    
    	//generate a random base password
    	var pass = Math.random().toString(36).slice(-8);
    
  	//now insert a random character at a random point in the string
  	//
  	var randSpec = charsSpecial[Math.floor((Math.random() * (charsSpecial.length - 1)) + 1)] ? charsSpecial[Math.floor((Math.random() * (charsSpecial.length - 1)) + 1)] : 0;
  	var randSpecPos = Math.floor((Math.random() * (pass.length - 1)) + 1);
  	var piece1 = pass.substring(0, randSpecPos);
  	var piece2 = pass.substring(randSpecPos);
  	pass = piece1 + randSpec + piece2;

  	//now insert a random capital letter at a random point in the string
  	//
  	var randCaps = charsCaps[Math.floor((Math.random() * (charsCaps.length - 1)) + 1)] ? charsCaps[Math.floor((Math.random() * (charsCaps.length - 1)) + 1)] : 0;
  	var randCapsPos = Math.floor((Math.random() * (pass.length - 1)) + 1);
  	var piece1 = pass.substring(0, randCapsPos);
  	var piece2 = pass.substring(randCapsPos);
  	pass = piece1 + randCaps + piece2;

  	//now insert a random number at a random point in the string
  	//
  	var randNum = charsNums[Math.floor((Math.random() * (charsNums.length - 1)) + 1)] ? charsNums[Math.floor((Math.random() * (charsNums.length - 1)) + 1)] : 0;
  	var randNumPos = Math.floor((Math.random() * (pass.length - 1)) + 1);
  	var piece1 = pass.substring(0, randNumPos);
  	var piece2 = pass.substring(randNumPos);
  	pass = piece1 + randNum + piece2;

    return pass;
}
