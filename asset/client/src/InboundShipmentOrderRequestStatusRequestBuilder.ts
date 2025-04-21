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
import { InboundShipmentOrderRequestStatus } from './InboundShipmentOrderRequestStatus';

/**
 * Request builder class for operations supported on the {@link InboundShipmentOrderRequestStatus} entity.
 */
export class InboundShipmentOrderRequestStatusRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<InboundShipmentOrderRequestStatus<T>, T> {
  /**
   * Returns a request builder for querying all `InboundShipmentOrderRequestStatus` entities.
   * @returns A request builder for creating requests to retrieve all `InboundShipmentOrderRequestStatus` entities.
   */
  getAll(): GetAllRequestBuilder<InboundShipmentOrderRequestStatus<T>, T> {
    return new GetAllRequestBuilder<InboundShipmentOrderRequestStatus<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `InboundShipmentOrderRequestStatus` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `InboundShipmentOrderRequestStatus`.
   */
  create(
    entity: InboundShipmentOrderRequestStatus<T>
  ): CreateRequestBuilder<InboundShipmentOrderRequestStatus<T>, T> {
    return new CreateRequestBuilder<InboundShipmentOrderRequestStatus<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `InboundShipmentOrderRequestStatus` entity based on its keys.
   * @param dataAreaId Key property. See {@link InboundShipmentOrderRequestStatus.dataAreaId}.
   * @param inboundShipmentOrderRequestId Key property. See {@link InboundShipmentOrderRequestStatus.inboundShipmentOrderRequestId}.
   * @returns A request builder for creating requests to retrieve one `InboundShipmentOrderRequestStatus` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    inboundShipmentOrderRequestId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<InboundShipmentOrderRequestStatus<T>, T> {
    return new GetByKeyRequestBuilder<InboundShipmentOrderRequestStatus<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        InboundShipmentOrderRequestId: inboundShipmentOrderRequestId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `InboundShipmentOrderRequestStatus`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `InboundShipmentOrderRequestStatus`.
   */
  update(
    entity: InboundShipmentOrderRequestStatus<T>
  ): UpdateRequestBuilder<InboundShipmentOrderRequestStatus<T>, T> {
    return new UpdateRequestBuilder<InboundShipmentOrderRequestStatus<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `InboundShipmentOrderRequestStatus`.
   * @param dataAreaId Key property. See {@link InboundShipmentOrderRequestStatus.dataAreaId}.
   * @param inboundShipmentOrderRequestId Key property. See {@link InboundShipmentOrderRequestStatus.inboundShipmentOrderRequestId}.
   * @returns A request builder for creating requests that delete an entity of type `InboundShipmentOrderRequestStatus`.
   */
  delete(
    dataAreaId: string,
    inboundShipmentOrderRequestId: string
  ): DeleteRequestBuilder<InboundShipmentOrderRequestStatus<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `InboundShipmentOrderRequestStatus`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `InboundShipmentOrderRequestStatus` by taking the entity as a parameter.
   */
  delete(
    entity: InboundShipmentOrderRequestStatus<T>
  ): DeleteRequestBuilder<InboundShipmentOrderRequestStatus<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    inboundShipmentOrderRequestId?: string
  ): DeleteRequestBuilder<InboundShipmentOrderRequestStatus<T>, T> {
    return new DeleteRequestBuilder<InboundShipmentOrderRequestStatus<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof InboundShipmentOrderRequestStatus
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            InboundShipmentOrderRequestId: inboundShipmentOrderRequestId!
          }
    );
  }
}
