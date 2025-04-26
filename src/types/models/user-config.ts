import { PanelType } from "../panels";
import { UserId } from "../id-types";

export interface Panel {
    type: PanelType;
    visible: boolean;
}

export interface UserConfig {
    _id: UserId;
    createdAt: Date;
    updatedAt: Date;

    name: string;
    timezone: string;
    discordID?: string;
    itemListTracking?: {
        channelId: string;
        messageId: string;
    };
    iosApp: {
        panels: Panel[];
        itemCategories: string[];
        itemTypes: string[];
        propertyKeys: string[];
    };
}