<div class="challenge-instructions basic-javascript"><div><section id="description">
<p>Unlike strings, the entries of arrays are <dfn>mutable</dfn> and can be changed freely.</p>
<p><strong>Example</strong></p>
<pre class="language-js"><code class="language-js"><span class="token keyword">var</span> ourArray <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">50</span><span class="token punctuation">,</span><span class="token number">40</span><span class="token punctuation">,</span><span class="token number">30</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
ourArray<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">15</span><span class="token punctuation">;</span>
</code></pre>
<p><code>ourArray</code> now has the value <code>[15, 40, 30]</code>.</p>
<p><strong>Note:</strong> There shouldn't be any spaces between the array name and the square brackets, like <code>array [0]</code>. Although JavaScript is able to process this correctly, this may confuse other programmers reading your code.</p>
</section></div><hr/><div><section id="instructions">
<p>Modify the data stored at index <code>0</code> of <code>myArray</code> to a value of <code>45</code>.</p>
</section></div><hr/></div>