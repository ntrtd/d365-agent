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
import { InboundLoadPackingStructureLinesV5 } from './InboundLoadPackingStructureLinesV5';
import { WhsModule } from './WhsModule';

/**
 * Request builder class for operations supported on the {@link InboundLoadPackingStructureLinesV5} entity.
 */
export class InboundLoadPackingStructureLinesV5RequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<InboundLoadPackingStructureLinesV5<T>, T> {
  /**
   * Returns a request builder for querying all `InboundLoadPackingStructureLinesV5` entities.
   * @returns A request builder for creating requests to retrieve all `InboundLoadPackingStructureLinesV5` entities.
   */
  getAll(): GetAllRequestBuilder<InboundLoadPackingStructureLinesV5<T>, T> {
    return new GetAllRequestBuilder<InboundLoadPackingStructureLinesV5<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `InboundLoadPackingStructureLinesV5` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `InboundLoadPackingStructureLinesV5`.
   */
  create(
    entity: InboundLoadPackingStructureLinesV5<T>
  ): CreateRequestBuilder<InboundLoadPackingStructureLinesV5<T>, T> {
    return new CreateRequestBuilder<InboundLoadPackingStructureLinesV5<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `InboundLoadPackingStructureLinesV5` entity based on its keys.
   * @param dataAreaId Key property. See {@link InboundLoadPackingStructureLinesV5.dataAreaId}.
   * @param inboundShipmentId Key property. See {@link InboundLoadPackingStructureLinesV5.inboundShipmentId}.
   * @param packingStructureLicensePlateNumber Key property. See {@link InboundLoadPackingStructureLinesV5.packingStructureLicensePlateNumber}.
   * @param itemNumber Key property. See {@link InboundLoadPackingStructureLinesV5.itemNumber}.
   * @param productColorId Key property. See {@link InboundLoadPackingStructureLinesV5.productColorId}.
   * @param productSizeId Key property. See {@link InboundLoadPackingStructureLinesV5.productSizeId}.
   * @param productConfigurationId Key property. See {@link InboundLoadPackingStructureLinesV5.productConfigurationId}.
   * @param productStyleId Key property. See {@link InboundLoadPackingStructureLinesV5.productStyleId}.
   * @param productVersionId Key property. See {@link InboundLoadPackingStructureLinesV5.productVersionId}.
   * @param itemBatchNumber Key property. See {@link InboundLoadPackingStructureLinesV5.itemBatchNumber}.
   * @param itemSerialNumber Key property. See {@link InboundLoadPackingStructureLinesV5.itemSerialNumber}.
   * @param module Key property. See {@link InboundLoadPackingStructureLinesV5.module}.
   * @param orderNumber Key property. See {@link InboundLoadPackingStructureLinesV5.orderNumber}.
   * @param orderLineNumber Key property. See {@link InboundLoadPackingStructureLinesV5.orderLineNumber}.
   * @returns A request builder for creating requests to retrieve one `InboundLoadPackingStructureLinesV5` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    inboundShipmentId: DeserializedType<T, 'Edm.String'>,
    packingStructureLicensePlateNumber: DeserializedType<T, 'Edm.String'>,
    itemNumber: DeserializedType<T, 'Edm.String'>,
    productColorId: DeserializedType<T, 'Edm.String'>,
    productSizeId: DeserializedType<T, 'Edm.String'>,
    productConfigurationId: DeserializedType<T, 'Edm.String'>,
    productStyleId: DeserializedType<T, 'Edm.String'>,
    productVersionId: DeserializedType<T, 'Edm.String'>,
    itemBatchNumber: DeserializedType<T, 'Edm.String'>,
    itemSerialNumber: DeserializedType<T, 'Edm.String'>,
    module: DeserializedType<T, 'Microsoft.Dynamics.DataEntities.WHSModule'>,
    orderNumber: DeserializedType<T, 'Edm.String'>,
    orderLineNumber: DeserializedType<T, 'Edm.Int64'>
  ): GetByKeyRequestBuilder<InboundLoadPackingStructureLinesV5<T>, T> {
    return new GetByKeyRequestBuilder<InboundLoadPackingStructureLinesV5<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        InboundShipmentId: inboundShipmentId,
        PackingStructureLicensePlateNumber: packingStructureLicensePlateNumber,
        ItemNumber: itemNumber,
        ProductColorId: productColorId,
        ProductSizeId: productSizeId,
        ProductConfigurationId: productConfigurationId,
        ProductStyleId: productStyleId,
        ProductVersionId: productVersionId,
        ItemBatchNumber: itemBatchNumber,
        ItemSerialNumber: itemSerialNumber,
        Module: module,
        OrderNumber: orderNumber,
        OrderLineNumber: orderLineNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `InboundLoadPackingStructureLinesV5`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `InboundLoadPackingStructureLinesV5`.
   */
  update(
    entity: InboundLoadPackingStructureLinesV5<T>
  ): UpdateRequestBuilder<InboundLoadPackingStructureLinesV5<T>, T> {
    return new UpdateRequestBuilder<InboundLoadPackingStructureLinesV5<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `InboundLoadPackingStructureLinesV5`.
   * @param dataAreaId Key property. See {@link InboundLoadPackingStructureLinesV5.dataAreaId}.
   * @param inboundShipmentId Key property. See {@link InboundLoadPackingStructureLinesV5.inboundShipmentId}.
   * @param packingStructureLicensePlateNumber Key property. See {@link InboundLoadPackingStructureLinesV5.packingStructureLicensePlateNumber}.
   * @param itemNumber Key property. See {@link InboundLoadPackingStructureLinesV5.itemNumber}.
   * @param productColorId Key property. See {@link InboundLoadPackingStructureLinesV5.productColorId}.
   * @param productSizeId Key property. See {@link InboundLoadPackingStructureLinesV5.productSizeId}.
   * @param productConfigurationId Key property. See {@link InboundLoadPackingStructureLinesV5.productConfigurationId}.
   * @param productStyleId Key property. See {@link InboundLoadPackingStructureLinesV5.productStyleId}.
   * @param productVersionId Key property. See {@link InboundLoadPackingStructureLinesV5.productVersionId}.
   * @param itemBatchNumber Key property. See {@link InboundLoadPackingStructureLinesV5.itemBatchNumber}.
   * @param itemSerialNumber Key property. See {@link InboundLoadPackingStructureLinesV5.itemSerialNumber}.
   * @param module Key property. See {@link InboundLoadPackingStructureLinesV5.module}.
   * @param orderNumber Key property. See {@link InboundLoadPackingStructureLinesV5.orderNumber}.
   * @param orderLineNumber Key property. See {@link InboundLoadPackingStructureLinesV5.orderLineNumber}.
   * @returns A request builder for creating requests that delete an entity of type `InboundLoadPackingStructureLinesV5`.
   */
  delete(
    dataAreaId: string,
    inboundShipmentId: string,
    packingStructureLicensePlateNumber: string,
    itemNumber: string,
    productColorId: string,
    productSizeId: string,
    productConfigurationId: string,
    productStyleId: string,
    productVersionId: string,
    itemBatchNumber: string,
    itemSerialNumber: string,
    module: WhsModule,
    orderNumber: string,
    orderLineNumber: BigNumber
  ): DeleteRequestBuilder<InboundLoadPackingStructureLinesV5<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `InboundLoadPackingStructureLinesV5`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `InboundLoadPackingStructureLinesV5` by taking the entity as a parameter.
   */
  delete(
    entity: InboundLoadPackingStructureLinesV5<T>
  ): DeleteRequestBuilder<InboundLoadPackingStructureLinesV5<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    inboundShipmentId?: string,
    packingStructureLicensePlateNumber?: string,
    itemNumber?: string,
    productColorId?: string,
    productSizeId?: string,
    productConfigurationId?: string,
    productStyleId?: string,
    productVersionId?: string,
    itemBatchNumber?: string,
    itemSerialNumber?: string,
    module?: WhsModule,
    orderNumber?: string,
    orderLineNumber?: BigNumber
  ): DeleteRequestBuilder<InboundLoadPackingStructureLinesV5<T>, T> {
    return new DeleteRequestBuilder<InboundLoadPackingStructureLinesV5<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof InboundLoadPackingStructureLinesV5
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            InboundShipmentId: inboundShipmentId!,
            PackingStructureLicensePlateNumber:
              packingStructureLicensePlateNumber!,
            ItemNumber: itemNumber!,
            ProductColorId: productColorId!,
            ProductSizeId: productSizeId!,
            ProductConfigurationId: productConfigurationId!,
            ProductStyleId: productStyleId!,
            ProductVersionId: productVersionId!,
            ItemBatchNumber: itemBatchNumber!,
            ItemSerialNumber: itemSerialNumber!,
            Module: module!,
            OrderNumber: orderNumber!,
            OrderLineNumber: orderLineNumber!
          }
    );
  }
}
