import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'products'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary();
      table.string('name', 255).notNullable();
      table.decimal('base_price', 10, 2).notNullable();
      table.string('src', 255).notNullable();
      table.decimal('price', 10, 2).notNullable();
      table.integer('category_id').unsigned().references('id').inTable('categories').onDelete('CASCADE');
      table.timestamps(true, true);
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
