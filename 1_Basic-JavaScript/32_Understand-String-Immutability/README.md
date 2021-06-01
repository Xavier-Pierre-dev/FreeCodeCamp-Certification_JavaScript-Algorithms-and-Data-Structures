<div class="challenge-instructions basic-javascript"><div><section id="description">
<p>In JavaScript, <code>String</code> values are <dfn>immutable</dfn>, which means that they cannot be altered once created.</p>
<p>For example, the following code:</p>
<pre class="language-js"><code class="language-js"><span class="token keyword">var</span> myStr <span class="token operator">=</span> <span class="token string">"Bob"</span><span class="token punctuation">;</span>
myStr<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">"J"</span><span class="token punctuation">;</span>
</code></pre>
<p>cannot change the value of <code>myStr</code> to <code>Job</code>, because the contents of <code>myStr</code> cannot be altered. Note that this does <em>not</em> mean that <code>myStr</code> cannot be changed, just that the individual characters of a <dfn>string literal</dfn> cannot be changed. The only way to change <code>myStr</code> would be to assign it with a new string, like this:</p>
<pre class="language-js"><code class="language-js"><span class="token keyword">var</span> myStr <span class="token operator">=</span> <span class="token string">"Bob"</span><span class="token punctuation">;</span>
myStr <span class="token operator">=</span> <span class="token string">"Job"</span><span class="token punctuation">;</span>
</code></pre>
</section></div><hr/><div><section id="instructions">
<p>Correct the assignment to <code>myStr</code> so it contains the string value of <code>Hello World</code> using the approach shown in the example above.</p>
</section></div><hr/></div>