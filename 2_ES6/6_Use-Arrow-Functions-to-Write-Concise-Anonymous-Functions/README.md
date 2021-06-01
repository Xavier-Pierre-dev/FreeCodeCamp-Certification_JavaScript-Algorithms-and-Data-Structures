<div class="challenge-instructions es6"><div><section id="description">
<p>In JavaScript, we often don't need to name our functions, especially when passing a function as an argument to another function. Instead, we create inline functions. We don't need to name these functions because we do not reuse them anywhere else.</p>
<p>To achieve this, we often use the following syntax:</p>
<pre class="language-js"><code class="language-js"><span class="token keyword">const</span> <span class="token function-variable function">myFunc</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> myVar <span class="token operator">=</span> <span class="token string">"value"</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> myVar<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre>
<p>ES6 provides us with the syntactic sugar to not have to write anonymous functions this way. Instead, you can use <strong>arrow function syntax</strong>:</p>
<pre class="language-js"><code class="language-js"><span class="token keyword">const</span> <span class="token function-variable function">myFunc</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> myVar <span class="token operator">=</span> <span class="token string">"value"</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> myVar<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre>
<p>When there is no function body, and only a return value, arrow function syntax allows you to omit the keyword <code>return</code> as well as the brackets surrounding the code. This helps simplify smaller functions into one-line statements:</p>
<pre class="language-js"><code class="language-js"><span class="token keyword">const</span> <span class="token function-variable function">myFunc</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token string">"value"</span><span class="token punctuation">;</span>
</code></pre>
<p>This code will still return the string <code>value</code> by default.</p>
</section></div><hr/><div><section id="instructions">
<p>Rewrite the function assigned to the variable <code>magic</code> which returns a <code>new Date()</code> to use arrow function syntax. Also, make sure nothing is defined using the keyword <code>var</code>.</p>
</section></div><hr/></div>