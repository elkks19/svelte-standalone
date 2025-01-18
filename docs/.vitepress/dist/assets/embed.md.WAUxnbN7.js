import{_ as s,c as i,a3 as e,o as t}from"./chunks/framework.DIwpdX6V.js";const k=JSON.parse('{"title":"Embed Types","description":"","frontmatter":{},"headers":[],"relativePath":"embed.md","filePath":"embed.md"}'),n={name:"embed.md"};function l(h,a,o,p,d,r){return t(),i("div",null,a[0]||(a[0]=[e(`<h1 id="embed-types" tabindex="-1">Embed Types <a class="header-anchor" href="#embed-types" aria-label="Permalink to &quot;Embed Types&quot;">​</a></h1><p>While <a href="/cli.html#create">creating a standalone component</a>, you can specify how your embeddable should be inserted after bundling it.</p><p>By default, all embed types include a way to programmatically stop them. Additionally, after selecting your embed type, <strong>Svelte Standalone</strong> will automatically generate the necessary boilerplate for it.</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p><em>You can change an existing embeddable&#39;s embed type by updating its embed method.</em></p></div><h2 id="explicit-call-single-instance" tabindex="-1">Explicit Call (Single Instance) <a class="header-anchor" href="#explicit-call-single-instance" aria-label="Permalink to &quot;Explicit Call (Single Instance)&quot;">​</a></h2><p>Embeds a Svelte component as a singleton. This method allows you to programmatically start and stop the component.</p><h3 id="embed-method" tabindex="-1">Embed Method: <a class="header-anchor" href="#embed-method" aria-label="Permalink to &quot;Embed Method:&quot;">​</a></h3><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { embed } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;svelte-standalone&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre></div><h3 id="params" tabindex="-1">Params: <a class="header-anchor" href="#params" aria-label="Permalink to &quot;Params:&quot;">​</a></h3><ul><li><code>mount</code>: The Svelte component to embed.</li><li><code>id</code>: A unique identifier for the component.</li></ul><h4 id="usage" tabindex="-1">Usage: <a class="header-anchor" href="#usage" aria-label="Permalink to &quot;Usage:&quot;">​</a></h4><ul><li>Start the component:<div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">window.myComponent.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">start</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">	/* props */</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span></code></pre></div></li><li>Stop the component:<div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">window.myComponent.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">stop</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span></code></pre></div></li></ul><h4 id="key-points" tabindex="-1">Key Points: <a class="header-anchor" href="#key-points" aria-label="Permalink to &quot;Key Points:&quot;">​</a></h4><ul><li><strong>Single Instance</strong>: Ensures only one instance of the component is active at a time.</li><li><strong>Component Props</strong>: When calling <code>start</code>, you can include custom initial props.</li></ul><h2 id="explicit-call-multiple-instances" tabindex="-1">Explicit Call (Multiple Instances) <a class="header-anchor" href="#explicit-call-multiple-instances" aria-label="Permalink to &quot;Explicit Call (Multiple Instances)&quot;">​</a></h2><p>Embeds multiple instances of a Svelte component. This method allows you to create and manage multiple instances of the same component.</p><h3 id="embed-method-1" tabindex="-1">Embed Method: <a class="header-anchor" href="#embed-method-1" aria-label="Permalink to &quot;Embed Method:&quot;">​</a></h3><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { embedMultiple } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;svelte-standalone&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre></div><h3 id="params-1" tabindex="-1">Params: <a class="header-anchor" href="#params-1" aria-label="Permalink to &quot;Params:&quot;">​</a></h3><ul><li><code>mount</code>: The Svelte component to embed.</li><li><code>id</code>: A unique identifier for the component.</li></ul><h4 id="usage-1" tabindex="-1">Usage: <a class="header-anchor" href="#usage-1" aria-label="Permalink to &quot;Usage:&quot;">​</a></h4><ul><li>Start a new instance:<div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> instance</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> window.myComponent.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">start</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	{</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">		/* props */</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	},</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">	&#39;targetElementId&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div></li><li>Stop an instance:<div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">instance.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$destroy</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// For Svelte 4</span></span></code></pre></div><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">instance.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">stop</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// For Svelte 5</span></span></code></pre></div></li></ul><h4 id="key-points-1" tabindex="-1">Key Points: <a class="header-anchor" href="#key-points-1" aria-label="Permalink to &quot;Key Points:&quot;">​</a></h4><ul><li><strong>Multiple Instances</strong>: Allows multiple instances of the same component.</li><li><strong>Component Props</strong>: When calling <code>start</code>, you can include custom initial props.</li><li><strong>Control Over Instances</strong>: You can programmatically stop a specific instance.</li></ul><h2 id="auto-embed-with-target" tabindex="-1">Auto-Embed with Target <a class="header-anchor" href="#auto-embed-with-target" aria-label="Permalink to &quot;Auto-Embed with Target&quot;">​</a></h2><p>Automatically embeds a Svelte component into a target element based on the URL query string.</p><h3 id="embed-method-2" tabindex="-1">Embed Method: <a class="header-anchor" href="#embed-method-2" aria-label="Permalink to &quot;Embed Method:&quot;">​</a></h3><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { autoEmbedWithTarget } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;svelte-standalone&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre></div><h3 id="params-2" tabindex="-1">Params: <a class="header-anchor" href="#params-2" aria-label="Permalink to &quot;Params:&quot;">​</a></h3><ul><li><code>mount</code>: The Svelte component to embed.</li><li><code>id</code>: A unique identifier for the component.</li></ul><h4 id="usage-2" tabindex="-1">Usage: <a class="header-anchor" href="#usage-2" aria-label="Permalink to &quot;Usage:&quot;">​</a></h4><ul><li>Include the script in your HTML:<div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> id</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;targetElementId&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> src</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;/path/to/myComponent.min.js?target=targetElementId&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div></li></ul><h4 id="key-points-2" tabindex="-1">Key Points: <a class="header-anchor" href="#key-points-2" aria-label="Permalink to &quot;Key Points:&quot;">​</a></h4><ul><li><strong>Automatic Embedding</strong>: Automatically mounts the component to a target element.</li><li><strong>Dynamic Targeting</strong>: Uses URL query strings to determine the target element.</li></ul><h2 id="auto-embed-on-body" tabindex="-1">Auto-Embed on Body <a class="header-anchor" href="#auto-embed-on-body" aria-label="Permalink to &quot;Auto-Embed on Body&quot;">​</a></h2><p>Automatically embeds a Svelte component into the document body.</p><h3 id="embed-method-3" tabindex="-1">Embed Method: <a class="header-anchor" href="#embed-method-3" aria-label="Permalink to &quot;Embed Method:&quot;">​</a></h3><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { autoEmbedOnBody } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;svelte-standalone&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre></div><h3 id="params-3" tabindex="-1">Params: <a class="header-anchor" href="#params-3" aria-label="Permalink to &quot;Params:&quot;">​</a></h3><ul><li><code>mount</code>: The Svelte component to embed.</li><li><code>id</code>: A unique identifier for the component.</li></ul><h4 id="usage-3" tabindex="-1">Usage: <a class="header-anchor" href="#usage-3" aria-label="Permalink to &quot;Usage:&quot;">​</a></h4><ul><li>Include the script in your HTML:<div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> src</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;/path/to/myComponent.min.js&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div></li></ul><h4 id="key-points-3" tabindex="-1">Key Points: <a class="header-anchor" href="#key-points-3" aria-label="Permalink to &quot;Key Points:&quot;">​</a></h4><ul><li><strong>Simple Setup</strong>: No need to specify a target element.</li><li><strong>Automatic Embedding</strong>: Automatically mounts the component to the <code>&lt;body&gt;</code>.</li></ul>`,44)]))}const m=s(n,[["render",l]]);export{k as __pageData,m as default};
