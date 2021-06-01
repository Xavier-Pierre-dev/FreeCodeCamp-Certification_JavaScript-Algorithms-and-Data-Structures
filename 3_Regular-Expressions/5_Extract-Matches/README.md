<div class="challenge-instructions regular-expressions"><div><section id="description">
<p>So far, you have only been checking if a pattern exists or not within a string. You can also extract the actual matches you found with the <code>.match()</code> method.</p>
<p>To use the <code>.match()</code> method, apply the method on a string and pass in the regex inside the parentheses.</p>
<p>Here's an example:</p>
<pre class="language-js"><code class="language-js"><span class="token string">"Hello, World!"</span><span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">Hello</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> ourStr <span class="token operator">=</span> <span class="token string">"Regular expressions"</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> ourRegex <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">expressions</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">;</span>
ourStr<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span>ourRegex<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<p>Here the first <code>match</code> would return <code>["Hello"]</code> and the second would return <code>["expressions"]</code>.</p>
<p>Note that the <code>.match</code> syntax is the "opposite" of the <code>.test</code> method you have been using thus far:</p>
<pre class="language-js"><code class="language-js"><span class="token string">'string'</span><span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">regex</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">regex</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span><span class="token string">'string'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
</section></div><hr/><div><section id="instructions">
<p>Apply the <code>.match()</code> method to extract the string <code>coding</code>.</p>
</section></div><hr/></div>