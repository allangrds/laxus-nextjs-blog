module.exports = function (plop) {
  plop.setGenerator('component', {
    actions: [
      {
        path: './src/components/{{kebabCase component_name}}/index.ts',
        templateFile: 'plop/component/index-template.hbs',
        type: 'add',
      },
      {
        path: './src/components/{{kebabCase component_name}}/{{kebabCase component_name}}.tsx',
        templateFile: 'plop/component/component-template.hbs',
        type: 'add',
      },
      {
        path: './src/components/{{kebabCase component_name}}/{{kebabCase component_name}}.stories.tsx',
        templateFile: 'plop/component/stories-template.hbs',
        type: 'add',
      },
      {
        path: './src/components/{{kebabCase component_name}}/{{kebabCase component_name}}.test.tsx',
        templateFile: 'plop/component/test-template.hbs',
        type: 'add',
      },
    ],
    description: 'React component generator',
    prompts: [
      {
        message: 'Enter the component name: ',
        name: 'component_name',
        type: 'input',
      },
    ],
  })
}
