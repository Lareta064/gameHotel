$(document).ready(function(){
	const overlayBg = document.querySelector('#overlay');

	const formOpenButton = document.querySelectorAll('[data-btn]');
	const formsArray = document.querySelectorAll('[data-form]');
	const formCloseBtn = document.querySelectorAll('[data-close]');

	// ===== Показать блок с формой  ======
	for(let item of formOpenButton){
		item.addEventListener('click', function(e){
			e.preventDefault.default;
			let thisDataValue = item.dataset.btn;

			for(let i=0; i<formsArray.length; i++){

				let formDataValue = formsArray[i].dataset.form;

				if(thisDataValue == formDataValue){
					formsArray[i].classList.add('visible');
					overlayBg.classList.add('active');
				}
			}

		});
	}

	// =====Закрыть форму по клику на крестик ======
	for(let item of formCloseBtn){
		item.addEventListener('click', function(){
			item.closest('.form-block').classList.remove('visible');
			overlayBg.classList.remove('active');
		});
	}

	// ===== Закрыть форму по клику на фон-затемнение ======
	overlayBg.addEventListener('click', function(){
		for(let item of formsArray){
			item.classList.remove('visible');
			this.classList.remove('active');
		}
	});
	// ======== маска для телефона ============
		$(".phone").mask("+7(999)999-99-99");
		$.fn.setCursorPosition = function (pos) {
			if ($(this).get(0).setSelectionRange) {
				$(this).get(0).setSelectionRange(pos, pos);
			} else if ($(this).get(0).createTextRange) {
				var range = $(this).get(0).createTextRange();
				range.collapse(true);
				range.moveEnd('character', pos);
				range.moveStart('character', pos);
				range.select();
			}
		};
		$('input.phone').click(function () {
			$(this).setCursorPosition(3); // set position number
		});
})