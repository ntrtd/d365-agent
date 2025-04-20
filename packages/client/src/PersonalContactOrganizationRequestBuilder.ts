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
import { PersonalContactOrganization } from './PersonalContactOrganization';

/**
 * Request builder class for operations supported on the {@link PersonalContactOrganization} entity.
 */
export class PersonalContactOrganizationRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PersonalContactOrganization<T>, T> {
  /**
   * Returns a request builder for querying all `PersonalContactOrganization` entities.
   * @returns A request builder for creating requests to retrieve all `PersonalContactOrganization` entities.
   */
  getAll(): GetAllRequestBuilder<PersonalContactOrganization<T>, T> {
    return new GetAllRequestBuilder<PersonalContactOrganization<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `PersonalContactOrganization` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PersonalContactOrganization`.
   */
  create(
    entity: PersonalContactOrganization<T>
  ): CreateRequestBuilder<PersonalContactOrganization<T>, T> {
    return new CreateRequestBuilder<PersonalContactOrganization<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `PersonalContactOrganization` entity based on its keys.
   * @param workerPersonnelNumber Key property. See {@link PersonalContactOrganization.workerPersonnelNumber}.
   * @param contactOrganizationPartyNumber Key property. See {@link PersonalContactOrganization.contactOrganizationPartyNumber}.
   * @returns A request builder for creating requests to retrieve one `PersonalContactOrganization` entity based on its keys.
   */
  getByKey(
    workerPersonnelNumber: DeserializedType<T, 'Edm.String'>,
    contactOrganizationPartyNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<PersonalContactOrganization<T>, T> {
    return new GetByKeyRequestBuilder<PersonalContactOrganization<T>, T>(
      this.entityApi,
      {
        WorkerPersonnelNumber: workerPersonnelNumber,
        ContactOrganizationPartyNumber: contactOrganizationPartyNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `PersonalContactOrganization`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PersonalContactOrganization`.
   */
  update(
    entity: PersonalContactOrganization<T>
  ): UpdateRequestBuilder<PersonalContactOrganization<T>, T> {
    return new UpdateRequestBuilder<PersonalContactOrganization<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `PersonalContactOrganization`.
   * @param workerPersonnelNumber Key property. See {@link PersonalContactOrganization.workerPersonnelNumber}.
   * @param contactOrganizationPartyNumber Key property. See {@link PersonalContactOrganization.contactOrganizationPartyNumber}.
   * @returns A request builder for creating requests that delete an entity of type `PersonalContactOrganization`.
   */
  delete(
    workerPersonnelNumber: string,
    contactOrganizationPartyNumber: string
  ): DeleteRequestBuilder<PersonalContactOrganization<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PersonalContactOrganization`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PersonalContactOrganization` by taking the entity as a parameter.
   */
  delete(
    entity: PersonalContactOrganization<T>
  ): DeleteRequestBuilder<PersonalContactOrganization<T>, T>;
  delete(
    workerPersonnelNumberOrEntity: any,
    contactOrganizationPartyNumber?: string
  ): DeleteRequestBuilder<PersonalContactOrganization<T>, T> {
    return new DeleteRequestBuilder<PersonalContactOrganization<T>, T>(
      this.entityApi,
      workerPersonnelNumberOrEntity instanceof PersonalContactOrganization
        ? workerPersonnelNumberOrEntity
        : {
            WorkerPersonnelNumber: workerPersonnelNumberOrEntity!,
            ContactOrganizationPartyNumber: contactOrganizationPartyNumber!
          }
    );
  }
}
