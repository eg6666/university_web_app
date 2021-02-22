const data = {
    cover: {
        text: 'Test 2',
        coverPicture: 'https://tirananews.al/wp-content/uploads/2020/05/politekniku-universiteti-tiranes.jpg'
    },
    head: [
        {
            type: 'Title',
            data: {
                color: '#ff0000',
                title: 'Titulli'
            }
        },
        {
            type: 'Paragraph',
            data: {
                bold: false,
                content: 'P1'
            }
        },
        {
            type: 'Paragraph',
            data: {
                bold: true,
                content: 'P2'
            }
        },
        {
            type: 'Paragraph',
            data: {
                bold: false,
                content: 'P3'
            }
        },
        {
            type: 'BigHero',
            data: {
                title: 'Titulli',
                image: 'https://tirananews.al/wp-content/uploads/2020/05/politekniku-universiteti-tiranes.jpg',
                button: {
                    title: 'Butoni',
                    link: '/',
                },
                info: [
                    {
                        title: 'Titulli',
                        extract: 'Ekstrakti'
                    },
                    {
                        title: 'Titulli',
                        extract: 'Ekstrakti'
                    }
                ],
            }
        }
    ]
}

export default data;