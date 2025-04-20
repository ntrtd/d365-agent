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
import { ShipmentReceiptJournalLines } from './ShipmentReceiptJournalLines';

/**
 * Request builder class for operations supported on the {@link ShipmentReceiptJournalLines} entity.
 */
export class ShipmentReceiptJournalLinesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ShipmentReceiptJournalLines<T>, T> {
  /**
   * Returns a request builder for querying all `ShipmentReceiptJournalLines` entities.
   * @returns A request builder for creating requests to retrieve all `ShipmentReceiptJournalLines` entities.
   */
  getAll(): GetAllRequestBuilder<ShipmentReceiptJournalLines<T>, T> {
    return new GetAllRequestBuilder<ShipmentReceiptJournalLines<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ShipmentReceiptJournalLines` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ShipmentReceiptJournalLines`.
   */
  create(
    entity: ShipmentReceiptJournalLines<T>
  ): CreateRequestBuilder<ShipmentReceiptJournalLines<T>, T> {
    return new CreateRequestBuilder<ShipmentReceiptJournalLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ShipmentReceiptJournalLines` entity based on its keys.
   * @param dataAreaId Key property. See {@link ShipmentReceiptJournalLines.dataAreaId}.
   * @param inventoryLotId Key property. See {@link ShipmentReceiptJournalLines.inventoryLotId}.
   * @param shipmentReceiptVersionNumber Key property. See {@link ShipmentReceiptJournalLines.shipmentReceiptVersionNumber}.
   * @returns A request builder for creating requests to retrieve one `ShipmentReceiptJournalLines` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    inventoryLotId: DeserializedType<T, 'Edm.String'>,
    shipmentReceiptVersionNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ShipmentReceiptJournalLines<T>, T> {
    return new GetByKeyRequestBuilder<ShipmentReceiptJournalLines<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        InventoryLotId: inventoryLotId,
        ShipmentReceiptVersionNumber: shipmentReceiptVersionNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ShipmentReceiptJournalLines`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ShipmentReceiptJournalLines`.
   */
  update(
    entity: ShipmentReceiptJournalLines<T>
  ): UpdateRequestBuilder<ShipmentReceiptJournalLines<T>, T> {
    return new UpdateRequestBuilder<ShipmentReceiptJournalLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ShipmentReceiptJournalLines`.
   * @param dataAreaId Key property. See {@link ShipmentReceiptJournalLines.dataAreaId}.
   * @param inventoryLotId Key property. See {@link ShipmentReceiptJournalLines.inventoryLotId}.
   * @param shipmentReceiptVersionNumber Key property. See {@link ShipmentReceiptJournalLines.shipmentReceiptVersionNumber}.
   * @returns A request builder for creating requests that delete an entity of type `ShipmentReceiptJournalLines`.
   */
  delete(
    dataAreaId: string,
    inventoryLotId: string,
    shipmentReceiptVersionNumber: string
  ): DeleteRequestBuilder<ShipmentReceiptJournalLines<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ShipmentReceiptJournalLines`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ShipmentReceiptJournalLines` by taking the entity as a parameter.
   */
  delete(
    entity: ShipmentReceiptJournalLines<T>
  ): DeleteRequestBuilder<ShipmentReceiptJournalLines<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    inventoryLotId?: string,
    shipmentReceiptVersionNumber?: string
  ): DeleteRequestBuilder<ShipmentReceiptJournalLines<T>, T> {
    return new DeleteRequestBuilder<ShipmentReceiptJournalLines<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ShipmentReceiptJournalLines
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            InventoryLotId: inventoryLotId!,
            ShipmentReceiptVersionNumber: shipmentReceiptVersionNumber!
          }
    );
  }
}
