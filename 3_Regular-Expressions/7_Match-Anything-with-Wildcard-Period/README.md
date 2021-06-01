<div class="challenge-instructions regular-expressions"><div><section id="description">
<p>Sometimes you won't (or don't need to) know the exact characters in your patterns. Thinking of all words that match, say, a misspelling would take a long time. Luckily, you can save time using the wildcard character: <code>.</code></p>
<p>The wildcard character <code>.</code> will match any one character. The wildcard is also called <code>dot</code> and <code>period</code>. You can use the wildcard character just like any other character in the regex. For example, if you wanted to match <code>hug</code>, <code>huh</code>, <code>hut</code>, and <code>hum</code>, you can use the regex <code>/hu./</code> to match all four words.</p>
<pre class="language-js"><code class="language-js"><span class="token keyword">let</span> humStr <span class="token operator">=</span> <span class="token string">"I'll hum a song"</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> hugStr <span class="token operator">=</span> <span class="token string">"Bear hug"</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> huRegex <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">hu.</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">;</span>
huRegex<span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>humStr<span class="token punctuation">)</span><span class="token punctuation">;</span>
huRegex<span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>hugStr<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<p>Both of these <code>test</code> calls would return <code>true</code>.</p>
</section></div><hr/><div><section id="instructions">
<p>Complete the regex <code>unRegex</code> so that it matches the strings <code>run</code>, <code>sun</code>, <code>fun</code>, <code>pun</code>, <code>nun</code>, and <code>bun</code>. Your regex should use the wildcard character.</p>
</section></div><hr/></div>