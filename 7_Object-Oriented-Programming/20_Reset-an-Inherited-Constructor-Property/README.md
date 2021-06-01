<div class="challenge-instructions object-oriented-programming"><div><section id="description">
<p>When an object inherits its <code>prototype</code> from another object, it also inherits the supertype's constructor property.</p>
<p>Here's an example:</p>
<pre class="language-js"><code class="language-js"><span class="token keyword">function</span> <span class="token function">Bird</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span>
<span class="token class-name">Bird</span><span class="token punctuation">.</span>prototype <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token class-name">Animal</span><span class="token punctuation">.</span>prototype<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> duck <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Bird</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
duck<span class="token punctuation">.</span>constructor
</code></pre>
<p>But <code>duck</code> and all instances of <code>Bird</code> should show that they were constructed by <code>Bird</code> and not <code>Animal</code>. To do so, you can manually set <code>Bird's</code> constructor property to the <code>Bird</code> object:</p>
<pre class="language-js"><code class="language-js"><span class="token class-name">Bird</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>constructor <span class="token operator">=</span> Bird<span class="token punctuation">;</span>
duck<span class="token punctuation">.</span>constructor
</code></pre>
</section></div><hr/><div><section id="instructions">
<p>Fix the code so <code>duck.constructor</code> and <code>beagle.constructor</code> return their respective constructors.</p>
</section></div><hr/></div>