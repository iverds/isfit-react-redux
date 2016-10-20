export function get() {
    return fetch("http://localhost:4000/items").then(e => e.json());
}

export function create(title) {
    return fetch("http://localhost:4000/items", {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            title
        })
    }).then(e => e.json());
}