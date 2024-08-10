import { defineType } from 'sanity';

export const frameworkType = defineType({
  name: 'framework',
  title: 'Framework',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'version',
      title: 'Version',
      type: 'string',
    },
  ],
});