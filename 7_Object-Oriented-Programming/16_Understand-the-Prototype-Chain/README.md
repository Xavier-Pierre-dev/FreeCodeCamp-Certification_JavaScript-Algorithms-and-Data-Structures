<div class="challenge-instructions object-oriented-programming"><div><section id="description">
<p>All objects in JavaScript (with a few exceptions) have a <code>prototype</code>. Also, an object’s <code>prototype</code> itself is an object.</p>
<pre class="language-js"><code class="language-js"><span class="token keyword">function</span> <span class="token function">Bird</span><span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">typeof</span> <span class="token class-name">Bird</span><span class="token punctuation">.</span>prototype<span class="token punctuation">;</span>
</code></pre>
<p>Because a <code>prototype</code> is an object, a <code>prototype</code> can have its own <code>prototype</code>! In this case, the <code>prototype</code> of <code>Bird.prototype</code> is <code>Object.prototype</code>:</p>
<pre class="language-js"><code class="language-js"><span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">isPrototypeOf</span><span class="token punctuation">(</span><span class="token class-name">Bird</span><span class="token punctuation">.</span>prototype<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<p>How is this useful? You may recall the <code>hasOwnProperty</code> method from a previous challenge:</p>
<pre class="language-js"><code class="language-js"><span class="token keyword">let</span> duck <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Bird</span><span class="token punctuation">(</span><span class="token string">"Donald"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
duck<span class="token punctuation">.</span><span class="token function">hasOwnProperty</span><span class="token punctuation">(</span><span class="token string">"name"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<p>The <code>hasOwnProperty</code> method is defined in <code>Object.prototype</code>, which can be accessed by <code>Bird.prototype</code>, which can then be accessed by <code>duck</code>. This is an example of the <code>prototype</code> chain. In this <code>prototype</code> chain, <code>Bird</code> is the <code>supertype</code> for <code>duck</code>, while <code>duck</code> is the <code>subtype</code>. <code>Object</code> is a <code>supertype</code> for both <code>Bird</code> and <code>duck</code>. <code>Object</code> is a <code>supertype</code> for all objects in JavaScript. Therefore, any object can use the <code>hasOwnProperty</code> method.</p>
</section></div><hr/><div><section id="instructions">
<p>Modify the code to show the correct prototype chain.</p>
</section></div><hr/></div>