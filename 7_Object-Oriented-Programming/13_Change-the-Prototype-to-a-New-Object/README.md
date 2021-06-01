<div class="challenge-instructions object-oriented-programming"><div><section id="description">
<p>Up until now you have been adding properties to the <code>prototype</code> individually:</p>
<pre class="language-js"><code class="language-js"><span class="token class-name">Bird</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>numLegs <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
</code></pre>
<p>This becomes tedious after more than a few properties.</p>
<pre class="language-js"><code class="language-js"><span class="token class-name">Bird</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">eat</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"nom nom nom"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token class-name">Bird</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">describe</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"My name is "</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre>
<p>A more efficient way is to set the <code>prototype</code> to a new object that already contains the properties. This way, the properties are added all at once:</p>
<pre class="language-js"><code class="language-js"><span class="token class-name">Bird</span><span class="token punctuation">.</span>prototype <span class="token operator">=</span> <span class="token punctuation">{</span>
  numLegs<span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span> 
  <span class="token function-variable function">eat</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"nom nom nom"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function-variable function">describe</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"My name is "</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre>
</section></div><hr/><div><section id="instructions">
<p>Add the property <code>numLegs</code> and the two methods <code>eat()</code> and <code>describe()</code> to the <code>prototype</code> of <code>Dog</code> by setting the <code>prototype</code> to a new object.</p>
</section></div><hr/></div>