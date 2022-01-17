const deletePostHandler = async function (e) {
    console.log('e');
    e.preventDefault();

    fetch('/api/blog', + blogId.value, {
        method: 'delete'
    })
    .then(function(){
        document.location.replace('/dashboard');
    })
    .catch(err => console.log(err))
}

document.querySelector("#delete-btn").addEventListener("click", deletePostHandler);