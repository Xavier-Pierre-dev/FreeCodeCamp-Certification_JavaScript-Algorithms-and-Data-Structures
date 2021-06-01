<div class="challenge-instructions regular-expressions"><div><section id="description">
<p>Searching is useful. However, you can make searching even more powerful when it also changes (or replaces) the text you match.</p>
<p>You can search and replace text in a string using <code>.replace()</code> on a string. The inputs for <code>.replace()</code> is first the regex pattern you want to search for. The second parameter is the string to replace the match or a function to do something.</p>
<pre class="language-js"><code class="language-js"><span class="token keyword">let</span> wrongText <span class="token operator">=</span> <span class="token string">"The sky is silver."</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> silverRegex <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">silver</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">;</span>
wrongText<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span>silverRegex<span class="token punctuation">,</span> <span class="token string">"blue"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<p>The <code>replace</code> call would return the string <code>The sky is blue.</code>.</p>
<p>You can also access capture groups in the replacement string with dollar signs (<code>$</code>).</p>
<pre class="language-js"><code class="language-js"><span class="token string">"Code Camp"</span><span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">(\w+)\s(\w+)</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span> <span class="token string">'$2 $1'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<p>The <code>replace</code> call would return the string <code>Camp Code</code>.</p>
</section></div><hr/><div><section id="instructions">
<p>Write a regex <code>fixRegex</code> using three capture groups that will search for each word in the string <code>one two three</code>. Then update the <code>replaceText</code> variable to replace <code>one two three</code> with the string <code>three two one</code> and assign the result to the <code>result</code> variable. Make sure you are utilizing capture groups in the replacement string using the dollar sign (<code>$</code>) syntax.</p>
</section></div><hr/></div>