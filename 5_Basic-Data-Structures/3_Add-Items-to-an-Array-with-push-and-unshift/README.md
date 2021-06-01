<div class="challenge-instructions basic-data-structures"><div><section id="description">
<p>An array's length, like the data types it can contain, is not fixed. Arrays can be defined with a length of any number of elements, and elements can be added or removed over time; in other words, arrays are <dfn>mutable</dfn>. In this challenge, we will look at two methods with which we can programmatically modify an array: <code>Array.push()</code> and <code>Array.unshift()</code>.</p>
<p>Both methods take one or more elements as parameters and add those elements to the array the method is being called on; the <code>push()</code> method adds elements to the end of an array, and <code>unshift()</code> adds elements to the beginning. Consider the following:</p>
<pre class="language-js"><code class="language-js"><span class="token keyword">let</span> twentyThree <span class="token operator">=</span> <span class="token string">'XXIII'</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> romanNumerals <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">'XXI'</span><span class="token punctuation">,</span> <span class="token string">'XXII'</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

romanNumerals<span class="token punctuation">.</span><span class="token function">unshift</span><span class="token punctuation">(</span><span class="token string">'XIX'</span><span class="token punctuation">,</span> <span class="token string">'XX'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<p><code>romanNumerals</code> would have the value <code>['XIX', 'XX', 'XXI', 'XXII']</code>.</p>
<pre class="language-js"><code class="language-js">romanNumerals<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>twentyThree<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<p><code>romanNumerals</code> would have the value <code>['XIX', 'XX', 'XXI', 'XXII', 'XXIII']</code>. Notice that we can also pass variables, which allows us even greater flexibility in dynamically modifying our array's data.</p>
</section></div><hr/><div><section id="instructions">
<p>We have defined a function, <code>mixedNumbers</code>, which we are passing an array as an argument. Modify the function by using <code>push()</code> and <code>unshift()</code> to add <code>'I', 2, 'three'</code> to the beginning of the array and <code>7, 'VIII', 9</code> to the end so that the returned array contains representations of the numbers 1-9 in order.</p>
</section></div><hr/></div>