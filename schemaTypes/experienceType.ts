import {defineArrayMember, defineField, defineType} from 'sanity'
import { frameworkType } from './frameworkType'
export const experienceType = defineType({
  name: 'experience',
  title: 'Experience',
  type: 'document',
  fields: [
    defineField({
        name: 'jobTitle',
        title: 'Job Title',
        type: 'string',
      }),
      defineField({
        name: 'company',
        title: 'Company',
        type: 'string',
      }),
      defineField({
        name: 'description',
        title: 'Description',
        type: 'array', 
        of: [{ type: 'block'}]
      }),
      defineField({
        name: 'from',
        title: 'From',
        type: 'date',
      }),
      defineField({
        name: 'to',
        title: 'To',
        type: 'date',
      }),
      defineField({
        name: 'link',
        title: 'Link',
        type: 'url',
      }),
    defineField({ 
        title: 'Frameworks', 
        name: 'frameworks', 
        type: 'array', 
        of: [defineArrayMember({ type: 'reference', to: [{ type: 'framework' }] })],
    }),
  ],
})