<div class="challenge-instructions regular-expressions"><div><section id="description">
<p>Prior challenges showed that regular expressions can be used to look for a number of matches. They are also used to search for patterns in specific positions in strings.</p>
<p>In an earlier challenge, you used the caret character (<code>^</code>) inside a character set to create a negated character set in the form <code>[^thingsThatWillNotBeMatched]</code>. Outside of a character set, the caret is used to search for patterns at the beginning of strings.</p>
<pre class="language-js"><code class="language-js"><span class="token keyword">let</span> firstString <span class="token operator">=</span> <span class="token string">"Ricky is first and can be found."</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> firstRegex <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^Ricky</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">;</span>
firstRegex<span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>firstString<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> notFirst <span class="token operator">=</span> <span class="token string">"You can't find Ricky now."</span><span class="token punctuation">;</span>
firstRegex<span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>notFirst<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<p>The first <code>test</code> call would return <code>true</code>, while the second would return <code>false</code>.</p>
</section></div><hr/><div><section id="instructions">
<p>Use the caret character in a regex to find <code>Cal</code> only in the beginning of the string <code>rickyAndCal</code>.</p>
</section></div><hr/></div>