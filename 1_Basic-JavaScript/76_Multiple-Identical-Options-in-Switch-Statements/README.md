<div class="challenge-instructions basic-javascript"><div><section id="description">
<p>If the <code>break</code> statement is omitted from a <code>switch</code> statement's <code>case</code>, the following <code>case</code> statement(s) are executed until a <code>break</code> is encountered. If you have multiple inputs with the same output, you can represent them in a <code>switch</code> statement like this:</p>
<pre class="language-js"><code class="language-js"><span class="token keyword">var</span> result <span class="token operator">=</span> <span class="token string">""</span><span class="token punctuation">;</span>
<span class="token keyword">switch</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">case</span> <span class="token number">1</span><span class="token operator">:</span>
  <span class="token keyword">case</span> <span class="token number">2</span><span class="token operator">:</span>
  <span class="token keyword">case</span> <span class="token number">3</span><span class="token operator">:</span>
    result <span class="token operator">=</span> <span class="token string">"1, 2, or 3"</span><span class="token punctuation">;</span>
    <span class="token keyword">break</span><span class="token punctuation">;</span>
  <span class="token keyword">case</span> <span class="token number">4</span><span class="token operator">:</span>
    result <span class="token operator">=</span> <span class="token string">"4 alone"</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre>
<p>Cases for 1, 2, and 3 will all produce the same result.</p>
</section></div><hr/><div><section id="instructions">
<p>Write a switch statement to set <code>answer</code> for the following ranges:<br/>
<code>1-3</code> - <code>Low</code><br/>
<code>4-6</code> - <code>Mid</code><br/>
<code>7-9</code> - <code>High</code></p>
<p><strong>Note:</strong> You will need to have a <code>case</code> statement for each number in the range.</p>
</section></div><hr/></div>