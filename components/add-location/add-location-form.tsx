import { useFormState } from 'react-dom';
import { addLocation } from '@/actions/locations';

export default function AddLocationForm({ onCancel, onSuccess }: { onCancel: () => void; onSuccess: () => void }) {
  const [formState, formAction] = useFormState(addLocation, {})

  if (formState.success) {
    onCancel()
  }

  return <div
    className="
        absolute
        z-10
        right-0
        text-right
        p-4
        mt-2
        bg-white
        border
        rounded-lg
        border-font-color
        w-[600px]
        max-w-[90vw]
      "
  >
    <form action={formAction}>
      <input
        className="w-full border border-font-color p-1 px-4 mb-2 rounded-md"
        type="text"
        placeholder="Location name"
        name="name"
      />
      <input
        className="w-full border border-font-color p-1 px-4 mb-2 rounded-md"
        type="text"
        placeholder="Google Maps link"
        name="googleLink"
      />
      <button
        className="border-font-color border p-2 px-12 rounded-md"
        onClick={onCancel}
        type="button"
      >
        Cancel
      </button>
      <button className="bg-font-color text-white p-2 px-12 ml-3 rounded-md">
        Add
      </button>
    </form>
    {formState?.errors?.length && <div className="mt-2 text-red-400">
      {formState.errors.map(error => <p key={error} className="text-small mb-[-6px]">
        {error}
      </p>)}
    </div>}
  </div>
}
