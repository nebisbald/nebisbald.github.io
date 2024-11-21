const data = [
    {name: "john", id: 1},
    {name: "bertha", id: 8247492},
    {name: "peterthaniel", id: 47}
]


export default function MyList() {
    return (
        <ul>
            {data.map(item => <li key={item.id}>{item.name}</li>)}
        </ul>
    )
}