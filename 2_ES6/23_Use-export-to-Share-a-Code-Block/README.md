<div class="challenge-instructions es6"><div><section id="description">
<p>Imagine a file called <code>math_functions.js</code> that contains several functions related to mathematical operations. One of them is stored in a variable, <code>add</code>, that takes in two numbers and returns their sum. You want to use this function in several different JavaScript files. In order to share it with these other files, you first need to <code>export</code> it.</p>
<pre class="language-js"><code class="language-js"><span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">add</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">x<span class="token punctuation">,</span> y</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> x <span class="token operator">+</span> y<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre>
<p>The above is a common way to export a single function, but you can achieve the same thing like this:</p>
<pre class="language-js"><code class="language-js"><span class="token keyword">const</span> <span class="token function-variable function">add</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">x<span class="token punctuation">,</span> y</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> x <span class="token operator">+</span> y<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token punctuation">{</span> add <span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre>
<p>When you export a variable or function, you can import it in another file and use it without having to rewrite the code. You can export multiple things by repeating the first example for each thing you want to export, or by placing them all in the export statement of the second example, like this:</p>
<pre class="language-js"><code class="language-js"><span class="token keyword">export</span> <span class="token punctuation">{</span> add<span class="token punctuation">,</span> subtract <span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre>
</section></div><hr/><div><section id="instructions">
<p>There are two string-related functions in the editor. Export both of them using the method of your choice.</p>
</section></div><hr/></div>