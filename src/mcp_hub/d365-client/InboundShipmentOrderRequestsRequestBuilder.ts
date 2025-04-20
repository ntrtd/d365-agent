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
import { InboundShipmentOrderRequests } from './InboundShipmentOrderRequests';

/**
 * Request builder class for operations supported on the {@link InboundShipmentOrderRequests} entity.
 */
export class InboundShipmentOrderRequestsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<InboundShipmentOrderRequests<T>, T> {
  /**
   * Returns a request builder for querying all `InboundShipmentOrderRequests` entities.
   * @returns A request builder for creating requests to retrieve all `InboundShipmentOrderRequests` entities.
   */
  getAll(): GetAllRequestBuilder<InboundShipmentOrderRequests<T>, T> {
    return new GetAllRequestBuilder<InboundShipmentOrderRequests<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `InboundShipmentOrderRequests` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `InboundShipmentOrderRequests`.
   */
  create(
    entity: InboundShipmentOrderRequests<T>
  ): CreateRequestBuilder<InboundShipmentOrderRequests<T>, T> {
    return new CreateRequestBuilder<InboundShipmentOrderRequests<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `InboundShipmentOrderRequests` entity based on its keys.
   * @param dataAreaId Key property. See {@link InboundShipmentOrderRequests.dataAreaId}.
   * @param inboundShipmentOrderRequestId Key property. See {@link InboundShipmentOrderRequests.inboundShipmentOrderRequestId}.
   * @returns A request builder for creating requests to retrieve one `InboundShipmentOrderRequests` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    inboundShipmentOrderRequestId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<InboundShipmentOrderRequests<T>, T> {
    return new GetByKeyRequestBuilder<InboundShipmentOrderRequests<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        InboundShipmentOrderRequestId: inboundShipmentOrderRequestId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `InboundShipmentOrderRequests`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `InboundShipmentOrderRequests`.
   */
  update(
    entity: InboundShipmentOrderRequests<T>
  ): UpdateRequestBuilder<InboundShipmentOrderRequests<T>, T> {
    return new UpdateRequestBuilder<InboundShipmentOrderRequests<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `InboundShipmentOrderRequests`.
   * @param dataAreaId Key property. See {@link InboundShipmentOrderRequests.dataAreaId}.
   * @param inboundShipmentOrderRequestId Key property. See {@link InboundShipmentOrderRequests.inboundShipmentOrderRequestId}.
   * @returns A request builder for creating requests that delete an entity of type `InboundShipmentOrderRequests`.
   */
  delete(
    dataAreaId: string,
    inboundShipmentOrderRequestId: string
  ): DeleteRequestBuilder<InboundShipmentOrderRequests<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `InboundShipmentOrderRequests`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `InboundShipmentOrderRequests` by taking the entity as a parameter.
   */
  delete(
    entity: InboundShipmentOrderRequests<T>
  ): DeleteRequestBuilder<InboundShipmentOrderRequests<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    inboundShipmentOrderRequestId?: string
  ): DeleteRequestBuilder<InboundShipmentOrderRequests<T>, T> {
    return new DeleteRequestBuilder<InboundShipmentOrderRequests<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof InboundShipmentOrderRequests
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            InboundShipmentOrderRequestId: inboundShipmentOrderRequestId!
          }
    );
  }
}
