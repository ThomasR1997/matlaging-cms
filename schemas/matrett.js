export default {
  name: 'matrett',
  type: 'document',
  title: 'Matrett',

  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Matrett',
    },
    {
      name: 'image',
      title: 'Bilde',
      type: 'image',
    },

    {
      title: 'Ingredienser',
      name: 'ingredients',
      type: 'array',
      of: [{type: 'block'}],
    },

    {
      title: 'Fremgangsmåte',
      name: 'steps',
      type: 'array',
      of: [{type: 'block'}],
    },

    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
    },
  ],
}
