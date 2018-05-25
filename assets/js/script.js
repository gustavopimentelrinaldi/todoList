$(function() {
    // draggable
    $('.item').draggable();
    $('.item').draggable({ revert: "invalid" });
   
    // droppable
    $( ".table" ).droppable({
      accept: ".item",
    });
    
    // sortable
		$('.sortable').sortable({
			placeholder: "highlight"
		});
		$('.sortable').disableSelection();
    
    /* adios */
    $('.trash').droppable({
        drop: function(event, ui) {
            ui.draggable.remove();
        }
    });
});

















