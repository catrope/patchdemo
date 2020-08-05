( function () {
	// TODO: Use infuse to control OOUI widgets
	var myWikis, wikisTable,
		form = document.getElementById( 'new-form' ),
		submit = form.querySelector( 'button[type=submit]' );

	form.addEventListener( 'submit', function () {
		submit.disabled = true;
		submit.parentNode.classList.add( 'oo-ui-widget-disabled' );
		submit.parentNode.classList.remove( 'oo-ui-widget-enabled' );
		return false;
	} );

	if ( ( myWikis = document.querySelector( '.myWikis > input' ) ) ) {
		wikisTable = document.getElementsByClassName( 'wikis' )[ 0 ];
		myWikis.addEventListener( 'change', function () {
			if ( myWikis.checked ) {
				wikisTable.classList.add( 'hideOthers' );
			} else {
				wikisTable.classList.remove( 'hideOthers' );
			}
		} );
	}

}() );
