function createSidebarEvents() {
    $('#organismshortnamelist li').click(function(){
		$('#organismshortnamelist li').removeClass("checked");
		$(this).addClass("checked");
		console.log($(this).find('p').text());
	});
}