const fermerMenu = () => 
{
    let input = document.getElementById('menu-cb')
    input.checked = false  
    let fenetreNode = document.getElementById('menu-cote')
    fenetreNode.remove()
}
  
const changerEtatMenu = () => 
{
    let input = document.getElementById('menu-cb')
    let actif = input.checked
  
    if (actif) 
    {
        let fenetreNode = document.createElement('div')
        fenetreNode.id = 'menu-cote'
        fenetreNode.className = 'menu-cote'
        fenetreNode.addEventListener('click', fermerMenu)
        document.body.appendChild(fenetreNode)
    } else
        {
            let fenetreNode = document.getElementById('menu-cote')
            fenetreNode.remove()
        }
}

let input = document.getElementById('menu-cb');
input.addEventListener('click', changerEtatMenu);