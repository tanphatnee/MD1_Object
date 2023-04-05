// Khởi tạo một mảng chứa các task cần thực hiện để trở thành một front-end web developer
let tasks = [
    'Học HTML và CSS cơ bản',
    'Tìm hiểu về responsive design',
    'Nắm vững kiến thức về JavaScript',
    'Học sử dụng các thư viện và framework phổ biến như React, Vue, Angular',
    'Thực hành và xây dựng các project thực tế',
    'Tìm hiểu về SEO và tối ưu hóa website',
    'Tìm hiểu về các công cụ phát triển web như Git, npm, webpack, babel',
    'Cập nhật kiến thức liên tục với các công nghệ mới'
  ];
  
  // Khởi tạo một mảng để lưu trạng thái của các task
  let taskStatus = [];
  
  // Hiển thị danh sách các task và cho phép người dùng nhập tên và trạng thái của từng công việc
  console.log('Danh sách các task để trở thành một front-end web developer:');
  for (let i = 0; i < tasks.length; i++) {
    let taskName = prompt(`Nhập tên của task ${i+1}:`);
    let taskCompleted = prompt(`Task ${i+1} đã hoàn thành chưa? (Nhập 'T' nếu hoàn thành, 'F' nếu chưa hoàn thành)`);
    while (taskCompleted.toUpperCase() !== 'T' && taskCompleted.toUpperCase() !== 'F') {
      taskCompleted = prompt(`Vui lòng nhập lại trạng thái của task ${i+1} bằng 'T' hoặc 'F'`);
    }
    taskStatus.push(taskCompleted.toUpperCase() === 'T');
    console.log(`${i+1}. ${taskName} - ${taskCompleted.toUpperCase() === 'T' ? 'Hoàn thành' : 'Chưa hoàn thành'}`);
  }
  