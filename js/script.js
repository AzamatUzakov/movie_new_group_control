import { movies } from "./db.js";
console.log(movies);
let ul = document.querySelector('.promo__interactive-title')

let sort
function movi(arr) {


    for (let item of movies) {
        let li = document.createElement('li')
        let delet = document.createElement('img')
        let promo_bg = document.querySelector('.promo__bg')

        let comedy = document.querySelector('.promo__genre')
        let name_comedy = document.querySelector('.promo__title')
        let story = document.querySelector('.promo__descr')
        let IMDb = document.querySelector('.IMDb')
        let cinema = document.querySelector('.cinema')

        ul.classList.add('promo__interactive-list')
        li.classList.add('promo__interactive-item')
        delet.classList.add('delete')

        li.innerHTML = item.Title



        ul.append(li)
        li.append(delet)

        delet.onclick = () => {
            let filtered = arr.filter(el => el.ID === item.ID)
            li.remove()
            
            movi(filtered)
        }

        console.log(cinema);

        li.onclick = () => {
            promo_bg.style.backgroundImage = `url(${item.Poster})`
            comedy.innerHTML = item.Genre
            name_comedy.innerHTML = item.Title
            story.innerHTML = item.Plot
            IMDb.innerHTML = `IMDb: ${item.imdbRating}`
            cinema.innerHTML = `Metascore: ${item.Metascore}`

        }

    }
}

let result = movies.sort(function (vote1, vote2) {
    if (vote1.Title > vote2.Title) return 1;
    if (vote1.Title < vote2.Title) return -1;
})
movi(result)
