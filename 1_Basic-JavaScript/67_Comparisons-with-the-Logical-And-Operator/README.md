<div class="challenge-instructions basic-javascript"><div><section id="description">
<p>Sometimes you will need to test more than one thing at a time. The <dfn>logical and</dfn> operator (<code>&amp;&amp;</code>) returns <code>true</code> if and only if the <dfn>operands</dfn> to the left and right of it are true.</p>
<p>The same effect could be achieved by nesting an if statement inside another if:</p>
<pre class="language-js"><code class="language-js"><span class="token keyword">if</span> <span class="token punctuation">(</span>num <span class="token operator">&gt;</span> <span class="token number">5</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>num <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token string">"Yes"</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">return</span> <span class="token string">"No"</span><span class="token punctuation">;</span>
</code></pre>
<p>will only return <code>Yes</code> if <code>num</code> is greater than <code>5</code> and less than <code>10</code>. The same logic can be written as:</p>
<pre class="language-js"><code class="language-js"><span class="token keyword">if</span> <span class="token punctuation">(</span>num <span class="token operator">&gt;</span> <span class="token number">5</span> <span class="token operator">&amp;&amp;</span> num <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token string">"Yes"</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">return</span> <span class="token string">"No"</span><span class="token punctuation">;</span>
</code></pre>
</section></div><hr/><div><section id="instructions">
<p>Replace the two if statements with one statement, using the <code>&amp;&amp;</code> operator, which will return the string <code>Yes</code> if <code>val</code> is less than or equal to <code>50</code> and greater than or equal to <code>25</code>. Otherwise, will return the string <code>No</code>.</p>
</section></div><hr/></div>