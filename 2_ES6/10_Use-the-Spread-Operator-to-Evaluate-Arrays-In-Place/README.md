<div class="challenge-instructions es6"><div><section id="description">
<p>ES6 introduces the <dfn>spread operator</dfn>, which allows us to expand arrays and other expressions in places where multiple parameters or elements are expected.</p>
<p>The ES5 code below uses <code>apply()</code> to compute the maximum value in an array:</p>
<pre class="language-js"><code class="language-js"><span class="token keyword">var</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">89</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">45</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> maximus <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> arr<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<p><code>maximus</code> would have a value of <code>89</code>.</p>
<p>We had to use <code>Math.max.apply(null, arr)</code> because <code>Math.max(arr)</code> returns <code>NaN</code>. <code>Math.max()</code> expects comma-separated arguments, but not an array. The spread operator makes this syntax much better to read and maintain.</p>
<pre class="language-js"><code class="language-js"><span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">89</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">45</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> maximus <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span><span class="token operator">...</span>arr<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<p><code>maximus</code> would have a value of <code>89</code>.</p>
<p><code>...arr</code> returns an unpacked array. In other words, it <em>spreads</em> the array. However, the spread operator only works in-place, like in an argument to a function or in an array literal. The following code will not work:</p>
<pre class="language-js"><code class="language-js"><span class="token keyword">const</span> spreaded <span class="token operator">=</span> <span class="token operator">...</span>arr<span class="token punctuation">;</span>
</code></pre>
</section></div><hr/><div><section id="instructions">
<p>Copy all contents of <code>arr1</code> into another array <code>arr2</code> using the spread operator.</p>
</section></div><hr/></div>