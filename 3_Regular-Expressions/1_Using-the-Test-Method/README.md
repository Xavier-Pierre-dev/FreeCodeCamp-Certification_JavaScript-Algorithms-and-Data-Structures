<div class="challenge-instructions regular-expressions"><div><section id="description">
<p>Regular expressions are used in programming languages to match parts of strings. You create patterns to help you do that matching.</p>
<p>If you want to find the word <code>the</code> in the string <code>The dog chased the cat</code>, you could use the following regular expression: <code>/the/</code>. Notice that quote marks are not required within the regular expression.</p>
<p>JavaScript has multiple ways to use regexes. One way to test a regex is using the <code>.test()</code> method. The <code>.test()</code> method takes the regex, applies it to a string (which is placed inside the parentheses), and returns <code>true</code> or <code>false</code> if your pattern finds something or not.</p>
<pre class="language-js"><code class="language-js"><span class="token keyword">let</span> testStr <span class="token operator">=</span> <span class="token string">"freeCodeCamp"</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> testRegex <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">Code</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">;</span>
testRegex<span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>testStr<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<p>The <code>test</code> method here returns <code>true</code>.</p>
</section></div><hr/><div><section id="instructions">
<p>Apply the regex <code>myRegex</code> on the string <code>myString</code> using the <code>.test()</code> method.</p>
</section></div><hr/></div>