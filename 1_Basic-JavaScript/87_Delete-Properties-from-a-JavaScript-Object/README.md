<div class="challenge-instructions basic-javascript"><div><section id="description">
<p>We can also delete properties from objects like this:</p>
<pre class="language-js"><code class="language-js"><span class="token keyword">delete</span> ourDog<span class="token punctuation">.</span>bark<span class="token punctuation">;</span>
</code></pre>
<p>Example:</p>
<pre class="language-js"><code class="language-js"><span class="token keyword">var</span> ourDog <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token string">"name"</span><span class="token operator">:</span> <span class="token string">"Camper"</span><span class="token punctuation">,</span>
  <span class="token string">"legs"</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
  <span class="token string">"tails"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token string">"friends"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"everything!"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token string">"bark"</span><span class="token operator">:</span> <span class="token string">"bow-wow"</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">delete</span> ourDog<span class="token punctuation">.</span>bark<span class="token punctuation">;</span>
</code></pre>
<p>After the last line shown above, <code>ourDog</code> looks like:</p>
<pre class="language-js"><code class="language-js"><span class="token punctuation">{</span>
  <span class="token string">"name"</span><span class="token operator">:</span> <span class="token string">"Camper"</span><span class="token punctuation">,</span>
  <span class="token string">"legs"</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
  <span class="token string">"tails"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token string">"friends"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"everything!"</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre>
</section></div><hr/><div><section id="instructions">
<p>Delete the <code>tails</code> property from <code>myDog</code>. You may use either dot or bracket notation.</p>
</section></div><hr/></div>