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
import { ProductsV2 } from './ProductsV2';

/**
 * Request builder class for operations supported on the {@link ProductsV2} entity.
 */
export class ProductsV2RequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ProductsV2<T>, T> {
  /**
   * Returns a request builder for querying all `ProductsV2` entities.
   * @returns A request builder for creating requests to retrieve all `ProductsV2` entities.
   */
  getAll(): GetAllRequestBuilder<ProductsV2<T>, T> {
    return new GetAllRequestBuilder<ProductsV2<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ProductsV2` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ProductsV2`.
   */
  create(entity: ProductsV2<T>): CreateRequestBuilder<ProductsV2<T>, T> {
    return new CreateRequestBuilder<ProductsV2<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `ProductsV2` entity based on its keys.
   * @param productNumber Key property. See {@link ProductsV2.productNumber}.
   * @returns A request builder for creating requests to retrieve one `ProductsV2` entity based on its keys.
   */
  getByKey(
    productNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ProductsV2<T>, T> {
    return new GetByKeyRequestBuilder<ProductsV2<T>, T>(this.entityApi, {
      ProductNumber: productNumber
    });
  }

  /**
   * Returns a request builder for updating an entity of type `ProductsV2`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ProductsV2`.
   */
  update(entity: ProductsV2<T>): UpdateRequestBuilder<ProductsV2<T>, T> {
    return new UpdateRequestBuilder<ProductsV2<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `ProductsV2`.
   * @param productNumber Key property. See {@link ProductsV2.productNumber}.
   * @returns A request builder for creating requests that delete an entity of type `ProductsV2`.
   */
  delete(productNumber: string): DeleteRequestBuilder<ProductsV2<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ProductsV2`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ProductsV2` by taking the entity as a parameter.
   */
  delete(entity: ProductsV2<T>): DeleteRequestBuilder<ProductsV2<T>, T>;
  delete(productNumberOrEntity: any): DeleteRequestBuilder<ProductsV2<T>, T> {
    return new DeleteRequestBuilder<ProductsV2<T>, T>(
      this.entityApi,
      productNumberOrEntity instanceof ProductsV2
        ? productNumberOrEntity
        : { ProductNumber: productNumberOrEntity! }
    );
  }
}
