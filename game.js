(function (){
    let isPause = false
    let animationId = null


    const car = document.querySelector('.car')
    const trees = document.querySelectorAll('.tree')
    
    const first = trees[0]
    console.log(getYCord(first));
    
    // const matrix = window.getComputedStyle(first).transform
    // const matrixElements = matrix.split(',')
    // const lastMtrElement = matrixElements[matrixElements.length - 1]
    // const cordY = 
    // console.log(lastMtrElement);
    
    
    function getYCord(element){
        const matrix = window.getComputedStyle(first).transform
        const matrixElements = matrix.split(',')
        const lastMtrElement = matrixElements[matrixElements.length - 1]
        const cordY = parseFloat(lastMtrElement)

        return cordY
    }
    
    

    animationId = requestAnimationFrame(startGame)

    function startGame () {
        // console.log('test', animationId);

        animationId = requestAnimationFrame(startGame)
        
    }



    const gameButton = document.querySelector('.game-button')
    gameButton.addEventListener('click', ()=> {
        isPause = !isPause
        if(isPause){
            cancelAnimationFrame(animationId)
            gameButton.children[0].style.display = 'none'
            gameButton.children[1].style.display = 'initial'
        }else {
            
            gameButton.children[0].style.display = 'initial'
            gameButton.children[1].style.display = 'none'
        }
    })
    
})();
