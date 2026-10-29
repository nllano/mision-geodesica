var config = {
    style: 'https://tiles.openfreemap.org/styles/liberty',
    showMarkers: false,
    markerColor: '#3FB1CE',
    inset: true,
    legend: false,
    theme: 'dark',
    use3dTerrain: false,
    useCustomLayers: true,
    bookmarks: false,
    chapterReturn: false,
    title: 'Medir la Tierra',
    logo: '',
    subtitle: 'La Misión Geodésica Francesa al Ecuador (1736–1743)',
    byline: 'Por Felipe Valdez',
    footer: 'Fuentes: La Condamine (1745, 1751), Gallica BnF; Juan y Ulloa (1748), BNE. Creado con la plantilla <a href="https://github.com/digidem/maplibre-storymap" target="_blank">MapLibre Storytelling</a> y datos de <a href="https://openfreemap.org" target="_blank">OpenFreeMap</a>.',
    chapters: [
        {
            id: 'cap-0-apertura',
            alignment: 'left',
            hidden: false,
            title: '¿Qué forma tiene la Tierra?',
            image: './images/cap0_esferoide_newton.jpg',
            caption: 'Comparación de los dos modelos del esferoide terrestre, siglo XVIII. Dominio público.',
            description: 'En 1734, la Academia Real de Ciencias de París enfrentaba una disputa que dividía a la ciencia europea: ¿es la Tierra un esferoide achatado en los polos, como sostenía Isaac Newton, o achatado en el ecuador, como defendía la escuela de Jacques Cassini? La única forma de resolverlo era medir. La Academia decidió enviar dos expediciones simultáneas a los extremos del planeta: una a Laponia, dirigida por Maupertuis (1736–1737), y otra al territorio de la Real Audiencia de Quito, en el actual Ecuador.',
            location: {
                center: [0.0, 0.0],
                zoom: 1.6,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            mapInteractive: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};
            id: 'slug-style-id',
            alignment: 'left',
            hidden: false,
            title: 'Display Title',
            image: './path/to/image/source.png',
            caption: 'Source image caption',
            website: '<a href="" target="_blank">Website</a>',
            author: 'Digital Storyteller',
            legend: '<span style="font-size: 0.85em;"><em>Legend content</em></span>',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            location: {
                center: [35, 1],
                zoom: 3.5,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            spinGlobe: false,
            mapInteractive: true,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
                // {
                //      layer: 'countries-fill',
                //      opacity: 1
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'other-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Second Title',
            image: './path/to/image/source.png',
            description: 'Copy these sections to add to your story.',
            location: {
                center: [-79, 0],
                zoom: 5,
                pitch: 0,
                bearing: -90
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            mapInteractive: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'countries-fill',
                //     opacity: 0
                // }
            ],
            onChapterExit: []
        }
    ]
};
