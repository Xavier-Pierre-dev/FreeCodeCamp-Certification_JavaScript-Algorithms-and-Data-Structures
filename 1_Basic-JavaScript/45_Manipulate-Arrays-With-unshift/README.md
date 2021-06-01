<div class="challenge-instructions basic-javascript"><div><section id="description">
<p>Not only can you <code>shift</code> elements off of the beginning of an array, you can also <code>unshift</code> elements to the beginning of an array i.e. add elements in front of the array.</p>
<p><code>.unshift()</code> works exactly like <code>.push()</code>, but instead of adding the element at the end of the array, <code>unshift()</code> adds the element at the beginning of the array.</p>
<p>Example:</p>
<pre class="language-js"><code class="language-js"><span class="token keyword">var</span> ourArray <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">"Stimpson"</span><span class="token punctuation">,</span> <span class="token string">"J"</span><span class="token punctuation">,</span> <span class="token string">"cat"</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
ourArray<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
ourArray<span class="token punctuation">.</span><span class="token function">unshift</span><span class="token punctuation">(</span><span class="token string">"Happy"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<p>After the <code>shift</code>, <code>ourArray</code> would have the value <code>["J", "cat"]</code>. After the <code>unshift</code>, <code>ourArray</code> would have the value <code>["Happy", "J", "cat"]</code>.</p>
</section></div><hr/><div><section id="instructions">
<p>Add <code>["Paul",35]</code> to the beginning of the <code>myArray</code> variable using <code>unshift()</code>.</p>
</section></div><hr/></div>