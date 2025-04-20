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
import { ReleasedProductsForAi } from './ReleasedProductsForAi';

/**
 * Request builder class for operations supported on the {@link ReleasedProductsForAi} entity.
 */
export class ReleasedProductsForAiRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ReleasedProductsForAi<T>, T> {
  /**
   * Returns a request builder for querying all `ReleasedProductsForAi` entities.
   * @returns A request builder for creating requests to retrieve all `ReleasedProductsForAi` entities.
   */
  getAll(): GetAllRequestBuilder<ReleasedProductsForAi<T>, T> {
    return new GetAllRequestBuilder<ReleasedProductsForAi<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ReleasedProductsForAi` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ReleasedProductsForAi`.
   */
  create(
    entity: ReleasedProductsForAi<T>
  ): CreateRequestBuilder<ReleasedProductsForAi<T>, T> {
    return new CreateRequestBuilder<ReleasedProductsForAi<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ReleasedProductsForAi` entity based on its keys.
   * @param dataAreaId Key property. See {@link ReleasedProductsForAi.dataAreaId}.
   * @param itemNumber Key property. See {@link ReleasedProductsForAi.itemNumber}.
   * @returns A request builder for creating requests to retrieve one `ReleasedProductsForAi` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    itemNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ReleasedProductsForAi<T>, T> {
    return new GetByKeyRequestBuilder<ReleasedProductsForAi<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        ItemNumber: itemNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ReleasedProductsForAi`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ReleasedProductsForAi`.
   */
  update(
    entity: ReleasedProductsForAi<T>
  ): UpdateRequestBuilder<ReleasedProductsForAi<T>, T> {
    return new UpdateRequestBuilder<ReleasedProductsForAi<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ReleasedProductsForAi`.
   * @param dataAreaId Key property. See {@link ReleasedProductsForAi.dataAreaId}.
   * @param itemNumber Key property. See {@link ReleasedProductsForAi.itemNumber}.
   * @returns A request builder for creating requests that delete an entity of type `ReleasedProductsForAi`.
   */
  delete(
    dataAreaId: string,
    itemNumber: string
  ): DeleteRequestBuilder<ReleasedProductsForAi<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ReleasedProductsForAi`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ReleasedProductsForAi` by taking the entity as a parameter.
   */
  delete(
    entity: ReleasedProductsForAi<T>
  ): DeleteRequestBuilder<ReleasedProductsForAi<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    itemNumber?: string
  ): DeleteRequestBuilder<ReleasedProductsForAi<T>, T> {
    return new DeleteRequestBuilder<ReleasedProductsForAi<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ReleasedProductsForAi
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ItemNumber: itemNumber!
          }
    );
  }
}
