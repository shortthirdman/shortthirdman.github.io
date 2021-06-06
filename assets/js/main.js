var profileData;

Handlebars.registerHelper('loud', function (aString) {
	return aString.toUpperCase();
});

function fetchProfile() {
	fetch('assets/data/profile.json')
		.then(res => res.json())
		.then((data) => { profileData = data; })
		.catch(err => console.error(err));
}

function renderHeader() {
	var template = $('#handlebars-demo').html();
	var templateScript = Handlebars.compile(template);
	var context = { "name" : "Ritesh Kumar", "occupation" : "developer" };
	var html = templateScript(context);
	$(document.body).append(html);
}

function renderFooter() {
	var template = $('#footer-template').html();
	var templateScript = Handlebars.compile(template);
	var context = { curentYear : new Date().getFullYear() };
	var html = templateScript(context);
	$(document.body).append(html);
}

function renderTemplates() {
	fetchProfile();
	// renderHeader();
	renderFooter();
}