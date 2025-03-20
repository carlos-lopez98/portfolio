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
				src: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'
			},
			{
				label: '2',
				src: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'
			},
			{
				label: '3',
				src: 'https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
			},
			{
				label: '4',
				src: 'https://images.unsplash.com/photo-1542903660-eedba2cda473?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
			},
			{
				label: '5',
				src: 'https://images.unsplash.com/photo-1619410283995-43d9134e7656?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
			},
			{
				label: '6',
				src: 'https://images.unsplash.com/photo-1585079542156-2755d9c8a094?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
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
