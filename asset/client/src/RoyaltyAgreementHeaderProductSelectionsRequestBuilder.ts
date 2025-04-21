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
import { RoyaltyAgreementHeaderProductSelections } from './RoyaltyAgreementHeaderProductSelections';

/**
 * Request builder class for operations supported on the {@link RoyaltyAgreementHeaderProductSelections} entity.
 */
export class RoyaltyAgreementHeaderProductSelectionsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RoyaltyAgreementHeaderProductSelections<T>, T> {
  /**
   * Returns a request builder for querying all `RoyaltyAgreementHeaderProductSelections` entities.
   * @returns A request builder for creating requests to retrieve all `RoyaltyAgreementHeaderProductSelections` entities.
   */
  getAll(): GetAllRequestBuilder<
    RoyaltyAgreementHeaderProductSelections<T>,
    T
  > {
    return new GetAllRequestBuilder<
      RoyaltyAgreementHeaderProductSelections<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `RoyaltyAgreementHeaderProductSelections` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RoyaltyAgreementHeaderProductSelections`.
   */
  create(
    entity: RoyaltyAgreementHeaderProductSelections<T>
  ): CreateRequestBuilder<RoyaltyAgreementHeaderProductSelections<T>, T> {
    return new CreateRequestBuilder<
      RoyaltyAgreementHeaderProductSelections<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `RoyaltyAgreementHeaderProductSelections` entity based on its keys.
   * @param dataAreaId Key property. See {@link RoyaltyAgreementHeaderProductSelections.dataAreaId}.
   * @param royaltyAgreementId Key property. See {@link RoyaltyAgreementHeaderProductSelections.royaltyAgreementId}.
   * @param itemNumber Key property. See {@link RoyaltyAgreementHeaderProductSelections.itemNumber}.
   * @param salesUnitSymbol Key property. See {@link RoyaltyAgreementHeaderProductSelections.salesUnitSymbol}.
   * @param qualifyingSiteId Key property. See {@link RoyaltyAgreementHeaderProductSelections.qualifyingSiteId}.
   * @param qualifyingWarehouseId Key property. See {@link RoyaltyAgreementHeaderProductSelections.qualifyingWarehouseId}.
   * @param productConfigurationId Key property. See {@link RoyaltyAgreementHeaderProductSelections.productConfigurationId}.
   * @param productColorId Key property. See {@link RoyaltyAgreementHeaderProductSelections.productColorId}.
   * @param productSizeId Key property. See {@link RoyaltyAgreementHeaderProductSelections.productSizeId}.
   * @param productStyleId Key property. See {@link RoyaltyAgreementHeaderProductSelections.productStyleId}.
   * @returns A request builder for creating requests to retrieve one `RoyaltyAgreementHeaderProductSelections` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    royaltyAgreementId: DeserializedType<T, 'Edm.String'>,
    itemNumber: DeserializedType<T, 'Edm.String'>,
    salesUnitSymbol: DeserializedType<T, 'Edm.String'>,
    qualifyingSiteId: DeserializedType<T, 'Edm.String'>,
    qualifyingWarehouseId: DeserializedType<T, 'Edm.String'>,
    productConfigurationId: DeserializedType<T, 'Edm.String'>,
    productColorId: DeserializedType<T, 'Edm.String'>,
    productSizeId: DeserializedType<T, 'Edm.String'>,
    productStyleId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<RoyaltyAgreementHeaderProductSelections<T>, T> {
    return new GetByKeyRequestBuilder<
      RoyaltyAgreementHeaderProductSelections<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
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
   * Returns a request builder for updating an entity of type `RoyaltyAgreementHeaderProductSelections`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RoyaltyAgreementHeaderProductSelections`.
   */
  update(
    entity: RoyaltyAgreementHeaderProductSelections<T>
  ): UpdateRequestBuilder<RoyaltyAgreementHeaderProductSelections<T>, T> {
    return new UpdateRequestBuilder<
      RoyaltyAgreementHeaderProductSelections<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `RoyaltyAgreementHeaderProductSelections`.
   * @param dataAreaId Key property. See {@link RoyaltyAgreementHeaderProductSelections.dataAreaId}.
   * @param royaltyAgreementId Key property. See {@link RoyaltyAgreementHeaderProductSelections.royaltyAgreementId}.
   * @param itemNumber Key property. See {@link RoyaltyAgreementHeaderProductSelections.itemNumber}.
   * @param salesUnitSymbol Key property. See {@link RoyaltyAgreementHeaderProductSelections.salesUnitSymbol}.
   * @param qualifyingSiteId Key property. See {@link RoyaltyAgreementHeaderProductSelections.qualifyingSiteId}.
   * @param qualifyingWarehouseId Key property. See {@link RoyaltyAgreementHeaderProductSelections.qualifyingWarehouseId}.
   * @param productConfigurationId Key property. See {@link RoyaltyAgreementHeaderProductSelections.productConfigurationId}.
   * @param productColorId Key property. See {@link RoyaltyAgreementHeaderProductSelections.productColorId}.
   * @param productSizeId Key property. See {@link RoyaltyAgreementHeaderProductSelections.productSizeId}.
   * @param productStyleId Key property. See {@link RoyaltyAgreementHeaderProductSelections.productStyleId}.
   * @returns A request builder for creating requests that delete an entity of type `RoyaltyAgreementHeaderProductSelections`.
   */
  delete(
    dataAreaId: string,
    royaltyAgreementId: string,
    itemNumber: string,
    salesUnitSymbol: string,
    qualifyingSiteId: string,
    qualifyingWarehouseId: string,
    productConfigurationId: string,
    productColorId: string,
    productSizeId: string,
    productStyleId: string
  ): DeleteRequestBuilder<RoyaltyAgreementHeaderProductSelections<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RoyaltyAgreementHeaderProductSelections`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RoyaltyAgreementHeaderProductSelections` by taking the entity as a parameter.
   */
  delete(
    entity: RoyaltyAgreementHeaderProductSelections<T>
  ): DeleteRequestBuilder<RoyaltyAgreementHeaderProductSelections<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    royaltyAgreementId?: string,
    itemNumber?: string,
    salesUnitSymbol?: string,
    qualifyingSiteId?: string,
    qualifyingWarehouseId?: string,
    productConfigurationId?: string,
    productColorId?: string,
    productSizeId?: string,
    productStyleId?: string
  ): DeleteRequestBuilder<RoyaltyAgreementHeaderProductSelections<T>, T> {
    return new DeleteRequestBuilder<
      RoyaltyAgreementHeaderProductSelections<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof RoyaltyAgreementHeaderProductSelections
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
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
