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
import { OutboundShipmentOrderLines } from './OutboundShipmentOrderLines';

/**
 * Request builder class for operations supported on the {@link OutboundShipmentOrderLines} entity.
 */
export class OutboundShipmentOrderLinesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<OutboundShipmentOrderLines<T>, T> {
  /**
   * Returns a request builder for querying all `OutboundShipmentOrderLines` entities.
   * @returns A request builder for creating requests to retrieve all `OutboundShipmentOrderLines` entities.
   */
  getAll(): GetAllRequestBuilder<OutboundShipmentOrderLines<T>, T> {
    return new GetAllRequestBuilder<OutboundShipmentOrderLines<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `OutboundShipmentOrderLines` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `OutboundShipmentOrderLines`.
   */
  create(
    entity: OutboundShipmentOrderLines<T>
  ): CreateRequestBuilder<OutboundShipmentOrderLines<T>, T> {
    return new CreateRequestBuilder<OutboundShipmentOrderLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `OutboundShipmentOrderLines` entity based on its keys.
   * @param dataAreaId Key property. See {@link OutboundShipmentOrderLines.dataAreaId}.
   * @param inventoryLotId Key property. See {@link OutboundShipmentOrderLines.inventoryLotId}.
   * @returns A request builder for creating requests to retrieve one `OutboundShipmentOrderLines` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    inventoryLotId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<OutboundShipmentOrderLines<T>, T> {
    return new GetByKeyRequestBuilder<OutboundShipmentOrderLines<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        InventoryLotId: inventoryLotId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `OutboundShipmentOrderLines`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `OutboundShipmentOrderLines`.
   */
  update(
    entity: OutboundShipmentOrderLines<T>
  ): UpdateRequestBuilder<OutboundShipmentOrderLines<T>, T> {
    return new UpdateRequestBuilder<OutboundShipmentOrderLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `OutboundShipmentOrderLines`.
   * @param dataAreaId Key property. See {@link OutboundShipmentOrderLines.dataAreaId}.
   * @param inventoryLotId Key property. See {@link OutboundShipmentOrderLines.inventoryLotId}.
   * @returns A request builder for creating requests that delete an entity of type `OutboundShipmentOrderLines`.
   */
  delete(
    dataAreaId: string,
    inventoryLotId: string
  ): DeleteRequestBuilder<OutboundShipmentOrderLines<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `OutboundShipmentOrderLines`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `OutboundShipmentOrderLines` by taking the entity as a parameter.
   */
  delete(
    entity: OutboundShipmentOrderLines<T>
  ): DeleteRequestBuilder<OutboundShipmentOrderLines<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    inventoryLotId?: string
  ): DeleteRequestBuilder<OutboundShipmentOrderLines<T>, T> {
    return new DeleteRequestBuilder<OutboundShipmentOrderLines<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof OutboundShipmentOrderLines
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            InventoryLotId: inventoryLotId!
          }
    );
  }
}
