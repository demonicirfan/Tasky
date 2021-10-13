const taskContainer = document.querySelector('.task__container');

const newCard = ({ id, imageUrl, taskTitle, taskDescription }) => `
<!-- card -->
<div class="col-md-4 col-lg-6" id=${id}>
  <div class="card">
    <div class="card-header d-flex justify-content-end">
      <button type="button" class="btn btn-outline-primary">
        <i class="fa-solid fa-pencil"></i>
      </button>
      <button type="button" class="btn btn-outline-danger">
        <i class="fa-solid fa-trash-can"></i>
      </button>
    </div>
    <img
      src=${imageUrl}
      alt="..."
      class="card-img-top"
    />
    <div class="card-body">
      <h5 class="card-title">${taskTitle}</h5>
      <p class="card-text">
       ${taskDescription}
      </p>
      <span class="badge bg-primary">New</span>
    </div>
    <div class="card-footer">
      <button type="button" class="btn btn-outline-primary float-end">
        Primary
      </button>
    </div>
  </div>
</div>`;

const saveChanges = () => {
  const taskData = {
    id: `${Date.now()}`, //unique number for card id
    imageUrl: document.getElementById('imageurl').value,
    taskTitle: document.getElementById('tasktitle').value,
    taskType: document.getElementById('tasktype').value,
    taskDescription: document.getElementById('taskdescription').value,
  };

  const createNewCard = newCard({ taskData });

  taskContainer.insertAdjacentHTML('beforeend', createNewCard);
};
