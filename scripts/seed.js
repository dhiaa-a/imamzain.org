const { db } = require('@vercel/postgres')
const {
  invoices,
  customers,
  revenue,
  users,
} = require('@/lib/placeholder-data.js')
const bcrypt = require('bcrypt')

async function seedLanguages(client) {
  try {
    // Use a transaction
    await client.sql`BEGIN`

    // Create the "languages" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS languages (
        ISO_code VARCHAR(2) PRIMARY KEY,
        name VARCHAR(255) NOT NULL
      );
    `

    console.log(`Created "languages" table`)

    // Insert data into the "languages" table using RETURNING
    const insertedLanguages = await Promise.all(
      languages.map(async (lang) => {
        const result = await client.sql`
          INSERT INTO languages (ISO_code, name)
          VALUES (${lang.ISO_639_1}, ${lang.name})
          ON CONFLICT (ISO_code) DO NOTHING
          RETURNING *;
        `

        return result[0] // Use RETURNING to get the inserted row
      }),
    )

    console.log(`Seeded ${insertedLanguages.length} languages`)

    // Commit the transaction
    await client.sql`COMMIT`

    return {
      createTable,
      languages: insertedLanguages,
    }
  } catch (error) {
    // Rollback the transaction on error
    await client.sql`ROLLBACK`

    console.error('Error seeding languages:', error)
    throw error
  }
}

async function seedCategories(client) {
  try {
    // Use a transaction
    await client.sql`BEGIN`

    // Create the "categories" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS categories (
        id SERIAL PRIMARY KEY,
        created_at TIMESTAMPTZ DEFAULT NOW(),
        updated_at TIMESTAMPTZ DEFAULT NOW(),
        deleted_at TIMESTAMPTZ
      );
    `

    console.log(`Created "categories" table`)

    // Insert data into the "categories" table using RETURNING
    const insertedCategories = await Promise.all(
      categories.map(async (category) => {
        const result = await client.sql`
          INSERT INTO categories (id, created_at, updated_at, deleted_at)
          VALUES (${category.id}, ${category.createdAt}, ${category.updatedAt}, ${category.deletedAt})
          ON CONFLICT (id) DO NOTHING
          RETURNING *;
        `

        return result[0] // Use RETURNING to get the inserted row
      }),
    )

    console.log(`Seeded ${insertedCategories.length} categories`)

    // Commit the transaction
    await client.sql`COMMIT`

    return {
      createTable,
      categories: insertedCategories,
    }
  } catch (error) {
    // Rollback the transaction on error
    await client.sql`ROLLBACK`

    console.error('Error seeding categories:', error)
    throw error
  }
}

async function seedBooks(client) {
  try {
    // Use a transaction
    await client.sql`BEGIN`

    // Create the "books" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS books (
        id SERIAL PRIMARY KEY,
        isbn VARCHAR(255),
        category_id INT REFERENCES categories(id),
        cover_image_url VARCHAR(255) NOT NULL,
        title VARCHAR(255) NOT NULL,
        author VARCHAR(255) NOT NULL,
        description TEXT CHECK (LENGTH(description) <= 1000),
        pages_count INT,
        chapters_count INT DEFAULT 1,
        issue_date DATE,
        publisher VARCHAR(255),
        print_house VARCHAR(255),
        file_location VARCHAR(255),
        available_languages TEXT[], -- Array of strings
        created_at TIMESTAMPTZ DEFAULT NOW(),
        deleted_at TIMESTAMPTZ
      );
    `

    console.log(`Created "books" table`)

    // Insert data into the "books" table using RETURNING
    const insertedBooks = await Promise.all(
      books.map(async (book) => {
        const result = await client.sql`
          INSERT INTO books (isbn, category_id, cover_image_url, title, author, description, pages_count, chapters_count, issue_date, publisher, print_house, file_location, available_languages)
          VALUES (${book.isbn}, ${book.categoryId}, ${book.coverImageURL}, ${book.title}, ${book.author}, ${book.description}, ${book.pagesCount}, ${book.chaptersCount}, ${book.issueDate}, ${book.publisher}, ${book.printHouse}, ${book.fileLocation}, ${book.availableLanguages})
          ON CONFLICT (id) DO NOTHING
          RETURNING *;
        `

        return result[0] // Use RETURNING to get the inserted row
      })
    )

    console.log(`Seeded ${insertedBooks.length} books`)

    // Commit the transaction
    await client.sql`COMMIT`

    return {
      createTable,
      books: insertedBooks,
    }
  } catch (error) {
    // Rollback the transaction on error
    await client.sql`ROLLBACK`

    console.error('Error seeding books:', error)
    throw error
  }
}

async function seedEditors(client) {
  try {
    // Use a transaction
    await client.sql`BEGIN`

    // Create the "editors" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS editors (
        editor_id SERIAL PRIMARY KEY,
        created_at TIMESTAMPTZ DEFAULT NOW(),
        updated_at TIMESTAMPTZ DEFAULT NOW(),
        deleted_at TIMESTAMPTZ
      );
    `

    console.log(`Created "editors" table`)

    // Insert data into the "editors" table using RETURNING
    const insertedEditors = await Promise.all(
      editors.map(async (editor) => {
        const result = await client.sql`
          INSERT INTO editors (editor_id, created_at, updated_at, deleted_at)
          VALUES (${editor.editorId}, ${editor.createdAt}, ${editor.updatedAt}, ${editor.deletedAt})
          ON CONFLICT (editor_id) DO NOTHING
          RETURNING *;
        `

        return result[0] // Use RETURNING to get the inserted row
      }),
    )

    console.log(`Seeded ${insertedEditors.length} editors`)

    // Commit the transaction
    await client.sql`COMMIT`

    return {
      createTable,
      editors: insertedEditors,
    }
  } catch (error) {
    // Rollback the transaction on error
    await client.sql`ROLLBACK`

    console.error('Error seeding editors:', error)
    throw error
  }
}

async function seedPreviews(client) {
  try {
    // Use a transaction
    await client.sql`BEGIN`

    // Create the "previews" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS previews (
        id SERIAL PRIMARY KEY,
        book_id INT,
        page INT,
        created_at TIMESTAMPTZ DEFAULT NOW(),
        updated_at TIMESTAMPTZ DEFAULT NOW(),
        deleted_at TIMESTAMPTZ
      );
    `

    console.log(`Created "previews" table`)

    // Insert data into the "previews" table using RETURNING
    const insertedPreviews = await Promise.all(
      previews.map(async (preview) => {
        const result = await client.sql`
          INSERT INTO previews (id, book_id, page, created_at, updated_at, deleted_at)
          VALUES (${preview.id}, ${preview.bookId}, ${preview.page}, ${preview.createdAt}, ${preview.updatedAt}, ${preview.deletedAt})
          ON CONFLICT (id) DO NOTHING
          RETURNING *;
        `

        return result[0] // Use RETURNING to get the inserted row
      }),
    )

    console.log(`Seeded ${insertedPreviews.length} previews`)

    // Commit the transaction
    await client.sql`COMMIT`

    return {
      createTable,
      previews: insertedPreviews,
    }
  } catch (error) {
    // Rollback the transaction on error
    await client.sql`ROLLBACK`

    console.error('Error seeding previews:', error)
    throw error
  }
}

async function seedActivity(client) {
  try {
    // Use a transaction
    await client.sql`BEGIN`

    // Create the "activity" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS activity (
        id SERIAL PRIMARY KEY,
        thumbnail VARCHAR(255),
        created_at TIMESTAMPTZ DEFAULT NOW(),
        updated_at TIMESTAMPTZ DEFAULT NOW(),
        deleted_at TIMESTAMPTZ
      );
    `

    console.log(`Created "activity" table`)

    // Insert data into the "activity" table using RETURNING
    const insertedActivity = await Promise.all(
      activity.map(async (act) => {
        const result = await client.sql`
          INSERT INTO activity (id, thumbnail, created_at, updated_at, deleted_at)
          VALUES (${act.id}, ${act.thumbnail}, ${act.createdAt}, ${act.updatedAt}, ${act.deletedAt})
          ON CONFLICT (id) DO NOTHING
          RETURNING *;
        `

        return result[0] // Use RETURNING to get the inserted row
      }),
    )

    console.log(`Seeded ${insertedActivity.length} activities`)

    // Commit the transaction
    await client.sql`COMMIT`

    return {
      createTable,
      activity: insertedActivity,
    }
  } catch (error) {
    // Rollback the transaction on error
    await client.sql`ROLLBACK`

    console.error('Error seeding activity:', error)
    throw error
  }
}

async function seedSpecializedLibrary(client) {
  try {
    // Use a transaction
    await client.sql`BEGIN`

    // Create the "specialized_library" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS specialized_library (
        item_id SERIAL PRIMARY KEY,
        category_id INT,
        category_name VARCHAR(255),
        editor_id INT,
        publishing_house_id INT,
        publishing_year TIMESTAMPTZ,
        created_at TIMESTAMPTZ DEFAULT NOW(),
        updated_at TIMESTAMPTZ DEFAULT NOW(),
        deleted_at TIMESTAMPTZ
      );
    `

    console.log(`Created "specialized_library" table`)

    // Insert data into the "specialized_library" table using RETURNING
    const insertedSpecializedLibrary = await Promise.all(
      specializedLibrary.map(async (library) => {
        const result = await client.sql`
          INSERT INTO specialized_library (item_id, category_id, category_name, editor_id, publishing_house_id, publishing_year, created_at, updated_at, deleted_at)
          VALUES (${library.itemId}, ${library.categoryId}, ${library.categoryName}, ${library.editorId}, ${library.publishingHouseId}, ${library.publishingYear}, ${library.createdAt}, ${library.updatedAt}, ${library.deletedAt})
          ON CONFLICT (item_id) DO NOTHING
          RETURNING *;
        `

        return result[0] // Use RETURNING to get the inserted row
      }),
    )

    console.log(`Seeded ${insertedSpecializedLibrary.length} specialized libraries`)

    // Commit the transaction
    await client.sql`COMMIT`

    return {
      createTable,
      specializedLibrary: insertedSpecializedLibrary,
    }
  } catch (error) {
    // Rollback the transaction on error
    await client.sql`ROLLBACK`

    console.error('Error seeding specialized libraries:', error)
    throw error
  }
}

async function seedSearchLog(client) {
  try {
    // Use a transaction
    await client.sql`BEGIN`

    // Create the "search_log" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS search_log (
        search_term VARCHAR(255) PRIMARY KEY,
        last_searched TIMESTAMPTZ DEFAULT NOW(),
        frequency INT
      );
    `

    console.log(`Created "search_log" table`)

    // Insert data into the "search_log" table using RETURNING
    const insertedSearchLogs = await Promise.all(
      searchLogs.map(async (log) => {
        const result = await client.sql`
          INSERT INTO search_log (search_term, last_searched, frequency)
          VALUES (${log.searchTerm}, ${log.lastSearched}, ${log.frequency})
          ON CONFLICT (search_term) DO NOTHING
          RETURNING *;
        `

        return result[0] // Use RETURNING to get the inserted row
      }),
    )

    console.log(`Seeded ${insertedSearchLogs.length} search logs`)

    // Commit the transaction
    await client.sql`COMMIT`

    return {
      createTable,
      searchLogs: insertedSearchLogs,
    }
  } catch (error) {
    // Rollback the transaction on error
    await client.sql`ROLLBACK`

    console.error('Error seeding search logs:', error)
    throw error
  }
}

async function seedUsers(client) {
  try {
    // Use a transaction
    await client.sql`BEGIN`

    // Create the "users" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        phone_number VARCHAR(20),
        email TEXT NOT NULL UNIQUE,
        username VARCHAR(50) NOT NULL UNIQUE,
        password TEXT NOT NULL,
        role VARCHAR(50) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `

    console.log(`Created "users" table`)

    // Insert data into the "users" table using RETURNING
    const insertedUsers = await Promise.all(
      users.map(async (user) => {
        const hashedPassword = await bcrypt.hash(user.password, 10)
        const result = await client.sql`
          INSERT INTO users (id, name, phone_number, email, username, password, role)
          VALUES (${user.id}, ${user.name}, ${user.phone_number}, ${user.email}, ${user.username}, ${hashedPassword}, ${user.role})
          ON CONFLICT (id) DO NOTHING
          RETURNING *;
        `

        return result[0] // Use RETURNING to get the inserted row
      }),
    )

    console.log(`Seeded ${insertedUsers.length} users`)

    // Commit the transaction
    await client.sql`COMMIT`

    return {
      createTable,
      users: insertedUsers,
    }
  } catch (error) {
    // Rollback the transaction on error
    await client.sql`ROLLBACK`

    console.error('Error seeding users:', error)
    throw error
  }
}

async function seedRoles(client) {
  try {
    // Use a transaction
    await client.sql`BEGIN`

    // Create the "roles" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS roles (
        id SERIAL PRIMARY KEY,
        name VARCHAR(50) NOT NULL UNIQUE,
        level INT NOT NULL,
        description TEXT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `

    console.log(`Created "roles" table`)

    // Insert data into the "roles" table using RETURNING
    const insertedRoles = await Promise.all(
      roles.map(async (role) => {
        const result = await client.sql`
          INSERT INTO roles (name, level, description)
          VALUES (${role.name}, ${role.level}, ${role.description})
          ON CONFLICT (name) DO NOTHING
          RETURNING *;
        `

        return result[0] // Use RETURNING to get the inserted row
      }),
    )

    console.log(`Seeded ${insertedRoles.length} roles`)

    // Commit the transaction
    await client.sql`COMMIT`

    return {
      createTable,
      roles: insertedRoles,
    }
  } catch (error) {
    // Rollback the transaction on error
    await client.sql`ROLLBACK`

    console.error('Error seeding roles:', error)
    throw error
  }
}

async function seedLogs(client) {
  try {
    // Use a transaction
    await client.sql`BEGIN`

    // Create the "logs" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS logs (
        id SERIAL PRIMARY KEY,
        action VARCHAR(50) NOT NULL,
        action_details TEXT,
        action_type LOG_ACTION_TYPE NOT NULL,
        datetime TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );

      -- Create the enum type
      CREATE TYPE LOG_ACTION_TYPE AS ENUM ('EXTERNAL', 'INTERNAL');
    `

    console.log(`Created "logs" table`)

    // Insert data into the "logs" table using RETURNING
    const insertedLogs = await Promise.all(
      logs.map(async (log) => {
        const result = await client.sql`
          INSERT INTO logs (action, action_details, action_type)
          VALUES (${logs.action}, ${logs.action_details}, ${logs.action_type})
          RETURNING *;
        `

        return result[0] // Use RETURNING to get the inserted row
      }),
    )

    console.log(`Seeded ${insertedLogs.length} logs`)

    // Commit the transaction
    await client.sql`COMMIT`

    return {
      createTable,
      logs: insertedLogs,
    }
  } catch (error) {
    // Rollback the transaction on error
    await client.sql`ROLLBACK`

    console.error('Error seeding logs:', error)
    throw error
  }
}


async function main() {
  const client = await db.connect()

  await seedLanguages(client)
  await seedActivity(client)
  await seedBooks(client)
  await seedCategories(client)
  await seedEditors(client)
  await seedLogs(client)
  await seedPreviews(client)
  await seedRoles(client)
  await seedSearchLog(client)
  await seedSpecializedLibrary(client)
  await seedUsersa(client)

  await client.end()
}

main().catch((err) => {
  console.error(
    'An error occurred while attempting to seed the database:',
    err,
  )
})