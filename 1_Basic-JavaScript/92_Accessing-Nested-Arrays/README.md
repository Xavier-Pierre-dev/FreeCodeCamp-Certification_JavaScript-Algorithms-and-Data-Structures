<div class="challenge-instructions basic-javascript"><div><section id="description">
<p>As we have seen in earlier examples, objects can contain both nested objects and nested arrays. Similar to accessing nested objects, array bracket notation can be chained to access nested arrays.</p>
<p>Here is an example of how to access a nested array:</p>
<pre class="language-js"><code class="language-js"><span class="token keyword">var</span> ourPets <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    animalType<span class="token operator">:</span> <span class="token string">"cat"</span><span class="token punctuation">,</span>
    names<span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">"Meowzer"</span><span class="token punctuation">,</span>
      <span class="token string">"Fluffy"</span><span class="token punctuation">,</span>
      <span class="token string">"Kit-Cat"</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    animalType<span class="token operator">:</span> <span class="token string">"dog"</span><span class="token punctuation">,</span>
    names<span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">"Spot"</span><span class="token punctuation">,</span>
      <span class="token string">"Bowser"</span><span class="token punctuation">,</span>
      <span class="token string">"Frankie"</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>
ourPets<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>names<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
ourPets<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">.</span>names<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre>
<p><code>ourPets[0].names[1]</code> would be the string <code>Fluffy</code>, and <code>ourPets[1].names[0]</code> would be the string <code>Spot</code>.</p>
</section></div><hr/><div><section id="instructions">
<p>Using dot and bracket notation, set the variable <code>secondTree</code> to the second item in the <code>trees</code> list from the <code>myPlants</code> object.</p>
</section></div><hr/></div>