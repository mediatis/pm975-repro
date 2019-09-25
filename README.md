# Test case for placeholders in ProseMirror with IE

Steps to reproduce:
1. Clone this repository
2. Run `npm install`
3. Run `npm run build` or `npm run watch`
4. Run `npx http-server`
5. Launch IE11 (yeah, here the painful part starts)
6. Navigate to `http://{addr}:{port}/demo/`

Current bug:
1. Mark discontinued after typing word boundary
   - Select the word "placeholder" (it should be light blue). *Don't include the space following the placeholder in the selection.*
   - Type a character
   - Type a space
   - Type another character
   - Observe that the mark was automatically ended when the space was entered

In my testing there was no difference between selecting with the keyboard and mouse. This also happens with the Dev Tools open.
