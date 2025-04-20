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
import { ProductMasters } from './ProductMasters';

/**
 * Request builder class for operations supported on the {@link ProductMasters} entity.
 */
export class ProductMastersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ProductMasters<T>, T> {
  /**
   * Returns a request builder for querying all `ProductMasters` entities.
   * @returns A request builder for creating requests to retrieve all `ProductMasters` entities.
   */
  getAll(): GetAllRequestBuilder<ProductMasters<T>, T> {
    return new GetAllRequestBuilder<ProductMasters<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ProductMasters` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ProductMasters`.
   */
  create(
    entity: ProductMasters<T>
  ): CreateRequestBuilder<ProductMasters<T>, T> {
    return new CreateRequestBuilder<ProductMasters<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ProductMasters` entity based on its keys.
   * @param productNumber Key property. See {@link ProductMasters.productNumber}.
   * @returns A request builder for creating requests to retrieve one `ProductMasters` entity based on its keys.
   */
  getByKey(
    productNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ProductMasters<T>, T> {
    return new GetByKeyRequestBuilder<ProductMasters<T>, T>(this.entityApi, {
      ProductNumber: productNumber
    });
  }

  /**
   * Returns a request builder for updating an entity of type `ProductMasters`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ProductMasters`.
   */
  update(
    entity: ProductMasters<T>
  ): UpdateRequestBuilder<ProductMasters<T>, T> {
    return new UpdateRequestBuilder<ProductMasters<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ProductMasters`.
   * @param productNumber Key property. See {@link ProductMasters.productNumber}.
   * @returns A request builder for creating requests that delete an entity of type `ProductMasters`.
   */
  delete(productNumber: string): DeleteRequestBuilder<ProductMasters<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ProductMasters`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ProductMasters` by taking the entity as a parameter.
   */
  delete(entity: ProductMasters<T>): DeleteRequestBuilder<ProductMasters<T>, T>;
  delete(
    productNumberOrEntity: any
  ): DeleteRequestBuilder<ProductMasters<T>, T> {
    return new DeleteRequestBuilder<ProductMasters<T>, T>(
      this.entityApi,
      productNumberOrEntity instanceof ProductMasters
        ? productNumberOrEntity
        : { ProductNumber: productNumberOrEntity! }
    );
  }
}
