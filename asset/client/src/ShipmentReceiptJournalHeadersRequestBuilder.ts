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
import { ShipmentReceiptJournalHeaders } from './ShipmentReceiptJournalHeaders';

/**
 * Request builder class for operations supported on the {@link ShipmentReceiptJournalHeaders} entity.
 */
export class ShipmentReceiptJournalHeadersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ShipmentReceiptJournalHeaders<T>, T> {
  /**
   * Returns a request builder for querying all `ShipmentReceiptJournalHeaders` entities.
   * @returns A request builder for creating requests to retrieve all `ShipmentReceiptJournalHeaders` entities.
   */
  getAll(): GetAllRequestBuilder<ShipmentReceiptJournalHeaders<T>, T> {
    return new GetAllRequestBuilder<ShipmentReceiptJournalHeaders<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ShipmentReceiptJournalHeaders` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ShipmentReceiptJournalHeaders`.
   */
  create(
    entity: ShipmentReceiptJournalHeaders<T>
  ): CreateRequestBuilder<ShipmentReceiptJournalHeaders<T>, T> {
    return new CreateRequestBuilder<ShipmentReceiptJournalHeaders<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ShipmentReceiptJournalHeaders` entity based on its keys.
   * @param dataAreaId Key property. See {@link ShipmentReceiptJournalHeaders.dataAreaId}.
   * @param shipmentReceiptVersionNumber Key property. See {@link ShipmentReceiptJournalHeaders.shipmentReceiptVersionNumber}.
   * @returns A request builder for creating requests to retrieve one `ShipmentReceiptJournalHeaders` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    shipmentReceiptVersionNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ShipmentReceiptJournalHeaders<T>, T> {
    return new GetByKeyRequestBuilder<ShipmentReceiptJournalHeaders<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        ShipmentReceiptVersionNumber: shipmentReceiptVersionNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ShipmentReceiptJournalHeaders`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ShipmentReceiptJournalHeaders`.
   */
  update(
    entity: ShipmentReceiptJournalHeaders<T>
  ): UpdateRequestBuilder<ShipmentReceiptJournalHeaders<T>, T> {
    return new UpdateRequestBuilder<ShipmentReceiptJournalHeaders<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ShipmentReceiptJournalHeaders`.
   * @param dataAreaId Key property. See {@link ShipmentReceiptJournalHeaders.dataAreaId}.
   * @param shipmentReceiptVersionNumber Key property. See {@link ShipmentReceiptJournalHeaders.shipmentReceiptVersionNumber}.
   * @returns A request builder for creating requests that delete an entity of type `ShipmentReceiptJournalHeaders`.
   */
  delete(
    dataAreaId: string,
    shipmentReceiptVersionNumber: string
  ): DeleteRequestBuilder<ShipmentReceiptJournalHeaders<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ShipmentReceiptJournalHeaders`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ShipmentReceiptJournalHeaders` by taking the entity as a parameter.
   */
  delete(
    entity: ShipmentReceiptJournalHeaders<T>
  ): DeleteRequestBuilder<ShipmentReceiptJournalHeaders<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    shipmentReceiptVersionNumber?: string
  ): DeleteRequestBuilder<ShipmentReceiptJournalHeaders<T>, T> {
    return new DeleteRequestBuilder<ShipmentReceiptJournalHeaders<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ShipmentReceiptJournalHeaders
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ShipmentReceiptVersionNumber: shipmentReceiptVersionNumber!
          }
    );
  }
}
