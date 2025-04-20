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
import { ApplicantExams } from './ApplicantExams';

/**
 * Request builder class for operations supported on the {@link ApplicantExams} entity.
 */
export class ApplicantExamsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ApplicantExams<T>, T> {
  /**
   * Returns a request builder for querying all `ApplicantExams` entities.
   * @returns A request builder for creating requests to retrieve all `ApplicantExams` entities.
   */
  getAll(): GetAllRequestBuilder<ApplicantExams<T>, T> {
    return new GetAllRequestBuilder<ApplicantExams<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ApplicantExams` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ApplicantExams`.
   */
  create(
    entity: ApplicantExams<T>
  ): CreateRequestBuilder<ApplicantExams<T>, T> {
    return new CreateRequestBuilder<ApplicantExams<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ApplicantExams` entity based on its keys.
   * @param applicantId Key property. See {@link ApplicantExams.applicantId}.
   * @param testId Key property. See {@link ApplicantExams.testId}.
   * @param requiredBy Key property. See {@link ApplicantExams.requiredBy}.
   * @returns A request builder for creating requests to retrieve one `ApplicantExams` entity based on its keys.
   */
  getByKey(
    applicantId: DeserializedType<T, 'Edm.String'>,
    testId: DeserializedType<T, 'Edm.String'>,
    requiredBy: DeserializedType<T, 'Edm.DateTimeOffset'>
  ): GetByKeyRequestBuilder<ApplicantExams<T>, T> {
    return new GetByKeyRequestBuilder<ApplicantExams<T>, T>(this.entityApi, {
      ApplicantId: applicantId,
      TestId: testId,
      RequiredBy: requiredBy
    });
  }

  /**
   * Returns a request builder for updating an entity of type `ApplicantExams`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ApplicantExams`.
   */
  update(
    entity: ApplicantExams<T>
  ): UpdateRequestBuilder<ApplicantExams<T>, T> {
    return new UpdateRequestBuilder<ApplicantExams<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ApplicantExams`.
   * @param applicantId Key property. See {@link ApplicantExams.applicantId}.
   * @param testId Key property. See {@link ApplicantExams.testId}.
   * @param requiredBy Key property. See {@link ApplicantExams.requiredBy}.
   * @returns A request builder for creating requests that delete an entity of type `ApplicantExams`.
   */
  delete(
    applicantId: string,
    testId: string,
    requiredBy: Moment
  ): DeleteRequestBuilder<ApplicantExams<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ApplicantExams`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ApplicantExams` by taking the entity as a parameter.
   */
  delete(entity: ApplicantExams<T>): DeleteRequestBuilder<ApplicantExams<T>, T>;
  delete(
    applicantIdOrEntity: any,
    testId?: string,
    requiredBy?: Moment
  ): DeleteRequestBuilder<ApplicantExams<T>, T> {
    return new DeleteRequestBuilder<ApplicantExams<T>, T>(
      this.entityApi,
      applicantIdOrEntity instanceof ApplicantExams
        ? applicantIdOrEntity
        : {
            ApplicantId: applicantIdOrEntity!,
            TestId: testId!,
            RequiredBy: requiredBy!
          }
    );
  }
}
