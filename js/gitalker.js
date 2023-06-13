var gitalk = new Gitalk({
    clientID: '6bcdc43a9d28279113c6',
    clientSecret: 'ae259c5d3a63e62cfcd24194657c89e6921dd44b',
    repo: 'keyle777.github.io',
    owner: 'keyle777',
    admin: ['keyle777'],
    id: location.pathname,      // Ensure uniqueness and length less than 50
    distractionFreeMode: false  // Facebook-like distraction free mode
})
  
gitalk.render('gitalk-container')
