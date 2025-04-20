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
import { PersonExams } from './PersonExams';

/**
 * Request builder class for operations supported on the {@link PersonExams} entity.
 */
export class PersonExamsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PersonExams<T>, T> {
  /**
   * Returns a request builder for querying all `PersonExams` entities.
   * @returns A request builder for creating requests to retrieve all `PersonExams` entities.
   */
  getAll(): GetAllRequestBuilder<PersonExams<T>, T> {
    return new GetAllRequestBuilder<PersonExams<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `PersonExams` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PersonExams`.
   */
  create(entity: PersonExams<T>): CreateRequestBuilder<PersonExams<T>, T> {
    return new CreateRequestBuilder<PersonExams<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `PersonExams` entity based on its keys.
   * @param partyNumber Key property. See {@link PersonExams.partyNumber}.
   * @param testId Key property. See {@link PersonExams.testId}.
   * @param requiredBy Key property. See {@link PersonExams.requiredBy}.
   * @returns A request builder for creating requests to retrieve one `PersonExams` entity based on its keys.
   */
  getByKey(
    partyNumber: DeserializedType<T, 'Edm.String'>,
    testId: DeserializedType<T, 'Edm.String'>,
    requiredBy: DeserializedType<T, 'Edm.DateTimeOffset'>
  ): GetByKeyRequestBuilder<PersonExams<T>, T> {
    return new GetByKeyRequestBuilder<PersonExams<T>, T>(this.entityApi, {
      PartyNumber: partyNumber,
      TestId: testId,
      RequiredBy: requiredBy
    });
  }

  /**
   * Returns a request builder for updating an entity of type `PersonExams`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PersonExams`.
   */
  update(entity: PersonExams<T>): UpdateRequestBuilder<PersonExams<T>, T> {
    return new UpdateRequestBuilder<PersonExams<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `PersonExams`.
   * @param partyNumber Key property. See {@link PersonExams.partyNumber}.
   * @param testId Key property. See {@link PersonExams.testId}.
   * @param requiredBy Key property. See {@link PersonExams.requiredBy}.
   * @returns A request builder for creating requests that delete an entity of type `PersonExams`.
   */
  delete(
    partyNumber: string,
    testId: string,
    requiredBy: Moment
  ): DeleteRequestBuilder<PersonExams<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PersonExams`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PersonExams` by taking the entity as a parameter.
   */
  delete(entity: PersonExams<T>): DeleteRequestBuilder<PersonExams<T>, T>;
  delete(
    partyNumberOrEntity: any,
    testId?: string,
    requiredBy?: Moment
  ): DeleteRequestBuilder<PersonExams<T>, T> {
    return new DeleteRequestBuilder<PersonExams<T>, T>(
      this.entityApi,
      partyNumberOrEntity instanceof PersonExams
        ? partyNumberOrEntity
        : {
            PartyNumber: partyNumberOrEntity!,
            TestId: testId!,
            RequiredBy: requiredBy!
          }
    );
  }
}
