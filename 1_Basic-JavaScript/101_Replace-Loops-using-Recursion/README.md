<div class="challenge-instructions basic-javascript"><div><section id="description">
<p>Recursion is the concept that a function can be expressed in terms of itself. To help understand this, start by thinking about the following task: multiply the first <code>n</code> elements of an array to create the product of those elements. Using a <code>for</code> loop, you could do this:</p>
<pre class="language-js"><code class="language-js">  <span class="token keyword">function</span> <span class="token function">multiply</span><span class="token punctuation">(</span><span class="token parameter">arr<span class="token punctuation">,</span> n</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> product <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        product <span class="token operator">*=</span> arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> product<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
</code></pre>
<p>However, notice that <code>multiply(arr, n) == multiply(arr, n - 1) * arr[n - 1]</code>. That means you can rewrite <code>multiply</code> in terms of itself and never need to use a loop.</p>
<pre class="language-js"><code class="language-js">  <span class="token keyword">function</span> <span class="token function">multiply</span><span class="token punctuation">(</span><span class="token parameter">arr<span class="token punctuation">,</span> n</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token operator">&lt;=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token function">multiply</span><span class="token punctuation">(</span>arr<span class="token punctuation">,</span> n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">*</span> arr<span class="token punctuation">[</span>n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
</code></pre>
<p>The recursive version of <code>multiply</code> breaks down like this. In the <dfn>base case</dfn>, where <code>n &lt;= 0</code>, it returns 1. For larger values of <code>n</code>, it calls itself, but with <code>n - 1</code>. That function call is evaluated in the same way, calling <code>multiply</code> again until <code>n &lt;= 0</code>. At this point, all the functions can return and the original <code>multiply</code> returns the answer.</p>
<p><strong>Note:</strong> Recursive functions must have a base case when they return without calling the function again (in this example, when <code>n &lt;= 0</code>), otherwise they can never finish executing.</p>
</section></div><hr/><div><section id="instructions">
<p>Write a recursive function, <code>sum(arr, n)</code>, that returns the sum of the first <code>n</code> elements of an array <code>arr</code>.</p>
</section></div><hr/></div>