<div class="challenge-instructions object-oriented-programming"><div><section id="description">
<p>Since <code>numLegs</code> will probably have the same value for all instances of <code>Bird</code>, you essentially have a duplicated variable <code>numLegs</code> inside each <code>Bird</code> instance.</p>
<p>This may not be an issue when there are only two instances, but imagine if there are millions of instances. That would be a lot of duplicated variables.</p>
<p>A better way is to use <code>Bird’s</code> <code>prototype</code>. Properties in the <code>prototype</code> are shared among ALL instances of <code>Bird</code>. Here's how to add <code>numLegs</code> to the <code>Bird prototype</code>:</p>
<pre class="language-js"><code class="language-js"><span class="token class-name">Bird</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>numLegs <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
</code></pre>
<p>Now all instances of <code>Bird</code> have the <code>numLegs</code> property.</p>
<pre class="language-js"><code class="language-js">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>duck<span class="token punctuation">.</span>numLegs<span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>canary<span class="token punctuation">.</span>numLegs<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<p>Since all instances automatically have the properties on the <code>prototype</code>, think of a <code>prototype</code> as a "recipe" for creating objects. Note that the <code>prototype</code> for <code>duck</code> and <code>canary</code> is part of the <code>Bird</code> constructor as <code>Bird.prototype</code>. Nearly every object in JavaScript has a <code>prototype</code> property which is part of the constructor function that created it.</p>
</section></div><hr/><div><section id="instructions">
<p>Add a <code>numLegs</code> property to the <code>prototype</code> of <code>Dog</code></p>
</section></div><hr/></div>