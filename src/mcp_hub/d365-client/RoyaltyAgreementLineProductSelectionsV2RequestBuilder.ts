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
import { RoyaltyAgreementLineProductSelectionsV2 } from './RoyaltyAgreementLineProductSelectionsV2';

/**
 * Request builder class for operations supported on the {@link RoyaltyAgreementLineProductSelectionsV2} entity.
 */
export class RoyaltyAgreementLineProductSelectionsV2RequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RoyaltyAgreementLineProductSelectionsV2<T>, T> {
  /**
   * Returns a request builder for querying all `RoyaltyAgreementLineProductSelectionsV2` entities.
   * @returns A request builder for creating requests to retrieve all `RoyaltyAgreementLineProductSelectionsV2` entities.
   */
  getAll(): GetAllRequestBuilder<
    RoyaltyAgreementLineProductSelectionsV2<T>,
    T
  > {
    return new GetAllRequestBuilder<
      RoyaltyAgreementLineProductSelectionsV2<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `RoyaltyAgreementLineProductSelectionsV2` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RoyaltyAgreementLineProductSelectionsV2`.
   */
  create(
    entity: RoyaltyAgreementLineProductSelectionsV2<T>
  ): CreateRequestBuilder<RoyaltyAgreementLineProductSelectionsV2<T>, T> {
    return new CreateRequestBuilder<
      RoyaltyAgreementLineProductSelectionsV2<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `RoyaltyAgreementLineProductSelectionsV2` entity based on its keys.
   * @param dataAreaId Key property. See {@link RoyaltyAgreementLineProductSelectionsV2.dataAreaId}.
   * @param royaltyAgreementLineId Key property. See {@link RoyaltyAgreementLineProductSelectionsV2.royaltyAgreementLineId}.
   * @param royaltyAgreementId Key property. See {@link RoyaltyAgreementLineProductSelectionsV2.royaltyAgreementId}.
   * @param itemNumber Key property. See {@link RoyaltyAgreementLineProductSelectionsV2.itemNumber}.
   * @param salesUnitSymbol Key property. See {@link RoyaltyAgreementLineProductSelectionsV2.salesUnitSymbol}.
   * @param qualifyingSiteId Key property. See {@link RoyaltyAgreementLineProductSelectionsV2.qualifyingSiteId}.
   * @param qualifyingWarehouseId Key property. See {@link RoyaltyAgreementLineProductSelectionsV2.qualifyingWarehouseId}.
   * @param productConfigurationId Key property. See {@link RoyaltyAgreementLineProductSelectionsV2.productConfigurationId}.
   * @param productColorId Key property. See {@link RoyaltyAgreementLineProductSelectionsV2.productColorId}.
   * @param productSizeId Key property. See {@link RoyaltyAgreementLineProductSelectionsV2.productSizeId}.
   * @param productStyleId Key property. See {@link RoyaltyAgreementLineProductSelectionsV2.productStyleId}.
   * @param productVersionId Key property. See {@link RoyaltyAgreementLineProductSelectionsV2.productVersionId}.
   * @returns A request builder for creating requests to retrieve one `RoyaltyAgreementLineProductSelectionsV2` entity based on its keys.
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
    productStyleId: DeserializedType<T, 'Edm.String'>,
    productVersionId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<RoyaltyAgreementLineProductSelectionsV2<T>, T> {
    return new GetByKeyRequestBuilder<
      RoyaltyAgreementLineProductSelectionsV2<T>,
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
      ProductStyleId: productStyleId,
      ProductVersionId: productVersionId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `RoyaltyAgreementLineProductSelectionsV2`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RoyaltyAgreementLineProductSelectionsV2`.
   */
  update(
    entity: RoyaltyAgreementLineProductSelectionsV2<T>
  ): UpdateRequestBuilder<RoyaltyAgreementLineProductSelectionsV2<T>, T> {
    return new UpdateRequestBuilder<
      RoyaltyAgreementLineProductSelectionsV2<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `RoyaltyAgreementLineProductSelectionsV2`.
   * @param dataAreaId Key property. See {@link RoyaltyAgreementLineProductSelectionsV2.dataAreaId}.
   * @param royaltyAgreementLineId Key property. See {@link RoyaltyAgreementLineProductSelectionsV2.royaltyAgreementLineId}.
   * @param royaltyAgreementId Key property. See {@link RoyaltyAgreementLineProductSelectionsV2.royaltyAgreementId}.
   * @param itemNumber Key property. See {@link RoyaltyAgreementLineProductSelectionsV2.itemNumber}.
   * @param salesUnitSymbol Key property. See {@link RoyaltyAgreementLineProductSelectionsV2.salesUnitSymbol}.
   * @param qualifyingSiteId Key property. See {@link RoyaltyAgreementLineProductSelectionsV2.qualifyingSiteId}.
   * @param qualifyingWarehouseId Key property. See {@link RoyaltyAgreementLineProductSelectionsV2.qualifyingWarehouseId}.
   * @param productConfigurationId Key property. See {@link RoyaltyAgreementLineProductSelectionsV2.productConfigurationId}.
   * @param productColorId Key property. See {@link RoyaltyAgreementLineProductSelectionsV2.productColorId}.
   * @param productSizeId Key property. See {@link RoyaltyAgreementLineProductSelectionsV2.productSizeId}.
   * @param productStyleId Key property. See {@link RoyaltyAgreementLineProductSelectionsV2.productStyleId}.
   * @param productVersionId Key property. See {@link RoyaltyAgreementLineProductSelectionsV2.productVersionId}.
   * @returns A request builder for creating requests that delete an entity of type `RoyaltyAgreementLineProductSelectionsV2`.
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
    productStyleId: string,
    productVersionId: string
  ): DeleteRequestBuilder<RoyaltyAgreementLineProductSelectionsV2<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RoyaltyAgreementLineProductSelectionsV2`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RoyaltyAgreementLineProductSelectionsV2` by taking the entity as a parameter.
   */
  delete(
    entity: RoyaltyAgreementLineProductSelectionsV2<T>
  ): DeleteRequestBuilder<RoyaltyAgreementLineProductSelectionsV2<T>, T>;
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
    productStyleId?: string,
    productVersionId?: string
  ): DeleteRequestBuilder<RoyaltyAgreementLineProductSelectionsV2<T>, T> {
    return new DeleteRequestBuilder<
      RoyaltyAgreementLineProductSelectionsV2<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof RoyaltyAgreementLineProductSelectionsV2
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
            ProductStyleId: productStyleId!,
            ProductVersionId: productVersionId!
          }
    );
  }
}
