const formOpenBtn = document.querySelector("#form-open"),
home = document.querySelector(".home"),
formContainer = document.querySelector(".form_container"),
formCloseBtn = document.querySelector(".form_close"),
signupBtn = document.querySelector("#signup"),
loginBtn = document.querySelector("#login"); // Assuming this should be the login button

formOpenBtn.addEventListener("click", () => home.classList.add("show"));
formCloseBtn.addEventListener("click", () => home.classList.remove("show"));

signupBtn.addEventListener("click", (e) =>{
  e.preventDefault(); // Fix the typo here

  formContainer.classList.add("active");
});
console.log(loginBtn)
loginBtn.addEventListener("click", (e) =>{
  e.preventDefault(); // Fix the typo here
  formContainer.classList.remove("active");
});


document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.querySelector('.login_form form');
    const signupForm = document.querySelector('.signup_form form');

    // Login form validation
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const loginID = document.getElementById('loginID').value.trim();
        const loginMail = document.getElementById('loginMail').value.trim();
        const pass = document.getElementById('Pass').value.trim();

        if (loginID === '') {
            alert('Please enter your username');
            return;
        }

        if (loginMail === '' || !isValidEmail(loginMail)) {
            alert('Please enter a valid email address');
            return;
        }

        if (pass === '') {
            alert('Please enter your password');
            return;
        }

        // If all validations pass, you can submit the form
        // loginForm.submit(); // Uncomment this line if you want to submit the form
    });

    // Signup form validation
    signupForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const signupID = document.getElementById('signupID').value.trim();
        const signPass = document.getElementById('signPASS').value.trim();
        const conPass = document.getElementById('conPass').value.trim();

        if (signupID === '' || !isValidEmail(signupID)) {
            alert('Please enter a valid email address');
            return;
        }

        if (signPass === '') {
            alert('Please create a password');
            return;
        }

        if (conPass === '') {
            alert('Please confirm your password');
            return;
        }

        if (signPass !== conPass) {
            alert('Passwords do not match');
            return;
        }

        // If all validations pass, you can submit the form
        // signupForm.submit(); // Uncomment this line if you want to submit the form
    });

    // Helper function to validate email
    function isValidEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
});



let slide = document.querySelectorAll(".customer");
let count = 0;
console.log(slide);

slide.forEach(function(customer, index){
    customer.style.left=`${index * 100}%`
})

function next(){
    count ++;
    if(count == slide.length){
        count=0;
    }
    bar()
}

function pre(){
    count--;
    if(count == -1){
        count = slide.length-1
    }
    bar()
}


function bar(){
    slide.forEach(function(customer){
        customer.style.transform = `translateX(-${count * 98}%)`
    })
}

let a = {
    greet:"HI"
}
let c;
c=a;
a.age=11;

console.log(c.age);

let loginbtn = document.getElementById('loginBTN');

loginBTN.addEventListener('click', () => {
    let loginId = document.getElementById('loginID');
    let loginMail = document.getElementById('loginMail');
    let Pass = document.getElementById('Pass');

    // Check if the email format is valid
    if (!isValidEmail(loginMail.value)) {
        alert('Please enter a valid email address');
        return;
    }

    // Check if all fields are filled
    if (loginId.value !== '' && loginMail.value !== '' && Pass.value !== '') {
        alert('Login was successful');
        // Here you can proceed with further login validation or form submission
    } else {
        alert('Please fill in all fields');
    }
});

// Helper function to validate email
function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}


let signupbtn = document.getElementById('signupBTN');
signupbtn.addEventListener('click',()=>{
    let signupID = document.getElementById('signupID');
    let  signPASS = document.getElementById('signPASS');
    let  conPass = document.getElementById('conPass');
    console.log(signupID)
    if((signupID.value != '' && signupID!= undefined) && (signPASS.value != '' && signPASS != undefined) && (conPass.value != '' && conPass != undefined)){
        alert('signup was successful');
    }else{
        alert('signup was unseccessful');
    }


    
});




