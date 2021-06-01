<div class="challenge-instructions debugging"><div><section id="description">
<p>When a function or method doesn't take any arguments, you may forget to include the (empty) opening and closing parentheses when calling it. Often times the result of a function call is saved in a variable for other use in your code. This error can be detected by logging variable values (or their types) to the console and seeing that one is set to a function reference, instead of the expected value the function returns.</p>
<p>The variables in the following example are different:</p>
<pre class="language-js"><code class="language-js"><span class="token keyword">function</span> <span class="token function">myFunction</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token string">"You rock!"</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">let</span> varOne <span class="token operator">=</span> myFunction<span class="token punctuation">;</span>
<span class="token keyword">let</span> varTwo <span class="token operator">=</span> <span class="token function">myFunction</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<p>Here <code>varOne</code> is the function <code>myFunction</code>, and <code>varTwo</code> is the string <code>You rock!</code>.</p>
</section></div><hr/><div><section id="instructions">
<p>Fix the code so the variable <code>result</code> is set to the value returned from calling the function <code>getNine</code>.</p>
</section></div><hr/></div>