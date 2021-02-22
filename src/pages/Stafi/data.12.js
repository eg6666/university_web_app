const data = {
    cover: {
        text: "Stafi",
        coverPicture: "https://tirananews.al/wp-content/uploads/2020/05/politekniku-universiteti-tiranes.jpg"
    },
    head: [
        {
            type: "Paragraph",
            data: {
                content: "FTI ka në përbërje të tij një staf akademik të kualifikuar dhe me eksperiencë  në mësimdhënie, si dhe të rinj në proces kualifikimi shkencor dhe ngritje profesionale akademike. " +
                    "Stafi akademik i ftuar synohet të përzgjidhet nga  kandidatë që kanë qenë më përpara pjesë e stafit ose kandidatë që aktualisht punojnë në institucione publike apo private, në fushat e interesit dhe që kanë një eksperiencë në mësimdhënie."
            },
        },
        {
            type: "StaffCard",
            data: {
                name:"Elinda",
                degree:"Dekan",
                profilePicture:"https://unyt.edu.al/wp-content/uploads/2018/11/Professor_M-200x200.jpg",
                email:"elinda@fti.edu.al",
                profileButton:true,
                button: {
                    isOuterLink:"/",
                    title:"Lexo me teper"
                }
            },
        },
        {
            type: "StaffCard",
            data: {
                name:"Indrit",
                degree:"Zv. Dekan",
                profilePicture:"https://unyt.edu.al/wp-content/uploads/2018/11/Professor_M-200x200.jpg",
                email:"indrit@fti.edu.al",
                profileButton:true,
        button: {
            isOuterLink:"/",
            title:"Lexo me teper"
        }
            },
        },
        {
            type: "StaffCard",
            data: {
                name:"Evis",
                degree:"Zv. Dekan",
                profilePicture:"https://unyt.edu.al/wp-content/uploads/2018/11/Professor_M-200x200.jpg",
                email:"evis@fti.edu.al",
                profileButton:true,
                button: {
                    isOuterLink:"/",
                    title:"Lexo me teper"
                }
            },
        },
    ]
}

export default data;
