/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{ type: 'autogenerated', dirName: '.' }],

  // But you can create a sidebar manually
  docs: [
    {
      type: 'category',
      label: 'Overview',
      collapsed: false,
      items: [
        'intro/overview',
        'intro/why-assemblyscript',
        'intro/why-webassembly',
        'intro/how-it-works',
        'intro/ask-vs-ink',
      ],
    },
    // {
    //   type: 'category',
    //   label: 'Getting Started',
    //   collapsed: false,
    //   items: [
    //     'getting-started/setup',
    //     'getting-started/creating',
    //     'getting-started/compiling',
    //     'getting-started/running',
    //     'getting-started/deploying',
    //     'getting-started/calling',
    //   ],
    // },
    // {
    //   type: 'category',
    //   label: 'Basics',
    //   collapsed: false,
    //   items: [
    //     'basics/contract-template',
    //     'basics/storing-values',
    //     'basics/reading-values',
    //     'basics/mutating-values',
    //     'basics/events',
    //     'basics/trait-definitions',
    //     'basics/cross-contract-calling',
    //     'basics/testing',
    //     'basics/env-functions',
    //     'basics/metadata',
    //   ],
    // },
    // {
    //   type: 'category',
    //   label: 'Decorators',
    //   collapsed: false,
    //   items: [
    //     'decorators/overview',
    //     'decorators/contract',
    //     'decorators/env-type',
    //     'decorators/event',
    //     'decorators/spread-layout',
    //     'decorators/packed-layout',
    //   ],
    // },
    // {
    //   type: 'category',
    //   label: 'Storage & Data Structures',
    //   collapsed: false,
    //   items: [
    //     'datastructures/overview',
    //     'datastructures/layout',
    //   ],
    // },
    {
      type: 'category',
      label: 'Examples',
      collapsed: false,
      items: [
        'examples/overview',
      ],
    },
  ]

  /*
  refernece: {
    // 'Overview': [
    //   'intro/overview',
    //   'intro/why-assemblyscript',
    //   'intro/why-webassembly',
    //   'intro/how-it-works',
    //   'intro/ask-vs-ink',
    // ],
    // 'Getting started': [
    //   'getting-started/setup',
    //   'getting-started/creating',
    //   'getting-started/compiling',
    //   'getting-started/running',
    //   'getting-started/deploying',
    //   'getting-started/calling',
    // ],
    // 'Basics': [
    //   'basics/contract-template',
    //   'basics/storing-values',
    //   'basics/reading-values',
    //   'basics/mutating-values',
    //   'basics/events',
    //   'basics/trait-definitions',
    //   'basics/cross-contract-calling',
    //   'basics/testing',
    //   'basics/env-functions',
    //   'basics/metadata',
    // ],
    // 'Decorators': [
    //   'decorators/overview',
    //   'decorators/contract',
    //   'decorators/env-type',
    //   'decorators/event',
    //   'decorators/spread-layout',
    //   'decorators/packed-layout',
    // ],
    // 'Storage & Data Structures': [
    //   'datastructures/overview',
    //   'datastructures/layout',
    // ],
    // 'Examples': []
  }
  */
};

module.exports = sidebars;
