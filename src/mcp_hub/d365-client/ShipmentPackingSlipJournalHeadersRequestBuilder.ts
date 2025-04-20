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
import { ShipmentPackingSlipJournalHeaders } from './ShipmentPackingSlipJournalHeaders';

/**
 * Request builder class for operations supported on the {@link ShipmentPackingSlipJournalHeaders} entity.
 */
export class ShipmentPackingSlipJournalHeadersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ShipmentPackingSlipJournalHeaders<T>, T> {
  /**
   * Returns a request builder for querying all `ShipmentPackingSlipJournalHeaders` entities.
   * @returns A request builder for creating requests to retrieve all `ShipmentPackingSlipJournalHeaders` entities.
   */
  getAll(): GetAllRequestBuilder<ShipmentPackingSlipJournalHeaders<T>, T> {
    return new GetAllRequestBuilder<ShipmentPackingSlipJournalHeaders<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ShipmentPackingSlipJournalHeaders` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ShipmentPackingSlipJournalHeaders`.
   */
  create(
    entity: ShipmentPackingSlipJournalHeaders<T>
  ): CreateRequestBuilder<ShipmentPackingSlipJournalHeaders<T>, T> {
    return new CreateRequestBuilder<ShipmentPackingSlipJournalHeaders<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ShipmentPackingSlipJournalHeaders` entity based on its keys.
   * @param dataAreaId Key property. See {@link ShipmentPackingSlipJournalHeaders.dataAreaId}.
   * @param shipmentPackingSlipVersionNumber Key property. See {@link ShipmentPackingSlipJournalHeaders.shipmentPackingSlipVersionNumber}.
   * @returns A request builder for creating requests to retrieve one `ShipmentPackingSlipJournalHeaders` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    shipmentPackingSlipVersionNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ShipmentPackingSlipJournalHeaders<T>, T> {
    return new GetByKeyRequestBuilder<ShipmentPackingSlipJournalHeaders<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        ShipmentPackingSlipVersionNumber: shipmentPackingSlipVersionNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ShipmentPackingSlipJournalHeaders`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ShipmentPackingSlipJournalHeaders`.
   */
  update(
    entity: ShipmentPackingSlipJournalHeaders<T>
  ): UpdateRequestBuilder<ShipmentPackingSlipJournalHeaders<T>, T> {
    return new UpdateRequestBuilder<ShipmentPackingSlipJournalHeaders<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ShipmentPackingSlipJournalHeaders`.
   * @param dataAreaId Key property. See {@link ShipmentPackingSlipJournalHeaders.dataAreaId}.
   * @param shipmentPackingSlipVersionNumber Key property. See {@link ShipmentPackingSlipJournalHeaders.shipmentPackingSlipVersionNumber}.
   * @returns A request builder for creating requests that delete an entity of type `ShipmentPackingSlipJournalHeaders`.
   */
  delete(
    dataAreaId: string,
    shipmentPackingSlipVersionNumber: string
  ): DeleteRequestBuilder<ShipmentPackingSlipJournalHeaders<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ShipmentPackingSlipJournalHeaders`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ShipmentPackingSlipJournalHeaders` by taking the entity as a parameter.
   */
  delete(
    entity: ShipmentPackingSlipJournalHeaders<T>
  ): DeleteRequestBuilder<ShipmentPackingSlipJournalHeaders<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    shipmentPackingSlipVersionNumber?: string
  ): DeleteRequestBuilder<ShipmentPackingSlipJournalHeaders<T>, T> {
    return new DeleteRequestBuilder<ShipmentPackingSlipJournalHeaders<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ShipmentPackingSlipJournalHeaders
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ShipmentPackingSlipVersionNumber: shipmentPackingSlipVersionNumber!
          }
    );
  }
}
