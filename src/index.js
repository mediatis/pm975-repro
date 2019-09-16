import {Schema, DOMParser} from "prosemirror-model"
import {EditorView} from "prosemirror-view"
import {EditorState} from "prosemirror-state"
import {schema} from "prosemirror-schema-basic"
import {addListNodes} from "prosemirror-schema-list"
import {exampleSetup} from "prosemirror-example-setup"

import {placeholderMark, placeholderPlugin} from "./placeholder"

const demoSchema = new Schema({
  nodes: addListNodes(schema.spec.nodes, "paragraph block*", "block"),
  marks: schema.spec.marks.addToStart('placeholder', placeholderMark)
})

let state = EditorState.create({doc: DOMParser.fromSchema(demoSchema).parse(document.querySelector("#content")),
                                plugins: exampleSetup({schema: demoSchema}).concat(placeholderPlugin)})

let view = window.view = new EditorView(document.querySelector(".full"), {state})
