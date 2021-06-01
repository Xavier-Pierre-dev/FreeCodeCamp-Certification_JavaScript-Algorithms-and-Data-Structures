<div class="challenge-instructions basic-javascript"><div><section id="description">
<p>The <code>parseInt()</code> function parses a string and returns an integer. It takes a second argument for the radix, which specifies the base of the number in the string. The radix can be an integer between 2 and 36.</p>
<p>The function call looks like:</p>
<pre class="language-js"><code class="language-js"><span class="token function">parseInt</span><span class="token punctuation">(</span>string<span class="token punctuation">,</span> radix<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<p>And here's an example:</p>
<pre class="language-js"><code class="language-js"><span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token function">parseInt</span><span class="token punctuation">(</span><span class="token string">"11"</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<p>The radix variable says that <code>11</code> is in the binary system, or base 2. This example converts the string <code>11</code> to an integer <code>3</code>.</p>
</section></div><hr/><div><section id="instructions">
<p>Use <code>parseInt()</code> in the <code>convertToInteger</code> function so it converts a binary number to an integer and returns it.</p>
</section></div><hr/></div>