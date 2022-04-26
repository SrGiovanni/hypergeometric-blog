
async function editFormHandler(event) {
    event.preventDefault();
    
    const title = document.querySelector('input[name="post-title"]').value.trim();
    const text = document.querySelector('textarea[name="post-text"]').value.trim();
    const id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ];

    await fetch(`/api/posts/${id}`, {
        method: 'PUT',
        body: JSON.stringify({
          title,
          post_text: text
        }),
        headers: {
          'Content-Type': 'application/json'
        }
    });
};

document.querySelector('.edit-post-form').addEventListener('submit', editFormHandler);