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
import { WorkerEnrolledBenefitInquiries } from './WorkerEnrolledBenefitInquiries';

/**
 * Request builder class for operations supported on the {@link WorkerEnrolledBenefitInquiries} entity.
 */
export class WorkerEnrolledBenefitInquiriesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<WorkerEnrolledBenefitInquiries<T>, T> {
  /**
   * Returns a request builder for querying all `WorkerEnrolledBenefitInquiries` entities.
   * @returns A request builder for creating requests to retrieve all `WorkerEnrolledBenefitInquiries` entities.
   */
  getAll(): GetAllRequestBuilder<WorkerEnrolledBenefitInquiries<T>, T> {
    return new GetAllRequestBuilder<WorkerEnrolledBenefitInquiries<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `WorkerEnrolledBenefitInquiries` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `WorkerEnrolledBenefitInquiries`.
   */
  create(
    entity: WorkerEnrolledBenefitInquiries<T>
  ): CreateRequestBuilder<WorkerEnrolledBenefitInquiries<T>, T> {
    return new CreateRequestBuilder<WorkerEnrolledBenefitInquiries<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `WorkerEnrolledBenefitInquiries` entity based on its keys.
   * @param validFrom Key property. See {@link WorkerEnrolledBenefitInquiries.validFrom}.
   * @param validTo Key property. See {@link WorkerEnrolledBenefitInquiries.validTo}.
   * @returns A request builder for creating requests to retrieve one `WorkerEnrolledBenefitInquiries` entity based on its keys.
   */
  getByKey(
    validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>,
    validTo: DeserializedType<T, 'Edm.DateTimeOffset'>
  ): GetByKeyRequestBuilder<WorkerEnrolledBenefitInquiries<T>, T> {
    return new GetByKeyRequestBuilder<WorkerEnrolledBenefitInquiries<T>, T>(
      this.entityApi,
      {
        ValidFrom: validFrom,
        ValidTo: validTo
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `WorkerEnrolledBenefitInquiries`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `WorkerEnrolledBenefitInquiries`.
   */
  update(
    entity: WorkerEnrolledBenefitInquiries<T>
  ): UpdateRequestBuilder<WorkerEnrolledBenefitInquiries<T>, T> {
    return new UpdateRequestBuilder<WorkerEnrolledBenefitInquiries<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `WorkerEnrolledBenefitInquiries`.
   * @param validFrom Key property. See {@link WorkerEnrolledBenefitInquiries.validFrom}.
   * @param validTo Key property. See {@link WorkerEnrolledBenefitInquiries.validTo}.
   * @returns A request builder for creating requests that delete an entity of type `WorkerEnrolledBenefitInquiries`.
   */
  delete(
    validFrom: Moment,
    validTo: Moment
  ): DeleteRequestBuilder<WorkerEnrolledBenefitInquiries<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `WorkerEnrolledBenefitInquiries`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `WorkerEnrolledBenefitInquiries` by taking the entity as a parameter.
   */
  delete(
    entity: WorkerEnrolledBenefitInquiries<T>
  ): DeleteRequestBuilder<WorkerEnrolledBenefitInquiries<T>, T>;
  delete(
    validFromOrEntity: any,
    validTo?: Moment
  ): DeleteRequestBuilder<WorkerEnrolledBenefitInquiries<T>, T> {
    return new DeleteRequestBuilder<WorkerEnrolledBenefitInquiries<T>, T>(
      this.entityApi,
      validFromOrEntity instanceof WorkerEnrolledBenefitInquiries
        ? validFromOrEntity
        : {
            ValidFrom: validFromOrEntity!,
            ValidTo: validTo!
          }
    );
  }
}
