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
import { InboundShipmentOrderHeaders } from './InboundShipmentOrderHeaders';

/**
 * Request builder class for operations supported on the {@link InboundShipmentOrderHeaders} entity.
 */
export class InboundShipmentOrderHeadersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<InboundShipmentOrderHeaders<T>, T> {
  /**
   * Returns a request builder for querying all `InboundShipmentOrderHeaders` entities.
   * @returns A request builder for creating requests to retrieve all `InboundShipmentOrderHeaders` entities.
   */
  getAll(): GetAllRequestBuilder<InboundShipmentOrderHeaders<T>, T> {
    return new GetAllRequestBuilder<InboundShipmentOrderHeaders<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `InboundShipmentOrderHeaders` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `InboundShipmentOrderHeaders`.
   */
  create(
    entity: InboundShipmentOrderHeaders<T>
  ): CreateRequestBuilder<InboundShipmentOrderHeaders<T>, T> {
    return new CreateRequestBuilder<InboundShipmentOrderHeaders<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `InboundShipmentOrderHeaders` entity based on its keys.
   * @param dataAreaId Key property. See {@link InboundShipmentOrderHeaders.dataAreaId}.
   * @param inboundShipmentOrderNumber Key property. See {@link InboundShipmentOrderHeaders.inboundShipmentOrderNumber}.
   * @returns A request builder for creating requests to retrieve one `InboundShipmentOrderHeaders` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    inboundShipmentOrderNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<InboundShipmentOrderHeaders<T>, T> {
    return new GetByKeyRequestBuilder<InboundShipmentOrderHeaders<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        InboundShipmentOrderNumber: inboundShipmentOrderNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `InboundShipmentOrderHeaders`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `InboundShipmentOrderHeaders`.
   */
  update(
    entity: InboundShipmentOrderHeaders<T>
  ): UpdateRequestBuilder<InboundShipmentOrderHeaders<T>, T> {
    return new UpdateRequestBuilder<InboundShipmentOrderHeaders<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `InboundShipmentOrderHeaders`.
   * @param dataAreaId Key property. See {@link InboundShipmentOrderHeaders.dataAreaId}.
   * @param inboundShipmentOrderNumber Key property. See {@link InboundShipmentOrderHeaders.inboundShipmentOrderNumber}.
   * @returns A request builder for creating requests that delete an entity of type `InboundShipmentOrderHeaders`.
   */
  delete(
    dataAreaId: string,
    inboundShipmentOrderNumber: string
  ): DeleteRequestBuilder<InboundShipmentOrderHeaders<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `InboundShipmentOrderHeaders`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `InboundShipmentOrderHeaders` by taking the entity as a parameter.
   */
  delete(
    entity: InboundShipmentOrderHeaders<T>
  ): DeleteRequestBuilder<InboundShipmentOrderHeaders<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    inboundShipmentOrderNumber?: string
  ): DeleteRequestBuilder<InboundShipmentOrderHeaders<T>, T> {
    return new DeleteRequestBuilder<InboundShipmentOrderHeaders<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof InboundShipmentOrderHeaders
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            InboundShipmentOrderNumber: inboundShipmentOrderNumber!
          }
    );
  }
}
