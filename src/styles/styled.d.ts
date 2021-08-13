import "styled-components/native";

declare module "styled-components/native" {
  export interface DefaultTheme {
    name: string;

    colors: {
      PRIMARY: string;
      BLACK: string;
      WHITE: string;
      GREY: string;
    };
  }
}
