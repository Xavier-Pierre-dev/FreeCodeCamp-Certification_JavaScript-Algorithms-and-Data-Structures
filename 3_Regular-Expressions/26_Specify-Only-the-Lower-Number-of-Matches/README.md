<div class="challenge-instructions regular-expressions"><div><section id="description">
<p>You can specify the lower and upper number of patterns with quantity specifiers using curly brackets. Sometimes you only want to specify the lower number of patterns with no upper limit.</p>
<p>To only specify the lower number of patterns, keep the first number followed by a comma.</p>
<p>For example, to match only the string <code>hah</code> with the letter <code>a</code> appearing at least <code>3</code> times, your regex would be <code>/ha{3,}h/</code>.</p>
<pre class="language-js"><code class="language-js"><span class="token keyword">let</span> <span class="token constant">A4</span> <span class="token operator">=</span> <span class="token string">"haaaah"</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> <span class="token constant">A2</span> <span class="token operator">=</span> <span class="token string">"haah"</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> <span class="token constant">A100</span> <span class="token operator">=</span> <span class="token string">"h"</span> <span class="token operator">+</span> <span class="token string">"a"</span><span class="token punctuation">.</span><span class="token function">repeat</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">"h"</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> multipleA <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">ha{3,}h</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">;</span>
multipleA<span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span><span class="token constant">A4</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
multipleA<span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span><span class="token constant">A2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
multipleA<span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span><span class="token constant">A100</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<p>In order, the three <code>test</code> calls would return <code>true</code>, <code>false</code>, and <code>true</code>.</p>
</section></div><hr/><div><section id="instructions">
<p>Change the regex <code>haRegex</code> to match the word <code>Hazzah</code> only when it has four or more letter <code>z</code>'s.</p>
</section></div><hr/></div>