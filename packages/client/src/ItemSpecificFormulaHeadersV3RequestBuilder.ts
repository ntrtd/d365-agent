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
import { ItemSpecificFormulaHeadersV3 } from './ItemSpecificFormulaHeadersV3';
import { NoYes } from './NoYes';

/**
 * Request builder class for operations supported on the {@link ItemSpecificFormulaHeadersV3} entity.
 */
export class ItemSpecificFormulaHeadersV3RequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ItemSpecificFormulaHeadersV3<T>, T> {
  /**
   * Returns a request builder for querying all `ItemSpecificFormulaHeadersV3` entities.
   * @returns A request builder for creating requests to retrieve all `ItemSpecificFormulaHeadersV3` entities.
   */
  getAll(): GetAllRequestBuilder<ItemSpecificFormulaHeadersV3<T>, T> {
    return new GetAllRequestBuilder<ItemSpecificFormulaHeadersV3<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ItemSpecificFormulaHeadersV3` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ItemSpecificFormulaHeadersV3`.
   */
  create(
    entity: ItemSpecificFormulaHeadersV3<T>
  ): CreateRequestBuilder<ItemSpecificFormulaHeadersV3<T>, T> {
    return new CreateRequestBuilder<ItemSpecificFormulaHeadersV3<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ItemSpecificFormulaHeadersV3` entity based on its keys.
   * @param dataAreaId Key property. See {@link ItemSpecificFormulaHeadersV3.dataAreaId}.
   * @param formulaId Key property. See {@link ItemSpecificFormulaHeadersV3.formulaId}.
   * @param manufacturedItemNumber Key property. See {@link ItemSpecificFormulaHeadersV3.manufacturedItemNumber}.
   * @param productionSiteId Key property. See {@link ItemSpecificFormulaHeadersV3.productionSiteId}.
   * @param productColorId Key property. See {@link ItemSpecificFormulaHeadersV3.productColorId}.
   * @param productConfigurationId Key property. See {@link ItemSpecificFormulaHeadersV3.productConfigurationId}.
   * @param productStyleId Key property. See {@link ItemSpecificFormulaHeadersV3.productStyleId}.
   * @param productVersionId Key property. See {@link ItemSpecificFormulaHeadersV3.productVersionId}.
   * @param productSizeId Key property. See {@link ItemSpecificFormulaHeadersV3.productSizeId}.
   * @param fromQuantity Key property. See {@link ItemSpecificFormulaHeadersV3.fromQuantity}.
   * @param validFromDate Key property. See {@link ItemSpecificFormulaHeadersV3.validFromDate}.
   * @param isActive Key property. See {@link ItemSpecificFormulaHeadersV3.isActive}.
   * @returns A request builder for creating requests to retrieve one `ItemSpecificFormulaHeadersV3` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    formulaId: DeserializedType<T, 'Edm.String'>,
    manufacturedItemNumber: DeserializedType<T, 'Edm.String'>,
    productionSiteId: DeserializedType<T, 'Edm.String'>,
    productColorId: DeserializedType<T, 'Edm.String'>,
    productConfigurationId: DeserializedType<T, 'Edm.String'>,
    productStyleId: DeserializedType<T, 'Edm.String'>,
    productVersionId: DeserializedType<T, 'Edm.String'>,
    productSizeId: DeserializedType<T, 'Edm.String'>,
    fromQuantity: DeserializedType<T, 'Edm.Decimal'>,
    validFromDate: DeserializedType<T, 'Edm.DateTimeOffset'>,
    isActive: DeserializedType<T, 'Microsoft.Dynamics.DataEntities.NoYes'>
  ): GetByKeyRequestBuilder<ItemSpecificFormulaHeadersV3<T>, T> {
    return new GetByKeyRequestBuilder<ItemSpecificFormulaHeadersV3<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        FormulaId: formulaId,
        ManufacturedItemNumber: manufacturedItemNumber,
        ProductionSiteId: productionSiteId,
        ProductColorId: productColorId,
        ProductConfigurationId: productConfigurationId,
        ProductStyleId: productStyleId,
        ProductVersionId: productVersionId,
        ProductSizeId: productSizeId,
        FromQuantity: fromQuantity,
        ValidFromDate: validFromDate,
        IsActive: isActive
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ItemSpecificFormulaHeadersV3`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ItemSpecificFormulaHeadersV3`.
   */
  update(
    entity: ItemSpecificFormulaHeadersV3<T>
  ): UpdateRequestBuilder<ItemSpecificFormulaHeadersV3<T>, T> {
    return new UpdateRequestBuilder<ItemSpecificFormulaHeadersV3<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ItemSpecificFormulaHeadersV3`.
   * @param dataAreaId Key property. See {@link ItemSpecificFormulaHeadersV3.dataAreaId}.
   * @param formulaId Key property. See {@link ItemSpecificFormulaHeadersV3.formulaId}.
   * @param manufacturedItemNumber Key property. See {@link ItemSpecificFormulaHeadersV3.manufacturedItemNumber}.
   * @param productionSiteId Key property. See {@link ItemSpecificFormulaHeadersV3.productionSiteId}.
   * @param productColorId Key property. See {@link ItemSpecificFormulaHeadersV3.productColorId}.
   * @param productConfigurationId Key property. See {@link ItemSpecificFormulaHeadersV3.productConfigurationId}.
   * @param productStyleId Key property. See {@link ItemSpecificFormulaHeadersV3.productStyleId}.
   * @param productVersionId Key property. See {@link ItemSpecificFormulaHeadersV3.productVersionId}.
   * @param productSizeId Key property. See {@link ItemSpecificFormulaHeadersV3.productSizeId}.
   * @param fromQuantity Key property. See {@link ItemSpecificFormulaHeadersV3.fromQuantity}.
   * @param validFromDate Key property. See {@link ItemSpecificFormulaHeadersV3.validFromDate}.
   * @param isActive Key property. See {@link ItemSpecificFormulaHeadersV3.isActive}.
   * @returns A request builder for creating requests that delete an entity of type `ItemSpecificFormulaHeadersV3`.
   */
  delete(
    dataAreaId: string,
    formulaId: string,
    manufacturedItemNumber: string,
    productionSiteId: string,
    productColorId: string,
    productConfigurationId: string,
    productStyleId: string,
    productVersionId: string,
    productSizeId: string,
    fromQuantity: BigNumber,
    validFromDate: Moment,
    isActive: NoYes
  ): DeleteRequestBuilder<ItemSpecificFormulaHeadersV3<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ItemSpecificFormulaHeadersV3`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ItemSpecificFormulaHeadersV3` by taking the entity as a parameter.
   */
  delete(
    entity: ItemSpecificFormulaHeadersV3<T>
  ): DeleteRequestBuilder<ItemSpecificFormulaHeadersV3<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    formulaId?: string,
    manufacturedItemNumber?: string,
    productionSiteId?: string,
    productColorId?: string,
    productConfigurationId?: string,
    productStyleId?: string,
    productVersionId?: string,
    productSizeId?: string,
    fromQuantity?: BigNumber,
    validFromDate?: Moment,
    isActive?: NoYes
  ): DeleteRequestBuilder<ItemSpecificFormulaHeadersV3<T>, T> {
    return new DeleteRequestBuilder<ItemSpecificFormulaHeadersV3<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ItemSpecificFormulaHeadersV3
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            FormulaId: formulaId!,
            ManufacturedItemNumber: manufacturedItemNumber!,
            ProductionSiteId: productionSiteId!,
            ProductColorId: productColorId!,
            ProductConfigurationId: productConfigurationId!,
            ProductStyleId: productStyleId!,
            ProductVersionId: productVersionId!,
            ProductSizeId: productSizeId!,
            FromQuantity: fromQuantity!,
            ValidFromDate: validFromDate!,
            IsActive: isActive!
          }
    );
  }
}
