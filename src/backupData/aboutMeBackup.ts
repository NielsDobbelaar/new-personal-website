import AboutMe from '@/types/aboutMeTypes';

const aboutMeBackup: AboutMe = {
  data: {
    content: [
      {
        type: 'paragraph',
        children: [
          { type: 'text', text: 'Hi! I’m Niels, a 21 year old ' },
          { type: 'text', text: 'frontend', bold: true },
          {
            type: 'text',
            text: ' developer and designer from The Netherlands with a passion for creating ',
          },
          {
            type: 'text',
            text: 'functional and accessible web applications',
            bold: true,
          },
          {
            type: 'text',
            text: '. I am currently doing my graduation internship for my ',
          },
          { type: 'text', text: 'bachelor in computer science ', bold: true },
          { type: 'text', text: 'at' },
          {
            type: 'text',
            bold: true,
            text: ' the University of Applied Sciences Leiden',
          },
          {
            type: 'text',
            text: '. Besides my studies I love to learn more about different parts of programming and frequently make vastly different side projects you can read more about in the ',
          },
          { type: 'text', text: 'Projects', bold: true },
          { type: 'text', text: ' section.' },
        ],
      },
      {
        type: 'paragraph',
        children: [
          {
            type: 'text',
            text: 'I started programming during middle school by learning the basics of python and web development, eventually learning C# and unity for my final year project. Since then I started (and have almost finished) my bachelor in Computer science, here I have learned far more technology mostly focusing on ',
          },
          { type: 'text', text: 'frontend development', bold: true },
          { type: 'text', text: ' technologies like ' },
          { type: 'text', text: 'React', bold: true },
          { type: 'text', text: ', ' },
          { type: 'text', text: 'Vue', bold: true },
          { type: 'text', text: ' and ' },
          { type: 'text', text: 'Tailwind', bold: true },
          {
            type: 'text',
            text: ' but I also dabble in some backend technologies like ',
          },
          { type: 'text', text: 'Laravel', bold: true },
          { type: 'text', text: ' and ' },
          { type: 'text', text: 'Express.js', bold: true },
          { type: 'text', text: '.' },
        ],
      },
    ],
  },
  meta: {},
};

export default aboutMeBackup;
