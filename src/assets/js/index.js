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
});
