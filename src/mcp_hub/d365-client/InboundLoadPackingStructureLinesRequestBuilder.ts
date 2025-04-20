/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
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
import { InboundLoadPackingStructureLines } from './InboundLoadPackingStructureLines';

/**
 * Request builder class for operations supported on the {@link InboundLoadPackingStructureLines} entity.
 */
export class InboundLoadPackingStructureLinesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<InboundLoadPackingStructureLines<T>, T> {
  /**
   * Returns a request builder for querying all `InboundLoadPackingStructureLines` entities.
   * @returns A request builder for creating requests to retrieve all `InboundLoadPackingStructureLines` entities.
   */
  getAll(): GetAllRequestBuilder<InboundLoadPackingStructureLines<T>, T> {
    return new GetAllRequestBuilder<InboundLoadPackingStructureLines<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `InboundLoadPackingStructureLines` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `InboundLoadPackingStructureLines`.
   */
  create(
    entity: InboundLoadPackingStructureLines<T>
  ): CreateRequestBuilder<InboundLoadPackingStructureLines<T>, T> {
    return new CreateRequestBuilder<InboundLoadPackingStructureLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `InboundLoadPackingStructureLines` entity based on its keys.
   * @param dataAreaId Key property. See {@link InboundLoadPackingStructureLines.dataAreaId}.
   * @param inboundShipmentId Key property. See {@link InboundLoadPackingStructureLines.inboundShipmentId}.
   * @param packingStructureLicensePlateNumber Key property. See {@link InboundLoadPackingStructureLines.packingStructureLicensePlateNumber}.
   * @param itemNumber Key property. See {@link InboundLoadPackingStructureLines.itemNumber}.
   * @param productColorId Key property. See {@link InboundLoadPackingStructureLines.productColorId}.
   * @param productSizeId Key property. See {@link InboundLoadPackingStructureLines.productSizeId}.
   * @param productConfigurationId Key property. See {@link InboundLoadPackingStructureLines.productConfigurationId}.
   * @param productStyleId Key property. See {@link InboundLoadPackingStructureLines.productStyleId}.
   * @param itemBatchNumber Key property. See {@link InboundLoadPackingStructureLines.itemBatchNumber}.
   * @param itemSerialNumber Key property. See {@link InboundLoadPackingStructureLines.itemSerialNumber}.
   * @returns A request builder for creating requests to retrieve one `InboundLoadPackingStructureLines` entity based on its keys.
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
    itemSerialNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<InboundLoadPackingStructureLines<T>, T> {
    return new GetByKeyRequestBuilder<InboundLoadPackingStructureLines<T>, T>(
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
        ItemSerialNumber: itemSerialNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `InboundLoadPackingStructureLines`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `InboundLoadPackingStructureLines`.
   */
  update(
    entity: InboundLoadPackingStructureLines<T>
  ): UpdateRequestBuilder<InboundLoadPackingStructureLines<T>, T> {
    return new UpdateRequestBuilder<InboundLoadPackingStructureLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `InboundLoadPackingStructureLines`.
   * @param dataAreaId Key property. See {@link InboundLoadPackingStructureLines.dataAreaId}.
   * @param inboundShipmentId Key property. See {@link InboundLoadPackingStructureLines.inboundShipmentId}.
   * @param packingStructureLicensePlateNumber Key property. See {@link InboundLoadPackingStructureLines.packingStructureLicensePlateNumber}.
   * @param itemNumber Key property. See {@link InboundLoadPackingStructureLines.itemNumber}.
   * @param productColorId Key property. See {@link InboundLoadPackingStructureLines.productColorId}.
   * @param productSizeId Key property. See {@link InboundLoadPackingStructureLines.productSizeId}.
   * @param productConfigurationId Key property. See {@link InboundLoadPackingStructureLines.productConfigurationId}.
   * @param productStyleId Key property. See {@link InboundLoadPackingStructureLines.productStyleId}.
   * @param itemBatchNumber Key property. See {@link InboundLoadPackingStructureLines.itemBatchNumber}.
   * @param itemSerialNumber Key property. See {@link InboundLoadPackingStructureLines.itemSerialNumber}.
   * @returns A request builder for creating requests that delete an entity of type `InboundLoadPackingStructureLines`.
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
    itemSerialNumber: string
  ): DeleteRequestBuilder<InboundLoadPackingStructureLines<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `InboundLoadPackingStructureLines`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `InboundLoadPackingStructureLines` by taking the entity as a parameter.
   */
  delete(
    entity: InboundLoadPackingStructureLines<T>
  ): DeleteRequestBuilder<InboundLoadPackingStructureLines<T>, T>;
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
    itemSerialNumber?: string
  ): DeleteRequestBuilder<InboundLoadPackingStructureLines<T>, T> {
    return new DeleteRequestBuilder<InboundLoadPackingStructureLines<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof InboundLoadPackingStructureLines
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
            ItemSerialNumber: itemSerialNumber!
          }
    );
  }
}
