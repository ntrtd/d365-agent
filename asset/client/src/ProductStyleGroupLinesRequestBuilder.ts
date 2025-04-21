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
import { ProductStyleGroupLines } from './ProductStyleGroupLines';

/**
 * Request builder class for operations supported on the {@link ProductStyleGroupLines} entity.
 */
export class ProductStyleGroupLinesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ProductStyleGroupLines<T>, T> {
  /**
   * Returns a request builder for querying all `ProductStyleGroupLines` entities.
   * @returns A request builder for creating requests to retrieve all `ProductStyleGroupLines` entities.
   */
  getAll(): GetAllRequestBuilder<ProductStyleGroupLines<T>, T> {
    return new GetAllRequestBuilder<ProductStyleGroupLines<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ProductStyleGroupLines` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ProductStyleGroupLines`.
   */
  create(
    entity: ProductStyleGroupLines<T>
  ): CreateRequestBuilder<ProductStyleGroupLines<T>, T> {
    return new CreateRequestBuilder<ProductStyleGroupLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ProductStyleGroupLines` entity based on its keys.
   * @param productStyleGroupId Key property. See {@link ProductStyleGroupLines.productStyleGroupId}.
   * @param productStyleId Key property. See {@link ProductStyleGroupLines.productStyleId}.
   * @returns A request builder for creating requests to retrieve one `ProductStyleGroupLines` entity based on its keys.
   */
  getByKey(
    productStyleGroupId: DeserializedType<T, 'Edm.String'>,
    productStyleId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ProductStyleGroupLines<T>, T> {
    return new GetByKeyRequestBuilder<ProductStyleGroupLines<T>, T>(
      this.entityApi,
      {
        ProductStyleGroupId: productStyleGroupId,
        ProductStyleId: productStyleId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ProductStyleGroupLines`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ProductStyleGroupLines`.
   */
  update(
    entity: ProductStyleGroupLines<T>
  ): UpdateRequestBuilder<ProductStyleGroupLines<T>, T> {
    return new UpdateRequestBuilder<ProductStyleGroupLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ProductStyleGroupLines`.
   * @param productStyleGroupId Key property. See {@link ProductStyleGroupLines.productStyleGroupId}.
   * @param productStyleId Key property. See {@link ProductStyleGroupLines.productStyleId}.
   * @returns A request builder for creating requests that delete an entity of type `ProductStyleGroupLines`.
   */
  delete(
    productStyleGroupId: string,
    productStyleId: string
  ): DeleteRequestBuilder<ProductStyleGroupLines<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ProductStyleGroupLines`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ProductStyleGroupLines` by taking the entity as a parameter.
   */
  delete(
    entity: ProductStyleGroupLines<T>
  ): DeleteRequestBuilder<ProductStyleGroupLines<T>, T>;
  delete(
    productStyleGroupIdOrEntity: any,
    productStyleId?: string
  ): DeleteRequestBuilder<ProductStyleGroupLines<T>, T> {
    return new DeleteRequestBuilder<ProductStyleGroupLines<T>, T>(
      this.entityApi,
      productStyleGroupIdOrEntity instanceof ProductStyleGroupLines
        ? productStyleGroupIdOrEntity
        : {
            ProductStyleGroupId: productStyleGroupIdOrEntity!,
            ProductStyleId: productStyleId!
          }
    );
  }
}
