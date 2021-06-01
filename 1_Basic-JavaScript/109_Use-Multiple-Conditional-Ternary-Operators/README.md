<div class="challenge-instructions basic-javascript"><div><section id="description">
<p>In the previous challenge, you used a single conditional operator. You can also chain them together to check for multiple conditions.</p>
<p>The following function uses <code>if</code>, <code>else if</code>, and <code>else</code> statements to check multiple conditions:</p>
<pre class="language-js"><code class="language-js"><span class="token keyword">function</span> <span class="token function">findGreaterOrEqual</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>a <span class="token operator">===</span> b<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token string">"a and b are equal"</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>a <span class="token operator">&gt;</span> b<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token string">"a is greater"</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token string">"b is greater"</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre>
<p>The above function can be re-written using multiple conditional operators:</p>
<pre class="language-js"><code class="language-js"><span class="token keyword">function</span> <span class="token function">findGreaterOrEqual</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>a <span class="token operator">===</span> b<span class="token punctuation">)</span> <span class="token operator">?</span> <span class="token string">"a and b are equal"</span> 
    <span class="token operator">:</span> <span class="token punctuation">(</span>a <span class="token operator">&gt;</span> b<span class="token punctuation">)</span> <span class="token operator">?</span> <span class="token string">"a is greater"</span> 
    <span class="token operator">:</span> <span class="token string">"b is greater"</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre>
<p>It is considered best practice to format multiple conditional operators such that each condition is on a separate line, as shown above. Using multiple conditional operators without proper indentation may make your code hard to read. For example:</p>
<pre class="language-js"><code class="language-js"><span class="token keyword">function</span> <span class="token function">findGreaterOrEqual</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>a <span class="token operator">===</span> b<span class="token punctuation">)</span> <span class="token operator">?</span> <span class="token string">"a and b are equal"</span> <span class="token operator">:</span> <span class="token punctuation">(</span>a <span class="token operator">&gt;</span> b<span class="token punctuation">)</span> <span class="token operator">?</span> <span class="token string">"a is greater"</span> <span class="token operator">:</span> <span class="token string">"b is greater"</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre>
</section></div><hr/><div><section id="instructions">
<p>In the <code>checkSign</code> function, use multiple conditional operators - following the recommended format used in <code>findGreaterOrEqual</code> - to check if a number is positive, negative or zero. The function should return <code>positive</code>, <code>negative</code> or <code>zero</code>.</p>
</section></div><hr/></div>