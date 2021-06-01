<div class="challenge-instructions es6"><div><section id="description">
<p>In some cases, you can destructure the object in a function argument itself.</p>
<p>Consider the code below:</p>
<pre class="language-js"><code class="language-js"><span class="token keyword">const</span> <span class="token function-variable function">profileUpdate</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">profileData</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> name<span class="token punctuation">,</span> age<span class="token punctuation">,</span> nationality<span class="token punctuation">,</span> location <span class="token punctuation">}</span> <span class="token operator">=</span> profileData<span class="token punctuation">;</span>

<span class="token punctuation">}</span>
</code></pre>
<p>This effectively destructures the object sent into the function. This can also be done in-place:</p>
<pre class="language-js"><code class="language-js"><span class="token keyword">const</span> <span class="token function-variable function">profileUpdate</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> name<span class="token punctuation">,</span> age<span class="token punctuation">,</span> nationality<span class="token punctuation">,</span> location <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>

<span class="token punctuation">}</span>
</code></pre>
<p>When <code>profileData</code> is passed to the above function, the values are destructured from the function parameter for use within the function.</p>
</section></div><hr/><div><section id="instructions">
<p>Use destructuring assignment within the argument to the function <code>half</code> to send only <code>max</code> and <code>min</code> inside the function.</p>
</section></div><hr/></div>