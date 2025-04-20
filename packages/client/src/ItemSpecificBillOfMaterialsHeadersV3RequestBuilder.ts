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
import { ItemSpecificBillOfMaterialsHeadersV3 } from './ItemSpecificBillOfMaterialsHeadersV3';
import { NoYes } from './NoYes';

/**
 * Request builder class for operations supported on the {@link ItemSpecificBillOfMaterialsHeadersV3} entity.
 */
export class ItemSpecificBillOfMaterialsHeadersV3RequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ItemSpecificBillOfMaterialsHeadersV3<T>, T> {
  /**
   * Returns a request builder for querying all `ItemSpecificBillOfMaterialsHeadersV3` entities.
   * @returns A request builder for creating requests to retrieve all `ItemSpecificBillOfMaterialsHeadersV3` entities.
   */
  getAll(): GetAllRequestBuilder<ItemSpecificBillOfMaterialsHeadersV3<T>, T> {
    return new GetAllRequestBuilder<ItemSpecificBillOfMaterialsHeadersV3<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ItemSpecificBillOfMaterialsHeadersV3` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ItemSpecificBillOfMaterialsHeadersV3`.
   */
  create(
    entity: ItemSpecificBillOfMaterialsHeadersV3<T>
  ): CreateRequestBuilder<ItemSpecificBillOfMaterialsHeadersV3<T>, T> {
    return new CreateRequestBuilder<ItemSpecificBillOfMaterialsHeadersV3<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ItemSpecificBillOfMaterialsHeadersV3` entity based on its keys.
   * @param dataAreaId Key property. See {@link ItemSpecificBillOfMaterialsHeadersV3.dataAreaId}.
   * @param bomId Key property. See {@link ItemSpecificBillOfMaterialsHeadersV3.bomId}.
   * @param manufacturedItemNumber Key property. See {@link ItemSpecificBillOfMaterialsHeadersV3.manufacturedItemNumber}.
   * @param productionSiteId Key property. See {@link ItemSpecificBillOfMaterialsHeadersV3.productionSiteId}.
   * @param productColorId Key property. See {@link ItemSpecificBillOfMaterialsHeadersV3.productColorId}.
   * @param productConfigurationId Key property. See {@link ItemSpecificBillOfMaterialsHeadersV3.productConfigurationId}.
   * @param productSizeId Key property. See {@link ItemSpecificBillOfMaterialsHeadersV3.productSizeId}.
   * @param productStyleId Key property. See {@link ItemSpecificBillOfMaterialsHeadersV3.productStyleId}.
   * @param productVersionId Key property. See {@link ItemSpecificBillOfMaterialsHeadersV3.productVersionId}.
   * @param isActive Key property. See {@link ItemSpecificBillOfMaterialsHeadersV3.isActive}.
   * @param fromQuantity Key property. See {@link ItemSpecificBillOfMaterialsHeadersV3.fromQuantity}.
   * @param validFromDate Key property. See {@link ItemSpecificBillOfMaterialsHeadersV3.validFromDate}.
   * @returns A request builder for creating requests to retrieve one `ItemSpecificBillOfMaterialsHeadersV3` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    bomId: DeserializedType<T, 'Edm.String'>,
    manufacturedItemNumber: DeserializedType<T, 'Edm.String'>,
    productionSiteId: DeserializedType<T, 'Edm.String'>,
    productColorId: DeserializedType<T, 'Edm.String'>,
    productConfigurationId: DeserializedType<T, 'Edm.String'>,
    productSizeId: DeserializedType<T, 'Edm.String'>,
    productStyleId: DeserializedType<T, 'Edm.String'>,
    productVersionId: DeserializedType<T, 'Edm.String'>,
    isActive: DeserializedType<T, 'Microsoft.Dynamics.DataEntities.NoYes'>,
    fromQuantity: DeserializedType<T, 'Edm.Decimal'>,
    validFromDate: DeserializedType<T, 'Edm.DateTimeOffset'>
  ): GetByKeyRequestBuilder<ItemSpecificBillOfMaterialsHeadersV3<T>, T> {
    return new GetByKeyRequestBuilder<
      ItemSpecificBillOfMaterialsHeadersV3<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      BOMId: bomId,
      ManufacturedItemNumber: manufacturedItemNumber,
      ProductionSiteId: productionSiteId,
      ProductColorId: productColorId,
      ProductConfigurationId: productConfigurationId,
      ProductSizeId: productSizeId,
      ProductStyleId: productStyleId,
      ProductVersionId: productVersionId,
      IsActive: isActive,
      FromQuantity: fromQuantity,
      ValidFromDate: validFromDate
    });
  }

  /**
   * Returns a request builder for updating an entity of type `ItemSpecificBillOfMaterialsHeadersV3`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ItemSpecificBillOfMaterialsHeadersV3`.
   */
  update(
    entity: ItemSpecificBillOfMaterialsHeadersV3<T>
  ): UpdateRequestBuilder<ItemSpecificBillOfMaterialsHeadersV3<T>, T> {
    return new UpdateRequestBuilder<ItemSpecificBillOfMaterialsHeadersV3<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ItemSpecificBillOfMaterialsHeadersV3`.
   * @param dataAreaId Key property. See {@link ItemSpecificBillOfMaterialsHeadersV3.dataAreaId}.
   * @param bomId Key property. See {@link ItemSpecificBillOfMaterialsHeadersV3.bomId}.
   * @param manufacturedItemNumber Key property. See {@link ItemSpecificBillOfMaterialsHeadersV3.manufacturedItemNumber}.
   * @param productionSiteId Key property. See {@link ItemSpecificBillOfMaterialsHeadersV3.productionSiteId}.
   * @param productColorId Key property. See {@link ItemSpecificBillOfMaterialsHeadersV3.productColorId}.
   * @param productConfigurationId Key property. See {@link ItemSpecificBillOfMaterialsHeadersV3.productConfigurationId}.
   * @param productSizeId Key property. See {@link ItemSpecificBillOfMaterialsHeadersV3.productSizeId}.
   * @param productStyleId Key property. See {@link ItemSpecificBillOfMaterialsHeadersV3.productStyleId}.
   * @param productVersionId Key property. See {@link ItemSpecificBillOfMaterialsHeadersV3.productVersionId}.
   * @param isActive Key property. See {@link ItemSpecificBillOfMaterialsHeadersV3.isActive}.
   * @param fromQuantity Key property. See {@link ItemSpecificBillOfMaterialsHeadersV3.fromQuantity}.
   * @param validFromDate Key property. See {@link ItemSpecificBillOfMaterialsHeadersV3.validFromDate}.
   * @returns A request builder for creating requests that delete an entity of type `ItemSpecificBillOfMaterialsHeadersV3`.
   */
  delete(
    dataAreaId: string,
    bomId: string,
    manufacturedItemNumber: string,
    productionSiteId: string,
    productColorId: string,
    productConfigurationId: string,
    productSizeId: string,
    productStyleId: string,
    productVersionId: string,
    isActive: NoYes,
    fromQuantity: BigNumber,
    validFromDate: Moment
  ): DeleteRequestBuilder<ItemSpecificBillOfMaterialsHeadersV3<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ItemSpecificBillOfMaterialsHeadersV3`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ItemSpecificBillOfMaterialsHeadersV3` by taking the entity as a parameter.
   */
  delete(
    entity: ItemSpecificBillOfMaterialsHeadersV3<T>
  ): DeleteRequestBuilder<ItemSpecificBillOfMaterialsHeadersV3<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    bomId?: string,
    manufacturedItemNumber?: string,
    productionSiteId?: string,
    productColorId?: string,
    productConfigurationId?: string,
    productSizeId?: string,
    productStyleId?: string,
    productVersionId?: string,
    isActive?: NoYes,
    fromQuantity?: BigNumber,
    validFromDate?: Moment
  ): DeleteRequestBuilder<ItemSpecificBillOfMaterialsHeadersV3<T>, T> {
    return new DeleteRequestBuilder<ItemSpecificBillOfMaterialsHeadersV3<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ItemSpecificBillOfMaterialsHeadersV3
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            BOMId: bomId!,
            ManufacturedItemNumber: manufacturedItemNumber!,
            ProductionSiteId: productionSiteId!,
            ProductColorId: productColorId!,
            ProductConfigurationId: productConfigurationId!,
            ProductSizeId: productSizeId!,
            ProductStyleId: productStyleId!,
            ProductVersionId: productVersionId!,
            IsActive: isActive!,
            FromQuantity: fromQuantity!,
            ValidFromDate: validFromDate!
          }
    );
  }
}
