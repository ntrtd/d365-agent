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
import { InboundLoadPackingStructureCaseLines } from './InboundLoadPackingStructureCaseLines';

/**
 * Request builder class for operations supported on the {@link InboundLoadPackingStructureCaseLines} entity.
 */
export class InboundLoadPackingStructureCaseLinesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<InboundLoadPackingStructureCaseLines<T>, T> {
  /**
   * Returns a request builder for querying all `InboundLoadPackingStructureCaseLines` entities.
   * @returns A request builder for creating requests to retrieve all `InboundLoadPackingStructureCaseLines` entities.
   */
  getAll(): GetAllRequestBuilder<InboundLoadPackingStructureCaseLines<T>, T> {
    return new GetAllRequestBuilder<InboundLoadPackingStructureCaseLines<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `InboundLoadPackingStructureCaseLines` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `InboundLoadPackingStructureCaseLines`.
   */
  create(
    entity: InboundLoadPackingStructureCaseLines<T>
  ): CreateRequestBuilder<InboundLoadPackingStructureCaseLines<T>, T> {
    return new CreateRequestBuilder<InboundLoadPackingStructureCaseLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `InboundLoadPackingStructureCaseLines` entity based on its keys.
   * @param dataAreaId Key property. See {@link InboundLoadPackingStructureCaseLines.dataAreaId}.
   * @param inboundShipmentId Key property. See {@link InboundLoadPackingStructureCaseLines.inboundShipmentId}.
   * @param packingStructureLicensePlateNumber Key property. See {@link InboundLoadPackingStructureCaseLines.packingStructureLicensePlateNumber}.
   * @param itemNumber Key property. See {@link InboundLoadPackingStructureCaseLines.itemNumber}.
   * @param productColorId Key property. See {@link InboundLoadPackingStructureCaseLines.productColorId}.
   * @param productSizeId Key property. See {@link InboundLoadPackingStructureCaseLines.productSizeId}.
   * @param productConfigurationId Key property. See {@link InboundLoadPackingStructureCaseLines.productConfigurationId}.
   * @param productStyleId Key property. See {@link InboundLoadPackingStructureCaseLines.productStyleId}.
   * @param itemBatchNumber Key property. See {@link InboundLoadPackingStructureCaseLines.itemBatchNumber}.
   * @param itemSerialNumber Key property. See {@link InboundLoadPackingStructureCaseLines.itemSerialNumber}.
   * @returns A request builder for creating requests to retrieve one `InboundLoadPackingStructureCaseLines` entity based on its keys.
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
  ): GetByKeyRequestBuilder<InboundLoadPackingStructureCaseLines<T>, T> {
    return new GetByKeyRequestBuilder<
      InboundLoadPackingStructureCaseLines<T>,
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
      ItemSerialNumber: itemSerialNumber
    });
  }

  /**
   * Returns a request builder for updating an entity of type `InboundLoadPackingStructureCaseLines`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `InboundLoadPackingStructureCaseLines`.
   */
  update(
    entity: InboundLoadPackingStructureCaseLines<T>
  ): UpdateRequestBuilder<InboundLoadPackingStructureCaseLines<T>, T> {
    return new UpdateRequestBuilder<InboundLoadPackingStructureCaseLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `InboundLoadPackingStructureCaseLines`.
   * @param dataAreaId Key property. See {@link InboundLoadPackingStructureCaseLines.dataAreaId}.
   * @param inboundShipmentId Key property. See {@link InboundLoadPackingStructureCaseLines.inboundShipmentId}.
   * @param packingStructureLicensePlateNumber Key property. See {@link InboundLoadPackingStructureCaseLines.packingStructureLicensePlateNumber}.
   * @param itemNumber Key property. See {@link InboundLoadPackingStructureCaseLines.itemNumber}.
   * @param productColorId Key property. See {@link InboundLoadPackingStructureCaseLines.productColorId}.
   * @param productSizeId Key property. See {@link InboundLoadPackingStructureCaseLines.productSizeId}.
   * @param productConfigurationId Key property. See {@link InboundLoadPackingStructureCaseLines.productConfigurationId}.
   * @param productStyleId Key property. See {@link InboundLoadPackingStructureCaseLines.productStyleId}.
   * @param itemBatchNumber Key property. See {@link InboundLoadPackingStructureCaseLines.itemBatchNumber}.
   * @param itemSerialNumber Key property. See {@link InboundLoadPackingStructureCaseLines.itemSerialNumber}.
   * @returns A request builder for creating requests that delete an entity of type `InboundLoadPackingStructureCaseLines`.
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
  ): DeleteRequestBuilder<InboundLoadPackingStructureCaseLines<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `InboundLoadPackingStructureCaseLines`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `InboundLoadPackingStructureCaseLines` by taking the entity as a parameter.
   */
  delete(
    entity: InboundLoadPackingStructureCaseLines<T>
  ): DeleteRequestBuilder<InboundLoadPackingStructureCaseLines<T>, T>;
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
  ): DeleteRequestBuilder<InboundLoadPackingStructureCaseLines<T>, T> {
    return new DeleteRequestBuilder<InboundLoadPackingStructureCaseLines<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof InboundLoadPackingStructureCaseLines
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
