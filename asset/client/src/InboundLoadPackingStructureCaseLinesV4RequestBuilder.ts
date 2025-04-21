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
import { InboundLoadPackingStructureCaseLinesV4 } from './InboundLoadPackingStructureCaseLinesV4';
import { WhsModule } from './WhsModule';

/**
 * Request builder class for operations supported on the {@link InboundLoadPackingStructureCaseLinesV4} entity.
 */
export class InboundLoadPackingStructureCaseLinesV4RequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<InboundLoadPackingStructureCaseLinesV4<T>, T> {
  /**
   * Returns a request builder for querying all `InboundLoadPackingStructureCaseLinesV4` entities.
   * @returns A request builder for creating requests to retrieve all `InboundLoadPackingStructureCaseLinesV4` entities.
   */
  getAll(): GetAllRequestBuilder<InboundLoadPackingStructureCaseLinesV4<T>, T> {
    return new GetAllRequestBuilder<
      InboundLoadPackingStructureCaseLinesV4<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `InboundLoadPackingStructureCaseLinesV4` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `InboundLoadPackingStructureCaseLinesV4`.
   */
  create(
    entity: InboundLoadPackingStructureCaseLinesV4<T>
  ): CreateRequestBuilder<InboundLoadPackingStructureCaseLinesV4<T>, T> {
    return new CreateRequestBuilder<
      InboundLoadPackingStructureCaseLinesV4<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `InboundLoadPackingStructureCaseLinesV4` entity based on its keys.
   * @param dataAreaId Key property. See {@link InboundLoadPackingStructureCaseLinesV4.dataAreaId}.
   * @param inboundShipmentId Key property. See {@link InboundLoadPackingStructureCaseLinesV4.inboundShipmentId}.
   * @param packingStructureLicensePlateNumber Key property. See {@link InboundLoadPackingStructureCaseLinesV4.packingStructureLicensePlateNumber}.
   * @param itemNumber Key property. See {@link InboundLoadPackingStructureCaseLinesV4.itemNumber}.
   * @param productColorId Key property. See {@link InboundLoadPackingStructureCaseLinesV4.productColorId}.
   * @param productSizeId Key property. See {@link InboundLoadPackingStructureCaseLinesV4.productSizeId}.
   * @param productConfigurationId Key property. See {@link InboundLoadPackingStructureCaseLinesV4.productConfigurationId}.
   * @param productStyleId Key property. See {@link InboundLoadPackingStructureCaseLinesV4.productStyleId}.
   * @param productVersionId Key property. See {@link InboundLoadPackingStructureCaseLinesV4.productVersionId}.
   * @param itemBatchNumber Key property. See {@link InboundLoadPackingStructureCaseLinesV4.itemBatchNumber}.
   * @param itemSerialNumber Key property. See {@link InboundLoadPackingStructureCaseLinesV4.itemSerialNumber}.
   * @param module Key property. See {@link InboundLoadPackingStructureCaseLinesV4.module}.
   * @param orderNumber Key property. See {@link InboundLoadPackingStructureCaseLinesV4.orderNumber}.
   * @param orderLineNumber Key property. See {@link InboundLoadPackingStructureCaseLinesV4.orderLineNumber}.
   * @returns A request builder for creating requests to retrieve one `InboundLoadPackingStructureCaseLinesV4` entity based on its keys.
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
  ): GetByKeyRequestBuilder<InboundLoadPackingStructureCaseLinesV4<T>, T> {
    return new GetByKeyRequestBuilder<
      InboundLoadPackingStructureCaseLinesV4<T>,
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
      ProductVersionId: productVersionId,
      ItemBatchNumber: itemBatchNumber,
      ItemSerialNumber: itemSerialNumber,
      Module: module,
      OrderNumber: orderNumber,
      OrderLineNumber: orderLineNumber
    });
  }

  /**
   * Returns a request builder for updating an entity of type `InboundLoadPackingStructureCaseLinesV4`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `InboundLoadPackingStructureCaseLinesV4`.
   */
  update(
    entity: InboundLoadPackingStructureCaseLinesV4<T>
  ): UpdateRequestBuilder<InboundLoadPackingStructureCaseLinesV4<T>, T> {
    return new UpdateRequestBuilder<
      InboundLoadPackingStructureCaseLinesV4<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `InboundLoadPackingStructureCaseLinesV4`.
   * @param dataAreaId Key property. See {@link InboundLoadPackingStructureCaseLinesV4.dataAreaId}.
   * @param inboundShipmentId Key property. See {@link InboundLoadPackingStructureCaseLinesV4.inboundShipmentId}.
   * @param packingStructureLicensePlateNumber Key property. See {@link InboundLoadPackingStructureCaseLinesV4.packingStructureLicensePlateNumber}.
   * @param itemNumber Key property. See {@link InboundLoadPackingStructureCaseLinesV4.itemNumber}.
   * @param productColorId Key property. See {@link InboundLoadPackingStructureCaseLinesV4.productColorId}.
   * @param productSizeId Key property. See {@link InboundLoadPackingStructureCaseLinesV4.productSizeId}.
   * @param productConfigurationId Key property. See {@link InboundLoadPackingStructureCaseLinesV4.productConfigurationId}.
   * @param productStyleId Key property. See {@link InboundLoadPackingStructureCaseLinesV4.productStyleId}.
   * @param productVersionId Key property. See {@link InboundLoadPackingStructureCaseLinesV4.productVersionId}.
   * @param itemBatchNumber Key property. See {@link InboundLoadPackingStructureCaseLinesV4.itemBatchNumber}.
   * @param itemSerialNumber Key property. See {@link InboundLoadPackingStructureCaseLinesV4.itemSerialNumber}.
   * @param module Key property. See {@link InboundLoadPackingStructureCaseLinesV4.module}.
   * @param orderNumber Key property. See {@link InboundLoadPackingStructureCaseLinesV4.orderNumber}.
   * @param orderLineNumber Key property. See {@link InboundLoadPackingStructureCaseLinesV4.orderLineNumber}.
   * @returns A request builder for creating requests that delete an entity of type `InboundLoadPackingStructureCaseLinesV4`.
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
  ): DeleteRequestBuilder<InboundLoadPackingStructureCaseLinesV4<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `InboundLoadPackingStructureCaseLinesV4`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `InboundLoadPackingStructureCaseLinesV4` by taking the entity as a parameter.
   */
  delete(
    entity: InboundLoadPackingStructureCaseLinesV4<T>
  ): DeleteRequestBuilder<InboundLoadPackingStructureCaseLinesV4<T>, T>;
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
  ): DeleteRequestBuilder<InboundLoadPackingStructureCaseLinesV4<T>, T> {
    return new DeleteRequestBuilder<
      InboundLoadPackingStructureCaseLinesV4<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof InboundLoadPackingStructureCaseLinesV4
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
