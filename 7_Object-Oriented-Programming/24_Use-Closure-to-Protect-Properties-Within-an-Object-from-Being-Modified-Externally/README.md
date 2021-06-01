<div class="challenge-instructions object-oriented-programming"><div><section id="description">
<p>In the previous challenge, <code>bird</code> had a public property <code>name</code>. It is considered public because it can be accessed and changed outside of <code>bird</code>'s definition.</p>
<pre class="language-js"><code class="language-js">bird<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">"Duffy"</span><span class="token punctuation">;</span>
</code></pre>
<p>Therefore, any part of your code can easily change the name of <code>bird</code> to any value. Think about things like passwords and bank accounts being easily changeable by any part of your codebase. That could cause a lot of issues.</p>
<p>The simplest way to make this public property private is by creating a variable within the constructor function. This changes the scope of that variable to be within the constructor function versus available globally. This way, the variable can only be accessed and changed by methods also within the constructor function.</p>
<pre class="language-js"><code class="language-js"><span class="token keyword">function</span> <span class="token function">Bird</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> hatchedEgg <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>

  <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function-variable function">getHatchedEggCount</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> 
    <span class="token keyword">return</span> hatchedEgg<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">let</span> ducky <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Bird</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
ducky<span class="token punctuation">.</span><span class="token function">getHatchedEggCount</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<p>Here <code>getHatchedEggCount</code> is a privileged method, because it has access to the private variable <code>hatchedEgg</code>. This is possible because <code>hatchedEgg</code> is declared in the same context as <code>getHatchedEggCount</code>. In JavaScript, a function always has access to the context in which it was created. This is called <code>closure</code>.</p>
</section></div><hr/><div><section id="instructions">
<p>Change how <code>weight</code> is declared in the <code>Bird</code> function so it is a private variable. Then, create a method <code>getWeight</code> that returns the value of <code>weight</code> 15.</p>
</section></div><hr/></div>