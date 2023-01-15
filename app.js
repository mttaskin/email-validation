function gönder() {

    const mail = document.getElementById("email").value;
        const diziler = /^[a-zA-Z0-9._-]+@([a-zA-Z0-9.-]+.)+([.])+[a-zA-Z0-9.-]{2,3}$/;
        if (diziler.test(mail)==true)
        {
            alert("Mail adresi geçerli");
        }
        else
        {
            alert("Hata geçersiz mail adresi girdiniz!");
    }
        
    }
         
    
    
    
    
    
    
    