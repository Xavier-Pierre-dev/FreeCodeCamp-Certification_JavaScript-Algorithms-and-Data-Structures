<div class="challenge-instructions regular-expressions"><div><section id="description">
<p>Sometimes we want to check for groups of characters using a Regular Expression and to achieve that we use parentheses <code>()</code>.</p>
<p>If you want to find either <code>Penguin</code> or <code>Pumpkin</code> in a string, you can use the following Regular Expression: <code>/P(engu|umpk)in/g</code></p>
<p>Then check whether the desired string groups are in the test string by using the <code>test()</code> method.</p>
<pre class="language-js"><code class="language-js"><span class="token keyword">let</span> testStr <span class="token operator">=</span> <span class="token string">"Pumpkin"</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> testRegex <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">P(engu|umpk)in</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">;</span>
testRegex<span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>testStr<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<p>The <code>test</code> method here would return <code>true</code>.</p>
</section></div><hr/><div><section id="instructions">
<p>Fix the regex so that it checks for the names of <code>Franklin Roosevelt</code> or <code>Eleanor Roosevelt</code> in a case sensitive manner and it should make concessions for middle names.</p>
<p>Then fix the code so that the regex that you have created is checked against <code>myString</code> and either <code>true</code> or <code>false</code> is returned depending on whether the regex matches.</p>
</section></div><hr/></div>