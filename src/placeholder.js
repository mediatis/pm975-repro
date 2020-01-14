import {Plugin} from "prosemirror-state"

export const placeholderMark = {
  attrs: {
    id: {}
  },
  inclusive: true,
  parseDOM: [{tag: 'placeholder', getAttrs(dom) { return {id: dom.id} }}],
  toDOM(node) { return ['placeholder', {id: node.attrs.id}, 0] }
}

export const placeholderPlugin = new Plugin({
  props: {
    handleClickOn() {
      console.log('handleClickOn()');

      return false;
    }
  }
});
