<div class="challenge-instructions functional-programming"><div><section id="description">
<p>Functional programming is all about creating and using non-mutating functions.</p>
<p>The last challenge introduced the <code>concat</code> method as a way to combine arrays into a new one without mutating the original arrays. Compare <code>concat</code> to the <code>push</code> method. <code>push</code> adds an item to the end of the same array it is called on, which mutates that array. Here's an example:</p>
<pre class="language-js"><code class="language-js"><span class="token keyword">var</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
arr<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<p><code>arr</code> would have a modified value of <code>[1, 2, 3, [4, 5, 6]]</code>, which is not the functional programming way.</p>
<p><code>concat</code> offers a way to add new items to the end of an array without any mutating side effects.</p>
</section></div><hr/><div><section id="instructions">
<p>Change the <code>nonMutatingPush</code> function so it uses <code>concat</code> to add <code>newItem</code> to the end of <code>original</code> instead of <code>push</code>. The function should return an array.</p>
</section></div><hr/></div>