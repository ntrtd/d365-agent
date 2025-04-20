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
import { ProductSpecificOrderSettingsV2 } from './ProductSpecificOrderSettingsV2';

/**
 * Request builder class for operations supported on the {@link ProductSpecificOrderSettingsV2} entity.
 */
export class ProductSpecificOrderSettingsV2RequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ProductSpecificOrderSettingsV2<T>, T> {
  /**
   * Returns a request builder for querying all `ProductSpecificOrderSettingsV2` entities.
   * @returns A request builder for creating requests to retrieve all `ProductSpecificOrderSettingsV2` entities.
   */
  getAll(): GetAllRequestBuilder<ProductSpecificOrderSettingsV2<T>, T> {
    return new GetAllRequestBuilder<ProductSpecificOrderSettingsV2<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ProductSpecificOrderSettingsV2` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ProductSpecificOrderSettingsV2`.
   */
  create(
    entity: ProductSpecificOrderSettingsV2<T>
  ): CreateRequestBuilder<ProductSpecificOrderSettingsV2<T>, T> {
    return new CreateRequestBuilder<ProductSpecificOrderSettingsV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ProductSpecificOrderSettingsV2` entity based on its keys.
   * @param dataAreaId Key property. See {@link ProductSpecificOrderSettingsV2.dataAreaId}.
   * @param itemNumber Key property. See {@link ProductSpecificOrderSettingsV2.itemNumber}.
   * @param operationalSiteId Key property. See {@link ProductSpecificOrderSettingsV2.operationalSiteId}.
   * @param productConfigurationId Key property. See {@link ProductSpecificOrderSettingsV2.productConfigurationId}.
   * @param productColorId Key property. See {@link ProductSpecificOrderSettingsV2.productColorId}.
   * @param productSizeId Key property. See {@link ProductSpecificOrderSettingsV2.productSizeId}.
   * @param productStyleId Key property. See {@link ProductSpecificOrderSettingsV2.productStyleId}.
   * @returns A request builder for creating requests to retrieve one `ProductSpecificOrderSettingsV2` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    itemNumber: DeserializedType<T, 'Edm.String'>,
    operationalSiteId: DeserializedType<T, 'Edm.String'>,
    productConfigurationId: DeserializedType<T, 'Edm.String'>,
    productColorId: DeserializedType<T, 'Edm.String'>,
    productSizeId: DeserializedType<T, 'Edm.String'>,
    productStyleId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ProductSpecificOrderSettingsV2<T>, T> {
    return new GetByKeyRequestBuilder<ProductSpecificOrderSettingsV2<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        ItemNumber: itemNumber,
        OperationalSiteId: operationalSiteId,
        ProductConfigurationId: productConfigurationId,
        ProductColorId: productColorId,
        ProductSizeId: productSizeId,
        ProductStyleId: productStyleId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ProductSpecificOrderSettingsV2`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ProductSpecificOrderSettingsV2`.
   */
  update(
    entity: ProductSpecificOrderSettingsV2<T>
  ): UpdateRequestBuilder<ProductSpecificOrderSettingsV2<T>, T> {
    return new UpdateRequestBuilder<ProductSpecificOrderSettingsV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ProductSpecificOrderSettingsV2`.
   * @param dataAreaId Key property. See {@link ProductSpecificOrderSettingsV2.dataAreaId}.
   * @param itemNumber Key property. See {@link ProductSpecificOrderSettingsV2.itemNumber}.
   * @param operationalSiteId Key property. See {@link ProductSpecificOrderSettingsV2.operationalSiteId}.
   * @param productConfigurationId Key property. See {@link ProductSpecificOrderSettingsV2.productConfigurationId}.
   * @param productColorId Key property. See {@link ProductSpecificOrderSettingsV2.productColorId}.
   * @param productSizeId Key property. See {@link ProductSpecificOrderSettingsV2.productSizeId}.
   * @param productStyleId Key property. See {@link ProductSpecificOrderSettingsV2.productStyleId}.
   * @returns A request builder for creating requests that delete an entity of type `ProductSpecificOrderSettingsV2`.
   */
  delete(
    dataAreaId: string,
    itemNumber: string,
    operationalSiteId: string,
    productConfigurationId: string,
    productColorId: string,
    productSizeId: string,
    productStyleId: string
  ): DeleteRequestBuilder<ProductSpecificOrderSettingsV2<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ProductSpecificOrderSettingsV2`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ProductSpecificOrderSettingsV2` by taking the entity as a parameter.
   */
  delete(
    entity: ProductSpecificOrderSettingsV2<T>
  ): DeleteRequestBuilder<ProductSpecificOrderSettingsV2<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    itemNumber?: string,
    operationalSiteId?: string,
    productConfigurationId?: string,
    productColorId?: string,
    productSizeId?: string,
    productStyleId?: string
  ): DeleteRequestBuilder<ProductSpecificOrderSettingsV2<T>, T> {
    return new DeleteRequestBuilder<ProductSpecificOrderSettingsV2<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ProductSpecificOrderSettingsV2
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ItemNumber: itemNumber!,
            OperationalSiteId: operationalSiteId!,
            ProductConfigurationId: productConfigurationId!,
            ProductColorId: productColorId!,
            ProductSizeId: productSizeId!,
            ProductStyleId: productStyleId!
          }
    );
  }
}
