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
import { OutboundShipmentHeaders } from './OutboundShipmentHeaders';

/**
 * Request builder class for operations supported on the {@link OutboundShipmentHeaders} entity.
 */
export class OutboundShipmentHeadersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<OutboundShipmentHeaders<T>, T> {
  /**
   * Returns a request builder for querying all `OutboundShipmentHeaders` entities.
   * @returns A request builder for creating requests to retrieve all `OutboundShipmentHeaders` entities.
   */
  getAll(): GetAllRequestBuilder<OutboundShipmentHeaders<T>, T> {
    return new GetAllRequestBuilder<OutboundShipmentHeaders<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `OutboundShipmentHeaders` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `OutboundShipmentHeaders`.
   */
  create(
    entity: OutboundShipmentHeaders<T>
  ): CreateRequestBuilder<OutboundShipmentHeaders<T>, T> {
    return new CreateRequestBuilder<OutboundShipmentHeaders<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `OutboundShipmentHeaders` entity based on its keys.
   * @param dataAreaId Key property. See {@link OutboundShipmentHeaders.dataAreaId}.
   * @param shipmentId Key property. See {@link OutboundShipmentHeaders.shipmentId}.
   * @returns A request builder for creating requests to retrieve one `OutboundShipmentHeaders` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    shipmentId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<OutboundShipmentHeaders<T>, T> {
    return new GetByKeyRequestBuilder<OutboundShipmentHeaders<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        ShipmentId: shipmentId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `OutboundShipmentHeaders`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `OutboundShipmentHeaders`.
   */
  update(
    entity: OutboundShipmentHeaders<T>
  ): UpdateRequestBuilder<OutboundShipmentHeaders<T>, T> {
    return new UpdateRequestBuilder<OutboundShipmentHeaders<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `OutboundShipmentHeaders`.
   * @param dataAreaId Key property. See {@link OutboundShipmentHeaders.dataAreaId}.
   * @param shipmentId Key property. See {@link OutboundShipmentHeaders.shipmentId}.
   * @returns A request builder for creating requests that delete an entity of type `OutboundShipmentHeaders`.
   */
  delete(
    dataAreaId: string,
    shipmentId: string
  ): DeleteRequestBuilder<OutboundShipmentHeaders<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `OutboundShipmentHeaders`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `OutboundShipmentHeaders` by taking the entity as a parameter.
   */
  delete(
    entity: OutboundShipmentHeaders<T>
  ): DeleteRequestBuilder<OutboundShipmentHeaders<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    shipmentId?: string
  ): DeleteRequestBuilder<OutboundShipmentHeaders<T>, T> {
    return new DeleteRequestBuilder<OutboundShipmentHeaders<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof OutboundShipmentHeaders
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ShipmentId: shipmentId!
          }
    );
  }
}
