<div class="challenge-instructions regular-expressions"><div><section id="description">
<p>Some patterns you search for will occur multiple times in a string. It is wasteful to manually repeat that regex. There is a better way to specify when you have multiple repeat substrings in your string.</p>
<p>You can search for repeat substrings using <dfn>capture groups</dfn>. Parentheses, <code>(</code> and <code>)</code>, are used to find repeat substrings. You put the regex of the pattern that will repeat in between the parentheses.</p>
<p>To specify where that repeat string will appear, you use a backslash (<code>\</code>) and then a number. This number starts at 1 and increases with each additional capture group you use. An example would be <code>\1</code> to match the first group.</p>
<p>The example below matches any word that occurs twice separated by a space:</p>
<pre class="language-js"><code class="language-js"><span class="token keyword">let</span> repeatStr <span class="token operator">=</span> <span class="token string">"regex regex"</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> repeatRegex <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">(\w+)\s\1</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">;</span>
repeatRegex<span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>repeatStr<span class="token punctuation">)</span><span class="token punctuation">;</span>
repeatStr<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span>repeatRegex<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<p>The <code>test</code> call would return <code>true</code>, and the <code>match</code> call would return <code>["regex regex", "regex"]</code>.</p>
<p>Using the <code>.match()</code> method on a string will return an array with the string it matches, along with its capture group.</p>
</section></div><hr/><div><section id="instructions">
<p>Use capture groups in <code>reRegex</code> to match a string that consists of only the same number repeated exactly three times separated by single spaces.</p>
</section></div><hr/></div>