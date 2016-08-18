$( document ).ready(function() {
	console.log('ready!');

/*input items for list by hitting 'return'*/ 
$('#js-shopping-list-form').submit(function(event){
	event.preventDefault();
	var add = $('#shopping-list-entry').val();
	$('.shopping-list').append('<li>' + 
		'<span class ="shopping-item">' + add + '</span>' + 
		  '<div class="shopping-item-controls">' +
          '<button class="shopping-item-toggle">' +
          '<span class="button-label">check</span>' +
          '</button>' + '&nbsp' +
          '<button class="shopping-item-delete">' +
          '<span class="button-label">delete</span>' +
          '</button>' +
        '</div>' +
		'</li>');
$(this)[0].reset();

});

/*input items by clicking 'add item'*/
// $('button.submit').click(function() {
// 	$('this').submit();
// });

/*check and uncheck items using 'Check' button*/
$('ul').on('click', ".shopping-item-toggle", function() {
	$(this).closest('li').find('.shopping-item')
	.toggleClass('shopping-item__checked');

});
/*remove items from list*/
$('ul').on('click', '.shopping-item-delete', function(event) {
	$(this).closest("li").remove();
});

});