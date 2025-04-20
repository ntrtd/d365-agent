/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  CreateRequestBuilder,
  DeSerializers,
  DefaultDeSerializers,
  DeleteRequestBuilder,
  DeserializedType,
  GetAllRequestBuilder,
  GetByKeyRequestBuilder,
  RequestBuilder,
  UpdateRequestBuilder
} from '@sap-cloud-sdk/odata-v4';
import { TaxTables } from './TaxTables';
import { RTax25TaxModule } from './RTax25TaxModule';

/**
 * Request builder class for operations supported on the {@link TaxTables} entity.
 */
export class TaxTablesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<TaxTables<T>, T> {
  /**
   * Returns a request builder for querying all `TaxTables` entities.
   * @returns A request builder for creating requests to retrieve all `TaxTables` entities.
   */
  getAll(): GetAllRequestBuilder<TaxTables<T>, T> {
    return new GetAllRequestBuilder<TaxTables<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `TaxTables` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `TaxTables`.
   */
  create(entity: TaxTables<T>): CreateRequestBuilder<TaxTables<T>, T> {
    return new CreateRequestBuilder<TaxTables<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `TaxTables` entity based on its keys.
   * @param dataAreaId Key property. See {@link TaxTables.dataAreaId}.
   * @param module Key property. See {@link TaxTables.module}.
   * @param code Key property. See {@link TaxTables.code}.
   * @returns A request builder for creating requests to retrieve one `TaxTables` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    module: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.RTax25TaxModule'
    >,
    code: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<TaxTables<T>, T> {
    return new GetByKeyRequestBuilder<TaxTables<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      Module: module,
      Code: code
    });
  }

  /**
   * Returns a request builder for updating an entity of type `TaxTables`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `TaxTables`.
   */
  update(entity: TaxTables<T>): UpdateRequestBuilder<TaxTables<T>, T> {
    return new UpdateRequestBuilder<TaxTables<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `TaxTables`.
   * @param dataAreaId Key property. See {@link TaxTables.dataAreaId}.
   * @param module Key property. See {@link TaxTables.module}.
   * @param code Key property. See {@link TaxTables.code}.
   * @returns A request builder for creating requests that delete an entity of type `TaxTables`.
   */
  delete(
    dataAreaId: string,
    module: RTax25TaxModule,
    code: string
  ): DeleteRequestBuilder<TaxTables<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `TaxTables`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `TaxTables` by taking the entity as a parameter.
   */
  delete(entity: TaxTables<T>): DeleteRequestBuilder<TaxTables<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    module?: RTax25TaxModule,
    code?: string
  ): DeleteRequestBuilder<TaxTables<T>, T> {
    return new DeleteRequestBuilder<TaxTables<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof TaxTables
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            Module: module!,
            Code: code!
          }
    );
  }
}
