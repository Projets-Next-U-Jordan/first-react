import "../../models/User";
import { User } from "../../models/User";
import { InputUser } from "./types";

export const transformUser = ({id, firstName, lastName, image}:InputUser):User => ({
    id: id,
    name: `${firstName} ${lastName}`,
    avatar: image
});