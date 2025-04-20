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
import { WorkerEnrolledBenefits } from './WorkerEnrolledBenefits';

/**
 * Request builder class for operations supported on the {@link WorkerEnrolledBenefits} entity.
 */
export class WorkerEnrolledBenefitsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<WorkerEnrolledBenefits<T>, T> {
  /**
   * Returns a request builder for querying all `WorkerEnrolledBenefits` entities.
   * @returns A request builder for creating requests to retrieve all `WorkerEnrolledBenefits` entities.
   */
  getAll(): GetAllRequestBuilder<WorkerEnrolledBenefits<T>, T> {
    return new GetAllRequestBuilder<WorkerEnrolledBenefits<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `WorkerEnrolledBenefits` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `WorkerEnrolledBenefits`.
   */
  create(
    entity: WorkerEnrolledBenefits<T>
  ): CreateRequestBuilder<WorkerEnrolledBenefits<T>, T> {
    return new CreateRequestBuilder<WorkerEnrolledBenefits<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `WorkerEnrolledBenefits` entity based on its keys.
   * @param benefitPlanId Key property. See {@link WorkerEnrolledBenefits.benefitPlanId}.
   * @param benefitOptionId Key property. See {@link WorkerEnrolledBenefits.benefitOptionId}.
   * @param workerId Key property. See {@link WorkerEnrolledBenefits.workerId}.
   * @param enrollmentStart Key property. See {@link WorkerEnrolledBenefits.enrollmentStart}.
   * @param enrollmentEnd Key property. See {@link WorkerEnrolledBenefits.enrollmentEnd}.
   * @returns A request builder for creating requests to retrieve one `WorkerEnrolledBenefits` entity based on its keys.
   */
  getByKey(
    benefitPlanId: DeserializedType<T, 'Edm.String'>,
    benefitOptionId: DeserializedType<T, 'Edm.String'>,
    workerId: DeserializedType<T, 'Edm.String'>,
    enrollmentStart: DeserializedType<T, 'Edm.DateTimeOffset'>,
    enrollmentEnd: DeserializedType<T, 'Edm.DateTimeOffset'>
  ): GetByKeyRequestBuilder<WorkerEnrolledBenefits<T>, T> {
    return new GetByKeyRequestBuilder<WorkerEnrolledBenefits<T>, T>(
      this.entityApi,
      {
        BenefitPlanId: benefitPlanId,
        BenefitOptionId: benefitOptionId,
        WorkerId: workerId,
        EnrollmentStart: enrollmentStart,
        EnrollmentEnd: enrollmentEnd
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `WorkerEnrolledBenefits`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `WorkerEnrolledBenefits`.
   */
  update(
    entity: WorkerEnrolledBenefits<T>
  ): UpdateRequestBuilder<WorkerEnrolledBenefits<T>, T> {
    return new UpdateRequestBuilder<WorkerEnrolledBenefits<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `WorkerEnrolledBenefits`.
   * @param benefitPlanId Key property. See {@link WorkerEnrolledBenefits.benefitPlanId}.
   * @param benefitOptionId Key property. See {@link WorkerEnrolledBenefits.benefitOptionId}.
   * @param workerId Key property. See {@link WorkerEnrolledBenefits.workerId}.
   * @param enrollmentStart Key property. See {@link WorkerEnrolledBenefits.enrollmentStart}.
   * @param enrollmentEnd Key property. See {@link WorkerEnrolledBenefits.enrollmentEnd}.
   * @returns A request builder for creating requests that delete an entity of type `WorkerEnrolledBenefits`.
   */
  delete(
    benefitPlanId: string,
    benefitOptionId: string,
    workerId: string,
    enrollmentStart: Moment,
    enrollmentEnd: Moment
  ): DeleteRequestBuilder<WorkerEnrolledBenefits<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `WorkerEnrolledBenefits`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `WorkerEnrolledBenefits` by taking the entity as a parameter.
   */
  delete(
    entity: WorkerEnrolledBenefits<T>
  ): DeleteRequestBuilder<WorkerEnrolledBenefits<T>, T>;
  delete(
    benefitPlanIdOrEntity: any,
    benefitOptionId?: string,
    workerId?: string,
    enrollmentStart?: Moment,
    enrollmentEnd?: Moment
  ): DeleteRequestBuilder<WorkerEnrolledBenefits<T>, T> {
    return new DeleteRequestBuilder<WorkerEnrolledBenefits<T>, T>(
      this.entityApi,
      benefitPlanIdOrEntity instanceof WorkerEnrolledBenefits
        ? benefitPlanIdOrEntity
        : {
            BenefitPlanId: benefitPlanIdOrEntity!,
            BenefitOptionId: benefitOptionId!,
            WorkerId: workerId!,
            EnrollmentStart: enrollmentStart!,
            EnrollmentEnd: enrollmentEnd!
          }
    );
  }
}
