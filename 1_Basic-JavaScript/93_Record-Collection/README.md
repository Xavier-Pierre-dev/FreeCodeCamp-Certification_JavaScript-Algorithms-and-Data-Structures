<div class="challenge-instructions basic-javascript"><div><section id="description">
<p>You are given an object literal representing a part of your musical album collection. Each album has a unique id number as its key and several other properties. Not all albums have complete information.</p>
<p>You start with an <code>updateRecords</code> function that takes an object literal, <code>records</code>, containing the musical album collection, an <code>id</code>, a <code>prop</code> (like <code>artist</code> or <code>tracks</code>), and a <code>value</code>. Complete the function using the rules below to modify the object passed to the function.</p>
<ul>
<li>Your function must always return the entire record collection object.</li>
<li>If <code>prop</code> isn't <code>tracks</code> and <code>value</code> isn't an empty string, update or set that album's <code>prop</code> to <code>value</code>.</li>
<li>If <code>prop</code> is <code>tracks</code> but the album doesn't have a <code>tracks</code> property, create an empty array and add <code>value</code> to it.</li>
<li>If <code>prop</code> is <code>tracks</code> and <code>value</code> isn't an empty string, add <code>value</code> to the end of the album's existing <code>tracks</code> array.</li>
<li>If <code>value</code> is an empty string, delete the given <code>prop</code> property from the album.</li>
</ul>
<p><strong>Note:</strong> A copy of the <code>recordCollection</code> object is used for the tests.</p>
</section></div><hr/></div>