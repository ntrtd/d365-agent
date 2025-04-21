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
import { BillOfMaterialsVersionsV4 } from './BillOfMaterialsVersionsV4';
import { NoYes } from './NoYes';

/**
 * Request builder class for operations supported on the {@link BillOfMaterialsVersionsV4} entity.
 */
export class BillOfMaterialsVersionsV4RequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<BillOfMaterialsVersionsV4<T>, T> {
  /**
   * Returns a request builder for querying all `BillOfMaterialsVersionsV4` entities.
   * @returns A request builder for creating requests to retrieve all `BillOfMaterialsVersionsV4` entities.
   */
  getAll(): GetAllRequestBuilder<BillOfMaterialsVersionsV4<T>, T> {
    return new GetAllRequestBuilder<BillOfMaterialsVersionsV4<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `BillOfMaterialsVersionsV4` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `BillOfMaterialsVersionsV4`.
   */
  create(
    entity: BillOfMaterialsVersionsV4<T>
  ): CreateRequestBuilder<BillOfMaterialsVersionsV4<T>, T> {
    return new CreateRequestBuilder<BillOfMaterialsVersionsV4<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `BillOfMaterialsVersionsV4` entity based on its keys.
   * @param dataAreaId Key property. See {@link BillOfMaterialsVersionsV4.dataAreaId}.
   * @param manufacturedItemNumber Key property. See {@link BillOfMaterialsVersionsV4.manufacturedItemNumber}.
   * @param bomId Key property. See {@link BillOfMaterialsVersionsV4.bomId}.
   * @param productionSiteId Key property. See {@link BillOfMaterialsVersionsV4.productionSiteId}.
   * @param productConfigurationId Key property. See {@link BillOfMaterialsVersionsV4.productConfigurationId}.
   * @param productColorId Key property. See {@link BillOfMaterialsVersionsV4.productColorId}.
   * @param productSizeId Key property. See {@link BillOfMaterialsVersionsV4.productSizeId}.
   * @param productStyleId Key property. See {@link BillOfMaterialsVersionsV4.productStyleId}.
   * @param productVersionId Key property. See {@link BillOfMaterialsVersionsV4.productVersionId}.
   * @param isActive Key property. See {@link BillOfMaterialsVersionsV4.isActive}.
   * @param validFromDate Key property. See {@link BillOfMaterialsVersionsV4.validFromDate}.
   * @param fromQuantity Key property. See {@link BillOfMaterialsVersionsV4.fromQuantity}.
   * @param sequenceId Key property. See {@link BillOfMaterialsVersionsV4.sequenceId}.
   * @returns A request builder for creating requests to retrieve one `BillOfMaterialsVersionsV4` entity based on its keys.
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
    fromQuantity: DeserializedType<T, 'Edm.Decimal'>,
    sequenceId: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<BillOfMaterialsVersionsV4<T>, T> {
    return new GetByKeyRequestBuilder<BillOfMaterialsVersionsV4<T>, T>(
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
        FromQuantity: fromQuantity,
        SequenceId: sequenceId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `BillOfMaterialsVersionsV4`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `BillOfMaterialsVersionsV4`.
   */
  update(
    entity: BillOfMaterialsVersionsV4<T>
  ): UpdateRequestBuilder<BillOfMaterialsVersionsV4<T>, T> {
    return new UpdateRequestBuilder<BillOfMaterialsVersionsV4<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `BillOfMaterialsVersionsV4`.
   * @param dataAreaId Key property. See {@link BillOfMaterialsVersionsV4.dataAreaId}.
   * @param manufacturedItemNumber Key property. See {@link BillOfMaterialsVersionsV4.manufacturedItemNumber}.
   * @param bomId Key property. See {@link BillOfMaterialsVersionsV4.bomId}.
   * @param productionSiteId Key property. See {@link BillOfMaterialsVersionsV4.productionSiteId}.
   * @param productConfigurationId Key property. See {@link BillOfMaterialsVersionsV4.productConfigurationId}.
   * @param productColorId Key property. See {@link BillOfMaterialsVersionsV4.productColorId}.
   * @param productSizeId Key property. See {@link BillOfMaterialsVersionsV4.productSizeId}.
   * @param productStyleId Key property. See {@link BillOfMaterialsVersionsV4.productStyleId}.
   * @param productVersionId Key property. See {@link BillOfMaterialsVersionsV4.productVersionId}.
   * @param isActive Key property. See {@link BillOfMaterialsVersionsV4.isActive}.
   * @param validFromDate Key property. See {@link BillOfMaterialsVersionsV4.validFromDate}.
   * @param fromQuantity Key property. See {@link BillOfMaterialsVersionsV4.fromQuantity}.
   * @param sequenceId Key property. See {@link BillOfMaterialsVersionsV4.sequenceId}.
   * @returns A request builder for creating requests that delete an entity of type `BillOfMaterialsVersionsV4`.
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
    fromQuantity: BigNumber,
    sequenceId: number
  ): DeleteRequestBuilder<BillOfMaterialsVersionsV4<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `BillOfMaterialsVersionsV4`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `BillOfMaterialsVersionsV4` by taking the entity as a parameter.
   */
  delete(
    entity: BillOfMaterialsVersionsV4<T>
  ): DeleteRequestBuilder<BillOfMaterialsVersionsV4<T>, T>;
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
    fromQuantity?: BigNumber,
    sequenceId?: number
  ): DeleteRequestBuilder<BillOfMaterialsVersionsV4<T>, T> {
    return new DeleteRequestBuilder<BillOfMaterialsVersionsV4<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof BillOfMaterialsVersionsV4
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
            FromQuantity: fromQuantity!,
            SequenceId: sequenceId!
          }
    );
  }
}
