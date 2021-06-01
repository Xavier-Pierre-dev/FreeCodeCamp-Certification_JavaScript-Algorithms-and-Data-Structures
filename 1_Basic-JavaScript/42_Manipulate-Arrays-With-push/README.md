<div class="challenge-instructions basic-javascript"><div><section id="description">
<p>An easy way to append data to the end of an array is via the <code>push()</code> function.</p>
<p><code>.push()</code> takes one or more <dfn>parameters</dfn> and "pushes" them onto the end of the array.</p>
<p>Examples:</p>
<pre class="language-js"><code class="language-js"><span class="token keyword">var</span> arr1 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
arr1<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">var</span> arr2 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">"Stimpson"</span><span class="token punctuation">,</span> <span class="token string">"J"</span><span class="token punctuation">,</span> <span class="token string">"cat"</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
arr2<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">"happy"</span><span class="token punctuation">,</span> <span class="token string">"joy"</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<p><code>arr1</code> now has the value <code>[1, 2, 3, 4]</code> and <code>arr2</code> has the value <code>["Stimpson", "J", "cat", ["happy", "joy"]]</code>.</p>
</section></div><hr/><div><section id="instructions">
<p>Push <code>["dog", 3]</code> onto the end of the <code>myArray</code> variable.</p>
</section></div><hr/></div>