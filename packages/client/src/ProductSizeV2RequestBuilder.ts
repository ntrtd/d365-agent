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
import { ProductSizeV2 } from './ProductSizeV2';

/**
 * Request builder class for operations supported on the {@link ProductSizeV2} entity.
 */
export class ProductSizeV2RequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ProductSizeV2<T>, T> {
  /**
   * Returns a request builder for querying all `ProductSizeV2` entities.
   * @returns A request builder for creating requests to retrieve all `ProductSizeV2` entities.
   */
  getAll(): GetAllRequestBuilder<ProductSizeV2<T>, T> {
    return new GetAllRequestBuilder<ProductSizeV2<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ProductSizeV2` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ProductSizeV2`.
   */
  create(entity: ProductSizeV2<T>): CreateRequestBuilder<ProductSizeV2<T>, T> {
    return new CreateRequestBuilder<ProductSizeV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ProductSizeV2` entity based on its keys.
   * @param sizeId Key property. See {@link ProductSizeV2.sizeId}.
   * @returns A request builder for creating requests to retrieve one `ProductSizeV2` entity based on its keys.
   */
  getByKey(
    sizeId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ProductSizeV2<T>, T> {
    return new GetByKeyRequestBuilder<ProductSizeV2<T>, T>(this.entityApi, {
      SizeId: sizeId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `ProductSizeV2`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ProductSizeV2`.
   */
  update(entity: ProductSizeV2<T>): UpdateRequestBuilder<ProductSizeV2<T>, T> {
    return new UpdateRequestBuilder<ProductSizeV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ProductSizeV2`.
   * @param sizeId Key property. See {@link ProductSizeV2.sizeId}.
   * @returns A request builder for creating requests that delete an entity of type `ProductSizeV2`.
   */
  delete(sizeId: string): DeleteRequestBuilder<ProductSizeV2<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ProductSizeV2`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ProductSizeV2` by taking the entity as a parameter.
   */
  delete(entity: ProductSizeV2<T>): DeleteRequestBuilder<ProductSizeV2<T>, T>;
  delete(sizeIdOrEntity: any): DeleteRequestBuilder<ProductSizeV2<T>, T> {
    return new DeleteRequestBuilder<ProductSizeV2<T>, T>(
      this.entityApi,
      sizeIdOrEntity instanceof ProductSizeV2
        ? sizeIdOrEntity
        : { SizeId: sizeIdOrEntity! }
    );
  }
}
