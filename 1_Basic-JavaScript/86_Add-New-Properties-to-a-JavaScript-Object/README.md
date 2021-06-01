<div class="challenge-instructions basic-javascript"><div><section id="description">
<p>You can add new properties to existing JavaScript objects the same way you would modify them.</p>
<p>Here's how we would add a <code>bark</code> property to <code>ourDog</code>:</p>
<pre class="language-js"><code class="language-js">ourDog<span class="token punctuation">.</span>bark <span class="token operator">=</span> <span class="token string">"bow-wow"</span><span class="token punctuation">;</span>
</code></pre>
<p>or</p>
<pre class="language-js"><code class="language-js">ourDog<span class="token punctuation">[</span><span class="token string">"bark"</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">"bow-wow"</span><span class="token punctuation">;</span>
</code></pre>
<p>Now when we evaluate <code>ourDog.bark</code>, we'll get his bark, <code>bow-wow</code>.</p>
<p>Example:</p>
<pre class="language-js"><code class="language-js"><span class="token keyword">var</span> ourDog <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token string">"name"</span><span class="token operator">:</span> <span class="token string">"Camper"</span><span class="token punctuation">,</span>
  <span class="token string">"legs"</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
  <span class="token string">"tails"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token string">"friends"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"everything!"</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

ourDog<span class="token punctuation">.</span>bark <span class="token operator">=</span> <span class="token string">"bow-wow"</span><span class="token punctuation">;</span>
</code></pre>
</section></div><hr/><div><section id="instructions">
<p>Add a <code>bark</code> property to <code>myDog</code> and set it to a dog sound, such as "woof". You may use either dot or bracket notation.</p>
</section></div><hr/></div>