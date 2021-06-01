<div class="challenge-instructions basic-javascript"><div><section id="description">
<p>In the casino game Blackjack, a player can gain an advantage over the house by keeping track of the relative number of high and low cards remaining in the deck. This is called <a href="https://en.wikipedia.org/wiki/Card_counting">Card Counting</a>.</p>
<p>Having more high cards remaining in the deck favors the player. Each card is assigned a value according to the table below. When the count is positive, the player should bet high. When the count is zero or negative, the player should bet low.</p>
<table class="table table-striped"><thead><tr><th>Count Change</th><th>Cards</th></tr></thead><tbody><tr><td>+1</td><td>2, 3, 4, 5, 6</td></tr><tr><td>0</td><td>7, 8, 9</td></tr><tr><td>-1</td><td>10, 'J', 'Q', 'K', 'A'</td></tr></tbody></table>
<p>You will write a card counting function. It will receive a <code>card</code> parameter, which can be a number or a string, and increment or decrement the global <code>count</code> variable according to the card's value (see table). The function will then return a string with the current count and the string <code>Bet</code> if the count is positive, or <code>Hold</code> if the count is zero or negative. The current count and the player's decision (<code>Bet</code> or <code>Hold</code>) should be separated by a single space.</p>
<p><strong>Example Outputs:</strong> <code>-3 Hold</code> or <code>5 Bet</code></p>
<p><strong>Hint</strong><br/>
Do NOT reset <code>count</code> to 0 when value is 7, 8, or 9.<br/>
Do NOT return an array.<br/>
Do NOT include quotes (single or double) in the output.</p>
</section></div><hr/></div>