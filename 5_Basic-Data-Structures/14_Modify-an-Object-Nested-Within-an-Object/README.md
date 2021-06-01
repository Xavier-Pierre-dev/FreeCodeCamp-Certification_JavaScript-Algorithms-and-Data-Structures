<div class="challenge-instructions basic-data-structures"><div><section id="description">
<p>Now let's take a look at a slightly more complex object. Object properties can be nested to an arbitrary depth, and their values can be any type of data supported by JavaScript, including arrays and even other objects. Consider the following:</p>
<pre class="language-js"><code class="language-js"><span class="token keyword">let</span> nestedObject <span class="token operator">=</span> <span class="token punctuation">{</span>
  id<span class="token operator">:</span> <span class="token number">28802695164</span><span class="token punctuation">,</span>
  date<span class="token operator">:</span> <span class="token string">'December 31, 2016'</span><span class="token punctuation">,</span>
  data<span class="token operator">:</span> <span class="token punctuation">{</span>
    totalUsers<span class="token operator">:</span> <span class="token number">99</span><span class="token punctuation">,</span>
    online<span class="token operator">:</span> <span class="token number">80</span><span class="token punctuation">,</span>
    onlineStatus<span class="token operator">:</span> <span class="token punctuation">{</span>
      active<span class="token operator">:</span> <span class="token number">67</span><span class="token punctuation">,</span>
      away<span class="token operator">:</span> <span class="token number">13</span><span class="token punctuation">,</span>
      busy<span class="token operator">:</span> <span class="token number">8</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre>
<p><code>nestedObject</code> has three properties: <code>id</code> (value is a number), <code>date</code> (value is a string), and <code>data</code> (value is an object with its nested structure). While structures can quickly become complex, we can still use the same notations to access the information we need. To assign the value <code>10</code> to the <code>busy</code> property of the nested <code>onlineStatus</code> object, we use dot notation to reference the property:</p>
<pre class="language-js"><code class="language-js">nestedObject<span class="token punctuation">.</span>data<span class="token punctuation">.</span>onlineStatus<span class="token punctuation">.</span>busy <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
</code></pre>
</section></div><hr/><div><section id="instructions">
<p>Here we've defined an object <code>userActivity</code>, which includes another object nested within it. Set the value of the <code>online</code> key to <code>45</code>.</p>
</section></div><hr/></div>