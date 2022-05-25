from Client_API.client import API

if __name__ == "__main__":

    url = 'http://localhost:6000/music'
    api = API(url)

    data0 = {
        "name": "7 Years",
        "band": "Lukas Graham"
    }

    data1 = {
        "name": "The Nights",
        "band": "Avicii"
    }

    update = {
        "name": "Beggin'",
        "band": "Måneskin"
    }

    delete = {"band": "Lukas Graham"}

    api.get()
    api.post(data0)
    api.post(data1)
    api.get()
    api.put(update)
    api.get()
    api.delete(delete)
    api.get()
    