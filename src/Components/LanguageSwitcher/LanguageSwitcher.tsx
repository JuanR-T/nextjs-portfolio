'use client';

import { availableLanguages } from '@/data/data';
import { usePathname, useRouter } from '@/i18n/routing';
import { ChevronDown } from 'lucide-react';
import { useLocale } from 'next-intl';

const LanguageSelector = () => {
    const pathname = usePathname();
    const router = useRouter();
    const currentLocale = useLocale();

    const handleLanguageChange = (locale: string) => {
        if (locale !== currentLocale) {
            router.push(pathname, { locale });
        }
    };
    return (
        <div className="dropdown dropdown-hover">
            <div className="px-3 pt-1 text-sm font-semibold uppercase flex justify-end items-center">
                {currentLocale}
                <ChevronDown />
            </div>
            <ul tabIndex={0} className="dropdown-content menu rounded-box w-52 bg-base-100 p-2 shadow">
                {availableLanguages.map((lang, index) => (
                    <li key={index}>
                        <button onClick={() => handleLanguageChange(lang.locale)} className="w-full text-left">
                            <span className="pr-1">{lang.flag}</span>
                            <span>{lang.label}</span>
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default LanguageSelector;
