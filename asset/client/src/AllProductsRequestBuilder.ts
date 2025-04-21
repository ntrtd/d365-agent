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
import { AllProducts } from './AllProducts';

/**
 * Request builder class for operations supported on the {@link AllProducts} entity.
 */
export class AllProductsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<AllProducts<T>, T> {
  /**
   * Returns a request builder for querying all `AllProducts` entities.
   * @returns A request builder for creating requests to retrieve all `AllProducts` entities.
   */
  getAll(): GetAllRequestBuilder<AllProducts<T>, T> {
    return new GetAllRequestBuilder<AllProducts<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `AllProducts` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AllProducts`.
   */
  create(entity: AllProducts<T>): CreateRequestBuilder<AllProducts<T>, T> {
    return new CreateRequestBuilder<AllProducts<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `AllProducts` entity based on its keys.
   * @param productNumber Key property. See {@link AllProducts.productNumber}.
   * @returns A request builder for creating requests to retrieve one `AllProducts` entity based on its keys.
   */
  getByKey(
    productNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<AllProducts<T>, T> {
    return new GetByKeyRequestBuilder<AllProducts<T>, T>(this.entityApi, {
      ProductNumber: productNumber
    });
  }

  /**
   * Returns a request builder for updating an entity of type `AllProducts`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AllProducts`.
   */
  update(entity: AllProducts<T>): UpdateRequestBuilder<AllProducts<T>, T> {
    return new UpdateRequestBuilder<AllProducts<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `AllProducts`.
   * @param productNumber Key property. See {@link AllProducts.productNumber}.
   * @returns A request builder for creating requests that delete an entity of type `AllProducts`.
   */
  delete(productNumber: string): DeleteRequestBuilder<AllProducts<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `AllProducts`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AllProducts` by taking the entity as a parameter.
   */
  delete(entity: AllProducts<T>): DeleteRequestBuilder<AllProducts<T>, T>;
  delete(productNumberOrEntity: any): DeleteRequestBuilder<AllProducts<T>, T> {
    return new DeleteRequestBuilder<AllProducts<T>, T>(
      this.entityApi,
      productNumberOrEntity instanceof AllProducts
        ? productNumberOrEntity
        : { ProductNumber: productNumberOrEntity! }
    );
  }
}
