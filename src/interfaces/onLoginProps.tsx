import { UserProps } from "./User";

export interface OnLoginProps {
  onLogin: (user: UserProps) => void;
}
