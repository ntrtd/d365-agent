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
import { OutboundShipmentOrderHeaders } from './OutboundShipmentOrderHeaders';

/**
 * Request builder class for operations supported on the {@link OutboundShipmentOrderHeaders} entity.
 */
export class OutboundShipmentOrderHeadersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<OutboundShipmentOrderHeaders<T>, T> {
  /**
   * Returns a request builder for querying all `OutboundShipmentOrderHeaders` entities.
   * @returns A request builder for creating requests to retrieve all `OutboundShipmentOrderHeaders` entities.
   */
  getAll(): GetAllRequestBuilder<OutboundShipmentOrderHeaders<T>, T> {
    return new GetAllRequestBuilder<OutboundShipmentOrderHeaders<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `OutboundShipmentOrderHeaders` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `OutboundShipmentOrderHeaders`.
   */
  create(
    entity: OutboundShipmentOrderHeaders<T>
  ): CreateRequestBuilder<OutboundShipmentOrderHeaders<T>, T> {
    return new CreateRequestBuilder<OutboundShipmentOrderHeaders<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `OutboundShipmentOrderHeaders` entity based on its keys.
   * @param dataAreaId Key property. See {@link OutboundShipmentOrderHeaders.dataAreaId}.
   * @param outboundShipmentOrderNumber Key property. See {@link OutboundShipmentOrderHeaders.outboundShipmentOrderNumber}.
   * @returns A request builder for creating requests to retrieve one `OutboundShipmentOrderHeaders` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    outboundShipmentOrderNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<OutboundShipmentOrderHeaders<T>, T> {
    return new GetByKeyRequestBuilder<OutboundShipmentOrderHeaders<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        OutboundShipmentOrderNumber: outboundShipmentOrderNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `OutboundShipmentOrderHeaders`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `OutboundShipmentOrderHeaders`.
   */
  update(
    entity: OutboundShipmentOrderHeaders<T>
  ): UpdateRequestBuilder<OutboundShipmentOrderHeaders<T>, T> {
    return new UpdateRequestBuilder<OutboundShipmentOrderHeaders<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `OutboundShipmentOrderHeaders`.
   * @param dataAreaId Key property. See {@link OutboundShipmentOrderHeaders.dataAreaId}.
   * @param outboundShipmentOrderNumber Key property. See {@link OutboundShipmentOrderHeaders.outboundShipmentOrderNumber}.
   * @returns A request builder for creating requests that delete an entity of type `OutboundShipmentOrderHeaders`.
   */
  delete(
    dataAreaId: string,
    outboundShipmentOrderNumber: string
  ): DeleteRequestBuilder<OutboundShipmentOrderHeaders<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `OutboundShipmentOrderHeaders`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `OutboundShipmentOrderHeaders` by taking the entity as a parameter.
   */
  delete(
    entity: OutboundShipmentOrderHeaders<T>
  ): DeleteRequestBuilder<OutboundShipmentOrderHeaders<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    outboundShipmentOrderNumber?: string
  ): DeleteRequestBuilder<OutboundShipmentOrderHeaders<T>, T> {
    return new DeleteRequestBuilder<OutboundShipmentOrderHeaders<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof OutboundShipmentOrderHeaders
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            OutboundShipmentOrderNumber: outboundShipmentOrderNumber!
          }
    );
  }
}
