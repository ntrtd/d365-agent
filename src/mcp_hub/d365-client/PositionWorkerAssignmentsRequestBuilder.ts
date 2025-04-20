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
import { PositionWorkerAssignments } from './PositionWorkerAssignments';

/**
 * Request builder class for operations supported on the {@link PositionWorkerAssignments} entity.
 */
export class PositionWorkerAssignmentsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PositionWorkerAssignments<T>, T> {
  /**
   * Returns a request builder for querying all `PositionWorkerAssignments` entities.
   * @returns A request builder for creating requests to retrieve all `PositionWorkerAssignments` entities.
   */
  getAll(): GetAllRequestBuilder<PositionWorkerAssignments<T>, T> {
    return new GetAllRequestBuilder<PositionWorkerAssignments<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `PositionWorkerAssignments` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PositionWorkerAssignments`.
   */
  create(
    entity: PositionWorkerAssignments<T>
  ): CreateRequestBuilder<PositionWorkerAssignments<T>, T> {
    return new CreateRequestBuilder<PositionWorkerAssignments<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `PositionWorkerAssignments` entity based on its keys.
   * @param positionId Key property. See {@link PositionWorkerAssignments.positionId}.
   * @param validFrom Key property. See {@link PositionWorkerAssignments.validFrom}.
   * @param validTo Key property. See {@link PositionWorkerAssignments.validTo}.
   * @returns A request builder for creating requests to retrieve one `PositionWorkerAssignments` entity based on its keys.
   */
  getByKey(
    positionId: DeserializedType<T, 'Edm.String'>,
    validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>,
    validTo: DeserializedType<T, 'Edm.DateTimeOffset'>
  ): GetByKeyRequestBuilder<PositionWorkerAssignments<T>, T> {
    return new GetByKeyRequestBuilder<PositionWorkerAssignments<T>, T>(
      this.entityApi,
      {
        PositionId: positionId,
        ValidFrom: validFrom,
        ValidTo: validTo
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `PositionWorkerAssignments`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PositionWorkerAssignments`.
   */
  update(
    entity: PositionWorkerAssignments<T>
  ): UpdateRequestBuilder<PositionWorkerAssignments<T>, T> {
    return new UpdateRequestBuilder<PositionWorkerAssignments<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `PositionWorkerAssignments`.
   * @param positionId Key property. See {@link PositionWorkerAssignments.positionId}.
   * @param validFrom Key property. See {@link PositionWorkerAssignments.validFrom}.
   * @param validTo Key property. See {@link PositionWorkerAssignments.validTo}.
   * @returns A request builder for creating requests that delete an entity of type `PositionWorkerAssignments`.
   */
  delete(
    positionId: string,
    validFrom: Moment,
    validTo: Moment
  ): DeleteRequestBuilder<PositionWorkerAssignments<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PositionWorkerAssignments`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PositionWorkerAssignments` by taking the entity as a parameter.
   */
  delete(
    entity: PositionWorkerAssignments<T>
  ): DeleteRequestBuilder<PositionWorkerAssignments<T>, T>;
  delete(
    positionIdOrEntity: any,
    validFrom?: Moment,
    validTo?: Moment
  ): DeleteRequestBuilder<PositionWorkerAssignments<T>, T> {
    return new DeleteRequestBuilder<PositionWorkerAssignments<T>, T>(
      this.entityApi,
      positionIdOrEntity instanceof PositionWorkerAssignments
        ? positionIdOrEntity
        : {
            PositionId: positionIdOrEntity!,
            ValidFrom: validFrom!,
            ValidTo: validTo!
          }
    );
  }
}
