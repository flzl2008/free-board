import { Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

type NavigationMenuButtonProps = {
  isActive: boolean;
  url: string;
  menuName: string;
};

export default function NavigationMenuButton(props: NavigationMenuButtonProps) {
  return (
    <>
      <Link to={props.url}>
        <Button variant="ghost" isActive={props.isActive}>
          {props.menuName}
        </Button>
      </Link>
    </>
  );
}
