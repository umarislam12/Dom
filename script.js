	
var database=[
{
	username:"andy",
	passsword:"111"
},{
	username:"sally",
	password:"123"
},{
	username:"ingrid",
	password:"777"
}

];
var newsfeed= [
			{username:"andrei",
			timeline:"fdfdfdfd"
			},{
					username:"and",
				timeline:"dadadad"

				},
				{
					username:"an",
				timeline:"jos"
				}
			];

			function isUserValid(username, password)
		{
		for(var i=0;i<database.length;i++){
		if(database[i].username===username&& 
			database[i].password===password)
			{
				return true;
			}
		else{
			alert("wrong username and password");
		    }
		   }
		   return false;	
	    }
	function signIn(username, password)
	{
		if(isUserValid(username, password))
			{
				console.log(newsfeed);
			}
		
	else{
		alert("sorr");
		}
	}

	/*if (database[0].username===username &&
	   database[0].password===password)
		{
			console.log(newsfeed);
		}else{

			alert("enter right username and password");
		}*/
	
var userNamePrompt=prompt("enter username?");
var passwordPrompt=prompt("enter password");


signIn(userNamePrompt, passwordPrompt);
