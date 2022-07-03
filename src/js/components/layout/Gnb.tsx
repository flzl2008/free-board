import { useColorMode, Button, Flex, HStack, Spacer, Box } from '@chakra-ui/react';
import NavigationMenuButton from '../ui/NavigationMenuButton';
import { useLocation } from 'react-router-dom';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

type NavigationMenu = {
  url: string;
  menuName: string;
};

export default function Gnb() {
  const navigationMenus: NavigationMenu[] = [
    {
      url: '/',
      menuName: '게시물 목록',
    },
    {
      url: '/editor',
      menuName: '게시물 쓰기',
    },
  ];
  const location = useLocation();
  const { colorMode, toggleColorMode } = useColorMode();

  const isNowPage = (url: string): boolean => {
    return location.pathname === url ? true : false;
  };

  return (
    <header>
      <section>
        <Flex alignItems={'center'} justifyContent={'space-between'} borderBottom="0.5px" borderStyle="ridge" padding={'1'}>
          <Box fontFamily="fantasy" margin={'2'} fontSize={'1.5em'}>
            FREE BOARD
          </Box>
          <Spacer />
          <HStack spacing="8">
            <HStack spacing="2">
              {navigationMenus.map(menu => (
                <NavigationMenuButton
                  key={`navigation-menu-buttion-${menu.url}`}
                  menuName={menu.menuName}
                  url={menu.url}
                  isActive={isNowPage(menu.url)}
                />
              ))}
            </HStack>
            <Button onClick={toggleColorMode}>{colorMode === 'light' ? <MoonIcon /> : <SunIcon />}</Button>
          </HStack>
        </Flex>
      </section>
    </header>
  );
}
