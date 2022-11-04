        let a,hr,mi,sec,sat,date;
        setInterval(() => {
         a= new Date();
         hr=a.getHours();
         mi=a.getMinutes();
         sec=a.getSeconds();
         sat;
         date= a.toLocaleDateString();
        if(hr>12)
        {
            hr=hr-12;
            sat=hr + ":" + mi +":" + sec + " PM ";
        }
        else
            sat=hr+ ":" + mi +":" + sec + " AM ";
        document.getElementById("time").innerHTML=sat +" And date is:  "+ date;

            
        }, 1000);
        

