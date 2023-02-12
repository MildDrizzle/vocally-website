export interface ButtonProps {
  text: string;
  isFormButton?: boolean;
  onClick?: () => {};
}

export interface InputProps {
  type: "email" | "text";
  placeholder: string;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}

export interface TypoGraphyProps {
  type: "title" | "subTitle";
  text: String;
}
