import React from "react"

const FormField = ({ labelName, type, name, placeholder, value,
  handleChange, isSurpriseMe, handleSurpriseMe }) => {
  return (
    <div>

      <div className="flex items-center gap-2 mb-2">
        <label htmlFor={name}
          className="block text-sm font-medium text-gray-900">
          {labelName}
        </label>

        {isSurpriseMe && (
          <button type="button"
            className="bg-[#ececf1] text-xs font-semibold px-2 py-1 rounded text-black"
            onClick={handleSurpriseMe}
          >
            Surprise Me
          </button>
        )}
      </div>

      <input type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        required
        className="bg-gray-50 border border-gray-300 text-gray-900
        p-3 text-sm rounded-lg block w-full outline-none focus:ring-[#4649ff]
        focus:border-[#4649ff]"
        autoComplete="off"
      />

    </div>
  )
}

export default FormField
