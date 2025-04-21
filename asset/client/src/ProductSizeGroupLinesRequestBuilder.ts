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
import { ProductSizeGroupLines } from './ProductSizeGroupLines';

/**
 * Request builder class for operations supported on the {@link ProductSizeGroupLines} entity.
 */
export class ProductSizeGroupLinesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ProductSizeGroupLines<T>, T> {
  /**
   * Returns a request builder for querying all `ProductSizeGroupLines` entities.
   * @returns A request builder for creating requests to retrieve all `ProductSizeGroupLines` entities.
   */
  getAll(): GetAllRequestBuilder<ProductSizeGroupLines<T>, T> {
    return new GetAllRequestBuilder<ProductSizeGroupLines<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ProductSizeGroupLines` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ProductSizeGroupLines`.
   */
  create(
    entity: ProductSizeGroupLines<T>
  ): CreateRequestBuilder<ProductSizeGroupLines<T>, T> {
    return new CreateRequestBuilder<ProductSizeGroupLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ProductSizeGroupLines` entity based on its keys.
   * @param productSizeGroupId Key property. See {@link ProductSizeGroupLines.productSizeGroupId}.
   * @param productSizeId Key property. See {@link ProductSizeGroupLines.productSizeId}.
   * @returns A request builder for creating requests to retrieve one `ProductSizeGroupLines` entity based on its keys.
   */
  getByKey(
    productSizeGroupId: DeserializedType<T, 'Edm.String'>,
    productSizeId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ProductSizeGroupLines<T>, T> {
    return new GetByKeyRequestBuilder<ProductSizeGroupLines<T>, T>(
      this.entityApi,
      {
        ProductSizeGroupId: productSizeGroupId,
        ProductSizeId: productSizeId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ProductSizeGroupLines`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ProductSizeGroupLines`.
   */
  update(
    entity: ProductSizeGroupLines<T>
  ): UpdateRequestBuilder<ProductSizeGroupLines<T>, T> {
    return new UpdateRequestBuilder<ProductSizeGroupLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ProductSizeGroupLines`.
   * @param productSizeGroupId Key property. See {@link ProductSizeGroupLines.productSizeGroupId}.
   * @param productSizeId Key property. See {@link ProductSizeGroupLines.productSizeId}.
   * @returns A request builder for creating requests that delete an entity of type `ProductSizeGroupLines`.
   */
  delete(
    productSizeGroupId: string,
    productSizeId: string
  ): DeleteRequestBuilder<ProductSizeGroupLines<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ProductSizeGroupLines`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ProductSizeGroupLines` by taking the entity as a parameter.
   */
  delete(
    entity: ProductSizeGroupLines<T>
  ): DeleteRequestBuilder<ProductSizeGroupLines<T>, T>;
  delete(
    productSizeGroupIdOrEntity: any,
    productSizeId?: string
  ): DeleteRequestBuilder<ProductSizeGroupLines<T>, T> {
    return new DeleteRequestBuilder<ProductSizeGroupLines<T>, T>(
      this.entityApi,
      productSizeGroupIdOrEntity instanceof ProductSizeGroupLines
        ? productSizeGroupIdOrEntity
        : {
            ProductSizeGroupId: productSizeGroupIdOrEntity!,
            ProductSizeId: productSizeId!
          }
    );
  }
}
