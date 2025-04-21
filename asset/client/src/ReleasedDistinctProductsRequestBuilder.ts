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
import { ReleasedDistinctProducts } from './ReleasedDistinctProducts';

/**
 * Request builder class for operations supported on the {@link ReleasedDistinctProducts} entity.
 */
export class ReleasedDistinctProductsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ReleasedDistinctProducts<T>, T> {
  /**
   * Returns a request builder for querying all `ReleasedDistinctProducts` entities.
   * @returns A request builder for creating requests to retrieve all `ReleasedDistinctProducts` entities.
   */
  getAll(): GetAllRequestBuilder<ReleasedDistinctProducts<T>, T> {
    return new GetAllRequestBuilder<ReleasedDistinctProducts<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ReleasedDistinctProducts` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ReleasedDistinctProducts`.
   */
  create(
    entity: ReleasedDistinctProducts<T>
  ): CreateRequestBuilder<ReleasedDistinctProducts<T>, T> {
    return new CreateRequestBuilder<ReleasedDistinctProducts<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ReleasedDistinctProducts` entity based on its keys.
   * @param dataAreaId Key property. See {@link ReleasedDistinctProducts.dataAreaId}.
   * @param itemNumber Key property. See {@link ReleasedDistinctProducts.itemNumber}.
   * @returns A request builder for creating requests to retrieve one `ReleasedDistinctProducts` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    itemNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ReleasedDistinctProducts<T>, T> {
    return new GetByKeyRequestBuilder<ReleasedDistinctProducts<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        ItemNumber: itemNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ReleasedDistinctProducts`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ReleasedDistinctProducts`.
   */
  update(
    entity: ReleasedDistinctProducts<T>
  ): UpdateRequestBuilder<ReleasedDistinctProducts<T>, T> {
    return new UpdateRequestBuilder<ReleasedDistinctProducts<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ReleasedDistinctProducts`.
   * @param dataAreaId Key property. See {@link ReleasedDistinctProducts.dataAreaId}.
   * @param itemNumber Key property. See {@link ReleasedDistinctProducts.itemNumber}.
   * @returns A request builder for creating requests that delete an entity of type `ReleasedDistinctProducts`.
   */
  delete(
    dataAreaId: string,
    itemNumber: string
  ): DeleteRequestBuilder<ReleasedDistinctProducts<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ReleasedDistinctProducts`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ReleasedDistinctProducts` by taking the entity as a parameter.
   */
  delete(
    entity: ReleasedDistinctProducts<T>
  ): DeleteRequestBuilder<ReleasedDistinctProducts<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    itemNumber?: string
  ): DeleteRequestBuilder<ReleasedDistinctProducts<T>, T> {
    return new DeleteRequestBuilder<ReleasedDistinctProducts<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ReleasedDistinctProducts
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ItemNumber: itemNumber!
          }
    );
  }
}
