import React from "react"

interface ModalProps {
  show: boolean
  title: string
  children: React.ReactNode
  onClose: () => void
  onConfirm: () => void
}

const Modal: React.FC<ModalProps> = ({
  show,
  title,
  children,
  onClose,
  onConfirm,
}) => {
  if (!show) return null

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-opacity-50 bg-black z-50">
      <div className="bg-gray-100 rounded p-5">
        <h2 className="text-xl font-bold mb-4 text-center">{title}</h2>
        <div className="text-md">{children}</div>
        <div className="mt-4 space-x-4 flex justify-center">
          <button onClick={onClose} className="mr-2 text-gray-700 text-sm">
            No, Cancel
          </button>
          <button
            onClick={onConfirm}
            className="bg-red-500 hover:bg-red-600 transition-all text-white font-semibold text-sm py-2 px-2 mt-1 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
          >
            Yes, I&apos;m sure
          </button>
        </div>
      </div>
    </div>
  )
}

export default Modal
