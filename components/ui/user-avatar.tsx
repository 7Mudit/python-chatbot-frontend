import { Avatar, AvatarImage, AvatarFallback } from "./avatar";
import { FaUserAlt } from "react-icons/fa";
export const UserAvatar = () => {
  return (
    <div>
      <Avatar className="h-8 w-8">
        <FaUserAlt size={20} color={"black"} />
      </Avatar>
    </div>
  );
};
