import Link, { LinkProps } from "next/link";
import { usePathname} from "next/navigation";
import { cloneElement, ReactElement } from "react";


interface ActiveLinkProps extends LinkProps{
    children: ReactElement<{className: string}>;
    activeClassName: string;
}

export function ActiveLink({ children, activeClassName, ...rest }: ActiveLinkProps){

    const asPath = usePathname();

    const className = asPath === rest.href? activeClassName : ''; 

    return(
        <>
        <Link {...rest}>
        {cloneElement(children, {
            className
        })}  
        </Link>
        </>
    )
}