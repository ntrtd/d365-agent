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
import { InboundLoadPackingStructureCaseLinesV2 } from './InboundLoadPackingStructureCaseLinesV2';

/**
 * Request builder class for operations supported on the {@link InboundLoadPackingStructureCaseLinesV2} entity.
 */
export class InboundLoadPackingStructureCaseLinesV2RequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<InboundLoadPackingStructureCaseLinesV2<T>, T> {
  /**
   * Returns a request builder for querying all `InboundLoadPackingStructureCaseLinesV2` entities.
   * @returns A request builder for creating requests to retrieve all `InboundLoadPackingStructureCaseLinesV2` entities.
   */
  getAll(): GetAllRequestBuilder<InboundLoadPackingStructureCaseLinesV2<T>, T> {
    return new GetAllRequestBuilder<
      InboundLoadPackingStructureCaseLinesV2<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `InboundLoadPackingStructureCaseLinesV2` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `InboundLoadPackingStructureCaseLinesV2`.
   */
  create(
    entity: InboundLoadPackingStructureCaseLinesV2<T>
  ): CreateRequestBuilder<InboundLoadPackingStructureCaseLinesV2<T>, T> {
    return new CreateRequestBuilder<
      InboundLoadPackingStructureCaseLinesV2<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `InboundLoadPackingStructureCaseLinesV2` entity based on its keys.
   * @param dataAreaId Key property. See {@link InboundLoadPackingStructureCaseLinesV2.dataAreaId}.
   * @param inboundShipmentId Key property. See {@link InboundLoadPackingStructureCaseLinesV2.inboundShipmentId}.
   * @param packingStructureLicensePlateNumber Key property. See {@link InboundLoadPackingStructureCaseLinesV2.packingStructureLicensePlateNumber}.
   * @param itemNumber Key property. See {@link InboundLoadPackingStructureCaseLinesV2.itemNumber}.
   * @param productColorId Key property. See {@link InboundLoadPackingStructureCaseLinesV2.productColorId}.
   * @param productSizeId Key property. See {@link InboundLoadPackingStructureCaseLinesV2.productSizeId}.
   * @param productConfigurationId Key property. See {@link InboundLoadPackingStructureCaseLinesV2.productConfigurationId}.
   * @param productStyleId Key property. See {@link InboundLoadPackingStructureCaseLinesV2.productStyleId}.
   * @param itemBatchNumber Key property. See {@link InboundLoadPackingStructureCaseLinesV2.itemBatchNumber}.
   * @param itemSerialNumber Key property. See {@link InboundLoadPackingStructureCaseLinesV2.itemSerialNumber}.
   * @param purchaseOrderNumber Key property. See {@link InboundLoadPackingStructureCaseLinesV2.purchaseOrderNumber}.
   * @param purchaseOrderLineNumber Key property. See {@link InboundLoadPackingStructureCaseLinesV2.purchaseOrderLineNumber}.
   * @returns A request builder for creating requests to retrieve one `InboundLoadPackingStructureCaseLinesV2` entity based on its keys.
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
  ): GetByKeyRequestBuilder<InboundLoadPackingStructureCaseLinesV2<T>, T> {
    return new GetByKeyRequestBuilder<
      InboundLoadPackingStructureCaseLinesV2<T>,
      T
    >(this.entityApi, {
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
    });
  }

  /**
   * Returns a request builder for updating an entity of type `InboundLoadPackingStructureCaseLinesV2`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `InboundLoadPackingStructureCaseLinesV2`.
   */
  update(
    entity: InboundLoadPackingStructureCaseLinesV2<T>
  ): UpdateRequestBuilder<InboundLoadPackingStructureCaseLinesV2<T>, T> {
    return new UpdateRequestBuilder<
      InboundLoadPackingStructureCaseLinesV2<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `InboundLoadPackingStructureCaseLinesV2`.
   * @param dataAreaId Key property. See {@link InboundLoadPackingStructureCaseLinesV2.dataAreaId}.
   * @param inboundShipmentId Key property. See {@link InboundLoadPackingStructureCaseLinesV2.inboundShipmentId}.
   * @param packingStructureLicensePlateNumber Key property. See {@link InboundLoadPackingStructureCaseLinesV2.packingStructureLicensePlateNumber}.
   * @param itemNumber Key property. See {@link InboundLoadPackingStructureCaseLinesV2.itemNumber}.
   * @param productColorId Key property. See {@link InboundLoadPackingStructureCaseLinesV2.productColorId}.
   * @param productSizeId Key property. See {@link InboundLoadPackingStructureCaseLinesV2.productSizeId}.
   * @param productConfigurationId Key property. See {@link InboundLoadPackingStructureCaseLinesV2.productConfigurationId}.
   * @param productStyleId Key property. See {@link InboundLoadPackingStructureCaseLinesV2.productStyleId}.
   * @param itemBatchNumber Key property. See {@link InboundLoadPackingStructureCaseLinesV2.itemBatchNumber}.
   * @param itemSerialNumber Key property. See {@link InboundLoadPackingStructureCaseLinesV2.itemSerialNumber}.
   * @param purchaseOrderNumber Key property. See {@link InboundLoadPackingStructureCaseLinesV2.purchaseOrderNumber}.
   * @param purchaseOrderLineNumber Key property. See {@link InboundLoadPackingStructureCaseLinesV2.purchaseOrderLineNumber}.
   * @returns A request builder for creating requests that delete an entity of type `InboundLoadPackingStructureCaseLinesV2`.
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
  ): DeleteRequestBuilder<InboundLoadPackingStructureCaseLinesV2<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `InboundLoadPackingStructureCaseLinesV2`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `InboundLoadPackingStructureCaseLinesV2` by taking the entity as a parameter.
   */
  delete(
    entity: InboundLoadPackingStructureCaseLinesV2<T>
  ): DeleteRequestBuilder<InboundLoadPackingStructureCaseLinesV2<T>, T>;
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
  ): DeleteRequestBuilder<InboundLoadPackingStructureCaseLinesV2<T>, T> {
    return new DeleteRequestBuilder<
      InboundLoadPackingStructureCaseLinesV2<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof InboundLoadPackingStructureCaseLinesV2
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
