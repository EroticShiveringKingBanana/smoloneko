!function(){function e(e,t){e.target.dispatchEvent(new MouseEvent("mousemove",{view:window,clientX:t.clientX,clientY:t.clientY,bubbles:!0}))}["touchstart","touchmove"].forEach(t=>addEventListener(t,n=>{t=="touchmove"||n.target.style.backgroundImage?.includes("oneko.gif")?n.preventDefault():0,e(n,n.touches[0])},{passive:!1}))}();