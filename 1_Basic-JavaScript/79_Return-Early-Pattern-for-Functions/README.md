<div class="challenge-instructions basic-javascript"><div><section id="description">
<p>When a <code>return</code> statement is reached, the execution of the current function stops and control returns to the calling location.</p>
<p><strong>Example</strong></p>
<pre class="language-js"><code class="language-js"><span class="token keyword">function</span> <span class="token function">myFun</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"Hello"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token string">"World"</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"byebye"</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token function">myFun</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<p>The above will display the string <code>Hello</code> in the console, and return the string <code>World</code>. The string <code>byebye</code> will never display in the console, because the function exits at the <code>return</code> statement.</p>
</section></div><hr/><div><section id="instructions">
<p>Modify the function <code>abTest</code> so that if <code>a</code> or <code>b</code> are less than <code>0</code> the function will immediately exit with a value of <code>undefined</code>.</p>
<p><strong>Hint</strong><br/>
Remember that <a href="https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/understanding-uninitialized-variables"><code>undefined</code> is a keyword</a>, not a string.</p>
</section></div><hr/></div>