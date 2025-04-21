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
import { BillOfMaterialsVersionsV2 } from './BillOfMaterialsVersionsV2';
import { NoYes } from './NoYes';

/**
 * Request builder class for operations supported on the {@link BillOfMaterialsVersionsV2} entity.
 */
export class BillOfMaterialsVersionsV2RequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<BillOfMaterialsVersionsV2<T>, T> {
  /**
   * Returns a request builder for querying all `BillOfMaterialsVersionsV2` entities.
   * @returns A request builder for creating requests to retrieve all `BillOfMaterialsVersionsV2` entities.
   */
  getAll(): GetAllRequestBuilder<BillOfMaterialsVersionsV2<T>, T> {
    return new GetAllRequestBuilder<BillOfMaterialsVersionsV2<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `BillOfMaterialsVersionsV2` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `BillOfMaterialsVersionsV2`.
   */
  create(
    entity: BillOfMaterialsVersionsV2<T>
  ): CreateRequestBuilder<BillOfMaterialsVersionsV2<T>, T> {
    return new CreateRequestBuilder<BillOfMaterialsVersionsV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `BillOfMaterialsVersionsV2` entity based on its keys.
   * @param dataAreaId Key property. See {@link BillOfMaterialsVersionsV2.dataAreaId}.
   * @param manufacturedItemNumber Key property. See {@link BillOfMaterialsVersionsV2.manufacturedItemNumber}.
   * @param bomId Key property. See {@link BillOfMaterialsVersionsV2.bomId}.
   * @param productionSiteId Key property. See {@link BillOfMaterialsVersionsV2.productionSiteId}.
   * @param productConfigurationId Key property. See {@link BillOfMaterialsVersionsV2.productConfigurationId}.
   * @param productColorId Key property. See {@link BillOfMaterialsVersionsV2.productColorId}.
   * @param productSizeId Key property. See {@link BillOfMaterialsVersionsV2.productSizeId}.
   * @param productStyleId Key property. See {@link BillOfMaterialsVersionsV2.productStyleId}.
   * @param isActive Key property. See {@link BillOfMaterialsVersionsV2.isActive}.
   * @param validFromDate Key property. See {@link BillOfMaterialsVersionsV2.validFromDate}.
   * @param fromQuantity Key property. See {@link BillOfMaterialsVersionsV2.fromQuantity}.
   * @returns A request builder for creating requests to retrieve one `BillOfMaterialsVersionsV2` entity based on its keys.
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
    isActive: DeserializedType<T, 'Microsoft.Dynamics.DataEntities.NoYes'>,
    validFromDate: DeserializedType<T, 'Edm.DateTimeOffset'>,
    fromQuantity: DeserializedType<T, 'Edm.Decimal'>
  ): GetByKeyRequestBuilder<BillOfMaterialsVersionsV2<T>, T> {
    return new GetByKeyRequestBuilder<BillOfMaterialsVersionsV2<T>, T>(
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
        IsActive: isActive,
        ValidFromDate: validFromDate,
        FromQuantity: fromQuantity
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `BillOfMaterialsVersionsV2`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `BillOfMaterialsVersionsV2`.
   */
  update(
    entity: BillOfMaterialsVersionsV2<T>
  ): UpdateRequestBuilder<BillOfMaterialsVersionsV2<T>, T> {
    return new UpdateRequestBuilder<BillOfMaterialsVersionsV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `BillOfMaterialsVersionsV2`.
   * @param dataAreaId Key property. See {@link BillOfMaterialsVersionsV2.dataAreaId}.
   * @param manufacturedItemNumber Key property. See {@link BillOfMaterialsVersionsV2.manufacturedItemNumber}.
   * @param bomId Key property. See {@link BillOfMaterialsVersionsV2.bomId}.
   * @param productionSiteId Key property. See {@link BillOfMaterialsVersionsV2.productionSiteId}.
   * @param productConfigurationId Key property. See {@link BillOfMaterialsVersionsV2.productConfigurationId}.
   * @param productColorId Key property. See {@link BillOfMaterialsVersionsV2.productColorId}.
   * @param productSizeId Key property. See {@link BillOfMaterialsVersionsV2.productSizeId}.
   * @param productStyleId Key property. See {@link BillOfMaterialsVersionsV2.productStyleId}.
   * @param isActive Key property. See {@link BillOfMaterialsVersionsV2.isActive}.
   * @param validFromDate Key property. See {@link BillOfMaterialsVersionsV2.validFromDate}.
   * @param fromQuantity Key property. See {@link BillOfMaterialsVersionsV2.fromQuantity}.
   * @returns A request builder for creating requests that delete an entity of type `BillOfMaterialsVersionsV2`.
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
    isActive: NoYes,
    validFromDate: Moment,
    fromQuantity: BigNumber
  ): DeleteRequestBuilder<BillOfMaterialsVersionsV2<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `BillOfMaterialsVersionsV2`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `BillOfMaterialsVersionsV2` by taking the entity as a parameter.
   */
  delete(
    entity: BillOfMaterialsVersionsV2<T>
  ): DeleteRequestBuilder<BillOfMaterialsVersionsV2<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    manufacturedItemNumber?: string,
    bomId?: string,
    productionSiteId?: string,
    productConfigurationId?: string,
    productColorId?: string,
    productSizeId?: string,
    productStyleId?: string,
    isActive?: NoYes,
    validFromDate?: Moment,
    fromQuantity?: BigNumber
  ): DeleteRequestBuilder<BillOfMaterialsVersionsV2<T>, T> {
    return new DeleteRequestBuilder<BillOfMaterialsVersionsV2<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof BillOfMaterialsVersionsV2
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
            IsActive: isActive!,
            ValidFromDate: validFromDate!,
            FromQuantity: fromQuantity!
          }
    );
  }
}
