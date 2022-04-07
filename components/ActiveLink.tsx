import Link from "next/link";
import { useRouter } from "next/router";
import { CSSProperties, FC } from "react";

const styles: CSSProperties = {
  color: '#0070f3',
  textDecoration: 'underline',
}

interface Props {
  title: string,
  href: string,
}

export const ActiveLink: FC<Props> = ({ href, title }: Props) => {

  const { asPath } = useRouter();

  return (
    <Link href={href}>
      <a style={asPath === href ? styles : undefined} >{title}</a>
    </Link>
  )
}
