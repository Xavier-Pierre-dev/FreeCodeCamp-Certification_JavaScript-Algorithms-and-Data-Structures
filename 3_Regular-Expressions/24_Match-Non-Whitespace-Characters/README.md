<div class="challenge-instructions regular-expressions"><div><section id="description">
<p>You learned about searching for whitespace using <code>\s</code>, with a lowercase <code>s</code>. You can also search for everything except whitespace.</p>
<p>Search for non-whitespace using <code>\S</code>, which is an uppercase <code>s</code>. This pattern will not match whitespace, carriage return, tab, form feed, and new line characters. You can think of it being similar to the character class <code>[^ \r\t\f\n\v]</code>.</p>
<pre class="language-js"><code class="language-js"><span class="token keyword">let</span> whiteSpace <span class="token operator">=</span> <span class="token string">"Whitespace. Whitespace everywhere!"</span>
<span class="token keyword">let</span> nonSpaceRegex <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\S</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">;</span>
whiteSpace<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span>nonSpaceRegex<span class="token punctuation">)</span><span class="token punctuation">.</span>length<span class="token punctuation">;</span>
</code></pre>
<p>The value returned by the <code>.length</code> method would be <code>32</code>.</p>
</section></div><hr/><div><section id="instructions">
<p>Change the regex <code>countNonWhiteSpace</code> to look for multiple non-whitespace characters in a string.</p>
</section></div><hr/></div>