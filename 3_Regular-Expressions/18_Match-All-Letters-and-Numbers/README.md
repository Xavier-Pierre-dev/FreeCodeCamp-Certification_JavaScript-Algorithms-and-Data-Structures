<div class="challenge-instructions regular-expressions"><div><section id="description">
<p>Using character classes, you were able to search for all letters of the alphabet with <code>[a-z]</code>. This kind of character class is common enough that there is a shortcut for it, although it includes a few extra characters as well.</p>
<p>The closest character class in JavaScript to match the alphabet is <code>\w</code>. This shortcut is equal to <code>[A-Za-z0-9_]</code>. This character class matches upper and lowercase letters plus numbers. Note, this character class also includes the underscore character (<code>_</code>).</p>
<pre class="language-js"><code class="language-js"><span class="token keyword">let</span> longHand <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">[A-Za-z0-9_]+</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">;</span>
<span class="token keyword">let</span> shortHand <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\w+</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">;</span>
<span class="token keyword">let</span> numbers <span class="token operator">=</span> <span class="token string">"42"</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> varNames <span class="token operator">=</span> <span class="token string">"important_var"</span><span class="token punctuation">;</span>
longHand<span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>numbers<span class="token punctuation">)</span><span class="token punctuation">;</span>
shortHand<span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>numbers<span class="token punctuation">)</span><span class="token punctuation">;</span>
longHand<span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>varNames<span class="token punctuation">)</span><span class="token punctuation">;</span>
shortHand<span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>varNames<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<p>All four of these <code>test</code> calls would return <code>true</code>.</p>
<p>These shortcut character classes are also known as <dfn>shorthand character classes</dfn>.</p>
</section></div><hr/><div><section id="instructions">
<p>Use the shorthand character class <code>\w</code> to count the number of alphanumeric characters in various quotes and strings.</p>
</section></div><hr/></div>