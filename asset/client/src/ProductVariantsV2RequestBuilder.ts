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
import { ProductVariantsV2 } from './ProductVariantsV2';

/**
 * Request builder class for operations supported on the {@link ProductVariantsV2} entity.
 */
export class ProductVariantsV2RequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ProductVariantsV2<T>, T> {
  /**
   * Returns a request builder for querying all `ProductVariantsV2` entities.
   * @returns A request builder for creating requests to retrieve all `ProductVariantsV2` entities.
   */
  getAll(): GetAllRequestBuilder<ProductVariantsV2<T>, T> {
    return new GetAllRequestBuilder<ProductVariantsV2<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ProductVariantsV2` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ProductVariantsV2`.
   */
  create(
    entity: ProductVariantsV2<T>
  ): CreateRequestBuilder<ProductVariantsV2<T>, T> {
    return new CreateRequestBuilder<ProductVariantsV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ProductVariantsV2` entity based on its keys.
   * @param productMasterNumber Key property. See {@link ProductVariantsV2.productMasterNumber}.
   * @param productConfigurationId Key property. See {@link ProductVariantsV2.productConfigurationId}.
   * @param productSizeId Key property. See {@link ProductVariantsV2.productSizeId}.
   * @param productColorId Key property. See {@link ProductVariantsV2.productColorId}.
   * @param productStyleId Key property. See {@link ProductVariantsV2.productStyleId}.
   * @param productVersionId Key property. See {@link ProductVariantsV2.productVersionId}.
   * @returns A request builder for creating requests to retrieve one `ProductVariantsV2` entity based on its keys.
   */
  getByKey(
    productMasterNumber: DeserializedType<T, 'Edm.String'>,
    productConfigurationId: DeserializedType<T, 'Edm.String'>,
    productSizeId: DeserializedType<T, 'Edm.String'>,
    productColorId: DeserializedType<T, 'Edm.String'>,
    productStyleId: DeserializedType<T, 'Edm.String'>,
    productVersionId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ProductVariantsV2<T>, T> {
    return new GetByKeyRequestBuilder<ProductVariantsV2<T>, T>(this.entityApi, {
      ProductMasterNumber: productMasterNumber,
      ProductConfigurationId: productConfigurationId,
      ProductSizeId: productSizeId,
      ProductColorId: productColorId,
      ProductStyleId: productStyleId,
      ProductVersionId: productVersionId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `ProductVariantsV2`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ProductVariantsV2`.
   */
  update(
    entity: ProductVariantsV2<T>
  ): UpdateRequestBuilder<ProductVariantsV2<T>, T> {
    return new UpdateRequestBuilder<ProductVariantsV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ProductVariantsV2`.
   * @param productMasterNumber Key property. See {@link ProductVariantsV2.productMasterNumber}.
   * @param productConfigurationId Key property. See {@link ProductVariantsV2.productConfigurationId}.
   * @param productSizeId Key property. See {@link ProductVariantsV2.productSizeId}.
   * @param productColorId Key property. See {@link ProductVariantsV2.productColorId}.
   * @param productStyleId Key property. See {@link ProductVariantsV2.productStyleId}.
   * @param productVersionId Key property. See {@link ProductVariantsV2.productVersionId}.
   * @returns A request builder for creating requests that delete an entity of type `ProductVariantsV2`.
   */
  delete(
    productMasterNumber: string,
    productConfigurationId: string,
    productSizeId: string,
    productColorId: string,
    productStyleId: string,
    productVersionId: string
  ): DeleteRequestBuilder<ProductVariantsV2<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ProductVariantsV2`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ProductVariantsV2` by taking the entity as a parameter.
   */
  delete(
    entity: ProductVariantsV2<T>
  ): DeleteRequestBuilder<ProductVariantsV2<T>, T>;
  delete(
    productMasterNumberOrEntity: any,
    productConfigurationId?: string,
    productSizeId?: string,
    productColorId?: string,
    productStyleId?: string,
    productVersionId?: string
  ): DeleteRequestBuilder<ProductVariantsV2<T>, T> {
    return new DeleteRequestBuilder<ProductVariantsV2<T>, T>(
      this.entityApi,
      productMasterNumberOrEntity instanceof ProductVariantsV2
        ? productMasterNumberOrEntity
        : {
            ProductMasterNumber: productMasterNumberOrEntity!,
            ProductConfigurationId: productConfigurationId!,
            ProductSizeId: productSizeId!,
            ProductColorId: productColorId!,
            ProductStyleId: productStyleId!,
            ProductVersionId: productVersionId!
          }
    );
  }
}
