
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail,}from "https://www.gstatic.com/firebasejs/11.4.0/firebase-auth.js"; 
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-analytics.js";

const firebaseConfig = {
  apiKey: "AIzaSyAqHajlfQfkKuvRy0OxtHTQWHr_YnUu2DI",
  authDomain: "auth-app-149ba.firebaseapp.com",
  projectId: "auth-app-149ba",
  storageBucket: "auth-app-149ba.firebasestorage.app",
  messagingSenderId: "609188439323",
  appId: "1:609188439323:web:d4db3b48d4aeaca53b1fbe",
  measurementId: "G-W1TFQQ8CNL"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth =getAuth(app);
const provider = new GoogleAuthProvider(); 


//signup
document.getElementById("signup-btn")?.addEventListener('click',(e)=>{
  e.preventDefault();
  let email=document.getElementById("signup-email").value;
  let password=document.getElementById("signup-password").value;
createUserWithEmailAndPassword(auth,email,password)
.then(()=>{
   alert("signup sucessfully!!");
   window.location.href='welcome.html';
})
.catch((error)=>{
  alert(error.message);
})
})

//login
document.getElementById("login-btn")?.addEventListener('click',(e)=>{
  e.preventDefault();
  let email=document.getElementById("login-email").value;
  let password=document.getElementById("login-password").value;
signInWithEmailAndPassword(auth,email,password)
.then(()=>{
   alert("Login sucessfully!!");
   window.location.href='welcome.html';
})
.catch((error)=>{
  alert(error.message);
})

})

//continue with google
document.getElementById('google-btn')?.addEventListener('click',(e)=>{
  e.preventDefault();
  signInWithPopup(auth,provider)
  .then(()=>{
      alert("Login sucessfully!!");
      window.location.href='wellcome.html';
  })
  .catch((error)=>{
      alert(error.message);
  })
})

//Logout
document.getElementById("logout-btn")?.addEventListener('click',(e)=>{
  e.preventDefault();
  signOut(auth)
  .then(()=>{
      alert("Logout sucessfully!!");
      window.location.href='index.html';
  })
  .catch((error)=>{
      alert(error.message);
  })
})

// Show User Email on Welcome Page 
onAuthStateChanged(auth, (user) => {   
if (user && window.location.pathname.includes("welcome.html")) {     
  document.getElementById("user-email").textContent = user.email;   
} 
else if (!user && window.location.pathname.includes("welcome.html")) {     
  window.location.href = "index.html";   
} }); 


//reset password
document.getElementById("reset-password-link")?.addEventListener('click',(e)=>{
    e.preventDefault();
    let email=prompt("Enter your");
    if (email) {
        sendPasswordResetEmail(auth,email)
        .then(()=>{
            alert("Password reset email sent!check your inbox.");
        })
        .catch((error)=>{
            alert(error.message);
        })
    }
    else{
        alert("Please enter valid email address");
    }
})