import Assets from './assets';
import { getSkills } from './skills';
import { ContractType, type Experience } from '../types';

export const items: Array<Experience> = [
	{
		slug: 'test-automation-engineer-meta',
		company: 'Meta (via Solvd Inc.)',
		description: 'As a Test Automation Engineer at Meta, my role focused on ensuring compliance with FTC orders by conducting in-depth peer reviews across Java, PHP, React, Kotlin, Swift, and Objective-C. I reviewed an average of 8-15 daily code submissions, auditing documentation, data pipelines, and databases to maintain a 100% FTC-compliant code base. Additionally, I contributed to the validation of in-house automation frameworks by manually testing automated review results, ensuring accuracy in compliance enforcement and streamlining the audit process.',
		contract: ContractType.FullTime,
		type: 'Software Development',
		location: 'Home',
		period: { from: new Date(2024, 7, 1), to: new Date(2025, 2, 1) },
		skills: getSkills('ts', 'js'),
		name: 'Test Automation Engineer',
		color: 'purple',
		links: [],
		logo: Assets.Unknown,
		shortDescription: 'As a Test Automation Engineer at Meta, my role focused on ensuring compliance with FTC orders by conducting in-depth peer reviews across Java, PHP, React, Kotlin, Swift, and Objective-C. I reviewed an average of 8-15 daily code submissions, auditing documentation, data pipelines, and databases to maintain a 100% FTC-compliant code base. Additionally, I contributed to the validation of in-house automation frameworks by manually testing automated review results, ensuring accuracy in compliance enforcement and streamlining the audit process.'
	},
	{
		slug: 'software-freelance',
		company: 'Solvd Inc.',
		description: 'As a Test Automation Engineering Intern at Solvd, my role focused on developing Selenium-based automated tests for web and mobile applications, ensuring functionality across various views and validating API responses. I strengthened my Java expertise through real-world projects, implementing Object-Oriented Design principles and utilizing tools like MyBatis, JDBC, and SQL databases to build transactional systems. Additionally, I actively participated in code reviews, debugging sessions, and algorithm-based assignments, reinforcing both technical and problem-solving skills in a collaborative environment.',
		contract: ContractType.Internship,
		type: 'Test Automation',
		location: 'Home',
		period: { from: new Date(2023, 4, 1), to: new Date(2023, 11, 1) },
		skills: getSkills('svelte', 'ts', 'sass', 'css', 'html', 'js'),
		name: 'Test Automation Engineer Intern',
		color: 'green',
		links: [],
		logo: Assets.Unknown,
		shortDescription: 'Creating awesome applications for customers.'
	},
	{
		slug: 'software-freelance-junior',
		company: 'Self-employed',
		description: 'Creating awesome applications for customers.',
		contract: ContractType.Freelance,
		type: 'Software Development',
		location: 'Home',
		period: { from: new Date(2022, 0, 1), to: new Date() },
		skills: getSkills('css', 'html', 'js'),
		name: 'Junior Freelancer',
		color: 'green',
		links: [],
		logo: Assets.Unknown,
		shortDescription: 'Creating awesome applications for customers.'
	}
];

export const title = 'Experience';
