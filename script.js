$(document).ready(function(){
    $('#btnSubmit').click(function(){
        var data = {name:"guhan",age:"24"}
        $.post("http://localhost:1000/upload",data,
        function(data, status){
             alert("Data: " + data + "\nStatus: " + status);
        });
    });

    $('#btnView').click(function(){
        $.get("http://localhost:1000/view?name=guhan", function(data, status){
            alert("Data: " + data + "\nStatus: " + status);
          });
    });
});