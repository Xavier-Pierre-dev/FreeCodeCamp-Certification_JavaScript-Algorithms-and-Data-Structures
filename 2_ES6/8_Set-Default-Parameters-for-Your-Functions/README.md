<div class="challenge-instructions es6"><div><section id="description">
<p>In order to help us create more flexible functions, ES6 introduces <dfn>default parameters</dfn> for functions.</p>
<p>Check out this code:</p>
<pre class="language-js"><code class="language-js"><span class="token keyword">const</span> greeting <span class="token operator">=</span> <span class="token punctuation">(</span>name <span class="token operator">=</span> <span class="token string">"Anonymous"</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token string">"Hello "</span> <span class="token operator">+</span> name<span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">greeting</span><span class="token punctuation">(</span><span class="token string">"John"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">greeting</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<p>The console will display the strings <code>Hello John</code> and <code>Hello Anonymous</code>.</p>
<p>The default parameter kicks in when the argument is not specified (it is undefined). As you can see in the example above, the parameter <code>name</code> will receive its default value <code>Anonymous</code> when you do not provide a value for the parameter. You can add default values for as many parameters as you want.</p>
</section></div><hr/><div><section id="instructions">
<p>Modify the function <code>increment</code> by adding default parameters so that it will add 1 to <code>number</code> if <code>value</code> is not specified.</p>
</section></div><hr/></div>