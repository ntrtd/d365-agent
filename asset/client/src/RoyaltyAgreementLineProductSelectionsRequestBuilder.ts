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
import { RoyaltyAgreementLineProductSelections } from './RoyaltyAgreementLineProductSelections';

/**
 * Request builder class for operations supported on the {@link RoyaltyAgreementLineProductSelections} entity.
 */
export class RoyaltyAgreementLineProductSelectionsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RoyaltyAgreementLineProductSelections<T>, T> {
  /**
   * Returns a request builder for querying all `RoyaltyAgreementLineProductSelections` entities.
   * @returns A request builder for creating requests to retrieve all `RoyaltyAgreementLineProductSelections` entities.
   */
  getAll(): GetAllRequestBuilder<RoyaltyAgreementLineProductSelections<T>, T> {
    return new GetAllRequestBuilder<
      RoyaltyAgreementLineProductSelections<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `RoyaltyAgreementLineProductSelections` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RoyaltyAgreementLineProductSelections`.
   */
  create(
    entity: RoyaltyAgreementLineProductSelections<T>
  ): CreateRequestBuilder<RoyaltyAgreementLineProductSelections<T>, T> {
    return new CreateRequestBuilder<
      RoyaltyAgreementLineProductSelections<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `RoyaltyAgreementLineProductSelections` entity based on its keys.
   * @param dataAreaId Key property. See {@link RoyaltyAgreementLineProductSelections.dataAreaId}.
   * @param royaltyAgreementLineId Key property. See {@link RoyaltyAgreementLineProductSelections.royaltyAgreementLineId}.
   * @param royaltyAgreementId Key property. See {@link RoyaltyAgreementLineProductSelections.royaltyAgreementId}.
   * @param itemNumber Key property. See {@link RoyaltyAgreementLineProductSelections.itemNumber}.
   * @param salesUnitSymbol Key property. See {@link RoyaltyAgreementLineProductSelections.salesUnitSymbol}.
   * @param qualifyingSiteId Key property. See {@link RoyaltyAgreementLineProductSelections.qualifyingSiteId}.
   * @param qualifyingWarehouseId Key property. See {@link RoyaltyAgreementLineProductSelections.qualifyingWarehouseId}.
   * @param productConfigurationId Key property. See {@link RoyaltyAgreementLineProductSelections.productConfigurationId}.
   * @param productColorId Key property. See {@link RoyaltyAgreementLineProductSelections.productColorId}.
   * @param productSizeId Key property. See {@link RoyaltyAgreementLineProductSelections.productSizeId}.
   * @param productStyleId Key property. See {@link RoyaltyAgreementLineProductSelections.productStyleId}.
   * @returns A request builder for creating requests to retrieve one `RoyaltyAgreementLineProductSelections` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    royaltyAgreementLineId: DeserializedType<T, 'Edm.String'>,
    royaltyAgreementId: DeserializedType<T, 'Edm.String'>,
    itemNumber: DeserializedType<T, 'Edm.String'>,
    salesUnitSymbol: DeserializedType<T, 'Edm.String'>,
    qualifyingSiteId: DeserializedType<T, 'Edm.String'>,
    qualifyingWarehouseId: DeserializedType<T, 'Edm.String'>,
    productConfigurationId: DeserializedType<T, 'Edm.String'>,
    productColorId: DeserializedType<T, 'Edm.String'>,
    productSizeId: DeserializedType<T, 'Edm.String'>,
    productStyleId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<RoyaltyAgreementLineProductSelections<T>, T> {
    return new GetByKeyRequestBuilder<
      RoyaltyAgreementLineProductSelections<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      RoyaltyAgreementLineId: royaltyAgreementLineId,
      RoyaltyAgreementId: royaltyAgreementId,
      ItemNumber: itemNumber,
      SalesUnitSymbol: salesUnitSymbol,
      QualifyingSiteId: qualifyingSiteId,
      QualifyingWarehouseId: qualifyingWarehouseId,
      ProductConfigurationId: productConfigurationId,
      ProductColorId: productColorId,
      ProductSizeId: productSizeId,
      ProductStyleId: productStyleId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `RoyaltyAgreementLineProductSelections`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RoyaltyAgreementLineProductSelections`.
   */
  update(
    entity: RoyaltyAgreementLineProductSelections<T>
  ): UpdateRequestBuilder<RoyaltyAgreementLineProductSelections<T>, T> {
    return new UpdateRequestBuilder<
      RoyaltyAgreementLineProductSelections<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `RoyaltyAgreementLineProductSelections`.
   * @param dataAreaId Key property. See {@link RoyaltyAgreementLineProductSelections.dataAreaId}.
   * @param royaltyAgreementLineId Key property. See {@link RoyaltyAgreementLineProductSelections.royaltyAgreementLineId}.
   * @param royaltyAgreementId Key property. See {@link RoyaltyAgreementLineProductSelections.royaltyAgreementId}.
   * @param itemNumber Key property. See {@link RoyaltyAgreementLineProductSelections.itemNumber}.
   * @param salesUnitSymbol Key property. See {@link RoyaltyAgreementLineProductSelections.salesUnitSymbol}.
   * @param qualifyingSiteId Key property. See {@link RoyaltyAgreementLineProductSelections.qualifyingSiteId}.
   * @param qualifyingWarehouseId Key property. See {@link RoyaltyAgreementLineProductSelections.qualifyingWarehouseId}.
   * @param productConfigurationId Key property. See {@link RoyaltyAgreementLineProductSelections.productConfigurationId}.
   * @param productColorId Key property. See {@link RoyaltyAgreementLineProductSelections.productColorId}.
   * @param productSizeId Key property. See {@link RoyaltyAgreementLineProductSelections.productSizeId}.
   * @param productStyleId Key property. See {@link RoyaltyAgreementLineProductSelections.productStyleId}.
   * @returns A request builder for creating requests that delete an entity of type `RoyaltyAgreementLineProductSelections`.
   */
  delete(
    dataAreaId: string,
    royaltyAgreementLineId: string,
    royaltyAgreementId: string,
    itemNumber: string,
    salesUnitSymbol: string,
    qualifyingSiteId: string,
    qualifyingWarehouseId: string,
    productConfigurationId: string,
    productColorId: string,
    productSizeId: string,
    productStyleId: string
  ): DeleteRequestBuilder<RoyaltyAgreementLineProductSelections<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RoyaltyAgreementLineProductSelections`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RoyaltyAgreementLineProductSelections` by taking the entity as a parameter.
   */
  delete(
    entity: RoyaltyAgreementLineProductSelections<T>
  ): DeleteRequestBuilder<RoyaltyAgreementLineProductSelections<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    royaltyAgreementLineId?: string,
    royaltyAgreementId?: string,
    itemNumber?: string,
    salesUnitSymbol?: string,
    qualifyingSiteId?: string,
    qualifyingWarehouseId?: string,
    productConfigurationId?: string,
    productColorId?: string,
    productSizeId?: string,
    productStyleId?: string
  ): DeleteRequestBuilder<RoyaltyAgreementLineProductSelections<T>, T> {
    return new DeleteRequestBuilder<
      RoyaltyAgreementLineProductSelections<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof RoyaltyAgreementLineProductSelections
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            RoyaltyAgreementLineId: royaltyAgreementLineId!,
            RoyaltyAgreementId: royaltyAgreementId!,
            ItemNumber: itemNumber!,
            SalesUnitSymbol: salesUnitSymbol!,
            QualifyingSiteId: qualifyingSiteId!,
            QualifyingWarehouseId: qualifyingWarehouseId!,
            ProductConfigurationId: productConfigurationId!,
            ProductColorId: productColorId!,
            ProductSizeId: productSizeId!,
            ProductStyleId: productStyleId!
          }
    );
  }
}
