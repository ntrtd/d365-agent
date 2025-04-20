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
import { ProductStyleV2 } from './ProductStyleV2';

/**
 * Request builder class for operations supported on the {@link ProductStyleV2} entity.
 */
export class ProductStyleV2RequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ProductStyleV2<T>, T> {
  /**
   * Returns a request builder for querying all `ProductStyleV2` entities.
   * @returns A request builder for creating requests to retrieve all `ProductStyleV2` entities.
   */
  getAll(): GetAllRequestBuilder<ProductStyleV2<T>, T> {
    return new GetAllRequestBuilder<ProductStyleV2<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ProductStyleV2` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ProductStyleV2`.
   */
  create(
    entity: ProductStyleV2<T>
  ): CreateRequestBuilder<ProductStyleV2<T>, T> {
    return new CreateRequestBuilder<ProductStyleV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ProductStyleV2` entity based on its keys.
   * @param styleId Key property. See {@link ProductStyleV2.styleId}.
   * @returns A request builder for creating requests to retrieve one `ProductStyleV2` entity based on its keys.
   */
  getByKey(
    styleId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ProductStyleV2<T>, T> {
    return new GetByKeyRequestBuilder<ProductStyleV2<T>, T>(this.entityApi, {
      StyleId: styleId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `ProductStyleV2`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ProductStyleV2`.
   */
  update(
    entity: ProductStyleV2<T>
  ): UpdateRequestBuilder<ProductStyleV2<T>, T> {
    return new UpdateRequestBuilder<ProductStyleV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ProductStyleV2`.
   * @param styleId Key property. See {@link ProductStyleV2.styleId}.
   * @returns A request builder for creating requests that delete an entity of type `ProductStyleV2`.
   */
  delete(styleId: string): DeleteRequestBuilder<ProductStyleV2<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ProductStyleV2`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ProductStyleV2` by taking the entity as a parameter.
   */
  delete(entity: ProductStyleV2<T>): DeleteRequestBuilder<ProductStyleV2<T>, T>;
  delete(styleIdOrEntity: any): DeleteRequestBuilder<ProductStyleV2<T>, T> {
    return new DeleteRequestBuilder<ProductStyleV2<T>, T>(
      this.entityApi,
      styleIdOrEntity instanceof ProductStyleV2
        ? styleIdOrEntity
        : { StyleId: styleIdOrEntity! }
    );
  }
}
