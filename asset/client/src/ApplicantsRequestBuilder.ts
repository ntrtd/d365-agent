/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
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
import { Applicants } from './Applicants';

/**
 * Request builder class for operations supported on the {@link Applicants} entity.
 */
export class ApplicantsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<Applicants<T>, T> {
  /**
   * Returns a request builder for querying all `Applicants` entities.
   * @returns A request builder for creating requests to retrieve all `Applicants` entities.
   */
  getAll(): GetAllRequestBuilder<Applicants<T>, T> {
    return new GetAllRequestBuilder<Applicants<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `Applicants` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `Applicants`.
   */
  create(entity: Applicants<T>): CreateRequestBuilder<Applicants<T>, T> {
    return new CreateRequestBuilder<Applicants<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `Applicants` entity based on its keys.
   * @param applicant Key property. See {@link Applicants.applicant}.
   * @returns A request builder for creating requests to retrieve one `Applicants` entity based on its keys.
   */
  getByKey(
    applicant: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<Applicants<T>, T> {
    return new GetByKeyRequestBuilder<Applicants<T>, T>(this.entityApi, {
      Applicant: applicant
    });
  }

  /**
   * Returns a request builder for updating an entity of type `Applicants`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `Applicants`.
   */
  update(entity: Applicants<T>): UpdateRequestBuilder<Applicants<T>, T> {
    return new UpdateRequestBuilder<Applicants<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `Applicants`.
   * @param applicant Key property. See {@link Applicants.applicant}.
   * @returns A request builder for creating requests that delete an entity of type `Applicants`.
   */
  delete(applicant: string): DeleteRequestBuilder<Applicants<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `Applicants`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `Applicants` by taking the entity as a parameter.
   */
  delete(entity: Applicants<T>): DeleteRequestBuilder<Applicants<T>, T>;
  delete(applicantOrEntity: any): DeleteRequestBuilder<Applicants<T>, T> {
    return new DeleteRequestBuilder<Applicants<T>, T>(
      this.entityApi,
      applicantOrEntity instanceof Applicants
        ? applicantOrEntity
        : { Applicant: applicantOrEntity! }
    );
  }
}
