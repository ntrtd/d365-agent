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
import { PayIntV1JobDetails } from './PayIntV1JobDetails';

/**
 * Request builder class for operations supported on the {@link PayIntV1JobDetails} entity.
 */
export class PayIntV1JobDetailsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PayIntV1JobDetails<T>, T> {
  /**
   * Returns a request builder for querying all `PayIntV1JobDetails` entities.
   * @returns A request builder for creating requests to retrieve all `PayIntV1JobDetails` entities.
   */
  getAll(): GetAllRequestBuilder<PayIntV1JobDetails<T>, T> {
    return new GetAllRequestBuilder<PayIntV1JobDetails<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `PayIntV1JobDetails` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PayIntV1JobDetails`.
   */
  create(
    entity: PayIntV1JobDetails<T>
  ): CreateRequestBuilder<PayIntV1JobDetails<T>, T> {
    return new CreateRequestBuilder<PayIntV1JobDetails<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `PayIntV1JobDetails` entity based on its keys.
   * @param jobId Key property. See {@link PayIntV1JobDetails.jobId}.
   * @param validFrom Key property. See {@link PayIntV1JobDetails.validFrom}.
   * @param validTo Key property. See {@link PayIntV1JobDetails.validTo}.
   * @returns A request builder for creating requests to retrieve one `PayIntV1JobDetails` entity based on its keys.
   */
  getByKey(
    jobId: DeserializedType<T, 'Edm.String'>,
    validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>,
    validTo: DeserializedType<T, 'Edm.DateTimeOffset'>
  ): GetByKeyRequestBuilder<PayIntV1JobDetails<T>, T> {
    return new GetByKeyRequestBuilder<PayIntV1JobDetails<T>, T>(
      this.entityApi,
      {
        JobId: jobId,
        ValidFrom: validFrom,
        ValidTo: validTo
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `PayIntV1JobDetails`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PayIntV1JobDetails`.
   */
  update(
    entity: PayIntV1JobDetails<T>
  ): UpdateRequestBuilder<PayIntV1JobDetails<T>, T> {
    return new UpdateRequestBuilder<PayIntV1JobDetails<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `PayIntV1JobDetails`.
   * @param jobId Key property. See {@link PayIntV1JobDetails.jobId}.
   * @param validFrom Key property. See {@link PayIntV1JobDetails.validFrom}.
   * @param validTo Key property. See {@link PayIntV1JobDetails.validTo}.
   * @returns A request builder for creating requests that delete an entity of type `PayIntV1JobDetails`.
   */
  delete(
    jobId: string,
    validFrom: Moment,
    validTo: Moment
  ): DeleteRequestBuilder<PayIntV1JobDetails<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PayIntV1JobDetails`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PayIntV1JobDetails` by taking the entity as a parameter.
   */
  delete(
    entity: PayIntV1JobDetails<T>
  ): DeleteRequestBuilder<PayIntV1JobDetails<T>, T>;
  delete(
    jobIdOrEntity: any,
    validFrom?: Moment,
    validTo?: Moment
  ): DeleteRequestBuilder<PayIntV1JobDetails<T>, T> {
    return new DeleteRequestBuilder<PayIntV1JobDetails<T>, T>(
      this.entityApi,
      jobIdOrEntity instanceof PayIntV1JobDetails
        ? jobIdOrEntity
        : {
            JobId: jobIdOrEntity!,
            ValidFrom: validFrom!,
            ValidTo: validTo!
          }
    );
  }
}
