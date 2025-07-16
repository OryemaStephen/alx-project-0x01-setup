export interface PostProps {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface PostsPageProps {
  posts: PostProps[];
}

interface GeoProps {
  lat: string;
  lng: string;
}

interface AddressProps {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: GeoProps;
}

interface CompanyProps{
    name: string;
    catchPhrase: string;
    bs: string;
}

export interface UserProps {
  id: number;
  name: string;
  username: string;
  email: string;
  address: AddressProps;
  phone: string;
  website: string;
  company: CompanyProps;
}

export interface UsersPageProps {
  users: UserProps[];
}
