

        // if(strongPassword.test(PasswordParameter)) {
        //     strengthBadge.style.backgroundColor = "green"
        //     strengthBadge.textContent = 'Strong'
        //     return true;
        // } else if(mediumPassword.test(PasswordParameter)){
        //     strengthBadge.style.backgroundColor = 'blue'
        //     strengthBadge.textContent = 'Medium'
        // } else{
        //     strengthBadge.style.backgroundColor = 'red'
        //     strengthBadge.textContent = 'Weak'
        // }

        let password = document.getElementById("password")
        let phonenumber = document.getElementById("phonenumber")
        let error = document.getElementById("error")
        let passworderror1 = document.getElementById("password1")
        


        // function validate2(){
            
        // }
        function validate(){
          let RegExp = /^([0-9]{10})$/
          let RegExp1 = /^$/
          let Strongpassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/
          let Mediumpassword = /^([A-Za-z0-9]{4,7})$/
          let nilpwd = /^$/
          let weakpwd=/^([0-9]{2})$/


            if(Strongpassword.test(password.value)){
                passworderror1.innerHTML="strong password"
                passworderror1.style.color="darkgreen"
                return true;
                 }
                 else if(Mediumpassword.test(password.value)){
                     passworderror1.innerHTML="Medium password"
                     passworderror1.style.color="darkblue"
                return false;
                 }
                 else if(weakpwd.test(password.value)){
                     passworderror1.innerHTML="Weakpasssword"
                     passworderror1.style.color="darkred"
                     return false;
                 }
                 else(nilpwd.test(password.value));{
                     passworderror1.innerHTML="Type A Password"
                     passworderror1.style.color="darkred"
                     return false;
                 }

                 
                
                }


 
        
                // ('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8})')




      
//        if(pwd.value==""){
//            error1.innerHTML="weak";
//            error1.style.color="red";
//            return false;
//         }
//         else if(pwd.value==(mediumpwd)){
//             error1.innerHTML="medium password";
//             return false;
//         }
//         else (pwd.value.match(strongpwd));{
//             error1.innerHTML="strong password";
//             error1.style.color="green";
//             return true
//         }

//    }
    
    // "/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})$/;"
    // (?=.*[a-z])