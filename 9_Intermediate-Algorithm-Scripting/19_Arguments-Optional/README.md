<div class="challenge-instructions intermediate-algorithm-scripting"><div><section id="description">
<p>Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.</p>
<p>For example, <code>addTogether(2, 3)</code> should return <code>5</code>, and <code>addTogether(2)</code> should return a function.</p>
<p>Calling this returned function with a single argument will then return the sum:</p>
<pre class="language-js"><code class="language-js"><span class="token keyword">var</span> sumTwoAnd <span class="token operator">=</span> <span class="token function">addTogether</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<p><code>sumTwoAnd(3)</code> returns <code>5</code>.</p>
<p>If either argument isn't a valid number, return undefined.</p>
</section></div><hr/></div>