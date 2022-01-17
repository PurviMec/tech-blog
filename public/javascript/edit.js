const editFormHandler = async function(e) {
    e.preventDefault();

    
    const titleEl = document.getElementById('post-title');
    const bodyEl = document.getElementById('post-body');
    const blogId = document.getElementById('post-id')

    fetch("/api/blog/" + blogId.value, {
        method: "put", 
        body: JSON.stringify({
            title: titleEl.value,
            body: bodyEl.value
        }),
        headers: { "Content-Type": "application/json"}
    })
        .then(function() {
            document.location.replace("/dashboard");
        })
        .catch(err => console.log(err))
}

document.querySelector("#edit-post-form").addEventListener("submit", editFormHandler);