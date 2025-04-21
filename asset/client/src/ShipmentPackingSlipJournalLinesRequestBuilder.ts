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
import { ShipmentPackingSlipJournalLines } from './ShipmentPackingSlipJournalLines';

/**
 * Request builder class for operations supported on the {@link ShipmentPackingSlipJournalLines} entity.
 */
export class ShipmentPackingSlipJournalLinesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ShipmentPackingSlipJournalLines<T>, T> {
  /**
   * Returns a request builder for querying all `ShipmentPackingSlipJournalLines` entities.
   * @returns A request builder for creating requests to retrieve all `ShipmentPackingSlipJournalLines` entities.
   */
  getAll(): GetAllRequestBuilder<ShipmentPackingSlipJournalLines<T>, T> {
    return new GetAllRequestBuilder<ShipmentPackingSlipJournalLines<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ShipmentPackingSlipJournalLines` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ShipmentPackingSlipJournalLines`.
   */
  create(
    entity: ShipmentPackingSlipJournalLines<T>
  ): CreateRequestBuilder<ShipmentPackingSlipJournalLines<T>, T> {
    return new CreateRequestBuilder<ShipmentPackingSlipJournalLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ShipmentPackingSlipJournalLines` entity based on its keys.
   * @param dataAreaId Key property. See {@link ShipmentPackingSlipJournalLines.dataAreaId}.
   * @param inventoryLotId Key property. See {@link ShipmentPackingSlipJournalLines.inventoryLotId}.
   * @param shipmentPackingSlipVersionNumber Key property. See {@link ShipmentPackingSlipJournalLines.shipmentPackingSlipVersionNumber}.
   * @returns A request builder for creating requests to retrieve one `ShipmentPackingSlipJournalLines` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    inventoryLotId: DeserializedType<T, 'Edm.String'>,
    shipmentPackingSlipVersionNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ShipmentPackingSlipJournalLines<T>, T> {
    return new GetByKeyRequestBuilder<ShipmentPackingSlipJournalLines<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        InventoryLotId: inventoryLotId,
        ShipmentPackingSlipVersionNumber: shipmentPackingSlipVersionNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ShipmentPackingSlipJournalLines`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ShipmentPackingSlipJournalLines`.
   */
  update(
    entity: ShipmentPackingSlipJournalLines<T>
  ): UpdateRequestBuilder<ShipmentPackingSlipJournalLines<T>, T> {
    return new UpdateRequestBuilder<ShipmentPackingSlipJournalLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ShipmentPackingSlipJournalLines`.
   * @param dataAreaId Key property. See {@link ShipmentPackingSlipJournalLines.dataAreaId}.
   * @param inventoryLotId Key property. See {@link ShipmentPackingSlipJournalLines.inventoryLotId}.
   * @param shipmentPackingSlipVersionNumber Key property. See {@link ShipmentPackingSlipJournalLines.shipmentPackingSlipVersionNumber}.
   * @returns A request builder for creating requests that delete an entity of type `ShipmentPackingSlipJournalLines`.
   */
  delete(
    dataAreaId: string,
    inventoryLotId: string,
    shipmentPackingSlipVersionNumber: string
  ): DeleteRequestBuilder<ShipmentPackingSlipJournalLines<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ShipmentPackingSlipJournalLines`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ShipmentPackingSlipJournalLines` by taking the entity as a parameter.
   */
  delete(
    entity: ShipmentPackingSlipJournalLines<T>
  ): DeleteRequestBuilder<ShipmentPackingSlipJournalLines<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    inventoryLotId?: string,
    shipmentPackingSlipVersionNumber?: string
  ): DeleteRequestBuilder<ShipmentPackingSlipJournalLines<T>, T> {
    return new DeleteRequestBuilder<ShipmentPackingSlipJournalLines<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ShipmentPackingSlipJournalLines
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            InventoryLotId: inventoryLotId!,
            ShipmentPackingSlipVersionNumber: shipmentPackingSlipVersionNumber!
          }
    );
  }
}
