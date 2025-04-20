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
import { OutboundShipmentOrderRequests } from './OutboundShipmentOrderRequests';

/**
 * Request builder class for operations supported on the {@link OutboundShipmentOrderRequests} entity.
 */
export class OutboundShipmentOrderRequestsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<OutboundShipmentOrderRequests<T>, T> {
  /**
   * Returns a request builder for querying all `OutboundShipmentOrderRequests` entities.
   * @returns A request builder for creating requests to retrieve all `OutboundShipmentOrderRequests` entities.
   */
  getAll(): GetAllRequestBuilder<OutboundShipmentOrderRequests<T>, T> {
    return new GetAllRequestBuilder<OutboundShipmentOrderRequests<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `OutboundShipmentOrderRequests` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `OutboundShipmentOrderRequests`.
   */
  create(
    entity: OutboundShipmentOrderRequests<T>
  ): CreateRequestBuilder<OutboundShipmentOrderRequests<T>, T> {
    return new CreateRequestBuilder<OutboundShipmentOrderRequests<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `OutboundShipmentOrderRequests` entity based on its keys.
   * @param dataAreaId Key property. See {@link OutboundShipmentOrderRequests.dataAreaId}.
   * @param outboundShipmentOrderRequestId Key property. See {@link OutboundShipmentOrderRequests.outboundShipmentOrderRequestId}.
   * @returns A request builder for creating requests to retrieve one `OutboundShipmentOrderRequests` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    outboundShipmentOrderRequestId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<OutboundShipmentOrderRequests<T>, T> {
    return new GetByKeyRequestBuilder<OutboundShipmentOrderRequests<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        OutboundShipmentOrderRequestId: outboundShipmentOrderRequestId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `OutboundShipmentOrderRequests`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `OutboundShipmentOrderRequests`.
   */
  update(
    entity: OutboundShipmentOrderRequests<T>
  ): UpdateRequestBuilder<OutboundShipmentOrderRequests<T>, T> {
    return new UpdateRequestBuilder<OutboundShipmentOrderRequests<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `OutboundShipmentOrderRequests`.
   * @param dataAreaId Key property. See {@link OutboundShipmentOrderRequests.dataAreaId}.
   * @param outboundShipmentOrderRequestId Key property. See {@link OutboundShipmentOrderRequests.outboundShipmentOrderRequestId}.
   * @returns A request builder for creating requests that delete an entity of type `OutboundShipmentOrderRequests`.
   */
  delete(
    dataAreaId: string,
    outboundShipmentOrderRequestId: string
  ): DeleteRequestBuilder<OutboundShipmentOrderRequests<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `OutboundShipmentOrderRequests`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `OutboundShipmentOrderRequests` by taking the entity as a parameter.
   */
  delete(
    entity: OutboundShipmentOrderRequests<T>
  ): DeleteRequestBuilder<OutboundShipmentOrderRequests<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    outboundShipmentOrderRequestId?: string
  ): DeleteRequestBuilder<OutboundShipmentOrderRequests<T>, T> {
    return new DeleteRequestBuilder<OutboundShipmentOrderRequests<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof OutboundShipmentOrderRequests
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            OutboundShipmentOrderRequestId: outboundShipmentOrderRequestId!
          }
    );
  }
}
