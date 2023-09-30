// Event trigger

//get the elmts from HTML
let userInput=document.getElementById("name");
let addBtn=document.getElementById("addbtn");
let updateBtn=document.getElementById("updatebtn");
let cancelBtn=document.getElementById("cancelbtn");
let userData=[];
let editUserId=null;

let userList=document.getElementById("user-list-section");

//function to generate id
function uniqueId()
{
	let id = Math.random();
	return "Fab- "+id.toString().split(".")[1];
}

//get the iput from the user and push it into userData[]
function addUser()
{
	let data = {
				id:uniqueId(),
				userName:userInput.value
			  }
			  userData.push(data);
			  userInput.value = "";
			  addUserItems(userData);	//data object' valuse passed as  an arguments to  addUserItems()function
}

//to maintain added user' List
function addUserItems(data)
{
	userList.innerHTML= "";
	
	let createUser = data.map(function(value,index)
						{
							return `<div class="user-items">
										<h3 id="disp-name">${value.userName}</h3>		
										<button class="editbtn" onclick="editUser('${value.id}')"> Edit </button>
										<button class="deletebtn" onclick="deleteUser('${value.id}')"> Delete </button>
									</div>`
						}).join("");
		userList.innerHTML = createUser;
}

//to delete the username by id
function deleteUser(id)
{
	let updateUserData = userData.filter(function(item)
									{
										return item.id !== id;
									});
		userData = updateUserData;
		
		addUserItems(userData);
}

//to edit the username by id
function editUser(id)
{
	let updateName = userData.find(function(items){
			if(items.id==id){
				userInput.value=items.userName ;
				editUserId=id;
			}
		});
					
	updateBtn.classList.add("activebutton");
	cancelBtn.classList.add("activebutton");
	addBtn.classList.add("hidebutton");
}

//to update 
function updateUser(data)
{
	userData.map(function(item,index)
							{
								if(item.id == editUserId)
								{
									item.userName = userInput.value;
								}
							});
			userInput.value="";
			// console.log(userData);
			addUserItems(userData);
			updateBtn.classList.remove("activebutton");
	cancelBtn.classList.remove("activebutton");
	addBtn.classList.remove("hidebutton");
	addBtn.classList.add("activebuttonbutton");
}

//to cancel the username by id	
function cancelUser(id)
{
	userInput.value="";  
	updateBtn.classList.remove("activebutton");
	cancelBtn.classList.remove("activebutton");
	addBtn.classList.remove("hidebutton");
	addBtn.classList.add("activebuttonbutton");
}	
									

addBtn.addEventListener("click",addUser);
updateBtn.addEventListener("click",updateUser);
cancelBtn.addEventListener("click",cancelUser);