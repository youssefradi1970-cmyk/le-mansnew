<html>
<head>
<title>script.js</title>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<style type="text/css">
.s0 { color: #bcbec4;}
.s1 { color: #bcbec4;}
.s2 { color: #6aab73;}
.s3 { color: #cf8e6d;}
.ln { color: #4b5059; font-weight: normal; font-style: normal; }
</style>
</head>
<body bgcolor="#191a1c">
<table CELLSPACING=0 CELLPADDING=5 COLS=1 WIDTH="100%" BGCOLOR="#606060" >
<tr><td><center>
<font face="Arial, Helvetica" color="#000000">
script.js</font>
</center></td></tr></table>
<pre><a name="l1"><span class="ln">1    </span></a><span class="s0">document</span><span class="s1">.</span><span class="s0">getElementById</span><span class="s1">(</span><span class="s2">'trackForm'</span><span class="s1">).</span><span class="s0">addEventListener</span><span class="s1">(</span><span class="s2">'submit'</span><span class="s1">, </span><span class="s3">function</span><span class="s1">(</span><span class="s0">e</span><span class="s1">) {</span>
<a name="l2"><span class="ln">2    </span></a>  <span class="s0">e</span><span class="s1">.</span><span class="s0">preventDefault</span><span class="s1">();</span>
<a name="l3"><span class="ln">3    </span></a>  <span class="s3">const </span><span class="s0">name </span><span class="s1">= </span><span class="s0">document</span><span class="s1">.</span><span class="s0">getElementById</span><span class="s1">(</span><span class="s2">'driverName'</span><span class="s1">).</span><span class="s0">value</span><span class="s1">;</span>
<a name="l4"><span class="ln">4    </span></a>  <span class="s3">const </span><span class="s0">output </span><span class="s1">= </span><span class="s0">document</span><span class="s1">.</span><span class="s0">getElementById</span><span class="s1">(</span><span class="s2">'output'</span><span class="s1">);</span>
<a name="l5"><span class="ln">5    </span></a>
<a name="l6"><span class="ln">6    </span></a>  <span class="s0">output</span><span class="s1">.</span><span class="s0">innerHTML </span><span class="s1">= </span><span class="s2">`&lt;p style=&quot;color: #00ffcc;&quot;&gt;ACCESS GRANTED. Welcome to the track, </span><span class="s0">$</span><span class="s1">{</span><span class="s0">name</span><span class="s1">}</span><span class="s2">!&lt;/p&gt;`</span><span class="s1">;</span>
<a name="l7"><span class="ln">7    </span></a>  <span class="s0">alert</span><span class="s1">(</span><span class="s2">&quot;ENGINE STARTED! Track is clear.&quot;</span><span class="s1">);</span>
<a name="l8"><span class="ln">8    </span></a><span class="s1">});</span>
<a name="l9"><span class="ln">9    </span></a></pre>
</body>
</html>
