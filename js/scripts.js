WW = window.innerWidth || document.clientWidth || document.getElementsByTagName('body')[0].clientWidth
WH = window.innerHeight || document.clientHeight || document.getElementsByTagName('body')[0].clientHeight
BODY = document.getElementsByTagName('body')[0]


document.addEventListener('DOMContentLoaded', function () {
	// Main slider
	let mainSlider = document.querySelector('.main_slider .swiper')

	if (mainSlider) {
		new Swiper('.main_slider .swiper', {
			loop: true,
			speed: 750,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			spaceBetween: 0,
			slidesPerView: 1,
			pagination: {
				el: '.swiper-pagination',
				type: 'bullets',
				clickable: true,
				bulletActiveClass: 'active'
			},
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			lazy: true,
			autoplay: {
				delay: 5000,
				disableOnInteraction: false
			}
		})
	}


	// Banners slider
	let bannersSlider = document.querySelector('.banners_slider .swiper')

	if (bannersSlider) {
		new Swiper('.banners_slider .swiper', {
			loop: true,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			spaceBetween: 20,
			slidesPerView: 1,
			pagination: {
				el: '.swiper-pagination',
				type: 'bullets',
				clickable: true,
				bulletActiveClass: 'active'
			},
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			lazy: true
		})
	}


	// Categories slider
	const categoriesSlider = [],
		categories = document.querySelectorAll('.categories_slider .swiper')

	categories.forEach((el, i) => {
		el.classList.add('categories_s' + i)

		let options = {
			loop: false,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			lazy: true,
			breakpoints: {
				0: {
					spaceBetween: 16,
					slidesPerView: 2
				},
				768: {
					spaceBetween: 16,
					slidesPerView: 4
				},
				1024: {
					spaceBetween: 12,
					slidesPerView: 6
				},
				1440: {
					spaceBetween: 12,
					slidesPerView: 7
				},
				1680: {
					spaceBetween: 12,
					slidesPerView: 8
				}
			},
			on: {
				init: swiper => {
					setTimeout(() => {
						$(swiper.el).find('.swiper-button-next, .swiper-button-prev').css(
							'top', $(swiper.el).find('.thumb').outerHeight() * 0.5
						)
					})
				},
				resize: swiper => {
					setTimeout(() => {
						$(swiper.el).find('.swiper-button-next, .swiper-button-prev').css(
							'top', $(swiper.el).find('.thumb').outerHeight() * 0.5
						)
					})
				}
			}
		}

		categoriesSlider.push(new Swiper('.categories_s' + i, options))
	})


	// Products slider
	const productsSliders = [],
		products = document.querySelectorAll('.products .swiper.main')

	products.forEach((el, i) => {
		el.classList.add('products_s' + i)

		let options = {
			loop: false,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			lazy: true,
			breakpoints: {
				0: {
					spaceBetween: 16,
					slidesPerView: 2
				},
				768: {
					spaceBetween: 16,
					slidesPerView: 3
				},
				1280: {
					spaceBetween: 20,
					slidesPerView: 4
				},
				1680: {
					spaceBetween: 20,
					slidesPerView: 5
				}
			},
			on: {
				init: swiper => {
					setHeight(swiper.el.querySelectorAll('.product'))

					setTimeout(() => {
						$(swiper.el).find('.swiper-button-next, .swiper-button-prev').css(
							'top', $(swiper.el).find('.thumb').outerHeight() * 0.5
						)
					})
				},
				resize: swiper => {
					let products = swiper.el.querySelectorAll('.product')

					products.forEach(el => el.style.height = 'auto')

					setHeight(products)

					setTimeout(() => {
						$(swiper.el).find('.swiper-button-next, .swiper-button-prev').css(
							'top', $(swiper.el).find('.thumb').outerHeight() * 0.5
						)
					})
				}
			}
		}

		productsSliders.push(new Swiper('.products_s' + i, options))
	})


	// Products thumbs slider
	const productThumbsSliders = [],
		productThumbs = document.querySelectorAll('.product .swiper')

	productThumbs.forEach((el, i) => {
		el.classList.add('product_thumbs_s' + i)

		let options = {
			loop: true,
			nested: true,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			lazy: true,
			pagination: {
				el: '.swiper-pagination',
				type: 'bullets',
				clickable: true,
				bulletActiveClass: 'active'
			},
			spaceBetween: 0,
			slidesPerView: 1
		}

		productThumbsSliders.push(new Swiper('.product_thumbs_s' + i, options))
	})


	// Banners slider
	const photoGalleryCategoriesSliders = [],
		photoGalleryCategories = document.querySelectorAll('.photo_gallery_info .categories .swiper')

	photoGalleryCategories.forEach((el, i) => {
		el.classList.add('photo_gallery_categories_s' + i)

		let options = {
			loop: false,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			slidesPerView: 'auto',
			breakpoints: {
				0: {
					spaceBetween: 50,
				},
				480: {
					spaceBetween: 50
				},
				768: {
					spaceBetween: 50
				},
				1280: {
					spaceBetween: 50
				}
			}
		}

		photoGalleryCategoriesSliders.push(new Swiper('.photo_gallery_categories_s' + i, options))
	})


	// Banners slider
	const bannersSliders = [],
		banners = document.querySelectorAll('.banners .swiper')

	banners.forEach((el, i) => {
		el.classList.add('banners_s' + i)

		let options = {
			loop: true,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			lazy: true,
			spaceBetween: 20,
			slidesPerView: 'auto'
		}

		bannersSliders.push(new Swiper('.banners_s' + i, options))
	})


	// Compare slider
	let compareSlider = document.querySelector('.compare_info .products.swiper')

	if (compareSlider) {
		new Swiper('.compare_info .products.swiper', {
			loop: false,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			breakpoints: {
				0: {
					spaceBetween: 16,
					slidesPerView: 2
				},
				768: {
					spaceBetween: 16,
					slidesPerView: 3
				},
				1280: {
					spaceBetween: 20,
					slidesPerView: 3
				},
				1680: {
					spaceBetween: 16,
					slidesPerView: 4
				}
			},
			on: {
				init: swiper => {
					setHeight(swiper.el.querySelectorAll('.product'))

					compareHeight($(swiper.el))

					setTimeout(() => {
						$(swiper.el).find('.swiper-button-next, .swiper-button-prev').css(
							'top', $(swiper.el).find('.thumb').outerHeight() * 0.5
						)
					})
				},
				resize: swiper => {
					swiper.el.querySelectorAll('.product').forEach(el => el.style.height = 'auto')

					setHeight(swiper.el.querySelectorAll('.product'))

					compareHeight($(swiper.el))

					setTimeout(() => {
						$(swiper.el).find('.swiper-button-next, .swiper-button-prev').css(
							'top', $(swiper.el).find('.thumb').outerHeight() * 0.5
						)
					})
				}
			}
		})
	}


	// Certs slider
	const certsSliders = [],
		certs = document.querySelectorAll('.certs .swiper')

	certs.forEach((el, i) => {
		el.classList.add('certs_s' + i)

		let options = {
			loop: true,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			lazy: true,
			breakpoints: {
				0: {
					spaceBetween: 20,
					slidesPerView: 2
				},
				768: {
					spaceBetween: 20,
					slidesPerView: 3
				},
				1024: {
					spaceBetween: 20,
					slidesPerView: 4
				},
				1280: {
					spaceBetween: 20,
					slidesPerView: 6
				}
			}
		}

		certsSliders.push(new Swiper('.certs_s' + i, options))
	})


	// Brands slider
	const brandsSliders = [],
		brands = document.querySelectorAll('.brands .swiper')

	brands.forEach((el, i) => {
		el.classList.add('brands_s' + i)

		let options = {
			loop: true,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			lazy: true,
			breakpoints: {
				0: {
					spaceBetween: 20,
					slidesPerView: 2
				},
				768: {
					spaceBetween: 20,
					slidesPerView: 4
				},
				1024: {
					spaceBetween: 20,
					slidesPerView: 5
				},
				1280: {
					spaceBetween: 20,
					slidesPerView: 6
				},
				1680: {
					spaceBetween: 20,
					slidesPerView: 7
				}
			}
		}

		brandsSliders.push(new Swiper('.brands_s' + i, options))
	})


	// Product page
	if ($('.product_info .images').length) {
		const productThumbs = new Swiper('.product_info .thumbs .swiper', {
			loop: false,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			spaceBetween: 16,
			lazy: true,
			slidesPerView: 'auto'
		})

		new Swiper('.product_info .big .swiper', {
			loop: false,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			spaceBetween: 16,
			slidesPerView: 1,
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			lazy: true,
			thumbs: {
				swiper: productThumbs
			}
		})
	}


	// Top banner
	$('.top_banner .close_btn').click(function(e) {
		e.preventDefault()

		$('.top_banner').slideUp(200)
		$('body').addClass('no_top_banner')
	})


	// Categories
	$('.categories .category .sub .title').click(function(e) {
		e.preventDefault()

		$(this).toggleClass('active').next().slideToggle(300)
	})


	// Category info
	$('.category_info .sub .title').click(function(e) {
		e.preventDefault()

		$(this).toggleClass('active').next().slideToggle(300)
	})


	// Mini popups
	$('.mini_modal_btn').click(function(e) {
		e.preventDefault()

		const modalId = $(this).data('modal-id')

		if ($(this).hasClass('active')) {
			$(this).removeClass('active')
			$('.mini_modal').removeClass('active')

			if (is_touch_device()) $('body').css('cursor', 'default')
		} else {
			$('.mini_modal_btn').removeClass('active')
			$(this).addClass('active')

			$('.mini_modal').removeClass('active')
			$(modalId).addClass('active')

			if (is_touch_device()) $('body').css('cursor', 'pointer')
		}
	})

	// Close the popup when clicking outside of it
	$(document).click(e => {
		if ($(e.target).closest('.modal_cont').length === 0) {
			$('.mini_modal, .mini_modal_btn').removeClass('active')

			if (is_touch_device()) $('body').css('cursor', 'default')
		}
	})


	$('.mini_modal .close_btn').click(function(e) {
		e.preventDefault()

		$('.mini_modal, .mini_modal_btn').removeClass('active')

		if (is_touch_device()) $('body').css('cursor', 'default')
	})


	// Fancybox
	Fancybox.defaults.autoFocus = false
	Fancybox.defaults.trapFocus = false
	Fancybox.defaults.dragToClose = false
	Fancybox.defaults.placeFocusBack = false
	Fancybox.defaults.l10n = {
		CLOSE: 'Закрыть',
		NEXT: 'Следующий',
		PREV: 'Предыдущий',
		MODAL: 'Вы можете закрыть это модальное окно нажав клавишу ESC'
	}

	Fancybox.defaults.tpl = {
		closeButton: '<button data-fancybox-close class="f-button is-close-btn" title="{{CLOSE}}"><svg><use xlink:href="images/sprite.svg#ic_close"></use></svg></button>',

		main: `<div class="fancybox__container" role="dialog" aria-modal="true" aria-label="{{MODAL}}" tabindex="-1">
			<div class="fancybox__backdrop"></div>
			<div class="fancybox__carousel"></div>
			<div class="fancybox__footer"></div>
		</div>`,
	}


	// Modals
	$('.modal_btn').click(function(e) {
		e.preventDefault()

		Fancybox.close()

		Fancybox.show([{
			src: document.getElementById(e.target.getAttribute('data-modal')),
			type: 'inline'
		}])
	})

	$('.modal .close_btn').click(function(e) {
		e.preventDefault()

		Fancybox.close()
	})


	// Zoom images
	Fancybox.bind('.fancy_img', {
		Image: {
			zoom: false
		},
		Thumbs: {
			autoStart: false
		}
	})


	// Mob. menu
	$('.mob_header .menu_btn').click(e => {
		e.preventDefault()

		$('.mob_header .menu_btn').toggleClass('active')
		$('body').toggleClass('menu_open')
		$('.mob_menu').toggleClass('show')
	})

	$('.mob_menu .catalog_btn, .mob_menu .catalog_info > .back_btn').click(e => {
		e.preventDefault()

		$('.mob_menu .catalog_info').toggleClass('show')
	})

	$('.mob_menu .catalog_info .list a').click(function(e) {
		e.preventDefault()

		let sub = $(this).data('sub')

		$('.mob_menu .catalog_info .sub_info' + sub).addClass('show')
	})

	$('.mob_menu .catalog_info .sub_info .back_btn').click(e => {
		e.preventDefault()

		$('.mob_menu .catalog_info .sub_info').toggleClass('show')
	})


	// 'Up' button
	$('.buttonUp .btn').click((e) => {
		e.preventDefault()

		$('body, html').stop(false, false).animate({ scrollTop: 0 }, 1000)
	})


	// Phone input mask
	const phoneInputs = document.querySelectorAll('input[type=tel]')

	if (phoneInputs) {
		phoneInputs.forEach(el => {
			IMask(el, {
				mask: '+{7} (000) 000-00-00',
				lazy: true
			})
		})
	}


	// Password field
	$('.form .toggle_btn').click(function(e) {
		e.preventDefault()

		let parent = $(this).closest('.line')

		$(this).toggleClass('active')

		$(this).hasClass('active')
			? parent.find('.input').attr('type', 'text')
			: parent.find('.input').attr('type', 'password')
	})


	// Custom select - Nice select
	const selects = document.querySelectorAll('select:not(.skip)')

	if (selects) {
		selects.forEach(el => {
			NiceSelect.bind(el, {
				placeholder: el.getAttribute('data-placeholder')
			})

			el.addEventListener('change', () => el.classList.add('selected'))
		})
	}


	// Select file
	const fileInputs = document.querySelectorAll('form input[type=file]')

	if (fileInputs) {
		fileInputs.forEach(el => {
			el.addEventListener('change', () => el.closest('.file').querySelector('label span').innerText = el.value)
		})
	}


	if (is_touch_device()) {
		const subMenus = document.querySelectorAll('header .menu .sub_menu')

		// Submenu on the touch screen
		$('header .menu_item > a.sub_link').addClass('touch_link')

		$('header .menu_item > a.sub_link').click(function (e) {
			const dropdown = $(this).next()

			if (dropdown.css('visibility') === 'hidden') {
				e.preventDefault()

				subMenus.forEach(el => el.classList.remove('show'))
				dropdown.addClass('show')

				BODY.style = 'cursor: pointer;'
			}
		})

		// Close the submenu when clicking outside it
		document.addEventListener('click', e => {
			if ($(e.target).closest('.menu').length === 0) {
				subMenus.forEach(el => el.classList.remove('show'))

				BODY.style = 'cursor: default;'
			}
		})
	}


	// Tabs
	var locationHash = window.location.hash

	$('body').on('click', '.tabs .btn', function(e) {
		e.preventDefault()

		if (!$(this).hasClass('active')) {
			let parent = $(this).closest('.tabs_container'),
				activeTab = $(this).data('content'),
				activeTabContent = $(activeTab),
				level = $(this).data('level')

			parent.find('.tabs:first .btn').removeClass('active')
			parent.find('.tab_content.' + level).removeClass('active')

			$(this).addClass('active')
			activeTabContent.addClass('active')
		}
	})

	if (locationHash && $('.tabs_container').length) {
		let activeTab = $(`.tabs button[data-content="${locationHash}"]`),
			activeTabContent = $(locationHash),
			parent = activeTab.closest('.tabs_container'),
			level = activeTab.data('level')

		parent.find('.tabs:first .btn').removeClass('active')
		parent.find('.tab_content.' + level).removeClass('active')

		activeTab.addClass('active')
		activeTabContent.addClass('active')

		$('html, body').stop().animate({ scrollTop: $activeTabContent.offset().top }, 1000)
	}


	// Brand categories
	$('.brand_categories .title').click(function(e) {
		e.preventDefault()

		$(this).toggleClass('active').next().slideToggle(300)
	})


	// Product selections
	$('.product_selections .title').click(function(e) {
		e.preventDefault()

		$(this).toggleClass('active').next().slideToggle(300)
	})


	// Change the quantity of goods
	$('body').on('click', '.amount .minus', function (e) {
		e.preventDefault()

		const $parent = $(this).closest('.amount'),
			$input = $parent.find('.input'),
			inputVal = parseFloat($input.val()),
			minimum = parseFloat($input.data('minimum')),
			step = parseFloat($input.data('step')),
			unit = $input.data('unit')

		if (inputVal > minimum) $input.val(inputVal - step + unit)
	})

	$('body').on('click', '.amount .plus', function (e) {
		e.preventDefault()

		const $parent = $(this).closest('.amount'),
			$input = $parent.find('.input'),
			inputVal = parseFloat($input.val()),
			maximum = parseFloat($input.data('maximum')),
			step = parseFloat($input.data('step')),
			unit = $input.data('unit')

		if (inputVal < maximum) $input.val(inputVal + step + unit)
	})

	$('.amount .input').keydown(function () {
		const _self = $(this),
			maximum = parseInt(_self.data('maximum'))

		setTimeout(() => {
			if (_self.val() == '' || _self.val() == 0) _self.val(parseInt(_self.data('minimum')))
			if (_self.val() > maximum) _self.val(maximum)
		})
	})


	// Smooth scrolling to anchor
	const scrollBtns = document.querySelectorAll('.scroll_btn')

	if (scrollBtns) {
		scrollBtns.forEach(element => {
			element.addEventListener('click', e => {
				e.preventDefault()

				let anchor = element.getAttribute('data-anchor')

				if($('.tabs .btn[data-content="#'+ anchor +'"]').length) {
					let activeTab = $('.tabs .btn[data-content="#'+ anchor +'"]'),
						parent = activeTab.closest('.tabs_container')

					parent.find('.tabs .btn').removeClass('active')
					parent.find('.tab_content').removeClass('active')

					activeTab.addClass('active')
					$('#' + anchor).addClass('active')
				}

				document.getElementById(anchor).scrollIntoView({
					behavior: 'smooth',
					block: 'start'
				}, 1000)
			})
		})
	}


	// Filter
	$('.products_head .mob_filter_btn, .mob_filter_close_btn, .overlay').click(function(e) {
		e.preventDefault()

		$('.filter_wrap').toggleClass('show')

		$('.filter_wrap').hasClass('show')
			? $('.overlay').fadeIn(200)
			: $('.overlay').fadeOut(200)
	})


	$('.filter .name').click(function(e) {
		e.preventDefault()

		$(this).toggleClass('active').next().slideToggle(300)
	})


	$('.filter .spoler_btn').click(function(e) {
		e.preventDefault()

		let parent = $(this).closest('.data')

		$(this).toggleClass('active')
		parent.find('.hide').slideToggle(300)
	})


	$('.filter .checkbox').click(function(e) {
		if (e.target.nodeName == 'LABEL') {
			let filterPos = $('.filter').offset(),
				checkboxPos = $(this).offset()

			$('.filter .result').css('top', checkboxPos.top - filterPos.top + 'px').fadeIn(300)
		}
	})


	$priceRange = $('.filter #price_range').ionRangeSlider({
		type: 'double',
		min: 0,
		max: 2000,
		from: 0,
		to: 1105.98,
		step: 0.01,
		onChange: data => {
			$('.filter .price_range input.from').val(data.from.toLocaleString())
			$('.filter .price_range input.to').val(data.to.toLocaleString())

			let filterPos = $('.filter').offset(),
				checkboxPos = $('.filter .price_range .irs').offset()

			$('.filter .result').css('top', checkboxPos.top - filterPos.top - 8 + 'px').fadeIn(300)
		},
		onUpdate: data => {
			$('.filter .price_range input.from').val(data.from.toLocaleString())
			$('.filter .price_range input.to').val(data.to.toLocaleString())

			let filterPos = $('.filter').offset(),
				checkboxPos = $('.filter .price_range .irs').offset()

			$('.filter .result').css('top', checkboxPos.top - filterPos.top - 8 + 'px').fadeIn(300)
		}
	}).data('ionRangeSlider')

	$('.filter .price_range .input').keyup(function () {
		$priceRange.update({
			from: parseFloat($('.filter .price_range input.from').val().replace(/\s/g, '')),
			to: parseFloat($('.filter .price_range input.to').val().replace(/\s/g, ''))
		})
	})


	$('.reset_filter_btn').click(function() {
		$('.filter .result').hide()

		$priceRange.reset()
	})


	// Catalog modal
	$('header .catalog .list a').click(function(e) {
		e.preventDefault()

		let sub = $(this).data('sub')

		$('header .catalog .list a').removeClass('active')
		$(this).addClass('active')

		$('header .catalog .sub').hide()
		$('header .catalog .sub' + sub).fadeIn(300)
	})


	// Products to cart
	$('.product .buy_btn:not(.modal_btn), .product_info .buy_btn:not(.modal_btn)').click(function(e) {
		e.preventDefault()

		$(this).addClass('active')

		Fancybox.show([{
			src: document.getElementById(e.target.getAttribute('data-modal')),
			type: 'inline'
		}])
	})


	// Products to favorite
	$('.product .favorite_btn, .product_info .favorite_btn').click(function(e) {
		e.preventDefault()

		$(this).toggleClass('active')
	})


	// Products to compare
	$('.product .compare_btn, .product_info .compare_btn').click(function(e) {
		e.preventDefault()

		$(this).toggleClass('active')
	})


	// Products view
	$('.products_head .view .grid_btn').click(function(e) {
		e.preventDefault()

		$('.products_head .view .btn').removeClass('active')
		$(this).addClass('active')

		$('.products .list_view').hide()
		$('.products .grid_view').fadeIn(300)
	})

	$('.products_head .view .list_btn').click(function(e) {
		e.preventDefault()

		$('.products_head .view .btn').removeClass('active')
		$(this).addClass('active')

		$('.products .grid_view').hide()
		$('.products .list_view').fadeIn(300)
	})


	// Checkout info
	$('#reg_type').change(function() {
		let form = $(this).closest('.form')

		if ($(this).val() == 1) {
			form.find('.reg_type2').hide()
			form.find('.reg_type1').fadeIn(300)
		}

		if ($(this).val() == 2) {
			form.find('.reg_type1').hide()
			form.find('.reg_type2').fadeIn(300)
		}
	})


	// Catalog spolers
	if (WW < 1024) {
		$('.categories .category .sub .title').removeClass('active')
		$('.categories .category .sub .list').hide()
	} else {
		$('.categories .category .sub .title').addClass('active')
		$('.categories .category .sub .list').show()
	}


	// Category spolers
	if (WW < 1024) {
		$('.category_info .sub .title').removeClass('active')
		$('.category_info .sub .list').hide()
	} else {
		$('.category_info .sub .title').addClass('active')
		$('.category_info .sub .list').show()
	}
})



window.addEventListener('load', function () {
	// Align elements in the grid
	document.querySelectorAll('.categories .grid').forEach(el => {
		let styles = getComputedStyle(el)

		categoriesHeight(el, parseInt(styles.getPropertyValue('--count')))
	})


	// Fix. header
	headerInit = true,
	headerHeight = $('header').outerHeight()

	$('header').wrap('<div class="header_wrap"></div>')
	$('.header_wrap').height(headerHeight)

	headerInit && $(window).scrollTop() > headerHeight
		? $('header').addClass('fixed')
		: $('header').removeClass('fixed')
})



window.addEventListener('scroll', function () {
	// Fix. header
	typeof headerInit !== 'undefined' && headerInit && $(window).scrollTop() > headerHeight
		? $('header').addClass('fixed')
		: $('header').removeClass('fixed')


	// 'Up' button
	$(window).scrollTop() > $(window).innerHeight()
		? $('.buttonUp').fadeIn(300)
		: $('.buttonUp').fadeOut(200)
})



window.addEventListener('resize', function () {
	WH = window.innerHeight || document.clientHeight || document.getElementsByTagName('body')[0].clientHeight

	let windowW = window.outerWidth

	if (typeof WW !== 'undefined' && WW != windowW) {
		// Overwrite window width
		WW = window.innerWidth || document.clientWidth || document.getElementsByTagName('body')[0].clientWidth


		// Catalog spolers
		if (WW < 1024) {
			$('.categories .category .sub .title').removeClass('active')
			$('.categories .category .sub .list').hide()
		} else {
			$('.categories .category .sub .title').addClass('active')
			$('.categories .category .sub .list').show()
		}


		// Category spolers
		if (WW < 1024) {
			$('.category_info .sub .title').removeClass('active')
			$('.category_info .sub .list').hide()
		} else {
			$('.category_info .sub .title').addClass('active')
			$('.category_info .sub .list').show()
		}


		// Align elements in the grid
		setTimeout(() => {
			document.querySelectorAll('.categories .grid').forEach(el => {
				let styles = getComputedStyle(el)

				categoriesHeight(el, parseInt(styles.getPropertyValue('--count')))
			})
		}, 500)


		// Fix. header
		headerInit = false
		$('.header_wrap').height('auto')

		setTimeout(() => {
			headerInit = true
			headerHeight = $('header').outerHeight()

			$('.header_wrap').height(headerHeight)

			headerInit && $(window).scrollTop() > headerHeight
				? $('header').addClass('fixed')
				: $('header').removeClass('fixed')
		}, 100)


		// Mob. version
		if (!fakeResize) {
			fakeResize = true
			fakeResize2 = false

			document.getElementsByTagName('meta')['viewport'].content = 'width=device-width, initial-scale=1, maximum-scale=1'
		}

		if (!fakeResize2) {
			fakeResize2 = true

			if (windowW < 360) document.getElementsByTagName('meta')['viewport'].content = 'width=360, user-scalable=no'
		} else {
			fakeResize = false
			fakeResize2 = true
		}
	}
})



// Align categories
function categoriesHeight(context, step) {
	let start = 0,
		finish = step,
		categories = [...context.querySelectorAll('.category')],
		categoriesName = context.querySelectorAll('.name'),
		categoriesDesc = context.querySelectorAll('.desc'),
		i = 0

	categoriesName.forEach(el => el.style.height = 'auto')
	categoriesDesc.forEach(el => el.style.height = 'auto')

	categories.forEach(el => {
		categories.slice(start, finish).forEach(el => el.setAttribute('nodeList', i))

		setHeight(context.querySelectorAll('[nodeList="' + i + '"] .name'))
		setHeight(context.querySelectorAll('[nodeList="' + i + '"] .desc'))

		start = start + step
		finish = finish + step
		i++
	})
}



// Align characteristics in comparison
function compareHeight(slider) {
	// Reset heights
	$('.compare_features > *').height('auto')
	slider.find('.features > *').height('auto')

	let productFeatures = slider.find('.features'),
		sizes = []

	// Get heights
	productFeatures.each(function () {
		$(this).find('> *').each(function () {
			if (sizes[$(this).index()]) {
				if ($(this).outerHeight() > sizes[$(this).index()]) {
					sizes[$(this).index()] = $(this).outerHeight()
				}
			} else {
				sizes[$(this).index()] = $(this).outerHeight()
			}
		})
	})

	// Set features height
	$.each(sizes, (key, data) => {
		$('.compare_features > *').eq(key).innerHeight(data)

		productFeatures.each(function () {
			$(this).find('> *').eq(key).innerHeight(data)
		})
	})
}