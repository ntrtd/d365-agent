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
import { InboundShipmentOrderLines } from './InboundShipmentOrderLines';

/**
 * Request builder class for operations supported on the {@link InboundShipmentOrderLines} entity.
 */
export class InboundShipmentOrderLinesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<InboundShipmentOrderLines<T>, T> {
  /**
   * Returns a request builder for querying all `InboundShipmentOrderLines` entities.
   * @returns A request builder for creating requests to retrieve all `InboundShipmentOrderLines` entities.
   */
  getAll(): GetAllRequestBuilder<InboundShipmentOrderLines<T>, T> {
    return new GetAllRequestBuilder<InboundShipmentOrderLines<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `InboundShipmentOrderLines` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `InboundShipmentOrderLines`.
   */
  create(
    entity: InboundShipmentOrderLines<T>
  ): CreateRequestBuilder<InboundShipmentOrderLines<T>, T> {
    return new CreateRequestBuilder<InboundShipmentOrderLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `InboundShipmentOrderLines` entity based on its keys.
   * @param dataAreaId Key property. See {@link InboundShipmentOrderLines.dataAreaId}.
   * @param inventoryLotId Key property. See {@link InboundShipmentOrderLines.inventoryLotId}.
   * @returns A request builder for creating requests to retrieve one `InboundShipmentOrderLines` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    inventoryLotId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<InboundShipmentOrderLines<T>, T> {
    return new GetByKeyRequestBuilder<InboundShipmentOrderLines<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        InventoryLotId: inventoryLotId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `InboundShipmentOrderLines`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `InboundShipmentOrderLines`.
   */
  update(
    entity: InboundShipmentOrderLines<T>
  ): UpdateRequestBuilder<InboundShipmentOrderLines<T>, T> {
    return new UpdateRequestBuilder<InboundShipmentOrderLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `InboundShipmentOrderLines`.
   * @param dataAreaId Key property. See {@link InboundShipmentOrderLines.dataAreaId}.
   * @param inventoryLotId Key property. See {@link InboundShipmentOrderLines.inventoryLotId}.
   * @returns A request builder for creating requests that delete an entity of type `InboundShipmentOrderLines`.
   */
  delete(
    dataAreaId: string,
    inventoryLotId: string
  ): DeleteRequestBuilder<InboundShipmentOrderLines<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `InboundShipmentOrderLines`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `InboundShipmentOrderLines` by taking the entity as a parameter.
   */
  delete(
    entity: InboundShipmentOrderLines<T>
  ): DeleteRequestBuilder<InboundShipmentOrderLines<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    inventoryLotId?: string
  ): DeleteRequestBuilder<InboundShipmentOrderLines<T>, T> {
    return new DeleteRequestBuilder<InboundShipmentOrderLines<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof InboundShipmentOrderLines
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            InventoryLotId: inventoryLotId!
          }
    );
  }
}
