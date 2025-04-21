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
import { PositionJobs } from './PositionJobs';

/**
 * Request builder class for operations supported on the {@link PositionJobs} entity.
 */
export class PositionJobsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PositionJobs<T>, T> {
  /**
   * Returns a request builder for querying all `PositionJobs` entities.
   * @returns A request builder for creating requests to retrieve all `PositionJobs` entities.
   */
  getAll(): GetAllRequestBuilder<PositionJobs<T>, T> {
    return new GetAllRequestBuilder<PositionJobs<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `PositionJobs` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PositionJobs`.
   */
  create(entity: PositionJobs<T>): CreateRequestBuilder<PositionJobs<T>, T> {
    return new CreateRequestBuilder<PositionJobs<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `PositionJobs` entity based on its keys.
   * @param positionId Key property. See {@link PositionJobs.positionId}.
   * @param jobId Key property. See {@link PositionJobs.jobId}.
   * @param validFrom Key property. See {@link PositionJobs.validFrom}.
   * @returns A request builder for creating requests to retrieve one `PositionJobs` entity based on its keys.
   */
  getByKey(
    positionId: DeserializedType<T, 'Edm.String'>,
    jobId: DeserializedType<T, 'Edm.String'>,
    validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>
  ): GetByKeyRequestBuilder<PositionJobs<T>, T> {
    return new GetByKeyRequestBuilder<PositionJobs<T>, T>(this.entityApi, {
      PositionId: positionId,
      JobId: jobId,
      ValidFrom: validFrom
    });
  }

  /**
   * Returns a request builder for updating an entity of type `PositionJobs`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PositionJobs`.
   */
  update(entity: PositionJobs<T>): UpdateRequestBuilder<PositionJobs<T>, T> {
    return new UpdateRequestBuilder<PositionJobs<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `PositionJobs`.
   * @param positionId Key property. See {@link PositionJobs.positionId}.
   * @param jobId Key property. See {@link PositionJobs.jobId}.
   * @param validFrom Key property. See {@link PositionJobs.validFrom}.
   * @returns A request builder for creating requests that delete an entity of type `PositionJobs`.
   */
  delete(
    positionId: string,
    jobId: string,
    validFrom: Moment
  ): DeleteRequestBuilder<PositionJobs<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PositionJobs`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PositionJobs` by taking the entity as a parameter.
   */
  delete(entity: PositionJobs<T>): DeleteRequestBuilder<PositionJobs<T>, T>;
  delete(
    positionIdOrEntity: any,
    jobId?: string,
    validFrom?: Moment
  ): DeleteRequestBuilder<PositionJobs<T>, T> {
    return new DeleteRequestBuilder<PositionJobs<T>, T>(
      this.entityApi,
      positionIdOrEntity instanceof PositionJobs
        ? positionIdOrEntity
        : {
            PositionId: positionIdOrEntity!,
            JobId: jobId!,
            ValidFrom: validFrom!
          }
    );
  }
}
