<div class="challenge-instructions es6"><div><section id="description">
<p><code>import</code> allows you to choose which parts of a file or module to load. In the previous lesson, the examples exported <code>add</code> from the <code>math_functions.js</code> file. Here's how you can import it to use in another file:</p>
<pre class="language-js"><code class="language-js"><span class="token keyword">import</span> <span class="token punctuation">{</span> add <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'./math_functions.js'</span><span class="token punctuation">;</span>
</code></pre>
<p>Here, <code>import</code> will find <code>add</code> in <code>math_functions.js</code>, import just that function for you to use, and ignore the rest. The <code>./</code> tells the import to look for the <code>math_functions.js</code> file in the same folder as the current file. The relative file path (<code>./</code>) and file extension (<code>.js</code>) are required when using import in this way.</p>
<p>You can import more than one item from the file by adding them in the <code>import</code> statement like this:</p>
<pre class="language-js"><code class="language-js"><span class="token keyword">import</span> <span class="token punctuation">{</span> add<span class="token punctuation">,</span> subtract <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'./math_functions.js'</span><span class="token punctuation">;</span>
</code></pre>
</section></div><hr/><div><section id="instructions">
<p>Add the appropriate <code>import</code> statement that will allow the current file to use the <code>uppercaseString</code> and <code>lowercaseString</code> functions you exported in the previous lesson. These functions are in a file called <code>string_functions.js</code>, which is in the same directory as the current file.</p>
</section></div><hr/></div>