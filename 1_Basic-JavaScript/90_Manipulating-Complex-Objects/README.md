<div class="challenge-instructions basic-javascript"><div><section id="description">
<p>Sometimes you may want to store data in a flexible <dfn>Data Structure</dfn>. A JavaScript object is one way to handle flexible data. They allow for arbitrary combinations of <dfn>strings</dfn>, <dfn>numbers</dfn>, <dfn>booleans</dfn>, <dfn>arrays</dfn>, <dfn>functions</dfn>, and <dfn>objects</dfn>.</p>
<p>Here's an example of a complex data structure:</p>
<pre class="language-js"><code class="language-js"><span class="token keyword">var</span> ourMusic <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token string">"artist"</span><span class="token operator">:</span> <span class="token string">"Daft Punk"</span><span class="token punctuation">,</span>
    <span class="token string">"title"</span><span class="token operator">:</span> <span class="token string">"Homework"</span><span class="token punctuation">,</span>
    <span class="token string">"release_year"</span><span class="token operator">:</span> <span class="token number">1997</span><span class="token punctuation">,</span>
    <span class="token string">"formats"</span><span class="token operator">:</span> <span class="token punctuation">[</span> 
      <span class="token string">"CD"</span><span class="token punctuation">,</span> 
      <span class="token string">"Cassette"</span><span class="token punctuation">,</span> 
      <span class="token string">"LP"</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token string">"gold"</span><span class="token operator">:</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre>
<p>This is an array which contains one object inside. The object has various pieces of <dfn>metadata</dfn> about an album. It also has a nested <code>formats</code> array. If you want to add more album records, you can do this by adding records to the top level array. Objects hold data in a property, which has a key-value format. In the example above, <code>"artist": "Daft Punk"</code> is a property that has a key of <code>artist</code> and a value of <code>Daft Punk</code>. <a href="http://www.json.org/">JavaScript Object Notation</a> or <code>JSON</code> is a related data interchange format used to store data.</p>
<pre class="language-json"><code class="language-json">{
  "artist": "Daft Punk",
  "title": "Homework",
  "release_year": 1997,
  "formats": [ 
    "CD",
    "Cassette",
    "LP"
  ],
  "gold": true
}
</code></pre>
<p><strong>Note:</strong> You will need to place a comma after every object in the array, unless it is the last object in the array.</p>
</section></div><hr/><div><section id="instructions">
<p>Add a new album to the <code>myMusic</code> array. Add <code>artist</code> and <code>title</code> strings, <code>release_year</code> number, and a <code>formats</code> array of strings.</p>
</section></div><hr/></div>