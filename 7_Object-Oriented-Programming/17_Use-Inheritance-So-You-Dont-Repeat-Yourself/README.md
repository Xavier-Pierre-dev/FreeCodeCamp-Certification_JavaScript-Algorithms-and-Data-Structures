<div class="challenge-instructions object-oriented-programming"><div><section id="description">
<p>There's a principle in programming called <dfn>Don't Repeat Yourself (DRY)</dfn>. The reason repeated code is a problem is because any change requires fixing code in multiple places. This usually means more work for programmers and more room for errors.</p>
<p>Notice in the example below that the <code>describe</code> method is shared by <code>Bird</code> and <code>Dog</code>:</p>
<pre class="language-js"><code class="language-js"><span class="token class-name">Bird</span><span class="token punctuation">.</span>prototype <span class="token operator">=</span> <span class="token punctuation">{</span>
  constructor<span class="token operator">:</span> Bird<span class="token punctuation">,</span>
  <span class="token function-variable function">describe</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"My name is "</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token class-name">Dog</span><span class="token punctuation">.</span>prototype <span class="token operator">=</span> <span class="token punctuation">{</span>
  constructor<span class="token operator">:</span> Dog<span class="token punctuation">,</span>
  <span class="token function-variable function">describe</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"My name is "</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre>
<p>The <code>describe</code> method is repeated in two places. The code can be edited to follow the DRY principle by creating a <code>supertype</code> (or parent) called <code>Animal</code>:</p>
<pre class="language-js"><code class="language-js"><span class="token keyword">function</span> <span class="token function">Animal</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token class-name">Animal</span><span class="token punctuation">.</span>prototype <span class="token operator">=</span> <span class="token punctuation">{</span>
  constructor<span class="token operator">:</span> Animal<span class="token punctuation">,</span> 
  <span class="token function-variable function">describe</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"My name is "</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre>
<p>Since <code>Animal</code> includes the <code>describe</code> method, you can remove it from <code>Bird</code> and <code>Dog</code>:</p>
<pre class="language-js"><code class="language-js"><span class="token class-name">Bird</span><span class="token punctuation">.</span>prototype <span class="token operator">=</span> <span class="token punctuation">{</span>
  constructor<span class="token operator">:</span> Bird
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token class-name">Dog</span><span class="token punctuation">.</span>prototype <span class="token operator">=</span> <span class="token punctuation">{</span>
  constructor<span class="token operator">:</span> Dog
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre>
</section></div><hr/><div><section id="instructions">
<p>The <code>eat</code> method is repeated in both <code>Cat</code> and <code>Bear</code>. Edit the code in the spirit of DRY by moving the <code>eat</code> method to the <code>Animal</code> <code>supertype</code>.</p>
</section></div><hr/></div>