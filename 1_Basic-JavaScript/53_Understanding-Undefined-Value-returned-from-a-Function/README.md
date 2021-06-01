<div class="challenge-instructions basic-javascript"><div><section id="description">
<p>A function can include the <code>return</code> statement but it does not have to. In the case that the function doesn't have a <code>return</code> statement, when you call it, the function processes the inner code but the returned value is <code>undefined</code>.</p>
<p><strong>Example</strong></p>
<pre class="language-js"><code class="language-js"><span class="token keyword">var</span> sum <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function">addSum</span><span class="token punctuation">(</span><span class="token parameter">num</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  sum <span class="token operator">=</span> sum <span class="token operator">+</span> num<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token function">addSum</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<p><code>addSum</code> is a function without a <code>return</code> statement. The function will change the global <code>sum</code> variable but the returned value of the function is <code>undefined</code>.</p>
</section></div><hr/><div><section id="instructions">
<p>Create a function <code>addFive</code> without any arguments. This function adds 5 to the <code>sum</code> variable, but its returned value is <code>undefined</code>.</p>
</section></div><hr/></div>