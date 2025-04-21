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
import { ProductAllocationLinesV2 } from './ProductAllocationLinesV2';

/**
 * Request builder class for operations supported on the {@link ProductAllocationLinesV2} entity.
 */
export class ProductAllocationLinesV2RequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ProductAllocationLinesV2<T>, T> {
  /**
   * Returns a request builder for querying all `ProductAllocationLinesV2` entities.
   * @returns A request builder for creating requests to retrieve all `ProductAllocationLinesV2` entities.
   */
  getAll(): GetAllRequestBuilder<ProductAllocationLinesV2<T>, T> {
    return new GetAllRequestBuilder<ProductAllocationLinesV2<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ProductAllocationLinesV2` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ProductAllocationLinesV2`.
   */
  create(
    entity: ProductAllocationLinesV2<T>
  ): CreateRequestBuilder<ProductAllocationLinesV2<T>, T> {
    return new CreateRequestBuilder<ProductAllocationLinesV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ProductAllocationLinesV2` entity based on its keys.
   * @param dataAreaId Key property. See {@link ProductAllocationLinesV2.dataAreaId}.
   * @param productAllocationKeyId Key property. See {@link ProductAllocationLinesV2.productAllocationKeyId}.
   * @param itemNumber Key property. See {@link ProductAllocationLinesV2.itemNumber}.
   * @param productConfigurationId Key property. See {@link ProductAllocationLinesV2.productConfigurationId}.
   * @param productColorId Key property. See {@link ProductAllocationLinesV2.productColorId}.
   * @param productSizeId Key property. See {@link ProductAllocationLinesV2.productSizeId}.
   * @param productStyleId Key property. See {@link ProductAllocationLinesV2.productStyleId}.
   * @param productVersionId Key property. See {@link ProductAllocationLinesV2.productVersionId}.
   * @returns A request builder for creating requests to retrieve one `ProductAllocationLinesV2` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    productAllocationKeyId: DeserializedType<T, 'Edm.String'>,
    itemNumber: DeserializedType<T, 'Edm.String'>,
    productConfigurationId: DeserializedType<T, 'Edm.String'>,
    productColorId: DeserializedType<T, 'Edm.String'>,
    productSizeId: DeserializedType<T, 'Edm.String'>,
    productStyleId: DeserializedType<T, 'Edm.String'>,
    productVersionId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ProductAllocationLinesV2<T>, T> {
    return new GetByKeyRequestBuilder<ProductAllocationLinesV2<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        ProductAllocationKeyId: productAllocationKeyId,
        ItemNumber: itemNumber,
        ProductConfigurationId: productConfigurationId,
        ProductColorId: productColorId,
        ProductSizeId: productSizeId,
        ProductStyleId: productStyleId,
        ProductVersionId: productVersionId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ProductAllocationLinesV2`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ProductAllocationLinesV2`.
   */
  update(
    entity: ProductAllocationLinesV2<T>
  ): UpdateRequestBuilder<ProductAllocationLinesV2<T>, T> {
    return new UpdateRequestBuilder<ProductAllocationLinesV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ProductAllocationLinesV2`.
   * @param dataAreaId Key property. See {@link ProductAllocationLinesV2.dataAreaId}.
   * @param productAllocationKeyId Key property. See {@link ProductAllocationLinesV2.productAllocationKeyId}.
   * @param itemNumber Key property. See {@link ProductAllocationLinesV2.itemNumber}.
   * @param productConfigurationId Key property. See {@link ProductAllocationLinesV2.productConfigurationId}.
   * @param productColorId Key property. See {@link ProductAllocationLinesV2.productColorId}.
   * @param productSizeId Key property. See {@link ProductAllocationLinesV2.productSizeId}.
   * @param productStyleId Key property. See {@link ProductAllocationLinesV2.productStyleId}.
   * @param productVersionId Key property. See {@link ProductAllocationLinesV2.productVersionId}.
   * @returns A request builder for creating requests that delete an entity of type `ProductAllocationLinesV2`.
   */
  delete(
    dataAreaId: string,
    productAllocationKeyId: string,
    itemNumber: string,
    productConfigurationId: string,
    productColorId: string,
    productSizeId: string,
    productStyleId: string,
    productVersionId: string
  ): DeleteRequestBuilder<ProductAllocationLinesV2<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ProductAllocationLinesV2`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ProductAllocationLinesV2` by taking the entity as a parameter.
   */
  delete(
    entity: ProductAllocationLinesV2<T>
  ): DeleteRequestBuilder<ProductAllocationLinesV2<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    productAllocationKeyId?: string,
    itemNumber?: string,
    productConfigurationId?: string,
    productColorId?: string,
    productSizeId?: string,
    productStyleId?: string,
    productVersionId?: string
  ): DeleteRequestBuilder<ProductAllocationLinesV2<T>, T> {
    return new DeleteRequestBuilder<ProductAllocationLinesV2<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ProductAllocationLinesV2
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ProductAllocationKeyId: productAllocationKeyId!,
            ItemNumber: itemNumber!,
            ProductConfigurationId: productConfigurationId!,
            ProductColorId: productColorId!,
            ProductSizeId: productSizeId!,
            ProductStyleId: productStyleId!,
            ProductVersionId: productVersionId!
          }
    );
  }
}
