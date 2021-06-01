<div class="challenge-instructions regular-expressions"><div><section id="description">
<p>In the last challenge, you searched for the word <code>Hello</code> using the regular expression <code>/Hello/</code>. That regex searched for a literal match of the string <code>Hello</code>. Here's another example searching for a literal match of the string <code>Kevin</code>:</p>
<pre class="language-js"><code class="language-js"><span class="token keyword">let</span> testStr <span class="token operator">=</span> <span class="token string">"Hello, my name is Kevin."</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> testRegex <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">Kevin</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">;</span>
testRegex<span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>testStr<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<p>This <code>test</code> call will return <code>true</code>.</p>
<p>Any other forms of <code>Kevin</code> will not match. For example, the regex <code>/Kevin/</code> will not match <code>kevin</code> or <code>KEVIN</code>.</p>
<pre class="language-js"><code class="language-js"><span class="token keyword">let</span> wrongRegex <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">kevin</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">;</span>
wrongRegex<span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>testStr<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<p>This <code>test</code> call will return <code>false</code>.</p>
<p>A future challenge will show how to match those other forms as well.</p>
</section></div><hr/><div><section id="instructions">
<p>Complete the regex <code>waldoRegex</code> to find <code>"Waldo"</code> in the string <code>waldoIsHiding</code> with a literal match.</p>
</section></div><hr/></div>