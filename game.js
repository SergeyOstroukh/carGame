(function (){
    let isPause = false
    let animationId = null

    const speed = 3

    const car = document.querySelector('.car')
    const trees = document.querySelectorAll('.tree')
    
    const firstTree = trees[0]

    animationId = requestAnimationFrame(startGame)
    
    function startGame () {
        treesAnimation()

        animationId = requestAnimationFrame(startGame)
        
    }


    function treesAnimation () {
        const newCord = getYCord(firstTree) + speed
        firstTree.style.transform = `translateY(${newCord}px)`
    } 
    

    

    function getYCord(element){
        const matrix = window.getComputedStyle(element).transform
        const matrixElements = matrix.split(',')
        const lastMtrElement = matrixElements[matrixElements.length - 1]
        const cordY = parseFloat(lastMtrElement)

        return cordY
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
