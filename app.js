function first(){
    var orderPhoto = '';
    alert("Welcome 102d5 ");
    var name= prompt("Please enter your name");
    var age= prompt("Please enter your age");;
    while(age<8){
    age= prompt("age must be greater than 8");}
    var games= prompt("Please enter number of games you want");
    for(var i=0;i<games;i++){
        var z=i+1;
        var num= "this game "+ z;
        alert(num);
        
    orderPhoto = orderPhoto + '<img src ="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/PlayStation_3_logo_%282009%29.svg/180px-PlayStation_3_logo_%282009%29.svg.png">';
   
}
document.write(orderPhoto);

    var text =name +" you recive "+ games+ " games" ;    
    return text;
    
    }
    
    var text=first();
    document.write("<h3>" +"hello "+ text+"</h3>");