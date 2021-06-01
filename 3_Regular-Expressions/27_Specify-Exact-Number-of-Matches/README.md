<div class="challenge-instructions regular-expressions"><div><section id="description">
<p>You can specify the lower and upper number of patterns with quantity specifiers using curly brackets. Sometimes you only want a specific number of matches.</p>
<p>To specify a certain number of patterns, just have that one number between the curly brackets.</p>
<p>For example, to match only the word <code>hah</code> with the letter <code>a</code> <code>3</code> times, your regex would be <code>/ha{3}h/</code>.</p>
<pre class="language-js"><code class="language-js"><span class="token keyword">let</span> <span class="token constant">A4</span> <span class="token operator">=</span> <span class="token string">"haaaah"</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> <span class="token constant">A3</span> <span class="token operator">=</span> <span class="token string">"haaah"</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> <span class="token constant">A100</span> <span class="token operator">=</span> <span class="token string">"h"</span> <span class="token operator">+</span> <span class="token string">"a"</span><span class="token punctuation">.</span><span class="token function">repeat</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">"h"</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> multipleHA <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">ha{3}h</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">;</span>
multipleHA<span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span><span class="token constant">A4</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
multipleHA<span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span><span class="token constant">A3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
multipleHA<span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span><span class="token constant">A100</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<p>In order, the three <code>test</code> calls would return <code>false</code>, <code>true</code>, and <code>false</code>.</p>
</section></div><hr/><div><section id="instructions">
<p>Change the regex <code>timRegex</code> to match the word <code>Timber</code> only when it has four letter <code>m</code>'s.</p>
</section></div><hr/></div>