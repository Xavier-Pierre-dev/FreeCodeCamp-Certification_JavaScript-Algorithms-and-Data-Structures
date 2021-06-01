<div class="challenge-instructions basic-javascript"><div><section id="description">
<p>For loops don't have to iterate one at a time. By changing our <code>final-expression</code>, we can count by even numbers.</p>
<p>We'll start at <code>i = 0</code> and loop while <code>i &lt; 10</code>. We'll increment <code>i</code> by 2 each loop with <code>i += 2</code>.</p>
<pre class="language-js"><code class="language-js"><span class="token keyword">var</span> ourArray <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">;</span> i <span class="token operator">+=</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  ourArray<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre>
<p><code>ourArray</code> will now contain <code>[0,2,4,6,8]</code>. Let's change our <code>initialization</code> so we can count by odd numbers.</p>
</section></div><hr/><div><section id="instructions">
<p>Push the odd numbers from 1 through 9 to <code>myArray</code> using a <code>for</code> loop.</p>
</section></div><hr/></div>