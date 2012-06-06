/*
* Ticker
* Visit http://createjs.com/ for documentation, updates and examples.
*
* Copyright (c) 2010 gskinner.com, inc.
* 
* Permission is hereby granted, free of charge, to any person
* obtaining a copy of this software and associated documentation
* files (the "Software"), to deal in the Software without
* restriction, including without limitation the rights to use,
* copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the
* Software is furnished to do so, subject to the following
* conditions:
* 
* The above copyright notice and this permission notice shall be
* included in all copies or substantial portions of the Software.
* 
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
* EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
* OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
* NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
* HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
* WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
* FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
* OTHER DEALINGS IN THE SOFTWARE.
*/

(function(n){var r=!1,i=null,t=function(){throw"Ticker cannot be instantiated.";};t.useRAF=i,t.animationTarget=i,t._listeners=i,t._pauseable=i,t._paused=r,t._inited=r,t._startTime=0,t._pausedTime=0,t._ticks=0,t._pausedTickers=0,t._interval=50,t._lastTime=0,t._times=i,t._tickTimes=i,t._rafActive=r,t._timeoutID=i,t.addListener=function(n,r){n!=i&&(t._inited||t.init(),t.removeListener(n),t._pauseable[t._listeners.length]=r==i?!0:r,t._listeners.push(n))},t.init=function(){t._inited=!0,t._times=[],t._tickTimes=[],t._pauseable=[],t._listeners=[],t._times.push(t._lastTime=t._startTime=t._getTime()),t.setInterval(t._interval)},t.removeListener=function(n){if(t._listeners!=i){var r=t._listeners.indexOf(n);r!=-1&&(t._listeners.splice(r,1),t._pauseable.splice(r,1))}},t.removeAllListeners=function(){t._listeners=[],t._pauseable=[]},t.setInterval=function(n){(t._interval=n,t._inited)&&t._setupTick()},t.getInterval=function(){return t._interval},t.setFPS=function(n){t.setInterval(1e3/n)},t.getFPS=function(){return 1e3/t._interval},t.getMeasuredFPS=function(n){return t._times.length<2?-1:(n==i&&(n=t.getFPS()|0),n=Math.min(t._times.length-1,n),1e3/((t._times[0]-t._times[n])/n))},t.setPaused=function(n){t._paused=n},t.getPaused=function(){return t._paused},t.getTime=function(n){return t._getTime()-t._startTime-(n?t._pausedTime:0)},t.getTicks=function(n){return t._ticks-(n?t._pausedTickers:0)},t._handleAF=function(n){t._rafActive=r,t._setupTick(),n-t._lastTime>=t._interval-1&&t._tick()},t._handleTimeout=function(){t.timeoutID=i,t._setupTick(),t._tick()},t._setupTick=function(){if(!t._rafActive&&t.timeoutID==i){if(t.useRAF){var r=n.requestAnimationFrame||n.webkitRequestAnimationFrame||n.mozRequestAnimationFrame||n.oRequestAnimationFrame||n.msRequestAnimationFrame;if(r){r(t._handleAF,t.animationTarget),t._rafActive=!0;return}}t.timeoutID=setTimeout(t._handleTimeout,t._interval)}},t._tick=function(){var r,n;t._ticks++;var u=t._getTime(),e=u-t._lastTime,f=t._paused;f&&(t._pausedTickers++,t._pausedTime+=e),t._lastTime=u;var s=t._pauseable,o=t._listeners.slice(),h=o?o.length:0;for(r=0;r<h;r++)(n=o[r],n==i||f&&s[r])||(n.tick?n.tick(e,f):n instanceof Function&&n(e,f));for(t._tickTimes.unshift(t._getTime()-u);t._tickTimes.length>100;)t._tickTimes.pop();for(t._times.unshift(u);t._times.length>100;)t._times.pop()},t._getTime=function(){return+new Date},n.Ticker=t})(window);
