<div class="challenge-instructions basic-javascript"><div><section id="description">
<p>Objects can be thought of as a key/value storage, like a dictionary. If you have tabular data, you can use an object to lookup values rather than a <code>switch</code> statement or an <code>if/else</code> chain. This is most useful when you know that your input data is limited to a certain range.</p>
<p>Here is an example of a simple reverse alphabet lookup:</p>
<pre class="language-js"><code class="language-js"><span class="token keyword">var</span> alpha <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token number">1</span><span class="token operator">:</span><span class="token string">"Z"</span><span class="token punctuation">,</span>
  <span class="token number">2</span><span class="token operator">:</span><span class="token string">"Y"</span><span class="token punctuation">,</span>
  <span class="token number">3</span><span class="token operator">:</span><span class="token string">"X"</span><span class="token punctuation">,</span>
  <span class="token number">4</span><span class="token operator">:</span><span class="token string">"W"</span><span class="token punctuation">,</span>
  <span class="token operator">...</span>
  <span class="token number">24</span><span class="token operator">:</span><span class="token string">"C"</span><span class="token punctuation">,</span>
  <span class="token number">25</span><span class="token operator">:</span><span class="token string">"B"</span><span class="token punctuation">,</span>
  <span class="token number">26</span><span class="token operator">:</span><span class="token string">"A"</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
alpha<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
alpha<span class="token punctuation">[</span><span class="token number">24</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">var</span> value <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
alpha<span class="token punctuation">[</span>value<span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre>
<p><code>alpha[2]</code> is the string <code>Y</code>, <code>alpha[24]</code> is the string <code>C</code>, and <code>alpha[value]</code> is the string <code>Y</code>.</p>
</section></div><hr/><div><section id="instructions">
<p>Convert the switch statement into an object called <code>lookup</code>. Use it to look up <code>val</code> and assign the associated string to the <code>result</code> variable.</p>
</section></div><hr/></div>