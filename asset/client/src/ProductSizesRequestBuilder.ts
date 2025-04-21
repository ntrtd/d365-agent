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
import { ProductSizes } from './ProductSizes';

/**
 * Request builder class for operations supported on the {@link ProductSizes} entity.
 */
export class ProductSizesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ProductSizes<T>, T> {
  /**
   * Returns a request builder for querying all `ProductSizes` entities.
   * @returns A request builder for creating requests to retrieve all `ProductSizes` entities.
   */
  getAll(): GetAllRequestBuilder<ProductSizes<T>, T> {
    return new GetAllRequestBuilder<ProductSizes<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ProductSizes` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ProductSizes`.
   */
  create(entity: ProductSizes<T>): CreateRequestBuilder<ProductSizes<T>, T> {
    return new CreateRequestBuilder<ProductSizes<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `ProductSizes` entity based on its keys.
   * @param sizeId Key property. See {@link ProductSizes.sizeId}.
   * @returns A request builder for creating requests to retrieve one `ProductSizes` entity based on its keys.
   */
  getByKey(
    sizeId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ProductSizes<T>, T> {
    return new GetByKeyRequestBuilder<ProductSizes<T>, T>(this.entityApi, {
      SizeId: sizeId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `ProductSizes`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ProductSizes`.
   */
  update(entity: ProductSizes<T>): UpdateRequestBuilder<ProductSizes<T>, T> {
    return new UpdateRequestBuilder<ProductSizes<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `ProductSizes`.
   * @param sizeId Key property. See {@link ProductSizes.sizeId}.
   * @returns A request builder for creating requests that delete an entity of type `ProductSizes`.
   */
  delete(sizeId: string): DeleteRequestBuilder<ProductSizes<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ProductSizes`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ProductSizes` by taking the entity as a parameter.
   */
  delete(entity: ProductSizes<T>): DeleteRequestBuilder<ProductSizes<T>, T>;
  delete(sizeIdOrEntity: any): DeleteRequestBuilder<ProductSizes<T>, T> {
    return new DeleteRequestBuilder<ProductSizes<T>, T>(
      this.entityApi,
      sizeIdOrEntity instanceof ProductSizes
        ? sizeIdOrEntity
        : { SizeId: sizeIdOrEntity! }
    );
  }
}
