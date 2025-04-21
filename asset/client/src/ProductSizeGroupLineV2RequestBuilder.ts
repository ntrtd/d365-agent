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
import { ProductSizeGroupLineV2 } from './ProductSizeGroupLineV2';

/**
 * Request builder class for operations supported on the {@link ProductSizeGroupLineV2} entity.
 */
export class ProductSizeGroupLineV2RequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ProductSizeGroupLineV2<T>, T> {
  /**
   * Returns a request builder for querying all `ProductSizeGroupLineV2` entities.
   * @returns A request builder for creating requests to retrieve all `ProductSizeGroupLineV2` entities.
   */
  getAll(): GetAllRequestBuilder<ProductSizeGroupLineV2<T>, T> {
    return new GetAllRequestBuilder<ProductSizeGroupLineV2<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ProductSizeGroupLineV2` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ProductSizeGroupLineV2`.
   */
  create(
    entity: ProductSizeGroupLineV2<T>
  ): CreateRequestBuilder<ProductSizeGroupLineV2<T>, T> {
    return new CreateRequestBuilder<ProductSizeGroupLineV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ProductSizeGroupLineV2` entity based on its keys.
   * @param productSizeGroupId Key property. See {@link ProductSizeGroupLineV2.productSizeGroupId}.
   * @param sizeName Key property. See {@link ProductSizeGroupLineV2.sizeName}.
   * @returns A request builder for creating requests to retrieve one `ProductSizeGroupLineV2` entity based on its keys.
   */
  getByKey(
    productSizeGroupId: DeserializedType<T, 'Edm.String'>,
    sizeName: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ProductSizeGroupLineV2<T>, T> {
    return new GetByKeyRequestBuilder<ProductSizeGroupLineV2<T>, T>(
      this.entityApi,
      {
        ProductSizeGroupId: productSizeGroupId,
        SizeName: sizeName
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ProductSizeGroupLineV2`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ProductSizeGroupLineV2`.
   */
  update(
    entity: ProductSizeGroupLineV2<T>
  ): UpdateRequestBuilder<ProductSizeGroupLineV2<T>, T> {
    return new UpdateRequestBuilder<ProductSizeGroupLineV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ProductSizeGroupLineV2`.
   * @param productSizeGroupId Key property. See {@link ProductSizeGroupLineV2.productSizeGroupId}.
   * @param sizeName Key property. See {@link ProductSizeGroupLineV2.sizeName}.
   * @returns A request builder for creating requests that delete an entity of type `ProductSizeGroupLineV2`.
   */
  delete(
    productSizeGroupId: string,
    sizeName: string
  ): DeleteRequestBuilder<ProductSizeGroupLineV2<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ProductSizeGroupLineV2`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ProductSizeGroupLineV2` by taking the entity as a parameter.
   */
  delete(
    entity: ProductSizeGroupLineV2<T>
  ): DeleteRequestBuilder<ProductSizeGroupLineV2<T>, T>;
  delete(
    productSizeGroupIdOrEntity: any,
    sizeName?: string
  ): DeleteRequestBuilder<ProductSizeGroupLineV2<T>, T> {
    return new DeleteRequestBuilder<ProductSizeGroupLineV2<T>, T>(
      this.entityApi,
      productSizeGroupIdOrEntity instanceof ProductSizeGroupLineV2
        ? productSizeGroupIdOrEntity
        : {
            ProductSizeGroupId: productSizeGroupIdOrEntity!,
            SizeName: sizeName!
          }
    );
  }
}
