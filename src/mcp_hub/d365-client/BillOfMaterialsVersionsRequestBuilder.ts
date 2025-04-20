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
import { BillOfMaterialsVersions } from './BillOfMaterialsVersions';

/**
 * Request builder class for operations supported on the {@link BillOfMaterialsVersions} entity.
 */
export class BillOfMaterialsVersionsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<BillOfMaterialsVersions<T>, T> {
  /**
   * Returns a request builder for querying all `BillOfMaterialsVersions` entities.
   * @returns A request builder for creating requests to retrieve all `BillOfMaterialsVersions` entities.
   */
  getAll(): GetAllRequestBuilder<BillOfMaterialsVersions<T>, T> {
    return new GetAllRequestBuilder<BillOfMaterialsVersions<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `BillOfMaterialsVersions` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `BillOfMaterialsVersions`.
   */
  create(
    entity: BillOfMaterialsVersions<T>
  ): CreateRequestBuilder<BillOfMaterialsVersions<T>, T> {
    return new CreateRequestBuilder<BillOfMaterialsVersions<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `BillOfMaterialsVersions` entity based on its keys.
   * @param dataAreaId Key property. See {@link BillOfMaterialsVersions.dataAreaId}.
   * @param manufacturedItemNumber Key property. See {@link BillOfMaterialsVersions.manufacturedItemNumber}.
   * @param bomId Key property. See {@link BillOfMaterialsVersions.bomId}.
   * @param productionSiteId Key property. See {@link BillOfMaterialsVersions.productionSiteId}.
   * @param productConfigurationId Key property. See {@link BillOfMaterialsVersions.productConfigurationId}.
   * @param productColorId Key property. See {@link BillOfMaterialsVersions.productColorId}.
   * @param productSizeId Key property. See {@link BillOfMaterialsVersions.productSizeId}.
   * @param productStyleId Key property. See {@link BillOfMaterialsVersions.productStyleId}.
   * @param isActive Key property. See {@link BillOfMaterialsVersions.isActive}.
   * @param validFromDate Key property. See {@link BillOfMaterialsVersions.validFromDate}.
   * @param fromQuantity Key property. See {@link BillOfMaterialsVersions.fromQuantity}.
   * @returns A request builder for creating requests to retrieve one `BillOfMaterialsVersions` entity based on its keys.
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
    isActive: DeserializedType<T, 'Edm.Int32'>,
    validFromDate: DeserializedType<T, 'Edm.DateTimeOffset'>,
    fromQuantity: DeserializedType<T, 'Edm.Decimal'>
  ): GetByKeyRequestBuilder<BillOfMaterialsVersions<T>, T> {
    return new GetByKeyRequestBuilder<BillOfMaterialsVersions<T>, T>(
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
   * Returns a request builder for updating an entity of type `BillOfMaterialsVersions`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `BillOfMaterialsVersions`.
   */
  update(
    entity: BillOfMaterialsVersions<T>
  ): UpdateRequestBuilder<BillOfMaterialsVersions<T>, T> {
    return new UpdateRequestBuilder<BillOfMaterialsVersions<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `BillOfMaterialsVersions`.
   * @param dataAreaId Key property. See {@link BillOfMaterialsVersions.dataAreaId}.
   * @param manufacturedItemNumber Key property. See {@link BillOfMaterialsVersions.manufacturedItemNumber}.
   * @param bomId Key property. See {@link BillOfMaterialsVersions.bomId}.
   * @param productionSiteId Key property. See {@link BillOfMaterialsVersions.productionSiteId}.
   * @param productConfigurationId Key property. See {@link BillOfMaterialsVersions.productConfigurationId}.
   * @param productColorId Key property. See {@link BillOfMaterialsVersions.productColorId}.
   * @param productSizeId Key property. See {@link BillOfMaterialsVersions.productSizeId}.
   * @param productStyleId Key property. See {@link BillOfMaterialsVersions.productStyleId}.
   * @param isActive Key property. See {@link BillOfMaterialsVersions.isActive}.
   * @param validFromDate Key property. See {@link BillOfMaterialsVersions.validFromDate}.
   * @param fromQuantity Key property. See {@link BillOfMaterialsVersions.fromQuantity}.
   * @returns A request builder for creating requests that delete an entity of type `BillOfMaterialsVersions`.
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
    isActive: number,
    validFromDate: Moment,
    fromQuantity: BigNumber
  ): DeleteRequestBuilder<BillOfMaterialsVersions<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `BillOfMaterialsVersions`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `BillOfMaterialsVersions` by taking the entity as a parameter.
   */
  delete(
    entity: BillOfMaterialsVersions<T>
  ): DeleteRequestBuilder<BillOfMaterialsVersions<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    manufacturedItemNumber?: string,
    bomId?: string,
    productionSiteId?: string,
    productConfigurationId?: string,
    productColorId?: string,
    productSizeId?: string,
    productStyleId?: string,
    isActive?: number,
    validFromDate?: Moment,
    fromQuantity?: BigNumber
  ): DeleteRequestBuilder<BillOfMaterialsVersions<T>, T> {
    return new DeleteRequestBuilder<BillOfMaterialsVersions<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof BillOfMaterialsVersions
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
