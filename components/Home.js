<div className="py-20 max-w-7xl mx-auto">
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {BOOKS.map((book) => (
        <Book
          key={book.id}
          image={book.image}
          title={book.title}
          author={book.author}
          category={book.category}
          price={book.price}
        />
      ))}
    </div>
</div>