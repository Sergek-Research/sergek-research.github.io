import { Link } from 'react-router-dom';

export interface ButtonProps {
  link: string;
  title: string;
}

export function Button({ link, title }: ButtonProps) {
  return <Link to={link}>{title}</Link>;
}
