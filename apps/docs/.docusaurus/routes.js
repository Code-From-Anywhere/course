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
    component: ComponentCreator('/', '6cb'),
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
        path: '/beginner/make',
        component: ComponentCreator('/beginner/make', '131'),
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
        path: '/beginner/terminal',
        component: ComponentCreator('/beginner/terminal', '245'),
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
        path: '/category/-frontend',
        component: ComponentCreator('/category/-frontend', 'be4'),
        exact: true,
        sidebar: "courseSidebar"
      },
      {
        path: '/category/-full-stack',
        component: ComponentCreator('/category/-full-stack', 'c42'),
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
        path: '/frontend/apply',
        component: ComponentCreator('/frontend/apply', 'b0f'),
        exact: true,
        sidebar: "courseSidebar"
      },
      {
        path: '/frontend/config',
        component: ComponentCreator('/frontend/config', '606'),
        exact: true,
        sidebar: "courseSidebar"
      },
      {
        path: '/frontend/data-storage',
        component: ComponentCreator('/frontend/data-storage', '2e7'),
        exact: true,
        sidebar: "courseSidebar"
      },
      {
        path: '/frontend/deploy-frontend',
        component: ComponentCreator('/frontend/deploy-frontend', 'f46'),
        exact: true,
        sidebar: "courseSidebar"
      },
      {
        path: '/frontend/git',
        component: ComponentCreator('/frontend/git', '3ce'),
        exact: true,
        sidebar: "courseSidebar"
      },
      {
        path: '/frontend/npm-packages',
        component: ComponentCreator('/frontend/npm-packages', '4f0'),
        exact: true,
        sidebar: "courseSidebar"
      },
      {
        path: '/frontend/tailwind',
        component: ComponentCreator('/frontend/tailwind', 'a96'),
        exact: true,
        sidebar: "courseSidebar"
      },
      {
        path: '/frontend/typescript',
        component: ComponentCreator('/frontend/typescript', '292'),
        exact: true,
        sidebar: "courseSidebar"
      },
      {
        path: '/frontend/typescript-react-intro',
        component: ComponentCreator('/frontend/typescript-react-intro', 'a68'),
        exact: true,
        sidebar: "courseSidebar"
      },
      {
        path: '/fullstack/apply',
        component: ComponentCreator('/fullstack/apply', '92f'),
        exact: true,
        sidebar: "courseSidebar"
      },
      {
        path: '/fullstack/core',
        component: ComponentCreator('/fullstack/core', '193'),
        exact: true,
        sidebar: "courseSidebar"
      },
      {
        path: '/fullstack/deploy-backend',
        component: ComponentCreator('/fullstack/deploy-backend', 'dc4'),
        exact: true,
        sidebar: "courseSidebar"
      },
      {
        path: '/fullstack/deploy-expo-app',
        component: ComponentCreator('/fullstack/deploy-expo-app', '544'),
        exact: true,
        sidebar: "courseSidebar"
      },
      {
        path: '/fullstack/deploy-web',
        component: ComponentCreator('/fullstack/deploy-web', 'e6c'),
        exact: true,
        sidebar: "courseSidebar"
      },
      {
        path: '/fullstack/dev-dashboard',
        component: ComponentCreator('/fullstack/dev-dashboard', '93d'),
        exact: true,
        sidebar: "courseSidebar"
      },
      {
        path: '/fullstack/sensible',
        component: ComponentCreator('/fullstack/sensible', '8b6'),
        exact: true,
        sidebar: "courseSidebar"
      },
      {
        path: '/fullstack/server',
        component: ComponentCreator('/fullstack/server', '3db'),
        exact: true,
        sidebar: "courseSidebar"
      },
      {
        path: '/fullstack/ui',
        component: ComponentCreator('/fullstack/ui', '812'),
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
        path: '/lifestyle/productivity',
        component: ComponentCreator('/lifestyle/productivity', 'dfb'),
        exact: true,
        sidebar: "courseSidebar"
      },
      {
        path: '/services',
        component: ComponentCreator('/services', '7d1'),
        exact: true,
        sidebar: "courseSidebar"
      },
      {
        path: '/todo',
        component: ComponentCreator('/todo', 'f71'),
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
        path: '/wizard/become-a-wizard',
        component: ComponentCreator('/wizard/become-a-wizard', '024'),
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
