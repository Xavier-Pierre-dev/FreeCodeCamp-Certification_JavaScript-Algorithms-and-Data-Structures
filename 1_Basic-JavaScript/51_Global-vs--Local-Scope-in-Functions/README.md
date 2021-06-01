<div class="challenge-instructions basic-javascript"><div><section id="description">
<p>It is possible to have both <dfn>local</dfn> and <dfn>global</dfn> variables with the same name. When you do this, the <code>local</code> variable takes precedence over the <code>global</code> variable.</p>
<p>In this example:</p>
<pre class="language-js"><code class="language-js"><span class="token keyword">var</span> someVar <span class="token operator">=</span> <span class="token string">"Hat"</span><span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function">myFun</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> someVar <span class="token operator">=</span> <span class="token string">"Head"</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> someVar<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre>
<p>The function <code>myFun</code> will return the string <code>Head</code> because the <code>local</code> version of the variable is present.</p>
</section></div><hr/><div><section id="instructions">
<p>Add a local variable to <code>myOutfit</code> function to override the value of <code>outerWear</code> with the string <code>sweater</code>.</p>
</section></div><hr/></div>