<div class="challenge-instructions basic-javascript"><div><section id="description">
<p>Another use of bracket notation on objects is to access a property which is stored as the value of a variable. This can be very useful for iterating through an object's properties or when accessing a lookup table.</p>
<p>Here is an example of using a variable to access a property:</p>
<pre class="language-js"><code class="language-js"><span class="token keyword">var</span> dogs <span class="token operator">=</span> <span class="token punctuation">{</span>
  Fido<span class="token operator">:</span> <span class="token string">"Mutt"</span><span class="token punctuation">,</span>  Hunter<span class="token operator">:</span> <span class="token string">"Doberman"</span><span class="token punctuation">,</span>  Snoopie<span class="token operator">:</span> <span class="token string">"Beagle"</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> myDog <span class="token operator">=</span> <span class="token string">"Hunter"</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> myBreed <span class="token operator">=</span> dogs<span class="token punctuation">[</span>myDog<span class="token punctuation">]</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>myBreed<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<p>The string <code>Doberman</code> would be displayed in the console.</p>
<p>Another way you can use this concept is when the property's name is collected dynamically during the program execution, as follows:</p>
<pre class="language-js"><code class="language-js"><span class="token keyword">var</span> someObj <span class="token operator">=</span> <span class="token punctuation">{</span>
  propName<span class="token operator">:</span> <span class="token string">"John"</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function">propPrefix</span><span class="token punctuation">(</span><span class="token parameter">str</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> s <span class="token operator">=</span> <span class="token string">"prop"</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> s <span class="token operator">+</span> str<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">var</span> someProp <span class="token operator">=</span> <span class="token function">propPrefix</span><span class="token punctuation">(</span><span class="token string">"Name"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>someObj<span class="token punctuation">[</span>someProp<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<p><code>someProp</code> would have a value of the string <code>propName</code>, and the string <code>John</code> would be displayed in the console.</p>
<p>Note that we do <em>not</em> use quotes around the variable name when using it to access the property because we are using the <em>value</em> of the variable, not the <em>name</em>.</p>
</section></div><hr/><div><section id="instructions">
<p>Set the <code>playerNumber</code> variable to <code>16</code>. Then, use the variable to look up the player's name and assign it to <code>player</code>.</p>
</section></div><hr/></div>