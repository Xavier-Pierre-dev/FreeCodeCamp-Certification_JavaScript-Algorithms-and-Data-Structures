<div class="challenge-instructions basic-javascript"><div><section id="description">
<p>Another way to change the data in an array is with the <code>.pop()</code> function.</p>
<p><code>.pop()</code> is used to pop a value off of the end of an array. We can store this popped off value by assigning it to a variable. In other words, <code>.pop()</code> removes the last element from an array and returns that element.</p>
<p>Any type of entry can be popped off of an array - numbers, strings, even nested arrays.</p>
<pre class="language-js"><code class="language-js"><span class="token keyword">var</span> threeArr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> oneDown <span class="token operator">=</span> threeArr<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>oneDown<span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>threeArr<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<p>The first <code>console.log</code> will display the value <code>6</code>, and the second will display the value <code>[1, 4]</code>.</p>
</section></div><hr/><div><section id="instructions">
<p>Use the <code>.pop()</code> function to remove the last item from <code>myArray</code>, assigning the popped off value to <code>removedFromMyArray</code>.</p>
</section></div><hr/></div>