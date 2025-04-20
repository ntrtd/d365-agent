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
import { RoyaltyAgreementHeaderProductSelectionsV2 } from './RoyaltyAgreementHeaderProductSelectionsV2';

/**
 * Request builder class for operations supported on the {@link RoyaltyAgreementHeaderProductSelectionsV2} entity.
 */
export class RoyaltyAgreementHeaderProductSelectionsV2RequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RoyaltyAgreementHeaderProductSelectionsV2<T>, T> {
  /**
   * Returns a request builder for querying all `RoyaltyAgreementHeaderProductSelectionsV2` entities.
   * @returns A request builder for creating requests to retrieve all `RoyaltyAgreementHeaderProductSelectionsV2` entities.
   */
  getAll(): GetAllRequestBuilder<
    RoyaltyAgreementHeaderProductSelectionsV2<T>,
    T
  > {
    return new GetAllRequestBuilder<
      RoyaltyAgreementHeaderProductSelectionsV2<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `RoyaltyAgreementHeaderProductSelectionsV2` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RoyaltyAgreementHeaderProductSelectionsV2`.
   */
  create(
    entity: RoyaltyAgreementHeaderProductSelectionsV2<T>
  ): CreateRequestBuilder<RoyaltyAgreementHeaderProductSelectionsV2<T>, T> {
    return new CreateRequestBuilder<
      RoyaltyAgreementHeaderProductSelectionsV2<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `RoyaltyAgreementHeaderProductSelectionsV2` entity based on its keys.
   * @param dataAreaId Key property. See {@link RoyaltyAgreementHeaderProductSelectionsV2.dataAreaId}.
   * @param royaltyAgreementId Key property. See {@link RoyaltyAgreementHeaderProductSelectionsV2.royaltyAgreementId}.
   * @param itemNumber Key property. See {@link RoyaltyAgreementHeaderProductSelectionsV2.itemNumber}.
   * @param salesUnitSymbol Key property. See {@link RoyaltyAgreementHeaderProductSelectionsV2.salesUnitSymbol}.
   * @param qualifyingSiteId Key property. See {@link RoyaltyAgreementHeaderProductSelectionsV2.qualifyingSiteId}.
   * @param qualifyingWarehouseId Key property. See {@link RoyaltyAgreementHeaderProductSelectionsV2.qualifyingWarehouseId}.
   * @param productConfigurationId Key property. See {@link RoyaltyAgreementHeaderProductSelectionsV2.productConfigurationId}.
   * @param productColorId Key property. See {@link RoyaltyAgreementHeaderProductSelectionsV2.productColorId}.
   * @param productSizeId Key property. See {@link RoyaltyAgreementHeaderProductSelectionsV2.productSizeId}.
   * @param productStyleId Key property. See {@link RoyaltyAgreementHeaderProductSelectionsV2.productStyleId}.
   * @param productVersionId Key property. See {@link RoyaltyAgreementHeaderProductSelectionsV2.productVersionId}.
   * @returns A request builder for creating requests to retrieve one `RoyaltyAgreementHeaderProductSelectionsV2` entity based on its keys.
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
    productStyleId: DeserializedType<T, 'Edm.String'>,
    productVersionId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<RoyaltyAgreementHeaderProductSelectionsV2<T>, T> {
    return new GetByKeyRequestBuilder<
      RoyaltyAgreementHeaderProductSelectionsV2<T>,
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
      ProductStyleId: productStyleId,
      ProductVersionId: productVersionId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `RoyaltyAgreementHeaderProductSelectionsV2`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RoyaltyAgreementHeaderProductSelectionsV2`.
   */
  update(
    entity: RoyaltyAgreementHeaderProductSelectionsV2<T>
  ): UpdateRequestBuilder<RoyaltyAgreementHeaderProductSelectionsV2<T>, T> {
    return new UpdateRequestBuilder<
      RoyaltyAgreementHeaderProductSelectionsV2<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `RoyaltyAgreementHeaderProductSelectionsV2`.
   * @param dataAreaId Key property. See {@link RoyaltyAgreementHeaderProductSelectionsV2.dataAreaId}.
   * @param royaltyAgreementId Key property. See {@link RoyaltyAgreementHeaderProductSelectionsV2.royaltyAgreementId}.
   * @param itemNumber Key property. See {@link RoyaltyAgreementHeaderProductSelectionsV2.itemNumber}.
   * @param salesUnitSymbol Key property. See {@link RoyaltyAgreementHeaderProductSelectionsV2.salesUnitSymbol}.
   * @param qualifyingSiteId Key property. See {@link RoyaltyAgreementHeaderProductSelectionsV2.qualifyingSiteId}.
   * @param qualifyingWarehouseId Key property. See {@link RoyaltyAgreementHeaderProductSelectionsV2.qualifyingWarehouseId}.
   * @param productConfigurationId Key property. See {@link RoyaltyAgreementHeaderProductSelectionsV2.productConfigurationId}.
   * @param productColorId Key property. See {@link RoyaltyAgreementHeaderProductSelectionsV2.productColorId}.
   * @param productSizeId Key property. See {@link RoyaltyAgreementHeaderProductSelectionsV2.productSizeId}.
   * @param productStyleId Key property. See {@link RoyaltyAgreementHeaderProductSelectionsV2.productStyleId}.
   * @param productVersionId Key property. See {@link RoyaltyAgreementHeaderProductSelectionsV2.productVersionId}.
   * @returns A request builder for creating requests that delete an entity of type `RoyaltyAgreementHeaderProductSelectionsV2`.
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
    productStyleId: string,
    productVersionId: string
  ): DeleteRequestBuilder<RoyaltyAgreementHeaderProductSelectionsV2<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RoyaltyAgreementHeaderProductSelectionsV2`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RoyaltyAgreementHeaderProductSelectionsV2` by taking the entity as a parameter.
   */
  delete(
    entity: RoyaltyAgreementHeaderProductSelectionsV2<T>
  ): DeleteRequestBuilder<RoyaltyAgreementHeaderProductSelectionsV2<T>, T>;
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
    productStyleId?: string,
    productVersionId?: string
  ): DeleteRequestBuilder<RoyaltyAgreementHeaderProductSelectionsV2<T>, T> {
    return new DeleteRequestBuilder<
      RoyaltyAgreementHeaderProductSelectionsV2<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof RoyaltyAgreementHeaderProductSelectionsV2
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
            ProductStyleId: productStyleId!,
            ProductVersionId: productVersionId!
          }
    );
  }
}
