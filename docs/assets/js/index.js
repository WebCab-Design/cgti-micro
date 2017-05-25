document.addEventListener('DOMContentLoaded', function (){
	var learnBtns = document.querySelectorAll('.learn-more');
	var moreSections = document.querySelectorAll('.more');

	for (var i = 0; i < learnBtns.length; i++) {
		var btns = learnBtns[i];
		var more = moreSections[i];
		var closeButton = document.createElement('div');

		closeButton.classList.add('close-button')
		closeButton.innerText = 'X';
		more.firstElementChild.append(closeButton);

		btns.addEventListener('click', function () {
			var thisMore = this.parentNode.querySelector('.more');
			thisMore.classList.toggle('active');
			document.body.style = 'overflow-y: hidden';
		});
		closeButton.addEventListener('click', function () {
			more.classList.toggle('active');
			document.body.style = 'overflow-y: inherit';
			console.log('close me');
		});
	}
});
