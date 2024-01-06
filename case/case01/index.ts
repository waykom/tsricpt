const url = 'http://rap2api.taobao.org/app/mock/315313/getName'
const button: HTMLButtonElement | null = document.querySelector('.button')
const btnDelete: HTMLButtonElement | null = document.querySelector('.btnDelete')
const content: HTMLDivElement | null = document.querySelector('.content')


btnDelete?.addEventListener<'click'>('click', (): void => {
    const checkboxList: NodeListOf<HTMLInputElement> = document.querySelectorAll('.item input')

    for (const node of checkboxList) {
        if (node.checked) {
            node.parentElement?.remove()
        }
    }
})

interface Thing {
    color: string
    uid: string
    name: string
    ip: string
}

class SomeThing implements Thing {

    color: string
    uid: string
    name: string
    ip: string

    constructor(color: string, uid: string, name: string, ip: string) {
        this.color = color
        this.uid = uid
        this.name = name
        this.ip = ip
    }
}

class WebDisplay {
    public static addData(data: Thing): void {
        const someThing: Thing = new SomeThing(data.color, data.uid, data.name, data.ip)

        const rowItem: HTMLDivElement = document.createElement('div')
        rowItem.className = 'item'

        content?.appendChild(rowItem)

        const color: HTMLDivElement = document.createElement('div')
        const uid: HTMLDivElement = document.createElement('div')
        const name: HTMLDivElement = document.createElement('div')
        const ip: HTMLDivElement = document.createElement('div')



        color.innerText = someThing.color
        uid.innerText = someThing.uid
        name.innerText = someThing.name
        ip.innerText = someThing.ip

        color.style.backgroundColor = color.innerText

        rowItem.appendChild(color)
        rowItem.appendChild(uid)
        rowItem.appendChild(name)
        rowItem.appendChild(ip)

        const input: HTMLInputElement = document.createElement('input')
        input.setAttribute('type', 'checkbox')

        rowItem.appendChild(input)
    }
}

async function getJSON<T>(url: string): Promise<T> {
    const response: Response = await fetch(url)
    const json: Promise<T> = await response.json()
    return json
}

async function getData(): Promise<void> {
    try {
        const data: Thing = await getJSON<Thing>(url)
        WebDisplay.addData(data)
    } catch (error: Error | unknown) {
        let message: string
        if (error instanceof Error) {
            message = error.message
        } else {
            message = String(error)
        }
        console.log(message)
    }
}

getData()

button?.addEventListener<'click'>('click', getData)


