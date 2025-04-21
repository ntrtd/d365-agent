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
import { ProductSpecificOrderSettingsV3 } from './ProductSpecificOrderSettingsV3';

/**
 * Request builder class for operations supported on the {@link ProductSpecificOrderSettingsV3} entity.
 */
export class ProductSpecificOrderSettingsV3RequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ProductSpecificOrderSettingsV3<T>, T> {
  /**
   * Returns a request builder for querying all `ProductSpecificOrderSettingsV3` entities.
   * @returns A request builder for creating requests to retrieve all `ProductSpecificOrderSettingsV3` entities.
   */
  getAll(): GetAllRequestBuilder<ProductSpecificOrderSettingsV3<T>, T> {
    return new GetAllRequestBuilder<ProductSpecificOrderSettingsV3<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ProductSpecificOrderSettingsV3` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ProductSpecificOrderSettingsV3`.
   */
  create(
    entity: ProductSpecificOrderSettingsV3<T>
  ): CreateRequestBuilder<ProductSpecificOrderSettingsV3<T>, T> {
    return new CreateRequestBuilder<ProductSpecificOrderSettingsV3<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ProductSpecificOrderSettingsV3` entity based on its keys.
   * @param dataAreaId Key property. See {@link ProductSpecificOrderSettingsV3.dataAreaId}.
   * @param itemNumber Key property. See {@link ProductSpecificOrderSettingsV3.itemNumber}.
   * @param operationalSiteId Key property. See {@link ProductSpecificOrderSettingsV3.operationalSiteId}.
   * @param productConfigurationId Key property. See {@link ProductSpecificOrderSettingsV3.productConfigurationId}.
   * @param productColorId Key property. See {@link ProductSpecificOrderSettingsV3.productColorId}.
   * @param productSizeId Key property. See {@link ProductSpecificOrderSettingsV3.productSizeId}.
   * @param productStyleId Key property. See {@link ProductSpecificOrderSettingsV3.productStyleId}.
   * @param productVersionId Key property. See {@link ProductSpecificOrderSettingsV3.productVersionId}.
   * @returns A request builder for creating requests to retrieve one `ProductSpecificOrderSettingsV3` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    itemNumber: DeserializedType<T, 'Edm.String'>,
    operationalSiteId: DeserializedType<T, 'Edm.String'>,
    productConfigurationId: DeserializedType<T, 'Edm.String'>,
    productColorId: DeserializedType<T, 'Edm.String'>,
    productSizeId: DeserializedType<T, 'Edm.String'>,
    productStyleId: DeserializedType<T, 'Edm.String'>,
    productVersionId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ProductSpecificOrderSettingsV3<T>, T> {
    return new GetByKeyRequestBuilder<ProductSpecificOrderSettingsV3<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        ItemNumber: itemNumber,
        OperationalSiteId: operationalSiteId,
        ProductConfigurationId: productConfigurationId,
        ProductColorId: productColorId,
        ProductSizeId: productSizeId,
        ProductStyleId: productStyleId,
        ProductVersionId: productVersionId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ProductSpecificOrderSettingsV3`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ProductSpecificOrderSettingsV3`.
   */
  update(
    entity: ProductSpecificOrderSettingsV3<T>
  ): UpdateRequestBuilder<ProductSpecificOrderSettingsV3<T>, T> {
    return new UpdateRequestBuilder<ProductSpecificOrderSettingsV3<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ProductSpecificOrderSettingsV3`.
   * @param dataAreaId Key property. See {@link ProductSpecificOrderSettingsV3.dataAreaId}.
   * @param itemNumber Key property. See {@link ProductSpecificOrderSettingsV3.itemNumber}.
   * @param operationalSiteId Key property. See {@link ProductSpecificOrderSettingsV3.operationalSiteId}.
   * @param productConfigurationId Key property. See {@link ProductSpecificOrderSettingsV3.productConfigurationId}.
   * @param productColorId Key property. See {@link ProductSpecificOrderSettingsV3.productColorId}.
   * @param productSizeId Key property. See {@link ProductSpecificOrderSettingsV3.productSizeId}.
   * @param productStyleId Key property. See {@link ProductSpecificOrderSettingsV3.productStyleId}.
   * @param productVersionId Key property. See {@link ProductSpecificOrderSettingsV3.productVersionId}.
   * @returns A request builder for creating requests that delete an entity of type `ProductSpecificOrderSettingsV3`.
   */
  delete(
    dataAreaId: string,
    itemNumber: string,
    operationalSiteId: string,
    productConfigurationId: string,
    productColorId: string,
    productSizeId: string,
    productStyleId: string,
    productVersionId: string
  ): DeleteRequestBuilder<ProductSpecificOrderSettingsV3<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ProductSpecificOrderSettingsV3`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ProductSpecificOrderSettingsV3` by taking the entity as a parameter.
   */
  delete(
    entity: ProductSpecificOrderSettingsV3<T>
  ): DeleteRequestBuilder<ProductSpecificOrderSettingsV3<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    itemNumber?: string,
    operationalSiteId?: string,
    productConfigurationId?: string,
    productColorId?: string,
    productSizeId?: string,
    productStyleId?: string,
    productVersionId?: string
  ): DeleteRequestBuilder<ProductSpecificOrderSettingsV3<T>, T> {
    return new DeleteRequestBuilder<ProductSpecificOrderSettingsV3<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ProductSpecificOrderSettingsV3
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ItemNumber: itemNumber!,
            OperationalSiteId: operationalSiteId!,
            ProductConfigurationId: productConfigurationId!,
            ProductColorId: productColorId!,
            ProductSizeId: productSizeId!,
            ProductStyleId: productStyleId!,
            ProductVersionId: productVersionId!
          }
    );
  }
}
