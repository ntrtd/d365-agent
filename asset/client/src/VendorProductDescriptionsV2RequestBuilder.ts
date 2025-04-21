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
import { VendorProductDescriptionsV2 } from './VendorProductDescriptionsV2';

/**
 * Request builder class for operations supported on the {@link VendorProductDescriptionsV2} entity.
 */
export class VendorProductDescriptionsV2RequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<VendorProductDescriptionsV2<T>, T> {
  /**
   * Returns a request builder for querying all `VendorProductDescriptionsV2` entities.
   * @returns A request builder for creating requests to retrieve all `VendorProductDescriptionsV2` entities.
   */
  getAll(): GetAllRequestBuilder<VendorProductDescriptionsV2<T>, T> {
    return new GetAllRequestBuilder<VendorProductDescriptionsV2<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `VendorProductDescriptionsV2` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `VendorProductDescriptionsV2`.
   */
  create(
    entity: VendorProductDescriptionsV2<T>
  ): CreateRequestBuilder<VendorProductDescriptionsV2<T>, T> {
    return new CreateRequestBuilder<VendorProductDescriptionsV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `VendorProductDescriptionsV2` entity based on its keys.
   * @param dataAreaId Key property. See {@link VendorProductDescriptionsV2.dataAreaId}.
   * @param itemNumber Key property. See {@link VendorProductDescriptionsV2.itemNumber}.
   * @param productColorId Key property. See {@link VendorProductDescriptionsV2.productColorId}.
   * @param productConfigurationId Key property. See {@link VendorProductDescriptionsV2.productConfigurationId}.
   * @param productSizeId Key property. See {@link VendorProductDescriptionsV2.productSizeId}.
   * @param productStyleId Key property. See {@link VendorProductDescriptionsV2.productStyleId}.
   * @param productVersionId Key property. See {@link VendorProductDescriptionsV2.productVersionId}.
   * @param vendorAccountNumber Key property. See {@link VendorProductDescriptionsV2.vendorAccountNumber}.
   * @param productDescriptionVendorGroupId Key property. See {@link VendorProductDescriptionsV2.productDescriptionVendorGroupId}.
   * @returns A request builder for creating requests to retrieve one `VendorProductDescriptionsV2` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    itemNumber: DeserializedType<T, 'Edm.String'>,
    productColorId: DeserializedType<T, 'Edm.String'>,
    productConfigurationId: DeserializedType<T, 'Edm.String'>,
    productSizeId: DeserializedType<T, 'Edm.String'>,
    productStyleId: DeserializedType<T, 'Edm.String'>,
    productVersionId: DeserializedType<T, 'Edm.String'>,
    vendorAccountNumber: DeserializedType<T, 'Edm.String'>,
    productDescriptionVendorGroupId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<VendorProductDescriptionsV2<T>, T> {
    return new GetByKeyRequestBuilder<VendorProductDescriptionsV2<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        ItemNumber: itemNumber,
        ProductColorId: productColorId,
        ProductConfigurationId: productConfigurationId,
        ProductSizeId: productSizeId,
        ProductStyleId: productStyleId,
        ProductVersionId: productVersionId,
        VendorAccountNumber: vendorAccountNumber,
        ProductDescriptionVendorGroupId: productDescriptionVendorGroupId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `VendorProductDescriptionsV2`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `VendorProductDescriptionsV2`.
   */
  update(
    entity: VendorProductDescriptionsV2<T>
  ): UpdateRequestBuilder<VendorProductDescriptionsV2<T>, T> {
    return new UpdateRequestBuilder<VendorProductDescriptionsV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `VendorProductDescriptionsV2`.
   * @param dataAreaId Key property. See {@link VendorProductDescriptionsV2.dataAreaId}.
   * @param itemNumber Key property. See {@link VendorProductDescriptionsV2.itemNumber}.
   * @param productColorId Key property. See {@link VendorProductDescriptionsV2.productColorId}.
   * @param productConfigurationId Key property. See {@link VendorProductDescriptionsV2.productConfigurationId}.
   * @param productSizeId Key property. See {@link VendorProductDescriptionsV2.productSizeId}.
   * @param productStyleId Key property. See {@link VendorProductDescriptionsV2.productStyleId}.
   * @param productVersionId Key property. See {@link VendorProductDescriptionsV2.productVersionId}.
   * @param vendorAccountNumber Key property. See {@link VendorProductDescriptionsV2.vendorAccountNumber}.
   * @param productDescriptionVendorGroupId Key property. See {@link VendorProductDescriptionsV2.productDescriptionVendorGroupId}.
   * @returns A request builder for creating requests that delete an entity of type `VendorProductDescriptionsV2`.
   */
  delete(
    dataAreaId: string,
    itemNumber: string,
    productColorId: string,
    productConfigurationId: string,
    productSizeId: string,
    productStyleId: string,
    productVersionId: string,
    vendorAccountNumber: string,
    productDescriptionVendorGroupId: string
  ): DeleteRequestBuilder<VendorProductDescriptionsV2<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `VendorProductDescriptionsV2`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `VendorProductDescriptionsV2` by taking the entity as a parameter.
   */
  delete(
    entity: VendorProductDescriptionsV2<T>
  ): DeleteRequestBuilder<VendorProductDescriptionsV2<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    itemNumber?: string,
    productColorId?: string,
    productConfigurationId?: string,
    productSizeId?: string,
    productStyleId?: string,
    productVersionId?: string,
    vendorAccountNumber?: string,
    productDescriptionVendorGroupId?: string
  ): DeleteRequestBuilder<VendorProductDescriptionsV2<T>, T> {
    return new DeleteRequestBuilder<VendorProductDescriptionsV2<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof VendorProductDescriptionsV2
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ItemNumber: itemNumber!,
            ProductColorId: productColorId!,
            ProductConfigurationId: productConfigurationId!,
            ProductSizeId: productSizeId!,
            ProductStyleId: productStyleId!,
            ProductVersionId: productVersionId!,
            VendorAccountNumber: vendorAccountNumber!,
            ProductDescriptionVendorGroupId: productDescriptionVendorGroupId!
          }
    );
  }
}
