const topPost = document.getElementById("top-post");
const latestPosts = document.getElementById("latest-posts");

let dev = false;
let apiBaseURL = "https://api.devgoldy.xyz/goldy-exe/v1"
let cdnBaseURL = "https://api.devgoldy.xyz/goldy-exe/cdn"

interface PartialPost {
    id: number;
    name: string;
    thumbnail: string | null;
    tags: string[];
    date_added: string;
}

fetch("/dev").then((response: Response) => {
    if (response?.ok) { dev = true }

    if (dev) {
        apiBaseURL = "http://127.0.0.1:8000";
        cdnBaseURL = "http://127.0.0.1:8001";
    }

    fetch(apiBaseURL + "/posts").then((response) => {
        response.json().then((jsonArray: Array<PartialPost>) => {
            let key: keyof typeof jsonArray;

            for (key in jsonArray) {
                const hyperlink = document.createElement("a");
                const article = document.createElement("article");
                const title = document.createElement("h2");
                const datePosted = document.createElement("h4")
                const thumbnail = document.createElement("img");
                const figure = document.createElement("figure");
                const bottomDiv = document.createElement("div");

                const post = jsonArray[key];

                title.innerText = post.name;
                datePosted.innerText = new Date(post.date_added).toDateString().slice(3);
                hyperlink.href = "./post/" + post.id;

                bottomDiv.append(title, datePosted);

                if (post.thumbnail != null) {
                    thumbnail.src = cdnBaseURL + post.thumbnail;
                } else {
                    thumbnail.src = "./image.png";
                    thumbnail.style.filter = "saturate(30%)";
                }

                figure.appendChild(thumbnail);

                if (key == 0) {
                    let link = hyperlink.cloneNode(true)
                    link.appendChild(figure.cloneNode(true));
                    link.appendChild(bottomDiv.cloneNode(true));

                    topPost?.appendChild(link);
                }

                article.append(figure, bottomDiv);
                hyperlink.append(article);
                latestPosts?.appendChild(hyperlink);
            }

        });

    })
})

