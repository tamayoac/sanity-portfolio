import { defineType, defineField, defineArrayMember } from 'sanity';

export const projectType = defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Project Name',
      type: 'string',
      description: 'The name of the project.',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'A brief overview of the project.',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'projectUrl',
      title: 'Project URL',
      type: 'url',
      description: 'Link to the live project or repository.',
    }),
    defineField({
      name: 'images',
      title: 'Project Images',
      type: 'array',
      of: [{ type: 'image' }],
      description: 'Images or screenshots related to the project.',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'technologies',
      title: 'Technologies Used',
      type: 'array', 
      of: [defineArrayMember({ type: 'reference', to: [{ type: 'framework' }] })],
    }),
  ],
});