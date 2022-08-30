import React, { useState, useEffect } from 'react'
import MDEditor from '@uiw/react-md-editor';
import './PostForm.css'

const summaryCharLimit = 200;

const PostForm = ({ initPost,  onSubmit }) => {
  const { initTitle, initSummary, initBody, initCoverUrl } = initPost;

  const [title, setTitle] = useState(initTitle);
  const [summary, setSummary] = useState(initSummary);
  const [body, setBody] = useState(initBody);
  const [coverUrl, setCoverUrl] = useState(initCoverUrl);

  const [formErrors, setFormErros] = useState({});

  useEffect(() => {
    setTitle(initTitle);
    setSummary(initSummary);
    setBody(initBody);
    setCoverUrl(initCoverUrl);
  }, [initTitle, initBody, initSummary, initCoverUrl]);

  const onImageChange = (e) => {
    const [file] = e.target.files;
    setCoverUrl(URL.createObjectURL(file));
  };

  const convertUrlToFile = async (cover_url) => {
    const res = await fetch(cover_url);
    const blob = await res.blob();
    const file =  new File([blob], 'image.jpg');
    return file;
  };

  const validate = () => {
    const errors = {};
    if(!title) errors.title = 'post title cannot be empty';
    if(!summary) errors.summary = 'post summary cannot be empty';
    if(summary.length > 200) errors.summary = 'summary cannot be more than 200 characters';
    if(!body) errors.body = 'post body cannot be empty';
    if(!coverUrl) errors.coverUrl = 'post cover cannot be blank';
    return errors;
  };

  const shouldSubmit = (errors) => Object.keys(errors).length === 0;

  const handlePostSubmit = async (event) => {
    event.preventDefault();
    const errors = validate();
    setFormErros(errors);
    if(!shouldSubmit(errors)) return;
    
    const newPost = new FormData();
    newPost.set('post[title]', title);
    newPost.set('post[summary]', summary);
    newPost.set('post[body]', body);
    newPost.set('post[cover]', await convertUrlToFile(coverUrl));

    onSubmit(newPost);
  };

  const setSummaryCharCountClass = () => {
    let classes = 'ml-auto ';
    if(summary && summary.length > 200) classes += 'text-red-500';
    else classes += 'text-slate-800';
    return classes;
  }


  return (
    <form onSubmit={handlePostSubmit}>
      <div className="grid grid-cols-5 gap-6 h-48">
        <div className="col-span-3 h-full">
          <div>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="outline-none h-10 w-full rounded-md text-2xl font-bold"
              placeholder="New post"
            />
            <p className='text-red-500 text-sm'>{formErrors.title}</p>
          </div>
          <div className='mt-6'>
            <div className='flex mb-2'>
              <label className="block text font-medium text-slate-700">
                Summary
              </label>
              <div className={setSummaryCharCountClass()}>{summary ? summary.length: 0}<span className='font-semibold text-slate-800'> /{summaryCharLimit}</span></div>
            </div>
            <textarea
              type="text"
              value={summary}
              onChange={(e) => setSummary(e.target.value)}
              className="outline-none border-slate-200 border focus:border-slate-700 h-20 w-full rounded-md p-2 text resize-none"
              placeholder="what is the post about?"
            />
            <p className='text-red-500 text-sm'>{formErrors.summary}</p>
          </div>
        </div>
        <div className='col-span-2 h-full'>
          <label className="block mb-2 text font-medium text-slate-700">Cover photo</label>
          <div className="flex justify-center items-center border border-slate-200 border-dashed rounded-md h-3/4">
            {(coverUrl != null) || <div className="space-y-1 text-center">
              <svg
                className="mx-auto h-12 w-12 text-slate-400"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 48 48"
                aria-hidden="true"
              >
                <path
                  d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <div className="flex text-sm text-slate-600">
                <label
                  htmlFor="file-upload"
                  className="relative cursor-pointer bg-white rounded-md font-medium text-slate-600 hover:text-slate-800 focus:outline-none"
                >
                  <span>Upload a file</span>
                  <input id="file-upload" name="file-upload" type="file" className="sr-only" onChange={onImageChange} />
                </label>
                <p className="pl-1">or drag and drop</p>
              </div>
              <p className="text-xs text-slate-500">PNG, JPG, GIF up to 1MB</p>
            </div>}
            {(coverUrl == null) || <div className='h-full w-full'>
              <div className='cancel-img-btn' onClick={() => setCoverUrl(null)}>cancel</div>
              <img src={coverUrl} alt="" className='object-contain col-span-2 h-full w-full'/>
            </div>}
          </div>
          <p className='text-red-500 text-sm'>{formErrors.coverUrl}</p>
        </div>
      </div>

      <div data-color-mode="light" className="mt-8">
        <label className="mb-2 block text font-medium text-slate-700">
          Body
        </label>
        <MDEditor
          height={400}
          value={body}
          onChange={setBody}
        />
        <p className='text-red-500 text-sm mt-2'>{formErrors.body}</p>
      </div>

      <div className="mt-4 text-right">
        <button
          type="submit"
          className='save-btn'
        >
          Save
        </button>
      </div>
    </form>
  )
}

export default PostForm