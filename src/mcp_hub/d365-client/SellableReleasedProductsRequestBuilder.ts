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
import { SellableReleasedProducts } from './SellableReleasedProducts';

/**
 * Request builder class for operations supported on the {@link SellableReleasedProducts} entity.
 */
export class SellableReleasedProductsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<SellableReleasedProducts<T>, T> {
  /**
   * Returns a request builder for querying all `SellableReleasedProducts` entities.
   * @returns A request builder for creating requests to retrieve all `SellableReleasedProducts` entities.
   */
  getAll(): GetAllRequestBuilder<SellableReleasedProducts<T>, T> {
    return new GetAllRequestBuilder<SellableReleasedProducts<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `SellableReleasedProducts` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `SellableReleasedProducts`.
   */
  create(
    entity: SellableReleasedProducts<T>
  ): CreateRequestBuilder<SellableReleasedProducts<T>, T> {
    return new CreateRequestBuilder<SellableReleasedProducts<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `SellableReleasedProducts` entity based on its keys.
   * @param dataAreaId Key property. See {@link SellableReleasedProducts.dataAreaId}.
   * @param productNumber Key property. See {@link SellableReleasedProducts.productNumber}.
   * @returns A request builder for creating requests to retrieve one `SellableReleasedProducts` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    productNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<SellableReleasedProducts<T>, T> {
    return new GetByKeyRequestBuilder<SellableReleasedProducts<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        ProductNumber: productNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `SellableReleasedProducts`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `SellableReleasedProducts`.
   */
  update(
    entity: SellableReleasedProducts<T>
  ): UpdateRequestBuilder<SellableReleasedProducts<T>, T> {
    return new UpdateRequestBuilder<SellableReleasedProducts<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `SellableReleasedProducts`.
   * @param dataAreaId Key property. See {@link SellableReleasedProducts.dataAreaId}.
   * @param productNumber Key property. See {@link SellableReleasedProducts.productNumber}.
   * @returns A request builder for creating requests that delete an entity of type `SellableReleasedProducts`.
   */
  delete(
    dataAreaId: string,
    productNumber: string
  ): DeleteRequestBuilder<SellableReleasedProducts<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `SellableReleasedProducts`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `SellableReleasedProducts` by taking the entity as a parameter.
   */
  delete(
    entity: SellableReleasedProducts<T>
  ): DeleteRequestBuilder<SellableReleasedProducts<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    productNumber?: string
  ): DeleteRequestBuilder<SellableReleasedProducts<T>, T> {
    return new DeleteRequestBuilder<SellableReleasedProducts<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof SellableReleasedProducts
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ProductNumber: productNumber!
          }
    );
  }
}
