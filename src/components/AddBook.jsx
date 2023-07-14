const AddBook = () => (
  <div className="container border-top border-2 py-4 pb-5 mb-5">
    <form>
      <div className="row">
        <input className="border-0 rounded col col-6 me-3 w-5" type="text" name="title" placeholder="Book title" />
        <input className="border-0 rounded col me-3" type="text" name="author" placeholder="Author" />
        <input className="border-0 rounded col me-0 btn btn-primary" type="submit" value="Submit" />
      </div>
    </form>
  </div>
);

export default AddBook;
