<div class="challenge-instructions object-oriented-programming"><div><section id="description">
<p><dfn>Constructors</dfn> are functions that create new objects. They define properties and behaviors that will belong to the new object. Think of them as a blueprint for the creation of new objects.</p>
<p>Here is an example of a constructor:</p>
<pre class="language-js"><code class="language-js"><span class="token keyword">function</span> <span class="token function">Bird</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">"Albert"</span><span class="token punctuation">;</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>color <span class="token operator">=</span> <span class="token string">"blue"</span><span class="token punctuation">;</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>numLegs <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre>
<p>This constructor defines a <code>Bird</code> object with properties <code>name</code>, <code>color</code>, and <code>numLegs</code> set to Albert, blue, and 2, respectively. Constructors follow a few conventions:</p>
<ul><li>Constructors are defined with a capitalized name to distinguish them from other functions that are not <code>constructors</code>.</li><li>Constructors use the keyword <code>this</code> to set properties of the object they will create. Inside the constructor, <code>this</code> refers to the new object it will create.</li><li>Constructors define properties and behaviors instead of returning a value as other functions might.</li></ul>
</section></div><hr/><div><section id="instructions">
<p>Create a constructor, <code>Dog</code>, with properties <code>name</code>, <code>color</code>, and <code>numLegs</code> that are set to a string, a string, and a number, respectively.</p>
</section></div><hr/></div>