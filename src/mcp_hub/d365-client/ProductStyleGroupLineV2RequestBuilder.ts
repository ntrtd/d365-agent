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
import { ProductStyleGroupLineV2 } from './ProductStyleGroupLineV2';

/**
 * Request builder class for operations supported on the {@link ProductStyleGroupLineV2} entity.
 */
export class ProductStyleGroupLineV2RequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ProductStyleGroupLineV2<T>, T> {
  /**
   * Returns a request builder for querying all `ProductStyleGroupLineV2` entities.
   * @returns A request builder for creating requests to retrieve all `ProductStyleGroupLineV2` entities.
   */
  getAll(): GetAllRequestBuilder<ProductStyleGroupLineV2<T>, T> {
    return new GetAllRequestBuilder<ProductStyleGroupLineV2<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ProductStyleGroupLineV2` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ProductStyleGroupLineV2`.
   */
  create(
    entity: ProductStyleGroupLineV2<T>
  ): CreateRequestBuilder<ProductStyleGroupLineV2<T>, T> {
    return new CreateRequestBuilder<ProductStyleGroupLineV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ProductStyleGroupLineV2` entity based on its keys.
   * @param productStyleGroupId Key property. See {@link ProductStyleGroupLineV2.productStyleGroupId}.
   * @param productStyleId Key property. See {@link ProductStyleGroupLineV2.productStyleId}.
   * @returns A request builder for creating requests to retrieve one `ProductStyleGroupLineV2` entity based on its keys.
   */
  getByKey(
    productStyleGroupId: DeserializedType<T, 'Edm.String'>,
    productStyleId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ProductStyleGroupLineV2<T>, T> {
    return new GetByKeyRequestBuilder<ProductStyleGroupLineV2<T>, T>(
      this.entityApi,
      {
        ProductStyleGroupId: productStyleGroupId,
        ProductStyleId: productStyleId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ProductStyleGroupLineV2`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ProductStyleGroupLineV2`.
   */
  update(
    entity: ProductStyleGroupLineV2<T>
  ): UpdateRequestBuilder<ProductStyleGroupLineV2<T>, T> {
    return new UpdateRequestBuilder<ProductStyleGroupLineV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ProductStyleGroupLineV2`.
   * @param productStyleGroupId Key property. See {@link ProductStyleGroupLineV2.productStyleGroupId}.
   * @param productStyleId Key property. See {@link ProductStyleGroupLineV2.productStyleId}.
   * @returns A request builder for creating requests that delete an entity of type `ProductStyleGroupLineV2`.
   */
  delete(
    productStyleGroupId: string,
    productStyleId: string
  ): DeleteRequestBuilder<ProductStyleGroupLineV2<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ProductStyleGroupLineV2`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ProductStyleGroupLineV2` by taking the entity as a parameter.
   */
  delete(
    entity: ProductStyleGroupLineV2<T>
  ): DeleteRequestBuilder<ProductStyleGroupLineV2<T>, T>;
  delete(
    productStyleGroupIdOrEntity: any,
    productStyleId?: string
  ): DeleteRequestBuilder<ProductStyleGroupLineV2<T>, T> {
    return new DeleteRequestBuilder<ProductStyleGroupLineV2<T>, T>(
      this.entityApi,
      productStyleGroupIdOrEntity instanceof ProductStyleGroupLineV2
        ? productStyleGroupIdOrEntity
        : {
            ProductStyleGroupId: productStyleGroupIdOrEntity!,
            ProductStyleId: productStyleId!
          }
    );
  }
}
