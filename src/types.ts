export interface CardData {
  author: {
    name: string;
    avatar: string;
  };
  title: string;
  description: string;
  category: string;
  hero: string;
  time: string;
}

export interface AuthorProps {
  avatar: string;
  name: string;
  time: string;
}

export interface Props {
  data: CardData;
}
