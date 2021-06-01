<div class="challenge-instructions basic-javascript"><div><section id="description">
<p>If you have many options to choose from, use a <dfn>switch</dfn> statement. A <code>switch</code> statement tests a value and can have many <dfn>case</dfn> statements which define various possible values. Statements are executed from the first matched <code>case</code> value until a <code>break</code> is encountered.</p>
<p>Here is an example of a <code>switch</code> statement:</p>
<pre class="language-js"><code class="language-js"><span class="token keyword">switch</span><span class="token punctuation">(</span>lowercaseLetter<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">case</span> <span class="token string">"a"</span><span class="token operator">:</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"A"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">break</span><span class="token punctuation">;</span>
  <span class="token keyword">case</span> <span class="token string">"b"</span><span class="token operator">:</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"B"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">break</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre>
<p><code>case</code> values are tested with strict equality (<code>===</code>). The <code>break</code> tells JavaScript to stop executing statements. If the <code>break</code> is omitted, the next statement will be executed.</p>
</section></div><hr/><div><section id="instructions">
<p>Write a switch statement which tests <code>val</code> and sets <code>answer</code> for the following conditions:<br/>
<code>1</code> - <code>alpha</code><br/>
<code>2</code> - <code>beta</code><br/>
<code>3</code> - <code>gamma</code><br/>
<code>4</code> - <code>delta</code></p>
</section></div><hr/></div>