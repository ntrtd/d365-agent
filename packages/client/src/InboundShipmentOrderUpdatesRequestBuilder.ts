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
import { InboundShipmentOrderUpdates } from './InboundShipmentOrderUpdates';

/**
 * Request builder class for operations supported on the {@link InboundShipmentOrderUpdates} entity.
 */
export class InboundShipmentOrderUpdatesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<InboundShipmentOrderUpdates<T>, T> {
  /**
   * Returns a request builder for querying all `InboundShipmentOrderUpdates` entities.
   * @returns A request builder for creating requests to retrieve all `InboundShipmentOrderUpdates` entities.
   */
  getAll(): GetAllRequestBuilder<InboundShipmentOrderUpdates<T>, T> {
    return new GetAllRequestBuilder<InboundShipmentOrderUpdates<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `InboundShipmentOrderUpdates` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `InboundShipmentOrderUpdates`.
   */
  create(
    entity: InboundShipmentOrderUpdates<T>
  ): CreateRequestBuilder<InboundShipmentOrderUpdates<T>, T> {
    return new CreateRequestBuilder<InboundShipmentOrderUpdates<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `InboundShipmentOrderUpdates` entity based on its keys.
   * @param dataAreaId Key property. See {@link InboundShipmentOrderUpdates.dataAreaId}.
   * @param inboundShipmentOrderUpdateId Key property. See {@link InboundShipmentOrderUpdates.inboundShipmentOrderUpdateId}.
   * @param inboundShipmentOrderOriginId Key property. See {@link InboundShipmentOrderUpdates.inboundShipmentOrderOriginId}.
   * @returns A request builder for creating requests to retrieve one `InboundShipmentOrderUpdates` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    inboundShipmentOrderUpdateId: DeserializedType<T, 'Edm.String'>,
    inboundShipmentOrderOriginId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<InboundShipmentOrderUpdates<T>, T> {
    return new GetByKeyRequestBuilder<InboundShipmentOrderUpdates<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        InboundShipmentOrderUpdateId: inboundShipmentOrderUpdateId,
        InboundShipmentOrderOriginId: inboundShipmentOrderOriginId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `InboundShipmentOrderUpdates`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `InboundShipmentOrderUpdates`.
   */
  update(
    entity: InboundShipmentOrderUpdates<T>
  ): UpdateRequestBuilder<InboundShipmentOrderUpdates<T>, T> {
    return new UpdateRequestBuilder<InboundShipmentOrderUpdates<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `InboundShipmentOrderUpdates`.
   * @param dataAreaId Key property. See {@link InboundShipmentOrderUpdates.dataAreaId}.
   * @param inboundShipmentOrderUpdateId Key property. See {@link InboundShipmentOrderUpdates.inboundShipmentOrderUpdateId}.
   * @param inboundShipmentOrderOriginId Key property. See {@link InboundShipmentOrderUpdates.inboundShipmentOrderOriginId}.
   * @returns A request builder for creating requests that delete an entity of type `InboundShipmentOrderUpdates`.
   */
  delete(
    dataAreaId: string,
    inboundShipmentOrderUpdateId: string,
    inboundShipmentOrderOriginId: string
  ): DeleteRequestBuilder<InboundShipmentOrderUpdates<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `InboundShipmentOrderUpdates`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `InboundShipmentOrderUpdates` by taking the entity as a parameter.
   */
  delete(
    entity: InboundShipmentOrderUpdates<T>
  ): DeleteRequestBuilder<InboundShipmentOrderUpdates<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    inboundShipmentOrderUpdateId?: string,
    inboundShipmentOrderOriginId?: string
  ): DeleteRequestBuilder<InboundShipmentOrderUpdates<T>, T> {
    return new DeleteRequestBuilder<InboundShipmentOrderUpdates<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof InboundShipmentOrderUpdates
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            InboundShipmentOrderUpdateId: inboundShipmentOrderUpdateId!,
            InboundShipmentOrderOriginId: inboundShipmentOrderOriginId!
          }
    );
  }
}
