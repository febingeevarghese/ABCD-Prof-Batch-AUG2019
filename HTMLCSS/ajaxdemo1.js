$(document).ready( ()=>{
    $.ajax ( {
        type:"GET",
        url:"https://jsonplaceholder.typicode.com/users",
        success: (response)=>{
            console.log(response);
            var output="<table class='table'><tr><th>NAME</th> <th> AGE </th> <th> DOC</th> <th> College </th></tr>";
            
            for(var i in response){
                var name=response[i].name;
                var username=response[i].username;
                var email=response[i].email;
                var city=response[i].city;
                var street=response[i].address.street
            output+="<tr><td>"+name+" </td> <td>"+username+"</td> <td> "+email+" </td> <td>"+city+"</td> <td>"+street+"</tr>";
            
            }
            output+="</table>";
            console.log(output);
            $('#result').html(output);
        }
    });
});

