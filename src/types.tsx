export type Person = {
  name: string;
  city: string;
  id: string;
};

export type ContactCardProps = {
  person: Person;
  onEditContact: () => void;
}
