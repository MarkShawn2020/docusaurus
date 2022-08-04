/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import visit from "unist-util-visit";
import type {Transformer} from "unified";
import type {Element, ElementContent, Text} from "hast";


export default function plugin(): Transformer {

  return (root) => {
    visit(root,
      'element',
      (node: Element) => {
        if (node.children.length > 0) {
          const lastChild = node.children[node.children.length - 1] as ElementContent;
          if (lastChild.type === 'element' && lastChild.tagName === 'a') {
            //   console.log('transformFootnoteRefs', {node})
            const {href} = node.properties as { href: string }
            // modify text to show
            if (href.startsWith('#fnref-')) {
              console.log({node, lastChild});
              (lastChild.children[0]! as Text).value = href.slice(7)
            }
            // change cross-ref position
          }
        }
      }
    )
  }
}