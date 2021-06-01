<div class="challenge-instructions basic-javascript"><div><section id="description">
<p><dfn>String</dfn> values in JavaScript may be written with single or double quotes, as long as you start and end with the same type of quote. Unlike some other programming languages, single and double quotes work the same in JavaScript.</p>
<pre class="language-js"><code class="language-js">doubleQuoteStr <span class="token operator">=</span> <span class="token string">"This is a string"</span><span class="token punctuation">;</span> 
singleQuoteStr <span class="token operator">=</span> <span class="token string">'This is also a string'</span><span class="token punctuation">;</span>
</code></pre>
<p>The reason why you might want to use one type of quote over the other is if you want to use both in a string. This might happen if you want to save a conversation in a string and have the conversation in quotes. Another use for it would be saving an <code>&lt;a&gt;</code> tag with various attributes in quotes, all within a string.</p>
<pre class="language-js"><code class="language-js">conversation <span class="token operator">=</span> <span class="token string">'Finn exclaims to Jake, "Algebraic!"'</span><span class="token punctuation">;</span>
</code></pre>
<p>However, this becomes a problem if you need to use the outermost quotes within it. Remember, a string has the same kind of quote at the beginning and end. But if you have that same quote somewhere in the middle, the string will stop early and throw an error.</p>
<pre class="language-js"><code class="language-js">goodStr <span class="token operator">=</span> <span class="token string">'Jake asks Finn, "Hey, let\'s go on an adventure?"'</span><span class="token punctuation">;</span> 
badStr <span class="token operator">=</span> <span class="token string">'Finn responds, "Let'</span>s go<span class="token operator">!</span>"'<span class="token punctuation">;</span>
</code></pre>
<p>Here <code>badStr</code> will throw an error.</p>
<p>In the <dfn>goodStr</dfn> above, you can use both quotes safely by using the backslash <code>\</code> as an escape character.</p>
<p><strong>Note:</strong> The backslash <code>\</code> should not be confused with the forward slash <code>/</code>. They do not do the same thing.</p>
</section></div><hr/><div><section id="instructions">
<p>Change the provided string to a string with single quotes at the beginning and end and no escape characters.</p>
<p>Right now, the <code>&lt;a&gt;</code> tag in the string uses double quotes everywhere. You will need to change the outer quotes to single quotes so you can remove the escape characters.</p>
</section></div><hr/></div>