<div class="challenge-instructions regular-expressions"><div><section id="description">
<p>You saw how you can use <dfn>character sets</dfn> to specify a group of characters to match, but that's a lot of typing when you need to match a large range of characters (for example, every letter in the alphabet). Fortunately, there is a built-in feature that makes this short and simple.</p>
<p>Inside a character set, you can define a range of characters to match using a hyphen character: <code>-</code>.</p>
<p>For example, to match lowercase letters <code>a</code> through <code>e</code> you would use <code>[a-e]</code>.</p>
<pre class="language-js"><code class="language-js"><span class="token keyword">let</span> catStr <span class="token operator">=</span> <span class="token string">"cat"</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> batStr <span class="token operator">=</span> <span class="token string">"bat"</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> matStr <span class="token operator">=</span> <span class="token string">"mat"</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> bgRegex <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">[a-e]at</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">;</span>
catStr<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span>bgRegex<span class="token punctuation">)</span><span class="token punctuation">;</span>
batStr<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span>bgRegex<span class="token punctuation">)</span><span class="token punctuation">;</span>
matStr<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span>bgRegex<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<p>In order, the three <code>match</code> calls would return the values <code>["cat"]</code>, <code>["bat"]</code>, and <code>null</code>.</p>
</section></div><hr/><div><section id="instructions">
<p>Match all the letters in the string <code>quoteSample</code>.</p>
<p><strong>Note</strong>: Be sure to match both uppercase and lowercase letters.</p>
</section></div><hr/></div>