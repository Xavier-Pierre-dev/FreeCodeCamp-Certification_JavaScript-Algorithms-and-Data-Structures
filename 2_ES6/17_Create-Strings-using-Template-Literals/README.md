<div class="challenge-instructions es6"><div><section id="description">
<p>A new feature of ES6 is the <dfn>template literal</dfn>. This is a special type of string that makes creating complex strings easier.</p>
<p>Template literals allow you to create multi-line strings and to use string interpolation features to create strings.</p>
<p>Consider the code below:</p>
<pre class="language-js"><code class="language-js"><span class="token keyword">const</span> person <span class="token operator">=</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token string">"Zodiac Hasbro"</span><span class="token punctuation">,</span>
  age<span class="token operator">:</span> <span class="token number">56</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> greeting <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">Hello, my name is </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>person<span class="token punctuation">.</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">!
I am </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>person<span class="token punctuation">.</span>age<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> years old.</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>greeting<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<p>The console will display the strings <code>Hello, my name is Zodiac Hasbro!</code> and <code>I am 56 years old.</code>.</p>
<p>A lot of things happened there. Firstly, the example uses backticks (<code>`</code>), not quotes (<code>'</code> or <code>"</code>), to wrap the string. Secondly, notice that the string is multi-line, both in the code and the output. This saves inserting <code>\n</code> within strings. The <code>${variable}</code> syntax used above is a placeholder. Basically, you won't have to use concatenation with the <code>+</code> operator anymore. To add variables to strings, you just drop the variable in a template string and wrap it with <code>${</code> and <code>}</code>. Similarly, you can include other expressions in your string literal, for example <code>${a + b}</code>. This new way of creating strings gives you more flexibility to create robust strings.</p>
</section></div><hr/><div><section id="instructions">
<p>Use template literal syntax with backticks to create an array of list element (<code>li</code>) strings. Each list element's text should be one of the array elements from the <code>failure</code> property on the <code>result</code> object and have a <code>class</code> attribute with the value <code>text-warning</code>. The <code>makeList</code> function should return the array of list item strings.</p>
<p>Use an iterator method (any kind of loop) to get the desired output (shown below).</p>
<pre class="language-js"><code class="language-js"><span class="token punctuation">[</span>
  <span class="token string">'&lt;li class="text-warning"&gt;no-var&lt;/li&gt;'</span><span class="token punctuation">,</span>
  <span class="token string">'&lt;li class="text-warning"&gt;var-on-top&lt;/li&gt;'</span><span class="token punctuation">,</span>
  <span class="token string">'&lt;li class="text-warning"&gt;linebreak&lt;/li&gt;'</span>
<span class="token punctuation">]</span>
</code></pre>
</section></div><hr/></div>