// src/schemas/portfolioType.js
import { defineType, defineField, defineArrayMember } from 'sanity';
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
      name: 'introduction',
      title: 'Introduction',
      type: 'array',
      of: [{ 
        type: 'block',
      }]
    }),
    defineField({
      name: 'about',
      title: 'About',
      type: 'array', 
      of: [{ type: 'block'}]
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
    defineField({
      name: 'projects',
      title: 'Projects',
      type: 'array',
      of: [defineArrayMember({ type: 'reference', to: [{ type: 'project' }] })],
    }),
  ],
});``