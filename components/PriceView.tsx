import { cn } from "@/lib/utils";
import PriceFormatter from "./PriceFormatter"

interface Props {
    price:number | undefined,
    discount:number | undefined,
    label?:string;
    className?:string
}

const PriceView = ({price,discount,label,className}:Props) => {
  return (
    <div className="flex items-center justify-between gap-5 ">
        <div className="flex items-center gap-2">
            <PriceFormatter amount={price} className={className}/>
            {price && discount && (
                <PriceFormatter amount={price + (price * discount) / 100}
                className={cn("text-sm line-through",className)}
                />
            )}
        </div>
        <p className="text-base font-medium text-gray-500">{label}</p>
    </div>
  )
}

export default PriceView