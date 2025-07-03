import { Serialized } from "../../../utils";
import { ThoughtData } from "../../models";

export interface GetThoughtsResponse {
    thoughts: Serialized<ThoughtData>[];
}