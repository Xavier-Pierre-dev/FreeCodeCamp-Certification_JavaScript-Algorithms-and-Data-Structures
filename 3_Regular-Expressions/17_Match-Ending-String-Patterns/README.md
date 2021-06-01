<div class="challenge-instructions regular-expressions"><div><section id="description">
<p>In the last challenge, you learned to use the caret character to search for patterns at the beginning of strings. There is also a way to search for patterns at the end of strings.</p>
<p>You can search the end of strings using the dollar sign character <code>$</code> at the end of the regex.</p>
<pre class="language-js"><code class="language-js"><span class="token keyword">let</span> theEnding <span class="token operator">=</span> <span class="token string">"This is a never ending story"</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> storyRegex <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">story$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">;</span>
storyRegex<span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>theEnding<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> noEnding <span class="token operator">=</span> <span class="token string">"Sometimes a story will have to end"</span><span class="token punctuation">;</span>
storyRegex<span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>noEnding<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<p>The first <code>test</code> call would return <code>true</code>, while the second would return <code>false</code>.</p>
</section></div><hr/><div><section id="instructions">
<p>Use the anchor character (<code>$</code>) to match the string <code>caboose</code> at the end of the string <code>caboose</code>.</p>
</section></div><hr/></div>