---
title: "Wishpond"
date: 2019-07-06T11:14:40-07:00
draft: false
---

<article itemscope itemtype="http://schema.org/Article">
                    <meta itemprop="datePublished" content="2019-06-23 06:44:00 -0700 -0700" />
                    <meta itemprop="dateModified" content="2019-06-23 06:44:00 -0700 -0700" />
                    <meta itemprop="image" content="img/featured.png" />
                    <meta itemprop="publisher" content="softwarelore.com" />
<div class="title-box border-bottom">
                      <h1 itemprop="name headline" id="article-title" class="post-title">
                          Wishpond Review
                      </h1>
                      <span id="article-sub-title">Wishpond - Marketing Tool Suite | Creating and managing lead generation and sales pitching</span>
                    </div>
                    
                  
                  
<div class="content-main">

<section class="content-article" itemprop="articleBody">

<header>

<div class="post-video" >
<div class="vid" itemprop="video" itemscope itemtype="http://schema.org/VideoObject">
<iframe
width="800"
height="450"
src="https://www.youtube.com/embed/AtZGoueL4Vs"
frameborder="0"
allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
allowfullscreen
></iframe>

<meta itemprop="embedUrl" content="https://www.youtube.com/embed/AtZGoueL4Vs" />
<meta itemprop="thumbnailUrl" content="" />
<meta itemprop="description" content="Accept PayPal Checkout payments with Angular, React, or Vue" />
<meta itemprop="uploadDate" content="2019-06-23 06:44:00 -0700 -0700" />
<meta itemprop="publisher" content="Fireship" />
</div>
</div>
</header>



<p>In February 2019, the PayPal Checkout API received a much needed <a href="https://medium.com/paypal-engineering/launch-v2-paypal-checkout-apis-45435398b987">facelift</a> that brought massive improvements to the developer experience. The new <a href="https://developer.paypal.com/docs/api/overview/">v2 API</a> has detailed documentation on par with <a href="/tags/stripe">Stripe</a> and offers one of the smoothest paths to start accepting payments and/or subscriptions in a progressive web app. The following lesson will show you how to start accepting payments entirely from your frontend JavaScript code with PayPal Checkout with your choice of Angular, React, and Vue.</p>




<!-- <div class="box box-green">
<div class="box-icon"><svg aria-hidden="true" data-prefix="far" data-icon="money-check-alt" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" class="svgmoney-check-alt  "><path fill="currentColor" d="M608 32H32C14.33 32 0 46.33 0 64v384c0 17.67 14.33 32 32 32h576c17.67 0 32-14.33 32-32V64c0-17.67-14.33-32-32-32zm-16 400H48V80h544v352zM296 320h80c4.42 0 8-3.58 8-8v-32c0-4.42-3.58-8-8-8h-80c-4.42 0-8 3.58-8 8v32c0 4.42 3.58 8 8 8zm240-48h-80c-4.42 0-8 3.58-8 8v32c0 4.42 3.58 8 8 8h80c4.42 0 8-3.58 8-8v-32c0-4.42-3.58-8-8-8zm-240-32h240c4.42 0 8-3.58 8-8v-32c0-4.42-3.58-8-8-8H296c-4.42 0-8 3.58-8 8v32c0 4.42 3.58 8 8 8zm-161.28 17.72l42.19 11.44c4.19 1.14 7.09 4.55 7.09 8.3 0 4.8-4.5 8.7-10.06 8.7H147.6c-4.15 0-8.23-1.04-11.77-2.95-3.08-1.67-6.84-1.37-9.24 1.18l-12.07 12.73c-3.11 3.28-2.6 8.64 1.13 11.19 8.3 5.65 18.06 8.88 28.35 9.52V328c0 4.42 3.58 8 8 8h16c4.42 0 8-3.58 8-8v-10.25c22.18-1.1 40-18.57 40-40.3 0-18.17-12.62-34.28-30.72-39.17l-42.19-11.44c-4.19-1.14-7.09-4.55-7.09-8.3 0-4.8 4.5-8.7 10.06-8.7h26.34c4.15 0 8.23 1.04 11.77 2.95 3.08 1.66 6.84 1.37 9.24-1.18l12.07-12.73c3.11-3.28 2.6-8.64-1.13-11.19-8.3-5.65-18.06-8.88-28.35-9.52V168c0-4.42-3.58-8-8-8h-16c-4.42 0-8 3.58-8 8v10.25c-22.18 1.1-40 18.57-40 40.3 0 18.17 12.62 34.28 30.72 39.17z" ></path></svg></div>
<div class="box-content">
<p>If you&rsquo;re looking to implement a fullstack payment solution, check out the <a href="/courses/stripe">Stripe Payments Master Course</a>. Ironically, you can pay for it with PayPal if you prefer ??. Both PayPal and Stripe share similar APIs, so concepts from the course overlap both APIs.</p>

</div>

</div> -->

<h2>Table of Contents</h2>
<div id="table-of-contents" class="box">
<nav>
<ul>
<li class="first-list">
<ul class="flex-list">
<li class="inline-list"><a href="#about">About Wishpond</a>
<ul>
<li><a href="#description">Description</a></li>
<li><a href="#features">Features</a></li>
<li><a href="#additional">Additional</a></li>
</ul></li>
<li class="inline-list"><a href="#whatsgood">What's It Good For?</a>
<ul>
<li><a href="#usecases">Use Cases</a></li>
<li><a href="#benefits">Benefits</a></li>
<li><a href="#notgood">Not Good A</a></li>
</ul></li>
<li class="inline-list"><a href="#angular">Review</a>
<ul>
<li><a href="#generate-the-app">My Experience</a></li>
<li><a href="#add-the-paypal-script-tag">Who is it for?</a></li>
<li><a href="#payment-component">Summary</a></li>
</ul></li>
<li class="inline-list"><a href="#react">Alternatives</a></li>
<li class="inline-list"><a href="#vue">Score</a>
</nav>
</div>


<h2 id="live-demo">Live Demo</h2>




</section>


<aside class="toc"><nav id="TableOfContents">
<ul>
<li>
<ul>
<li><a href="#live-demo">Live Demo</a></li>
<li><a href="#initial-setup">Initial Setup</a>
<ul>
<li><a href="#paypal-credentials">PayPal Credentials</a></li>
<li><a href="#testing">Testing</a></li>
</ul></li>
<li><a href="#angular">Angular</a>
<ul>
<li><a href="#generate-the-app">Generate the App</a></li>
<li><a href="#add-the-paypal-script-tag">Add the PayPal Script Tag</a></li>
<li><a href="#payment-component">Payment Component</a></li>
</ul></li>
<li><a href="#react">React</a>
<ul>
<li><a href="#generate-the-app-1">Generate the App</a></li>
<li><a href="#payment-component-1">Payment Component</a></li>
</ul></li>
<li><a href="#vue">Vue</a>
<ul>
<li><a href="#generate-the-app-2">Generate the App</a></li>
<li><a href="#payment-component-2">Payment Component</a></li>
</ul></li>
</ul></li>
</ul>
 </nav></aside>
                      
 </div>
                  
</article>