const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

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

//  Check email is valid with regular expression
function isValidEmail(email) {
	const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(String(email).toLowerCase());
}

// Check required fields by using Array method, forEach that take function

// function checkRequired(inputArr) {
// 	inputArr.forEach(function(input) {
// 		if (input.value.trim() === '') {
// 			showError(input, `${input.id} is required`);
// 		} else {
// 			showSuccess(input);
// 		}
// 	});

// to capitalized the first letter create getFieldName function

function checkRequired(inputArr) {
	inputArr.forEach(function(input) {
		if (input.value.trim() === '') {
			showError(input, `${getFieldName(input)} is required`);
		} else {
			showSuccess(input);
		}
	});
}

function checkLength(input, min, max) {
	if (input.value.length < min) {
		showError(
			input,
			`${getFieldName(input)} must be at least ${min} characters`
		);
	} else if (input.value.length > max) {
		showError(
			input,
			`${getFieldName(input)} must be less than ${max} characters`
		);
	}
}

// get the fist letter use charAt(position of item), slice(from position)
// username.charAt(0) will get u.toUppercase = U
//username.slice(1)  will start  slice from 2nd position sername
//concat together U + sername

function getFieldName(input) {
	return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// Ad event listennig upon submit of the form
// use function CheckRequired which take array of input

form.addEventListener('submit', function(e) {
	e.preventDefault();

	checkRequired([ username, email, password, password2 ]);
	checkLength(username, 3, 15);
	checkLength(password, 6, 25);
});
