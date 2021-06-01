<div class="challenge-instructions regular-expressions"><div><section id="description">
<p><dfn>Lookaheads</dfn> are patterns that tell JavaScript to look-ahead in your string to check for patterns further along. This can be useful when you want to search for multiple patterns over the same string.</p>
<p>There are two kinds of lookaheads: <dfn>positive lookahead</dfn> and <dfn>negative lookahead</dfn>.</p>
<p>A positive lookahead will look to make sure the element in the search pattern is there, but won't actually match it. A positive lookahead is used as <code>(?=...)</code> where the <code>...</code> is the required part that is not matched.</p>
<p>On the other hand, a negative lookahead will look to make sure the element in the search pattern is not there. A negative lookahead is used as <code>(?!...)</code> where the <code>...</code> is the pattern that you do not want to be there. The rest of the pattern is returned if the negative lookahead part is not present.</p>
<p>Lookaheads are a bit confusing but some examples will help.</p>
<pre class="language-js"><code class="language-js"><span class="token keyword">let</span> quit <span class="token operator">=</span> <span class="token string">"qu"</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> noquit <span class="token operator">=</span> <span class="token string">"qt"</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> quRegex<span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">q(?=u)</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">;</span>
<span class="token keyword">let</span> qRegex <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">q(?!u)</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">;</span>
quit<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span>quRegex<span class="token punctuation">)</span><span class="token punctuation">;</span>
noquit<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span>qRegex<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<p>Both of these <code>match</code> calls would return <code>["q"]</code>.</p>
<p>A more practical use of lookaheads is to check two or more patterns in one string. Here is a (naively) simple password checker that looks for between 3 and 6 characters and at least one number:</p>
<pre class="language-js"><code class="language-js"><span class="token keyword">let</span> password <span class="token operator">=</span> <span class="token string">"abc123"</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> checkPass <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">(?=\w{3,6})(?=\D*\d)</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">;</span>
checkPass<span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>password<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
</section></div><hr/><div><section id="instructions">
<p>Use lookaheads in the <code>pwRegex</code> to match passwords that are greater than 5 characters long, and have two consecutive digits.</p>
</section></div><hr/></div>