document.addEventListener('DOMContentLoaded', function () {
    let items = document.querySelectorAll('.item');
    const droppableArea = document.querySelector('.droppable');
    const resetBtn = document.getElementById('resetBtn');

    // Add event listeners for draggable items
    items.forEach(item => {
        item.addEventListener('dragstart', dragStart);
        item.addEventListener('dragend', dragEnd);
    });

    // Add event listeners for droppable area
    droppableArea.addEventListener('dragenter', dragEnter);
    droppableArea.addEventListener('dragover', dragOver);
    droppableArea.addEventListener('dragleave', dragLeave);
    droppableArea.addEventListener('drop', drop);

    // Reset button event listener
    resetBtn.addEventListener('click', reset);

    let draggedItem = null;

    // Drag Functions
    function dragStart() {
        draggedItem = this;
        setTimeout(() => {
            this.style.display = 'none';
        }, 0);
    }

    function dragEnd() {
        draggedItem.style.display = 'block';
        draggedItem = null;
    }

    // Drop Functions
    function dragEnter(e) {
        e.preventDefault();
        droppableArea.classList.add('highlight');
    }

    function dragOver(e) {
        e.preventDefault();
    }

    function dragLeave() {
        droppableArea.classList.remove('highlight');
    }

    function drop() {
        droppableArea.classList.remove('highlight');
        if (draggedItem) {
            droppableArea.appendChild(draggedItem);
            showMessage('Item dropped successfully!');
        }
    }

    // Reset Function
    function reset() {
        droppableArea.innerHTML = '';
        document.getElementById('container1').innerHTML = `
        <div class="item" draggable="true">Item 1</div>
        <div class="item" draggable="true">Item 2</div>
        <div class="item" draggable="true">Item 3</div>
        <div class="item" draggable="true"><img
        src="https://img.freepik.com/free-photo/back-view-crowd-fans-watching-live-performance-music-concert-night-copy-space_637285-544.jpg?w=2000" />
        </div>
        <div class="item" draggable="true"><img
                src="https://images.cnbctv18.com/wp-content/uploads/2022/07/Cricket-Shutterstock-1019x573.jpg" />
        </div>
        <div class="item" draggable="true"><img
                src="https://assets.traveltriangle.com/blog/wp-content/uploads/2018/09/swiss-alps.jpg" />
        </div>
        <div class="item" draggable="true"><img
                src="https://cdn.sandals.com/beaches/v12/images/general/destinations/home/beach.jpg" />
        </div>
        <div class="item" draggable="true"><img
                src="https://akm-img-a-in.tosshub.com/sites/visualstory/stories/2022_12/story_14954/assets/2.jpeg?time=1670596814" />
        </div>
      `;
        showMessage('');

        items = document.querySelectorAll('.item');

        items.forEach(item => {
            item.addEventListener('dragstart', dragStart);
            item.addEventListener('dragend', dragEnd);
        });
    }

    function showMessage(message) {
        const successMessage = document.querySelector('.success-message');
        if (successMessage) {
            successMessage.textContent = message;
        }
    }
});
