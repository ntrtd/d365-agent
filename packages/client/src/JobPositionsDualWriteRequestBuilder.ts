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
import { JobPositionsDualWrite } from './JobPositionsDualWrite';

/**
 * Request builder class for operations supported on the {@link JobPositionsDualWrite} entity.
 */
export class JobPositionsDualWriteRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<JobPositionsDualWrite<T>, T> {
  /**
   * Returns a request builder for querying all `JobPositionsDualWrite` entities.
   * @returns A request builder for creating requests to retrieve all `JobPositionsDualWrite` entities.
   */
  getAll(): GetAllRequestBuilder<JobPositionsDualWrite<T>, T> {
    return new GetAllRequestBuilder<JobPositionsDualWrite<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `JobPositionsDualWrite` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `JobPositionsDualWrite`.
   */
  create(
    entity: JobPositionsDualWrite<T>
  ): CreateRequestBuilder<JobPositionsDualWrite<T>, T> {
    return new CreateRequestBuilder<JobPositionsDualWrite<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `JobPositionsDualWrite` entity based on its keys.
   * @param positionId Key property. See {@link JobPositionsDualWrite.positionId}.
   * @returns A request builder for creating requests to retrieve one `JobPositionsDualWrite` entity based on its keys.
   */
  getByKey(
    positionId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<JobPositionsDualWrite<T>, T> {
    return new GetByKeyRequestBuilder<JobPositionsDualWrite<T>, T>(
      this.entityApi,
      { PositionId: positionId }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `JobPositionsDualWrite`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `JobPositionsDualWrite`.
   */
  update(
    entity: JobPositionsDualWrite<T>
  ): UpdateRequestBuilder<JobPositionsDualWrite<T>, T> {
    return new UpdateRequestBuilder<JobPositionsDualWrite<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `JobPositionsDualWrite`.
   * @param positionId Key property. See {@link JobPositionsDualWrite.positionId}.
   * @returns A request builder for creating requests that delete an entity of type `JobPositionsDualWrite`.
   */
  delete(positionId: string): DeleteRequestBuilder<JobPositionsDualWrite<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `JobPositionsDualWrite`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `JobPositionsDualWrite` by taking the entity as a parameter.
   */
  delete(
    entity: JobPositionsDualWrite<T>
  ): DeleteRequestBuilder<JobPositionsDualWrite<T>, T>;
  delete(
    positionIdOrEntity: any
  ): DeleteRequestBuilder<JobPositionsDualWrite<T>, T> {
    return new DeleteRequestBuilder<JobPositionsDualWrite<T>, T>(
      this.entityApi,
      positionIdOrEntity instanceof JobPositionsDualWrite
        ? positionIdOrEntity
        : { PositionId: positionIdOrEntity! }
    );
  }
}
