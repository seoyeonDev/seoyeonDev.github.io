import * as icon  from 'react-icons/si'

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

const brand = 'Singleton'


const work = [
	{
		name: 'Plan + tiful',
		description: 'Hi.',
		stack: [
			{ icon: icon.SiHtml5, name: 'HTML' },
			{ icon: icon.SiCss3, name: 'CSS' },
			{ icon: icon.SiJavascript, name: 'Javascript' },
			{ icon: icon.SiReact, name: 'ReactJS' },
		],
		linkProject: 'https://example.com',
		linkGithub: 'https://github.com',
	},
	{
		name: 'Irang',
		description: 'Etiam eget volutpat risus. Nam magna bibendum a metus dignissim, id eleifend libero luctus molestie eget.',
		stack: [
			{ icon: icon.SiHtml5, name: 'HTML' },
			{ icon: icon.SiCss3, name: 'CSS' },
			{ icon: icon.SiJavascript, name: 'Javascript' },
			{ icon: icon.SiReact, name: 'ReactJS' },
		],
		linkProject: 'https://example.com',
		linkGithub: 'https://github.com',
	},
	{
		name: '냉장고를 부탁해',
		description: 'Nullam id mauris auctor, sollicitudin sapien id, sagittis turpis proin et nunc sempe, venenatis erat.',
		stack: [
			{ icon: icon.SiHtml5, name: 'HTML' },
			{ icon: icon.SiCss3, name: 'CSS' },
			{ icon: icon.SiJavascript, name: 'Javascript' },
			{ icon: icon.SiReact, name: 'ReactJS' },
		],
		linkProject: 'https://example.com',
		linkGithub: 'https://github.com',
	},
	{
		name: 'Twitter clon',
		description: 'Cras leo mauris, gravida vel lectus ac, congue luctus odio. Sed varius varius est eget convallis sagittis sit amet.',
		stack: [
			{ icon: icon.SiHtml5, name: 'HTML' },
			{ icon: icon.SiCss3, name: 'CSS' },
			{ icon: icon.SiJavascript, name: 'Javascript' },
			{ icon: icon.SiReact, name: 'ReactJS' },
		],
		linkProject: 'https://example.com',
		linkGithub: 'https://github.com',
	},
]


const stack = [
	{
		name: 'Front End',
		items: [
			{ icon: icon.SiHtml5, name: 'HTML' },
			{ icon: icon.SiCss3, name: 'CSS' },
			{ icon: icon.SiBootstrap, name: 'Bootstrap', },
			{ icon: icon.SiJavascript, name: 'Javascript' },
			{ icon: icon.SiTypescript, name: 'Typescript' },
			{ icon: icon.SiReact, name: 'React', },
		],
	},
	{
		name: 'Back End',
		items: [
			{ icon: icon.SiNodedotjs, name: 'NodeJS' },
			{ icon: icon.SiDeno, name: 'Deno' },
			{ icon: icon.SiMongodb, name: 'MongoDB', },
			{ icon: icon.SiFirebase, name: 'Firebase', },
		],
	},
]

const contact = {
	description: 'Tenetur laudantium? Aliquid ipsum perferendis blanditiis non. Adipisci eos numquam reiciendis, rerum, quo similique reprehenderit. Adipisci eos numquam reiciendis',
	email: 'example@email.com'
}

export { profile, social, work, stack, contact, brand }