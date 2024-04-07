// code your solution here
function superbowlWin(wins) {
    const win = wins.find(win => win.result  === 'W');
        return win? win.year : undefined

    }

