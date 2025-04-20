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
import { WorkerGarnishmentDetails } from './WorkerGarnishmentDetails';

/**
 * Request builder class for operations supported on the {@link WorkerGarnishmentDetails} entity.
 */
export class WorkerGarnishmentDetailsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<WorkerGarnishmentDetails<T>, T> {
  /**
   * Returns a request builder for querying all `WorkerGarnishmentDetails` entities.
   * @returns A request builder for creating requests to retrieve all `WorkerGarnishmentDetails` entities.
   */
  getAll(): GetAllRequestBuilder<WorkerGarnishmentDetails<T>, T> {
    return new GetAllRequestBuilder<WorkerGarnishmentDetails<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `WorkerGarnishmentDetails` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `WorkerGarnishmentDetails`.
   */
  create(
    entity: WorkerGarnishmentDetails<T>
  ): CreateRequestBuilder<WorkerGarnishmentDetails<T>, T> {
    return new CreateRequestBuilder<WorkerGarnishmentDetails<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `WorkerGarnishmentDetails` entity based on its keys.
   * @param benefitId Key property. See {@link WorkerGarnishmentDetails.benefitId}.
   * @param personnelNumber Key property. See {@link WorkerGarnishmentDetails.personnelNumber}.
   * @param enrollmentStart Key property. See {@link WorkerGarnishmentDetails.enrollmentStart}.
   * @param enrollmentEnd Key property. See {@link WorkerGarnishmentDetails.enrollmentEnd}.
   * @returns A request builder for creating requests to retrieve one `WorkerGarnishmentDetails` entity based on its keys.
   */
  getByKey(
    benefitId: DeserializedType<T, 'Edm.String'>,
    personnelNumber: DeserializedType<T, 'Edm.String'>,
    enrollmentStart: DeserializedType<T, 'Edm.DateTimeOffset'>,
    enrollmentEnd: DeserializedType<T, 'Edm.DateTimeOffset'>
  ): GetByKeyRequestBuilder<WorkerGarnishmentDetails<T>, T> {
    return new GetByKeyRequestBuilder<WorkerGarnishmentDetails<T>, T>(
      this.entityApi,
      {
        BenefitID: benefitId,
        PersonnelNumber: personnelNumber,
        EnrollmentStart: enrollmentStart,
        EnrollmentEnd: enrollmentEnd
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `WorkerGarnishmentDetails`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `WorkerGarnishmentDetails`.
   */
  update(
    entity: WorkerGarnishmentDetails<T>
  ): UpdateRequestBuilder<WorkerGarnishmentDetails<T>, T> {
    return new UpdateRequestBuilder<WorkerGarnishmentDetails<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `WorkerGarnishmentDetails`.
   * @param benefitId Key property. See {@link WorkerGarnishmentDetails.benefitId}.
   * @param personnelNumber Key property. See {@link WorkerGarnishmentDetails.personnelNumber}.
   * @param enrollmentStart Key property. See {@link WorkerGarnishmentDetails.enrollmentStart}.
   * @param enrollmentEnd Key property. See {@link WorkerGarnishmentDetails.enrollmentEnd}.
   * @returns A request builder for creating requests that delete an entity of type `WorkerGarnishmentDetails`.
   */
  delete(
    benefitId: string,
    personnelNumber: string,
    enrollmentStart: Moment,
    enrollmentEnd: Moment
  ): DeleteRequestBuilder<WorkerGarnishmentDetails<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `WorkerGarnishmentDetails`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `WorkerGarnishmentDetails` by taking the entity as a parameter.
   */
  delete(
    entity: WorkerGarnishmentDetails<T>
  ): DeleteRequestBuilder<WorkerGarnishmentDetails<T>, T>;
  delete(
    benefitIdOrEntity: any,
    personnelNumber?: string,
    enrollmentStart?: Moment,
    enrollmentEnd?: Moment
  ): DeleteRequestBuilder<WorkerGarnishmentDetails<T>, T> {
    return new DeleteRequestBuilder<WorkerGarnishmentDetails<T>, T>(
      this.entityApi,
      benefitIdOrEntity instanceof WorkerGarnishmentDetails
        ? benefitIdOrEntity
        : {
            BenefitID: benefitIdOrEntity!,
            PersonnelNumber: personnelNumber!,
            EnrollmentStart: enrollmentStart!,
            EnrollmentEnd: enrollmentEnd!
          }
    );
  }
}
