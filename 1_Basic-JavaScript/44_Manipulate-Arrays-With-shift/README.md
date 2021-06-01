<div class="challenge-instructions basic-javascript"><div><section id="description">
<p><code>pop()</code> always removes the last element of an array. What if you want to remove the first?</p>
<p>That's where <code>.shift()</code> comes in. It works just like <code>.pop()</code>, except it removes the first element instead of the last.</p>
<p>Example:</p>
<pre class="language-js"><code class="language-js"><span class="token keyword">var</span> ourArray <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">"Stimpson"</span><span class="token punctuation">,</span> <span class="token string">"J"</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">"cat"</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> removedFromOurArray <span class="token operator">=</span> ourArray<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<p><code>removedFromOurArray</code> would have a value of the string <code>Stimpson</code>, and <code>ourArray</code> would have <code>["J", ["cat"]]</code>.</p>
</section></div><hr/><div><section id="instructions">
<p>Use the <code>.shift()</code> function to remove the first item from <code>myArray</code>, assigning the "shifted off" value to <code>removedFromMyArray</code>.</p>
</section></div><hr/></div>