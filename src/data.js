import * as icon  from 'react-icons/si'
import * as iconbi  from 'react-icons/bi'
import * as iconri  from 'react-icons/ri'
import * as iconbs  from 'react-icons/bs'

const profile = {
	name: 'Lee Seoyeon',
	role: 'Back End Developer',
	description: 'Hi',
};

const social = [
	{ icon: icon.SiGithub, link: 'https://github.com/seoyeonDev' },
	{ icon: icon.SiTistory, link: 'https://skylarcoding.tistory.com/' },
	{ icon: icon.SiMaildotru, link: 'mailto:skylarlee1003@gmail.com' },
	{ icon: icon.SiInstagram, link: 'https://www.instagram.com/' },
];

const brand = 'Lee Seoyeon'


const work = [
	{
		name: 'Plan + tiful',
		description: 'Vue.js, SpringBoot를 메인으로 하여 만든 서비스입니다. RestApi, JPA 등을 사용하였습니다.',
		stack: [
			{ icon: icon.SiSpringboot, name: 'Springboot' },
			{ icon: iconbi.BiLogoJava, name: 'Java' },
			{ icon: icon.SiHtml5, name: 'HTML' },
			{ icon: icon.SiCss3, name: 'CSS' },
			{ icon: icon.SiJavascript, name: 'Javascript' },
			{ icon: icon.SiBootstrap, name: 'Bootstrap' },
			{ icon: iconri.RiVuejsFill, name: 'Vuejs' },
			{ icon: icon.SiOracle, name: 'Oracle' },
		],
		linkProject: 'https://drive.google.com/file/d/14yGWbgVBy0bRb0KqoKBZmiB3KtPRB0K3/view?usp=sharing',
		linkGithub: 'https://github.com/seoyeonDev/Plantiful',
	},
	{
		name: 'Irang',
		description: 'Java, SpringBoot, BootStrap, Oracle, JSP 등을 이용하여 만든 서비스입니다. ',
		stack: [
			{ icon: icon.SiSpringboot, name: 'SpringBoot' },
			{ icon: iconbi.BiLogoJava, name: 'Java' },
			{ icon: icon.SiHtml5, name: 'HTML' },
			{ icon: icon.SiCss3, name: 'CSS' },
			{ icon: icon.SiJavascript, name: 'Javascript' },
			{ icon: icon.SiBootstrap, name: 'Bootstrap' },
			{ icon: icon.SiOracle, name: 'Oracle' },
		],
		linkProject: 'https://example.com',
		linkGithub: 'https://github.com/seoyeonDev/Irang',
	},
	{
		name: '냉장고를 부탁해',
		description: 'Java, Oracle 등을 사용하여 만든 서비스입니다.',
		stack: [
			{ icon: icon.SiHtml5, name: 'HTML' },
			{ icon: icon.SiCss3, name: 'CSS' },
			{ icon: icon.SiJavascript, name: 'Javascript' },
			{ icon: icon.SiReact, name: 'ReactJS' },
		],
		linkProject: 'https://example.com',
		linkGithub: 'https://github.com',
	},
	// {
	// 	name: 'Twitter clon',
	// 	description: 'Cras leo mauris, gravida vel lectus ac, congue luctus odio. Sed varius varius est eget convallis sagittis sit amet.',
	// 	stack: [
	// 		{ icon: icon.SiHtml5, name: 'HTML' },
	// 		{ icon: icon.SiCss3, name: 'CSS' },
	// 		{ icon: icon.SiJavascript, name: 'Javascript' },
	// 		{ icon: icon.SiReact, name: 'ReactJS' },
	// 	],
	// 	linkProject: 'https://example.com',
	// 	linkGithub: 'https://github.com',
	// },
]


const stack = [
	{
		name: 'Front End',
		items: [
			{ icon: icon.SiHtml5, name: 'HTML' },
			{ icon: icon.SiCss3, name: 'CSS' },
			{ icon: icon.SiBootstrap, name: 'Bootstrap', },
			{ icon: icon.SiJavascript, name: 'Javascript' },
			{ icon: iconri.RiVuejsFill, name: 'Vue.js' },
			{ icon: icon.SiJquery, name: 'JQuery', },
		],
	},
	{
		name: 'Back End',
		items: [
			{ icon: icon.SiSpringboot, name: 'Spring Boot' },
			{ icon: icon.SiOracle, name: 'Oracle' },
			{ icon: iconbi.BiLogoJava, name: 'Java', },
		],
	},
	{
		name: 'Etc',
		items: [
			{ icon: iconbs.BsGithub, name: 'GitHub' },
			{ icon: icon.SiNotion, name: 'Notion' },
			{ icon: icon.SiVisualstudiocode, name: 'Visual Studio Code', },
			{ icon: icon.SiEclipseide, name: 'Eclipse' },
		],
	},
]

const contact = {
	description: 'Hi. This is my email. If you want to connect me, please feel free to send it.',
	email: 'skylarlee1003@email.com'
}

export { profile, social, work, stack, contact, brand }