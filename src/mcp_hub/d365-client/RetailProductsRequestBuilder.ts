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
import { RetailProducts } from './RetailProducts';

/**
 * Request builder class for operations supported on the {@link RetailProducts} entity.
 */
export class RetailProductsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RetailProducts<T>, T> {
  /**
   * Returns a request builder for querying all `RetailProducts` entities.
   * @returns A request builder for creating requests to retrieve all `RetailProducts` entities.
   */
  getAll(): GetAllRequestBuilder<RetailProducts<T>, T> {
    return new GetAllRequestBuilder<RetailProducts<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `RetailProducts` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RetailProducts`.
   */
  create(
    entity: RetailProducts<T>
  ): CreateRequestBuilder<RetailProducts<T>, T> {
    return new CreateRequestBuilder<RetailProducts<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RetailProducts` entity based on its keys.
   * @param productNumber Key property. See {@link RetailProducts.productNumber}.
   * @returns A request builder for creating requests to retrieve one `RetailProducts` entity based on its keys.
   */
  getByKey(
    productNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<RetailProducts<T>, T> {
    return new GetByKeyRequestBuilder<RetailProducts<T>, T>(this.entityApi, {
      ProductNumber: productNumber
    });
  }

  /**
   * Returns a request builder for updating an entity of type `RetailProducts`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RetailProducts`.
   */
  update(
    entity: RetailProducts<T>
  ): UpdateRequestBuilder<RetailProducts<T>, T> {
    return new UpdateRequestBuilder<RetailProducts<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RetailProducts`.
   * @param productNumber Key property. See {@link RetailProducts.productNumber}.
   * @returns A request builder for creating requests that delete an entity of type `RetailProducts`.
   */
  delete(productNumber: string): DeleteRequestBuilder<RetailProducts<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RetailProducts`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RetailProducts` by taking the entity as a parameter.
   */
  delete(entity: RetailProducts<T>): DeleteRequestBuilder<RetailProducts<T>, T>;
  delete(
    productNumberOrEntity: any
  ): DeleteRequestBuilder<RetailProducts<T>, T> {
    return new DeleteRequestBuilder<RetailProducts<T>, T>(
      this.entityApi,
      productNumberOrEntity instanceof RetailProducts
        ? productNumberOrEntity
        : { ProductNumber: productNumberOrEntity! }
    );
  }
}
