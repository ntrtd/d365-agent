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
import { NipTables } from './NipTables';

/**
 * Request builder class for operations supported on the {@link NipTables} entity.
 */
export class NipTablesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<NipTables<T>, T> {
  /**
   * Returns a request builder for querying all `NipTables` entities.
   * @returns A request builder for creating requests to retrieve all `NipTables` entities.
   */
  getAll(): GetAllRequestBuilder<NipTables<T>, T> {
    return new GetAllRequestBuilder<NipTables<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `NipTables` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `NipTables`.
   */
  create(entity: NipTables<T>): CreateRequestBuilder<NipTables<T>, T> {
    return new CreateRequestBuilder<NipTables<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `NipTables` entity based on its keys.
   * @param dataAreaId Key property. See {@link NipTables.dataAreaId}.
   * @param code Key property. See {@link NipTables.code}.
   * @returns A request builder for creating requests to retrieve one `NipTables` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    code: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<NipTables<T>, T> {
    return new GetByKeyRequestBuilder<NipTables<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      Code: code
    });
  }

  /**
   * Returns a request builder for updating an entity of type `NipTables`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `NipTables`.
   */
  update(entity: NipTables<T>): UpdateRequestBuilder<NipTables<T>, T> {
    return new UpdateRequestBuilder<NipTables<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `NipTables`.
   * @param dataAreaId Key property. See {@link NipTables.dataAreaId}.
   * @param code Key property. See {@link NipTables.code}.
   * @returns A request builder for creating requests that delete an entity of type `NipTables`.
   */
  delete(
    dataAreaId: string,
    code: string
  ): DeleteRequestBuilder<NipTables<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `NipTables`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `NipTables` by taking the entity as a parameter.
   */
  delete(entity: NipTables<T>): DeleteRequestBuilder<NipTables<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    code?: string
  ): DeleteRequestBuilder<NipTables<T>, T> {
    return new DeleteRequestBuilder<NipTables<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof NipTables
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            Code: code!
          }
    );
  }
}
