import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '000'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', 'e32'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', '5a0'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'fe0'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', 'd52'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', 'efd'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '7b4'),
    exact: true
  },
  {
    path: '/',
    component: ComponentCreator('/', '1e2'),
    exact: true
  },
  {
    path: '/',
    component: ComponentCreator('/', 'b0d'),
    routes: [
      {
        path: '/about',
        component: ComponentCreator('/about', '264'),
        exact: true,
        sidebar: "courseSidebar"
      },
      {
        path: '/beginner/css',
        component: ComponentCreator('/beginner/css', 'e3d'),
        exact: true,
        sidebar: "courseSidebar"
      },
      {
        path: '/beginner/goal',
        component: ComponentCreator('/beginner/goal', '01d'),
        exact: true,
        sidebar: "courseSidebar"
      },
      {
        path: '/beginner/html',
        component: ComponentCreator('/beginner/html', '51d'),
        exact: true,
        sidebar: "courseSidebar"
      },
      {
        path: '/beginner/json',
        component: ComponentCreator('/beginner/json', '243'),
        exact: true,
        sidebar: "courseSidebar"
      },
      {
        path: '/beginner/markdown',
        component: ComponentCreator('/beginner/markdown', '507'),
        exact: true,
        sidebar: "courseSidebar"
      },
      {
        path: '/beginner/setup',
        component: ComponentCreator('/beginner/setup', '6d3'),
        exact: true,
        sidebar: "courseSidebar"
      },
      {
        path: '/category/-beginner',
        component: ComponentCreator('/category/-beginner', '690'),
        exact: true,
        sidebar: "courseSidebar"
      },
      {
        path: '/category/-competent',
        component: ComponentCreator('/category/-competent', 'de9'),
        exact: true,
        sidebar: "courseSidebar"
      },
      {
        path: '/category/-expert',
        component: ComponentCreator('/category/-expert', 'ef9'),
        exact: true,
        sidebar: "courseSidebar"
      },
      {
        path: '/category/-lifestyle',
        component: ComponentCreator('/category/-lifestyle', '3fc'),
        exact: true,
        sidebar: "courseSidebar"
      },
      {
        path: '/category/️-wizard',
        component: ComponentCreator('/category/️-wizard', '8cd'),
        exact: true,
        sidebar: "courseSidebar"
      },
      {
        path: '/competent/config',
        component: ComponentCreator('/competent/config', 'b78'),
        exact: true,
        sidebar: "courseSidebar"
      },
      {
        path: '/competent/data-storage',
        component: ComponentCreator('/competent/data-storage', '971'),
        exact: true,
        sidebar: "courseSidebar"
      },
      {
        path: '/competent/deploy-frontend',
        component: ComponentCreator('/competent/deploy-frontend', '55f'),
        exact: true,
        sidebar: "courseSidebar"
      },
      {
        path: '/competent/distribution',
        component: ComponentCreator('/competent/distribution', '505'),
        exact: true,
        sidebar: "courseSidebar"
      },
      {
        path: '/competent/git',
        component: ComponentCreator('/competent/git', 'aa6'),
        exact: true,
        sidebar: "courseSidebar"
      },
      {
        path: '/competent/npm-packages',
        component: ComponentCreator('/competent/npm-packages', '9cb'),
        exact: true,
        sidebar: "courseSidebar"
      },
      {
        path: '/competent/react-nextjs',
        component: ComponentCreator('/competent/react-nextjs', '17b'),
        exact: true,
        sidebar: "courseSidebar"
      },
      {
        path: '/competent/tailwind',
        component: ComponentCreator('/competent/tailwind', '384'),
        exact: true,
        sidebar: "courseSidebar"
      },
      {
        path: '/competent/typescript',
        component: ComponentCreator('/competent/typescript', 'da1'),
        exact: true,
        sidebar: "courseSidebar"
      },
      {
        path: '/expert/core',
        component: ComponentCreator('/expert/core', '354'),
        exact: true,
        sidebar: "courseSidebar"
      },
      {
        path: '/expert/deploy-backend',
        component: ComponentCreator('/expert/deploy-backend', '284'),
        exact: true,
        sidebar: "courseSidebar"
      },
      {
        path: '/expert/deploy-expo-app',
        component: ComponentCreator('/expert/deploy-expo-app', '65c'),
        exact: true,
        sidebar: "courseSidebar"
      },
      {
        path: '/expert/dev-dashboard',
        component: ComponentCreator('/expert/dev-dashboard', '42c'),
        exact: true,
        sidebar: "courseSidebar"
      },
      {
        path: '/expert/sensible',
        component: ComponentCreator('/expert/sensible', '0df'),
        exact: true,
        sidebar: "courseSidebar"
      },
      {
        path: '/expert/server',
        component: ComponentCreator('/expert/server', '0e2'),
        exact: true,
        sidebar: "courseSidebar"
      },
      {
        path: '/expert/ui',
        component: ComponentCreator('/expert/ui', '070'),
        exact: true,
        sidebar: "courseSidebar"
      },
      {
        path: '/expert/what-now',
        component: ComponentCreator('/expert/what-now', '376'),
        exact: true,
        sidebar: "courseSidebar"
      },
      {
        path: '/lifestyle/become-a-wizard',
        component: ComponentCreator('/lifestyle/become-a-wizard', 'dea'),
        exact: true,
        sidebar: "courseSidebar"
      },
      {
        path: '/lifestyle/entrepreneurship',
        component: ComponentCreator('/lifestyle/entrepreneurship', 'b73'),
        exact: true,
        sidebar: "courseSidebar"
      },
      {
        path: '/lifestyle/finance',
        component: ComponentCreator('/lifestyle/finance', '80d'),
        exact: true,
        sidebar: "courseSidebar"
      },
      {
        path: '/lifestyle/freedom',
        component: ComponentCreator('/lifestyle/freedom', '663'),
        exact: true,
        sidebar: "courseSidebar"
      },
      {
        path: '/wizard/automation',
        component: ComponentCreator('/wizard/automation', '5a5'),
        exact: true,
        sidebar: "courseSidebar"
      },
      {
        path: '/wizard/conventions-standards',
        component: ComponentCreator('/wizard/conventions-standards', '58f'),
        exact: true,
        sidebar: "courseSidebar"
      },
      {
        path: '/wizard/decentralised-architectures',
        component: ComponentCreator('/wizard/decentralised-architectures', 'fe8'),
        exact: true,
        sidebar: "courseSidebar"
      },
      {
        path: '/wizard/metascripting',
        component: ComponentCreator('/wizard/metascripting', '81d'),
        exact: true,
        sidebar: "courseSidebar"
      },
      {
        path: '/wizard/other-envrionments',
        component: ComponentCreator('/wizard/other-envrionments', 'de2'),
        exact: true,
        sidebar: "courseSidebar"
      },
      {
        path: '/wizard/thinking-in-data',
        component: ComponentCreator('/wizard/thinking-in-data', '20d'),
        exact: true,
        sidebar: "courseSidebar"
      },
      {
        path: '/wizard/typescript-introspection',
        component: ComponentCreator('/wizard/typescript-introspection', '570'),
        exact: true,
        sidebar: "courseSidebar"
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
