<div class="challenge-instructions es6"><div><section id="description">
<p>Destructuring allows you to assign a new variable name when extracting values. You can do this by putting the new name after a colon when assigning the value.</p>
<p>Using the same object from the last example:</p>
<pre class="language-js"><code class="language-js"><span class="token keyword">const</span> user <span class="token operator">=</span> <span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token string">'John Doe'</span><span class="token punctuation">,</span> age<span class="token operator">:</span> <span class="token number">34</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre>
<p>Here's how you can give new variable names in the assignment:</p>
<pre class="language-js"><code class="language-js"><span class="token keyword">const</span> <span class="token punctuation">{</span> name<span class="token operator">:</span> userName<span class="token punctuation">,</span> age<span class="token operator">:</span> userAge <span class="token punctuation">}</span> <span class="token operator">=</span> user<span class="token punctuation">;</span>
</code></pre>
<p>You may read it as "get the value of <code>user.name</code> and assign it to a new variable named <code>userName</code>" and so on. The value of <code>userName</code> would be the string <code>John Doe</code>, and the value of <code>userAge</code> would be the number <code>34</code>.</p>
</section></div><hr/><div><section id="instructions">
<p>Replace the two assignments with an equivalent destructuring assignment. It should still assign the variables <code>highToday</code> and <code>highTomorrow</code> the values of <code>today</code> and <code>tomorrow</code> from the <code>HIGH_TEMPERATURES</code> object.</p>
</section></div><hr/></div>