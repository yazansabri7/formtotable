var register = document.querySelector(".registerform");
var nameinput = document.querySelector("#name");
var descriptioninput = document.querySelector("#description");
var priceinput =document.querySelector("#price");
var users=[];
register.onsubmit =function(e){
    e.preventDefault();
    var user={
        name:nameinput.value,
        description:descriptioninput.value,
        price:priceinput.value,
    };
    users.push(user);
    printData();
    
}
function printData(){
    var data=``;
    for(var i=0; i<users.length; i++){
        data+=`
    <tr>
        <td>${users[i].name}</td>
        <td>${users[i].description}</td>
        <td>${users[i].price}</td>
    </tr>
        `
    }
    document.querySelector(".product").innerHTML=data;
}