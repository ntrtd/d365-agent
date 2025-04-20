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
import { RetailInventTable } from './RetailInventTable';

/**
 * Request builder class for operations supported on the {@link RetailInventTable} entity.
 */
export class RetailInventTableRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RetailInventTable<T>, T> {
  /**
   * Returns a request builder for querying all `RetailInventTable` entities.
   * @returns A request builder for creating requests to retrieve all `RetailInventTable` entities.
   */
  getAll(): GetAllRequestBuilder<RetailInventTable<T>, T> {
    return new GetAllRequestBuilder<RetailInventTable<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `RetailInventTable` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RetailInventTable`.
   */
  create(
    entity: RetailInventTable<T>
  ): CreateRequestBuilder<RetailInventTable<T>, T> {
    return new CreateRequestBuilder<RetailInventTable<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RetailInventTable` entity based on its keys.
   * @param dataAreaId Key property. See {@link RetailInventTable.dataAreaId}.
   * @param itemId Key property. See {@link RetailInventTable.itemId}.
   * @returns A request builder for creating requests to retrieve one `RetailInventTable` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    itemId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<RetailInventTable<T>, T> {
    return new GetByKeyRequestBuilder<RetailInventTable<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      ItemId: itemId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `RetailInventTable`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RetailInventTable`.
   */
  update(
    entity: RetailInventTable<T>
  ): UpdateRequestBuilder<RetailInventTable<T>, T> {
    return new UpdateRequestBuilder<RetailInventTable<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RetailInventTable`.
   * @param dataAreaId Key property. See {@link RetailInventTable.dataAreaId}.
   * @param itemId Key property. See {@link RetailInventTable.itemId}.
   * @returns A request builder for creating requests that delete an entity of type `RetailInventTable`.
   */
  delete(
    dataAreaId: string,
    itemId: string
  ): DeleteRequestBuilder<RetailInventTable<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RetailInventTable`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RetailInventTable` by taking the entity as a parameter.
   */
  delete(
    entity: RetailInventTable<T>
  ): DeleteRequestBuilder<RetailInventTable<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    itemId?: string
  ): DeleteRequestBuilder<RetailInventTable<T>, T> {
    return new DeleteRequestBuilder<RetailInventTable<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof RetailInventTable
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ItemId: itemId!
          }
    );
  }
}
