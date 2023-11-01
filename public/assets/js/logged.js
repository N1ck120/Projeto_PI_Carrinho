function getCookie(name) {
  const cookies = document.cookie.split('; ');
  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i].split('=');
    if (cookie[0] === name) {
      return decodeURIComponent(cookie[1]);
    }
  }
  return null; // Retornar null se o cookie não for encontrado
}

function deleteAllCookies() {
  const cookies = document.cookie.split('; ');

  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i];
    const eqPos = cookie.indexOf('=');
    const cookieName = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
    document.cookie = cookieName + '=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
  }
}

function logged() {
  if(getCookie('id') && getCookie('name') && getCookie('email')){
    const id = getCookie('id');
    const name = getCookie('name');
    const email = getCookie('email');
    document.getElementById("navloginid").innerHTML = "Bem vindo(a) "+ name;
    document.getElementById("navloginid").href = "/userinfo"
  }else{
    deleteAllCookies()
  }
}


function logado(){

}


function verify(){
  if (document.cookie){
    window.location.href = "/index";
  }
}

function verify2(){
  if (!document.cookie){
    window.location.href = "/index";
  }
}

function logoff(){
  deleteAllCookies()
  location.reload();
}