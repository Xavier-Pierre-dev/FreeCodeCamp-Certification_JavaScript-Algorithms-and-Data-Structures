<div class="challenge-instructions regular-expressions"><div><section id="description">
<p>Using the hyphen (<code>-</code>) to match a range of characters is not limited to letters. It also works to match a range of numbers.</p>
<p>For example, <code>/[0-5]/</code> matches any number between <code>0</code> and <code>5</code>, including the <code>0</code> and <code>5</code>.</p>
<p>Also, it is possible to combine a range of letters and numbers in a single character set.</p>
<pre class="language-js"><code class="language-js"><span class="token keyword">let</span> jennyStr <span class="token operator">=</span> <span class="token string">"Jenny8675309"</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> myRegex <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">[a-z0-9]</span><span class="token regex-delimiter">/</span><span class="token regex-flags">ig</span></span><span class="token punctuation">;</span>
jennyStr<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span>myRegex<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
</section></div><hr/><div><section id="instructions">
<p>Create a single regex that matches a range of letters between <code>h</code> and <code>s</code>, and a range of numbers between <code>2</code> and <code>6</code>. Remember to include the appropriate flags in the regex.</p>
</section></div><hr/></div>