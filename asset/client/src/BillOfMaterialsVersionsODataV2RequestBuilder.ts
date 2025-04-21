/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
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
import { BillOfMaterialsVersionsODataV2 } from './BillOfMaterialsVersionsODataV2';

/**
 * Request builder class for operations supported on the {@link BillOfMaterialsVersionsODataV2} entity.
 */
export class BillOfMaterialsVersionsODataV2RequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<BillOfMaterialsVersionsODataV2<T>, T> {
  /**
   * Returns a request builder for querying all `BillOfMaterialsVersionsODataV2` entities.
   * @returns A request builder for creating requests to retrieve all `BillOfMaterialsVersionsODataV2` entities.
   */
  getAll(): GetAllRequestBuilder<BillOfMaterialsVersionsODataV2<T>, T> {
    return new GetAllRequestBuilder<BillOfMaterialsVersionsODataV2<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `BillOfMaterialsVersionsODataV2` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `BillOfMaterialsVersionsODataV2`.
   */
  create(
    entity: BillOfMaterialsVersionsODataV2<T>
  ): CreateRequestBuilder<BillOfMaterialsVersionsODataV2<T>, T> {
    return new CreateRequestBuilder<BillOfMaterialsVersionsODataV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `BillOfMaterialsVersionsODataV2` entity based on its keys.
   * @param dataAreaId Key property. See {@link BillOfMaterialsVersionsODataV2.dataAreaId}.
   * @param manufacturedItemNumber Key property. See {@link BillOfMaterialsVersionsODataV2.manufacturedItemNumber}.
   * @param bomId Key property. See {@link BillOfMaterialsVersionsODataV2.bomId}.
   * @param productionSiteId Key property. See {@link BillOfMaterialsVersionsODataV2.productionSiteId}.
   * @param productConfigurationId Key property. See {@link BillOfMaterialsVersionsODataV2.productConfigurationId}.
   * @param productColorId Key property. See {@link BillOfMaterialsVersionsODataV2.productColorId}.
   * @param productSizeId Key property. See {@link BillOfMaterialsVersionsODataV2.productSizeId}.
   * @param productStyleId Key property. See {@link BillOfMaterialsVersionsODataV2.productStyleId}.
   * @param productVersionId Key property. See {@link BillOfMaterialsVersionsODataV2.productVersionId}.
   * @param isActive Key property. See {@link BillOfMaterialsVersionsODataV2.isActive}.
   * @param validFromDate Key property. See {@link BillOfMaterialsVersionsODataV2.validFromDate}.
   * @param fromQuantity Key property. See {@link BillOfMaterialsVersionsODataV2.fromQuantity}.
   * @returns A request builder for creating requests to retrieve one `BillOfMaterialsVersionsODataV2` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    manufacturedItemNumber: DeserializedType<T, 'Edm.String'>,
    bomId: DeserializedType<T, 'Edm.String'>,
    productionSiteId: DeserializedType<T, 'Edm.String'>,
    productConfigurationId: DeserializedType<T, 'Edm.String'>,
    productColorId: DeserializedType<T, 'Edm.String'>,
    productSizeId: DeserializedType<T, 'Edm.String'>,
    productStyleId: DeserializedType<T, 'Edm.String'>,
    productVersionId: DeserializedType<T, 'Edm.String'>,
    isActive: DeserializedType<T, 'Edm.Int32'>,
    validFromDate: DeserializedType<T, 'Edm.DateTimeOffset'>,
    fromQuantity: DeserializedType<T, 'Edm.Decimal'>
  ): GetByKeyRequestBuilder<BillOfMaterialsVersionsODataV2<T>, T> {
    return new GetByKeyRequestBuilder<BillOfMaterialsVersionsODataV2<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        ManufacturedItemNumber: manufacturedItemNumber,
        BOMId: bomId,
        ProductionSiteId: productionSiteId,
        ProductConfigurationId: productConfigurationId,
        ProductColorId: productColorId,
        ProductSizeId: productSizeId,
        ProductStyleId: productStyleId,
        ProductVersionId: productVersionId,
        IsActive: isActive,
        ValidFromDate: validFromDate,
        FromQuantity: fromQuantity
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `BillOfMaterialsVersionsODataV2`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `BillOfMaterialsVersionsODataV2`.
   */
  update(
    entity: BillOfMaterialsVersionsODataV2<T>
  ): UpdateRequestBuilder<BillOfMaterialsVersionsODataV2<T>, T> {
    return new UpdateRequestBuilder<BillOfMaterialsVersionsODataV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `BillOfMaterialsVersionsODataV2`.
   * @param dataAreaId Key property. See {@link BillOfMaterialsVersionsODataV2.dataAreaId}.
   * @param manufacturedItemNumber Key property. See {@link BillOfMaterialsVersionsODataV2.manufacturedItemNumber}.
   * @param bomId Key property. See {@link BillOfMaterialsVersionsODataV2.bomId}.
   * @param productionSiteId Key property. See {@link BillOfMaterialsVersionsODataV2.productionSiteId}.
   * @param productConfigurationId Key property. See {@link BillOfMaterialsVersionsODataV2.productConfigurationId}.
   * @param productColorId Key property. See {@link BillOfMaterialsVersionsODataV2.productColorId}.
   * @param productSizeId Key property. See {@link BillOfMaterialsVersionsODataV2.productSizeId}.
   * @param productStyleId Key property. See {@link BillOfMaterialsVersionsODataV2.productStyleId}.
   * @param productVersionId Key property. See {@link BillOfMaterialsVersionsODataV2.productVersionId}.
   * @param isActive Key property. See {@link BillOfMaterialsVersionsODataV2.isActive}.
   * @param validFromDate Key property. See {@link BillOfMaterialsVersionsODataV2.validFromDate}.
   * @param fromQuantity Key property. See {@link BillOfMaterialsVersionsODataV2.fromQuantity}.
   * @returns A request builder for creating requests that delete an entity of type `BillOfMaterialsVersionsODataV2`.
   */
  delete(
    dataAreaId: string,
    manufacturedItemNumber: string,
    bomId: string,
    productionSiteId: string,
    productConfigurationId: string,
    productColorId: string,
    productSizeId: string,
    productStyleId: string,
    productVersionId: string,
    isActive: number,
    validFromDate: Moment,
    fromQuantity: BigNumber
  ): DeleteRequestBuilder<BillOfMaterialsVersionsODataV2<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `BillOfMaterialsVersionsODataV2`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `BillOfMaterialsVersionsODataV2` by taking the entity as a parameter.
   */
  delete(
    entity: BillOfMaterialsVersionsODataV2<T>
  ): DeleteRequestBuilder<BillOfMaterialsVersionsODataV2<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    manufacturedItemNumber?: string,
    bomId?: string,
    productionSiteId?: string,
    productConfigurationId?: string,
    productColorId?: string,
    productSizeId?: string,
    productStyleId?: string,
    productVersionId?: string,
    isActive?: number,
    validFromDate?: Moment,
    fromQuantity?: BigNumber
  ): DeleteRequestBuilder<BillOfMaterialsVersionsODataV2<T>, T> {
    return new DeleteRequestBuilder<BillOfMaterialsVersionsODataV2<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof BillOfMaterialsVersionsODataV2
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ManufacturedItemNumber: manufacturedItemNumber!,
            BOMId: bomId!,
            ProductionSiteId: productionSiteId!,
            ProductConfigurationId: productConfigurationId!,
            ProductColorId: productColorId!,
            ProductSizeId: productSizeId!,
            ProductStyleId: productStyleId!,
            ProductVersionId: productVersionId!,
            IsActive: isActive!,
            ValidFromDate: validFromDate!,
            FromQuantity: fromQuantity!
          }
    );
  }
}
