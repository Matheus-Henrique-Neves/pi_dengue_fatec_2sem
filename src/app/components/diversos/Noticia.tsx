import React from "react";

interface NewsCardProps {
  imageSrc: string;
  title: string;
  description: string;
  timeInfo: string;
}

const NewsCard: React.FC<NewsCardProps> = ({
  imageSrc,
  title,
  description,
  timeInfo,
}) => {
  return (
    <div className="flex border rounded-lg overflow-hidden shadow-sm w-full max-w-md">
      {/* Imagem */}
      <img src={imageSrc} alt={title} className="w-1/3 object-cover" />

      {/* Conteúdo */}
      <div className="p-4 flex flex-col justify-between w-2/3">
        <div>
          <h3 className="text-lg font-bold text-gray-800">{title}</h3>
          <p className="text-sm text-gray-600 mt-2">{description}</p>
        </div>
        <p className="text-xs text-gray-400 mt-4">{timeInfo}</p>
      </div>
    </div>
  );
};

export default NewsCard;
