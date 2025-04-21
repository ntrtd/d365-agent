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
import { IntrastatsV2 } from './IntrastatsV2';

/**
 * Request builder class for operations supported on the {@link IntrastatsV2} entity.
 */
export class IntrastatsV2RequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<IntrastatsV2<T>, T> {
  /**
   * Returns a request builder for querying all `IntrastatsV2` entities.
   * @returns A request builder for creating requests to retrieve all `IntrastatsV2` entities.
   */
  getAll(): GetAllRequestBuilder<IntrastatsV2<T>, T> {
    return new GetAllRequestBuilder<IntrastatsV2<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `IntrastatsV2` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `IntrastatsV2`.
   */
  create(entity: IntrastatsV2<T>): CreateRequestBuilder<IntrastatsV2<T>, T> {
    return new CreateRequestBuilder<IntrastatsV2<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `IntrastatsV2` entity based on its keys.
   * @param dataAreaId Key property. See {@link IntrastatsV2.dataAreaId}.
   * @param shipmentBatch Key property. See {@link IntrastatsV2.shipmentBatch}.
   * @param sequenceNumber Key property. See {@link IntrastatsV2.sequenceNumber}.
   * @returns A request builder for creating requests to retrieve one `IntrastatsV2` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    shipmentBatch: DeserializedType<T, 'Edm.String'>,
    sequenceNumber: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<IntrastatsV2<T>, T> {
    return new GetByKeyRequestBuilder<IntrastatsV2<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      ShipmentBatch: shipmentBatch,
      SequenceNumber: sequenceNumber
    });
  }

  /**
   * Returns a request builder for updating an entity of type `IntrastatsV2`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `IntrastatsV2`.
   */
  update(entity: IntrastatsV2<T>): UpdateRequestBuilder<IntrastatsV2<T>, T> {
    return new UpdateRequestBuilder<IntrastatsV2<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `IntrastatsV2`.
   * @param dataAreaId Key property. See {@link IntrastatsV2.dataAreaId}.
   * @param shipmentBatch Key property. See {@link IntrastatsV2.shipmentBatch}.
   * @param sequenceNumber Key property. See {@link IntrastatsV2.sequenceNumber}.
   * @returns A request builder for creating requests that delete an entity of type `IntrastatsV2`.
   */
  delete(
    dataAreaId: string,
    shipmentBatch: string,
    sequenceNumber: number
  ): DeleteRequestBuilder<IntrastatsV2<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `IntrastatsV2`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `IntrastatsV2` by taking the entity as a parameter.
   */
  delete(entity: IntrastatsV2<T>): DeleteRequestBuilder<IntrastatsV2<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    shipmentBatch?: string,
    sequenceNumber?: number
  ): DeleteRequestBuilder<IntrastatsV2<T>, T> {
    return new DeleteRequestBuilder<IntrastatsV2<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof IntrastatsV2
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ShipmentBatch: shipmentBatch!,
            SequenceNumber: sequenceNumber!
          }
    );
  }
}
