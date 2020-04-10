var config = {
    style: 'mapbox://styles/branigan/cjzsvonse027m1co4nkxp13b3',
    accessToken: 'pk.eyJ1IjoibWJ4c29sdXRpb25zIiwiYSI6ImNrMm01aG9hdTBlZGwzbXQ1ZXVrNHNmejAifQ.QHQA0N6XPWddCXtvoODHZg',
    showMarkers: false,
    theme: 'light',
    alignment: 'right',
    title: 'Equitable City & Affordable Food',
    subtitle: 'Equity and Accessibility in NYC',
    byline: 'Shi Tang | Esther Kim',
    footer: '',
    chapters: [
        {
            id: 'phl',
            title: 'NYC`food insecurity level',
            image: '',
            description: 'According to 2019 city council report, New York City’s food insecurity rate is recorded to be higher than the national average by is 12%. Estimated 1.09 million New Yorkers are in some sort of "food insecure," state meaning that they had difficulty at some time during the year access¬ing enough food due to a lack of resources. To combat this food insecurity, approximately 20% of New Yorker rely on SNAP, also known as food stamps, a form of federal monthly nutrition assistance to buy healthy food.',
            location: {
                center: [-74.06378, 40.74733],
                zoom: 11.18,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [
                {
                    layer: 'phl-city-limits',
                    opacity: .45
                }
            ],
            onChapterExit: [
                {
                    layer: 'phl-city-limits',
                    opacity: 0
                }
            ]
        },
        {
            id: 'bike-lanes',
            title: 'South Bronx',
            image: '',
            description: 'While this reliance on federal assistance is relatively high in the city, the numbers and experience vary from district to district. As shown in the both of the maps, South Bronx, where the majority of residents are low-income and people of color are the most vulnerable. They have highest proportion of respondents who said they do not have a regular access to fruits and vegetable. This explains the surprising statistics that says 95% of adults in this area have type 2 diabetes, a food born illness. sections to add to your story.',
            location: {
                center: [-73.87178, 40.85897],
                zoom: 13.27,
                pitch: 55.50,
                bearing: -7.20
            },
            onChapterEnter: [
                {
                    layer: 'phl-bike-network',
                    opacity: 1
                }
            ],
            onChapterExit: []
        },
    ]
};
