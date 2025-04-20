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
import { WorkerEnrolledBenefitDetails } from './WorkerEnrolledBenefitDetails';

/**
 * Request builder class for operations supported on the {@link WorkerEnrolledBenefitDetails} entity.
 */
export class WorkerEnrolledBenefitDetailsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<WorkerEnrolledBenefitDetails<T>, T> {
  /**
   * Returns a request builder for querying all `WorkerEnrolledBenefitDetails` entities.
   * @returns A request builder for creating requests to retrieve all `WorkerEnrolledBenefitDetails` entities.
   */
  getAll(): GetAllRequestBuilder<WorkerEnrolledBenefitDetails<T>, T> {
    return new GetAllRequestBuilder<WorkerEnrolledBenefitDetails<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `WorkerEnrolledBenefitDetails` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `WorkerEnrolledBenefitDetails`.
   */
  create(
    entity: WorkerEnrolledBenefitDetails<T>
  ): CreateRequestBuilder<WorkerEnrolledBenefitDetails<T>, T> {
    return new CreateRequestBuilder<WorkerEnrolledBenefitDetails<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `WorkerEnrolledBenefitDetails` entity based on its keys.
   * @param benefitId Key property. See {@link WorkerEnrolledBenefitDetails.benefitId}.
   * @param personnelNumber Key property. See {@link WorkerEnrolledBenefitDetails.personnelNumber}.
   * @param enrollmentStart Key property. See {@link WorkerEnrolledBenefitDetails.enrollmentStart}.
   * @param enrollmentEnd Key property. See {@link WorkerEnrolledBenefitDetails.enrollmentEnd}.
   * @param benefitDetailValidFrom Key property. See {@link WorkerEnrolledBenefitDetails.benefitDetailValidFrom}.
   * @param benefitDetailValidTo Key property. See {@link WorkerEnrolledBenefitDetails.benefitDetailValidTo}.
   * @returns A request builder for creating requests to retrieve one `WorkerEnrolledBenefitDetails` entity based on its keys.
   */
  getByKey(
    benefitId: DeserializedType<T, 'Edm.String'>,
    personnelNumber: DeserializedType<T, 'Edm.String'>,
    enrollmentStart: DeserializedType<T, 'Edm.DateTimeOffset'>,
    enrollmentEnd: DeserializedType<T, 'Edm.DateTimeOffset'>,
    benefitDetailValidFrom: DeserializedType<T, 'Edm.DateTimeOffset'>,
    benefitDetailValidTo: DeserializedType<T, 'Edm.DateTimeOffset'>
  ): GetByKeyRequestBuilder<WorkerEnrolledBenefitDetails<T>, T> {
    return new GetByKeyRequestBuilder<WorkerEnrolledBenefitDetails<T>, T>(
      this.entityApi,
      {
        BenefitId: benefitId,
        PersonnelNumber: personnelNumber,
        EnrollmentStart: enrollmentStart,
        EnrollmentEnd: enrollmentEnd,
        BenefitDetailValidFrom: benefitDetailValidFrom,
        BenefitDetailValidTo: benefitDetailValidTo
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `WorkerEnrolledBenefitDetails`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `WorkerEnrolledBenefitDetails`.
   */
  update(
    entity: WorkerEnrolledBenefitDetails<T>
  ): UpdateRequestBuilder<WorkerEnrolledBenefitDetails<T>, T> {
    return new UpdateRequestBuilder<WorkerEnrolledBenefitDetails<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `WorkerEnrolledBenefitDetails`.
   * @param benefitId Key property. See {@link WorkerEnrolledBenefitDetails.benefitId}.
   * @param personnelNumber Key property. See {@link WorkerEnrolledBenefitDetails.personnelNumber}.
   * @param enrollmentStart Key property. See {@link WorkerEnrolledBenefitDetails.enrollmentStart}.
   * @param enrollmentEnd Key property. See {@link WorkerEnrolledBenefitDetails.enrollmentEnd}.
   * @param benefitDetailValidFrom Key property. See {@link WorkerEnrolledBenefitDetails.benefitDetailValidFrom}.
   * @param benefitDetailValidTo Key property. See {@link WorkerEnrolledBenefitDetails.benefitDetailValidTo}.
   * @returns A request builder for creating requests that delete an entity of type `WorkerEnrolledBenefitDetails`.
   */
  delete(
    benefitId: string,
    personnelNumber: string,
    enrollmentStart: Moment,
    enrollmentEnd: Moment,
    benefitDetailValidFrom: Moment,
    benefitDetailValidTo: Moment
  ): DeleteRequestBuilder<WorkerEnrolledBenefitDetails<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `WorkerEnrolledBenefitDetails`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `WorkerEnrolledBenefitDetails` by taking the entity as a parameter.
   */
  delete(
    entity: WorkerEnrolledBenefitDetails<T>
  ): DeleteRequestBuilder<WorkerEnrolledBenefitDetails<T>, T>;
  delete(
    benefitIdOrEntity: any,
    personnelNumber?: string,
    enrollmentStart?: Moment,
    enrollmentEnd?: Moment,
    benefitDetailValidFrom?: Moment,
    benefitDetailValidTo?: Moment
  ): DeleteRequestBuilder<WorkerEnrolledBenefitDetails<T>, T> {
    return new DeleteRequestBuilder<WorkerEnrolledBenefitDetails<T>, T>(
      this.entityApi,
      benefitIdOrEntity instanceof WorkerEnrolledBenefitDetails
        ? benefitIdOrEntity
        : {
            BenefitId: benefitIdOrEntity!,
            PersonnelNumber: personnelNumber!,
            EnrollmentStart: enrollmentStart!,
            EnrollmentEnd: enrollmentEnd!,
            BenefitDetailValidFrom: benefitDetailValidFrom!,
            BenefitDetailValidTo: benefitDetailValidTo!
          }
    );
  }
}
