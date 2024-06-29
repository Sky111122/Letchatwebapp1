function logOut() {
  alert('Hello World! 123');
}

function addUser() {
  var user_name = document.getElementById('user_name').value;
  localStorage.setItem("userName", user_name);

  //var getUserName = localStorage.getItem("userName");
  //alert(getUserName);
}