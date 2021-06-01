<div class="challenge-instructions es6"><div><section id="description">
<p><dfn>Destructuring assignment</dfn> is special syntax introduced in ES6, for neatly assigning values taken directly from an object.</p>
<p>Consider the following ES5 code:</p>
<pre class="language-js"><code class="language-js"><span class="token keyword">const</span> user <span class="token operator">=</span> <span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token string">'John Doe'</span><span class="token punctuation">,</span> age<span class="token operator">:</span> <span class="token number">34</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> name <span class="token operator">=</span> user<span class="token punctuation">.</span>name<span class="token punctuation">;</span>
<span class="token keyword">const</span> age <span class="token operator">=</span> user<span class="token punctuation">.</span>age<span class="token punctuation">;</span>
</code></pre>
<p><code>name</code> would have a value of the string <code>John Doe</code>, and <code>age</code> would have the number <code>34</code>.</p>
<p>Here's an equivalent assignment statement using the ES6 destructuring syntax:</p>
<pre class="language-js"><code class="language-js"><span class="token keyword">const</span> <span class="token punctuation">{</span> name<span class="token punctuation">,</span> age <span class="token punctuation">}</span> <span class="token operator">=</span> user<span class="token punctuation">;</span>
</code></pre>
<p>Again, <code>name</code> would have a value of the string <code>John Doe</code>, and <code>age</code> would have the number <code>34</code>.</p>
<p>Here, the <code>name</code> and <code>age</code> variables will be created and assigned the values of their respective values from the <code>user</code> object. You can see how much cleaner this is.</p>
<p>You can extract as many or few values from the object as you want.</p>
</section></div><hr/><div><section id="instructions">
<p>Replace the two assignments with an equivalent destructuring assignment. It should still assign the variables <code>today</code> and <code>tomorrow</code> the values of <code>today</code> and <code>tomorrow</code> from the <code>HIGH_TEMPERATURES</code> object.</p>
</section></div><hr/></div>