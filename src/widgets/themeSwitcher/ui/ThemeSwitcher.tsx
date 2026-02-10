
import { classNames } from "shared/lib/classNames/classNames"
import { Theme, useTheme } from "app/providers/ThemePrivider";

import cls from './ThemeSwitcher.module.scss'

import LightIcon from "shared/assets/icons/light-theme.svg"
import DarkIcon from "shared/assets/icons/dark-theme.svg"
import { Button, ThemeButton } from "shared/ui/button/Button";


interface ThemeSwitcherProps {
    className?: string
}

export const ThemeSwitcher = ({className}: ThemeSwitcherProps) => {

    const {theme, toggleTheme} = useTheme();

    return (
        <Button 
            className={classNames(cls.themeSwitcher, {}, [className])}
            onClick={toggleTheme} 
            theme={ThemeButton.CLEAR}
        >
            { theme === Theme.LIGHT
            ? <LightIcon height={20} width={20} />
            : <DarkIcon height={20} width={20} /> }
        </Button>
    )
}