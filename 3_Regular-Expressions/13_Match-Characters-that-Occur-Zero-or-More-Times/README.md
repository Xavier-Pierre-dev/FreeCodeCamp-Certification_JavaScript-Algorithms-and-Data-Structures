<div class="challenge-instructions regular-expressions"><div><section id="description">
<p>The last challenge used the plus <code>+</code> sign to look for characters that occur one or more times. There's also an option that matches characters that occur zero or more times.</p>
<p>The character to do this is the asterisk or star: <code>*</code>.</p>
<pre class="language-js"><code class="language-js"><span class="token keyword">let</span> soccerWord <span class="token operator">=</span> <span class="token string">"gooooooooal!"</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> gPhrase <span class="token operator">=</span> <span class="token string">"gut feeling"</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> oPhrase <span class="token operator">=</span> <span class="token string">"over the moon"</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> goRegex <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">go*</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">;</span>
soccerWord<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span>goRegex<span class="token punctuation">)</span><span class="token punctuation">;</span>
gPhrase<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span>goRegex<span class="token punctuation">)</span><span class="token punctuation">;</span>
oPhrase<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span>goRegex<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<p>In order, the three <code>match</code> calls would return the values <code>["goooooooo"]</code>, <code>["g"]</code>, and <code>null</code>.</p>
</section></div><hr/><div><section id="instructions">
<p>For this challenge, <code>chewieQuote</code> has been initialized as the string <code>Aaaaaaaaaaaaaaaarrrgh!</code> behind the scenes. Create a regex <code>chewieRegex</code> that uses the <code>*</code> character to match an uppercase <code>A</code> character immediately followed by zero or more lowercase <code>a</code> characters in <code>chewieQuote</code>. Your regex does not need flags or character classes, and it should not match any of the other quotes.</p>
</section></div><hr/></div>