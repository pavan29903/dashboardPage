import { tableData } from "../data/tableData"
import { GoDownload } from "react-icons/go";
import helpicon from "/Help.svg"
export const RevenueCard = ({
    title,
    orderCount,
    amount
}) => {
    return <div className="flex flex-col gap-8">       
            <div className="flex flex-col gap-6">
                <div className="flex justify-between">
                    <h5 className="font-medium"> Overview</h5>
                    <button className=" border-2 border-solid-500 rounded">This Month</button>
                </div>

                <div className="flex flex-warp justify-between gap-5 ">
                    <div className="bg-[#146EB4] text-[#146EB4] shadow-md rounded-md  gap-20 sm:flex-grow">
                        <div className="p-3">
                            <div className=" flex text-[#ffffff] gap-3 font-normal">
                                <p>Next Payout</p>
                                <img src={helpicon} alt="" />
                            </div>
                            <div className="flex justify-between items-center text-[#ffffff]">
                                <div className=" text-3xl font-medium">
                                    ₹ {amount}
                                </div>
                                <div className="text-[#ffffff] underline ">
                                    {orderCount} Orders {">"}
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-between bg-[#0E4F82] text-[#ffffff] rounded-md gap-5 font-normal">
                            <p>Next payout date:</p>
                            <p className="font-medium">Today, 4:00PM</p>
                        </div>
                    </div>

                    <div className="bg-green-200 text-[#4D4D4D] shadow-md rounded-md p-3 sm:flex-grow">
                        <div className=" flex text-[#4D4D4D] gap-3 font-normal">
                            {title}
                            <img className="text-[#4D4D4D]" src={helpicon} alt="" />

                        </div>
                        <div className="flex justify-between" >
                            <div className="font-medium">
                                ₹ {amount}
                            </div>
                            <div className="text-[#146EB4] underline font-normal">
                                {orderCount} Orders {">"}
                            </div>
                        </div>
                    </div>

                    <div className="bg-green-200 shadow-md rounded-md p-3 sm:flex-grow">
                        <div className=" flex text-[#4D4D4D] gap-3">
                            <p>Amount Processed</p>
                            <img src={helpicon} alt="" />

                        </div>
                        <div className="flex justify-between" >
                            <div className="font-medium">
                                <p>₹23,92,312.19</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-6">
                    <   h5 className="text-[20px] font-medium">Transactions | This Month</h5>
                    <div className="flex gap-3">
                        <button className="px-4 py-1.5 bg-[#E6E6E6] text-[#808080] rounded-full">Payouts(22)</button>
                        <button className="px-4 py-1.5 bg-[#146EB4] text-[#FFFFFF] rounded-full">Refunds(6)</button>
                    </div>
                </div>
                <div className="flex justify-between">
                    <input className="border-[1px] border-[#999999]" type="text" placeholder="Order ID or transaction ID" />
                    <div className="flex justify-end gap-4">
                        <button className="border-[1px] border-[#999999] gap-6 px-3 py-1.5">Sort (?)</button>
                        <button className=" flex border-[1px] border-[#999999] w-9 h-9 items-center justify-center"><GoDownload /></button>
                    </div>
                </div>
                <table>
                    <thead className="bg-[#F2F2F2] text-[#4D4D4D] text-left">
                        <tr>
                            <th className="px-[12px] py-[10px] ">Order ID</th>
                            <th className="px-[12px] py-[10px] ">Status</th>
                            <th className="px-[12px] py-[10px] ">Transaction ID</th>
                            <th className="px-[12px] py-[10px] ">Refund date</th>
                            <th className="px-[12px] py-[10px] text-end ">Order amount</th>
                        </tr>
                    </thead>
                    <tbody className="">
                        {tableData.map((row, index) => (
                            <tr key={index}>
                                <td className="px-3 py-[14px] text-[#146EB4]">
                                    {row.orderId}</td>
                                <td className="px-3 py-[14px] flex items-center gap-[6px] text-[#1A181E]">
                                    <span className={`${row.status == "Successful" ? "bg-green-500" : "bg-[#999999]"} w-[10px] h-[10px] rounded-full`}></span>
                                    {row.status}
                                </td>
                                <td className="px-3 py-[14px] text-[#4D4D4D]">
                                    {row.transactionId}
                                </td>
                                <td className="px-3 py-[14px] text-[#4D4D4D]">
                                    {row.refundDate}
                                </td>
                                <td className="px-3 py-[14px] text-[#1A181E] text-end">
                                    {row.orderAmount}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
    </div>



}