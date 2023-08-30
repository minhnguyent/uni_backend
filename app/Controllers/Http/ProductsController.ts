import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database'
import Category from 'App/Models/Category'
import Product from 'App/Models/Product'

export default class ProductsController {

  public async index({ response, request }: HttpContextContract) {
    const page = request.input('page', 1);
    const perPage = 2;

    const data = await Product.query().paginate(page, perPage);

    return response.send(data);
  }

  public async productByCatId({ request, response, params }: HttpContextContract) {

    const { filter, page } = request.qs();
    const { catId } = params;

    let query = Database
      .query()
      .from('products')
      .join('categories', 'products.category_id', 'categories.id')
      .where('categories.id', catId)
      .select('products.*');

    if (filter) {
      query = query.where('products.name', 'like', `%${filter}%`);
    }

    const productsInCategory = await query.paginate(page, 10);

    return response.send(productsInCategory);
  }


  public async create({ }: HttpContextContract) { }

  public async store({ }: HttpContextContract) { }

  public async show({ }: HttpContextContract) { }

  public async edit({ }: HttpContextContract) { }

  public async update({ }: HttpContextContract) { }

  public async destroy({ }: HttpContextContract) { }
}
