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
import { ApplicantInterviews } from './ApplicantInterviews';

/**
 * Request builder class for operations supported on the {@link ApplicantInterviews} entity.
 */
export class ApplicantInterviewsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ApplicantInterviews<T>, T> {
  /**
   * Returns a request builder for querying all `ApplicantInterviews` entities.
   * @returns A request builder for creating requests to retrieve all `ApplicantInterviews` entities.
   */
  getAll(): GetAllRequestBuilder<ApplicantInterviews<T>, T> {
    return new GetAllRequestBuilder<ApplicantInterviews<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ApplicantInterviews` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ApplicantInterviews`.
   */
  create(
    entity: ApplicantInterviews<T>
  ): CreateRequestBuilder<ApplicantInterviews<T>, T> {
    return new CreateRequestBuilder<ApplicantInterviews<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ApplicantInterviews` entity based on its keys.
   * @param dataAreaId Key property. See {@link ApplicantInterviews.dataAreaId}.
   * @param hrmApplicationId Key property. See {@link ApplicantInterviews.hrmApplicationId}.
   * @param start Key property. See {@link ApplicantInterviews.start}.
   * @param end Key property. See {@link ApplicantInterviews.end}.
   * @param recruiterPersonnelNumber Key property. See {@link ApplicantInterviews.recruiterPersonnelNumber}.
   * @returns A request builder for creating requests to retrieve one `ApplicantInterviews` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    hrmApplicationId: DeserializedType<T, 'Edm.String'>,
    start: DeserializedType<T, 'Edm.DateTimeOffset'>,
    end: DeserializedType<T, 'Edm.DateTimeOffset'>,
    recruiterPersonnelNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ApplicantInterviews<T>, T> {
    return new GetByKeyRequestBuilder<ApplicantInterviews<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        hrmApplicationId: hrmApplicationId,
        Start: start,
        End: end,
        Recruiter_PersonnelNumber: recruiterPersonnelNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ApplicantInterviews`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ApplicantInterviews`.
   */
  update(
    entity: ApplicantInterviews<T>
  ): UpdateRequestBuilder<ApplicantInterviews<T>, T> {
    return new UpdateRequestBuilder<ApplicantInterviews<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ApplicantInterviews`.
   * @param dataAreaId Key property. See {@link ApplicantInterviews.dataAreaId}.
   * @param hrmApplicationId Key property. See {@link ApplicantInterviews.hrmApplicationId}.
   * @param start Key property. See {@link ApplicantInterviews.start}.
   * @param end Key property. See {@link ApplicantInterviews.end}.
   * @param recruiterPersonnelNumber Key property. See {@link ApplicantInterviews.recruiterPersonnelNumber}.
   * @returns A request builder for creating requests that delete an entity of type `ApplicantInterviews`.
   */
  delete(
    dataAreaId: string,
    hrmApplicationId: string,
    start: Moment,
    end: Moment,
    recruiterPersonnelNumber: string
  ): DeleteRequestBuilder<ApplicantInterviews<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ApplicantInterviews`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ApplicantInterviews` by taking the entity as a parameter.
   */
  delete(
    entity: ApplicantInterviews<T>
  ): DeleteRequestBuilder<ApplicantInterviews<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    hrmApplicationId?: string,
    start?: Moment,
    end?: Moment,
    recruiterPersonnelNumber?: string
  ): DeleteRequestBuilder<ApplicantInterviews<T>, T> {
    return new DeleteRequestBuilder<ApplicantInterviews<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ApplicantInterviews
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            hrmApplicationId: hrmApplicationId!,
            Start: start!,
            End: end!,
            Recruiter_PersonnelNumber: recruiterPersonnelNumber!
          }
    );
  }
}
