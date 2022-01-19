const commentFormHandler = async function(e) {
    e.preventDefault();

    //const blogId = document.querySelector('input[name="post-id"]').value;
    const blogId = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
      ];
    const body = document.querySelector('textarea[name="comment-body"]').value.trim();
    
    if(body) {
        const response = await fetch ('/api/comment', {
            method: 'POST',
            body: JSON.stringify({
                blogId,
                body
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if (response.ok) {
            document.location.reload();
          } else {
            alert(response.statusText);
          }
    }
};

document
.querySelector('#new-comment-form')
.addEventListener('submit', commentFormHandler);