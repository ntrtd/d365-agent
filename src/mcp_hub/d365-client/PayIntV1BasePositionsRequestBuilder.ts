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
import { PayIntV1BasePositions } from './PayIntV1BasePositions';

/**
 * Request builder class for operations supported on the {@link PayIntV1BasePositions} entity.
 */
export class PayIntV1BasePositionsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PayIntV1BasePositions<T>, T> {
  /**
   * Returns a request builder for querying all `PayIntV1BasePositions` entities.
   * @returns A request builder for creating requests to retrieve all `PayIntV1BasePositions` entities.
   */
  getAll(): GetAllRequestBuilder<PayIntV1BasePositions<T>, T> {
    return new GetAllRequestBuilder<PayIntV1BasePositions<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `PayIntV1BasePositions` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PayIntV1BasePositions`.
   */
  create(
    entity: PayIntV1BasePositions<T>
  ): CreateRequestBuilder<PayIntV1BasePositions<T>, T> {
    return new CreateRequestBuilder<PayIntV1BasePositions<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `PayIntV1BasePositions` entity based on its keys.
   * @param positionId Key property. See {@link PayIntV1BasePositions.positionId}.
   * @returns A request builder for creating requests to retrieve one `PayIntV1BasePositions` entity based on its keys.
   */
  getByKey(
    positionId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<PayIntV1BasePositions<T>, T> {
    return new GetByKeyRequestBuilder<PayIntV1BasePositions<T>, T>(
      this.entityApi,
      { PositionId: positionId }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `PayIntV1BasePositions`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PayIntV1BasePositions`.
   */
  update(
    entity: PayIntV1BasePositions<T>
  ): UpdateRequestBuilder<PayIntV1BasePositions<T>, T> {
    return new UpdateRequestBuilder<PayIntV1BasePositions<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `PayIntV1BasePositions`.
   * @param positionId Key property. See {@link PayIntV1BasePositions.positionId}.
   * @returns A request builder for creating requests that delete an entity of type `PayIntV1BasePositions`.
   */
  delete(positionId: string): DeleteRequestBuilder<PayIntV1BasePositions<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PayIntV1BasePositions`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PayIntV1BasePositions` by taking the entity as a parameter.
   */
  delete(
    entity: PayIntV1BasePositions<T>
  ): DeleteRequestBuilder<PayIntV1BasePositions<T>, T>;
  delete(
    positionIdOrEntity: any
  ): DeleteRequestBuilder<PayIntV1BasePositions<T>, T> {
    return new DeleteRequestBuilder<PayIntV1BasePositions<T>, T>(
      this.entityApi,
      positionIdOrEntity instanceof PayIntV1BasePositions
        ? positionIdOrEntity
        : { PositionId: positionIdOrEntity! }
    );
  }
}
