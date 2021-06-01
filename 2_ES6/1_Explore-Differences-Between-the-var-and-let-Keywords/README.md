<div class="challenge-instructions es6"><div><section id="description">
<p>One of the biggest problems with declaring variables with the <code>var</code> keyword is that you can overwrite variable declarations without an error.</p>
<pre class="language-js"><code class="language-js"><span class="token keyword">var</span> camper <span class="token operator">=</span> <span class="token string">'James'</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> camper <span class="token operator">=</span> <span class="token string">'David'</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>camper<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<p>Here the console will display the string <code>David</code>.</p>
<p>As you can see in the code above, the <code>camper</code> variable is originally declared as <code>James</code> and then overridden to be <code>David</code>. In a small application, you might not run into this type of problem, but when your code becomes larger, you might accidentally overwrite a variable that you did not intend to overwrite. Because this behavior does not throw an error, searching and fixing bugs becomes more difficult.<br/>
A new keyword called <code>let</code> was introduced in ES6 to solve this potential issue with the <code>var</code> keyword. If you were to replace <code>var</code> with <code>let</code> in the variable declarations of the code above, the result would be an error.</p>
<pre class="language-js"><code class="language-js"><span class="token keyword">let</span> camper <span class="token operator">=</span> <span class="token string">'James'</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> camper <span class="token operator">=</span> <span class="token string">'David'</span><span class="token punctuation">;</span>
</code></pre>
<p>This error can be seen in the console of your browser. So unlike <code>var</code>, when using <code>let</code>, a variable with the same name can only be declared once. Note the <code>"use strict"</code>. This enables Strict Mode, which catches common coding mistakes and "unsafe" actions. For instance:</p>
<pre class="language-js"><code class="language-js"><span class="token string">"use strict"</span><span class="token punctuation">;</span>
x <span class="token operator">=</span> <span class="token number">3.14</span><span class="token punctuation">;</span>
</code></pre>
<p>This will display an error that <code>x is not defined</code>.</p>
</section></div><hr/><div><section id="instructions">
<p>Update the code so it only uses the <code>let</code> keyword.</p>
</section></div><hr/></div>