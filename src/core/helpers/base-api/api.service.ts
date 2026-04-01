import AbstractApiService from '@core/helpers/base-api/abstract-api.service';
import { pathWithId } from '@shared/utils/util';

export class ApiService<T> extends AbstractApiService {
  public readonly PATH;
  public readonly Reassurance;

  constructor(
    endpoint: string,
    Reassurance: string = 'Performed'
  ) {
    super();
    this.PATH = endpoint;
    this.Reassurance = Reassurance;
  }

  async getAll(params = {}): Promise<T[]> {
    return await this.get<T[]>(this.PATH, params);
  }

  async getById(id: number | string): Promise<T> {
    return await this.getBy<T>(this.PATH, id);
  }

  async getByIdWithParmas({ id, params = {} }: { id: number | string; params: object }): Promise<T> {
    return await this.getByWithParmas<T>(this.PATH, id, params);
  }

  async create(data: object): Promise<T> {
    return await this.post<T>(this.PATH, data);
  }

  async bulkCreate(data: Array<T>, ): Promise<T> {
    return await this.post<T>(this.PATH, data );
  }

  async update(data: object, id: string | number, ): Promise<T> {
    return await this.put<T>(pathWithId(this.PATH, id.toString()), data );
  }

  async updateWithoutId(data: object, ): Promise<T> {
    return await this.put<T>(this.PATH, data );
  }
  async updateArrayWithoutId(data: Array<T>, ): Promise<T> {
    return await this.put<T>(this.PATH, data );
  }
  async updateArrayWithoutIdForAttendance(data: Array<T>): Promise<T> {
    return await this.put<T>(this.PATH, data);
  }
  async setArchived(id: string | number,): Promise<T> {
    return await this.delete<T>(pathWithId(this.PATH, id.toString()), );
  }

  async updateFormdata(data: FormData, id: string | number,): Promise<T> {
    return await this.updateBinaryData<T>(
      pathWithId(this.PATH, id.toString()),
      data
    );
  }

  async createFormData(data: FormData,): Promise<T> {
    return await this.uploadBinaryData<T>(this.PATH, data);
  }
}
