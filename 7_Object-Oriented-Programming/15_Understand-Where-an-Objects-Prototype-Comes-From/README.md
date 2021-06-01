<div class="challenge-instructions object-oriented-programming"><div><section id="description">
<p>Just like people inherit genes from their parents, an object inherits its <code>prototype</code> directly from the constructor function that created it. For example, here the <code>Bird</code> constructor creates the <code>duck</code> object:</p>
<pre class="language-js"><code class="language-js"><span class="token keyword">function</span> <span class="token function">Bird</span><span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> duck <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Bird</span><span class="token punctuation">(</span><span class="token string">"Donald"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<p><code>duck</code> inherits its <code>prototype</code> from the <code>Bird</code> constructor function. You can show this relationship with the <code>isPrototypeOf</code> method:</p>
<pre class="language-js"><code class="language-js"><span class="token class-name">Bird</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">isPrototypeOf</span><span class="token punctuation">(</span>duck<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<p>This would return <code>true</code>.</p>
</section></div><hr/><div><section id="instructions">
<p>Use <code>isPrototypeOf</code> to check the <code>prototype</code> of <code>beagle</code>.</p>
</section></div><hr/></div>