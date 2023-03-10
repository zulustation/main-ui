import { observer } from "mobx-react";
// import { Bell } from "react-feather";
import React, { Component, FC, useEffect, useState } from "react";

import { formatNumberLocalized, shortenAddress } from "lib/util";
import { useStore } from "lib/stores/Store";
import Avatar from "components/ui/Avatar";
import { useUserStore } from "lib/stores/UserStore";
import { useAccountModals } from "lib/hooks/account";
import { useModalStore } from "lib/stores/ModalStore";
import { usePrevious } from "lib/hooks/usePrevious";

const AccountButton: FC<{
  connectButtonClassname?: string;
  connectButtonText?: string | JSX.Element;
  autoClose?: boolean;
  avatarDeps?: any[];
}> = observer(
  ({ connectButtonClassname, connectButtonText, autoClose, avatarDeps }) => {
    const store = useStore();
    const { wallets } = store;
    const { connected, activeAccount, activeBalance } = wallets;
    const modalStore = useModalStore();
    const accountModals = useAccountModals();
    const { locationAllowed, isUsingVPN } = useUserStore();
    const [hovering, setHovering] = useState<boolean>(false);

    const connect = async () => {
      accountModals.openWalletSelect();
    };

    const handleMouseEnter = () => {
      setHovering(true);
    };

    const handleMouseLeave = () => {
      setHovering(false);
    };

    const prevactiveAccount = usePrevious(activeAccount);

    useEffect(() => {
      if (autoClose && activeAccount !== prevactiveAccount) {
        modalStore.closeModal();
      }
    }, [activeAccount]);

    return (
      <>
        {!connected ? (
          <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <button
              className={
                connectButtonClassname ||
                "flex w-zul-168 h-zul-40 bg-sky-400 dark:bg-sky-700 text-black dark:text-white rounded-full text-zul-14-150 font-medium items-center justify-center cursor-pointer disabled:cursor-default disabled:opacity-20"
              }
              onClick={() => connect()}
              disabled={
                locationAllowed !== true || isUsingVPN || !store?.sdk?.api
              }
            >
              {connectButtonText || "Connect Wallet"}
            </button>

            {hovering === true &&
            (locationAllowed !== true || isUsingVPN === true) ? (
              <div
                className="bg-white dark:bg-sky-1100 absolute rounded-zul-10 font-bold text-black dark:text-white 
            px-zul-10 py-zul-14  text-zul-12-150 top-zul-50 z-20 right-10"
              >
                {locationAllowed !== true
                  ? "Your jurisdiction is not authorised to trade"
                  : "Trading over a VPN is not allowed due to legal restrictions"}
              </div>
            ) : (
              <></>
            )}
          </div>
        ) : (
          <div className="flex h-zul-40">
            <div
              className="w-zul-240 xl:w-zul-360 flex pl-zul-25 h-full font-mono text-zul-14-150 rounded-full cursor-pointer bg-sky-200 dark:bg-sky-700 dark:text-white"
              onClick={() => {
                accountModals.openAccontSelect();
              }}
            >
              <div className="font-bold mr-zul-16 center w-zul-176 ">
                {`${formatNumberLocalized(activeBalance?.toNumber())} ${
                  store.config.tokenSymbol
                }`}
              </div>
              <div className="center bg-sky-500 dark:bg-black rounded-full h-full w-zul-164 flex-grow text-white pl-zul-6 pr-zul-10">
                <div
                  onClick={(e) => {
                    e.stopPropagation();
                  }}
                >
                  <Avatar
                    zoomed
                    address={activeAccount.address}
                    deps={avatarDeps}
                  />
                </div>
                <div className="mr-auto text-black dark:text-white ml-zul-10">
                  {shortenAddress(activeAccount.address, 6, 4)}
                </div>
              </div>
            </div>
            {/* TODO */}
            {/* <div className="ml-zul-18 center cursor-pointer dark:text-sky-600">
            <Bell size={24} />
          </div> */}
          </div>
        )}
      </>
    );
  },
);

export default AccountButton;
