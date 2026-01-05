function login(){
  const u=user.value,p=pass.value;
  if(u==="student"&&p==="hogwarts"){
    sessionStorage.setItem("login","yes");
    location.href="index.html";
  }else{msg.innerText="Access Denied";}
}
function protect(){
  if(sessionStorage.getItem("login")!=="yes"){
    location.href="login.html";
  }
}
function logout(){
  sessionStorage.clear();
  location.href="login.html";
}
