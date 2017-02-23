$("ul").on("click", "li", function(){
	$(this).toggleClass("done");
});

$("ul").on("click", "span" , function(event){
	$(this).parent().fadeOut(function(){
		$(this).remove();
	});
	event.stopPropagation();
});


$("input[type='text']").keypress(function(event){
    if(event.which === 13){
        if($(this).val() !== ""){
            //grabbing new todo text from input
            var Note = $(this).val();
            $(this).val("");
            //create a new li and add to ul
            $("ul").append("<li><span><i class='fa fa-trash'></i></span>"+ Note + "<i class='fa fa-bars'></i></li>");
        }
    }
});


$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
});

  $( function() {
    $( "ul" ).sortable();
    $( "ul" ).disableSelection();
  } );

