
function generateHTML(employees) {
   let body = ``
   for (let i = 0; i < employees.length; i++) {
    const card = `
    <div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">
      ${employees[i].getName()}
      ${employees[i].getRole()}
      </h5>
      <ul class="list-group list-group-flush">
      <li class="list-group-item">${employees[i].getId()}</li>
      <li class="list-group-item">${employees[i].getEmail()}</li>
      <li class="list-group-item">${employees[i].getOfficeNumber()}</li>
      <li class="list-group-item">${employees[i].getGithub()}</li>v
      <li class="list-group-item">${employees[i].getSchool()}</li>
    </ul>
    </div>
  </div>
    `
    body = body + card
   }

   const start = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous">
    </head>
    <body>
        ${body}
    </body>
    </html>
    `
    return start 
}


module.exports = generateHTML