import React, { useState } from 'react'


const EditNote = (props) => {
  const [note, setNotes] = useState(props.currentNote)

  const handleInputChange = (event) => {
    const { name, value } = event.target

    setNotes({ ...note, [name]: value })
  }
  return (
    <div className="container">
      <h1 className="heading">Edit Note</h1>
​
      <div className="newnote-page ">
      <form
      onSubmit={(event) => {
        event.preventDefault()

        props.updateNote(note.id, note)
      }}
    >
          <div className="field">
            <label className="label">Note Title</label>
            <div className="control">
              <input className="input" type="text" value={note.title}
              onChange={handleInputChange}
              />
            </div>
          </div>
​
          <div class="field">
            <label class="label">Note Content</label>
            <div class="control">
              <textarea
                class="textarea"
                rows="10"
                cols="40"
                value={note.description}
                onChange={handleInputChange}
              ></textarea>
            </div>
          </div>
​
          <div class="field">
            <div class="control">
            <button>Update Note</button>
            <button
        onClick={() => props.setEditing(false)}
        className="button muted-button"
      >
      Cancel
      </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
export default EditNote;