<div class="challenge-instructions basic-javascript"><div><section id="description">
<p><code>If</code> statements are used to make decisions in code. The keyword <code>if</code> tells JavaScript to execute the code in the curly braces under certain conditions, defined in the parentheses. These conditions are known as <code>Boolean</code> conditions and they may only be <code>true</code> or <code>false</code>.</p>
<p>When the condition evaluates to <code>true</code>, the program executes the statement inside the curly braces. When the Boolean condition evaluates to <code>false</code>, the statement inside the curly braces will not execute.</p>
<p><strong>Pseudocode</strong></p>
<blockquote>if (<i>condition is true</i>) {<br/>  <i>statement is executed</i><br/>}</blockquote>
<p><strong>Example</strong></p>
<pre class="language-js"><code class="language-js"><span class="token keyword">function</span> <span class="token function">test</span> <span class="token punctuation">(</span><span class="token parameter">myCondition</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>myCondition<span class="token punctuation">)</span> <span class="token punctuation">{</span>
     <span class="token keyword">return</span> <span class="token string">"It was true"</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> <span class="token string">"It was false"</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token function">test</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">test</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<p><code>test(true)</code> returns the string <code>It was true</code>, and <code>test(false)</code> returns the string <code>It was false</code>.</p>
<p>When <code>test</code> is called with a value of <code>true</code>, the <code>if</code> statement evaluates <code>myCondition</code> to see if it is <code>true</code> or not. Since it is <code>true</code>, the function returns <code>It was true</code>. When we call <code>test</code> with a value of <code>false</code>, <code>myCondition</code> is <em>not</em> <code>true</code> and the statement in the curly braces is not executed and the function returns <code>It was false</code>.</p>
</section></div><hr/><div><section id="instructions">
<p>Create an <code>if</code> statement inside the function to return <code>Yes, that was true</code> if the parameter <code>wasThatTrue</code> is <code>true</code> and return <code>No, that was false</code> otherwise.</p>
</section></div><hr/></div>