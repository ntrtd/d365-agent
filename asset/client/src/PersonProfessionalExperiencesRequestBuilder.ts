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
import { PersonProfessionalExperiences } from './PersonProfessionalExperiences';

/**
 * Request builder class for operations supported on the {@link PersonProfessionalExperiences} entity.
 */
export class PersonProfessionalExperiencesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PersonProfessionalExperiences<T>, T> {
  /**
   * Returns a request builder for querying all `PersonProfessionalExperiences` entities.
   * @returns A request builder for creating requests to retrieve all `PersonProfessionalExperiences` entities.
   */
  getAll(): GetAllRequestBuilder<PersonProfessionalExperiences<T>, T> {
    return new GetAllRequestBuilder<PersonProfessionalExperiences<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `PersonProfessionalExperiences` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PersonProfessionalExperiences`.
   */
  create(
    entity: PersonProfessionalExperiences<T>
  ): CreateRequestBuilder<PersonProfessionalExperiences<T>, T> {
    return new CreateRequestBuilder<PersonProfessionalExperiences<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `PersonProfessionalExperiences` entity based on its keys.
   * @param partyNumber Key property. See {@link PersonProfessionalExperiences.partyNumber}.
   * @param startDate Key property. See {@link PersonProfessionalExperiences.startDate}.
   * @param employerPosition Key property. See {@link PersonProfessionalExperiences.employerPosition}.
   * @param employerName Key property. See {@link PersonProfessionalExperiences.employerName}.
   * @returns A request builder for creating requests to retrieve one `PersonProfessionalExperiences` entity based on its keys.
   */
  getByKey(
    partyNumber: DeserializedType<T, 'Edm.String'>,
    startDate: DeserializedType<T, 'Edm.DateTimeOffset'>,
    employerPosition: DeserializedType<T, 'Edm.String'>,
    employerName: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<PersonProfessionalExperiences<T>, T> {
    return new GetByKeyRequestBuilder<PersonProfessionalExperiences<T>, T>(
      this.entityApi,
      {
        PartyNumber: partyNumber,
        StartDate: startDate,
        EmployerPosition: employerPosition,
        EmployerName: employerName
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `PersonProfessionalExperiences`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PersonProfessionalExperiences`.
   */
  update(
    entity: PersonProfessionalExperiences<T>
  ): UpdateRequestBuilder<PersonProfessionalExperiences<T>, T> {
    return new UpdateRequestBuilder<PersonProfessionalExperiences<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `PersonProfessionalExperiences`.
   * @param partyNumber Key property. See {@link PersonProfessionalExperiences.partyNumber}.
   * @param startDate Key property. See {@link PersonProfessionalExperiences.startDate}.
   * @param employerPosition Key property. See {@link PersonProfessionalExperiences.employerPosition}.
   * @param employerName Key property. See {@link PersonProfessionalExperiences.employerName}.
   * @returns A request builder for creating requests that delete an entity of type `PersonProfessionalExperiences`.
   */
  delete(
    partyNumber: string,
    startDate: Moment,
    employerPosition: string,
    employerName: string
  ): DeleteRequestBuilder<PersonProfessionalExperiences<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PersonProfessionalExperiences`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PersonProfessionalExperiences` by taking the entity as a parameter.
   */
  delete(
    entity: PersonProfessionalExperiences<T>
  ): DeleteRequestBuilder<PersonProfessionalExperiences<T>, T>;
  delete(
    partyNumberOrEntity: any,
    startDate?: Moment,
    employerPosition?: string,
    employerName?: string
  ): DeleteRequestBuilder<PersonProfessionalExperiences<T>, T> {
    return new DeleteRequestBuilder<PersonProfessionalExperiences<T>, T>(
      this.entityApi,
      partyNumberOrEntity instanceof PersonProfessionalExperiences
        ? partyNumberOrEntity
        : {
            PartyNumber: partyNumberOrEntity!,
            StartDate: startDate!,
            EmployerPosition: employerPosition!,
            EmployerName: employerName!
          }
    );
  }
}
