<div class="challenge-instructions basic-data-structures"><div><section id="description">
<p>The fundamental feature of any data structure is, of course, the ability to not only store data, but to be able to retrieve that data on command. So, now that we've learned how to create an array, let's begin to think about how we can access that array's information.</p>
<p>When we define a simple array as seen below, there are 3 items in it:</p>
<pre class="language-js"><code class="language-js"><span class="token keyword">let</span> ourArray <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">"a"</span><span class="token punctuation">,</span> <span class="token string">"b"</span><span class="token punctuation">,</span> <span class="token string">"c"</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre>
<p>In an array, each array item has an <dfn>index</dfn>. This index doubles as the position of that item in the array, and how you reference it. However, it is important to note, that JavaScript arrays are <dfn>zero-indexed</dfn>, meaning that the first element of an array is actually at the <em><strong>zeroth</strong></em> position, not the first. In order to retrieve an element from an array we can enclose an index in brackets and append it to the end of an array, or more commonly, to a variable which references an array object. This is known as <dfn>bracket notation</dfn>. For example, if we want to retrieve the <code>a</code> from <code>ourArray</code> and assign it to a variable, we can do so with the following code:</p>
<pre class="language-js"><code class="language-js"><span class="token keyword">let</span> ourVariable <span class="token operator">=</span> ourArray<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre>
<p>Now <code>ourVariable</code> has the value of <code>a</code>.</p>
<p>In addition to accessing the value associated with an index, you can also <em>set</em> an index to a value using the same notation:</p>
<pre class="language-js"><code class="language-js">ourArray<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">"not b anymore"</span><span class="token punctuation">;</span>
</code></pre>
<p>Using bracket notation, we have now reset the item at index 1 from the string <code>b</code>, to <code>not b anymore</code>. Now <code>ourArray</code> is <code>["a", "not b anymore", "c"]</code>.</p>
</section></div><hr/><div><section id="instructions">
<p>In order to complete this challenge, set the 2nd position (index <code>1</code>) of <code>myArray</code> to anything you want, besides the letter <code>b</code>.</p>
</section></div><hr/></div>