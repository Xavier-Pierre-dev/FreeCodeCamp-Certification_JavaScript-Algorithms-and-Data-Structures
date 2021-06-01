<div class="challenge-instructions object-oriented-programming"><div><section id="description">
<p>A common pattern in JavaScript is to execute a function as soon as it is declared:</p>
<pre class="language-js"><code class="language-js"><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"Chirp, chirp!"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<p>This is an anonymous function expression that executes right away, and outputs <code>Chirp, chirp!</code> immediately.</p>
<p>Note that the function has no name and is not stored in a variable. The two parentheses () at the end of the function expression cause it to be immediately executed or invoked. This pattern is known as an <dfn>immediately invoked function expression</dfn> or <dfn>IIFE</dfn>.</p>
</section></div><hr/><div><section id="instructions">
<p>Rewrite the function <code>makeNest</code> and remove its call so instead it's an anonymous immediately invoked function expression (IIFE).</p>
</section></div><hr/></div>