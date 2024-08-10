// src/schemas/portfolioType.js
import { defineType, defineField, defineArrayMember } from 'sanity';
import { experienceType } from './experienceType'; // Import the experience type
import { socialType } from './socialType';
export const portfolioType = defineType({
  name: 'portfolio',
  title: 'Portfolio',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
        name: 'introduction',
        title: 'Introduction',
        type: 'text',
      }),
    defineField({
      name: 'socials',
      title: 'Socials',
      type: 'array',
      of: [defineArrayMember({ type: 'reference', to: [{ type: 'social' }] })],
    }),
    defineField({
      name: 'experiences',
      title: 'Experiences',
      type: 'array',
      of: [defineArrayMember({ type: 'reference', to: [{ type: 'experience' }] })],
    }),
  ],
});``