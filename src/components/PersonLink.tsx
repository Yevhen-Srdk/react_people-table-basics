import { NavLink } from 'react-router-dom';
import { Person } from '../types';

type Props = {
  person: Person;
  parentName: string;
};

export const PersonLink = ({ person, parentName }: Props) => {
  return (
    <NavLink
      to={`/people/${person.slug}`}
      className={person.sex === 'f' ? 'has-text-danger' : ''}
    >
      {parentName}
    </NavLink>
  );
};
