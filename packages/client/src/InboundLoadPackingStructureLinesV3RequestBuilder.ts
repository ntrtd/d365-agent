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
import { InboundLoadPackingStructureLinesV3 } from './InboundLoadPackingStructureLinesV3';

/**
 * Request builder class for operations supported on the {@link InboundLoadPackingStructureLinesV3} entity.
 */
export class InboundLoadPackingStructureLinesV3RequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<InboundLoadPackingStructureLinesV3<T>, T> {
  /**
   * Returns a request builder for querying all `InboundLoadPackingStructureLinesV3` entities.
   * @returns A request builder for creating requests to retrieve all `InboundLoadPackingStructureLinesV3` entities.
   */
  getAll(): GetAllRequestBuilder<InboundLoadPackingStructureLinesV3<T>, T> {
    return new GetAllRequestBuilder<InboundLoadPackingStructureLinesV3<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `InboundLoadPackingStructureLinesV3` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `InboundLoadPackingStructureLinesV3`.
   */
  create(
    entity: InboundLoadPackingStructureLinesV3<T>
  ): CreateRequestBuilder<InboundLoadPackingStructureLinesV3<T>, T> {
    return new CreateRequestBuilder<InboundLoadPackingStructureLinesV3<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `InboundLoadPackingStructureLinesV3` entity based on its keys.
   * @param dataAreaId Key property. See {@link InboundLoadPackingStructureLinesV3.dataAreaId}.
   * @param inboundShipmentId Key property. See {@link InboundLoadPackingStructureLinesV3.inboundShipmentId}.
   * @param packingStructureLicensePlateNumber Key property. See {@link InboundLoadPackingStructureLinesV3.packingStructureLicensePlateNumber}.
   * @param itemNumber Key property. See {@link InboundLoadPackingStructureLinesV3.itemNumber}.
   * @param productColorId Key property. See {@link InboundLoadPackingStructureLinesV3.productColorId}.
   * @param productSizeId Key property. See {@link InboundLoadPackingStructureLinesV3.productSizeId}.
   * @param productConfigurationId Key property. See {@link InboundLoadPackingStructureLinesV3.productConfigurationId}.
   * @param productStyleId Key property. See {@link InboundLoadPackingStructureLinesV3.productStyleId}.
   * @param productVersionId Key property. See {@link InboundLoadPackingStructureLinesV3.productVersionId}.
   * @param itemBatchNumber Key property. See {@link InboundLoadPackingStructureLinesV3.itemBatchNumber}.
   * @param itemSerialNumber Key property. See {@link InboundLoadPackingStructureLinesV3.itemSerialNumber}.
   * @param purchaseOrderNumber Key property. See {@link InboundLoadPackingStructureLinesV3.purchaseOrderNumber}.
   * @param purchaseOrderLineNumber Key property. See {@link InboundLoadPackingStructureLinesV3.purchaseOrderLineNumber}.
   * @returns A request builder for creating requests to retrieve one `InboundLoadPackingStructureLinesV3` entity based on its keys.
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
    purchaseOrderNumber: DeserializedType<T, 'Edm.String'>,
    purchaseOrderLineNumber: DeserializedType<T, 'Edm.Int64'>
  ): GetByKeyRequestBuilder<InboundLoadPackingStructureLinesV3<T>, T> {
    return new GetByKeyRequestBuilder<InboundLoadPackingStructureLinesV3<T>, T>(
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
        PurchaseOrderNumber: purchaseOrderNumber,
        PurchaseOrderLineNumber: purchaseOrderLineNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `InboundLoadPackingStructureLinesV3`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `InboundLoadPackingStructureLinesV3`.
   */
  update(
    entity: InboundLoadPackingStructureLinesV3<T>
  ): UpdateRequestBuilder<InboundLoadPackingStructureLinesV3<T>, T> {
    return new UpdateRequestBuilder<InboundLoadPackingStructureLinesV3<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `InboundLoadPackingStructureLinesV3`.
   * @param dataAreaId Key property. See {@link InboundLoadPackingStructureLinesV3.dataAreaId}.
   * @param inboundShipmentId Key property. See {@link InboundLoadPackingStructureLinesV3.inboundShipmentId}.
   * @param packingStructureLicensePlateNumber Key property. See {@link InboundLoadPackingStructureLinesV3.packingStructureLicensePlateNumber}.
   * @param itemNumber Key property. See {@link InboundLoadPackingStructureLinesV3.itemNumber}.
   * @param productColorId Key property. See {@link InboundLoadPackingStructureLinesV3.productColorId}.
   * @param productSizeId Key property. See {@link InboundLoadPackingStructureLinesV3.productSizeId}.
   * @param productConfigurationId Key property. See {@link InboundLoadPackingStructureLinesV3.productConfigurationId}.
   * @param productStyleId Key property. See {@link InboundLoadPackingStructureLinesV3.productStyleId}.
   * @param productVersionId Key property. See {@link InboundLoadPackingStructureLinesV3.productVersionId}.
   * @param itemBatchNumber Key property. See {@link InboundLoadPackingStructureLinesV3.itemBatchNumber}.
   * @param itemSerialNumber Key property. See {@link InboundLoadPackingStructureLinesV3.itemSerialNumber}.
   * @param purchaseOrderNumber Key property. See {@link InboundLoadPackingStructureLinesV3.purchaseOrderNumber}.
   * @param purchaseOrderLineNumber Key property. See {@link InboundLoadPackingStructureLinesV3.purchaseOrderLineNumber}.
   * @returns A request builder for creating requests that delete an entity of type `InboundLoadPackingStructureLinesV3`.
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
    purchaseOrderNumber: string,
    purchaseOrderLineNumber: BigNumber
  ): DeleteRequestBuilder<InboundLoadPackingStructureLinesV3<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `InboundLoadPackingStructureLinesV3`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `InboundLoadPackingStructureLinesV3` by taking the entity as a parameter.
   */
  delete(
    entity: InboundLoadPackingStructureLinesV3<T>
  ): DeleteRequestBuilder<InboundLoadPackingStructureLinesV3<T>, T>;
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
    purchaseOrderNumber?: string,
    purchaseOrderLineNumber?: BigNumber
  ): DeleteRequestBuilder<InboundLoadPackingStructureLinesV3<T>, T> {
    return new DeleteRequestBuilder<InboundLoadPackingStructureLinesV3<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof InboundLoadPackingStructureLinesV3
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
            PurchaseOrderNumber: purchaseOrderNumber!,
            PurchaseOrderLineNumber: purchaseOrderLineNumber!
          }
    );
  }
}
