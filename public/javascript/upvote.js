async function upvoteClickHandler(event) {
    event.preventDefault();
  
    console.log('button clicked');
  }
  
  document.querySelector('.upvote-btn').addEventListener('click', upvoteClickHandler);

  async function upvoteClickHandler(event) {
    event.preventDefault();
  
    const id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ];
  
    console.log(id);
  }
  