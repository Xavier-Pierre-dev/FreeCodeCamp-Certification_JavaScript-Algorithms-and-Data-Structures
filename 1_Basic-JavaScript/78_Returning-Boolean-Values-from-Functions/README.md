<div class="challenge-instructions basic-javascript"><div><section id="description">
<p>You may recall from <a href="/learn/javascript-algorithms-and-data-structures/basic-javascript/comparison-with-the-equality-operator">Comparison with the Equality Operator</a> that all comparison operators return a boolean <code>true</code> or <code>false</code> value.</p>
<p>Sometimes people use an <code>if/else</code> statement to do a comparison, like this:</p>
<pre class="language-js"><code class="language-js"><span class="token keyword">function</span> <span class="token function">isEqual</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span>b</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>a <span class="token operator">===</span> b<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre>
<p>But there's a better way to do this. Since <code>===</code> returns <code>true</code> or <code>false</code>, we can return the result of the comparison:</p>
<pre class="language-js"><code class="language-js"><span class="token keyword">function</span> <span class="token function">isEqual</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span>b</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> a <span class="token operator">===</span> b<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre>
</section></div><hr/><div><section id="instructions">
<p>Fix the function <code>isLess</code> to remove the <code>if/else</code> statements.</p>
</section></div><hr/></div>