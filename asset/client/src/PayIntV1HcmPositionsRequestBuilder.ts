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
import { PayIntV1HcmPositions } from './PayIntV1HcmPositions';

/**
 * Request builder class for operations supported on the {@link PayIntV1HcmPositions} entity.
 */
export class PayIntV1HcmPositionsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PayIntV1HcmPositions<T>, T> {
  /**
   * Returns a request builder for querying all `PayIntV1HcmPositions` entities.
   * @returns A request builder for creating requests to retrieve all `PayIntV1HcmPositions` entities.
   */
  getAll(): GetAllRequestBuilder<PayIntV1HcmPositions<T>, T> {
    return new GetAllRequestBuilder<PayIntV1HcmPositions<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `PayIntV1HcmPositions` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PayIntV1HcmPositions`.
   */
  create(
    entity: PayIntV1HcmPositions<T>
  ): CreateRequestBuilder<PayIntV1HcmPositions<T>, T> {
    return new CreateRequestBuilder<PayIntV1HcmPositions<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `PayIntV1HcmPositions` entity based on its keys.
   * @param positionId Key property. See {@link PayIntV1HcmPositions.positionId}.
   * @returns A request builder for creating requests to retrieve one `PayIntV1HcmPositions` entity based on its keys.
   */
  getByKey(
    positionId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<PayIntV1HcmPositions<T>, T> {
    return new GetByKeyRequestBuilder<PayIntV1HcmPositions<T>, T>(
      this.entityApi,
      { PositionId: positionId }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `PayIntV1HcmPositions`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PayIntV1HcmPositions`.
   */
  update(
    entity: PayIntV1HcmPositions<T>
  ): UpdateRequestBuilder<PayIntV1HcmPositions<T>, T> {
    return new UpdateRequestBuilder<PayIntV1HcmPositions<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `PayIntV1HcmPositions`.
   * @param positionId Key property. See {@link PayIntV1HcmPositions.positionId}.
   * @returns A request builder for creating requests that delete an entity of type `PayIntV1HcmPositions`.
   */
  delete(positionId: string): DeleteRequestBuilder<PayIntV1HcmPositions<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PayIntV1HcmPositions`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PayIntV1HcmPositions` by taking the entity as a parameter.
   */
  delete(
    entity: PayIntV1HcmPositions<T>
  ): DeleteRequestBuilder<PayIntV1HcmPositions<T>, T>;
  delete(
    positionIdOrEntity: any
  ): DeleteRequestBuilder<PayIntV1HcmPositions<T>, T> {
    return new DeleteRequestBuilder<PayIntV1HcmPositions<T>, T>(
      this.entityApi,
      positionIdOrEntity instanceof PayIntV1HcmPositions
        ? positionIdOrEntity
        : { PositionId: positionIdOrEntity! }
    );
  }
}
