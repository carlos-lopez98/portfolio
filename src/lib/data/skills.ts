import Assets from './assets';
import type { Skill, SkillCategory } from '../types';
import svelte from '../md/svelte.md?raw';
import { omit, type StringWithAutoComplete } from '@riadh-adrani/utils';

const defineSkillCategory = <S extends string>(data: SkillCategory<S>): SkillCategory<S> => data;

const categories = [
	defineSkillCategory({ name: 'Programming Languages', slug: 'pro-lang' }),
	defineSkillCategory({ name: 'Frameworks', slug: 'framework' }),
	defineSkillCategory({ name: 'Libraries', slug: 'library' }),
	defineSkillCategory({ name: 'Langauges', slug: 'lang' }),
	defineSkillCategory({ name: 'Databases', slug: 'db' }),
	defineSkillCategory({ name: 'ORMs', slug: 'orm' }),
	defineSkillCategory({ name: 'DevOps', slug: 'devops' }),
	defineSkillCategory({ name: 'Testing', slug: 'test' }),
	defineSkillCategory({ name: 'Dev Tools', slug: 'devtools' }),
	defineSkillCategory({ name: 'Markup & Style', slug: 'markup-style' }),
	defineSkillCategory({ name: 'Design', slug: 'design' }),
	defineSkillCategory({ name: 'Soft Skills', slug: 'soft' })
] as const;

const defineSkill = <S extends string>(
	skill: Omit<Skill<S>, 'category'> & {
		category?: StringWithAutoComplete<(typeof categories)[number]['slug']>;
	}
): Skill<S> => {
	const out: Skill<S> = omit(skill, 'category');

	if (skill.category) {
		out.category = categories.find((it) => it.slug === skill.category);
	}

	return out;
};

export const items = [
	defineSkill({
		slug: 'java',
		color: 'orange',
		description:
			'',
		logo: Assets.Java,
		name: 'Java',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'spring boot',
		color: 'green',
		description:
			'',
		logo: Assets.SpringBoot,
		name: 'Spring Boot',
		category: 'framework'
	}),
	defineSkill({
		slug: 'selenium',
		color: 'green',
		description:
			'',
		logo: Assets.Selenium,
		name: 'Selenium',
		category: 'framework'
	}),
	defineSkill({
		slug: 'mybatis',
		color: 'black',
		description:
			'',
		logo: Assets.Mybatis,
		name: 'MyBatis',
		category: 'framework'
	}),
	defineSkill({
		slug: 'junit',
		color: 'red',
		description:
			'',
		logo: Assets.Junit,
		name: 'JUnit',
		category: 'framework'
	}),
	defineSkill({
		slug: 'mockito',
		color: 'green',
		description:
			'',
		logo: Assets.Mockito,
		name: 'Mockito',
		category: 'framework'
	}),
	defineSkill({
		slug: 'aws',
		color: 'orange',
		description:
			'',
		logo: Assets.AWS,
		name: 'AWS',
		category: 'devops'
	}),
	defineSkill({
		slug: 'reactjs',
		color: 'cyan',
		description:
			'',
		logo: Assets.ReactJs,
		name: 'React Js',
		category: 'library'
	}),

	// defineSkill({
	// 	slug: 'js',
	// 	color: 'yellow',
	// 	description:
	// 		'',
	// 	logo: Assets.JavaScript,
	// 	name: 'Javascript',
	// 	category: 'pro-lang'
	// }),
	// defineSkill({
	// 	slug: 'ts',
	// 	color: 'blue',
	// 	description:
	// 		'',
	// 	logo: Assets.TypeScript,
	// 	name: 'Typescript',
	// 	category: 'pro-lang'
	// }),
	defineSkill({
		slug: 'css',
		color: 'blue',
		description:
			'',
		logo: Assets.CSS,
		name: 'CSS',
		category: 'markup-style'
	}),
	defineSkill({
		slug: 'html',
		color: 'orange',
		description:
			'',
		logo: Assets.HTML,
		name: 'HTML',
		category: 'markup-style'
	}),
	defineSkill({
		slug: 'sass',
		color: 'pink',
		description:
			'',
		logo: Assets.Sass,
		name: 'Sass',
		category: 'markup-style'
	})
	// defineSkill({
	// 	slug: 'svelte',
	// 	color: 'orange',
	// 	description: svelte,
	// 	logo: Assets.Svelte,
	// 	name: 'Svelte',
	// 	category: 'library'
	// }),

] as const;

export const title = 'Skills';

export const getSkills = (
	...slugs: Array<StringWithAutoComplete<(typeof items)[number]['slug']>>
): Array<Skill> => items.filter((it) => slugs.includes(it.slug));

export const groupByCategory = (
	query: string
): Array<{ category: SkillCategory; items: Array<Skill> }> => {
	const out: ReturnType<typeof groupByCategory> = [];

	const others: Array<Skill> = [];

	items.forEach((item) => {
		if (query.trim() && !item.name.toLowerCase().includes(query.trim().toLowerCase())) return;

		// push to others if item does not have a category
		if (!item.category) {
			others.push(item);
			return;
		}

		// check if category exists
		let category = out.find((it) => it.category.slug === item.category?.slug);

		if (!category) {
			category = { items: [], category: item.category };

			out.push(category);
		}

		category.items.push(item);
	});

	if (others.length !== 0) {
		out.push({ category: { name: 'Others', slug: 'others' }, items: others });
	}

	return out;
};
