<div class="challenge-instructions basic-javascript"><div><section id="description">
<p>If you have many options to choose from, a <code>switch</code> statement can be easier to write than many chained <code>if</code>/<code>else if</code> statements. The following:</p>
<pre class="language-js"><code class="language-js"><span class="token keyword">if</span> <span class="token punctuation">(</span>val <span class="token operator">===</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  answer <span class="token operator">=</span> <span class="token string">"a"</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>val <span class="token operator">===</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  answer <span class="token operator">=</span> <span class="token string">"b"</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
  answer <span class="token operator">=</span> <span class="token string">"c"</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre>
<p>can be replaced with:</p>
<pre class="language-js"><code class="language-js"><span class="token keyword">switch</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">case</span> <span class="token number">1</span><span class="token operator">:</span>
    answer <span class="token operator">=</span> <span class="token string">"a"</span><span class="token punctuation">;</span>
    <span class="token keyword">break</span><span class="token punctuation">;</span>
  <span class="token keyword">case</span> <span class="token number">2</span><span class="token operator">:</span>
    answer <span class="token operator">=</span> <span class="token string">"b"</span><span class="token punctuation">;</span>
    <span class="token keyword">break</span><span class="token punctuation">;</span>
  <span class="token keyword">default</span><span class="token operator">:</span>
    answer <span class="token operator">=</span> <span class="token string">"c"</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre>
</section></div><hr/><div><section id="instructions">
<p>Change the chained <code>if</code>/<code>else if</code> statements into a <code>switch</code> statement.</p>
</section></div><hr/></div>