<div class="challenge-instructions basic-javascript"><div><section id="description">
<p>After you've created a JavaScript object, you can update its properties at any time just like you would update any other variable. You can use either dot or bracket notation to update.</p>
<p>For example, let's look at <code>ourDog</code>:</p>
<pre class="language-js"><code class="language-js"><span class="token keyword">var</span> ourDog <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token string">"name"</span><span class="token operator">:</span> <span class="token string">"Camper"</span><span class="token punctuation">,</span>
  <span class="token string">"legs"</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
  <span class="token string">"tails"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token string">"friends"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"everything!"</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre>
<p>Since he's a particularly happy dog, let's change his name to the string <code>Happy Camper</code>. Here's how we update his object's name property: <code>ourDog.name = "Happy Camper";</code> or <code>ourDog["name"] = "Happy Camper";</code> Now when we evaluate <code>ourDog.name</code>, instead of getting <code>Camper</code>, we'll get his new name, <code>Happy Camper</code>.</p>
</section></div><hr/><div><section id="instructions">
<p>Update the <code>myDog</code> object's name property. Let's change her name from <code>Coder</code> to <code>Happy Coder</code>. You can use either dot or bracket notation.</p>
</section></div><hr/></div>