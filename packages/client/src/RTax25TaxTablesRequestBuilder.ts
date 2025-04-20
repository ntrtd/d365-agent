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
import { RTax25TaxTables } from './RTax25TaxTables';
import { RTax25TaxModule } from './RTax25TaxModule';

/**
 * Request builder class for operations supported on the {@link RTax25TaxTables} entity.
 */
export class RTax25TaxTablesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RTax25TaxTables<T>, T> {
  /**
   * Returns a request builder for querying all `RTax25TaxTables` entities.
   * @returns A request builder for creating requests to retrieve all `RTax25TaxTables` entities.
   */
  getAll(): GetAllRequestBuilder<RTax25TaxTables<T>, T> {
    return new GetAllRequestBuilder<RTax25TaxTables<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `RTax25TaxTables` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RTax25TaxTables`.
   */
  create(
    entity: RTax25TaxTables<T>
  ): CreateRequestBuilder<RTax25TaxTables<T>, T> {
    return new CreateRequestBuilder<RTax25TaxTables<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RTax25TaxTables` entity based on its keys.
   * @param dataAreaId Key property. See {@link RTax25TaxTables.dataAreaId}.
   * @param module Key property. See {@link RTax25TaxTables.module}.
   * @param code Key property. See {@link RTax25TaxTables.code}.
   * @returns A request builder for creating requests to retrieve one `RTax25TaxTables` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    module: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.RTax25TaxModule'
    >,
    code: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<RTax25TaxTables<T>, T> {
    return new GetByKeyRequestBuilder<RTax25TaxTables<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      Module: module,
      Code: code
    });
  }

  /**
   * Returns a request builder for updating an entity of type `RTax25TaxTables`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RTax25TaxTables`.
   */
  update(
    entity: RTax25TaxTables<T>
  ): UpdateRequestBuilder<RTax25TaxTables<T>, T> {
    return new UpdateRequestBuilder<RTax25TaxTables<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RTax25TaxTables`.
   * @param dataAreaId Key property. See {@link RTax25TaxTables.dataAreaId}.
   * @param module Key property. See {@link RTax25TaxTables.module}.
   * @param code Key property. See {@link RTax25TaxTables.code}.
   * @returns A request builder for creating requests that delete an entity of type `RTax25TaxTables`.
   */
  delete(
    dataAreaId: string,
    module: RTax25TaxModule,
    code: string
  ): DeleteRequestBuilder<RTax25TaxTables<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RTax25TaxTables`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RTax25TaxTables` by taking the entity as a parameter.
   */
  delete(
    entity: RTax25TaxTables<T>
  ): DeleteRequestBuilder<RTax25TaxTables<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    module?: RTax25TaxModule,
    code?: string
  ): DeleteRequestBuilder<RTax25TaxTables<T>, T> {
    return new DeleteRequestBuilder<RTax25TaxTables<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof RTax25TaxTables
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            Module: module!,
            Code: code!
          }
    );
  }
}
