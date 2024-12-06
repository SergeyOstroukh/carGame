(function (){
    let isPause = false
    let animationId = null

    const speed = 3

    const car = document.querySelector('.car')
    const trees = document.querySelectorAll('.tree')
    
    const firstTree = trees[0]

    animationId = requestAnimationFrame(startGame)

    const coordsTree1 = getCords(firstTree)
    
    
    function startGame () {
        treesAnimation()

        animationId = requestAnimationFrame(startGame)
        
    }


    function treesAnimation () {

        const newCordY = coordsTree1[0] + speed
        coordsTree1[0] = newCordY
        firstTree.style.transform = `translate(${coordsTree1[1]}px, ${newCordY}px)`; 
    } 
    

    function getCords(element){
        const matrix = window.getComputedStyle(element).transform
        const matrixElements = matrix.split(',')
        const yElement = matrixElements[matrixElements.length - 1]
        const xElement = matrixElements[matrixElements.length - 2]
        const cordY = parseFloat(yElement)
        const cordX = parseFloat(xElement)

        return [cordY, cordX]
    }

    const gameButton = document.querySelector('.game-button')
    gameButton.addEventListener('click', ()=> {
        isPause = !isPause
        if(isPause){
            cancelAnimationFrame(animationId)
            gameButton.children[0].style.display = 'none'
            gameButton.children[1].style.display = 'initial'
        }else {
            animationId = requestAnimationFrame(startGame)
            gameButton.children[0].style.display = 'initial'
            gameButton.children[1].style.display = 'none'
        }
    })
    
})();
