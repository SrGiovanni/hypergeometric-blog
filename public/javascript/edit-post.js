
async function editFormHandler(event) {
    event.preventDefault();
    
    const title = document.querySelector('input[name="post-title"]').value.trim();
    const content = document.querySelector('textarea[name="post-content]"').value.trim();
    const id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ];

    await fetch(`/api/posts/${id}`, {
        method: 'PUT',
        body: JSON.stringify({
          title,
          content
        }),
        headers: {
          'Content-Type': 'application/json'
        }
    });
};

document.querySelector('.edit-post-form').addEventListener('submit', editFormHandler);