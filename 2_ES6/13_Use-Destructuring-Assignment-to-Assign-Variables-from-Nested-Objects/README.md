<div class="challenge-instructions es6"><div><section id="description">
<p>You can use the same principles from the previous two lessons to destructure values from nested objects.</p>
<p>Using an object similar to previous examples:</p>
<pre class="language-js"><code class="language-js"><span class="token keyword">const</span> user <span class="token operator">=</span> <span class="token punctuation">{</span>
  johnDoe<span class="token operator">:</span> <span class="token punctuation">{</span> 
    age<span class="token operator">:</span> <span class="token number">34</span><span class="token punctuation">,</span>
    email<span class="token operator">:</span> <span class="token string">'johnDoe@freeCodeCamp.com'</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre>
<p>Here's how to extract the values of object properties and assign them to variables with the same name:</p>
<pre class="language-js"><code class="language-js"><span class="token keyword">const</span> <span class="token punctuation">{</span> johnDoe<span class="token operator">:</span> <span class="token punctuation">{</span> age<span class="token punctuation">,</span> email <span class="token punctuation">}</span><span class="token punctuation">}</span> <span class="token operator">=</span> user<span class="token punctuation">;</span>
</code></pre>
<p>And here's how you can assign an object properties' values to variables with different names:</p>
<pre class="language-js"><code class="language-js"><span class="token keyword">const</span> <span class="token punctuation">{</span> johnDoe<span class="token operator">:</span> <span class="token punctuation">{</span> age<span class="token operator">:</span> userAge<span class="token punctuation">,</span> email<span class="token operator">:</span> userEmail <span class="token punctuation">}</span><span class="token punctuation">}</span> <span class="token operator">=</span> user<span class="token punctuation">;</span>
</code></pre>
</section></div><hr/><div><section id="instructions">
<p>Replace the two assignments with an equivalent destructuring assignment. It should still assign the variables <code>lowToday</code> and <code>highToday</code> the values of <code>today.low</code> and <code>today.high</code> from the <code>LOCAL_FORECAST</code> object.</p>
</section></div><hr/></div>