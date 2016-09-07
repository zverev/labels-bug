window.addEventListener('load', () => {
    const map = L.map(document.body).setView([48.69481302629451, 44.7007942199707], 12)

    map.setActiveArea({
        border: '1px solid red',
        position: 'absolute',
        top: '50px',
        left: '50px',
        right: '50px',
        bottom: '50px'
    })

    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png').addTo(map)

    L.gmx.loadLayer('99c2b4dcaba69bae3c6201e87d9b81f2', '65D4006EAABD4F4DBB938BD0AE4ADD9A').then((layer) => {
        map.addLayer(layer)
    }, console.error)

    window.map = map
})
