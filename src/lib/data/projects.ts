import Assets from './assets';
import { getSkills } from './skills';
import type { Project } from '../types';

export const items: Array<Project> = [
	{
		slug: 'crime-watchers',
		color: '#ff3e00',
		description:
			'Fullstack web application designed to bring a better sense of safety into a user\'s neighborhood, think Nextdoor App.',
		shortDescription:
			'A Nextdoor App Clone',
		links: [{ to: 'https://github.com/carlos-lopez98/CrimeWatchers', label: 'GitHub' }],
		logo: Assets.Svelte,
		name: 'Crime Watchers',
		period: {
			from: new Date(2022, 11, 1), to: new Date(2023, 1, 26)
		},
		skills: getSkills('java', 'spring boot', 'aws', 'css', 'html', 'js'),
		type: 'Web Application',
		screenshots: [
			{
				label: 'screen 1',
				src: 'https://user-images.githubusercontent.com/90943184/212566731-8d182c15-8a0d-4b27-b918-dfc968963196.gif'
			}
		]
	},
	{
		slug: 'e-groceries',
		color: '#5e95e3',
		description:
			'Full Stack Web Application intended for inventory management, at the time of fruition the app was specifically geared towards grocers, and intended on helping them monitor stock levels.',
		shortDescription:
			'Inventory Management Web-App',
		links: [{ to: 'https://github.com/carlos-lopez98/E-Groceries', label: 'GitHub' }],
		logo: Assets.Unknown,
		name: 'E-Groceries',
		period: {
			from: new Date(2022, 10, 1), to: new Date(2022, 12, 1)
		},
		skills: getSkills('java', 'aws', 'spring boot', 'js', 'css', 'html'),
		type: 'Web Application'
	}

];

export const title = 'Projects';
