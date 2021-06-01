<div class="challenge-instructions basic-javascript"><div><section id="description">
<p>There are many <dfn>comparison operators</dfn> in JavaScript. All of these operators return a boolean <code>true</code> or <code>false</code> value.</p>
<p>The most basic operator is the equality operator <code>==</code>. The equality operator compares two values and returns <code>true</code> if they're equivalent or <code>false</code> if they are not. Note that equality is different from assignment (<code>=</code>), which assigns the value on the right of the operator to a variable on the left.</p>
<pre class="language-js"><code class="language-js"><span class="token keyword">function</span> <span class="token function">equalityTest</span><span class="token punctuation">(</span><span class="token parameter">myVal</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>myVal <span class="token operator">==</span> <span class="token number">10</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
     <span class="token keyword">return</span> <span class="token string">"Equal"</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> <span class="token string">"Not Equal"</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre>
<p>If <code>myVal</code> is equal to <code>10</code>, the equality operator returns <code>true</code>, so the code in the curly braces will execute, and the function will return <code>Equal</code>. Otherwise, the function will return <code>Not Equal</code>. In order for JavaScript to compare two different <dfn>data types</dfn> (for example, <code>numbers</code> and <code>strings</code>), it must convert one type to another. This is known as Type Coercion. Once it does, however, it can compare terms as follows:</p>
<pre class="language-js"><code class="language-js"><span class="token number">1</span>   <span class="token operator">==</span>  <span class="token number">1</span>
<span class="token number">1</span>   <span class="token operator">==</span>  <span class="token number">2</span>
<span class="token number">1</span>   <span class="token operator">==</span> <span class="token string">'1'</span>
<span class="token string">"3"</span> <span class="token operator">==</span>  <span class="token number">3</span>
</code></pre>
<p>In order, these expressions would evaluate to <code>true</code>, <code>false</code>, <code>true</code>, and <code>true</code>.</p>
</section></div><hr/><div><section id="instructions">
<p>Add the equality operator to the indicated line so that the function will return the string <code>Equal</code> when <code>val</code> is equivalent to <code>12</code>.</p>
</section></div><hr/></div>