console.log('have fun !');

$("button").click(function(){

var info = {
	first_name : $(first_name).val(),
	last_name : $(last_name).val(),
	city : $(city).val()
}
console.log("Hi")
console.log(info)
console.log(info.first_name,info.last_name,info.city);

$("#username").html(info.first_name+" "+info.last_name+" "+info.city)




});


/* réussir à insérer dans la console */