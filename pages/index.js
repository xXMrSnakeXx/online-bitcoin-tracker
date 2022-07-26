import Image from "next/image";
import s from "../styles/BitcoinInfoPage.module.scss";
import { Bars } from "react-loader-spinner";
import { useGetBitcoinRateQuery } from "../redux/bitcoinApi";

export default function BitcoinInfoPage() {
  const { data, isLoading, isSuccess, isError } = useGetBitcoinRateQuery(
    undefined,
    {
      pollingInterval: 3000,
    }
  );

  return (
    <>
      <main>
        {isLoading && (
          <div className={s.loader}>
            <Bars
              height="80"
              width="80"
              color="orange"
              ariaLabel="bars-loading"
            />
          </div>
        )}
        {isSuccess && (
          <>
            <div className={s.info}>
              <Image
                src="/logo.svg"
                alt="logo"
                width="60"
                height="60"
                className={s.logoImg}
              />
              <h2>BITCOIN</h2>
            </div>
            <ul className={s.listCard}>
              {Object.values(data.bpi).map(
                ({ code, symbol, rate, description, rate_float }) => (
                  <li key={symbol} className={s.card}>
                    <h2>{code} </h2>
                    <p>{description} </p>
                    <p>
                      rate: <b>{rate}</b> {code}
                    </p>
                    <p> rate float: {rate_float}</p>
                  </li>
                )
              )}
            </ul>
          </>
        )}
        {isError && (
          <h2 className={s.errorText}>
            Oops, something went wrong. Please try again later
          </h2>
        )}
      </main>
    </>
  );
}
