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
import { Intrastats } from './Intrastats';

/**
 * Request builder class for operations supported on the {@link Intrastats} entity.
 */
export class IntrastatsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<Intrastats<T>, T> {
  /**
   * Returns a request builder for querying all `Intrastats` entities.
   * @returns A request builder for creating requests to retrieve all `Intrastats` entities.
   */
  getAll(): GetAllRequestBuilder<Intrastats<T>, T> {
    return new GetAllRequestBuilder<Intrastats<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `Intrastats` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `Intrastats`.
   */
  create(entity: Intrastats<T>): CreateRequestBuilder<Intrastats<T>, T> {
    return new CreateRequestBuilder<Intrastats<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `Intrastats` entity based on its keys.
   * @param dataAreaId Key property. See {@link Intrastats.dataAreaId}.
   * @param shipmentBatch Key property. See {@link Intrastats.shipmentBatch}.
   * @param sequenceNumber Key property. See {@link Intrastats.sequenceNumber}.
   * @returns A request builder for creating requests to retrieve one `Intrastats` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    shipmentBatch: DeserializedType<T, 'Edm.String'>,
    sequenceNumber: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<Intrastats<T>, T> {
    return new GetByKeyRequestBuilder<Intrastats<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      ShipmentBatch: shipmentBatch,
      SequenceNumber: sequenceNumber
    });
  }

  /**
   * Returns a request builder for updating an entity of type `Intrastats`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `Intrastats`.
   */
  update(entity: Intrastats<T>): UpdateRequestBuilder<Intrastats<T>, T> {
    return new UpdateRequestBuilder<Intrastats<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `Intrastats`.
   * @param dataAreaId Key property. See {@link Intrastats.dataAreaId}.
   * @param shipmentBatch Key property. See {@link Intrastats.shipmentBatch}.
   * @param sequenceNumber Key property. See {@link Intrastats.sequenceNumber}.
   * @returns A request builder for creating requests that delete an entity of type `Intrastats`.
   */
  delete(
    dataAreaId: string,
    shipmentBatch: string,
    sequenceNumber: number
  ): DeleteRequestBuilder<Intrastats<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `Intrastats`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `Intrastats` by taking the entity as a parameter.
   */
  delete(entity: Intrastats<T>): DeleteRequestBuilder<Intrastats<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    shipmentBatch?: string,
    sequenceNumber?: number
  ): DeleteRequestBuilder<Intrastats<T>, T> {
    return new DeleteRequestBuilder<Intrastats<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof Intrastats
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ShipmentBatch: shipmentBatch!,
            SequenceNumber: sequenceNumber!
          }
    );
  }
}
