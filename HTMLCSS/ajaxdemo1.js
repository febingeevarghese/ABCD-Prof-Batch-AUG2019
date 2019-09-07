$(document).ready( ()=>{
    $.ajax ( {
        type:"GET",
        url:"http://10.0.9.129:8080/mydata.json",
        success: (response)=>{
            console.log(response);
            var output="<table class='table'><tr><th>NAME</th> <th> AGE </th> <th> DOC</th> <th> College </th></tr>";
            
            for(var i in response){
                var name=response[i].name;
                var age=response[i].age;
                var dob=response[i].Dob;
                var college=response[i].College;
            output+="<tr><td>"+name+" </td> <td>"+age+"</td> <td> "+dob+" </td> <td>"+college+"</td> </tr>";
            
            }
            output+="</table>";
            console.log(output);
            $('#result').html(output);
        }
    });
});

