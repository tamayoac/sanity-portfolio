import { defineType } from 'sanity';

export const socialType = defineType({
  name: 'social',
  title: 'Social',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'link',
      title: 'Link',
      type: 'url',
    },
  ],
});