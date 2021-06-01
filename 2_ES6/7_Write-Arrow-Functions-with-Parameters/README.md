<div class="challenge-instructions es6"><div><section id="description">
<p>Just like a regular function, you can pass arguments into an arrow function.</p>
<pre class="language-js"><code class="language-js"><span class="token keyword">const</span> <span class="token function-variable function">doubler</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> item <span class="token operator">*</span> <span class="token number">2</span><span class="token punctuation">;</span>
<span class="token function">doubler</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<p><code>doubler(4)</code> would return the value <code>8</code>.</p>
<p>If an arrow function has a single parameter, the parentheses enclosing the parameter may be omitted.</p>
<pre class="language-js"><code class="language-js"><span class="token keyword">const</span> <span class="token function-variable function">doubler</span> <span class="token operator">=</span> <span class="token parameter">item</span> <span class="token operator">=&gt;</span> item <span class="token operator">*</span> <span class="token number">2</span><span class="token punctuation">;</span>
</code></pre>
<p>It is possible to pass more than one argument into an arrow function.</p>
<pre class="language-js"><code class="language-js"><span class="token keyword">const</span> <span class="token function-variable function">multiplier</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">item<span class="token punctuation">,</span> multi</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> item <span class="token operator">*</span> multi<span class="token punctuation">;</span>
<span class="token function">multiplier</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<p><code>multiplier(4, 2)</code> would return the value <code>8</code>.</p>
</section></div><hr/><div><section id="instructions">
<p>Rewrite the <code>myConcat</code> function which appends contents of <code>arr2</code> to <code>arr1</code> so that the function uses arrow function syntax.</p>
</section></div><hr/></div>