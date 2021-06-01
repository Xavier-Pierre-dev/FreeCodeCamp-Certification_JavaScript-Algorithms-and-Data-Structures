<div class="challenge-instructions basic-javascript"><div><section id="description">
<p>The second way to access the properties of an object is bracket notation (<code>[]</code>). If the property of the object you are trying to access has a space in its name, you will need to use bracket notation.</p>
<p>However, you can still use bracket notation on object properties without spaces.</p>
<p>Here is a sample of using bracket notation to read an object's property:</p>
<pre class="language-js"><code class="language-js"><span class="token keyword">var</span> myObj <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token string">"Space Name"</span><span class="token operator">:</span> <span class="token string">"Kirk"</span><span class="token punctuation">,</span>
  <span class="token string">"More Space"</span><span class="token operator">:</span> <span class="token string">"Spock"</span><span class="token punctuation">,</span>
  <span class="token string">"NoSpace"</span><span class="token operator">:</span> <span class="token string">"USS Enterprise"</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
myObj<span class="token punctuation">[</span><span class="token string">"Space Name"</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
myObj<span class="token punctuation">[</span><span class="token string">'More Space'</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
myObj<span class="token punctuation">[</span><span class="token string">"NoSpace"</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre>
<p><code>myObj["Space Name"]</code> would be the string <code>Kirk</code>, <code>myObj['More Space']</code> would be the string <code>Spock</code>, and <code>myObj["NoSpace"]</code> would be the string <code>USS Enterprise</code>.</p>
<p>Note that property names with spaces in them must be in quotes (single or double).</p>
</section></div><hr/><div><section id="instructions">
<p>Read the values of the properties <code>an entree</code> and <code>the drink</code> of <code>testObj</code> using bracket notation and assign them to <code>entreeValue</code> and <code>drinkValue</code> respectively.</p>
</section></div><hr/></div>