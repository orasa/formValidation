const form = document.getElementById('form');
const username = document.getElementById('username');

// function showError

function showError(input, message) {
	const formControl = input.parentElement;
	formControl.className = 'form-control error';
	const small = formControl.querySelector('small');
	small.innerText = message;
}

// function showSuccess()

function showSuccess(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}
// Ad event listennig upon submit of the form

form.addEventListener('submit', function(e) {
	e.preventDefault();

	if (username.value === '') {
		showError(username, 'Username is required');
	} else {
		showSuccess(username);
	}
});
