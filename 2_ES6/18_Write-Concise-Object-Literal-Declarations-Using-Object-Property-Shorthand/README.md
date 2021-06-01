<div class="challenge-instructions es6"><div><section id="description">
<p>ES6 adds some nice support for easily defining object literals.</p>
<p>Consider the following code:</p>
<pre class="language-js"><code class="language-js"><span class="token keyword">const</span> <span class="token function-variable function">getMousePosition</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">x<span class="token punctuation">,</span> y</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
  x<span class="token operator">:</span> x<span class="token punctuation">,</span>
  y<span class="token operator">:</span> y
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<p><code>getMousePosition</code> is a simple function that returns an object containing two properties. ES6 provides the syntactic sugar to eliminate the redundancy of having to write <code>x: x</code>. You can simply write <code>x</code> once, and it will be converted to<code>x: x</code> (or something equivalent) under the hood. Here is the same function from above rewritten to use this new syntax:</p>
<pre class="language-js"><code class="language-js"><span class="token keyword">const</span> <span class="token function-variable function">getMousePosition</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">x<span class="token punctuation">,</span> y</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> x<span class="token punctuation">,</span> y <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
</section></div><hr/><div><section id="instructions">
<p>Use object property shorthand with object literals to create and return an object with <code>name</code>, <code>age</code> and <code>gender</code> properties.</p>
</section></div><hr/></div>