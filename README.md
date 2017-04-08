# Chrome inline i18n
With this lib you will be able to easy translate you html templates.
For translate you need to add `data-translate="your_message_code_from_locale_file"` to you element, and run `InlineI18n.render()_` For example:

```javascript
<span class="label" data-translate="appName"></span>

<script src="../bower_components/chrome-lib-inline-i18n/dist/js/chrome-lib-inline-i18n.min.js"></script>
<script>
InlineI18n.render();
</script>
```

## Options
Your can pass object with options inside `render` function:

- _attribute_ - attribute to find element to translate and it i18n message, `data-translate` by default
