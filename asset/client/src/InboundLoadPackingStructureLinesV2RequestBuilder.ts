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
import { InboundLoadPackingStructureLinesV2 } from './InboundLoadPackingStructureLinesV2';

/**
 * Request builder class for operations supported on the {@link InboundLoadPackingStructureLinesV2} entity.
 */
export class InboundLoadPackingStructureLinesV2RequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<InboundLoadPackingStructureLinesV2<T>, T> {
  /**
   * Returns a request builder for querying all `InboundLoadPackingStructureLinesV2` entities.
   * @returns A request builder for creating requests to retrieve all `InboundLoadPackingStructureLinesV2` entities.
   */
  getAll(): GetAllRequestBuilder<InboundLoadPackingStructureLinesV2<T>, T> {
    return new GetAllRequestBuilder<InboundLoadPackingStructureLinesV2<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `InboundLoadPackingStructureLinesV2` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `InboundLoadPackingStructureLinesV2`.
   */
  create(
    entity: InboundLoadPackingStructureLinesV2<T>
  ): CreateRequestBuilder<InboundLoadPackingStructureLinesV2<T>, T> {
    return new CreateRequestBuilder<InboundLoadPackingStructureLinesV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `InboundLoadPackingStructureLinesV2` entity based on its keys.
   * @param dataAreaId Key property. See {@link InboundLoadPackingStructureLinesV2.dataAreaId}.
   * @param inboundShipmentId Key property. See {@link InboundLoadPackingStructureLinesV2.inboundShipmentId}.
   * @param packingStructureLicensePlateNumber Key property. See {@link InboundLoadPackingStructureLinesV2.packingStructureLicensePlateNumber}.
   * @param itemNumber Key property. See {@link InboundLoadPackingStructureLinesV2.itemNumber}.
   * @param productColorId Key property. See {@link InboundLoadPackingStructureLinesV2.productColorId}.
   * @param productSizeId Key property. See {@link InboundLoadPackingStructureLinesV2.productSizeId}.
   * @param productConfigurationId Key property. See {@link InboundLoadPackingStructureLinesV2.productConfigurationId}.
   * @param productStyleId Key property. See {@link InboundLoadPackingStructureLinesV2.productStyleId}.
   * @param itemBatchNumber Key property. See {@link InboundLoadPackingStructureLinesV2.itemBatchNumber}.
   * @param itemSerialNumber Key property. See {@link InboundLoadPackingStructureLinesV2.itemSerialNumber}.
   * @param purchaseOrderNumber Key property. See {@link InboundLoadPackingStructureLinesV2.purchaseOrderNumber}.
   * @param purchaseOrderLineNumber Key property. See {@link InboundLoadPackingStructureLinesV2.purchaseOrderLineNumber}.
   * @returns A request builder for creating requests to retrieve one `InboundLoadPackingStructureLinesV2` entity based on its keys.
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
    itemBatchNumber: DeserializedType<T, 'Edm.String'>,
    itemSerialNumber: DeserializedType<T, 'Edm.String'>,
    purchaseOrderNumber: DeserializedType<T, 'Edm.String'>,
    purchaseOrderLineNumber: DeserializedType<T, 'Edm.Int64'>
  ): GetByKeyRequestBuilder<InboundLoadPackingStructureLinesV2<T>, T> {
    return new GetByKeyRequestBuilder<InboundLoadPackingStructureLinesV2<T>, T>(
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
        ItemBatchNumber: itemBatchNumber,
        ItemSerialNumber: itemSerialNumber,
        PurchaseOrderNumber: purchaseOrderNumber,
        PurchaseOrderLineNumber: purchaseOrderLineNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `InboundLoadPackingStructureLinesV2`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `InboundLoadPackingStructureLinesV2`.
   */
  update(
    entity: InboundLoadPackingStructureLinesV2<T>
  ): UpdateRequestBuilder<InboundLoadPackingStructureLinesV2<T>, T> {
    return new UpdateRequestBuilder<InboundLoadPackingStructureLinesV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `InboundLoadPackingStructureLinesV2`.
   * @param dataAreaId Key property. See {@link InboundLoadPackingStructureLinesV2.dataAreaId}.
   * @param inboundShipmentId Key property. See {@link InboundLoadPackingStructureLinesV2.inboundShipmentId}.
   * @param packingStructureLicensePlateNumber Key property. See {@link InboundLoadPackingStructureLinesV2.packingStructureLicensePlateNumber}.
   * @param itemNumber Key property. See {@link InboundLoadPackingStructureLinesV2.itemNumber}.
   * @param productColorId Key property. See {@link InboundLoadPackingStructureLinesV2.productColorId}.
   * @param productSizeId Key property. See {@link InboundLoadPackingStructureLinesV2.productSizeId}.
   * @param productConfigurationId Key property. See {@link InboundLoadPackingStructureLinesV2.productConfigurationId}.
   * @param productStyleId Key property. See {@link InboundLoadPackingStructureLinesV2.productStyleId}.
   * @param itemBatchNumber Key property. See {@link InboundLoadPackingStructureLinesV2.itemBatchNumber}.
   * @param itemSerialNumber Key property. See {@link InboundLoadPackingStructureLinesV2.itemSerialNumber}.
   * @param purchaseOrderNumber Key property. See {@link InboundLoadPackingStructureLinesV2.purchaseOrderNumber}.
   * @param purchaseOrderLineNumber Key property. See {@link InboundLoadPackingStructureLinesV2.purchaseOrderLineNumber}.
   * @returns A request builder for creating requests that delete an entity of type `InboundLoadPackingStructureLinesV2`.
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
    itemBatchNumber: string,
    itemSerialNumber: string,
    purchaseOrderNumber: string,
    purchaseOrderLineNumber: BigNumber
  ): DeleteRequestBuilder<InboundLoadPackingStructureLinesV2<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `InboundLoadPackingStructureLinesV2`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `InboundLoadPackingStructureLinesV2` by taking the entity as a parameter.
   */
  delete(
    entity: InboundLoadPackingStructureLinesV2<T>
  ): DeleteRequestBuilder<InboundLoadPackingStructureLinesV2<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    inboundShipmentId?: string,
    packingStructureLicensePlateNumber?: string,
    itemNumber?: string,
    productColorId?: string,
    productSizeId?: string,
    productConfigurationId?: string,
    productStyleId?: string,
    itemBatchNumber?: string,
    itemSerialNumber?: string,
    purchaseOrderNumber?: string,
    purchaseOrderLineNumber?: BigNumber
  ): DeleteRequestBuilder<InboundLoadPackingStructureLinesV2<T>, T> {
    return new DeleteRequestBuilder<InboundLoadPackingStructureLinesV2<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof InboundLoadPackingStructureLinesV2
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
            ItemBatchNumber: itemBatchNumber!,
            ItemSerialNumber: itemSerialNumber!,
            PurchaseOrderNumber: purchaseOrderNumber!,
            PurchaseOrderLineNumber: purchaseOrderLineNumber!
          }
    );
  }
}
