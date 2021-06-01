<div class="challenge-instructions basic-javascript"><div><section id="description">
<p><dfn>Parameters</dfn> are variables that act as placeholders for the values that are to be input to a function when it is called. When a function is defined, it is typically defined along with one or more parameters. The actual values that are input (or <dfn>"passed"</dfn>) into a function when it is called are known as <dfn>arguments</dfn>.</p>
<p>Here is a function with two parameters, <code>param1</code> and <code>param2</code>:</p>
<pre class="language-js"><code class="language-js"><span class="token keyword">function</span> <span class="token function">testFun</span><span class="token punctuation">(</span><span class="token parameter">param1<span class="token punctuation">,</span> param2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>param1<span class="token punctuation">,</span> param2<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre>
<p>Then we can call <code>testFun</code> like this: <code>testFun("Hello", "World");</code>. We have passed two string arguments, <code>Hello</code> and <code>World</code>. Inside the function, <code>param1</code> will equal the string <code>Hello</code> and <code>param2</code> will equal the string <code>World</code>. Note that you could call <code>testFun</code> again with different arguments and the parameters would take on the value of the new arguments.</p>
</section></div><hr/><div><section id="instructions">
<ol><li>Create a function called <code>functionWithArgs</code> that accepts two arguments and outputs their sum to the dev console.</li><li>Call the function with two numbers as arguments.</li></ol>
</section></div><hr/></div>