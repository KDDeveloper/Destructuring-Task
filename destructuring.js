//Destructuring
function fullURL({domain,page,pageNumbers=5}){
    return `http://${domain}.com/${page}/${pageNumbers}`;
};

const github = {domain: "github",pageNumbers: 10, page: "user-page"};

console.log(fullURL(github));


const users = [{"createdAt":"2021-08-03T14:39:50.150Z","name":"cghg","avatar":"https://upload.wikimedia.org/wikipedia/commons/1/18/Pawan-Kalyan-Stylish-Look.jpg","id":"55"},
{"createdAt":"2021-07-24T13:18:32.994Z","name":"Lois Ebert III","avatar":"https://upload.wikimedia.org/wikipedia/commons/1/18/Pawan-Kalyan-Stylish-Look.jpg","id":"56"},
{"createdAt":"2021-07-19T02:51:30.306Z","name":"Ray McCullough","avatar":"https://cdn.fakercloud.com/avatars/spedwig_128.jpg","id":"57"},
{"createdAt":"2021-07-18T22:24:17.279Z","name":"Veronica Gislason","avatar":"https://cdn.fakercloud.com/avatars/alxleroydeval_128.jpg","id":"58"},
{"createdAt":"2021-07-19T10:36:36.108Z","name":"Vera Johns","avatar":"https://cdn.fakercloud.com/avatars/melvindidit_128.jpg","id":"59"},
{"createdAt":"2021-07-19T09:20:52.344Z","name":"Morris Baumbach","avatar":"https://cdn.fakercloud.com/avatars/notbadart_128.jpg","id":"60"},
{"createdAt":"2021-07-19T07:39:34.894Z","name":"Phillip Metz","avatar":"https://cdn.fakercloud.com/avatars/vytautas_a_128.jpg","id":"62"},
{"createdAt":"2021-07-18T12:50:33.043Z","name":"Mr. Pablo Dibbert","avatar":"https://cdn.fakercloud.com/avatars/jeremyworboys_128.jpg","id":"63"},
{"createdAt":"2021-07-19T10:46:28.547Z","name":"Robert Ryan","avatar":"https://cdn.fakercloud.com/avatars/sdidonato_128.jpg","id":"64"},{"createdAt":"2021-07-18T23:13:17.859Z","name":"Stephanie Feil","avatar":"https://cdn.fakercloud.com/avatars/isaacfifth_128.jpg","id":"65"},
{"createdAt":"2021-07-19T00:52:38.338Z","name":"Ms. Delores Littel","avatar":"https://cdn.fakercloud.com/avatars/lingeswaran_128.jpg","id":"66"}]

// destructuring task 1

let names = users.map(({name})=> name);

console.log(names)

//destructuring task 2

let rNames = names.filter((name)=> name.startsWith('R'));

console.log(rNames)