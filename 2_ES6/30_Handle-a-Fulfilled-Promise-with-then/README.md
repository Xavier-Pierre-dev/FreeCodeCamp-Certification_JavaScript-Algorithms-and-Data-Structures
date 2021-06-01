<div class="challenge-instructions es6"><div><section id="description">
<p>Promises are most useful when you have a process that takes an unknown amount of time in your code (i.e. something asynchronous), often a server request. When you make a server request it takes some amount of time, and after it completes you usually want to do something with the response from the server. This can be achieved by using the <code>then</code> method. The <code>then</code> method is executed immediately after your promise is fulfilled with <code>resolve</code>. Here’s an example:</p>
<pre class="language-js"><code class="language-js">myPromise<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">result</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<p><code>result</code> comes from the argument given to the <code>resolve</code> method.</p>
</section></div><hr/><div><section id="instructions">
<p>Add the <code>then</code> method to your promise. Use <code>result</code> as the parameter of its callback function and log <code>result</code> to the console.</p>
</section></div><hr/></div>