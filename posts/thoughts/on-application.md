---
title: on application
date: nov 08 2020
tldr: putting knowledge into practice.
---

*Note: this entry was written regarding the [earlier version](https://web.archive.org/web/20220526001917/https://www.jinyoung.xyz/) of this blog*

Perhaps my favourite aspect of computer programming is the ability to immediately apply my knowledge onto real-life projects, à la web. 

If you were a, say, biomedical researcher or a mechanical engineer, you would require some kind of physical infrastructure (in the form of a medical laboratory or a machine shop) in order to incubate and materialise your craft. 

Even outside the realm of STEM, if you work in finance or international development, you may be pressed on things like capital or fundraising.

In other words, your ideas are bound by the constraints of the physical world. 

As a counter perspective, it often amazes me how unhindered the field of software engineering is when it comes to the act of creating, much less the idea of deploying an individual creation to a wide-reaching platform like the internet.

All you need is a text editor/IDE, internet connection, and some programming language(s) and frameworks to structure and consolidate your thoughts onto the computer's logic. 

Despite the growing pains that come from the never-ending quest for knowledge, I have gotten to appreciate how one can straight away apply their newfound knowledge onto a tangible creation. 

For instance, I finally learned how to work with APIs and applied my findings to this website.

The idea was to work with [OpenWeatherMap](https://openweathermap.org/), whose API provides realtime weather information that corresponds to the client location (i.e. where the site visitor is connecting from). 

Incorporating the ```<APIKey>```, I firstly pulled some data from OpenWeatherMap by calling its API:
```javascript
function getWeather(lat, lng) {
    fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=<APIKey>&units=metric`
    )
    .then(function(response) {
        return response.json();
    })
```
And the data was received in the following JSON format:  
```json
{"coord":{"lon":-82.6,"lat":35.57},"weather":[{"id":701,"main":"Mist","description":"mist","icon":"50d"}],"base":"stations","main":{"temp":21.28,"feels_like":24.14,"temp_min":19.44,"temp_max":22.78,"pressure":1016,"humidity":100},"visibility":6437,"wind":{"speed":2.1,"deg":160},"clouds":{"all":90},"dt":1605118449,"sys":{"type":1,"id":3351,"country":"US","sunrise":1605096159,"sunset":1605133589},"timezone":-18000,"id":4453066,"name":"Asheville","cod":200}
```
I then cherrypicked a few datapoints, such as ```temp``` and ```name```, and assigned them into variables ```temperature``` and ```place```. I also made a fahrenheit conversion and assigned it to ```temperature_us```:
```javascript
.then(function(json) {
    const temperature = json.main.temp.toFixed(0); //celsius, rounded up
    const place = json.name.toLowerCase(); //lowercase for consistency
    const temperature_us = ((temperature * 9/5) + 32).toFixed(0);
```
I then wrote in a JavaScript template literal with the aforemetioned variables put in ${placeholders}, which will be the format of the displayed weather info.:
```javascript
weather.innerText = `${temperature}°c / ${temperature_us}°f in ${place}`;
```
Lastly, with the JavaScript logic written, the only thing that was left was to tie it to the HTML backbone:
```html
<span id="weather"></span>
<script src="./assets/js/weather.js" type="text/javascript" defer ></script>
```

And voilá!

As a visitor accessing [jinyoung.xyz](https://www.jinyoung.xyz/), you will first be prompted to grant location access (as per your browser's security protocol). If you grant access, the site will display a line of weather information for your location, right below the navigation bar:

[click here for illustration](https://photos.app.goo.gl/iZwR2BmCakMnrqrz9)

Looking back, the past month of learning JavaScript has been the toughest personal learning curve in my programming journey (more on this in my previous entry, [On Patience](https://www.jinyoung.xyz/code/on-patience)). 

I cannot be more excited at just how much more I'll be able to do with programming, with my growing understanding of JavaScript. :)
