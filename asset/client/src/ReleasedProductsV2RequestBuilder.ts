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
import { ReleasedProductsV2 } from './ReleasedProductsV2';

/**
 * Request builder class for operations supported on the {@link ReleasedProductsV2} entity.
 */
export class ReleasedProductsV2RequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ReleasedProductsV2<T>, T> {
  /**
   * Returns a request builder for querying all `ReleasedProductsV2` entities.
   * @returns A request builder for creating requests to retrieve all `ReleasedProductsV2` entities.
   */
  getAll(): GetAllRequestBuilder<ReleasedProductsV2<T>, T> {
    return new GetAllRequestBuilder<ReleasedProductsV2<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ReleasedProductsV2` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ReleasedProductsV2`.
   */
  create(
    entity: ReleasedProductsV2<T>
  ): CreateRequestBuilder<ReleasedProductsV2<T>, T> {
    return new CreateRequestBuilder<ReleasedProductsV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ReleasedProductsV2` entity based on its keys.
   * @param dataAreaId Key property. See {@link ReleasedProductsV2.dataAreaId}.
   * @param itemNumber Key property. See {@link ReleasedProductsV2.itemNumber}.
   * @returns A request builder for creating requests to retrieve one `ReleasedProductsV2` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    itemNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ReleasedProductsV2<T>, T> {
    return new GetByKeyRequestBuilder<ReleasedProductsV2<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        ItemNumber: itemNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ReleasedProductsV2`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ReleasedProductsV2`.
   */
  update(
    entity: ReleasedProductsV2<T>
  ): UpdateRequestBuilder<ReleasedProductsV2<T>, T> {
    return new UpdateRequestBuilder<ReleasedProductsV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ReleasedProductsV2`.
   * @param dataAreaId Key property. See {@link ReleasedProductsV2.dataAreaId}.
   * @param itemNumber Key property. See {@link ReleasedProductsV2.itemNumber}.
   * @returns A request builder for creating requests that delete an entity of type `ReleasedProductsV2`.
   */
  delete(
    dataAreaId: string,
    itemNumber: string
  ): DeleteRequestBuilder<ReleasedProductsV2<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ReleasedProductsV2`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ReleasedProductsV2` by taking the entity as a parameter.
   */
  delete(
    entity: ReleasedProductsV2<T>
  ): DeleteRequestBuilder<ReleasedProductsV2<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    itemNumber?: string
  ): DeleteRequestBuilder<ReleasedProductsV2<T>, T> {
    return new DeleteRequestBuilder<ReleasedProductsV2<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ReleasedProductsV2
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ItemNumber: itemNumber!
          }
    );
  }
}
