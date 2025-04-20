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
import { WorkerEnrolledBenefitLimits } from './WorkerEnrolledBenefitLimits';

/**
 * Request builder class for operations supported on the {@link WorkerEnrolledBenefitLimits} entity.
 */
export class WorkerEnrolledBenefitLimitsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<WorkerEnrolledBenefitLimits<T>, T> {
  /**
   * Returns a request builder for querying all `WorkerEnrolledBenefitLimits` entities.
   * @returns A request builder for creating requests to retrieve all `WorkerEnrolledBenefitLimits` entities.
   */
  getAll(): GetAllRequestBuilder<WorkerEnrolledBenefitLimits<T>, T> {
    return new GetAllRequestBuilder<WorkerEnrolledBenefitLimits<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `WorkerEnrolledBenefitLimits` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `WorkerEnrolledBenefitLimits`.
   */
  create(
    entity: WorkerEnrolledBenefitLimits<T>
  ): CreateRequestBuilder<WorkerEnrolledBenefitLimits<T>, T> {
    return new CreateRequestBuilder<WorkerEnrolledBenefitLimits<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `WorkerEnrolledBenefitLimits` entity based on its keys.
   * @param benefitId Key property. See {@link WorkerEnrolledBenefitLimits.benefitId}.
   * @param personnelNumber Key property. See {@link WorkerEnrolledBenefitLimits.personnelNumber}.
   * @param enrollmentStart Key property. See {@link WorkerEnrolledBenefitLimits.enrollmentStart}.
   * @param enrollmentEnd Key property. See {@link WorkerEnrolledBenefitLimits.enrollmentEnd}.
   * @returns A request builder for creating requests to retrieve one `WorkerEnrolledBenefitLimits` entity based on its keys.
   */
  getByKey(
    benefitId: DeserializedType<T, 'Edm.String'>,
    personnelNumber: DeserializedType<T, 'Edm.String'>,
    enrollmentStart: DeserializedType<T, 'Edm.DateTimeOffset'>,
    enrollmentEnd: DeserializedType<T, 'Edm.DateTimeOffset'>
  ): GetByKeyRequestBuilder<WorkerEnrolledBenefitLimits<T>, T> {
    return new GetByKeyRequestBuilder<WorkerEnrolledBenefitLimits<T>, T>(
      this.entityApi,
      {
        BenefitId: benefitId,
        PersonnelNumber: personnelNumber,
        EnrollmentStart: enrollmentStart,
        EnrollmentEnd: enrollmentEnd
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `WorkerEnrolledBenefitLimits`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `WorkerEnrolledBenefitLimits`.
   */
  update(
    entity: WorkerEnrolledBenefitLimits<T>
  ): UpdateRequestBuilder<WorkerEnrolledBenefitLimits<T>, T> {
    return new UpdateRequestBuilder<WorkerEnrolledBenefitLimits<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `WorkerEnrolledBenefitLimits`.
   * @param benefitId Key property. See {@link WorkerEnrolledBenefitLimits.benefitId}.
   * @param personnelNumber Key property. See {@link WorkerEnrolledBenefitLimits.personnelNumber}.
   * @param enrollmentStart Key property. See {@link WorkerEnrolledBenefitLimits.enrollmentStart}.
   * @param enrollmentEnd Key property. See {@link WorkerEnrolledBenefitLimits.enrollmentEnd}.
   * @returns A request builder for creating requests that delete an entity of type `WorkerEnrolledBenefitLimits`.
   */
  delete(
    benefitId: string,
    personnelNumber: string,
    enrollmentStart: Moment,
    enrollmentEnd: Moment
  ): DeleteRequestBuilder<WorkerEnrolledBenefitLimits<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `WorkerEnrolledBenefitLimits`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `WorkerEnrolledBenefitLimits` by taking the entity as a parameter.
   */
  delete(
    entity: WorkerEnrolledBenefitLimits<T>
  ): DeleteRequestBuilder<WorkerEnrolledBenefitLimits<T>, T>;
  delete(
    benefitIdOrEntity: any,
    personnelNumber?: string,
    enrollmentStart?: Moment,
    enrollmentEnd?: Moment
  ): DeleteRequestBuilder<WorkerEnrolledBenefitLimits<T>, T> {
    return new DeleteRequestBuilder<WorkerEnrolledBenefitLimits<T>, T>(
      this.entityApi,
      benefitIdOrEntity instanceof WorkerEnrolledBenefitLimits
        ? benefitIdOrEntity
        : {
            BenefitId: benefitIdOrEntity!,
            PersonnelNumber: personnelNumber!,
            EnrollmentStart: enrollmentStart!,
            EnrollmentEnd: enrollmentEnd!
          }
    );
  }
}
