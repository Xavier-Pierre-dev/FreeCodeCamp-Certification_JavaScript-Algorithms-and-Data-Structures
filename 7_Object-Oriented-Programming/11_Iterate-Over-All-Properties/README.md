<div class="challenge-instructions object-oriented-programming"><div><section id="description">
<p>You have now seen two kinds of properties: <dfn>own properties</dfn> and <code>prototype</code> properties. Own properties are defined directly on the object instance itself. And <code>prototype</code> properties are defined on the <code>prototype</code>.</p>
<pre class="language-js"><code class="language-js"><span class="token keyword">function</span> <span class="token function">Bird</span><span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>  <span class="token comment">//own property</span>
<span class="token punctuation">}</span>

<span class="token class-name">Bird</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>numLegs <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span> <span class="token comment">// prototype property</span>

<span class="token keyword">let</span> duck <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Bird</span><span class="token punctuation">(</span><span class="token string">"Donald"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<p>Here is how you add <code>duck</code>'s own properties to the array <code>ownProps</code> and <code>prototype</code> properties to the array <code>prototypeProps</code>:</p>
<pre class="language-js"><code class="language-js"><span class="token keyword">let</span> ownProps <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> prototypeProps <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> property <span class="token keyword">in</span> duck<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span><span class="token punctuation">(</span>duck<span class="token punctuation">.</span><span class="token function">hasOwnProperty</span><span class="token punctuation">(</span>property<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    ownProps<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>property<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    prototypeProps<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>property<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>ownProps<span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>prototypeProps<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<p><code>console.log(ownProps)</code> would display <code>["name"]</code> in the console, and <code>console.log(prototypeProps)</code> would display <code>["numLegs"]</code>.</p>
</section></div><hr/><div><section id="instructions">
<p>Add all of the own properties of <code>beagle</code> to the array <code>ownProps</code>. Add all of the <code>prototype</code> properties of <code>Dog</code> to the array <code>prototypeProps</code>.</p>
</section></div><hr/></div>