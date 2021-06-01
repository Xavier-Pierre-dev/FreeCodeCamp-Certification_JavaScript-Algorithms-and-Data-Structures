<div class="challenge-instructions es6"><div><section id="description">
<p>In the <code>export</code> lesson, you learned about the syntax referred to as a <dfn>named export</dfn>. This allowed you to make multiple functions and variables available for use in other files.</p>
<p>There is another <code>export</code> syntax you need to know, known as <dfn>export default</dfn>. Usually you will use this syntax if only one value is being exported from a file. It is also used to create a fallback value for a file or module.</p>
<p>Below are examples using <code>export default</code>:</p>
<pre class="language-js"><code class="language-js"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token parameter">x<span class="token punctuation">,</span> y</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> x <span class="token operator">+</span> y<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">x<span class="token punctuation">,</span> y</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> x <span class="token operator">+</span> y<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre>
<p>The first is a named function, and the second is an anonymous function.</p>
<p>Since <code>export default</code> is used to declare a fallback value for a module or file, you can only have one value be a default export in each module or file. Additionally, you cannot use <code>export default</code> with <code>var</code>, <code>let</code>, or <code>const</code></p>
</section></div><hr/><div><section id="instructions">
<p>The following function should be the fallback value for the module. Please add the necessary code to do so.</p>
</section></div><hr/></div>