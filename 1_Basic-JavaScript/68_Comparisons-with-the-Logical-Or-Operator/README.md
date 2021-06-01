<div class="challenge-instructions basic-javascript"><div><section id="description">
<p>The <dfn>logical or</dfn> operator (<code>||</code>) returns <code>true</code> if either of the <dfn>operands</dfn> is <code>true</code>. Otherwise, it returns <code>false</code>.</p>
<p>The <dfn>logical or</dfn> operator is composed of two pipe symbols: (<code>||</code>). This can typically be found between your Backspace and Enter keys.</p>
<p>The pattern below should look familiar from prior waypoints:</p>
<pre class="language-js"><code class="language-js"><span class="token keyword">if</span> <span class="token punctuation">(</span>num <span class="token operator">&gt;</span> <span class="token number">10</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token string">"No"</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>num <span class="token operator">&lt;</span> <span class="token number">5</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token string">"No"</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">return</span> <span class="token string">"Yes"</span><span class="token punctuation">;</span>
</code></pre>
<p>will return <code>Yes</code> only if <code>num</code> is between <code>5</code> and <code>10</code> (5 and 10 included). The same logic can be written as:</p>
<pre class="language-js"><code class="language-js"><span class="token keyword">if</span> <span class="token punctuation">(</span>num <span class="token operator">&gt;</span> <span class="token number">10</span> <span class="token operator">||</span> num <span class="token operator">&lt;</span> <span class="token number">5</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token string">"No"</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">return</span> <span class="token string">"Yes"</span><span class="token punctuation">;</span>
</code></pre>
</section></div><hr/><div><section id="instructions">
<p>Combine the two <code>if</code> statements into one statement which returns the string <code>Outside</code> if <code>val</code> is not between <code>10</code> and <code>20</code>, inclusive. Otherwise, return the string <code>Inside</code>.</p>
</section></div><hr/></div>