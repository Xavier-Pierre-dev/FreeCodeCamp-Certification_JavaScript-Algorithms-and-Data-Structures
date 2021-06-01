<div class="challenge-instructions regular-expressions"><div><section id="description">
<p>Recall that you use the plus sign <code>+</code> to look for one or more characters and the asterisk <code>*</code> to look for zero or more characters. These are convenient but sometimes you want to match a certain range of patterns.</p>
<p>You can specify the lower and upper number of patterns with <dfn>quantity specifiers</dfn>. Quantity specifiers are used with curly brackets (<code>{</code> and <code>}</code>). You put two numbers between the curly brackets - for the lower and upper number of patterns.</p>
<p>For example, to match only the letter <code>a</code> appearing between <code>3</code> and <code>5</code> times in the string <code>ah</code>, your regex would be <code>/a{3,5}h/</code>.</p>
<pre class="language-js"><code class="language-js"><span class="token keyword">let</span> <span class="token constant">A4</span> <span class="token operator">=</span> <span class="token string">"aaaah"</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> <span class="token constant">A2</span> <span class="token operator">=</span> <span class="token string">"aah"</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> multipleA <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">a{3,5}h</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">;</span>
multipleA<span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span><span class="token constant">A4</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
multipleA<span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span><span class="token constant">A2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<p>The first <code>test</code> call would return <code>true</code>, while the second would return <code>false</code>.</p>
</section></div><hr/><div><section id="instructions">
<p>Change the regex <code>ohRegex</code> to match the entire phrase <code>Oh no</code> only when it has <code>3</code> to <code>6</code> letter <code>h</code>'s.</p>
</section></div><hr/></div>