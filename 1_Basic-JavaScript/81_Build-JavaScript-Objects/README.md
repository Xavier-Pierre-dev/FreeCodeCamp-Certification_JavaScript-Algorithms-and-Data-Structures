<div class="challenge-instructions basic-javascript"><div><section id="description">
<p>You may have heard the term <code>object</code> before.</p>
<p>Objects are similar to <code>arrays</code>, except that instead of using indexes to access and modify their data, you access the data in objects through what are called <code>properties</code>.</p>
<p>Objects are useful for storing data in a structured way, and can represent real world objects, like a cat.</p>
<p>Here's a sample cat object:</p>
<pre class="language-js"><code class="language-js"><span class="token keyword">var</span> cat <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token string">"name"</span><span class="token operator">:</span> <span class="token string">"Whiskers"</span><span class="token punctuation">,</span>
  <span class="token string">"legs"</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
  <span class="token string">"tails"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token string">"enemies"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"Water"</span><span class="token punctuation">,</span> <span class="token string">"Dogs"</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre>
<p>In this example, all the properties are stored as strings, such as - <code>name</code>, <code>legs</code>, and <code>tails</code>. However, you can also use numbers as properties. You can even omit the quotes for single-word string properties, as follows:</p>
<pre class="language-js"><code class="language-js"><span class="token keyword">var</span> anotherObject <span class="token operator">=</span> <span class="token punctuation">{</span>
  make<span class="token operator">:</span> <span class="token string">"Ford"</span><span class="token punctuation">,</span>
  <span class="token number">5</span><span class="token operator">:</span> <span class="token string">"five"</span><span class="token punctuation">,</span>
  <span class="token string">"model"</span><span class="token operator">:</span> <span class="token string">"focus"</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre>
<p>However, if your object has any non-string properties, JavaScript will automatically typecast them as strings.</p>
</section></div><hr/><div><section id="instructions">
<p>Make an object that represents a dog called <code>myDog</code> which contains the properties <code>name</code> (a string), <code>legs</code>, <code>tails</code> and <code>friends</code>.</p>
<p>You can set these object properties to whatever values you want, as long as <code>name</code> is a string, <code>legs</code> and <code>tails</code> are numbers, and <code>friends</code> is an array.</p>
</section></div><hr/></div>