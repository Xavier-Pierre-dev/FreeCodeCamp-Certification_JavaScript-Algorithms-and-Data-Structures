<div class="challenge-instructions object-oriented-programming"><div><section id="description">
<p>In the previous challenge, you created a <code>supertype</code> called <code>Animal</code> that defined behaviors shared by all animals:</p>
<pre class="language-js"><code class="language-js"><span class="token keyword">function</span> <span class="token function">Animal</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span>
<span class="token class-name">Animal</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">eat</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"nom nom nom"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre>
<p>This and the next challenge will cover how to reuse <code>Animal's</code> methods inside <code>Bird</code> and <code>Dog</code> without defining them again. It uses a technique called inheritance. This challenge covers the first step: make an instance of the <code>supertype</code> (or parent). You already know one way to create an instance of <code>Animal</code> using the <code>new</code> operator:</p>
<pre class="language-js"><code class="language-js"><span class="token keyword">let</span> animal <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Animal</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<p>There are some disadvantages when using this syntax for inheritance, which are too complex for the scope of this challenge. Instead, here's an alternative approach without those disadvantages:</p>
<pre class="language-js"><code class="language-js"><span class="token keyword">let</span> animal <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token class-name">Animal</span><span class="token punctuation">.</span>prototype<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<p><code>Object.create(obj)</code> creates a new object, and sets <code>obj</code> as the new object's <code>prototype</code>. Recall that the <code>prototype</code> is like the "recipe" for creating an object. By setting the <code>prototype</code> of <code>animal</code> to be <code>Animal's</code> <code>prototype</code>, you are effectively giving the <code>animal</code> instance the same "recipe" as any other instance of <code>Animal</code>.</p>
<pre class="language-js"><code class="language-js">animal<span class="token punctuation">.</span><span class="token function">eat</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
animal <span class="token keyword">instanceof</span> <span class="token class-name">Animal</span><span class="token punctuation">;</span>
</code></pre>
<p>The <code>instanceof</code> method here would return <code>true</code>.</p>
</section></div><hr/><div><section id="instructions">
<p>Use <code>Object.create</code> to make two instances of <code>Animal</code> named <code>duck</code> and <code>beagle</code>.</p>
</section></div><hr/></div>