// sign-in js
const form = document.getElementById('form')


form.addEventListener ('submit', e =>{
e.preventDefault();

const fullname = form['fullname'].value;
const mobnumber = form['mobnumber'].value;
const email = form['email'].value;
const address = form['address'].value;
const password = form['password'].value;

if (fullname === ''){
 addErrorTo('fullname', 'Name is required ');
}else{
 removeErrorFrom('fullname');
}
if (mobnumber === ''){
addErrorTo('mobnumber', 'phone number is required ');
}else{
removeErrorFrom('mobnumber');
}
if (email === ''){
addErrorTo('email', 'Email is required ');
}
if (address === ''){
addErrorTo('address', 'Address is required ');
}
else{
removeErrorFrom('address');
}
if (password === ''){
addErrorTo('password', 'Passsword is required ');
}else{
removeErrorFrom('password');
}


} );

function addErrorTo(field,message){
const formcontrol = form[field].parentNode;
formcontrol.classList.add('error');

const small = formcontrol.querySelector('small');
small.innerText = message;
small.style.opacity = '1';
}

function removeErrorFrom(field){
small.style.opacity = '0';
const formcontrol = form[field].parentNode;

formcontrol.classList.remove('error');

}