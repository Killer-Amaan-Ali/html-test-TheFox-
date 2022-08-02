const javascript = 'javascript:;'
// console.log(window.location.pathname)

let Links = [
	{
		title: 'index',
		href: `index`,
		class: '',
	},
	{
		title: 'pages',
		href: 'pages',
		class: '',
	},
	{
		title: 'portfolio',
		href: 'portfolio',
		class: '',
	},
	{
		title: 'blog',
		href: 'blog',
		class: '',
	},
	{
		title: 'shop',
		href: 'shop',
		class: '',
	},
	{
		title: 'travel',
		href: 'travel',
		class: '',
	},
	{
		title: 'shortcodes',
		href: 'shortcodes',
		class: '',
	},
	{
		title: 'features',
		href: 'features',
		class: '',
		style: '',
	},
	{
		title: 'contact',
		href: `contact`,
		class: '',
	},
]

const FS1Lhs = [
	'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem, inventore? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem, inventore?',
	'Lorem ipsum, dolor sit amet consecteturadipisicing elit.',
	javascript,
	'Read More',
]
const RhsImg = './assets/images/twitter.png'
const FS1Rhs = [
	{
		title: 'Subscribe',
		para: 'to RSS feed',
		img: RhsImg,
		alt: 'twitter',
		href: javascript,
	},
	{
		title: 'Subscribe',
		para: 'to RSS feed',
		img: RhsImg,
		alt: 'twitter',
		href: javascript,
	},
	{
		title: 'Subscribe',
		para: 'to RSS feed',
		img: RhsImg,
		alt: 'twitter',
		href: javascript,
	},
	{
		title: 'Subscribe',
		para: 'to RSS feed',
		img: RhsImg,
		alt: 'twitter',
		href: javascript,
	},
	{
		title: 'Subscribe',
		para: 'to RSS feed',
		img: RhsImg,
		alt: 'twitter',
		href: javascript,
	},
	{
		title: 'Subscribe',
		para: 'to RSS feed',
		img: RhsImg,
		alt: 'twitter',
		href: javascript,
	},
]
const FS2Img = './assets/images/footer-blog.png'
const FS2 = [
	'latest news',
	{
		title: 'title here',
		para: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis, eius.',
		date: '21 december 2017',
		img: FS2Img,
		alt: 'twitter',
	},
	{
		title: 'title here',
		para: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis, eius.',
		date: '21 december 2017',
		img: FS2Img,
		alt: 'twitter',
	},
	{
		title: 'title here',
		para: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis, eius.',
		date: '21 december 2017',
		img: FS2Img,
		alt: 'twitter',
	},
]

const FS3Widget = [
	'tags widget',
	{
		title: 'awesome',
		href: javascript,
		class: 'primaryButton',
	},
	{
		title: 'beautiful',
		href: javascript,
		class: 'primaryButton',
	},
	{
		title: 'flat design',
		href: javascript,
		class: 'primaryButton',
	},
	{
		title: 'ios',
		href: javascript,
		class: 'primaryButton',
	},
	{
		title: 'themeforest',
		href: javascript,
		class: 'primaryButton',
	},
	{
		title: 'mass',
		href: javascript,
		class: 'primaryButton',
	},
]

const FS3Useful = [
	'Useful Links',
	{
		title: 'Web Design Resources',
		href: javascript,
	},
	{
		title: 'Web Design Resources',
		href: javascript,
	},
	{
		title: 'Web Design Resources',
		href: javascript,
	},
	{
		title: 'Web Design Resources',
		href: javascript,
	},
	{
		title: 'Web Design Resources',
		href: javascript,
	},
	{
		title: 'Web Design Resources',
		href: javascript,
	},
	{
		title: 'Web Design Resources',
		href: javascript,
	},
	{
		title: 'Web Design Resources',
		href: javascript,
	},
	{
		title: 'Web Design Resources',
		href: javascript,
	},
	{
		title: 'Web Design Resources',
		href: javascript,
	},
]
const FS4 = [
	'Contact Info',
	{
		title: 'office 1',
		para: 'Lorem Ipsum, Dolor Sit Amet Consectetur Adipisicing Elit. Perferendis, Eius.',
		loc: 'vietnam',
	},
	{
		title: 'office 1',
		para: 'Lorem Ipsum, Dolor Sit Amet Consectetur Adipisicing Elit. Perferendis, Eius.',
		loc: 'vietnam',
	},
	{
		title: 'office 1',
		para: 'Lorem Ipsum, Dolor Sit Amet Consectetur Adipisicing Elit. Perferendis, Eius.',
		loc: 'vietnam',
	},
]
let fileName
const ext = './'
let head
let error404
let errorTag = document.getElementById('errorTag')
if (document?.body?.attributes?.page?.nodeValue) {
	fileName = document?.body?.attributes?.page?.nodeValue
} else {
	error404 = `please provide an attribute to the <body> tag -- page="thisPageName"`
	fileName = error404
	console.error(
		`${error404}. It may lead to inumerable errors (perhaps styling problems)`
	)
	errorTag.classList.add('script')
	errorTag.innerHTML = `<p>${error404}</p>`
}

if (document.getElementById('head')) {
	head = document.getElementById('head')
	let title = fileName || error404
	title = title.charAt(0).toUpperCase() + title.slice(1)
	head.innerHTML = ``
	head.innerHTML = `
	<meta charset="UTF-8" />
	<meta http-equiv="X-UA-Compatible" content="IE=edge" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<title>The Fox | ${title}</title>
	<link rel="icon" href="./assets/images/fox-icon.png">
	<link rel="stylesheet" href="./assets/css/common.css" />
	${
		fileName !== error404
			? `<link rel="stylesheet" href="./assets/css/${fileName}.css" />`
			: ``
	}
`
}

let disabled = []
let indexLink = './'
let header = []
for (
	let index = 0;
	index < document.body.getElementsByTagName('header').length;
	index++
) {
	if (document.body.getElementsByTagName('header')[index]) {
		header[index] = document.body.getElementsByTagName('header')[index]
		let searchDisplay = true
		if (header[index].attributes?.search?.nodeValue.length > 0) {
			searchDisplay = JSON.parse(header[index].attributes?.search?.nodeValue)
		}
		console.log('search icon', searchDisplay)
		header[index].innerHTML = `
		<div class="container">
			<div class="headerWrapper">
				<div class="lhs">
					<a href='${indexLink}' title="thefox" id="headerImg">
						<img src="./assets/images/fox-logo.png" class="logo whiteLogo" alt="Logo">
						<img src="./assets/images/fox-logo-black.png" class="logo blackLogo" alt="Logo">
					</a>
					<a class="hamburger" id="hamburger" onclick="showMenu(this)">
						<img src="./assets/images/hamburger.png" alt="hamburger">
					</a>
				</div>
				<div class="rhs" id="rhs">
					<ul id="headerLinks">
						(dependancy of 'common.js' module is missing, it may lead to errors/bugs, pls import it,
						or 'common.js' is imported first, import it last!)
					</ul>
					${
						searchDisplay === false
							? ''
							: `<img
										src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Search_Icon.svg/2048px-Search_Icon.svg.png"
										class="search"
										alt="search"
									/>`
					}
				</div>
			</div>
		</div>
`
		header[index].removeAttribute('search')
	}
}
if (document.body.getElementsByTagName('footer')) {
	let footer = document.body.getElementsByTagName('footer')[0]
	footer.setAttribute('onclick', 'hideMenu(this)')
	footer.innerHTML = `
		<div class="primaryFooterOuterWrapper">
			<div class="container">
				<div class="primaryFooterInnerWrapper">
					<div>
						<div class="footerSection section1">
							<a href='${indexLink}' title="thefox" id="footerImg">
								<img src="./assets/images/fox-logo.png" alt="logo">
							</a>
							<div class="lhs" id="fLhs">
								<ul>
									(dependancy of 'common.js' module is missing, it may lead to errors/bugs, pls import it,
or 'common.js' is imported first, import it last!)
								</ul>
							</div>
							<div class="rhs" id="fRhs">
							</div>
						</div>
						<div class="footerSection section2" id="fs2">
							<div class="blog">
								<div class="blogLhs">
								</div>
								<div class="blogRhs">
								</div>
							</div>
						</div>
					</div>
					<div>
						<div class="footerSection section3">
							<h5 id="footerWidgetsTitle"></h5>
							<div class="footerWidgets">
								<ul id="footerWidgets">

(dependancy of 'common.js' module is missing, it may lead to errors/bugs, pls import it,
or 'common.js' is imported first, import it last!)
								</ul>
							</div>
							<h5 id="footerUsefulLinksTitle"></h5>
							<div class="footerLinks">
								<ul id="footerUsefulLinks">

(dependancy of 'common.js' module is missing, it may lead to errors/bugs, pls import it,
or 'common.js' is imported first, import it last!)
								</ul>
							</div>
						</div>
						<div class="footerSection section4" id="fs4">
							<div class="contact">
							</div>
						</div>
					</div>
				</div>
			</div>

			<div class="secondaryFooterOuterWrapper">
				<div class="container">
					<div class="secondaryFooterInnerWrapper">
						<div class="lhs">
							<p>Copyright
							<p id="__date" style="margin: 0 4px;">2014</p> <a href="https://github.com/Killer-Amaan-Ali/html-test"
								target="_blank">the<b>fox</b></a></p>&nbsp|&nbsp
							<p>All rights reserved</p>&nbsp|&nbsp
							<p>designed by <a href="https://github.com/Killer-Amaan-Ali/" target="_blank">Amaan</a></p>
						</div>
						<div class="rhs">
							<ul id="footerLinks">

(dependancy of 'common.js' module is missing, it may lead to errors/bugs, pls import it,
or 'common.js' is imported first, import it last!)
							</ul>
						</div>
					</div>
				</div>
			</div>
`
}

let menuList = document.getElementById('rhs')

const showMenu = () => {
	for (let i = 0; i < menuList.classList.length; i++) {
		if (menuList.classList[i] === 'rhsActive') {
			localStorage.setItem('drawer', false)
		} else {
			localStorage.setItem('drawer', true)
		}
	}
	menuList.classList.toggle('rhsActive')
}

const hideMenu = () => {
	menuList?.classList?.remove('rhsActive')
	localStorage.setItem('drawer', false)
}
for (
	let index = 0;
	index < document.body.getElementsByTagName('header').length;
	index++
) {
	if (
		document.body.getElementsByTagName('header')[index]?.attributes?.drawer
			?.nodeValue === 'true'
	) {
		if (localStorage.getItem('drawer') === 'true') {
			menuList.classList.add('rhsActive')
		} else {
			menuList.classList.remove('rhsActive')
		}
	}
}

if (document?.body.getElementsByTagName('section')) {
	let section = document?.body.getElementsByTagName('section')
	for (let i = 0; i < section.length; i++) {
		// section[i].setAttribute('onclick', 'hideMenu(this)')
		section[i].addEventListener('click', hideMenu(this))
	}
}
let headerProps = []
if (
	document.body.getElementsByTagName('header')[0]?.attributes?.headerLinks
		?.nodeValue.length > 0
) {
	headerProps = JSON.parse(
		document.body.getElementsByTagName('header')[0]?.attributes?.headerLinks
			?.nodeValue
	)
	if (headerProps.length > 0) {
		// Links = Links.concat(headerProps)
		Links = headerProps
	}
}
console.log('header links---', Links)

let hUl
if (
	document.body.getElementsByTagName('header')[0] &&
	document.getElementById('headerLinks')
) {
	hUl = document.getElementById('headerLinks')
	hUl.innerHTML = ''
}

let fUl
disabled = []
let common = ''
for (let i = 0; i < Links.length; i++) {
	Links[i].title === fileName && (Links[i].class = 'active')

	Links[i].title === 'index' && (Links[i].title = 'home')
	if (Links[i].title === 'home' && Links[i].class === 'active') {
		document.getElementById('headerImg').removeAttribute('href')
		document.getElementById('footerImg').removeAttribute('href')
	}

	Links[i].title === 'features' &&
		((Links[i].title = 'features !'),
		(Links[i].style = 'color:var(--cyan);font-weight:900;'))

	Links[i].class === 'active' && (disabled[i] = 'true')

	if (
		document.body.getElementsByTagName('header')[0] &&
		document.getElementById('headerLinks')
	) {
		common += `<li>
      <a
        title='${
					Links[i].title.charAt(0).toUpperCase() + Links[i].title.slice(1)
				}'
        id='headerLinks${i}'
        ${Links[i]?.style?.length > 0 ? `style='${Links[i]?.style}'` : ''}
        ${Links[i]?.class?.length > 0 ? `class='${Links[i]?.class}'` : ''}
        ${Links[i]?.target?.length > 0 ? `target='${Links[i]?.target}'` : ''}
        ${
					disabled[i] !== 'true' &&
					`href=${`${ext}${Links[i].href || Links[i].title}.html`}`
				}
        onclick='activeLink(this)'
			>
        ${Links[i].title}
      </a>
    </li>
    `
		hUl.innerHTML = common
	} else {
		common = 'loading..'
	}

	if (
		document.body.getElementsByTagName('footer') &&
		document.getElementById('footerLinks')
	) {
		fUl = document.getElementById('footerLinks')
		fUl.innerHTML = common

		// fUl.innerHTML = ''
		// fUl.innerHTML += `<li>
		//   <a
		//     title='${
		// 			Links[i].title.charAt(0).toUpperCase() + Links[i].title.slice(1)
		// 		}'
		//     id='footerLinks${i}'
		//     ${Links[i]?.style?.length > 0 ? `style='${Links[i]?.style}'` : ''}
		//     ${Links[i]?.class?.length > 0 ? `class='${Links[i]?.class}'` : ''}
		//     ${Links[i]?.target?.length > 0 ? `target='${Links[i]?.target}'` : ''}
		//     ${
		// 			disabled[i] !== 'true' &&
		// 			`href=${`${ext}${Links[i].href || Links[i].title}.html`}`
		// 		}
		//     onclick='activeLink(this)'
		// 	>
		//     ${Links[i].title}
		//   </a>
		// </li>
		// `
	}
	if (
		document.body.getElementsByTagName('header')[0] &&
		document.getElementById('headerLinks')
	) {
		header[0]?.removeAttribute('headerLinks')
	}
}
let headerActiveLinks = [],
	footerActiveLinks = []
for (let i = 0; i <= Links.length; ++i) {
	headerActiveLinks[i] = document.getElementById(`headerLinks${i}`)
	footerActiveLinks[i] = document.getElementById(`footerLinks${i}`)
}
const activeLink = (element) => {
	for (let i = 0; i < Links.length; i++) {
		headerActiveLinks[i].classList = ''
		footerActiveLinks[i].classList = ''
		element.classList.add('active')

		headerActiveLinks[i].classList == 'active'
			? footerActiveLinks[i].classList.add('active')
			: footerActiveLinks[i].classList == 'active' &&
			  headerActiveLinks[i].classList.add('active')
	}
}

let footerWidgets
let footerWidgetsTitle

if (
	document.body.getElementsByTagName('footer') &&
	document.getElementById('footerWidgets') &&
	document.getElementById('footerWidgetsTitle')
) {
	footerWidgets = document.getElementById('footerWidgets')
	footerWidgets.innerHTML = ''
	footerWidgetsTitle = document.getElementById('footerWidgetsTitle')
	footerWidgetsTitle.innerHTML = ''

	let footerWidgetLink = []
	footerWidgetsTitle.innerHTML = FS3Widget[0]
	let randomNo = Math.floor(Math.random() * FS3Widget.length)
	randomNo <= 0
		? (randomNo = 1)
		: randomNo === FS3Widget.length
		? (randomNo = FS3Widget.length - 1)
		: randomNo
	FS3Widget[randomNo].class = `secondaryButton cyan`
	for (let i = 1; i < FS3Widget.length; i++) {
		footerWidgets.innerHTML += `
			<li>
				<a
					title='${FS3Widget[i].title}'
					id='FS3Widget${i}'
					class='${FS3Widget[i].class || 'primaryButton'}'
					onclick='footerActiveLink(this)'
					href=${FS3Widget[i].href}
				>
					${FS3Widget[i].title}
				</a>
			</li>`
	}
	for (let i = 1; i < FS3Widget.length; ++i) {
		footerWidgetLink[i] = document.getElementById(`FS3Widget${i}`)
	}

	function footerActiveLink(element) {
		for (let i = 1; i < FS3Widget.length; ++i) {
			footerWidgetLink[i].classList = 'primaryButton'
		}
		element.classList = 'secondaryButton cyan'
	}

	let fLhs = document.getElementById('fLhs')
	fLhs.innerHTML = ``
	fLhs.innerHTML = `
			<p>
			${FS1Lhs[0]}
				<br>
				<br>
			${FS1Lhs[1]}
			</p>
			<ul>
				<li>
					<a href=${FS1Lhs[2]}>
						${FS1Lhs[3]}
					</a>
				</li>
			</ul>
		`

	let fRhs = document.getElementById('fRhs')
	fRhs.innerHTML = ``
	for (let i = 0; i < FS1Rhs.length; i++) {
		fRhs.innerHTML += `
		<div class="socialLinks">
			<div class="linkLhs">
				<a href=${FS1Rhs[i].href} class="cyan">
					<img src=${FS1Rhs[i].img} alt=${FS1Rhs[i].alt}>
				</a>
			</div>
			<div class="linkRhs">
				<p>${FS1Rhs[i].title}</p>
				<p>${FS1Rhs[i].para}</p>
			</div>
		</div>
`
	}

	let fs2 = document.getElementById('fs2')
	fs2.innerHTML = ``
	fs2.innerHTML = `<h5>${FS2[0]}</h5>`
	for (let i = 1; i < FS2.length; i++) {
		fs2.innerHTML += `
		<div class="blog">
			<div class="blogLhs">
				<img src=${FS2[i].img} alt=${FS2[i].alt}>
			</div>
			<div class="blogRhs">
				<p class="title">${FS2[i].title}</p>
				<p>${FS2[i].para}</p>
				<p>${FS2[i].date}</p>
			</div>
		</div>
`
	}
	let footerUsefulLinks = document.getElementById('footerUsefulLinks')
	let footerUsefulLinksTitle = document.getElementById('footerUsefulLinksTitle')
	footerUsefulLinks.innerHTML = ``
	footerUsefulLinksTitle.innerHTML = ``

	footerUsefulLinksTitle.innerHTML = FS3Useful[0]
	for (let i = 1; i < FS3Useful.length; i++) {
		footerUsefulLinks.innerHTML += `
<li>
	<a
		title='${FS3Useful[i].title}'
		href=${FS3Useful[i].href}
	>
	${FS3Useful[i].title}
	</a>
</li>
`
	}
	let fs4 = document.getElementById('fs4')
	fs4.innerHTML = ``
	fs4.innerHTML = `<h5>${FS4[0]}</h5>`
	for (let i = 1; i < FS4.length; i++) {
		fs4.innerHTML += `
			<div class="contact">
				<p class="title">${FS4[i].title}</p>
				<p>${FS4[i].para}</p>
				<p>${FS4[i].loc}</p>
			</div>
		`
	}
	let date = document.getElementById('__date')
	let currentDate = new Date().getFullYear()
	date.innerHTML = ` ${currentDate} `
}