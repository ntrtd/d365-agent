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
import { ReleasedDistinctProductsV2 } from './ReleasedDistinctProductsV2';

/**
 * Request builder class for operations supported on the {@link ReleasedDistinctProductsV2} entity.
 */
export class ReleasedDistinctProductsV2RequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ReleasedDistinctProductsV2<T>, T> {
  /**
   * Returns a request builder for querying all `ReleasedDistinctProductsV2` entities.
   * @returns A request builder for creating requests to retrieve all `ReleasedDistinctProductsV2` entities.
   */
  getAll(): GetAllRequestBuilder<ReleasedDistinctProductsV2<T>, T> {
    return new GetAllRequestBuilder<ReleasedDistinctProductsV2<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ReleasedDistinctProductsV2` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ReleasedDistinctProductsV2`.
   */
  create(
    entity: ReleasedDistinctProductsV2<T>
  ): CreateRequestBuilder<ReleasedDistinctProductsV2<T>, T> {
    return new CreateRequestBuilder<ReleasedDistinctProductsV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ReleasedDistinctProductsV2` entity based on its keys.
   * @param dataAreaId Key property. See {@link ReleasedDistinctProductsV2.dataAreaId}.
   * @param itemNumber Key property. See {@link ReleasedDistinctProductsV2.itemNumber}.
   * @returns A request builder for creating requests to retrieve one `ReleasedDistinctProductsV2` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    itemNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ReleasedDistinctProductsV2<T>, T> {
    return new GetByKeyRequestBuilder<ReleasedDistinctProductsV2<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        ItemNumber: itemNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ReleasedDistinctProductsV2`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ReleasedDistinctProductsV2`.
   */
  update(
    entity: ReleasedDistinctProductsV2<T>
  ): UpdateRequestBuilder<ReleasedDistinctProductsV2<T>, T> {
    return new UpdateRequestBuilder<ReleasedDistinctProductsV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ReleasedDistinctProductsV2`.
   * @param dataAreaId Key property. See {@link ReleasedDistinctProductsV2.dataAreaId}.
   * @param itemNumber Key property. See {@link ReleasedDistinctProductsV2.itemNumber}.
   * @returns A request builder for creating requests that delete an entity of type `ReleasedDistinctProductsV2`.
   */
  delete(
    dataAreaId: string,
    itemNumber: string
  ): DeleteRequestBuilder<ReleasedDistinctProductsV2<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ReleasedDistinctProductsV2`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ReleasedDistinctProductsV2` by taking the entity as a parameter.
   */
  delete(
    entity: ReleasedDistinctProductsV2<T>
  ): DeleteRequestBuilder<ReleasedDistinctProductsV2<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    itemNumber?: string
  ): DeleteRequestBuilder<ReleasedDistinctProductsV2<T>, T> {
    return new DeleteRequestBuilder<ReleasedDistinctProductsV2<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ReleasedDistinctProductsV2
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ItemNumber: itemNumber!
          }
    );
  }
}
