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
        p-6
        px-8
        mt-2
        bg-white
        border
        rounded-lg
        border-font-color
        w-[600px]
        max-w-[90vw]
      "
  >
    <h3 className="text-center text-3xl mb-4">Add New Location</h3>
    <form action={formAction}>
      <input
        className="w-full border border-font-color p-1 px-4 mb-3 rounded-md"
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
      <p className="mt-1 mb-3 leading-6">Or provide latitude and longitude for more accurate position:</p>
      <div className="grid grid-cols-2 gap-3">
        <input
          className="w-full border border-font-color p-1 px-4 mb-2 rounded-md"
          type="text"
          placeholder="Latitude"
          name="lat"
        />
        <input
          className="w-full border border-font-color p-1 px-4 mb-2 rounded-md"
          type="text"
          placeholder="Longitude"
          name="lon"
        />
      </div>
      <div className="flex mt-4">
        <button
          className="
            border-font-color
            border
            p-3
            px-12
            w-full
            rounded-md
            text-3xl
          "
          onClick={onCancel}
          type="button"
        >
          Cancel
        </button>
        <button className="
          bg-font-color
          text-white
          w-full
          p-3
          px-12
          ml-3
          rounded-md
          text-3xl
         "
        >
          Add
        </button>
      </div>
    </form>
    {formState?.errors?.length && <div className="mt-5 text-red-400">
      {formState.errors.map(error => <p key={error} className="text-small leading-5 mb-2">
        {error}
      </p>)}
    </div>}
  </div>
}
