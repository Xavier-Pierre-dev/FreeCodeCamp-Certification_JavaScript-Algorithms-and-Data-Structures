<div class="challenge-instructions functional-programming"><div><section id="description">
<p>The <code>split</code> method splits a string into an array of strings. It takes an argument for the delimiter, which can be a character to use to break up the string or a regular expression. For example, if the delimiter is a space, you get an array of words, and if the delimiter is an empty string, you get an array of each character in the string.</p>
<p>Here are two examples that split one string by spaces, then another by digits using a regular expression:</p>
<pre class="language-js"><code class="language-js"><span class="token keyword">var</span> str <span class="token operator">=</span> <span class="token string">"Hello World"</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> bySpace <span class="token operator">=</span> str<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">" "</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">var</span> otherString <span class="token operator">=</span> <span class="token string">"How9are7you2today"</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> byDigits <span class="token operator">=</span> otherString<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\d</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<p><code>bySpace</code> would have the value <code>["Hello", "World"]</code> and <code>byDigits</code> would have the value <code>["How", "are", "you", "today"]</code>.</p>
<p>Since strings are immutable, the <code>split</code> method makes it easier to work with them.</p>
</section></div><hr/><div><section id="instructions">
<p>Use the <code>split</code> method inside the <code>splitify</code> function to split <code>str</code> into an array of words. The function should return the array. Note that the words are not always separated by spaces, and the array should not contain punctuation.</p>
</section></div><hr/></div>