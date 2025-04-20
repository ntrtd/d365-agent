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
import { ProductColorGroupLineV2 } from './ProductColorGroupLineV2';

/**
 * Request builder class for operations supported on the {@link ProductColorGroupLineV2} entity.
 */
export class ProductColorGroupLineV2RequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ProductColorGroupLineV2<T>, T> {
  /**
   * Returns a request builder for querying all `ProductColorGroupLineV2` entities.
   * @returns A request builder for creating requests to retrieve all `ProductColorGroupLineV2` entities.
   */
  getAll(): GetAllRequestBuilder<ProductColorGroupLineV2<T>, T> {
    return new GetAllRequestBuilder<ProductColorGroupLineV2<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ProductColorGroupLineV2` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ProductColorGroupLineV2`.
   */
  create(
    entity: ProductColorGroupLineV2<T>
  ): CreateRequestBuilder<ProductColorGroupLineV2<T>, T> {
    return new CreateRequestBuilder<ProductColorGroupLineV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ProductColorGroupLineV2` entity based on its keys.
   * @param productColorGroupId Key property. See {@link ProductColorGroupLineV2.productColorGroupId}.
   * @param colorName Key property. See {@link ProductColorGroupLineV2.colorName}.
   * @returns A request builder for creating requests to retrieve one `ProductColorGroupLineV2` entity based on its keys.
   */
  getByKey(
    productColorGroupId: DeserializedType<T, 'Edm.String'>,
    colorName: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ProductColorGroupLineV2<T>, T> {
    return new GetByKeyRequestBuilder<ProductColorGroupLineV2<T>, T>(
      this.entityApi,
      {
        ProductColorGroupId: productColorGroupId,
        ColorName: colorName
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ProductColorGroupLineV2`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ProductColorGroupLineV2`.
   */
  update(
    entity: ProductColorGroupLineV2<T>
  ): UpdateRequestBuilder<ProductColorGroupLineV2<T>, T> {
    return new UpdateRequestBuilder<ProductColorGroupLineV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ProductColorGroupLineV2`.
   * @param productColorGroupId Key property. See {@link ProductColorGroupLineV2.productColorGroupId}.
   * @param colorName Key property. See {@link ProductColorGroupLineV2.colorName}.
   * @returns A request builder for creating requests that delete an entity of type `ProductColorGroupLineV2`.
   */
  delete(
    productColorGroupId: string,
    colorName: string
  ): DeleteRequestBuilder<ProductColorGroupLineV2<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ProductColorGroupLineV2`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ProductColorGroupLineV2` by taking the entity as a parameter.
   */
  delete(
    entity: ProductColorGroupLineV2<T>
  ): DeleteRequestBuilder<ProductColorGroupLineV2<T>, T>;
  delete(
    productColorGroupIdOrEntity: any,
    colorName?: string
  ): DeleteRequestBuilder<ProductColorGroupLineV2<T>, T> {
    return new DeleteRequestBuilder<ProductColorGroupLineV2<T>, T>(
      this.entityApi,
      productColorGroupIdOrEntity instanceof ProductColorGroupLineV2
        ? productColorGroupIdOrEntity
        : {
            ProductColorGroupId: productColorGroupIdOrEntity!,
            ColorName: colorName!
          }
    );
  }
}
