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
import { OutboundShipmentOrderRequestStatus } from './OutboundShipmentOrderRequestStatus';

/**
 * Request builder class for operations supported on the {@link OutboundShipmentOrderRequestStatus} entity.
 */
export class OutboundShipmentOrderRequestStatusRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<OutboundShipmentOrderRequestStatus<T>, T> {
  /**
   * Returns a request builder for querying all `OutboundShipmentOrderRequestStatus` entities.
   * @returns A request builder for creating requests to retrieve all `OutboundShipmentOrderRequestStatus` entities.
   */
  getAll(): GetAllRequestBuilder<OutboundShipmentOrderRequestStatus<T>, T> {
    return new GetAllRequestBuilder<OutboundShipmentOrderRequestStatus<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `OutboundShipmentOrderRequestStatus` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `OutboundShipmentOrderRequestStatus`.
   */
  create(
    entity: OutboundShipmentOrderRequestStatus<T>
  ): CreateRequestBuilder<OutboundShipmentOrderRequestStatus<T>, T> {
    return new CreateRequestBuilder<OutboundShipmentOrderRequestStatus<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `OutboundShipmentOrderRequestStatus` entity based on its keys.
   * @param dataAreaId Key property. See {@link OutboundShipmentOrderRequestStatus.dataAreaId}.
   * @param outboundShipmentOrderRequestId Key property. See {@link OutboundShipmentOrderRequestStatus.outboundShipmentOrderRequestId}.
   * @returns A request builder for creating requests to retrieve one `OutboundShipmentOrderRequestStatus` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    outboundShipmentOrderRequestId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<OutboundShipmentOrderRequestStatus<T>, T> {
    return new GetByKeyRequestBuilder<OutboundShipmentOrderRequestStatus<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        OutboundShipmentOrderRequestId: outboundShipmentOrderRequestId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `OutboundShipmentOrderRequestStatus`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `OutboundShipmentOrderRequestStatus`.
   */
  update(
    entity: OutboundShipmentOrderRequestStatus<T>
  ): UpdateRequestBuilder<OutboundShipmentOrderRequestStatus<T>, T> {
    return new UpdateRequestBuilder<OutboundShipmentOrderRequestStatus<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `OutboundShipmentOrderRequestStatus`.
   * @param dataAreaId Key property. See {@link OutboundShipmentOrderRequestStatus.dataAreaId}.
   * @param outboundShipmentOrderRequestId Key property. See {@link OutboundShipmentOrderRequestStatus.outboundShipmentOrderRequestId}.
   * @returns A request builder for creating requests that delete an entity of type `OutboundShipmentOrderRequestStatus`.
   */
  delete(
    dataAreaId: string,
    outboundShipmentOrderRequestId: string
  ): DeleteRequestBuilder<OutboundShipmentOrderRequestStatus<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `OutboundShipmentOrderRequestStatus`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `OutboundShipmentOrderRequestStatus` by taking the entity as a parameter.
   */
  delete(
    entity: OutboundShipmentOrderRequestStatus<T>
  ): DeleteRequestBuilder<OutboundShipmentOrderRequestStatus<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    outboundShipmentOrderRequestId?: string
  ): DeleteRequestBuilder<OutboundShipmentOrderRequestStatus<T>, T> {
    return new DeleteRequestBuilder<OutboundShipmentOrderRequestStatus<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof OutboundShipmentOrderRequestStatus
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            OutboundShipmentOrderRequestId: outboundShipmentOrderRequestId!
          }
    );
  }
}
