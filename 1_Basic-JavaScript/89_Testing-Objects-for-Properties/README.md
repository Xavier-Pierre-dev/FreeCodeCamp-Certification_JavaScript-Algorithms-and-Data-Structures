<div class="challenge-instructions basic-javascript"><div><section id="description">
<p>Sometimes it is useful to check if the property of a given object exists or not. We can use the <code>.hasOwnProperty(propname)</code> method of objects to determine if that object has the given property name. <code>.hasOwnProperty()</code> returns <code>true</code> or <code>false</code> if the property is found or not.</p>
<p><strong>Example</strong></p>
<pre class="language-js"><code class="language-js"><span class="token keyword">var</span> myObj <span class="token operator">=</span> <span class="token punctuation">{</span>
  top<span class="token operator">:</span> <span class="token string">"hat"</span><span class="token punctuation">,</span>
  bottom<span class="token operator">:</span> <span class="token string">"pants"</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
myObj<span class="token punctuation">.</span><span class="token function">hasOwnProperty</span><span class="token punctuation">(</span><span class="token string">"top"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
myObj<span class="token punctuation">.</span><span class="token function">hasOwnProperty</span><span class="token punctuation">(</span><span class="token string">"middle"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<p>The first <code>hasOwnProperty</code> returns <code>true</code>, while the second returns <code>false</code>.</p>
</section></div><hr/><div><section id="instructions">
<p>Modify the function <code>checkObj</code> to test if an object passed to the function (<code>obj</code>) contains a specific property (<code>checkProp</code>). If the property is found, return that property's value. If not, return <code>"Not Found"</code>.</p>
</section></div><hr/></div>