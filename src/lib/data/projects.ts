import Assets from './assets';
import { getSkills } from './skills';
import type { Project } from '../types';

export const items: Array<Project> = [
	{
		slug: '',
		color: 'blue',
		description:
			'',
		shortDescription:
			'My portfolio. You\'re looking at it.',
		links: [{ to: 'https://github.com/carlos-lopez98/portfolio', label: 'GitHub' }],
		logo: Assets.Portfolio,
		name: 'Portfolio',
		period: {
			from: new Date(2023, 0, 12), to: new Date(2023, 2, 12)
		},
		skills: getSkills('ts', 'css', 'html', 'sass'),
		type: 'Web Application',
		screenshots: [
		]
	},
	{
		slug: 'crime-watchers',
		color: 'black',
		description:
			'Fullstack web application designed to bring a better sense of safety into a user\'s neighborhood, think Nextdoor App.',
		shortDescription:
			'A Nextdoor App Clone',
		links: [{ to: 'https://github.com/carlos-lopez98/CrimeWatchers', label: 'GitHub' }],
		logo: Assets.CrimeWatchers,
		name: 'Crime Watchers',
		period: {
			from: new Date(2022, 11, 1), to: new Date(2023, 1, 26)
		},
		skills: getSkills('java', 'spring boot', 'aws', 'css', 'html', 'js'),
		type: 'Web Application',
		screenshots: [
			{
				label: 'Short Demo',
				src: 'https://user-images.githubusercontent.com/90943184/212566731-8d182c15-8a0d-4b27-b918-dfc968963196.gif'
			}
		]
	},
	{
		slug: 'e-groceries',
		color: 'red',
		description:
			'Full Stack Web Application intended for inventory management, at the time of fruition the app was specifically geared towards grocers, and intended on helping them monitor stock levels.',
		shortDescription:
			'Inventory Management Web-App',
		links: [{ to: 'https://github.com/carlos-lopez98/E-Groceries', label: 'GitHub' }],
		logo: Assets.Egroceries,
		name: 'E-Groceries',
		period: {
			from: new Date(2022, 10, 1), to: new Date(2022, 12, 1)
		},
		skills: getSkills('java', 'aws', 'spring boot', 'js', 'css', 'html'),
		type: 'Web Application',
		screenshots: [
			{
				label: 'Home Screen',
				src: 'https://user-images.githubusercontent.com/90943184/210430121-2c7454d2-d37e-4bb8-89fe-b66464c89ef8.jpg'
			}
		]
	},
	{
		slug: 'blog-api',
		color: 'cornflowerblue',
		description:
			'This is a backend-focused API designed to reinforce advanced Spring Boot concepts such as exception handling, validation, JPA integration, pagination, Swagger documentation, and testing with MockMVC. Beyond Spring, the project’s backend and database will be hosted on AWS, showcasing cloud skills including configuration, infrastructure setup, and production-level deployment.',
		shortDescription:
			'Blog Platform API - Will be hosted live on AWS',
		links: [{ to: '', label: 'GitHub' }],
		logo: Assets.Blogapi,
		name: 'Blog Platform API',
		period: {
			from: new Date(2025, 0, 1), to: new Date(9999, 2, 1)
		},
		skills: getSkills('java', 'spring boot', 'aws', 'postgres'),
		type: 'Work in Progress'
	},
	{
		slug: 'task-buddy-api',
		color: 'orange',
		description:
			'A personal review project for reinforcing Spring Boot fundamentals, JPA relationships, and clean API design using DTOs and mappers.',
		shortDescription:
			'Task Management API - Database + Spring Boot Fundamentals',
		links: [{ to: 'https://github.com/carlos-lopez98/task-api', label: 'GitHub' }],
		logo: Assets.Taskbuddyapi,
		name: 'Task Buddy API',
		period: {
			from: new Date(2025, 0, 1), to: new Date(2025, 4, 1)
		},
		skills: getSkills('java', 'spring boot', 'postgres'),
		type: 'Spring Boot - Backend API'
	},
	{
		slug: 'book-api',
		color: 'green',
		description:
			'Built to practice Spring Boot setup, layered architecture, and REST API design. Uses in-memory data, DTOs, and dependency injection.',
		shortDescription:
			'Book Management API - Spring Boot Fundamentals Project',
		links: [{ to: 'https://github.com/carlos-lopez98/book-api', label: 'GitHub' }],
		logo: Assets.Bookapi,
		name: 'Book API',
		period: {
			from: new Date(2025, 0, 1), to: new Date(2025, 2, 1)
		},
		skills: getSkills('java', 'spring boot'),
		type: 'Spring Boot - Backend API'
	},

];

export const title = 'Projects';
