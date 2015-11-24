
	// var db = localStorage;

	// $('#submitTest').on('click', function(e) {
	// 	db.setItem("test", $('#textTest').val());
	// 	console.log(db);
	// });
var searching = false;
var searchbody = $('#searchbody');
var userHome, userWork, userFavorites;
var favorite;

$(function() {
	var menuIcon = $('#menu-icon');
	var menu = $('#toggle-menu');
	var route = $('#route');
	var explore = $('#explore');
	var opts = $('.opts-button');
	var searchbox = $('#searchbox');
	var cancelSearch = $('#cancelsearch');
	var acct = $('#account');
	var menuOptions = $('#menu-list');
	var accessAcct = $('#access-account');
	var exp = $('#expand1');
	userHome = "";
	userWork = "";
	userFavorites = [];
	favorite = {name: "default", coords: {latitude: 0, longitude: 0}};

	menuIcon.on('click', function() {
		menu.toggleClass('open');
		fillUserLocations();
	});
	
	route.on('click', function() {
		if (!route.hasClass('mode'))
		{
			route.toggleClass('mode');
			explore.toggleClass('mode');
		}
	});

	explore.on('click', function() {
		if (!explore.hasClass('mode'))
		{
			route.toggleClass('mode');
			explore.toggleClass('mode');
		}
	});

	searchbox.on('focus', function() {
		cancelSearch.toggleClass('open');
		searching = true;
		console.log('searching');
		showHideSearch();
	});

	searchbox.on('focusout', function() {
		cancelSearch.toggleClass('open');
		searching = false;
		searchbody.toggleClass('searching');
		//showHideSearch();
	});

	//acct.on('click', function() {
		//appAdmin.toggleClass('activated');
		//menuOptions.toggleClass('hiding');
		// accessAcct.toggleClass('open');
		// exp.toggleClass('open');
	//});

	// closeAdmin.on('click', function() {
	// 	appAdmin.toggleClass('activated');
	// });

	// settings.on('click', function() {
	// 	appAdmin.toggleClass('activated');
	// });

	// setFave.on('click', function() {
	// 	locAdmin.toggleClass('activated');
	// });	

	// closeLocAdmin.on('click', function() {
	// 	locAdmin.toggleClass('activated');
	// });

});

function fillUserLocations() {

};

function showHideSearch() {
	if (searching) {
		searchbody.addClass('searching');
	}
	else {
		searchbody.removeClass('searching');
	}
};

function toggleAdmin() {
	var appAdmin = $('#app-admin');
	appAdmin.toggleClass('activated');
};

function toggleLocAdmin() {
	var locAdmin = $('#loc-admin');
	locAdmin.toggleClass('activated');
};