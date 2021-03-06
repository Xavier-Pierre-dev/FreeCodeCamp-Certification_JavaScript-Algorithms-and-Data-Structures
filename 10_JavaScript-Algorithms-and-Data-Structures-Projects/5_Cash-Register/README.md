<div class="challenge-instructions javascript-algorithms-and-data-structures-projects"><div><section id="description">
<p>Design a cash register drawer function <code>checkCashRegister()</code> that accepts purchase price as the first argument (<code>price</code>), payment as the second argument (<code>cash</code>), and cash-in-drawer (<code>cid</code>) as the third argument.</p>
<p><code>cid</code> is a 2D array listing available currency.</p>
<p>The <code>checkCashRegister()</code> function should always return an object with a <code>status</code> key and a <code>change</code> key.</p>
<p>Return <code>{status: "INSUFFICIENT_FUNDS", change: []}</code> if cash-in-drawer is less than the change due, or if you cannot return the exact change.</p>
<p>Return <code>{status: "CLOSED", change: [...]}</code> with cash-in-drawer as the value for the key <code>change</code> if it is equal to the change due.</p>
<p>Otherwise, return <code>{status: "OPEN", change: [...]}</code>, with the change due in coins and bills, sorted in highest to lowest order, as the value of the <code>change</code> key.</p>
<table class="table table-striped"><tbody><tr><th>Currency Unit</th><th>Amount</th></tr><tr><td>Penny</td><td>$0.01 (PENNY)</td></tr><tr><td>Nickel</td><td>$0.05 (NICKEL)</td></tr><tr><td>Dime</td><td>$0.1 (DIME)</td></tr><tr><td>Quarter</td><td>$0.25 (QUARTER)</td></tr><tr><td>Dollar</td><td>$1 (ONE)</td></tr><tr><td>Five Dollars</td><td>$5 (FIVE)</td></tr><tr><td>Ten Dollars</td><td>$10 (TEN)</td></tr><tr><td>Twenty Dollars</td><td>$20 (TWENTY)</td></tr><tr><td>One-hundred Dollars</td><td>$100 (ONE HUNDRED)</td></tr></tbody></table>
<p>See below for an example of a cash-in-drawer array:</p>
<pre class="language-js"><code class="language-js"><span class="token punctuation">[</span>
  <span class="token punctuation">[</span><span class="token string">"PENNY"</span><span class="token punctuation">,</span> <span class="token number">1.01</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">[</span><span class="token string">"NICKEL"</span><span class="token punctuation">,</span> <span class="token number">2.05</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">[</span><span class="token string">"DIME"</span><span class="token punctuation">,</span> <span class="token number">3.1</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">[</span><span class="token string">"QUARTER"</span><span class="token punctuation">,</span> <span class="token number">4.25</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">[</span><span class="token string">"ONE"</span><span class="token punctuation">,</span> <span class="token number">90</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">[</span><span class="token string">"FIVE"</span><span class="token punctuation">,</span> <span class="token number">55</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">[</span><span class="token string">"TEN"</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">[</span><span class="token string">"TWENTY"</span><span class="token punctuation">,</span> <span class="token number">60</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">[</span><span class="token string">"ONE HUNDRED"</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">]</span>
<span class="token punctuation">]</span>
</code></pre>
</section></div><hr/></div>