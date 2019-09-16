# Test case for ProseMirror/prosemirror#975

Steps to reproduce:
1. Clone this repository
2. Run `npm install`
3. Run `npm run build` or `npm run watch`
4. Run `npx http-server`
5. Launch IE11 (yeah, here the painful part starts)
6. Navigate to `http://{addr}:{port}/demo/`

Bugs:
1. JS illegal argument error
   - Select the word "placeholder" (it should be light blue). *Don't include the space following the placeholder in the selection.*
   - Type a character
   - Observe an "illegal argument" error being listed in the console
2. Typed input discarded, mark removed
   - Select the word "placeholder ". *Include the space at the end.*
   - Type a character
   - Note that the typed character is not shown and the placeholder mark is also gone

In my testing there was no difference between selecting with the keyboard and mouse.
