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
import { ProductMasterSizes } from './ProductMasterSizes';

/**
 * Request builder class for operations supported on the {@link ProductMasterSizes} entity.
 */
export class ProductMasterSizesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ProductMasterSizes<T>, T> {
  /**
   * Returns a request builder for querying all `ProductMasterSizes` entities.
   * @returns A request builder for creating requests to retrieve all `ProductMasterSizes` entities.
   */
  getAll(): GetAllRequestBuilder<ProductMasterSizes<T>, T> {
    return new GetAllRequestBuilder<ProductMasterSizes<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ProductMasterSizes` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ProductMasterSizes`.
   */
  create(
    entity: ProductMasterSizes<T>
  ): CreateRequestBuilder<ProductMasterSizes<T>, T> {
    return new CreateRequestBuilder<ProductMasterSizes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ProductMasterSizes` entity based on its keys.
   * @param productMasterNumber Key property. See {@link ProductMasterSizes.productMasterNumber}.
   * @param productSizeId Key property. See {@link ProductMasterSizes.productSizeId}.
   * @returns A request builder for creating requests to retrieve one `ProductMasterSizes` entity based on its keys.
   */
  getByKey(
    productMasterNumber: DeserializedType<T, 'Edm.String'>,
    productSizeId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ProductMasterSizes<T>, T> {
    return new GetByKeyRequestBuilder<ProductMasterSizes<T>, T>(
      this.entityApi,
      {
        ProductMasterNumber: productMasterNumber,
        ProductSizeId: productSizeId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ProductMasterSizes`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ProductMasterSizes`.
   */
  update(
    entity: ProductMasterSizes<T>
  ): UpdateRequestBuilder<ProductMasterSizes<T>, T> {
    return new UpdateRequestBuilder<ProductMasterSizes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ProductMasterSizes`.
   * @param productMasterNumber Key property. See {@link ProductMasterSizes.productMasterNumber}.
   * @param productSizeId Key property. See {@link ProductMasterSizes.productSizeId}.
   * @returns A request builder for creating requests that delete an entity of type `ProductMasterSizes`.
   */
  delete(
    productMasterNumber: string,
    productSizeId: string
  ): DeleteRequestBuilder<ProductMasterSizes<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ProductMasterSizes`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ProductMasterSizes` by taking the entity as a parameter.
   */
  delete(
    entity: ProductMasterSizes<T>
  ): DeleteRequestBuilder<ProductMasterSizes<T>, T>;
  delete(
    productMasterNumberOrEntity: any,
    productSizeId?: string
  ): DeleteRequestBuilder<ProductMasterSizes<T>, T> {
    return new DeleteRequestBuilder<ProductMasterSizes<T>, T>(
      this.entityApi,
      productMasterNumberOrEntity instanceof ProductMasterSizes
        ? productMasterNumberOrEntity
        : {
            ProductMasterNumber: productMasterNumberOrEntity!,
            ProductSizeId: productSizeId!
          }
    );
  }
}
