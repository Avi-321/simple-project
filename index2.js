

    let item = document.getElementById('inputEmail3');
    let list_item = document.getElementById('list_item');
    let disc = document.getElementById('inputPassword3');
    let addbtn= document.getElementById('add');
    
    addbtn.addEventListener('click',function(){
        let li=document.createElement('li');
        let litem=document.getElementById('list_item');

       
        let itemjsonarray = [];
        if (item.value!="" && disc.value!="") {
            itemjsonarray.push(item, disc);
            item.value="";
            disc.value="";
            localStorage.setItem('itemJson', JSON.stringify(itemjsonarray));


        }
        else {
        //     itjson = localStorage.getItem("itemJson");
        //     itemjsonarray = JSON.parse(itjson);
        //     itemjsonarray.push(item, disc);
        //     localStorage.setItem('itemJson', JSON.stringify(itemjsonarray));
            alert("Enter the task properly");

        }
        


    })
    
    // function update() {
    //     let tablebd = document.getElementById("list3");
    //     let str = "";
    //     // itemjsonarray.forEach(myfunction);
    //     // console.log(itemjsonarray[2]);
    //     // function myfunction(element, index)
    //     // {
    //     //         str+=`<tr>
    //     //         <th scope="row">${index+1}</th>
    //     //         <td>${element}</td>
    //     //         <td>${element}</td>
    //     //         <td><button class="btn btn-primary btn-sm" onclick="delete(${index})">Delete</button></td>
    //     //         </tr>`;


    //     // }
    //     let a = 0;
    //     for (let i = 0; i < itemjsonarray.length - 1; i += 2) {
    //         str += `<tr>
    //                             <th scope="row">${++a}</th>
    //                             <td>${itemjsonarray[i]}</td>
    //                             <td>${itemjsonarray[i + 1]}</td>
    //                             <td><button id="delk" class="btn btn-primary btn-sm">Delete</button></td>
    //                             </tr>`;

    //     }

    //     tablebd.innerHTML = str;
    // }
    // update();


    // dell = document.getElementById("delk");
    // dell.addEventListener("click", deleteit);
    // console.log("hllllllloooo");

    // function deleteit() {
    //     jas = localStorage.getItem('itemJson');
    //     console.log(jas);

    //     itemjsonarray = JSON.parse(jas);

    //     itemjsonarray.splice(a, 1);
    //     console.log(itemjsonarray);
    //     localStorage.setItem('itemJson', JSON.stringify(itemjsonarray));
    //     update();
    // }



