<div class="challenge-instructions debugging"><div><section id="description">
<p>JavaScript allows the use of both single (<code>'</code>) and double (<code>"</code>) quotes to declare a string. Deciding which one to use generally comes down to personal preference, with some exceptions.</p>
<p>Having two choices is great when a string has contractions or another piece of text that's in quotes. Just be careful that you don't close the string too early, which causes a syntax error.</p>
<p>Here are some examples of mixing quotes:</p>
<pre class="language-js"><code class="language-js"><span class="token keyword">const</span> grouchoContraction <span class="token operator">=</span> <span class="token string">"I've had a perfectly wonderful evening, but this wasn't it."</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> quoteInString <span class="token operator">=</span> <span class="token string">"Groucho Marx once said 'Quote me as saying I was mis-quoted.'"</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> uhOhGroucho <span class="token operator">=</span> <span class="token string">'I'</span>ve had a perfectly wonderful evening<span class="token punctuation">,</span> but <span class="token keyword">this</span> wasn<span class="token string">'t it.'</span><span class="token punctuation">;</span>
</code></pre>
<p>The first two are correct, but the third is incorrect.</p>
<p>Of course, it is okay to use only one style of quotes. You can escape the quotes inside the string by using the backslash (<code>\</code>) escape character:</p>
<pre class="language-js"><code class="language-js"><span class="token keyword">const</span> allSameQuotes <span class="token operator">=</span> <span class="token string">'I\'ve had a perfectly wonderful evening, but this wasn\'t it.'</span><span class="token punctuation">;</span>
</code></pre>
</section></div><hr/><div><section id="instructions">
<p>Fix the string so it either uses different quotes for the <code>href</code> value, or escape the existing ones. Keep the double quote marks around the entire string.</p>
</section></div><hr/></div>