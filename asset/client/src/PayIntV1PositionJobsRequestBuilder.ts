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
import { PayIntV1PositionJobs } from './PayIntV1PositionJobs';

/**
 * Request builder class for operations supported on the {@link PayIntV1PositionJobs} entity.
 */
export class PayIntV1PositionJobsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PayIntV1PositionJobs<T>, T> {
  /**
   * Returns a request builder for querying all `PayIntV1PositionJobs` entities.
   * @returns A request builder for creating requests to retrieve all `PayIntV1PositionJobs` entities.
   */
  getAll(): GetAllRequestBuilder<PayIntV1PositionJobs<T>, T> {
    return new GetAllRequestBuilder<PayIntV1PositionJobs<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `PayIntV1PositionJobs` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PayIntV1PositionJobs`.
   */
  create(
    entity: PayIntV1PositionJobs<T>
  ): CreateRequestBuilder<PayIntV1PositionJobs<T>, T> {
    return new CreateRequestBuilder<PayIntV1PositionJobs<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `PayIntV1PositionJobs` entity based on its keys.
   * @param positionId Key property. See {@link PayIntV1PositionJobs.positionId}.
   * @param jobId Key property. See {@link PayIntV1PositionJobs.jobId}.
   * @param validFrom Key property. See {@link PayIntV1PositionJobs.validFrom}.
   * @returns A request builder for creating requests to retrieve one `PayIntV1PositionJobs` entity based on its keys.
   */
  getByKey(
    positionId: DeserializedType<T, 'Edm.String'>,
    jobId: DeserializedType<T, 'Edm.String'>,
    validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>
  ): GetByKeyRequestBuilder<PayIntV1PositionJobs<T>, T> {
    return new GetByKeyRequestBuilder<PayIntV1PositionJobs<T>, T>(
      this.entityApi,
      {
        PositionId: positionId,
        JobId: jobId,
        ValidFrom: validFrom
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `PayIntV1PositionJobs`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PayIntV1PositionJobs`.
   */
  update(
    entity: PayIntV1PositionJobs<T>
  ): UpdateRequestBuilder<PayIntV1PositionJobs<T>, T> {
    return new UpdateRequestBuilder<PayIntV1PositionJobs<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `PayIntV1PositionJobs`.
   * @param positionId Key property. See {@link PayIntV1PositionJobs.positionId}.
   * @param jobId Key property. See {@link PayIntV1PositionJobs.jobId}.
   * @param validFrom Key property. See {@link PayIntV1PositionJobs.validFrom}.
   * @returns A request builder for creating requests that delete an entity of type `PayIntV1PositionJobs`.
   */
  delete(
    positionId: string,
    jobId: string,
    validFrom: Moment
  ): DeleteRequestBuilder<PayIntV1PositionJobs<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PayIntV1PositionJobs`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PayIntV1PositionJobs` by taking the entity as a parameter.
   */
  delete(
    entity: PayIntV1PositionJobs<T>
  ): DeleteRequestBuilder<PayIntV1PositionJobs<T>, T>;
  delete(
    positionIdOrEntity: any,
    jobId?: string,
    validFrom?: Moment
  ): DeleteRequestBuilder<PayIntV1PositionJobs<T>, T> {
    return new DeleteRequestBuilder<PayIntV1PositionJobs<T>, T>(
      this.entityApi,
      positionIdOrEntity instanceof PayIntV1PositionJobs
        ? positionIdOrEntity
        : {
            PositionId: positionIdOrEntity!,
            JobId: jobId!,
            ValidFrom: validFrom!
          }
    );
  }
}
