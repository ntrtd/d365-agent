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
import { ReleasedProductMasters } from './ReleasedProductMasters';

/**
 * Request builder class for operations supported on the {@link ReleasedProductMasters} entity.
 */
export class ReleasedProductMastersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ReleasedProductMasters<T>, T> {
  /**
   * Returns a request builder for querying all `ReleasedProductMasters` entities.
   * @returns A request builder for creating requests to retrieve all `ReleasedProductMasters` entities.
   */
  getAll(): GetAllRequestBuilder<ReleasedProductMasters<T>, T> {
    return new GetAllRequestBuilder<ReleasedProductMasters<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ReleasedProductMasters` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ReleasedProductMasters`.
   */
  create(
    entity: ReleasedProductMasters<T>
  ): CreateRequestBuilder<ReleasedProductMasters<T>, T> {
    return new CreateRequestBuilder<ReleasedProductMasters<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ReleasedProductMasters` entity based on its keys.
   * @param dataAreaId Key property. See {@link ReleasedProductMasters.dataAreaId}.
   * @param itemNumber Key property. See {@link ReleasedProductMasters.itemNumber}.
   * @returns A request builder for creating requests to retrieve one `ReleasedProductMasters` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    itemNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ReleasedProductMasters<T>, T> {
    return new GetByKeyRequestBuilder<ReleasedProductMasters<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        ItemNumber: itemNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ReleasedProductMasters`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ReleasedProductMasters`.
   */
  update(
    entity: ReleasedProductMasters<T>
  ): UpdateRequestBuilder<ReleasedProductMasters<T>, T> {
    return new UpdateRequestBuilder<ReleasedProductMasters<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ReleasedProductMasters`.
   * @param dataAreaId Key property. See {@link ReleasedProductMasters.dataAreaId}.
   * @param itemNumber Key property. See {@link ReleasedProductMasters.itemNumber}.
   * @returns A request builder for creating requests that delete an entity of type `ReleasedProductMasters`.
   */
  delete(
    dataAreaId: string,
    itemNumber: string
  ): DeleteRequestBuilder<ReleasedProductMasters<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ReleasedProductMasters`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ReleasedProductMasters` by taking the entity as a parameter.
   */
  delete(
    entity: ReleasedProductMasters<T>
  ): DeleteRequestBuilder<ReleasedProductMasters<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    itemNumber?: string
  ): DeleteRequestBuilder<ReleasedProductMasters<T>, T> {
    return new DeleteRequestBuilder<ReleasedProductMasters<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ReleasedProductMasters
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ItemNumber: itemNumber!
          }
    );
  }
}
