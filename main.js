class Github {
    constructor() {
        this.UserName = document.getElementById("UserName")
        this.Submit = document.getElementById("GetUsers")
        this.Submit.addEventListener("click", this.SubmitUsers.bind(this));
    }
    async SubmitUsers() {
        let value = this.UserName.value
        let url = `https://api.github.com/users/${value}/repos`
        let response = await fetch(url)
        let data = await response.json()
        console.log(data)
        data.forEach(user => {
            let output =
                `<ul class="list-group mb-4">
                  <li class="list-group-item">Name: ${user.name}</li>
                  <li class="list-group-item">Description: ${user.description === null ? "" : user.description}</li>
                  <li class="list-group-item">Create Date:${user.created_at.slice(8, 10)}.${user.created_at.slice(5, 8)}${user.created_at.slice(0, 4)} ${user.created_at.slice(11, 19)}</li>
                  </ul>`
                ;
            document.getElementById("list").insertAdjacentHTML("afterbegin", output);
        });
    }
}
new Github()