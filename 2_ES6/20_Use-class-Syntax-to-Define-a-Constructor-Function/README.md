<div class="challenge-instructions es6"><div><section id="description">
<p>ES6 provides a new syntax to create objects, using the <dfn>class</dfn> keyword.</p>
<p>It should be noted that the <code>class</code> syntax is just syntax, and not a full-fledged class-based implementation of an object-oriented paradigm, unlike in languages such as Java, Python, Ruby, etc.</p>
<p>In ES5, we usually define a <code>constructor</code> function and use the <code>new</code> keyword to instantiate an object.</p>
<pre class="language-js"><code class="language-js"><span class="token keyword">var</span> <span class="token function-variable function">SpaceShuttle</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">targetPlanet</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>targetPlanet <span class="token operator">=</span> targetPlanet<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">var</span> zeus <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SpaceShuttle</span><span class="token punctuation">(</span><span class="token string">'Jupiter'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<p>The <code>class</code> syntax simply replaces the <code>constructor</code> function creation:</p>
<pre class="language-js"><code class="language-js"><span class="token keyword">class</span> <span class="token class-name">SpaceShuttle</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">targetPlanet</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>targetPlanet <span class="token operator">=</span> targetPlanet<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> zeus <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SpaceShuttle</span><span class="token punctuation">(</span><span class="token string">'Jupiter'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<p>It should be noted that the <code>class</code> keyword declares a new function, to which a constructor is added. This constructor is invoked when <code>new</code> is called to create a new object.</p>
<p><strong>Note:</strong> UpperCamelCase should be used by convention for ES6 class names, as in <code>SpaceShuttle</code> used above.</p>
<p>The <code>constructor</code> method is a special method for creating and initializing an object created with a class. You will learn more about it in the Object Oriented Programming section of the JavaScript Algorithms And Data Structures Certification.</p>
</section></div><hr/><div><section id="instructions">
<p>Use the <code>class</code> keyword and write a <code>constructor</code> to create the <code>Vegetable</code> class.</p>
<p>The <code>Vegetable</code> class allows you to create a vegetable object with a property <code>name</code> that gets passed to the <code>constructor</code>.</p>
</section></div><hr/></div>