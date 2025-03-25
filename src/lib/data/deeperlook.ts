import type { LinkedItem } from '$lib/types';
import Assets from './assets';
import { base } from '$app/paths';

export const deeperLookItems: Array<LinkedItem> = [
    {
        name: 'Dev Reads',
        slug: 'reading',
        logo: Assets.Devreads,
        shortDescription: 'A small glimpse into some of my dev reads with progress.',
        description: 'Books I’ve read or want to read.',
        category: ['Learning', 'Reading'],
        color: 'red',
        books:
            [
                {
                    title: 'Building Microservices',
                    author: 'Sam Newman',
                    image: `${base}/logos/buildingmicroservices.jpg`,
                    progress: 5,
                    personalThoughts: "⏳ Work In Progress",
                    personalRating: ''
                },
                {
                    title: 'Cracking the Coding Interview',
                    author: 'Gayle Laakmann McDowell',
                    image: `${base}/logos/crackingcodinginterview.jpg`,
                    progress: 100,
                    personalThoughts: "📝 Strongly Recommend",
                    personalRating: '⭐ 5 of 5'
                },
            ]
    },
    {
        name: 'Non-Tech Reads',
        slug: 'reading',
        logo: Assets.Personalreading,
        shortDescription: 'My off-duty reading list, no code, no IDE, just curiosity.',
        description: 'Books I’ve read or want to read.',
        category: ['Learning', 'Reading'],
        color: 'blue',
        books:
            [
                {
                    title: 'The Gulag Archipelago',
                    author: 'Aleksandr Solzhenitsyn',
                    image: `${base}/logos/gulagarchipelago.jpg`,
                    progress: 15,
                    personalThoughts: "⏳ Work In Progress",
                    personalRating: ''
                },
                {
                    title: 'Crime and Punshiment',
                    author: 'Fyodor Dostoevsky',
                    image: `${base}/logos/crimeandpunishment.jpg`,
                    progress: 100,
                    personalThoughts: "Just a long internal monologue, can get boring.",
                    personalRating: '⭐ 3 of 5'
                },
                {
                    title: '12 Week Year',
                    author: 'Brian P. Moran',
                    image: `${base}/logos/twelveweekyear.jpg`,
                    progress: 100,
                    personalThoughts: "Read if you like to get things done fast.",
                    personalRating: '⭐ 4.2 of 5'
                },
                {
                    title: 'Outlive',
                    author: 'Peter Attia',
                    image: `${base}/logos/outlive.jpg`,
                    progress: 100,
                    personalThoughts: "🥦 Fantastic book for those into logevity.",
                    personalRating: '⭐ 5 of 5'
                }
            ]
    },
    {
        name: 'LeetCode Profile',
        slug: 'leetcode',
        logo: Assets.Leetcode,
        shortDescription: 'Not at all a pro yet, but I\'ve fully finished the infamous Cracking the coding interview by Gayle Laakman Mcdowell. Soon I will be finishing up the Neetcode 150.',
        description: '',
        link: { to: 'https://leetcode.com/cjimenez9811', label: 'Leetcode Profile', newTab: true },
        category: ['Programming', 'Learning'],
        color: 'orange',
        screenshots: [
            {
                src: `${base}/logos/leetcode_problems_solved.jpg`,
                label: 'Problems Solved'
            },
            {
                src: `${base}/logos/leetcode_streak.jpg`,
                label: "Current Streak"
            }
        ]
    }
];