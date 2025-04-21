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
import { PurchReqLineBiEntities } from './PurchReqLineBiEntities';

/**
 * Request builder class for operations supported on the {@link PurchReqLineBiEntities} entity.
 */
export class PurchReqLineBiEntitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PurchReqLineBiEntities<T>, T> {
  /**
   * Returns a request builder for querying all `PurchReqLineBiEntities` entities.
   * @returns A request builder for creating requests to retrieve all `PurchReqLineBiEntities` entities.
   */
  getAll(): GetAllRequestBuilder<PurchReqLineBiEntities<T>, T> {
    return new GetAllRequestBuilder<PurchReqLineBiEntities<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `PurchReqLineBiEntities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PurchReqLineBiEntities`.
   */
  create(
    entity: PurchReqLineBiEntities<T>
  ): CreateRequestBuilder<PurchReqLineBiEntities<T>, T> {
    return new CreateRequestBuilder<PurchReqLineBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `PurchReqLineBiEntities` entity based on its keys.
   * @param purchReqTable Key property. See {@link PurchReqLineBiEntities.purchReqTable}.
   * @param sequenceNumber Key property. See {@link PurchReqLineBiEntities.sequenceNumber}.
   * @returns A request builder for creating requests to retrieve one `PurchReqLineBiEntities` entity based on its keys.
   */
  getByKey(
    purchReqTable: DeserializedType<T, 'Edm.Int64'>,
    sequenceNumber: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<PurchReqLineBiEntities<T>, T> {
    return new GetByKeyRequestBuilder<PurchReqLineBiEntities<T>, T>(
      this.entityApi,
      {
        PurchReqTable: purchReqTable,
        SequenceNumber: sequenceNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `PurchReqLineBiEntities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PurchReqLineBiEntities`.
   */
  update(
    entity: PurchReqLineBiEntities<T>
  ): UpdateRequestBuilder<PurchReqLineBiEntities<T>, T> {
    return new UpdateRequestBuilder<PurchReqLineBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `PurchReqLineBiEntities`.
   * @param purchReqTable Key property. See {@link PurchReqLineBiEntities.purchReqTable}.
   * @param sequenceNumber Key property. See {@link PurchReqLineBiEntities.sequenceNumber}.
   * @returns A request builder for creating requests that delete an entity of type `PurchReqLineBiEntities`.
   */
  delete(
    purchReqTable: BigNumber,
    sequenceNumber: number
  ): DeleteRequestBuilder<PurchReqLineBiEntities<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PurchReqLineBiEntities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PurchReqLineBiEntities` by taking the entity as a parameter.
   */
  delete(
    entity: PurchReqLineBiEntities<T>
  ): DeleteRequestBuilder<PurchReqLineBiEntities<T>, T>;
  delete(
    purchReqTableOrEntity: any,
    sequenceNumber?: number
  ): DeleteRequestBuilder<PurchReqLineBiEntities<T>, T> {
    return new DeleteRequestBuilder<PurchReqLineBiEntities<T>, T>(
      this.entityApi,
      purchReqTableOrEntity instanceof PurchReqLineBiEntities
        ? purchReqTableOrEntity
        : {
            PurchReqTable: purchReqTableOrEntity!,
            SequenceNumber: sequenceNumber!
          }
    );
  }
}
