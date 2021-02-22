<template>
  <div class="editor__wrapper">
    <h1>Krijo një postim</h1>
    <br/>
    <b-input v-model="title" style="border-radius: 5px" placeholder="Titulli"/>
    <hr/>
    <div class="editor">
        <editor-menu-bar :editor="editor" v-slot="{ commands, isActive }">
        <div class="menubar">

            <button
            class="menubar__button"
            :class="{ 'is-active': isActive.bold() }"
            @click="commands.bold"
            >
            <icon name="bold" />
            </button>

            <button
            class="menubar__button"
            :class="{ 'is-active': isActive.italic() }"
            @click="commands.italic"
            >
            <icon name="italic" />
            </button>

            <button
            class="menubar__button"
            :class="{ 'is-active': isActive.strike() }"
            @click="commands.strike"
            >
            <icon name="strike" />
            </button>

            <button
            class="menubar__button"
            :class="{ 'is-active': isActive.underline() }"
            @click="commands.underline"
            >
            <icon name="underline" />
            </button>

            <button
            class="menubar__button"
            :class="{ 'is-active': isActive.code() }"
            @click="commands.code"
            >
            <icon name="code" />
            </button>

            <button
            class="menubar__button"
            :class="{ 'is-active': isActive.paragraph() }"
            @click="commands.paragraph"
            >
            <icon name="paragraph" />
            </button>

            <button
            class="menubar__button"
            :class="{ 'is-active': isActive.heading({ level: 1 }) }"
            @click="commands.heading({ level: 1 })"
            >
            H1
            </button>

            <button
            class="menubar__button"
            :class="{ 'is-active': isActive.heading({ level: 2 }) }"
            @click="commands.heading({ level: 2 })"
            >
            H2
            </button>

            <button
            class="menubar__button"
            :class="{ 'is-active': isActive.heading({ level: 3 }) }"
            @click="commands.heading({ level: 3 })"
            >
            H3
            </button>

            <button
            class="menubar__button"
            :class="{ 'is-active': isActive.bullet_list() }"
            @click="commands.bullet_list"
            >
            <icon name="ul" />
            </button>

            <button
            class="menubar__button"
            :class="{ 'is-active': isActive.ordered_list() }"
            @click="commands.ordered_list"
            >
            <icon name="ol" />
            </button>

            <button
            class="menubar__button"
            :class="{ 'is-active': isActive.blockquote() }"
            @click="commands.blockquote"
            >
            <icon name="quote" />
            </button>

            <button
            class="menubar__button"
            :class="{ 'is-active': isActive.code_block() }"
            @click="commands.code_block"
            >
            <icon name="code" />
            </button>

            <button
            class="menubar__button"
            @click="commands.horizontal_rule"
            >
            <icon name="hr" />
            </button>

            <button
            class="menubar__button"
            @click="commands.undo"
            >
            <icon name="undo" />
            </button>

            <button
            class="menubar__button"
            @click="commands.redo"
            >
            <icon name="redo" />
            </button>

        </div>
        </editor-menu-bar>

        <editor-content class="editor__content" :editor="editor" />
    </div>
    <b-form-checkbox
      id="is_public"
      v-model="is_public"
      name="is_public"
      :value="1"
      :unchecked-value="0"
    >
      Dëshiroj ta bëj këtë postim publik dhe në faqen kryesore.
    </b-form-checkbox>
    <b-button @click="createPost" block style="margin-top: 1em">Krijo</b-button>
  </div>
</template>

<script>
import Icon from '@/components/Icon/Icon.vue'
import { Editor, EditorContent, EditorMenuBar } from 'tiptap'
import {
  Blockquote,
  CodeBlock,
  HardBreak,
  Heading,
  HorizontalRule,
  OrderedList,
  BulletList,
  ListItem,
  TodoItem,
  TodoList,
  Bold,
  Code,
  Italic,
  Link,
  Strike,
  Underline,
  History,
} from 'tiptap-extensions'
import "tiptap/src/style.css"

export default {
  name: "PostCreate",
  components: {
    EditorContent,
    EditorMenuBar,
    Icon,
  },
  data() {
    return {
      title: '',
      is_public: 0,
      html: '',
      json: '',
      editor: new Editor({
        extensions: [
          new Blockquote(),
          new BulletList(),
          new CodeBlock(),
          new HardBreak(),
          new Heading({ levels: [1, 2, 3] }),
          new HorizontalRule(),
          new ListItem(),
          new OrderedList(),
          new TodoItem(),
          new TodoList(),
          new Link(),
          new Bold(),
          new Code(),
          new Italic(),
          new Strike(),
          new Underline(),
          new History(),
        ],
        content: `Shkruani një postim...`,
        onUpdate: ({ getJSON, getHTML }) => {
          this.json = getJSON()
          this.html = getHTML()
        },
      }),
    }
  },
  beforeDestroy() {
    this.editor.destroy()
  },
  methods: {
      async createPost() {
          try {
            const payload = {
                title: this.title,
                is_public: this.is_public,
                content: this.html,
            }

            await this.$api.blog.createPost(payload)
            this.$notify({
                    group: "success",
                    title: "Sukses",
                    text: `Postimi u krijua me sukses`,
                    type: "success",
                })
          } catch (err) {
            this.$notify({
                    group: "error",
                    title: "Error",
                    text: `Pati një problem. Ju lutem provoni përsëri.`,
                    type: "error",
                })
          }
      }
  }
}
</script>

<style lang="scss">
.editor__wrapper {
    width: 50em;
    margin: 2em auto;
}
</style>