console.log('Games started loading')
var games = [
    {
      id: 'cookieclicker',
      title: 'Cookie Clicker',
      description: 'Cookie Clicker is aura',
      url:  '/' + 'assets/gxmes/cookie-clicker/',
      image: 'https://cdn.discordapp.com/icons/339131488111034389/73f15cd93d96504af9877a53816d110c.png'
    },
    {
      id: 'flappy2048',
      title: 'Flappy 2048',
      description: 'i wanna touch someone',
      url:  '/' + 'assets/gxmes/flappy-2048/',
      image: '/assets/gxmes/flappy-2048/flappy2048.jpg'
    },
    {
      id: 'roadblocks',
      title: 'Roadblocks',
      description: 'fucker',
      url:  '/assets/gxmes/roadblocks/',
      image: '/assets/gxmes/roadblocks/roadblocks.jpg'
    },
    {
      id: 'uv',
      title: 'Ultraviolet',
      description: 'BruhProx.\nIf it says Not Found then right click and press refresh frame',
      url: 'https://bruhprox.pages.dev/',
      image: "https://raw.githubusercontent.com/titaniumnetwork-dev/Ultraviolet-Static/main/public/uv.png"
    },
    {
      id: 'run2',
      title: 'Run 2',
      description: 'the run aura',
      url:  '/' + 'assets/gxmes/run2/',
      image: 'assets/gxmes/run2/Run2.jpg'
    },
    {
      id: 'ducklife4',
      title: 'Duck Life 4',
      description: 'duck lore',
      url:  '/' + 'assets/gxmes/ducklife4',
      image:  '/assets/gxmes/ducklife4/splash.jpg'
    },
    {
      id: '2048',
      title: '2048',
      url:  '/' + 'assets/gxmes/2048/',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/2048_logo.svg/220px-2048_logo.svg.png'
    },
    {
      id: 'ltf2',
      title: 'Learn To Fly 2',
      description: 'fly aura',
      url:  '/' + 'assets/gxmes/ltf2/',
      image: 'assets/gxmes/ltf2/gameicon.png'
    },
    {
      id: 'ltf',
      title: 'Learn To Fly',
      description: 'fucking sequel',
      url:  '/' + 'assets/gxmes/ltf/',
      image: 'assets/gxmes/ltf/gameicon.png'
    },
    {
      id: 'retro',
      title: 'Retro Bowl',
      description: 'grown men touching each other',
      url:  '/' + 'assets/gxmes/retrobowl/',
      image: 'assets/gxmes/retrobowl/img/icon.jpg'
    },
    {
      id: 'eggy',
      title: 'Eggy Car',
      description: 'Egg aura',
      url:  '/' + 'assets/gxmes/eggycar/',
      image: 'assets/gxmes/eggycar/gameicon.png'
    },
    {
      id: 'snowrider',
      title: 'Snow Rider 3D',
      description: 'concussion ahh',
      url:  '/' + 'assets/gxmes/snowrider3d/',
      image: 'assets/gxmes/snowrider3d/gameicon.png'
    },
    {
      id: 'ducklife',
      title: 'Duck Life 1',
      description: 'duck life again',
      url:  '/' + 'assets/gxmes/ducklife1/',
      image: 'assets/gxmes/ducklife1/ducklife.png'
    },
    {
      id: 'ducklife2',
      title: 'Duck Life 2',
      description: 'how many of these are there',
      url:  '/' + 'assets/gxmes/ducklife2/',
      image: 'assets/gxmes/ducklife2/ducklife2.png'
    },
    {
      id: 'ducklife3',
      title: 'Duck Life 3: Evolution',
      description: 'so many of these',
      url:  '/' + 'assets/gxmes/ducklife3/',
      image: 'assets/gxmes/ducklife3/duck.png'
    },
    {
      id: 'smashkarts',
      title: 'Smash Karts',
      description: 'Smash Karts game about smashing karts',
      url:  '/' + 'assets/gxmes/smashkarts/',
      image: 'assets/gxmes/smashkarts/gameicon.png'
    },
    {
      id: 'subway',
      title: 'Subway Surfers',
      description: 'my dreams at 69:420 am be like',
      url:  '/' + 'assets/gxmes/subway-surfers/',
      image: 'assets/gxmes/subway-surfers/gameicon.png'
    },
    {
      id: 'doge',
      title: 'Doge Miner',
      description: 'capitalism simulator',
      url:  '/' + 'assets/gxmes/dogeminer/',
      image: 'assets/gxmes/dogeminer/gameicon.png'
    },
    {
      id: 'doge2',
      title: 'Doge Miner 2',
      description: 'why so many seuqels',
      url:  '/' + 'assets/gxmes/dogeminer2/',
      image: 'assets/gxmes/dogeminer2/gameicon.png'
    },
    {
      id: 'flappy',
      title: 'Flappy Bird',
      description: 'bird go booom',
      url:  '/' + 'assets/gxmes/flappybird/',
      image: 'assets/gxmes/flappybird/flappy.png'
    },
    {
      id: 'monkeymart',
      title: 'MonkeyMart',
      description: 'afk grinding ahh game',
      url:  '/' + 'assets/gxmes/monkeymart/',
      image: 'assets/gxmes/monkeymart/gameicon.png'
    },
    {
      id: 'ovo',
      title: 'OvO',
      description: 'goon'
      url:  '/' + 'assets/gxmes/ovo/',
      image: 'assets/gxmes/ovo/gameicon.png'
    },
    {
      id: 'duckspace',
      title: 'Duck Life Space',
      description: 'Duck Life: Space is a duck racing game with a galactic story and theme. An alien from outer space has nabbed your trophy, and you need to go on a quest through space to get it back! Enjoy a plethora of new mini-games and races along the way.',
      url:  '/' + 'assets/gxmes/ducklifespace/duck5/',
      image: 'assets/gxmes/ducklifespace/gameicon.png'
    },
    {
      id: 'ovo2',
      title: 'OvO 2',
      description: 'OvO 2 is an exciting and immersive video game that takes players on a thrilling journey through a captivating virtual world. This sequel to the original OvO',
      url:  '/' + 'assets/gxmes/ovo2/',
      image: 'assets/gxmes/ovo2/gameicon.png'
    },
    {
      id: 'cookie',
      title: 'Cookie Clicker',
      description: 'Cookie Clicker is a 2013 incremental game created by French programmer Julien "Orteil" Thiennot. The user initially clicks on a big cookie on the screen, earning a single cookie per click. ',
      url:  '/' + 'assets/gxmes/cookie-clicker/',
      image: 'assets/gxmes/cookie-clicker/gameicon.png'
    },
    {
      id: '10min',
      title: '10 Minutes Till Dawn',
      description: 'In this roguelite survival game, select from a variety of upgrades to create a unique and overpowered builds every run.',
      url:  '/' + 'assets/gxmes/10-minutes-till-dawn/',
      image: 'assets/gxmes/10-minutes-till-dawn/gameicon.png'
    },
    {
      id: 'slope',
      title: 'Slope',
      description: 'Play Slope Game, an endless space run game. Drive a ball in the 3D running game in Slope Game. Easy to controls, high speed, and addictive gameplay.',
      url:  '/' + 'assets/gxmes/slope/',
      image: 'assets/gxmes/slope/gameicon.png'
    },
    {
      id: 'slope2',
      title: 'Slope 2',
      description: 'Slope 2 is one of the most exciting endless run games. Control your ball in a high-speed slope race and see how far you can go, be the top on the leader board',
      url:  '/' + 'assets/gxmes/slope-2/',
      image: 'assets/gxmes/slope-2/gameicon.png'
    },
    {
      id: 'slopeball',
      title: 'Slope Ball',
      description: 'Slope Ball is a fun running game for singleplayer. Your task is to jump over the obstacles and reach the destination to move on to the next level.',
      url:  '/' + 'assets/gxmes/slope-2/',
      image: 'assets/gxmes/slope-ball/gameicon.png'
    },
    {
      id: 'drivemad',
      title: 'Drive Mad',
      description: 'Drive Mad is a car game where you drive on a track filled with obstacles. Your aim is to reach the finish line in one piece. You have to balance your speed so your car doesnt flip over. This is harder than it sounds, as there are many thrilling and creative stunts and obstacles for you to enjoy.',
      url:  '/' + 'assets/gxmes/drive-mad/',
      image: 'assets/gxmes/drive-mad/gameicon.png'
    },
    {
      id: '1v1lol',
      title: '1v1 Lol',
      description: 'Discover 1v1, the online building simulator & third person shooting game. Battle royale, build fight, box fight, zone wars and more game modes to enjoy!',
      url:  '/' + 'assets/gxmes/1v1lol/',
      image: 'assets/gxmes/1v1lol/gameicon.png'
    },
    {
      id: 'jetpack',
      title: 'Jetpack Joyride',
      description: 'Jetpack Joyride is a 2011 side-scrolling endless runner action video game created by Halfbrick Studios. It was released for iOS devices on the App Store on September 1, 2011 and has been ported to other systems.',
      url:  '/' + 'assets/gxmes/jetpack-joyride/',
      image: 'assets/gxmes/jetpack-joyride/gameicon.png'
    },
    {
      id: '1',
      title: '1',
      description: 'Experience the opposite of 2048 in this fun parody game!',
      url:  '/' + 'assets/gxmes/1/',
      image: 'assets/gxmes/1/gameicon.png'
    },
    {
      id: 'hexgl',
      title: 'HexGL',
      description: 'HexGL is a futuristic, fast-paced racing game built by Thibaut Despoulain using HTML5, Javascript and WebGL and a tribute to the original Wipeout and F-Zero series.',
      url:  '/' + 'assets/gxmes/hexgl/',
      image: 'assets/gxmes/hexgl/gameicon.png'
    },
    {
      id: 'goi',
      title: 'Getting Over It',
      description: 'Play Getting Over It with the Scratch Cat!',
      url:  '/' + 'assets/gxmes/gettingoverit/',
      image: 'assets/gxmes/gettingoverit/splash.bmp'
    },
    {
      id: 'adr',
      title: 'A Dark Room',
      description: 'A Dark Room is an open-source text-based role-playing game. It was originally published for web browsers by Canadian indie studio Doublespeak Games on June 10, 2013. Later that year, it was released in the App Store for iOS devices.',
      url:  '/' + 'assets/gxmes/adarkroom/',
      image: 'assets/gxmes/adarkroom/adr.png'
    },
    {
      id: 'amongus',
      title: 'Among Us',
      description: 'Among Us is a 2018 online multiplayer social deduction game developed and published by American game studio Innersloth. The game was inspired by the party game Mafia and the science fiction horror film The Thing.',
      url:  '/' + 'assets/gxmes/among-us/',
      image: 'assets/gxmes/among-us/amongus.png'
    },
    {
      id: 'gameinside',
      title: 'Game Inside a Game Inside a Game inside a Game',
      description: 'You wanna play a game? Lets play a game inside a game inside a game inside a game inside a game inside a game inside a game inside a game',
      url:  '/' + 'assets/gxmes/game-inside/',
      image: 'assets/gxmes/game-inside/game-inside.png'
    },
    {
      id: 'bigred',
      title: 'Big Red Button',
      description: "Don't press it",
      url:  '/' + 'assets/gxmes/bigredbutton/',
      image: 'assets/gxmes/bigredbutton/bigredbutton.png'
    },
    {
      id: 'con3',
      title: 'Connect 3',
      description: "Oh, make sure to connect 3 this time!",
      url:  '/' + 'assets/gxmes/connect3/',
      image: 'assets/gxmes/connect3/connect3.png'
    }
  ]

  console.log('The games have loaded.')
