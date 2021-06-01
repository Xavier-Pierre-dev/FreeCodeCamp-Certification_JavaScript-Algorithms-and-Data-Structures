<div class="challenge-instructions basic-javascript"><div><section id="description">
<p>You can run the same code multiple times by using a loop.</p>
<p>The first type of loop we will learn is called a <code>while</code> loop because it runs while a specified condition is true and stops once that condition is no longer true.</p>
<pre class="language-js"><code class="language-js"><span class="token keyword">var</span> ourArray <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token keyword">while</span><span class="token punctuation">(</span>i <span class="token operator">&lt;</span> <span class="token number">5</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  ourArray<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
  i<span class="token operator">++</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre>
<p>In the code example above, the <code>while</code> loop will execute 5 times and append the numbers 0 through 4 to <code>ourArray</code>.</p>
<p>Let's try getting a while loop to work by pushing values to an array.</p>
</section></div><hr/><div><section id="instructions">
<p>Add the numbers 5 through 0 (inclusive) in descending order to <code>myArray</code> using a <code>while</code> loop.</p>
</section></div><hr/></div>