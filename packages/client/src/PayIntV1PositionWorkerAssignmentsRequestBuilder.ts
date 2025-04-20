/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
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
import { PayIntV1PositionWorkerAssignments } from './PayIntV1PositionWorkerAssignments';

/**
 * Request builder class for operations supported on the {@link PayIntV1PositionWorkerAssignments} entity.
 */
export class PayIntV1PositionWorkerAssignmentsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PayIntV1PositionWorkerAssignments<T>, T> {
  /**
   * Returns a request builder for querying all `PayIntV1PositionWorkerAssignments` entities.
   * @returns A request builder for creating requests to retrieve all `PayIntV1PositionWorkerAssignments` entities.
   */
  getAll(): GetAllRequestBuilder<PayIntV1PositionWorkerAssignments<T>, T> {
    return new GetAllRequestBuilder<PayIntV1PositionWorkerAssignments<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `PayIntV1PositionWorkerAssignments` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PayIntV1PositionWorkerAssignments`.
   */
  create(
    entity: PayIntV1PositionWorkerAssignments<T>
  ): CreateRequestBuilder<PayIntV1PositionWorkerAssignments<T>, T> {
    return new CreateRequestBuilder<PayIntV1PositionWorkerAssignments<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `PayIntV1PositionWorkerAssignments` entity based on its keys.
   * @param positionId Key property. See {@link PayIntV1PositionWorkerAssignments.positionId}.
   * @param validFrom Key property. See {@link PayIntV1PositionWorkerAssignments.validFrom}.
   * @returns A request builder for creating requests to retrieve one `PayIntV1PositionWorkerAssignments` entity based on its keys.
   */
  getByKey(
    positionId: DeserializedType<T, 'Edm.String'>,
    validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>
  ): GetByKeyRequestBuilder<PayIntV1PositionWorkerAssignments<T>, T> {
    return new GetByKeyRequestBuilder<PayIntV1PositionWorkerAssignments<T>, T>(
      this.entityApi,
      {
        PositionId: positionId,
        ValidFrom: validFrom
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `PayIntV1PositionWorkerAssignments`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PayIntV1PositionWorkerAssignments`.
   */
  update(
    entity: PayIntV1PositionWorkerAssignments<T>
  ): UpdateRequestBuilder<PayIntV1PositionWorkerAssignments<T>, T> {
    return new UpdateRequestBuilder<PayIntV1PositionWorkerAssignments<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `PayIntV1PositionWorkerAssignments`.
   * @param positionId Key property. See {@link PayIntV1PositionWorkerAssignments.positionId}.
   * @param validFrom Key property. See {@link PayIntV1PositionWorkerAssignments.validFrom}.
   * @returns A request builder for creating requests that delete an entity of type `PayIntV1PositionWorkerAssignments`.
   */
  delete(
    positionId: string,
    validFrom: Moment
  ): DeleteRequestBuilder<PayIntV1PositionWorkerAssignments<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PayIntV1PositionWorkerAssignments`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PayIntV1PositionWorkerAssignments` by taking the entity as a parameter.
   */
  delete(
    entity: PayIntV1PositionWorkerAssignments<T>
  ): DeleteRequestBuilder<PayIntV1PositionWorkerAssignments<T>, T>;
  delete(
    positionIdOrEntity: any,
    validFrom?: Moment
  ): DeleteRequestBuilder<PayIntV1PositionWorkerAssignments<T>, T> {
    return new DeleteRequestBuilder<PayIntV1PositionWorkerAssignments<T>, T>(
      this.entityApi,
      positionIdOrEntity instanceof PayIntV1PositionWorkerAssignments
        ? positionIdOrEntity
        : {
            PositionId: positionIdOrEntity!,
            ValidFrom: validFrom!
          }
    );
  }
}
