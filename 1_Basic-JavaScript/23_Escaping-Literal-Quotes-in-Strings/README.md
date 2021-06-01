<div class="challenge-instructions basic-javascript"><div><section id="description">
<p>When you are defining a string you must start and end with a single or double quote. What happens when you need a literal quote: <code>"</code> or <code>'</code> inside of your string?</p>
<p>In JavaScript, you can <dfn>escape</dfn> a quote from considering it as an end of string quote by placing a <dfn>backslash</dfn> (<code>\</code>) in front of the quote.</p>
<pre class="language-js"><code class="language-js"><span class="token keyword">var</span> sampleStr <span class="token operator">=</span> <span class="token string">"Alan said, \"Peter is learning JavaScript\"."</span><span class="token punctuation">;</span>
</code></pre>
<p>This signals to JavaScript that the following quote is not the end of the string, but should instead appear inside the string. So if you were to print this to the console, you would get:</p>
<pre class="language-js"><code class="language-js">Alan said<span class="token punctuation">,</span> <span class="token string">"Peter is learning JavaScript"</span><span class="token punctuation">.</span>
</code></pre>
</section></div><hr/><div><section id="instructions">
<p>Use <dfn>backslashes</dfn> to assign a string to the <code>myStr</code> variable so that if you were to print it to the console, you would see:</p>
<pre class="language-js"><code class="language-js"><span class="token constant">I</span> am a <span class="token string">"double quoted"</span> string inside <span class="token string">"double quotes"</span><span class="token punctuation">.</span>
</code></pre>
</section></div><hr/></div>