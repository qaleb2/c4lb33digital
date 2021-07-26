// TODO: Add Athletic Skills, Office Skills,
// Data Engineering, Data Science, ML Engineering, ... ?

const skills = [
  {
    title: 'Vanilla R',
    competency: 4,
    category: ['Programming/Application'],
  },
  {
    title: 'Vanilla Python',
    competency: 3,
    category: ['Programming/Application'],
  },
  {
    title: 'Vanilla Java',
    competency: 2,
    category: ['Programming/Application'],
  },
  {
    title: 'R Packages&Libraries',
    competency: 4,
    category: ['Programming/Application'],
  },
  {
    title: 'Python Packages&Libraries',
    competency: 3,
    category: ['Programming/Application'],
  },
  {
    title: 'LaTeX',
    competency: 4,
    category: ['Programming/Application'],
  },
  {
    title: 'Mandarin',
    competency: 5,
    category: ['Languages'],
  },
  {
    title: 'English',
    competency: 5,
    category: ['Languages'],
  },
  {
    title: 'Cantonese',
    competency: 3,
    category: ['Languages'],
  },
  {
    title: 'Japanese',
    competency: 2,
    category: ['Languages'],
  },
  {
    title: 'Spanish',
    competency: 1,
    category: ['Languages'],
  },
  {
    title: 'OS X',
    competency: 5,
    category: ['Operating Systems'],
  },
  {
    title: 'Windows',
    competency: 4,
    category: ['Operating Systems'],
  },
  {
    title: 'Linux',
    competency: 1,
    category: ['Operating Systems'],
  },
  {
    title: 'Humour',
    competency: 0,
    category: ['Other'],
  },
  {
    title: 'Strength Compared to Saitama',
    competency: 0,
    category: ['Other'],
  },

].map((skill) => ({ ...skill, category: skill.category.sort() }));

// this is a list of colors that I like. The length should be == to the
// number of categories. Re-arrange this list until you find a pattern you like.
const colors = [
  '#515dd4',
  '#e47272',
  '#cc7b94',
  '#3896e2',
  '#c3423f',
  '#d75858',
  '#747fff',
  '#64cb7b',
];

const categories = [
  ...new Set(skills.reduce((acc, { category }) => acc.concat(category), [])),
]
  .sort()
  .map((category, index) => ({
    name: category,
    color: colors[index],
  }));

export { categories, skills };
