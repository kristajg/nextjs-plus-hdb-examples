'use client';

import { useActionState } from "react";
import { addDog } from '@/app/actions';

const initialState = {};

export default function AddDogForm() {
  const [state, formAction] = useActionState(addDog, initialState);
  return (
    <form action={formAction}>
      <label htmlFor="dog-name">Dog Name</label><br />
      <input name='dog-name' /><br /><br />
      <label htmlFor="dog-breed">Dog Breed</label><br />
      <input name='dog-breed' />
      <button type='submit'>Enter</button>
    </form>
  );
}