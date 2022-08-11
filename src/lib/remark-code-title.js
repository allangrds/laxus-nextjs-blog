import { visit } from 'unist-util-visit'

export default function remarkCodeTitles(options) {
  return (tree) =>
    visit(tree, 'element', (node, index, parent) => {

      // if (node.tagName === 'code') {
      //   console.log(node)
      //   console.log('----')
      // }

      // if (node.tagName === 'code' && node.data && node.data.meta) {
      //   node.properties.meta = node.data.meta
      //   console.log('addd')
      // }
    })
}

// import { visit } from 'unist-util-visit'

// export default function remarkCodeTitles () {
//   return (tree) => visit(tree, 'code', (node, index, parent) => {
//     console.log('visit')
//     const nodeLang = node.lang || ''
//     let language = ''
//     let title = ''

//     if (nodeLang.includes(':')) {
//       language = nodeLang.slice(0, nodeLang.search(':'))
//       title = nodeLang.slice(nodeLang.search(':') + 1, nodeLang.length)
//     }

//     if (!title) {
//       return
//     }

//     const className = 'remark-code-title'

//     const titleNode = {
//       type: 'mdxJsxFlowElement',
//       name: 'div',
//       attributes: [{ type: 'mdxJsxAttribute', name: 'className', value: className }],
//       children: [{ type: 'text', value: title }],
//       data: { _xdmExplicitJsx: true },
//     }

//     parent.children.splice(index, 0, titleNode)
//     node.lang = language
//   })
// }

