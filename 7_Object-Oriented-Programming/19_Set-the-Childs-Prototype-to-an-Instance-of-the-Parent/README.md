<div class="challenge-instructions object-oriented-programming"><div><section id="description">
<p>In the previous challenge you saw the first step for inheriting behavior from the supertype (or parent) <code>Animal</code>: making a new instance of <code>Animal</code>.</p>
<p>This challenge covers the next step: set the <code>prototype</code> of the subtype (or child)—in this case, <code>Bird</code>—to be an instance of <code>Animal</code>.</p>
<pre class="language-js"><code class="language-js"><span class="token class-name">Bird</span><span class="token punctuation">.</span>prototype <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token class-name">Animal</span><span class="token punctuation">.</span>prototype<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<p>Remember that the <code>prototype</code> is like the "recipe" for creating an object. In a way, the recipe for <code>Bird</code> now includes all the key "ingredients" from <code>Animal</code>.</p>
<pre class="language-js"><code class="language-js"><span class="token keyword">let</span> duck <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Bird</span><span class="token punctuation">(</span><span class="token string">"Donald"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
duck<span class="token punctuation">.</span><span class="token function">eat</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<p><code>duck</code> inherits all of <code>Animal</code>'s properties, including the <code>eat</code> method.</p>
</section></div><hr/><div><section id="instructions">
<p>Modify the code so that instances of <code>Dog</code> inherit from <code>Animal</code>.</p>
</section></div><hr/></div>