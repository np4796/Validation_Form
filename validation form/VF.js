const forms = document.querySelector(".credentials");
const errorMessage = document.querySelector(".error");
forms.addEventListener('submit',(e) =>{
    e.preventDefault();
    const Name = document.querySelector('#name').value;
    const Email = document.querySelector('#email').value;
    const Phone = document.querySelector('#phone').value;
    const Password = document.querySelector('#password').value;
    const Confirm = document.querySelector('#confirm-password').value;
    if(Name.length < 5){
        errorMessage.textContent = 'Name should contain atleast 5 leatters' 
    }
    else if(!Email.includes('@')){
        errorMessage.textContent = 'Email should contain @ symbol';
    }
    else if((Phone === '123456789') || (Phone.length !== 10)){
        errorMessage.textContent = 'Phone number should contain atleast 10 number and it should not be 123456789';
    }
    else if((Password ==='Password') || (Password === Name) || (Password.length < 8)){
        errorMessage.textContent = 'Enter a vaild password'; 
    }
    else if(Confirm !== Password){
        errorMessage.textContent = 'Confirm password should be same as password'; 
    }
    else {
        errorMessage.textContent = '';
        forms.submit();
      }
});