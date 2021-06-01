<div class="challenge-instructions object-oriented-programming"><div><section id="description">
<p>In previous lessons, you learned that an object can inherit its behavior (methods) from another object by referencing its <code>prototype</code> object:</p>
<pre class="language-js"><code class="language-js"><span class="token class-name">ChildObject</span><span class="token punctuation">.</span>prototype <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token class-name">ParentObject</span><span class="token punctuation">.</span>prototype<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<p>Then the <code>ChildObject</code> received its own methods by chaining them onto its <code>prototype</code>:</p>
<pre class="language-js"><code class="language-js"><span class="token class-name">ChildObject</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">methodName</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token operator">...</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre>
<p>It's possible to override an inherited method. It's done the same way - by adding a method to <code>ChildObject.prototype</code> using the same method name as the one to override. Here's an example of <code>Bird</code> overriding the <code>eat()</code> method inherited from <code>Animal</code>:</p>
<pre class="language-js"><code class="language-js"><span class="token keyword">function</span> <span class="token function">Animal</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span>
<span class="token class-name">Animal</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">eat</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token string">"nom nom nom"</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function">Bird</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span>

<span class="token class-name">Bird</span><span class="token punctuation">.</span>prototype <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token class-name">Animal</span><span class="token punctuation">.</span>prototype<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token class-name">Bird</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">eat</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token string">"peck peck peck"</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre>
<p>If you have an instance <code>let duck = new Bird();</code> and you call <code>duck.eat()</code>, this is how JavaScript looks for the method on <code>duck’s</code> <code>prototype</code> chain:</p>
<ol>
<li><code>duck</code> =&gt; Is <code>eat()</code> defined here? No.</li>
<li><code>Bird</code> =&gt; Is <code>eat()</code> defined here? =&gt; Yes. Execute it and stop searching.</li>
<li><code>Animal</code> =&gt; <code>eat()</code> is also defined, but JavaScript stopped searching before reaching this level.</li>
<li>Object =&gt; JavaScript stopped searching before reaching this level.</li>
</ol>
</section></div><hr/><div><section id="instructions">
<p>Override the <code>fly()</code> method for <code>Penguin</code> so that it returns the string <code>Alas, this is a flightless bird.</code></p>
</section></div><hr/></div>