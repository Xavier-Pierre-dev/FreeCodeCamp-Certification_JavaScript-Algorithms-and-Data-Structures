<div class="challenge-instructions basic-data-structures"><div><section id="description">
<p>Sometimes you may need to iterate through all the keys within an object. This requires a specific syntax in JavaScript called a <dfn>for...in</dfn> statement. For our <code>users</code> object, this could look like:</p>
<pre class="language-js"><code class="language-js"><span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> user <span class="token keyword">in</span> users<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre>
<p>This would log <code>Alan</code>, <code>Jeff</code>, <code>Sarah</code>, and <code>Ryan</code> - each value on its own line.</p>
<p>In this statement, we defined a variable <code>user</code>, and as you can see, this variable was reset during each iteration to each of the object's keys as the statement looped through the object, resulting in each user's name being printed to the console.</p>
<p><strong>NOTE:</strong> Objects do not maintain an ordering to stored keys like arrays do; thus a key's position on an object, or the relative order in which it appears, is irrelevant when referencing or accessing that key.</p>
</section></div><hr/><div><section id="instructions">
<p>We've defined a function <code>countOnline</code> which accepts one argument (a users object). Use a <dfn>for...in</dfn> statement within this function to loop through the users object passed into the function and return the number of users whose <code>online</code> property is set to <code>true</code>. An example of a users object which could be passed to <code>countOnline</code> is shown below. Each user will have an <code>online</code> property with either a <code>true</code> or <code>false</code> value.</p>
<pre class="language-js"><code class="language-js"><span class="token punctuation">{</span>
  Alan<span class="token operator">:</span> <span class="token punctuation">{</span>
    online<span class="token operator">:</span> <span class="token boolean">false</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  Jeff<span class="token operator">:</span> <span class="token punctuation">{</span>
    online<span class="token operator">:</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  Sarah<span class="token operator">:</span> <span class="token punctuation">{</span>
    online<span class="token operator">:</span> <span class="token boolean">false</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre>
</section></div><hr/></div>