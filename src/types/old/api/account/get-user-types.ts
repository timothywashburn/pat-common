import { UserData } from "../../models";
import { Serialized } from "../../../../utils";

export interface GetUserResponse {
    user: Serialized<UserData>;
}