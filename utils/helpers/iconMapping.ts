import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { faWebAwesome } from "@fortawesome/free-brands-svg-icons";
import { faBrush, faComputer, faMobile, faNetworkWired, faPhone, faSearch, faShop, faTools } from "@fortawesome/free-solid-svg-icons";

export const iconMap: Record< string, IconDefinition> = {
    'computer': faComputer,
    'mobile': faMobile,
    'webApp': faWebAwesome,
    'search': faSearch,
    'eCommerce': faShop,
    'design': faBrush,
    'maintenance': faTools,
    'socialMedia': faNetworkWired
}

export const getIcon = (iconName: string): IconDefinition => {
    return iconMap[iconName];
}

export const getAvailableIcon = (): string[] => {
    return Object.keys(iconMap);
}