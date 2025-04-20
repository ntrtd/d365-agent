/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BigNumber } from 'bignumber.js';
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
import { InboundShipmentOrderLineInventDimUpdates } from './InboundShipmentOrderLineInventDimUpdates';

/**
 * Request builder class for operations supported on the {@link InboundShipmentOrderLineInventDimUpdates} entity.
 */
export class InboundShipmentOrderLineInventDimUpdatesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<InboundShipmentOrderLineInventDimUpdates<T>, T> {
  /**
   * Returns a request builder for querying all `InboundShipmentOrderLineInventDimUpdates` entities.
   * @returns A request builder for creating requests to retrieve all `InboundShipmentOrderLineInventDimUpdates` entities.
   */
  getAll(): GetAllRequestBuilder<
    InboundShipmentOrderLineInventDimUpdates<T>,
    T
  > {
    return new GetAllRequestBuilder<
      InboundShipmentOrderLineInventDimUpdates<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `InboundShipmentOrderLineInventDimUpdates` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `InboundShipmentOrderLineInventDimUpdates`.
   */
  create(
    entity: InboundShipmentOrderLineInventDimUpdates<T>
  ): CreateRequestBuilder<InboundShipmentOrderLineInventDimUpdates<T>, T> {
    return new CreateRequestBuilder<
      InboundShipmentOrderLineInventDimUpdates<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `InboundShipmentOrderLineInventDimUpdates` entity based on its keys.
   * @param dataAreaId Key property. See {@link InboundShipmentOrderLineInventDimUpdates.dataAreaId}.
   * @param inboundShipmentOrderUpdateId Key property. See {@link InboundShipmentOrderLineInventDimUpdates.inboundShipmentOrderUpdateId}.
   * @param inboundShipmentOrderOriginId Key property. See {@link InboundShipmentOrderLineInventDimUpdates.inboundShipmentOrderOriginId}.
   * @param orderLineNumber Key property. See {@link InboundShipmentOrderLineInventDimUpdates.orderLineNumber}.
   * @returns A request builder for creating requests to retrieve one `InboundShipmentOrderLineInventDimUpdates` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    inboundShipmentOrderUpdateId: DeserializedType<T, 'Edm.String'>,
    inboundShipmentOrderOriginId: DeserializedType<T, 'Edm.String'>,
    orderLineNumber: DeserializedType<T, 'Edm.Int64'>
  ): GetByKeyRequestBuilder<InboundShipmentOrderLineInventDimUpdates<T>, T> {
    return new GetByKeyRequestBuilder<
      InboundShipmentOrderLineInventDimUpdates<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      InboundShipmentOrderUpdateId: inboundShipmentOrderUpdateId,
      InboundShipmentOrderOriginId: inboundShipmentOrderOriginId,
      OrderLineNumber: orderLineNumber
    });
  }

  /**
   * Returns a request builder for updating an entity of type `InboundShipmentOrderLineInventDimUpdates`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `InboundShipmentOrderLineInventDimUpdates`.
   */
  update(
    entity: InboundShipmentOrderLineInventDimUpdates<T>
  ): UpdateRequestBuilder<InboundShipmentOrderLineInventDimUpdates<T>, T> {
    return new UpdateRequestBuilder<
      InboundShipmentOrderLineInventDimUpdates<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `InboundShipmentOrderLineInventDimUpdates`.
   * @param dataAreaId Key property. See {@link InboundShipmentOrderLineInventDimUpdates.dataAreaId}.
   * @param inboundShipmentOrderUpdateId Key property. See {@link InboundShipmentOrderLineInventDimUpdates.inboundShipmentOrderUpdateId}.
   * @param inboundShipmentOrderOriginId Key property. See {@link InboundShipmentOrderLineInventDimUpdates.inboundShipmentOrderOriginId}.
   * @param orderLineNumber Key property. See {@link InboundShipmentOrderLineInventDimUpdates.orderLineNumber}.
   * @returns A request builder for creating requests that delete an entity of type `InboundShipmentOrderLineInventDimUpdates`.
   */
  delete(
    dataAreaId: string,
    inboundShipmentOrderUpdateId: string,
    inboundShipmentOrderOriginId: string,
    orderLineNumber: BigNumber
  ): DeleteRequestBuilder<InboundShipmentOrderLineInventDimUpdates<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `InboundShipmentOrderLineInventDimUpdates`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `InboundShipmentOrderLineInventDimUpdates` by taking the entity as a parameter.
   */
  delete(
    entity: InboundShipmentOrderLineInventDimUpdates<T>
  ): DeleteRequestBuilder<InboundShipmentOrderLineInventDimUpdates<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    inboundShipmentOrderUpdateId?: string,
    inboundShipmentOrderOriginId?: string,
    orderLineNumber?: BigNumber
  ): DeleteRequestBuilder<InboundShipmentOrderLineInventDimUpdates<T>, T> {
    return new DeleteRequestBuilder<
      InboundShipmentOrderLineInventDimUpdates<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof InboundShipmentOrderLineInventDimUpdates
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            InboundShipmentOrderUpdateId: inboundShipmentOrderUpdateId!,
            InboundShipmentOrderOriginId: inboundShipmentOrderOriginId!,
            OrderLineNumber: orderLineNumber!
          }
    );
  }
}
