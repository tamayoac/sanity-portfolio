import { defineType } from 'sanity';
import { PlayIcon } from '@sanity/icons'

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
    {
      title: "Icon",
      name: "icon",
      type: "iconPicker"
    }
  ],
});