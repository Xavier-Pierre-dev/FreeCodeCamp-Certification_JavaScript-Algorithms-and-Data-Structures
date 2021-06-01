<div class="challenge-instructions es6"><div><section id="description">
<p>In the last challenge, you learned about <code>export default</code> and its uses. To import a default export, you need to use a different <code>import</code> syntax. In the following example, <code>add</code> is the default export of the <code>math_functions.js</code> file. Here is how to import it:</p>
<pre class="language-js"><code class="language-js"><span class="token keyword">import</span> add <span class="token keyword">from</span> <span class="token string">"./math_functions.js"</span><span class="token punctuation">;</span>
</code></pre>
<p>The syntax differs in one key place. The imported value, <code>add</code>, is not surrounded by curly braces (<code>{}</code>). <code>add</code> here is simply a variable name for whatever the default export of the <code>math_functions.js</code> file is. You can use any name here when importing a default.</p>
</section></div><hr/><div><section id="instructions">
<p>In the following code, import the default export from the <code>math_functions.js</code> file, found in the same directory as this file. Give the import the name <code>subtract</code>.</p>
</section></div><hr/></div>