interface ButtonProps {
  content: string;
}

export default function Button({ content }: ButtonProps) {
  return (
    <button className="bg-cyan-600 border border-cyan-600 cursor-pointer text-white font-bold py-2 px-5 rounded-full hover:bg-transparent hover:text-cyan-600 transition-all duration-300">
      {content}
    </button>
  );
}
