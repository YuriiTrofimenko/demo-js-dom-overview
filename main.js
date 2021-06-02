(function foo () {
    /* document.querySelector('h2').addEventListener('mouseenter', (ev) => {
        // console.log(ev.target.style)
        // ev.target.style.backgroundColor
        ev.target.style['background-color'] = 'red'
        ev.target.style['color'] = 'green'
    })
    document.querySelector('h2').addEventListener('mouseleave', (ev) => {
        ev.target.style['background-color'] = 'white'
        ev.target.style['color'] = 'black'
    }) */
    const h1 = document.createElement('h1')
    h1.innerText = 'Hello'
    h1.addEventListener('click', (ev) => {
        alert('JS!')
    })
    const root = document.getElementById('root')
    root.append(h1)
    const p1 = document.createElement('p')
    p1.innerText = 'Do nostrud aute labore qui id tempor sint tempor aliqua eiusmod irure. Commodo est nostrud dolore dolore duis nisi elit et. Et fugiat incididunt magna nisi laboris irure enim ullamco cillum ex sint consectetur nostrud. Sunt excepteur cupidatat dolor excepteur veniam sit duis. Exercitation ea aliqua consequat Lorem consequat aliqua nostrud adipisicing proident ex anim id. Consequat sit proident commodo non do mollit. Cillum irure officia in Lorem adipisicing commodo duis est.'
    const p2 = document.createElement('p')
    p2.innerText = 'Do nostrud aute labore qui id tempor sint tempor aliqua eiusmod irure. Commodo est nostrud dolore dolore duis nisi elit et. Et fugiat incididunt magna nisi laboris irure enim ullamco cillum ex sint consectetur nostrud. Sunt excepteur cupidatat dolor excepteur veniam sit duis. Exercitation ea aliqua consequat Lorem consequat aliqua nostrud adipisicing proident ex anim id. Consequat sit proident commodo non do mollit. Cillum irure officia in Lorem adipisicing commodo duis est.'
    const divContent = document.createElement('div')
    divContent.append(p1)
    divContent.append(p2)
    root.append(divContent)
})();