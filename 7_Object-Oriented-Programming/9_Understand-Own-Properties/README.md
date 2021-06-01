<div class="challenge-instructions object-oriented-programming"><div><section id="description">
<p>In the following example, the <code>Bird</code> constructor defines two properties: <code>name</code> and <code>numLegs</code>:</p>
<pre class="language-js"><code class="language-js"><span class="token keyword">function</span> <span class="token function">Bird</span><span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>name  <span class="token operator">=</span> name<span class="token punctuation">;</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>numLegs <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> duck <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Bird</span><span class="token punctuation">(</span><span class="token string">"Donald"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> canary <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Bird</span><span class="token punctuation">(</span><span class="token string">"Tweety"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<p><code>name</code> and <code>numLegs</code> are called <dfn>own properties</dfn>, because they are defined directly on the instance object. That means that <code>duck</code> and <code>canary</code> each has its own separate copy of these properties. In fact every instance of <code>Bird</code> will have its own copy of these properties. The following code adds all of the own properties of <code>duck</code> to the array <code>ownProps</code>:</p>
<pre class="language-js"><code class="language-js"><span class="token keyword">let</span> ownProps <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> property <span class="token keyword">in</span> duck<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span><span class="token punctuation">(</span>duck<span class="token punctuation">.</span><span class="token function">hasOwnProperty</span><span class="token punctuation">(</span>property<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    ownProps<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>property<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>ownProps<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<p>The console would display the value <code>["name", "numLegs"]</code>.</p>
</section></div><hr/><div><section id="instructions">
<p>Add the own properties of <code>canary</code> to the array <code>ownProps</code>.</p>
</section></div><hr/></div>