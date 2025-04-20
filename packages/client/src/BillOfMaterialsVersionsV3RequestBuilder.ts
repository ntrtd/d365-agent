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
import { BillOfMaterialsVersionsV3 } from './BillOfMaterialsVersionsV3';
import { NoYes } from './NoYes';

/**
 * Request builder class for operations supported on the {@link BillOfMaterialsVersionsV3} entity.
 */
export class BillOfMaterialsVersionsV3RequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<BillOfMaterialsVersionsV3<T>, T> {
  /**
   * Returns a request builder for querying all `BillOfMaterialsVersionsV3` entities.
   * @returns A request builder for creating requests to retrieve all `BillOfMaterialsVersionsV3` entities.
   */
  getAll(): GetAllRequestBuilder<BillOfMaterialsVersionsV3<T>, T> {
    return new GetAllRequestBuilder<BillOfMaterialsVersionsV3<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `BillOfMaterialsVersionsV3` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `BillOfMaterialsVersionsV3`.
   */
  create(
    entity: BillOfMaterialsVersionsV3<T>
  ): CreateRequestBuilder<BillOfMaterialsVersionsV3<T>, T> {
    return new CreateRequestBuilder<BillOfMaterialsVersionsV3<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `BillOfMaterialsVersionsV3` entity based on its keys.
   * @param dataAreaId Key property. See {@link BillOfMaterialsVersionsV3.dataAreaId}.
   * @param manufacturedItemNumber Key property. See {@link BillOfMaterialsVersionsV3.manufacturedItemNumber}.
   * @param bomId Key property. See {@link BillOfMaterialsVersionsV3.bomId}.
   * @param productionSiteId Key property. See {@link BillOfMaterialsVersionsV3.productionSiteId}.
   * @param productConfigurationId Key property. See {@link BillOfMaterialsVersionsV3.productConfigurationId}.
   * @param productColorId Key property. See {@link BillOfMaterialsVersionsV3.productColorId}.
   * @param productSizeId Key property. See {@link BillOfMaterialsVersionsV3.productSizeId}.
   * @param productStyleId Key property. See {@link BillOfMaterialsVersionsV3.productStyleId}.
   * @param productVersionId Key property. See {@link BillOfMaterialsVersionsV3.productVersionId}.
   * @param isActive Key property. See {@link BillOfMaterialsVersionsV3.isActive}.
   * @param validFromDate Key property. See {@link BillOfMaterialsVersionsV3.validFromDate}.
   * @param fromQuantity Key property. See {@link BillOfMaterialsVersionsV3.fromQuantity}.
   * @returns A request builder for creating requests to retrieve one `BillOfMaterialsVersionsV3` entity based on its keys.
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
    isActive: DeserializedType<T, 'Microsoft.Dynamics.DataEntities.NoYes'>,
    validFromDate: DeserializedType<T, 'Edm.DateTimeOffset'>,
    fromQuantity: DeserializedType<T, 'Edm.Decimal'>
  ): GetByKeyRequestBuilder<BillOfMaterialsVersionsV3<T>, T> {
    return new GetByKeyRequestBuilder<BillOfMaterialsVersionsV3<T>, T>(
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
   * Returns a request builder for updating an entity of type `BillOfMaterialsVersionsV3`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `BillOfMaterialsVersionsV3`.
   */
  update(
    entity: BillOfMaterialsVersionsV3<T>
  ): UpdateRequestBuilder<BillOfMaterialsVersionsV3<T>, T> {
    return new UpdateRequestBuilder<BillOfMaterialsVersionsV3<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `BillOfMaterialsVersionsV3`.
   * @param dataAreaId Key property. See {@link BillOfMaterialsVersionsV3.dataAreaId}.
   * @param manufacturedItemNumber Key property. See {@link BillOfMaterialsVersionsV3.manufacturedItemNumber}.
   * @param bomId Key property. See {@link BillOfMaterialsVersionsV3.bomId}.
   * @param productionSiteId Key property. See {@link BillOfMaterialsVersionsV3.productionSiteId}.
   * @param productConfigurationId Key property. See {@link BillOfMaterialsVersionsV3.productConfigurationId}.
   * @param productColorId Key property. See {@link BillOfMaterialsVersionsV3.productColorId}.
   * @param productSizeId Key property. See {@link BillOfMaterialsVersionsV3.productSizeId}.
   * @param productStyleId Key property. See {@link BillOfMaterialsVersionsV3.productStyleId}.
   * @param productVersionId Key property. See {@link BillOfMaterialsVersionsV3.productVersionId}.
   * @param isActive Key property. See {@link BillOfMaterialsVersionsV3.isActive}.
   * @param validFromDate Key property. See {@link BillOfMaterialsVersionsV3.validFromDate}.
   * @param fromQuantity Key property. See {@link BillOfMaterialsVersionsV3.fromQuantity}.
   * @returns A request builder for creating requests that delete an entity of type `BillOfMaterialsVersionsV3`.
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
    isActive: NoYes,
    validFromDate: Moment,
    fromQuantity: BigNumber
  ): DeleteRequestBuilder<BillOfMaterialsVersionsV3<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `BillOfMaterialsVersionsV3`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `BillOfMaterialsVersionsV3` by taking the entity as a parameter.
   */
  delete(
    entity: BillOfMaterialsVersionsV3<T>
  ): DeleteRequestBuilder<BillOfMaterialsVersionsV3<T>, T>;
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
    isActive?: NoYes,
    validFromDate?: Moment,
    fromQuantity?: BigNumber
  ): DeleteRequestBuilder<BillOfMaterialsVersionsV3<T>, T> {
    return new DeleteRequestBuilder<BillOfMaterialsVersionsV3<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof BillOfMaterialsVersionsV3
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
