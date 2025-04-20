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
import { VendorRebateAgreementProductSelectionsV2 } from './VendorRebateAgreementProductSelectionsV2';

/**
 * Request builder class for operations supported on the {@link VendorRebateAgreementProductSelectionsV2} entity.
 */
export class VendorRebateAgreementProductSelectionsV2RequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<VendorRebateAgreementProductSelectionsV2<T>, T> {
  /**
   * Returns a request builder for querying all `VendorRebateAgreementProductSelectionsV2` entities.
   * @returns A request builder for creating requests to retrieve all `VendorRebateAgreementProductSelectionsV2` entities.
   */
  getAll(): GetAllRequestBuilder<
    VendorRebateAgreementProductSelectionsV2<T>,
    T
  > {
    return new GetAllRequestBuilder<
      VendorRebateAgreementProductSelectionsV2<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `VendorRebateAgreementProductSelectionsV2` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `VendorRebateAgreementProductSelectionsV2`.
   */
  create(
    entity: VendorRebateAgreementProductSelectionsV2<T>
  ): CreateRequestBuilder<VendorRebateAgreementProductSelectionsV2<T>, T> {
    return new CreateRequestBuilder<
      VendorRebateAgreementProductSelectionsV2<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `VendorRebateAgreementProductSelectionsV2` entity based on its keys.
   * @param dataAreaId Key property. See {@link VendorRebateAgreementProductSelectionsV2.dataAreaId}.
   * @param rebateAgreementId Key property. See {@link VendorRebateAgreementProductSelectionsV2.rebateAgreementId}.
   * @param itemNumber Key property. See {@link VendorRebateAgreementProductSelectionsV2.itemNumber}.
   * @param productConfigurationId Key property. See {@link VendorRebateAgreementProductSelectionsV2.productConfigurationId}.
   * @param productColorId Key property. See {@link VendorRebateAgreementProductSelectionsV2.productColorId}.
   * @param qualifyingWarehouseId Key property. See {@link VendorRebateAgreementProductSelectionsV2.qualifyingWarehouseId}.
   * @param qualifyingSiteId Key property. See {@link VendorRebateAgreementProductSelectionsV2.qualifyingSiteId}.
   * @param productSizeId Key property. See {@link VendorRebateAgreementProductSelectionsV2.productSizeId}.
   * @param productStyleId Key property. See {@link VendorRebateAgreementProductSelectionsV2.productStyleId}.
   * @param productVersionId Key property. See {@link VendorRebateAgreementProductSelectionsV2.productVersionId}.
   * @returns A request builder for creating requests to retrieve one `VendorRebateAgreementProductSelectionsV2` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    rebateAgreementId: DeserializedType<T, 'Edm.String'>,
    itemNumber: DeserializedType<T, 'Edm.String'>,
    productConfigurationId: DeserializedType<T, 'Edm.String'>,
    productColorId: DeserializedType<T, 'Edm.String'>,
    qualifyingWarehouseId: DeserializedType<T, 'Edm.String'>,
    qualifyingSiteId: DeserializedType<T, 'Edm.String'>,
    productSizeId: DeserializedType<T, 'Edm.String'>,
    productStyleId: DeserializedType<T, 'Edm.String'>,
    productVersionId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<VendorRebateAgreementProductSelectionsV2<T>, T> {
    return new GetByKeyRequestBuilder<
      VendorRebateAgreementProductSelectionsV2<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      RebateAgreementId: rebateAgreementId,
      ItemNumber: itemNumber,
      ProductConfigurationId: productConfigurationId,
      ProductColorId: productColorId,
      QualifyingWarehouseId: qualifyingWarehouseId,
      QualifyingSiteId: qualifyingSiteId,
      ProductSizeId: productSizeId,
      ProductStyleId: productStyleId,
      ProductVersionId: productVersionId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `VendorRebateAgreementProductSelectionsV2`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `VendorRebateAgreementProductSelectionsV2`.
   */
  update(
    entity: VendorRebateAgreementProductSelectionsV2<T>
  ): UpdateRequestBuilder<VendorRebateAgreementProductSelectionsV2<T>, T> {
    return new UpdateRequestBuilder<
      VendorRebateAgreementProductSelectionsV2<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `VendorRebateAgreementProductSelectionsV2`.
   * @param dataAreaId Key property. See {@link VendorRebateAgreementProductSelectionsV2.dataAreaId}.
   * @param rebateAgreementId Key property. See {@link VendorRebateAgreementProductSelectionsV2.rebateAgreementId}.
   * @param itemNumber Key property. See {@link VendorRebateAgreementProductSelectionsV2.itemNumber}.
   * @param productConfigurationId Key property. See {@link VendorRebateAgreementProductSelectionsV2.productConfigurationId}.
   * @param productColorId Key property. See {@link VendorRebateAgreementProductSelectionsV2.productColorId}.
   * @param qualifyingWarehouseId Key property. See {@link VendorRebateAgreementProductSelectionsV2.qualifyingWarehouseId}.
   * @param qualifyingSiteId Key property. See {@link VendorRebateAgreementProductSelectionsV2.qualifyingSiteId}.
   * @param productSizeId Key property. See {@link VendorRebateAgreementProductSelectionsV2.productSizeId}.
   * @param productStyleId Key property. See {@link VendorRebateAgreementProductSelectionsV2.productStyleId}.
   * @param productVersionId Key property. See {@link VendorRebateAgreementProductSelectionsV2.productVersionId}.
   * @returns A request builder for creating requests that delete an entity of type `VendorRebateAgreementProductSelectionsV2`.
   */
  delete(
    dataAreaId: string,
    rebateAgreementId: string,
    itemNumber: string,
    productConfigurationId: string,
    productColorId: string,
    qualifyingWarehouseId: string,
    qualifyingSiteId: string,
    productSizeId: string,
    productStyleId: string,
    productVersionId: string
  ): DeleteRequestBuilder<VendorRebateAgreementProductSelectionsV2<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `VendorRebateAgreementProductSelectionsV2`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `VendorRebateAgreementProductSelectionsV2` by taking the entity as a parameter.
   */
  delete(
    entity: VendorRebateAgreementProductSelectionsV2<T>
  ): DeleteRequestBuilder<VendorRebateAgreementProductSelectionsV2<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    rebateAgreementId?: string,
    itemNumber?: string,
    productConfigurationId?: string,
    productColorId?: string,
    qualifyingWarehouseId?: string,
    qualifyingSiteId?: string,
    productSizeId?: string,
    productStyleId?: string,
    productVersionId?: string
  ): DeleteRequestBuilder<VendorRebateAgreementProductSelectionsV2<T>, T> {
    return new DeleteRequestBuilder<
      VendorRebateAgreementProductSelectionsV2<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof VendorRebateAgreementProductSelectionsV2
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            RebateAgreementId: rebateAgreementId!,
            ItemNumber: itemNumber!,
            ProductConfigurationId: productConfigurationId!,
            ProductColorId: productColorId!,
            QualifyingWarehouseId: qualifyingWarehouseId!,
            QualifyingSiteId: qualifyingSiteId!,
            ProductSizeId: productSizeId!,
            ProductStyleId: productStyleId!,
            ProductVersionId: productVersionId!
          }
    );
  }
}
