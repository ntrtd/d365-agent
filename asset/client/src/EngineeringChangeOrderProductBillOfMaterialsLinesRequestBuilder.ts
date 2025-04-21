/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
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
import { EngineeringChangeOrderProductBillOfMaterialsLines } from './EngineeringChangeOrderProductBillOfMaterialsLines';

/**
 * Request builder class for operations supported on the {@link EngineeringChangeOrderProductBillOfMaterialsLines} entity.
 */
export class EngineeringChangeOrderProductBillOfMaterialsLinesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<
  EngineeringChangeOrderProductBillOfMaterialsLines<T>,
  T
> {
  /**
   * Returns a request builder for querying all `EngineeringChangeOrderProductBillOfMaterialsLines` entities.
   * @returns A request builder for creating requests to retrieve all `EngineeringChangeOrderProductBillOfMaterialsLines` entities.
   */
  getAll(): GetAllRequestBuilder<
    EngineeringChangeOrderProductBillOfMaterialsLines<T>,
    T
  > {
    return new GetAllRequestBuilder<
      EngineeringChangeOrderProductBillOfMaterialsLines<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `EngineeringChangeOrderProductBillOfMaterialsLines` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `EngineeringChangeOrderProductBillOfMaterialsLines`.
   */
  create(
    entity: EngineeringChangeOrderProductBillOfMaterialsLines<T>
  ): CreateRequestBuilder<
    EngineeringChangeOrderProductBillOfMaterialsLines<T>,
    T
  > {
    return new CreateRequestBuilder<
      EngineeringChangeOrderProductBillOfMaterialsLines<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `EngineeringChangeOrderProductBillOfMaterialsLines` entity based on its keys.
   * @param dataAreaId Key property. See {@link EngineeringChangeOrderProductBillOfMaterialsLines.dataAreaId}.
   * @param engineeringChangeOrderNumber Key property. See {@link EngineeringChangeOrderProductBillOfMaterialsLines.engineeringChangeOrderNumber}.
   * @param engineeringChangeOrderProductLineNumber Key property. See {@link EngineeringChangeOrderProductBillOfMaterialsLines.engineeringChangeOrderProductLineNumber}.
   * @param itemNumber Key property. See {@link EngineeringChangeOrderProductBillOfMaterialsLines.itemNumber}.
   * @param productionSiteId Key property. See {@link EngineeringChangeOrderProductBillOfMaterialsLines.productionSiteId}.
   * @param consumptionSiteId Key property. See {@link EngineeringChangeOrderProductBillOfMaterialsLines.consumptionSiteId}.
   * @param consumptionWarehouseId Key property. See {@link EngineeringChangeOrderProductBillOfMaterialsLines.consumptionWarehouseId}.
   * @param productStyleId Key property. See {@link EngineeringChangeOrderProductBillOfMaterialsLines.productStyleId}.
   * @param productSizeId Key property. See {@link EngineeringChangeOrderProductBillOfMaterialsLines.productSizeId}.
   * @param productColorId Key property. See {@link EngineeringChangeOrderProductBillOfMaterialsLines.productColorId}.
   * @param productConfigurationId Key property. See {@link EngineeringChangeOrderProductBillOfMaterialsLines.productConfigurationId}.
   * @returns A request builder for creating requests to retrieve one `EngineeringChangeOrderProductBillOfMaterialsLines` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    engineeringChangeOrderNumber: DeserializedType<T, 'Edm.String'>,
    engineeringChangeOrderProductLineNumber: DeserializedType<T, 'Edm.Decimal'>,
    itemNumber: DeserializedType<T, 'Edm.String'>,
    productionSiteId: DeserializedType<T, 'Edm.String'>,
    consumptionSiteId: DeserializedType<T, 'Edm.String'>,
    consumptionWarehouseId: DeserializedType<T, 'Edm.String'>,
    productStyleId: DeserializedType<T, 'Edm.String'>,
    productSizeId: DeserializedType<T, 'Edm.String'>,
    productColorId: DeserializedType<T, 'Edm.String'>,
    productConfigurationId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<
    EngineeringChangeOrderProductBillOfMaterialsLines<T>,
    T
  > {
    return new GetByKeyRequestBuilder<
      EngineeringChangeOrderProductBillOfMaterialsLines<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      EngineeringChangeOrderNumber: engineeringChangeOrderNumber,
      EngineeringChangeOrderProductLineNumber:
        engineeringChangeOrderProductLineNumber,
      ItemNumber: itemNumber,
      ProductionSiteId: productionSiteId,
      ConsumptionSiteId: consumptionSiteId,
      ConsumptionWarehouseId: consumptionWarehouseId,
      ProductStyleId: productStyleId,
      ProductSizeId: productSizeId,
      ProductColorId: productColorId,
      ProductConfigurationId: productConfigurationId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `EngineeringChangeOrderProductBillOfMaterialsLines`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `EngineeringChangeOrderProductBillOfMaterialsLines`.
   */
  update(
    entity: EngineeringChangeOrderProductBillOfMaterialsLines<T>
  ): UpdateRequestBuilder<
    EngineeringChangeOrderProductBillOfMaterialsLines<T>,
    T
  > {
    return new UpdateRequestBuilder<
      EngineeringChangeOrderProductBillOfMaterialsLines<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `EngineeringChangeOrderProductBillOfMaterialsLines`.
   * @param dataAreaId Key property. See {@link EngineeringChangeOrderProductBillOfMaterialsLines.dataAreaId}.
   * @param engineeringChangeOrderNumber Key property. See {@link EngineeringChangeOrderProductBillOfMaterialsLines.engineeringChangeOrderNumber}.
   * @param engineeringChangeOrderProductLineNumber Key property. See {@link EngineeringChangeOrderProductBillOfMaterialsLines.engineeringChangeOrderProductLineNumber}.
   * @param itemNumber Key property. See {@link EngineeringChangeOrderProductBillOfMaterialsLines.itemNumber}.
   * @param productionSiteId Key property. See {@link EngineeringChangeOrderProductBillOfMaterialsLines.productionSiteId}.
   * @param consumptionSiteId Key property. See {@link EngineeringChangeOrderProductBillOfMaterialsLines.consumptionSiteId}.
   * @param consumptionWarehouseId Key property. See {@link EngineeringChangeOrderProductBillOfMaterialsLines.consumptionWarehouseId}.
   * @param productStyleId Key property. See {@link EngineeringChangeOrderProductBillOfMaterialsLines.productStyleId}.
   * @param productSizeId Key property. See {@link EngineeringChangeOrderProductBillOfMaterialsLines.productSizeId}.
   * @param productColorId Key property. See {@link EngineeringChangeOrderProductBillOfMaterialsLines.productColorId}.
   * @param productConfigurationId Key property. See {@link EngineeringChangeOrderProductBillOfMaterialsLines.productConfigurationId}.
   * @returns A request builder for creating requests that delete an entity of type `EngineeringChangeOrderProductBillOfMaterialsLines`.
   */
  delete(
    dataAreaId: string,
    engineeringChangeOrderNumber: string,
    engineeringChangeOrderProductLineNumber: BigNumber,
    itemNumber: string,
    productionSiteId: string,
    consumptionSiteId: string,
    consumptionWarehouseId: string,
    productStyleId: string,
    productSizeId: string,
    productColorId: string,
    productConfigurationId: string
  ): DeleteRequestBuilder<
    EngineeringChangeOrderProductBillOfMaterialsLines<T>,
    T
  >;
  /**
   * Returns a request builder for deleting an entity of type `EngineeringChangeOrderProductBillOfMaterialsLines`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `EngineeringChangeOrderProductBillOfMaterialsLines` by taking the entity as a parameter.
   */
  delete(
    entity: EngineeringChangeOrderProductBillOfMaterialsLines<T>
  ): DeleteRequestBuilder<
    EngineeringChangeOrderProductBillOfMaterialsLines<T>,
    T
  >;
  delete(
    dataAreaIdOrEntity: any,
    engineeringChangeOrderNumber?: string,
    engineeringChangeOrderProductLineNumber?: BigNumber,
    itemNumber?: string,
    productionSiteId?: string,
    consumptionSiteId?: string,
    consumptionWarehouseId?: string,
    productStyleId?: string,
    productSizeId?: string,
    productColorId?: string,
    productConfigurationId?: string
  ): DeleteRequestBuilder<
    EngineeringChangeOrderProductBillOfMaterialsLines<T>,
    T
  > {
    return new DeleteRequestBuilder<
      EngineeringChangeOrderProductBillOfMaterialsLines<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof
      EngineeringChangeOrderProductBillOfMaterialsLines
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            EngineeringChangeOrderNumber: engineeringChangeOrderNumber!,
            EngineeringChangeOrderProductLineNumber:
              engineeringChangeOrderProductLineNumber!,
            ItemNumber: itemNumber!,
            ProductionSiteId: productionSiteId!,
            ConsumptionSiteId: consumptionSiteId!,
            ConsumptionWarehouseId: consumptionWarehouseId!,
            ProductStyleId: productStyleId!,
            ProductSizeId: productSizeId!,
            ProductColorId: productColorId!,
            ProductConfigurationId: productConfigurationId!
          }
    );
  }
}
