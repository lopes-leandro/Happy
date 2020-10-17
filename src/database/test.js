const Database = require('./db');
const saveOrphanage = require('./saveOrphanage');

Database.then(async db => {

    // insert data into table
    // await saveOrphanage(db, {
    //     lat: "-27.222633",
    //     lng: "-49.6555874",
    //     name: "Lar dos Meninos",
    //     about: "Presta assistencia para criancas de 06 a 15 anos de idade que se encontre em situacao de risco e/ou vulnerabilidade social.",
    //     whatsapp: "994454645641",
    //     images: [
    //         "https://images.unsplash.com/photo-1595207011175-3d72f5a3b21c?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",

    //         "https://images.unsplash.com/photo-1598136490941-30d885318abd?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"
    //     ].toString(),
    //     instructions: "Venha se sentir a vontade e traga muito amor e paciencia para dar.",
    //     opening_hours: "Horario de visitas das 08h ate as 18h",
    //     open_on_weekends: "0"
    // })

    
    // consult table data
    const selectedOrphanages = await db.all("SELECT * FROM orphanages")
    console.log(selectedOrphanages)

    // consultar apenas um orphanato pelo id
    const orphanage = await db.all('DELETE FROM orphanages WHERE id = "4"')
    console.log(orphanage)
})