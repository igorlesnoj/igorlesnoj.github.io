$(function () {

	// slider

	$('.bxslider').bxSlider({
		mode: 'fade',
		auto: true,
		autoHover: true,
		pager: false,
		adaptiveHeight: true,
		pause: 10000,
		nextText: 'вперед',
		prevText: 'назад'
	});

	// fancybox

	$("[data-fancybox]").fancybox();

	// map

	ymaps.ready(init);

	let myMap,
		myGeoObject;

	function init() {
		myMap = new ymaps.Map ("map", {
			center: [53.869199570700886,27.594143499999998],
			zoom: 12,
			controls: ['smallMapDefaultSet']
		}, {
			searchControlProvider: 'yandex#search'
		});

		myGeoObject = new ymaps.GeoObject({
			geometry: {
				type: "Point",
				coordinates: [53.869199570700886,27.594143499999998]
			},
			properties: {
				iconContent: 'ЭнергоСпецСтрой'
			}
		}, {
			preset: 'twirl#blueStretchyIcon'
		});

		myMap.behaviors.disable('scrollZoom');
		myMap.geoObjects.add(myGeoObject);
	}

	// form

	$("#phone_field").mask("+7 (999) 999-99-99", {placeholder:"_"});

	let form = $('form');

	form.submit(function(e) {
		e.preventDefault();
	});

	let validator = form.validate({
		rules: {
			name: {required: true},
			phone: {requiredPhone: true},
			email: {required: true}
		},
		errorPlacement: function(error, element) {
			return false;
		},
		submitHandler: function(contact_form) {
			form.ajaxSubmit();
			form.hide();
			$('div.success').addClass('open');
		}
	});

	$.validator.addMethod('requiredPhone', function(value) {
		return value.replace('+7 (___) ___-__-__').length;
	});

});
