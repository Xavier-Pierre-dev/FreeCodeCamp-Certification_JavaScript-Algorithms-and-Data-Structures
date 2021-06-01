<div class="challenge-instructions functional-programming"><div><section id="description">
<p>The <dfn>arity</dfn> of a function is the number of arguments it requires. <dfn>Currying</dfn> a function means to convert a function of N arity into N functions of arity 1.</p>
<p>In other words, it restructures a function so it takes one argument, then returns another function that takes the next argument, and so on.</p>
<p>Here's an example:</p>
<pre class="language-js"><code class="language-js"><span class="token keyword">function</span> <span class="token function">unCurried</span><span class="token punctuation">(</span><span class="token parameter">x<span class="token punctuation">,</span> y</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> x <span class="token operator">+</span> y<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">curried</span><span class="token punctuation">(</span><span class="token parameter">x</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">y</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> x <span class="token operator">+</span> y<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> <span class="token function-variable function">curried</span> <span class="token operator">=</span> <span class="token parameter">x</span> <span class="token operator">=&gt;</span> <span class="token parameter">y</span> <span class="token operator">=&gt;</span> x <span class="token operator">+</span> y

<span class="token function">curried</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>
</code></pre>
<p><code>curried(1)(2)</code> would return <code>3</code>.</p>
<p>This is useful in your program if you can't supply all the arguments to a function at one time. You can save each function call into a variable, which will hold the returned function reference that takes the next argument when it's available. Here's an example using the curried function in the example above:</p>
<pre class="language-js"><code class="language-js"><span class="token keyword">var</span> funcForY <span class="token operator">=</span> <span class="token function">curried</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">funcForY</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 3</span>
</code></pre>
<p>Similarly, <dfn>partial application</dfn> can be described as applying a few arguments to a function at a time and returning another function that is applied to more arguments. Here's an example:</p>
<pre class="language-js"><code class="language-js"><span class="token keyword">function</span> <span class="token function">impartial</span><span class="token punctuation">(</span><span class="token parameter">x<span class="token punctuation">,</span> y<span class="token punctuation">,</span> z</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> x <span class="token operator">+</span> y <span class="token operator">+</span> z<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">var</span> partialFn <span class="token operator">=</span> <span class="token function">impartial</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">partialFn</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 13</span>
</code></pre>
</section></div><hr/><div><section id="instructions">
<p>Fill in the body of the <code>add</code> function so it uses currying to add parameters <code>x</code>, <code>y</code>, and <code>z</code>.</p>
</section></div><hr/></div>