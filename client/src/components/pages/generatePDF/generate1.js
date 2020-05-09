
export const generateHTML = data => {
    console.log("Generate PDF");
    console.log(data);
    return `<!DOCTYPE html>
  <html lang="en">
     <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"/>
        <link href="https://fonts.googleapis.com/css?family=BioRhyme|Cabin&display=swap" rel="stylesheet">
        <title>GENERATE 1</title>
        
     </head>
     <body>
        <h1> Name: ${data} </h1>
     </body>
  </html>`;
  
}

