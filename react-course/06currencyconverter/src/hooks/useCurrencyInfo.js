import { useEffect, useState } from "react";
function useCurrencyInfo (currency="usd") {
    const [data, setData] = useState([])
    useEffect(() => {
        const url = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`
        fetch(url)
                    .then((res) => res.json())
                    .then((res) => setData(res[currency]))
                    .catch((err) => {
                        console.log(`error while making API call: ${err}`)
                    }).finally(() => {
                        console.log('API call is done')
                    })
    }, [currency])
    return data
}
export default useCurrencyInfo;