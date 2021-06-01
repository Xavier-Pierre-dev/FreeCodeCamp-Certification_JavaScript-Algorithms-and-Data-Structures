<div class="challenge-instructions functional-programming"><div><section id="description">
<p>The <code>some</code> method works with arrays to check if <em>any</em> element passes a particular test. It returns a Boolean value - <code>true</code> if any of the values meet the criteria, <code>false</code> if not.</p>
<p>For example, the following code would check if any element in the <code>numbers</code> array is less than 10:</p>
<pre class="language-js"><code class="language-js"><span class="token keyword">var</span> numbers <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">50</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">220</span><span class="token punctuation">,</span> <span class="token number">110</span><span class="token punctuation">,</span> <span class="token number">11</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
numbers<span class="token punctuation">.</span><span class="token function">some</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">currentValue</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> currentValue <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<p>The <code>some</code> method would return <code>true</code>.</p>
</section></div><hr/><div><section id="instructions">
<p>Use the <code>some</code> method inside the <code>checkPositive</code> function to check if any element in <code>arr</code> is positive. The function should return a Boolean value.</p>
</section></div><hr/></div>