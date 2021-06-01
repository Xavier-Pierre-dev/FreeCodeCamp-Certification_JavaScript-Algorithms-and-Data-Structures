<div class="challenge-instructions basic-javascript"><div><section id="description">
<p>A for loop can also count backwards, so long as we can define the right conditions.</p>
<p>In order to decrement by two each iteration, we'll need to change our initialization, condition, and final expression.</p>
<p>We'll start at <code>i = 10</code> and loop while <code>i &gt; 0</code>. We'll decrement <code>i</code> by 2 each loop with <code>i -= 2</code>.</p>
<pre class="language-js"><code class="language-js"><span class="token keyword">var</span> ourArray <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span> i <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">-=</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  ourArray<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre>
<p><code>ourArray</code> will now contain <code>[10,8,6,4,2]</code>. Let's change our initialization and final expression so we can count backwards by twos to create an array of descending odd numbers.</p>
</section></div><hr/><div><section id="instructions">
<p>Push the odd numbers from 9 through 1 to <code>myArray</code> using a <code>for</code> loop.</p>
</section></div><hr/></div>