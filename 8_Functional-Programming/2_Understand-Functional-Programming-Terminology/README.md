<div class="challenge-instructions functional-programming"><div><section id="description">
<p>The FCC Team had a mood swing and now wants two types of tea: green tea and black tea. General Fact: Client mood swings are pretty common.</p>
<p>With that information, we'll need to revisit the <code>getTea</code> function from last challenge to handle various tea requests. We can modify <code>getTea</code> to accept a function as a parameter to be able to change the type of tea it prepares. This makes <code>getTea</code> more flexible, and gives the programmer more control when client requests change.</p>
<p>But first, let's cover some functional terminology:</p>
<p><dfn>Callbacks</dfn> are the functions that are slipped or passed into another function to decide the invocation of that function. You may have seen them passed to other methods, for example in <code>filter</code>, the callback function tells JavaScript the criteria for how to filter an array.</p>
<p>Functions that can be assigned to a variable, passed into another function, or returned from another function just like any other normal value, are called <dfn>first class</dfn> functions. In JavaScript, all functions are first class functions.</p>
<p>The functions that take a function as an argument, or return a function as a return value are called <dfn>higher order</dfn> functions.</p>
<p>When functions are passed in to or returned from another function, then those functions which were passed in or returned can be called a <dfn>lambda</dfn>.</p>
</section></div><hr/><div><section id="instructions">
<p>Prepare 27 cups of green tea and 13 cups of black tea and store them in <code>tea4GreenTeamFCC</code> and <code>tea4BlackTeamFCC</code> variables, respectively. Note that the <code>getTea</code> function has been modified so it now takes a function as the first argument.</p>
<p>Note: The data (the number of cups of tea) is supplied as the last argument. We'll discuss this more in later lessons.</p>
</section></div><hr/></div>