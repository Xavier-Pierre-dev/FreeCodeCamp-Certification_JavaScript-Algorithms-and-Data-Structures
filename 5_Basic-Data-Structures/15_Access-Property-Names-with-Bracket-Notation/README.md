<div class="challenge-instructions basic-data-structures"><div><section id="description">
<p>In the first object challenge we mentioned the use of bracket notation as a way to access property values using the evaluation of a variable. For instance, imagine that our <code>foods</code> object is being used in a program for a supermarket cash register. We have some function that sets the <code>selectedFood</code> and we want to check our <code>foods</code> object for the presence of that food. This might look like:</p>
<pre class="language-js"><code class="language-js"><span class="token keyword">let</span> selectedFood <span class="token operator">=</span> <span class="token function">getCurrentFood</span><span class="token punctuation">(</span>scannedItem<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> inventory <span class="token operator">=</span> foods<span class="token punctuation">[</span>selectedFood<span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre>
<p>This code will evaluate the value stored in the <code>selectedFood</code> variable and return the value of that key in the <code>foods</code> object, or <code>undefined</code> if it is not present. Bracket notation is very useful because sometimes object properties are not known before runtime or we need to access them in a more dynamic way.</p>
</section></div><hr/><div><section id="instructions">
<p>We've defined a function, <code>checkInventory</code>, which receives a scanned item as an argument. Return the current value of the <code>scannedItem</code> key in the <code>foods</code> object. You can assume that only valid keys will be provided as an argument to <code>checkInventory</code>.</p>
</section></div><hr/></div>