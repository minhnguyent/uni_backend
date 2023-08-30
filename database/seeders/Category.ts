import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Category from 'App/Models/Category'

export default class extends BaseSeeder {
  public async run () {
    await Category.createMany([
      {name:"CPU - Bộ vi xử lý"},
      {name:"Mainboard - Bo mạch chủ"},
      {name:"Ram máy tính"},
      {name:"Case - Thùng máy"},
      {name:"VGA - Card màn hình"},
      {name:"PSU - Nguồn máy tính"},
      {name:"Ổ cứng SSD"},
      {name:"Ổ cứng HDD"},
      {name:"Thẻ nhớ"},
      {name:"USB"},
      {name:"Ổ cứng di động"},
    ])
  }
}
