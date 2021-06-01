<div class="challenge-instructions object-oriented-programming"><div><section id="description">
<p>Anytime a constructor function creates a new object, that object is said to be an <dfn>instance</dfn> of its constructor. JavaScript gives a convenient way to verify this with the <code>instanceof</code> operator. <code>instanceof</code> allows you to compare an object to a constructor, returning <code>true</code> or <code>false</code> based on whether or not that object was created with the constructor. Here's an example:</p>
<pre class="language-js"><code class="language-js"><span class="token keyword">let</span> <span class="token function-variable function">Bird</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span> color</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>color <span class="token operator">=</span> color<span class="token punctuation">;</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>numLegs <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> crow <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Bird</span><span class="token punctuation">(</span><span class="token string">"Alexis"</span><span class="token punctuation">,</span> <span class="token string">"black"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

crow <span class="token keyword">instanceof</span> <span class="token class-name">Bird</span><span class="token punctuation">;</span>
</code></pre>
<p>This <code>instanceof</code> method would return <code>true</code>.</p>
<p>If an object is created without using a constructor, <code>instanceof</code> will verify that it is not an instance of that constructor:</p>
<pre class="language-js"><code class="language-js"><span class="token keyword">let</span> canary <span class="token operator">=</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token string">"Mildred"</span><span class="token punctuation">,</span>
  color<span class="token operator">:</span> <span class="token string">"Yellow"</span><span class="token punctuation">,</span>
  numLegs<span class="token operator">:</span> <span class="token number">2</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

canary <span class="token keyword">instanceof</span> <span class="token class-name">Bird</span><span class="token punctuation">;</span>
</code></pre>
<p>This <code>instanceof</code> method would return <code>false</code>.</p>
</section></div><hr/><div><section id="instructions">
<p>Create a new instance of the <code>House</code> constructor, calling it <code>myHouse</code> and passing a number of bedrooms. Then, use <code>instanceof</code> to verify that it is an instance of <code>House</code>.</p>
</section></div><hr/></div>