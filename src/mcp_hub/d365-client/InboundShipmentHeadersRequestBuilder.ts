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
import { InboundShipmentHeaders } from './InboundShipmentHeaders';

/**
 * Request builder class for operations supported on the {@link InboundShipmentHeaders} entity.
 */
export class InboundShipmentHeadersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<InboundShipmentHeaders<T>, T> {
  /**
   * Returns a request builder for querying all `InboundShipmentHeaders` entities.
   * @returns A request builder for creating requests to retrieve all `InboundShipmentHeaders` entities.
   */
  getAll(): GetAllRequestBuilder<InboundShipmentHeaders<T>, T> {
    return new GetAllRequestBuilder<InboundShipmentHeaders<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `InboundShipmentHeaders` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `InboundShipmentHeaders`.
   */
  create(
    entity: InboundShipmentHeaders<T>
  ): CreateRequestBuilder<InboundShipmentHeaders<T>, T> {
    return new CreateRequestBuilder<InboundShipmentHeaders<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `InboundShipmentHeaders` entity based on its keys.
   * @param dataAreaId Key property. See {@link InboundShipmentHeaders.dataAreaId}.
   * @param shipmentId Key property. See {@link InboundShipmentHeaders.shipmentId}.
   * @returns A request builder for creating requests to retrieve one `InboundShipmentHeaders` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    shipmentId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<InboundShipmentHeaders<T>, T> {
    return new GetByKeyRequestBuilder<InboundShipmentHeaders<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        ShipmentId: shipmentId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `InboundShipmentHeaders`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `InboundShipmentHeaders`.
   */
  update(
    entity: InboundShipmentHeaders<T>
  ): UpdateRequestBuilder<InboundShipmentHeaders<T>, T> {
    return new UpdateRequestBuilder<InboundShipmentHeaders<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `InboundShipmentHeaders`.
   * @param dataAreaId Key property. See {@link InboundShipmentHeaders.dataAreaId}.
   * @param shipmentId Key property. See {@link InboundShipmentHeaders.shipmentId}.
   * @returns A request builder for creating requests that delete an entity of type `InboundShipmentHeaders`.
   */
  delete(
    dataAreaId: string,
    shipmentId: string
  ): DeleteRequestBuilder<InboundShipmentHeaders<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `InboundShipmentHeaders`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `InboundShipmentHeaders` by taking the entity as a parameter.
   */
  delete(
    entity: InboundShipmentHeaders<T>
  ): DeleteRequestBuilder<InboundShipmentHeaders<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    shipmentId?: string
  ): DeleteRequestBuilder<InboundShipmentHeaders<T>, T> {
    return new DeleteRequestBuilder<InboundShipmentHeaders<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof InboundShipmentHeaders
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ShipmentId: shipmentId!
          }
    );
  }
}
