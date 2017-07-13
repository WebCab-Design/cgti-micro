document.addEventListener('DOMContentLoaded', function (){
	var learnBtns = document.querySelectorAll('.learn-more');
	var moreSections = document.querySelectorAll('.more');
	var l = learnBtns.length;
	for (var i = 0; i < l; i++) {
		var btns = learnBtns[i];
		var more = moreSections[i];
		var closeButton = document.createElement('div');

		closeButton.classList.add('close-button');
		closeButton.innerText = 'X';
		more.insertBefore(closeButton, more.childNodes[0]);
		// console.log(more.childNodes[0]);

		btns.addEventListener('click', function () {
			var thisMore = this.parentNode.querySelector('.more');
			thisMore.classList.toggle('active');
			document.body.setAttribute('style', 'overflow-y: hidden;');
		});

		closeButton.addEventListener('click', function () {
			this.parentNode.classList.toggle('active');
			console.log(this.parentNode);
			document.body.setAttribute('style', 'overflow-y: inherit;');

		});
	}

	var form = document.querySelector('.form');
	if (form) {
		Astatine.submit({
			query: form,
			method: 'POST',
			responseType: 'json',
			action: 'https://www.enformed.io/t9npounr',
			prepare: function (data, resolve, reject) {
				if (!data['*default_email']) data['*default_email'] = 'dpreston@cgtiaz.org';
				// if (!data['*cc']) data['*cc'] = 'jburns@webcabdesign.com';

			resolve(data);
			},
			complete: function (error, success) {
				var response = document.querySelector('.response');
				if (error) {
					console.log(error);
					response.style.color = 'red';
					response.innerText = 'Error Plese See Console';
				} else {
					form.style.display = 'none';
					response.style.color = '#ffffff';
					response.innerText = 'Form Is Submitted';
				}
			}
		});
	}
});
