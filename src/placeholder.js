import {Plugin} from "prosemirror-state"
import {Decoration, DecorationSet} from "prosemirror-view"

export const placeholderMark = {
  attrs: {
    id: {}
  },
  inclusive: true,
  parseDOM: [{tag: 'placeholder', getAttrs(dom) { return {id: dom.id} }}],
  toDOM(node) { return ['placeholder', {id: node.attrs.id}, 0] }
}

export const placeholderPlugin = new Plugin({
  state: {
    init(_, {doc}) {
      return addDecosBetween(0, doc.content.size, doc, DecorationSet.empty);
    },
    apply(tr, decos) {
      if (tr.docChanged) {
        return addDecosBetween(0, tr.doc.content.size, tr.doc, DecorationSet.empty);
      }
      return decos;
    }
  },
  props: {
    decorations(state) {
      return this.getState(state);
    }
  }
});

function addDecosBetween(from, to, doc, decos) {
  doc.nodesBetween(from, to, (node, pos) => {
    for (let i = 0, arr = node.marks, len = arr.length; i < len; i++) {
      if (arr[i].type.spec === placeholderMark) {
        decos = decos.add(doc, [Decoration.inline(pos, pos + node.nodeSize, {class: ['testing']})]);
      }
    }
  });
  return decos;
}
