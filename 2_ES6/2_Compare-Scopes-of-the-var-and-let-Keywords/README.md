<div class="challenge-instructions es6"><div><section id="description">
<p>When you declare a variable with the <code>var</code> keyword, it is declared globally, or locally if declared inside a function.</p>
<p>The <code>let</code> keyword behaves similarly, but with some extra features. When you declare a variable with the <code>let</code> keyword inside a block, statement, or expression, its scope is limited to that block, statement, or expression.</p>
<p>For example:</p>
<pre class="language-js"><code class="language-js"><span class="token keyword">var</span> numArray <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">3</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  numArray<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>numArray<span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<p>Here the console will display the values <code>[0, 1, 2]</code> and <code>3</code>.</p>
<p>With the <code>var</code> keyword, <code>i</code> is declared globally. So when <code>i++</code> is executed, it updates the global variable. This code is similar to the following:</p>
<pre class="language-js"><code class="language-js"><span class="token keyword">var</span> numArray <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> i<span class="token punctuation">;</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span>i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">3</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  numArray<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>numArray<span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<p>Here the console will display the values <code>[0, 1, 2]</code> and <code>3</code>.</p>
<p>This behavior will cause problems if you were to create a function and store it for later use inside a <code>for</code> loop that uses the <code>i</code> variable. This is because the stored function will always refer to the value of the updated global <code>i</code> variable.</p>
<pre class="language-js"><code class="language-js"><span class="token keyword">var</span> printNumTwo<span class="token punctuation">;</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">3</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">===</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function-variable function">printNumTwo</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> i<span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">printNumTwo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<p>Here the console will display the value <code>3</code>.</p>
<p>As you can see, <code>printNumTwo()</code> prints 3 and not 2. This is because the value assigned to <code>i</code> was updated and the <code>printNumTwo()</code> returns the global <code>i</code> and not the value <code>i</code> had when the function was created in the for loop. The <code>let</code> keyword does not follow this behavior:</p>
<pre class="language-js"><code class="language-js"><span class="token keyword">let</span> printNumTwo<span class="token punctuation">;</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">3</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">===</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function-variable function">printNumTwo</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> i<span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">printNumTwo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<p>Here the console will display the value <code>2</code>, and an error that <code>i is not defined</code>.</p>
<p><code>i</code> is not defined because it was not declared in the global scope. It is only declared within the <code>for</code> loop statement. <code>printNumTwo()</code> returned the correct value because three different <code>i</code> variables with unique values (0, 1, and 2) were created by the <code>let</code> keyword within the loop statement.</p>
</section></div><hr/><div><section id="instructions">
<p>Fix the code so that <code>i</code> declared in the <code>if</code> statement is a separate variable than <code>i</code> declared in the first line of the function. Be certain not to use the <code>var</code> keyword anywhere in your code.</p>
<p>This exercise is designed to illustrate the difference between how <code>var</code> and <code>let</code> keywords assign scope to the declared variable. When programming a function similar to the one used in this exercise, it is often better to use different variable names to avoid confusion.</p>
</section></div><hr/></div>