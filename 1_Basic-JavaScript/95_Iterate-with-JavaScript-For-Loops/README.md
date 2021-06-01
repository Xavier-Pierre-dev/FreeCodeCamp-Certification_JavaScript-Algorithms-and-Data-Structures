<div class="challenge-instructions basic-javascript"><div><section id="description">
<p>You can run the same code multiple times by using a loop.</p>
<p>The most common type of JavaScript loop is called a <code>for</code> loop because it runs for a specific number of times.</p>
<p>For loops are declared with three optional expressions separated by semicolons:</p>
<p><code>for (a; b; c)</code>, where <code>a</code> is the intialization statement, <code>b</code> is the condition statement, and <code>c</code> is the final expression.</p>
<p>The initialization statement is executed one time only before the loop starts. It is typically used to define and setup your loop variable.</p>
<p>The condition statement is evaluated at the beginning of every loop iteration and will continue as long as it evaluates to <code>true</code>. When the condition is <code>false</code> at the start of the iteration, the loop will stop executing. This means if the condition starts as false, your loop will never execute.</p>
<p>The final expression is executed at the end of each loop iteration, prior to the next condition check and is usually used to increment or decrement your loop counter.</p>
<p>In the following example we initialize with <code>i = 0</code> and iterate while our condition <code>i &lt; 5</code> is true. We'll increment <code>i</code> by <code>1</code> in each loop iteration with <code>i++</code> as our final expression.</p>
<pre class="language-js"><code class="language-js"><span class="token keyword">var</span> ourArray <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">5</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  ourArray<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre>
<p><code>ourArray</code> will now have the value <code>[0,1,2,3,4]</code>.</p>
</section></div><hr/><div><section id="instructions">
<p>Use a <code>for</code> loop to push the values 1 through 5 onto <code>myArray</code>.</p>
</section></div><hr/></div>