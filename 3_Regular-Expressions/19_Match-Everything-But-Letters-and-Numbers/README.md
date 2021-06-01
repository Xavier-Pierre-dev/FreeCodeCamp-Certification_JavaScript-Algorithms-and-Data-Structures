<div class="challenge-instructions regular-expressions"><div><section id="description">
<p>You've learned that you can use a shortcut to match alphanumerics <code>[A-Za-z0-9_]</code> using <code>\w</code>. A natural pattern you might want to search for is the opposite of alphanumerics.</p>
<p>You can search for the opposite of the <code>\w</code> with <code>\W</code>. Note, the opposite pattern uses a capital letter. This shortcut is the same as <code>[^A-Za-z0-9_]</code>.</p>
<pre class="language-js"><code class="language-js"><span class="token keyword">let</span> shortHand <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\W</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">;</span>
<span class="token keyword">let</span> numbers <span class="token operator">=</span> <span class="token string">"42%"</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> sentence <span class="token operator">=</span> <span class="token string">"Coding!"</span><span class="token punctuation">;</span>
numbers<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span>shortHand<span class="token punctuation">)</span><span class="token punctuation">;</span>
sentence<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span>shortHand<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<p>The first <code>match</code> call would return the value <code>["%"]</code> and the second would return <code>["!"]</code>.</p>
</section></div><hr/><div><section id="instructions">
<p>Use the shorthand character class <code>\W</code> to count the number of non-alphanumeric characters in various quotes and strings.</p>
</section></div><hr/></div>