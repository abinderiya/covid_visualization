import requests

def get_covid_data(country='Mongolia',lastdays=30):
    resp = requests.get(f'https://corona.lmao.ninja/v2/historical/{country}?lastdays={lastdays}')
    if resp.status_code != 200:
        return {}
    else:
        return resp.json()

if __name__ == '__main__':
    data = get_covid_data(lastdays=7)
    print(data)