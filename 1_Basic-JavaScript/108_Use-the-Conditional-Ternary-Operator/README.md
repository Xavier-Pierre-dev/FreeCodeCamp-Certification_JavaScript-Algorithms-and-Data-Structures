<div class="challenge-instructions basic-javascript"><div><section id="description">
<p>The <dfn>conditional operator</dfn>, also called the <dfn>ternary operator</dfn>, can be used as a one line if-else expression.</p>
<p>The syntax is <code>a ? b : c</code>, where <code>a</code> is the condition, <code>b</code> is the code to run when the condition returns <code>true</code>, and <code>c</code> is the code to run when the condition returns <code>false</code>.</p>
<p>The following function uses an <code>if/else</code> statement to check a condition:</p>
<pre class="language-js"><code class="language-js"><span class="token keyword">function</span> <span class="token function">findGreater</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span><span class="token punctuation">(</span>a <span class="token operator">&gt;</span> b<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token string">"a is greater"</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token string">"b is greater"</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre>
<p>This can be re-written using the conditional operator:</p>
<pre class="language-js"><code class="language-js"><span class="token keyword">function</span> <span class="token function">findGreater</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> a <span class="token operator">&gt;</span> b <span class="token operator">?</span> <span class="token string">"a is greater"</span> <span class="token operator">:</span> <span class="token string">"b is greater"</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre>
</section></div><hr/><div><section id="instructions">
<p>Use the conditional operator in the <code>checkEqual</code> function to check if two numbers are equal or not. The function should return either the string <code>Equal</code> or the string <code>Not Equal</code>.</p>
</section></div><hr/></div>