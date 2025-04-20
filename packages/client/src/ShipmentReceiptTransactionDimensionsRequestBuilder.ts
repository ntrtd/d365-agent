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
import { ShipmentReceiptTransactionDimensions } from './ShipmentReceiptTransactionDimensions';

/**
 * Request builder class for operations supported on the {@link ShipmentReceiptTransactionDimensions} entity.
 */
export class ShipmentReceiptTransactionDimensionsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ShipmentReceiptTransactionDimensions<T>, T> {
  /**
   * Returns a request builder for querying all `ShipmentReceiptTransactionDimensions` entities.
   * @returns A request builder for creating requests to retrieve all `ShipmentReceiptTransactionDimensions` entities.
   */
  getAll(): GetAllRequestBuilder<ShipmentReceiptTransactionDimensions<T>, T> {
    return new GetAllRequestBuilder<ShipmentReceiptTransactionDimensions<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ShipmentReceiptTransactionDimensions` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ShipmentReceiptTransactionDimensions`.
   */
  create(
    entity: ShipmentReceiptTransactionDimensions<T>
  ): CreateRequestBuilder<ShipmentReceiptTransactionDimensions<T>, T> {
    return new CreateRequestBuilder<ShipmentReceiptTransactionDimensions<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ShipmentReceiptTransactionDimensions` entity based on its keys.
   * @param dataAreaId Key property. See {@link ShipmentReceiptTransactionDimensions.dataAreaId}.
   * @param inventoryLotId Key property. See {@link ShipmentReceiptTransactionDimensions.inventoryLotId}.
   * @param shipmentReceiptVersionNumber Key property. See {@link ShipmentReceiptTransactionDimensions.shipmentReceiptVersionNumber}.
   * @returns A request builder for creating requests to retrieve one `ShipmentReceiptTransactionDimensions` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    inventoryLotId: DeserializedType<T, 'Edm.String'>,
    shipmentReceiptVersionNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ShipmentReceiptTransactionDimensions<T>, T> {
    return new GetByKeyRequestBuilder<
      ShipmentReceiptTransactionDimensions<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      InventoryLotId: inventoryLotId,
      ShipmentReceiptVersionNumber: shipmentReceiptVersionNumber
    });
  }

  /**
   * Returns a request builder for updating an entity of type `ShipmentReceiptTransactionDimensions`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ShipmentReceiptTransactionDimensions`.
   */
  update(
    entity: ShipmentReceiptTransactionDimensions<T>
  ): UpdateRequestBuilder<ShipmentReceiptTransactionDimensions<T>, T> {
    return new UpdateRequestBuilder<ShipmentReceiptTransactionDimensions<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ShipmentReceiptTransactionDimensions`.
   * @param dataAreaId Key property. See {@link ShipmentReceiptTransactionDimensions.dataAreaId}.
   * @param inventoryLotId Key property. See {@link ShipmentReceiptTransactionDimensions.inventoryLotId}.
   * @param shipmentReceiptVersionNumber Key property. See {@link ShipmentReceiptTransactionDimensions.shipmentReceiptVersionNumber}.
   * @returns A request builder for creating requests that delete an entity of type `ShipmentReceiptTransactionDimensions`.
   */
  delete(
    dataAreaId: string,
    inventoryLotId: string,
    shipmentReceiptVersionNumber: string
  ): DeleteRequestBuilder<ShipmentReceiptTransactionDimensions<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ShipmentReceiptTransactionDimensions`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ShipmentReceiptTransactionDimensions` by taking the entity as a parameter.
   */
  delete(
    entity: ShipmentReceiptTransactionDimensions<T>
  ): DeleteRequestBuilder<ShipmentReceiptTransactionDimensions<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    inventoryLotId?: string,
    shipmentReceiptVersionNumber?: string
  ): DeleteRequestBuilder<ShipmentReceiptTransactionDimensions<T>, T> {
    return new DeleteRequestBuilder<ShipmentReceiptTransactionDimensions<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ShipmentReceiptTransactionDimensions
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            InventoryLotId: inventoryLotId!,
            ShipmentReceiptVersionNumber: shipmentReceiptVersionNumber!
          }
    );
  }
}
