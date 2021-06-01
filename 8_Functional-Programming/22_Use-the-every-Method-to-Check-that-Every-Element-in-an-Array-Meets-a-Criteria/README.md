<div class="challenge-instructions functional-programming"><div><section id="description">
<p>The <code>every</code> method works with arrays to check if <em>every</em> element passes a particular test. It returns a Boolean value - <code>true</code> if all values meet the criteria, <code>false</code> if not.</p>
<p>For example, the following code would check if every element in the <code>numbers</code> array is less than 10:</p>
<pre class="language-js"><code class="language-js"><span class="token keyword">var</span> numbers <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">11</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
numbers<span class="token punctuation">.</span><span class="token function">every</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">currentValue</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> currentValue <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<p>The <code>every</code> method would return <code>false</code> here.</p>
</section></div><hr/><div><section id="instructions">
<p>Use the <code>every</code> method inside the <code>checkPositive</code> function to check if every element in <code>arr</code> is positive. The function should return a Boolean value.</p>
</section></div><hr/></div>