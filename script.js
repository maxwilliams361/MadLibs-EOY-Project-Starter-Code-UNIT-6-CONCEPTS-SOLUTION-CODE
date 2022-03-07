$(".submit").click(function(){
    $(".story").show();
    $("h1").text("Thanks for creating a MadLib!");
});





























//DO NOT TOUCH CODE BELOW! 
let storiesCreated=0;
$("button").click(function(){
storiesCreated = storiesCreated + 1;
    let name = $(".name-input").val();
   let transport = $(".transport-input").val();
    let adjective = $(".adjective-input").val();
    let time = $(".number-input").val();
    $(".story").append("<p>One day my friend " + name + " and I decided to take a trip to the beach, so we packed our bags and took the " + transport + " over.It was a " + adjective + " day at the beach! We ended up staying for " + time + " hours!</p>");
    $(".count").text(storiesCreated);
});
 