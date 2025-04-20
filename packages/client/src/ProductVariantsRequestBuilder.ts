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
import { ProductVariants } from './ProductVariants';

/**
 * Request builder class for operations supported on the {@link ProductVariants} entity.
 */
export class ProductVariantsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ProductVariants<T>, T> {
  /**
   * Returns a request builder for querying all `ProductVariants` entities.
   * @returns A request builder for creating requests to retrieve all `ProductVariants` entities.
   */
  getAll(): GetAllRequestBuilder<ProductVariants<T>, T> {
    return new GetAllRequestBuilder<ProductVariants<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ProductVariants` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ProductVariants`.
   */
  create(
    entity: ProductVariants<T>
  ): CreateRequestBuilder<ProductVariants<T>, T> {
    return new CreateRequestBuilder<ProductVariants<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ProductVariants` entity based on its keys.
   * @param productMasterNumber Key property. See {@link ProductVariants.productMasterNumber}.
   * @param productConfigurationId Key property. See {@link ProductVariants.productConfigurationId}.
   * @param productSizeId Key property. See {@link ProductVariants.productSizeId}.
   * @param productColorId Key property. See {@link ProductVariants.productColorId}.
   * @param productStyleId Key property. See {@link ProductVariants.productStyleId}.
   * @returns A request builder for creating requests to retrieve one `ProductVariants` entity based on its keys.
   */
  getByKey(
    productMasterNumber: DeserializedType<T, 'Edm.String'>,
    productConfigurationId: DeserializedType<T, 'Edm.String'>,
    productSizeId: DeserializedType<T, 'Edm.String'>,
    productColorId: DeserializedType<T, 'Edm.String'>,
    productStyleId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ProductVariants<T>, T> {
    return new GetByKeyRequestBuilder<ProductVariants<T>, T>(this.entityApi, {
      ProductMasterNumber: productMasterNumber,
      ProductConfigurationId: productConfigurationId,
      ProductSizeId: productSizeId,
      ProductColorId: productColorId,
      ProductStyleId: productStyleId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `ProductVariants`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ProductVariants`.
   */
  update(
    entity: ProductVariants<T>
  ): UpdateRequestBuilder<ProductVariants<T>, T> {
    return new UpdateRequestBuilder<ProductVariants<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ProductVariants`.
   * @param productMasterNumber Key property. See {@link ProductVariants.productMasterNumber}.
   * @param productConfigurationId Key property. See {@link ProductVariants.productConfigurationId}.
   * @param productSizeId Key property. See {@link ProductVariants.productSizeId}.
   * @param productColorId Key property. See {@link ProductVariants.productColorId}.
   * @param productStyleId Key property. See {@link ProductVariants.productStyleId}.
   * @returns A request builder for creating requests that delete an entity of type `ProductVariants`.
   */
  delete(
    productMasterNumber: string,
    productConfigurationId: string,
    productSizeId: string,
    productColorId: string,
    productStyleId: string
  ): DeleteRequestBuilder<ProductVariants<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ProductVariants`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ProductVariants` by taking the entity as a parameter.
   */
  delete(
    entity: ProductVariants<T>
  ): DeleteRequestBuilder<ProductVariants<T>, T>;
  delete(
    productMasterNumberOrEntity: any,
    productConfigurationId?: string,
    productSizeId?: string,
    productColorId?: string,
    productStyleId?: string
  ): DeleteRequestBuilder<ProductVariants<T>, T> {
    return new DeleteRequestBuilder<ProductVariants<T>, T>(
      this.entityApi,
      productMasterNumberOrEntity instanceof ProductVariants
        ? productMasterNumberOrEntity
        : {
            ProductMasterNumber: productMasterNumberOrEntity!,
            ProductConfigurationId: productConfigurationId!,
            ProductSizeId: productSizeId!,
            ProductColorId: productColorId!,
            ProductStyleId: productStyleId!
          }
    );
  }
}
