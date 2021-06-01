<div class="challenge-instructions regular-expressions"><div><section id="description">
<p>Sometimes the patterns you want to search for may have parts of it that may or may not exist. However, it may be important to check for them nonetheless.</p>
<p>You can specify the possible existence of an element with a question mark, <code>?</code>. This checks for zero or one of the preceding element. You can think of this symbol as saying the previous element is optional.</p>
<p>For example, there are slight differences in American and British English and you can use the question mark to match both spellings.</p>
<pre class="language-js"><code class="language-js"><span class="token keyword">let</span> american <span class="token operator">=</span> <span class="token string">"color"</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> british <span class="token operator">=</span> <span class="token string">"colour"</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> rainbowRegex<span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">colou?r</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">;</span>
rainbowRegex<span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>american<span class="token punctuation">)</span><span class="token punctuation">;</span>
rainbowRegex<span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>british<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<p>Both uses of the <code>test</code> method would return <code>true</code>.</p>
</section></div><hr/><div><section id="instructions">
<p>Change the regex <code>favRegex</code> to match both the American English (<code>favorite</code>) and the British English (<code>favourite</code>) version of the word.</p>
</section></div><hr/></div>