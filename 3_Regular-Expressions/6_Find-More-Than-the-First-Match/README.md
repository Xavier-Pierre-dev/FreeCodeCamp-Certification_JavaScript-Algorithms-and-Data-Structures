<div class="challenge-instructions regular-expressions"><div><section id="description">
<p>So far, you have only been able to extract or search a pattern once.</p>
<pre class="language-js"><code class="language-js"><span class="token keyword">let</span> testStr <span class="token operator">=</span> <span class="token string">"Repeat, Repeat, Repeat"</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> ourRegex <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">Repeat</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">;</span>
testStr<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span>ourRegex<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<p>Here <code>match</code> would return <code>["Repeat"]</code>.</p>
<p>To search or extract a pattern more than once, you can use the <code>g</code> flag.</p>
<pre class="language-js"><code class="language-js"><span class="token keyword">let</span> repeatRegex <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">Repeat</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">;</span>
testStr<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span>repeatRegex<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<p>And here <code>match</code> returns the value <code>["Repeat", "Repeat", "Repeat"]</code></p>
</section></div><hr/><div><section id="instructions">
<p>Using the regex <code>starRegex</code>, find and extract both <code>Twinkle</code> words from the string <code>twinkleStar</code>.</p>
<p><strong>Note</strong><br/>
You can have multiple flags on your regex like <code>/search/gi</code></p>
</section></div><hr/></div>