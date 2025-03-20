import Assets from './assets';
import type { Education } from '../types';

export const items: Array<Education> = [
	{
		degree: 'Bachelor\'s in Software Engineering',
		description: '',
		location: 'Milcreek, Utah',
		logo: Assets.Wgu,
		name: '',
		organization: 'Western Governors University',
		period: { from: new Date(2023, 2, 1), to: new Date(2025, 6, 1) },
		shortDescription: '',
		slug: 'dummy-education-item',
		subjects: ['Java', 'Data Structures and Algorithms', 'Cloud Fundamentals', 'Computer Architecture', 'IT Fundamentals']
	},
	{
		degree: 'Certificate Diploma',
		description: 'Backend Focused Certification - Curriculum built by leading industry professionals',
		location: 'Manchester, New Hampshire',
		logo: Assets.Snhu,
		name: '',
		organization: 'SNHU',
		period: { from: new Date(2020, 0, 1), to: new Date(2022, 5, 1) },
		shortDescription: '',
		slug: 'dummy-education-item',
		subjects: ['Java', 'Data Structures and Algorithms', 'Backend Development', 'AWS']
	},
	{
		degree: 'PhD of Computer Science',
		description: '',
		location: 'USA',
		logo: Assets.Cerritos,
		name: '',
		organization: 'MIT',
		period: { from: new Date(2023, 0, 1) },
		shortDescription: '',
		slug: 'dummy-education-item-2',
		subjects: ['Assembly', 'Rust', 'Computer Architecture', 'Algorithms and Data structures']
	}
];

export const title = 'Education';
