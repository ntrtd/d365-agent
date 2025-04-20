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
import { PositionWorkerAssignmentsV2 } from './PositionWorkerAssignmentsV2';

/**
 * Request builder class for operations supported on the {@link PositionWorkerAssignmentsV2} entity.
 */
export class PositionWorkerAssignmentsV2RequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PositionWorkerAssignmentsV2<T>, T> {
  /**
   * Returns a request builder for querying all `PositionWorkerAssignmentsV2` entities.
   * @returns A request builder for creating requests to retrieve all `PositionWorkerAssignmentsV2` entities.
   */
  getAll(): GetAllRequestBuilder<PositionWorkerAssignmentsV2<T>, T> {
    return new GetAllRequestBuilder<PositionWorkerAssignmentsV2<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `PositionWorkerAssignmentsV2` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PositionWorkerAssignmentsV2`.
   */
  create(
    entity: PositionWorkerAssignmentsV2<T>
  ): CreateRequestBuilder<PositionWorkerAssignmentsV2<T>, T> {
    return new CreateRequestBuilder<PositionWorkerAssignmentsV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `PositionWorkerAssignmentsV2` entity based on its keys.
   * @param positionId Key property. See {@link PositionWorkerAssignmentsV2.positionId}.
   * @param validFrom Key property. See {@link PositionWorkerAssignmentsV2.validFrom}.
   * @returns A request builder for creating requests to retrieve one `PositionWorkerAssignmentsV2` entity based on its keys.
   */
  getByKey(
    positionId: DeserializedType<T, 'Edm.String'>,
    validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>
  ): GetByKeyRequestBuilder<PositionWorkerAssignmentsV2<T>, T> {
    return new GetByKeyRequestBuilder<PositionWorkerAssignmentsV2<T>, T>(
      this.entityApi,
      {
        PositionId: positionId,
        ValidFrom: validFrom
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `PositionWorkerAssignmentsV2`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PositionWorkerAssignmentsV2`.
   */
  update(
    entity: PositionWorkerAssignmentsV2<T>
  ): UpdateRequestBuilder<PositionWorkerAssignmentsV2<T>, T> {
    return new UpdateRequestBuilder<PositionWorkerAssignmentsV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `PositionWorkerAssignmentsV2`.
   * @param positionId Key property. See {@link PositionWorkerAssignmentsV2.positionId}.
   * @param validFrom Key property. See {@link PositionWorkerAssignmentsV2.validFrom}.
   * @returns A request builder for creating requests that delete an entity of type `PositionWorkerAssignmentsV2`.
   */
  delete(
    positionId: string,
    validFrom: Moment
  ): DeleteRequestBuilder<PositionWorkerAssignmentsV2<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PositionWorkerAssignmentsV2`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PositionWorkerAssignmentsV2` by taking the entity as a parameter.
   */
  delete(
    entity: PositionWorkerAssignmentsV2<T>
  ): DeleteRequestBuilder<PositionWorkerAssignmentsV2<T>, T>;
  delete(
    positionIdOrEntity: any,
    validFrom?: Moment
  ): DeleteRequestBuilder<PositionWorkerAssignmentsV2<T>, T> {
    return new DeleteRequestBuilder<PositionWorkerAssignmentsV2<T>, T>(
      this.entityApi,
      positionIdOrEntity instanceof PositionWorkerAssignmentsV2
        ? positionIdOrEntity
        : {
            PositionId: positionIdOrEntity!,
            ValidFrom: validFrom!
          }
    );
  }
}
