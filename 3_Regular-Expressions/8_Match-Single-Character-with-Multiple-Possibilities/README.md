<div class="challenge-instructions regular-expressions"><div><section id="description">
<p>You learned how to match literal patterns (<code>/literal/</code>) and wildcard character (<code>/./</code>). Those are the extremes of regular expressions, where one finds exact matches and the other matches everything. There are options that are a balance between the two extremes.</p>
<p>You can search for a literal pattern with some flexibility with <dfn>character classes</dfn>. Character classes allow you to define a group of characters you wish to match by placing them inside square (<code>[</code> and <code>]</code>) brackets.</p>
<p>For example, you want to match <code>bag</code>, <code>big</code>, and <code>bug</code> but not <code>bog</code>. You can create the regex <code>/b[aiu]g/</code> to do this. The <code>[aiu]</code> is the character class that will only match the characters <code>a</code>, <code>i</code>, or <code>u</code>.</p>
<pre class="language-js"><code class="language-js"><span class="token keyword">let</span> bigStr <span class="token operator">=</span> <span class="token string">"big"</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> bagStr <span class="token operator">=</span> <span class="token string">"bag"</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> bugStr <span class="token operator">=</span> <span class="token string">"bug"</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> bogStr <span class="token operator">=</span> <span class="token string">"bog"</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> bgRegex <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">b[aiu]g</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">;</span>
bigStr<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span>bgRegex<span class="token punctuation">)</span><span class="token punctuation">;</span>
bagStr<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span>bgRegex<span class="token punctuation">)</span><span class="token punctuation">;</span>
bugStr<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span>bgRegex<span class="token punctuation">)</span><span class="token punctuation">;</span>
bogStr<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span>bgRegex<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<p>In order, the four <code>match</code> calls would return the values <code>["big"]</code>, <code>["bag"]</code>, <code>["bug"]</code>, and <code>null</code>.</p>
</section></div><hr/><div><section id="instructions">
<p>Use a character class with vowels (<code>a</code>, <code>e</code>, <code>i</code>, <code>o</code>, <code>u</code>) in your regex <code>vowelRegex</code> to find all the vowels in the string <code>quoteSample</code>.</p>
<p><strong>Note:</strong> Be sure to match both upper- and lowercase vowels.</p>
</section></div><hr/></div>