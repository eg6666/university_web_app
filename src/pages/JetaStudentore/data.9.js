const data = {
    cover: {
        text: 'Jeta Studentore',
        coverPicture: "https://www.goshen.edu/wp-content/uploads/sites/7/2018/06/GC.Fall_.2017.860-web.jpg"

    },
    head: [

        {
            type: 'Paragraph',
            data: {
                bold: false,
                content: 'Ne Fakultetin e Teknologjise se Informacionit, vecse pervetesimit te njohurive te thelluara akademike,studenti ka mundesi per te qene i pranishem ne aktivitete nga me te ndryshmet, ne praktika te shumta, ne bashkepunime me studente te universiteteve te tjera brenda dhe jashte vendit.'
            }
        },
        {
            type: 'Title',
            data: {
                color: '#8B0000',
                title: 'Eksperiencat e studenteve te FTI'
            }
        },

        {
            type: 'Paragraph',
            data: {
                bold: true,
                content: 'Ne hapesiren e meposhtme paraqiten disa prezantime te studenteve qe kane studiuar ne Fakultetin e Teknologjise se Informacionit  .'
            }
        },
        {
            type: "SubjectCard",
            data: {
                title: "Studenti Emer Mbiemer ",
                content: "Ne Fakultetin e Teknologjise se Informacionit kam studiuar ne programin e studimeve Inxhinieri Informatike ne programin Bachelor ne vitet 2012-2015 dhe Master i Shkencave ne vitet 2015-2017. Studimi ne kete fakultet ka qene nje eksperience e vecante ......... .",
                titleBackground: "bg-green",
                contentBackground: "bg-lightgray",
                img: {
                    isOuterLink: true,
                    src: "data:image/jpeg;base64,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",
                    alt: "Foto Sherbime"
                }
            }
        },
        {
            type: "SubjectCard",
            data: {
                title: "Studenti Emer Mbiemer ",
                content: "Ne Fakultetin e Teknologjise se Informacionit kam studiuar ne programin e studimeve Inxhinieri Informatike ne programin Bachelor ne vitet 2012-2015 dhe Master i Shkencave ne vitet 2015-2017. Studimi ne kete fakultet ka qene nje eksperience e vecante ......... .",
                titleBackground: "bg-green",
                contentBackground: "bg-lightgray",
                img: {
                    isOuterLink: true,
                    src: "https://www.nssi.com/media/wysiwyg/images/2.jpg",
                    alt: "Foto Sherbime"
                }
            }
        },
        {
            type: "SubjectCard",
            data: {
                title: "Studenti Emer Mbiemer ",
                content: "Ne Fakultetin e Teknologjise se Informacionit kam studiuar ne programin e studimeve Inxhinieri Informatike ne programin Bachelor ne vitet 2012-2015 dhe Master i Shkencave ne vitet 2015-2017. Studimi ne kete fakultet ka qene nje eksperience e vecante ......... .",
                titleBackground: "bg-green",
                contentBackground: "bg-lightgray",
                img: {
                    isOuterLink: true,
                    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS05GqTBfGa8Y1V9Z2XuXkBxm54UFJ6vfCRVQ&usqp=CAU",
                    alt: "Foto Sherbime"
                }
            }
        },
        {
            type: 'Paragraph',
            data: {
                bold: false,
                content: 'Fakulteti i Teknologjise se Informacionit, si pjese e Universitetit Politeknik te Tiranes, i jep mundesine cdo studenti te perfitoje nga programi Erasmus+ ne universitetet me te cilat UPT ka nje marreveshje bashkepunimi, sic eshte Universiteti Teknologjik i Compiegne, France.'
            }
        },
        {
            type: 'BigHero',
            data: {
                title: 'Erasmus+ në Universitetin Teknologjik te Compiegne, France',
                image: 'https://tirananews.al/wp-content/uploads/2020/05/politekniku-universiteti-tiranes.jpg',
                button: {
                    title: 'Shiko me teper',
                    link: '/njoftime'
                },
                info: [{
                        title: 'Bachelor',
                        extract: 'Studentët duhet të jenë të regjistruar në programin e studimit Bachelor ne Inxhinieri Informatike, Bachelor në Inxhinieri Elektronike dhe Bachelor në Inxhinieri Telekomunikacioni, në Universitetin Politeknik të Tiranës'
                    },
                    {
                        title: 'Master i shkencave',
                        extract: 'Studentët duhet të jenë të regjistruar në programin e studimit Master i Shkencave ne Inxhinieri Informatike, Inxhinieri Elektronike, Inxhinieri Telekomunikacioni, në Universitetin Politeknik të Tiranës '
                    }
                ]
            }
        },
        {
            type: "Title",

            data: {
                title: "Keshillimi i karrieres",
            },
        },

        {
            type: 'BigHero',
            data: {
                image: 'https://bigblue.academy/images/image/bootcamp/carrer-support.jpg',
                button: {
                    isOuterLink: true,
                    title: 'Informacione Shtese',
                    link: 'https://www.upt.al/keshillimi-i-karrieres'
                },
                info: [{
                        title: 'Specialist për Këshillimin e Karrierës:',
                        extract: "Vilma Kume (UPT) , Email vkume@upt.al"
                    },
                    {
                        title: 'Specialisti për këshillimin e karrierës ka për detyrë:',
                        extract: '1.Ti shërbejë interesave dhe nevojave për zhvillim të karrierës së studentëve duke siguruar shërbime të ndryshme nëpërmjet këshillimit, konsultimeve dhe partneriteteve të qëndrueshme;'
                    },
                    {
                        extract: '2.Të këshilloj studentët e Universitetit Politeknik të Tiranës që diplomohen në një program të Ciklit të Parë, mbi mundësinë e studimeve në një program të Ciklit të Dytë në UPT apo universitete të tjera jashtë vendit; '
                    },
                    {
                        extract: '3.Të informojë vazhdimisht studentët për të gjitha shërbimet e asistencës që ofron Zyra e Këshillimit të Karrierës;'
                    },
                    {
                        extract: '4.Informon studentët të cilët kanë përfunduar studimet në ciklin e arsimit të mesëm për programet e studimit që ofron UPT, kriteret e pranimit si dhe politikat e institucionit;'
                    },
                    {
                        extract: '5.Identifikon dhe informon studentët mbi mundësitë edukative (intershipe, trajnime, bursa etj.);'
                    },
                    {
                        extract: '6.Të ndihmojë studentët në përgatitjen e CV – ve, letrave të interesit për punë si dhe paraqitjes në intervista të ndryshme pune.'
                    },
                    {
                        extract: '7.Mban lidhje të vazhdueshme me kompanitë e ndryshme brenda dhe jashtë vendit si dhe analizon kërkesat e tyre për forcë pune;'
                    }
                ]
            }
        },
    ]


}

export default data;
