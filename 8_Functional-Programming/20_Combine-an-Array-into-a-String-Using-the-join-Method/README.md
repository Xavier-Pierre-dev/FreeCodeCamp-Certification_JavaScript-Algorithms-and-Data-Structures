<div class="challenge-instructions functional-programming"><div><section id="description">
<p>The <code>join</code> method is used to join the elements of an array together to create a string. It takes an argument for the delimiter that is used to separate the array elements in the string.</p>
<p>Here's an example:</p>
<pre class="language-js"><code class="language-js"><span class="token keyword">var</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">"Hello"</span><span class="token punctuation">,</span> <span class="token string">"World"</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> str <span class="token operator">=</span> arr<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">" "</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<p><code>str</code> would have a value of the string <code>Hello World</code>.</p>
</section></div><hr/><div><section id="instructions">
<p>Use the <code>join</code> method (among others) inside the <code>sentensify</code> function to make a sentence from the words in the string <code>str</code>. The function should return a string. For example, <code>I-like-Star-Wars</code> would be converted to <code>I like Star Wars</code>. For this challenge, do not use the <code>replace</code> method.</p>
</section></div><hr/></div>