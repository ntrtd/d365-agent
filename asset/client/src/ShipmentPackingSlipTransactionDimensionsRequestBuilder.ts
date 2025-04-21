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
import { ShipmentPackingSlipTransactionDimensions } from './ShipmentPackingSlipTransactionDimensions';

/**
 * Request builder class for operations supported on the {@link ShipmentPackingSlipTransactionDimensions} entity.
 */
export class ShipmentPackingSlipTransactionDimensionsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ShipmentPackingSlipTransactionDimensions<T>, T> {
  /**
   * Returns a request builder for querying all `ShipmentPackingSlipTransactionDimensions` entities.
   * @returns A request builder for creating requests to retrieve all `ShipmentPackingSlipTransactionDimensions` entities.
   */
  getAll(): GetAllRequestBuilder<
    ShipmentPackingSlipTransactionDimensions<T>,
    T
  > {
    return new GetAllRequestBuilder<
      ShipmentPackingSlipTransactionDimensions<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ShipmentPackingSlipTransactionDimensions` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ShipmentPackingSlipTransactionDimensions`.
   */
  create(
    entity: ShipmentPackingSlipTransactionDimensions<T>
  ): CreateRequestBuilder<ShipmentPackingSlipTransactionDimensions<T>, T> {
    return new CreateRequestBuilder<
      ShipmentPackingSlipTransactionDimensions<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `ShipmentPackingSlipTransactionDimensions` entity based on its keys.
   * @param dataAreaId Key property. See {@link ShipmentPackingSlipTransactionDimensions.dataAreaId}.
   * @param inventoryLotId Key property. See {@link ShipmentPackingSlipTransactionDimensions.inventoryLotId}.
   * @param shipmentPackingSlipVersionNumber Key property. See {@link ShipmentPackingSlipTransactionDimensions.shipmentPackingSlipVersionNumber}.
   * @returns A request builder for creating requests to retrieve one `ShipmentPackingSlipTransactionDimensions` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    inventoryLotId: DeserializedType<T, 'Edm.String'>,
    shipmentPackingSlipVersionNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ShipmentPackingSlipTransactionDimensions<T>, T> {
    return new GetByKeyRequestBuilder<
      ShipmentPackingSlipTransactionDimensions<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      InventoryLotId: inventoryLotId,
      ShipmentPackingSlipVersionNumber: shipmentPackingSlipVersionNumber
    });
  }

  /**
   * Returns a request builder for updating an entity of type `ShipmentPackingSlipTransactionDimensions`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ShipmentPackingSlipTransactionDimensions`.
   */
  update(
    entity: ShipmentPackingSlipTransactionDimensions<T>
  ): UpdateRequestBuilder<ShipmentPackingSlipTransactionDimensions<T>, T> {
    return new UpdateRequestBuilder<
      ShipmentPackingSlipTransactionDimensions<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `ShipmentPackingSlipTransactionDimensions`.
   * @param dataAreaId Key property. See {@link ShipmentPackingSlipTransactionDimensions.dataAreaId}.
   * @param inventoryLotId Key property. See {@link ShipmentPackingSlipTransactionDimensions.inventoryLotId}.
   * @param shipmentPackingSlipVersionNumber Key property. See {@link ShipmentPackingSlipTransactionDimensions.shipmentPackingSlipVersionNumber}.
   * @returns A request builder for creating requests that delete an entity of type `ShipmentPackingSlipTransactionDimensions`.
   */
  delete(
    dataAreaId: string,
    inventoryLotId: string,
    shipmentPackingSlipVersionNumber: string
  ): DeleteRequestBuilder<ShipmentPackingSlipTransactionDimensions<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ShipmentPackingSlipTransactionDimensions`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ShipmentPackingSlipTransactionDimensions` by taking the entity as a parameter.
   */
  delete(
    entity: ShipmentPackingSlipTransactionDimensions<T>
  ): DeleteRequestBuilder<ShipmentPackingSlipTransactionDimensions<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    inventoryLotId?: string,
    shipmentPackingSlipVersionNumber?: string
  ): DeleteRequestBuilder<ShipmentPackingSlipTransactionDimensions<T>, T> {
    return new DeleteRequestBuilder<
      ShipmentPackingSlipTransactionDimensions<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof ShipmentPackingSlipTransactionDimensions
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            InventoryLotId: inventoryLotId!,
            ShipmentPackingSlipVersionNumber: shipmentPackingSlipVersionNumber!
          }
    );
  }
}
