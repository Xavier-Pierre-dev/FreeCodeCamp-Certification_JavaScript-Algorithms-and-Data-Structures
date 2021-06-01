<div class="challenge-instructions object-oriented-programming"><div><section id="description">
<p>The <code>Bird</code> and <code>Dog</code> constructors from the last challenge worked well. However, notice that all <code>Birds</code> that are created with the <code>Bird</code> constructor are automatically named Albert, are blue in color, and have two legs. What if you want birds with different values for name and color? It's possible to change the properties of each bird manually but that would be a lot of work:</p>
<pre class="language-js"><code class="language-js"><span class="token keyword">let</span> swan <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Bird</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
swan<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">"Carlos"</span><span class="token punctuation">;</span>
swan<span class="token punctuation">.</span>color <span class="token operator">=</span> <span class="token string">"white"</span><span class="token punctuation">;</span>
</code></pre>
<p>Suppose you were writing a program to keep track of hundreds or even thousands of different birds in an aviary. It would take a lot of time to create all the birds, then change the properties to different values for every one. To more easily create different <code>Bird</code> objects, you can design your Bird constructor to accept parameters:</p>
<pre class="language-js"><code class="language-js"><span class="token keyword">function</span> <span class="token function">Bird</span><span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span> color</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>color <span class="token operator">=</span> color<span class="token punctuation">;</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>numLegs <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre>
<p>Then pass in the values as arguments to define each unique bird into the <code>Bird</code> constructor: <code>let cardinal = new Bird("Bruce", "red");</code> This gives a new instance of <code>Bird</code> with <code>name</code> and <code>color</code> properties set to <code>Bruce</code> and <code>red</code>, respectively. The <code>numLegs</code> property is still set to 2. The <code>cardinal</code> has these properties:</p>
<pre class="language-js"><code class="language-js">cardinal<span class="token punctuation">.</span>name
cardinal<span class="token punctuation">.</span>color
cardinal<span class="token punctuation">.</span>numLegs
</code></pre>
<p>The constructor is more flexible. It's now possible to define the properties for each <code>Bird</code> at the time it is created, which is one way that JavaScript constructors are so useful. They group objects together based on shared characteristics and behavior and define a blueprint that automates their creation.</p>
</section></div><hr/><div><section id="instructions">
<p>Create another <code>Dog</code> constructor. This time, set it up to take the parameters <code>name</code> and <code>color</code>, and have the property <code>numLegs</code> fixed at 4. Then create a new <code>Dog</code> saved in a variable <code>terrier</code>. Pass it two strings as arguments for the <code>name</code> and <code>color</code> properties.</p>
</section></div><hr/></div>