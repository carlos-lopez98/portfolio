import { Platform } from '$lib/types';
import { getSkills } from './skills';

export const title = 'Home';

export const name = 'Carlos';

export const lastName = 'Jimenez';

export const description =
	'I am a Junior Software Engineer looking to jump-start a long career in the tech industry. My current experience includes 2 years of Test Automation Engineering using Selenium and Java. My current development tech stack focuses on back-end development with Java and Spring Boot. I always strive for my best and hope to one day move into AI Development.';

export const links: Array<{ platform: Platform; link: string }> = [
	{ platform: Platform.GitHub, link: 'https://github.com/carlos-lopez98' },
	{
		platform: Platform.Linkedin,
		link: 'https://www.linkedin.com/in/carlos-jimenez-lopez-profile/'
	},
	{
		platform: Platform.Email,
		link: 'mailto:cjimenez9811@gmail.com'
	}
];

export const skills = getSkills('java', 'spring boot', 'selenium', 'aws');
