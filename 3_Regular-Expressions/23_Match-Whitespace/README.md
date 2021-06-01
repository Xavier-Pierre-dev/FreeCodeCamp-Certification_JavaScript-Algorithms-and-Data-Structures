<div class="challenge-instructions regular-expressions"><div><section id="description">
<p>The challenges so far have covered matching letters of the alphabet and numbers. You can also match the whitespace or spaces between letters.</p>
<p>You can search for whitespace using <code>\s</code>, which is a lowercase <code>s</code>. This pattern not only matches whitespace, but also carriage return, tab, form feed, and new line characters. You can think of it as similar to the character class <code>[ \r\t\f\n\v]</code>.</p>
<pre class="language-js"><code class="language-js"><span class="token keyword">let</span> whiteSpace <span class="token operator">=</span> <span class="token string">"Whitespace. Whitespace everywhere!"</span>
<span class="token keyword">let</span> spaceRegex <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\s</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">;</span>
whiteSpace<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span>spaceRegex<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<p>This <code>match</code> call would return <code>[" ", " "]</code>.</p>
</section></div><hr/><div><section id="instructions">
<p>Change the regex <code>countWhiteSpace</code> to look for multiple whitespace characters in a string.</p>
</section></div><hr/></div>