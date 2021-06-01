<div class="challenge-instructions es6"><div><section id="description">
<p>A promise in JavaScript is exactly what it sounds like - you use it to make a promise to do something, usually asynchronously. When the task completes, you either fulfill your promise or fail to do so. <code>Promise</code> is a constructor function, so you need to use the <code>new</code> keyword to create one. It takes a function, as its argument, with two parameters - <code>resolve</code> and <code>reject</code>. These are methods used to determine the outcome of the promise. The syntax looks like this:</p>
<pre class="language-js"><code class="language-js"><span class="token keyword">const</span> myPromise <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>

<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
</section></div><hr/><div><section id="instructions">
<p>Create a new promise called <code>makeServerRequest</code>. Pass in a function with <code>resolve</code> and <code>reject</code> parameters to the constructor.</p>
</section></div><hr/></div>