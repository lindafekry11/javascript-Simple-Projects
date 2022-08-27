
var op=prompt("Please select the (add OR search) operation you need to do...");



var contactsArray=[{
    Name: "Linda",
    PhoneNumber:"01211144555 "
},
{
    Name: "Amal",
    PhoneNumber:"01003456698"   
},
{
    Name: "Omnia",
    PhoneNumber:"015155487778"   
}];

while(true){
    switch(op){
        case 'add':
        var contacts={};
            contacts.Name=prompt("Enter the name of the contact : ");
            contacts.PhoneNumber=Number(prompt("Enter the phone number: "));
            contactsArray.push(contacts);
            console.log(contactsArray);
            break;
            
         case 'search':
                var searchBy= prompt("Search by (name OR phone) :");
                for( var i=0; i<contactsArray.length ; i++){
                    var wanted = contactsArray[i];
                    if(searchBy == wanted.Name || searchBy == wanted.PhoneNumber){
                       console.log(wanted);
                       alert("The name: "+wanted.Name+" "+ "has phone number: "+ wanted.PhoneNumber);
                       break;
                    }
                }
                if(searchBy !== wanted.Name && searchBy !== wanted.PhoneNumber){
                  alert("The contact you want is NOT FOUND!!");
                  break;
                }    

          }
          console.log(contactsArray);
          var repeat= prompt("do you want to exit (yes,no)");
          if(repeat == "no"){
            var op=prompt("Please select the (add OR search) operation you need to do...");
          }
          else{
            alert("Hummmm OK!");
            break;
          }

        }

  

          
   

