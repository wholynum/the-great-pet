import { useTranslation } from 'react-i18next';

const MainPage = () => {
    const { t } = useTranslation('home');

    return (
        <div>
            {t('home_page')}
        </div>
    );
};
export default MainPage;
