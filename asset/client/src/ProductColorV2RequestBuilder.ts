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
import { ProductColorV2 } from './ProductColorV2';

/**
 * Request builder class for operations supported on the {@link ProductColorV2} entity.
 */
export class ProductColorV2RequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ProductColorV2<T>, T> {
  /**
   * Returns a request builder for querying all `ProductColorV2` entities.
   * @returns A request builder for creating requests to retrieve all `ProductColorV2` entities.
   */
  getAll(): GetAllRequestBuilder<ProductColorV2<T>, T> {
    return new GetAllRequestBuilder<ProductColorV2<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ProductColorV2` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ProductColorV2`.
   */
  create(
    entity: ProductColorV2<T>
  ): CreateRequestBuilder<ProductColorV2<T>, T> {
    return new CreateRequestBuilder<ProductColorV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ProductColorV2` entity based on its keys.
   * @param colorId Key property. See {@link ProductColorV2.colorId}.
   * @returns A request builder for creating requests to retrieve one `ProductColorV2` entity based on its keys.
   */
  getByKey(
    colorId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ProductColorV2<T>, T> {
    return new GetByKeyRequestBuilder<ProductColorV2<T>, T>(this.entityApi, {
      ColorId: colorId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `ProductColorV2`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ProductColorV2`.
   */
  update(
    entity: ProductColorV2<T>
  ): UpdateRequestBuilder<ProductColorV2<T>, T> {
    return new UpdateRequestBuilder<ProductColorV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ProductColorV2`.
   * @param colorId Key property. See {@link ProductColorV2.colorId}.
   * @returns A request builder for creating requests that delete an entity of type `ProductColorV2`.
   */
  delete(colorId: string): DeleteRequestBuilder<ProductColorV2<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ProductColorV2`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ProductColorV2` by taking the entity as a parameter.
   */
  delete(entity: ProductColorV2<T>): DeleteRequestBuilder<ProductColorV2<T>, T>;
  delete(colorIdOrEntity: any): DeleteRequestBuilder<ProductColorV2<T>, T> {
    return new DeleteRequestBuilder<ProductColorV2<T>, T>(
      this.entityApi,
      colorIdOrEntity instanceof ProductColorV2
        ? colorIdOrEntity
        : { ColorId: colorIdOrEntity! }
    );
  }
}
