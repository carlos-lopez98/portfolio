import Assets from './assets';
import { getSkills } from './skills';
import { ContractType, type Experience } from '../types';

export const items: Array<Experience> = [
	{
		slug: 'test-automation-engineer-meta',
		company: 'Meta (via Solvd Inc.)',
		description: 'As a Test Automation Engineer at Meta, my role focused on ensuring compliance with FTC orders by conducting in-depth peer reviews across Java, PHP, React, Kotlin, Swift, and Objective-C. I reviewed an average of 8-15 daily code submissions, auditing documentation, data pipelines, and databases to maintain a 100% FTC-compliant code base. Additionally, I contributed to the validation of in-house automation frameworks by manually testing automated review results, ensuring accuracy in compliance enforcement and streamlining the audit process.',
		contract: ContractType.FullTime,
		type: 'Test Automation',
		location: 'Home',
		period: { from: new Date(2024, 7, 1), to: new Date(2025, 2, 1) },
		skills: getSkills('ts', 'js'),
		name: 'Test Automation Engineer',
		color: 'purple',
		links: [],
		logo: Assets.Unknown,
		shortDescription: 'Ensured FTC compliance through daily peer reviews and provided validation for automation frameworks.'
	},
	{
		slug: 'test-automation-intern',
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
		shortDescription: 'Learned the ropes of test automation - focused primarily on learning Selenium and Java Concepts.'
	},
	{
		slug: 'key-accounts-logistics',
		company: 'Biocair',
		description: 'As a Key Accounts Logistics Specialist at Biocair, my role expanded to managing a broader range of clients while also diving into data analysis and performance tracking. I was responsible for tracking KPIs across all key accounts, analyzing client lanes, pricing, and vendor performance to identify trends and improve service consistency. By comparing logistics strategies across accounts, I helped optimize operations, strengthen client relationships, and enhance overall efficiency.',
		contract: ContractType.FullTime,
		type: 'Pharmaceutical Supply Chain',
		location: 'Carson, CA',
		period: { from: new Date(2024, 05, 1), to: new Date(2024, 07, 1) },
		skills: getSkills('css', 'html', 'js'),
		name: 'Key Accounts Logistics Specialist',
		color: 'blue',
		links: [],
		logo: Assets.Unknown,
		shortDescription: 'Played an analytical role in tracking KPIs across multiple Biotech customers.'
	},
	{
		slug: 'cell-and-gene-therapy-logistics',
		company: 'Biocair',
		description: 'As a Cell and Gene Therapy Logistics Specialist at Biocair, I managed global supply chain operations, coordinating 1,000+ shipments of biologics, medical devices, and clinical trial therapies. I ensured time-sensitive deliveries while adhering to strict regulatory requirements from agencies such as the FDA, CDC, USDA, and other global regulatory bodies.',
		contract: ContractType.FullTime,
		type: 'Pharmaceutical Supply Chain',
		location: 'Carson, CA',
		period: { from: new Date(2023, 04, 1), to: new Date(2024, 05, 1) },
		skills: getSkills('css', 'html', 'js'),
		name: 'Cell and Gene Therapy Logistics Specialist',
		color: 'blue',
		links: [],
		logo: Assets.Unknown,
		shortDescription: 'Handled all global supply chain operations for multiple Biotech customers.'
	},
	{
		slug: 'air-griley',
		company: 'Griley Air Freight',
		description: 'As an Air Freight Specialist at Griley Air Freight, I served as an on-site freight coordinator, managing logistics at multiple warehouse locations. I assessed freight needs, scheduled and rotated drivers, coordinated warehouse loading for airline deliveries, and ensured all documentation was accurate and error-free to keep shipments moving efficiently.',
		contract: ContractType.FullTime,
		type: 'Air Freight Transportation',
		location: 'Hawthorne, CA',
		period: { from: new Date(2022, 02, 1), to: new Date(2023, 03, 1) },
		skills: getSkills('css', 'html', 'js'),
		name: 'Logistics Specialist',
		color: 'red',
		links: [],
		logo: Assets.Unknown,
		shortDescription: 'Acted as a liaison between multiple teams and oversaw outbound warehouse operations.'
	}
];

export const title = 'Experience';
