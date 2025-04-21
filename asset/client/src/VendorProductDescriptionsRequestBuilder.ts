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
import { VendorProductDescriptions } from './VendorProductDescriptions';

/**
 * Request builder class for operations supported on the {@link VendorProductDescriptions} entity.
 */
export class VendorProductDescriptionsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<VendorProductDescriptions<T>, T> {
  /**
   * Returns a request builder for querying all `VendorProductDescriptions` entities.
   * @returns A request builder for creating requests to retrieve all `VendorProductDescriptions` entities.
   */
  getAll(): GetAllRequestBuilder<VendorProductDescriptions<T>, T> {
    return new GetAllRequestBuilder<VendorProductDescriptions<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `VendorProductDescriptions` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `VendorProductDescriptions`.
   */
  create(
    entity: VendorProductDescriptions<T>
  ): CreateRequestBuilder<VendorProductDescriptions<T>, T> {
    return new CreateRequestBuilder<VendorProductDescriptions<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `VendorProductDescriptions` entity based on its keys.
   * @param dataAreaId Key property. See {@link VendorProductDescriptions.dataAreaId}.
   * @param itemNumber Key property. See {@link VendorProductDescriptions.itemNumber}.
   * @param productColorId Key property. See {@link VendorProductDescriptions.productColorId}.
   * @param productConfigurationId Key property. See {@link VendorProductDescriptions.productConfigurationId}.
   * @param productSizeId Key property. See {@link VendorProductDescriptions.productSizeId}.
   * @param productStyleId Key property. See {@link VendorProductDescriptions.productStyleId}.
   * @param vendorAccountNumber Key property. See {@link VendorProductDescriptions.vendorAccountNumber}.
   * @param productDescriptionVendorGroupId Key property. See {@link VendorProductDescriptions.productDescriptionVendorGroupId}.
   * @returns A request builder for creating requests to retrieve one `VendorProductDescriptions` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    itemNumber: DeserializedType<T, 'Edm.String'>,
    productColorId: DeserializedType<T, 'Edm.String'>,
    productConfigurationId: DeserializedType<T, 'Edm.String'>,
    productSizeId: DeserializedType<T, 'Edm.String'>,
    productStyleId: DeserializedType<T, 'Edm.String'>,
    vendorAccountNumber: DeserializedType<T, 'Edm.String'>,
    productDescriptionVendorGroupId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<VendorProductDescriptions<T>, T> {
    return new GetByKeyRequestBuilder<VendorProductDescriptions<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        ItemNumber: itemNumber,
        ProductColorId: productColorId,
        ProductConfigurationId: productConfigurationId,
        ProductSizeId: productSizeId,
        ProductStyleId: productStyleId,
        VendorAccountNumber: vendorAccountNumber,
        ProductDescriptionVendorGroupId: productDescriptionVendorGroupId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `VendorProductDescriptions`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `VendorProductDescriptions`.
   */
  update(
    entity: VendorProductDescriptions<T>
  ): UpdateRequestBuilder<VendorProductDescriptions<T>, T> {
    return new UpdateRequestBuilder<VendorProductDescriptions<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `VendorProductDescriptions`.
   * @param dataAreaId Key property. See {@link VendorProductDescriptions.dataAreaId}.
   * @param itemNumber Key property. See {@link VendorProductDescriptions.itemNumber}.
   * @param productColorId Key property. See {@link VendorProductDescriptions.productColorId}.
   * @param productConfigurationId Key property. See {@link VendorProductDescriptions.productConfigurationId}.
   * @param productSizeId Key property. See {@link VendorProductDescriptions.productSizeId}.
   * @param productStyleId Key property. See {@link VendorProductDescriptions.productStyleId}.
   * @param vendorAccountNumber Key property. See {@link VendorProductDescriptions.vendorAccountNumber}.
   * @param productDescriptionVendorGroupId Key property. See {@link VendorProductDescriptions.productDescriptionVendorGroupId}.
   * @returns A request builder for creating requests that delete an entity of type `VendorProductDescriptions`.
   */
  delete(
    dataAreaId: string,
    itemNumber: string,
    productColorId: string,
    productConfigurationId: string,
    productSizeId: string,
    productStyleId: string,
    vendorAccountNumber: string,
    productDescriptionVendorGroupId: string
  ): DeleteRequestBuilder<VendorProductDescriptions<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `VendorProductDescriptions`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `VendorProductDescriptions` by taking the entity as a parameter.
   */
  delete(
    entity: VendorProductDescriptions<T>
  ): DeleteRequestBuilder<VendorProductDescriptions<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    itemNumber?: string,
    productColorId?: string,
    productConfigurationId?: string,
    productSizeId?: string,
    productStyleId?: string,
    vendorAccountNumber?: string,
    productDescriptionVendorGroupId?: string
  ): DeleteRequestBuilder<VendorProductDescriptions<T>, T> {
    return new DeleteRequestBuilder<VendorProductDescriptions<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof VendorProductDescriptions
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ItemNumber: itemNumber!,
            ProductColorId: productColorId!,
            ProductConfigurationId: productConfigurationId!,
            ProductSizeId: productSizeId!,
            ProductStyleId: productStyleId!,
            VendorAccountNumber: vendorAccountNumber!,
            ProductDescriptionVendorGroupId: productDescriptionVendorGroupId!
          }
    );
  }
}
