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
import { ProductColorGroupLines } from './ProductColorGroupLines';

/**
 * Request builder class for operations supported on the {@link ProductColorGroupLines} entity.
 */
export class ProductColorGroupLinesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ProductColorGroupLines<T>, T> {
  /**
   * Returns a request builder for querying all `ProductColorGroupLines` entities.
   * @returns A request builder for creating requests to retrieve all `ProductColorGroupLines` entities.
   */
  getAll(): GetAllRequestBuilder<ProductColorGroupLines<T>, T> {
    return new GetAllRequestBuilder<ProductColorGroupLines<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ProductColorGroupLines` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ProductColorGroupLines`.
   */
  create(
    entity: ProductColorGroupLines<T>
  ): CreateRequestBuilder<ProductColorGroupLines<T>, T> {
    return new CreateRequestBuilder<ProductColorGroupLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ProductColorGroupLines` entity based on its keys.
   * @param productColorGroupId Key property. See {@link ProductColorGroupLines.productColorGroupId}.
   * @param productColorId Key property. See {@link ProductColorGroupLines.productColorId}.
   * @returns A request builder for creating requests to retrieve one `ProductColorGroupLines` entity based on its keys.
   */
  getByKey(
    productColorGroupId: DeserializedType<T, 'Edm.String'>,
    productColorId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ProductColorGroupLines<T>, T> {
    return new GetByKeyRequestBuilder<ProductColorGroupLines<T>, T>(
      this.entityApi,
      {
        ProductColorGroupId: productColorGroupId,
        ProductColorId: productColorId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ProductColorGroupLines`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ProductColorGroupLines`.
   */
  update(
    entity: ProductColorGroupLines<T>
  ): UpdateRequestBuilder<ProductColorGroupLines<T>, T> {
    return new UpdateRequestBuilder<ProductColorGroupLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ProductColorGroupLines`.
   * @param productColorGroupId Key property. See {@link ProductColorGroupLines.productColorGroupId}.
   * @param productColorId Key property. See {@link ProductColorGroupLines.productColorId}.
   * @returns A request builder for creating requests that delete an entity of type `ProductColorGroupLines`.
   */
  delete(
    productColorGroupId: string,
    productColorId: string
  ): DeleteRequestBuilder<ProductColorGroupLines<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ProductColorGroupLines`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ProductColorGroupLines` by taking the entity as a parameter.
   */
  delete(
    entity: ProductColorGroupLines<T>
  ): DeleteRequestBuilder<ProductColorGroupLines<T>, T>;
  delete(
    productColorGroupIdOrEntity: any,
    productColorId?: string
  ): DeleteRequestBuilder<ProductColorGroupLines<T>, T> {
    return new DeleteRequestBuilder<ProductColorGroupLines<T>, T>(
      this.entityApi,
      productColorGroupIdOrEntity instanceof ProductColorGroupLines
        ? productColorGroupIdOrEntity
        : {
            ProductColorGroupId: productColorGroupIdOrEntity!,
            ProductColorId: productColorId!
          }
    );
  }
}
