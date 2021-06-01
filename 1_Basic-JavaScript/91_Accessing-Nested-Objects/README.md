<div class="challenge-instructions basic-javascript"><div><section id="description">
<p>The sub-properties of objects can be accessed by chaining together the dot or bracket notation.</p>
<p>Here is a nested object:</p>
<pre class="language-js"><code class="language-js"><span class="token keyword">var</span> ourStorage <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token string">"desk"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string">"drawer"</span><span class="token operator">:</span> <span class="token string">"stapler"</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token string">"cabinet"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string">"top drawer"</span><span class="token operator">:</span> <span class="token punctuation">{</span> 
      <span class="token string">"folder1"</span><span class="token operator">:</span> <span class="token string">"a file"</span><span class="token punctuation">,</span>
      <span class="token string">"folder2"</span><span class="token operator">:</span> <span class="token string">"secrets"</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token string">"bottom drawer"</span><span class="token operator">:</span> <span class="token string">"soda"</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
ourStorage<span class="token punctuation">.</span>cabinet<span class="token punctuation">[</span><span class="token string">"top drawer"</span><span class="token punctuation">]</span><span class="token punctuation">.</span>folder2<span class="token punctuation">;</span>
ourStorage<span class="token punctuation">.</span>desk<span class="token punctuation">.</span>drawer<span class="token punctuation">;</span>
</code></pre>
<p><code>ourStorage.cabinet["top drawer"].folder2</code> would be the string <code>secrets</code>, and <code>ourStorage.desk.drawer</code> would be the string <code>stapler</code>.</p>
</section></div><hr/><div><section id="instructions">
<p>Access the <code>myStorage</code> object and assign the contents of the <code>glove box</code> property to the <code>gloveBoxContents</code> variable. Use dot notation for all properties where possible, otherwise use bracket notation.</p>
</section></div><hr/></div>