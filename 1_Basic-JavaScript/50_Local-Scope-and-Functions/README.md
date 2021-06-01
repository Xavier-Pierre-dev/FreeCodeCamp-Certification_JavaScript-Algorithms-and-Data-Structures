<div class="challenge-instructions basic-javascript"><div><section id="description">
<p>Variables which are declared within a function, as well as the function parameters, have <dfn>local</dfn> scope. That means they are only visible within that function.</p>
<p>Here is a function <code>myTest</code> with a local variable called <code>loc</code>.</p>
<pre class="language-js"><code class="language-js"><span class="token keyword">function</span> <span class="token function">myTest</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> loc <span class="token operator">=</span> <span class="token string">"foo"</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>loc<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token function">myTest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>loc<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<p>The <code>myTest()</code> function call will display the string <code>foo</code> in the console. The <code>console.log(loc)</code> line will throw an error, as <code>loc</code> is not defined outside of the function.</p>
</section></div><hr/><div><section id="instructions">
<p>The editor has two <code>console.log</code>s to help you see what is happening. Check the console as you code to see how it changes. Declare a local variable <code>myVar</code> inside <code>myLocalScope</code> and run the tests.</p>
<p><strong>Note:</strong> The console will still display <code>ReferenceError: myVar is not defined</code>, but this will not cause the tests to fail.</p>
</section></div><hr/></div>