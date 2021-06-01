<div class="challenge-instructions basic-data-structures"><div><section id="description">
<p>At their most basic, objects are just collections of <dfn>key-value</dfn> pairs. In other words, they are pieces of data (<dfn>values</dfn>) mapped to unique identifiers called <dfn>properties</dfn> (<dfn>keys</dfn>). Take a look at an example:</p>
<pre class="language-js"><code class="language-js"><span class="token keyword">const</span> tekkenCharacter <span class="token operator">=</span> <span class="token punctuation">{</span>
  player<span class="token operator">:</span> <span class="token string">'Hwoarang'</span><span class="token punctuation">,</span>
  fightingStyle<span class="token operator">:</span> <span class="token string">'Tae Kwon Doe'</span><span class="token punctuation">,</span>
  human<span class="token operator">:</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre>
<p>The above code defines a Tekken video game character object called <code>tekkenCharacter</code>. It has three properties, each of which map to a specific value. If you want to add an additional property, such as "origin", it can be done by assigning <code>origin</code> to the object:</p>
<pre class="language-js"><code class="language-js">tekkenCharacter<span class="token punctuation">.</span>origin <span class="token operator">=</span> <span class="token string">'South Korea'</span><span class="token punctuation">;</span>
</code></pre>
<p>This uses dot notation. If you were to observe the <code>tekkenCharacter</code> object, it will now include the <code>origin</code> property. Hwoarang also had distinct orange hair. You can add this property with bracket notation by doing:</p>
<pre class="language-js"><code class="language-js">tekkenCharacter<span class="token punctuation">[</span><span class="token string">'hair color'</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">'dyed orange'</span><span class="token punctuation">;</span>
</code></pre>
<p>Bracket notation is required if your property has a space in it or if you want to use a variable to name the property. In the above case, the property is enclosed in quotes to denote it as a string and will be added exactly as shown. Without quotes, it will be evaluated as a variable and the name of the property will be whatever value the variable is. Here's an example with a variable:</p>
<pre class="language-js"><code class="language-js"><span class="token keyword">const</span> eyes <span class="token operator">=</span> <span class="token string">'eye color'</span><span class="token punctuation">;</span>

tekkenCharacter<span class="token punctuation">[</span>eyes<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">'brown'</span><span class="token punctuation">;</span>
</code></pre>
<p>After adding all the examples, the object will look like this:</p>
<pre class="language-js"><code class="language-js"><span class="token punctuation">{</span>
  player<span class="token operator">:</span> <span class="token string">'Hwoarang'</span><span class="token punctuation">,</span>
  fightingStyle<span class="token operator">:</span> <span class="token string">'Tae Kwon Doe'</span><span class="token punctuation">,</span>
  human<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  origin<span class="token operator">:</span> <span class="token string">'South Korea'</span><span class="token punctuation">,</span>
  <span class="token string">'hair color'</span><span class="token operator">:</span> <span class="token string">'dyed orange'</span><span class="token punctuation">,</span>
  <span class="token string">'eye color'</span><span class="token operator">:</span> <span class="token string">'brown'</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre>
</section></div><hr/><div><section id="instructions">
<p>A <code>foods</code> object has been created with three entries. Using the syntax of your choice, add three more entries to it: <code>bananas</code> with a value of <code>13</code>, <code>grapes</code> with a value of <code>35</code>, and <code>strawberries</code> with a value of <code>27</code>.</p>
</section></div><hr/></div>