var repositoryData = {
        name: "MyRepo",
        owner: {
                name: "Peter",
                lastLoggedOn: "yesterday",
                lastUpdatedRepo: "yesterday"
        },
        files: [
                {
                        name: "index.html",
                        size: "1260"
                },
                {
                        name: "exercise.js",
                        size: "204"
                }
        ]
}

function print(node)
{
        for (let child in node)
        {
                if (typeof node[child] === "object")
                {
                        print(node[child]);
                }
                else
                {
                        console.log(child + ": " + node[child]);
                }
        }
}

print(repositoryData);
