<div class="challenge-instructions object-oriented-programming"><div><section id="description">
<p>As you have seen, behavior is shared through inheritance. However, there are cases when inheritance is not the best solution. Inheritance does not work well for unrelated objects like <code>Bird</code> and <code>Airplane</code>. They can both fly, but a <code>Bird</code> is not a type of <code>Airplane</code> and vice versa.</p>
<p>For unrelated objects, it's better to use <dfn>mixins</dfn>. A mixin allows other objects to use a collection of functions.</p>
<pre class="language-js"><code class="language-js"><span class="token keyword">let</span> <span class="token function-variable function">flyMixin</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">obj</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  obj<span class="token punctuation">.</span><span class="token function-variable function">fly</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"Flying, wooosh!"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre>
<p>The <code>flyMixin</code> takes any object and gives it the <code>fly</code> method.</p>
<pre class="language-js"><code class="language-js"><span class="token keyword">let</span> bird <span class="token operator">=</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token string">"Donald"</span><span class="token punctuation">,</span>
  numLegs<span class="token operator">:</span> <span class="token number">2</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">let</span> plane <span class="token operator">=</span> <span class="token punctuation">{</span>
  model<span class="token operator">:</span> <span class="token string">"777"</span><span class="token punctuation">,</span>
  numPassengers<span class="token operator">:</span> <span class="token number">524</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token function">flyMixin</span><span class="token punctuation">(</span>bird<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">flyMixin</span><span class="token punctuation">(</span>plane<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<p>Here <code>bird</code> and <code>plane</code> are passed into <code>flyMixin</code>, which then assigns the <code>fly</code> function to each object. Now <code>bird</code> and <code>plane</code> can both fly:</p>
<pre class="language-js"><code class="language-js">bird<span class="token punctuation">.</span><span class="token function">fly</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
plane<span class="token punctuation">.</span><span class="token function">fly</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<p>The console would display the string <code>Flying, wooosh!</code> twice, once for each <code>.fly()</code> call.</p>
<p>Note how the mixin allows for the same <code>fly</code> method to be reused by unrelated objects <code>bird</code> and <code>plane</code>.</p>
</section></div><hr/><div><section id="instructions">
<p>Create a mixin named <code>glideMixin</code> that defines a method named <code>glide</code>. Then use the <code>glideMixin</code> to give both <code>bird</code> and <code>boat</code> the ability to glide.</p>
</section></div><hr/></div>