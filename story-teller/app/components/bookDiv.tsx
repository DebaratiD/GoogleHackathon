import React, { ReactElement, useEffect, useState } from 'react';
import { Book } from '../interfaces/book';

interface page{
    line:string,
    zindex:number
}
const BookDiv: React.FC<{ bookContent:Book, showStory: Function }> = ({bookContent, showStory}) => {
  const goBack = ()=>{
    showStory(false);
  }

  const [pages, setPages] = useState<page[]>([]);

    let numPages = bookContent.lines.length
  useEffect(() => {
    let newPages:page[] = [];
    for (let i = 0; i < numPages; i++) {
      newPages.push({line:bookContent.lines[i],zindex:numPages-i});
    }
    setPages(newPages);
  }, [numPages, setPages, bookContent]);

  return (
    <div className="flex items-start gap-5">
      <button onClick={goBack}>
        {"<-"}
      </button>
      <div className="grid gap-5">
        <h2>{bookContent.title}</h2>
        <p>By {bookContent.author}</p>
        <div>
          {pages.map((page:page, i) => (
          <div className="page hover:tran" key={i} >
            {page.line}</div>
        ))}
        </div>
        
      </div>
      
    </div>
  );
};

export default BookDiv;