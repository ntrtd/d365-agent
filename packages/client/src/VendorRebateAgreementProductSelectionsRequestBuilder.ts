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
import { VendorRebateAgreementProductSelections } from './VendorRebateAgreementProductSelections';

/**
 * Request builder class for operations supported on the {@link VendorRebateAgreementProductSelections} entity.
 */
export class VendorRebateAgreementProductSelectionsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<VendorRebateAgreementProductSelections<T>, T> {
  /**
   * Returns a request builder for querying all `VendorRebateAgreementProductSelections` entities.
   * @returns A request builder for creating requests to retrieve all `VendorRebateAgreementProductSelections` entities.
   */
  getAll(): GetAllRequestBuilder<VendorRebateAgreementProductSelections<T>, T> {
    return new GetAllRequestBuilder<
      VendorRebateAgreementProductSelections<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `VendorRebateAgreementProductSelections` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `VendorRebateAgreementProductSelections`.
   */
  create(
    entity: VendorRebateAgreementProductSelections<T>
  ): CreateRequestBuilder<VendorRebateAgreementProductSelections<T>, T> {
    return new CreateRequestBuilder<
      VendorRebateAgreementProductSelections<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `VendorRebateAgreementProductSelections` entity based on its keys.
   * @param dataAreaId Key property. See {@link VendorRebateAgreementProductSelections.dataAreaId}.
   * @param rebateAgreementId Key property. See {@link VendorRebateAgreementProductSelections.rebateAgreementId}.
   * @param itemNumber Key property. See {@link VendorRebateAgreementProductSelections.itemNumber}.
   * @param productConfigurationId Key property. See {@link VendorRebateAgreementProductSelections.productConfigurationId}.
   * @param productColorId Key property. See {@link VendorRebateAgreementProductSelections.productColorId}.
   * @param qualifyingWarehouseId Key property. See {@link VendorRebateAgreementProductSelections.qualifyingWarehouseId}.
   * @param qualifyingSiteId Key property. See {@link VendorRebateAgreementProductSelections.qualifyingSiteId}.
   * @param productSizeId Key property. See {@link VendorRebateAgreementProductSelections.productSizeId}.
   * @param productStyleId Key property. See {@link VendorRebateAgreementProductSelections.productStyleId}.
   * @returns A request builder for creating requests to retrieve one `VendorRebateAgreementProductSelections` entity based on its keys.
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
    productStyleId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<VendorRebateAgreementProductSelections<T>, T> {
    return new GetByKeyRequestBuilder<
      VendorRebateAgreementProductSelections<T>,
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
      ProductStyleId: productStyleId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `VendorRebateAgreementProductSelections`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `VendorRebateAgreementProductSelections`.
   */
  update(
    entity: VendorRebateAgreementProductSelections<T>
  ): UpdateRequestBuilder<VendorRebateAgreementProductSelections<T>, T> {
    return new UpdateRequestBuilder<
      VendorRebateAgreementProductSelections<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `VendorRebateAgreementProductSelections`.
   * @param dataAreaId Key property. See {@link VendorRebateAgreementProductSelections.dataAreaId}.
   * @param rebateAgreementId Key property. See {@link VendorRebateAgreementProductSelections.rebateAgreementId}.
   * @param itemNumber Key property. See {@link VendorRebateAgreementProductSelections.itemNumber}.
   * @param productConfigurationId Key property. See {@link VendorRebateAgreementProductSelections.productConfigurationId}.
   * @param productColorId Key property. See {@link VendorRebateAgreementProductSelections.productColorId}.
   * @param qualifyingWarehouseId Key property. See {@link VendorRebateAgreementProductSelections.qualifyingWarehouseId}.
   * @param qualifyingSiteId Key property. See {@link VendorRebateAgreementProductSelections.qualifyingSiteId}.
   * @param productSizeId Key property. See {@link VendorRebateAgreementProductSelections.productSizeId}.
   * @param productStyleId Key property. See {@link VendorRebateAgreementProductSelections.productStyleId}.
   * @returns A request builder for creating requests that delete an entity of type `VendorRebateAgreementProductSelections`.
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
    productStyleId: string
  ): DeleteRequestBuilder<VendorRebateAgreementProductSelections<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `VendorRebateAgreementProductSelections`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `VendorRebateAgreementProductSelections` by taking the entity as a parameter.
   */
  delete(
    entity: VendorRebateAgreementProductSelections<T>
  ): DeleteRequestBuilder<VendorRebateAgreementProductSelections<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    rebateAgreementId?: string,
    itemNumber?: string,
    productConfigurationId?: string,
    productColorId?: string,
    qualifyingWarehouseId?: string,
    qualifyingSiteId?: string,
    productSizeId?: string,
    productStyleId?: string
  ): DeleteRequestBuilder<VendorRebateAgreementProductSelections<T>, T> {
    return new DeleteRequestBuilder<
      VendorRebateAgreementProductSelections<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof VendorRebateAgreementProductSelections
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
            ProductStyleId: productStyleId!
          }
    );
  }
}
