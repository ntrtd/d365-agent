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
import { PersonCountrySpecificFields } from './PersonCountrySpecificFields';

/**
 * Request builder class for operations supported on the {@link PersonCountrySpecificFields} entity.
 */
export class PersonCountrySpecificFieldsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PersonCountrySpecificFields<T>, T> {
  /**
   * Returns a request builder for querying all `PersonCountrySpecificFields` entities.
   * @returns A request builder for creating requests to retrieve all `PersonCountrySpecificFields` entities.
   */
  getAll(): GetAllRequestBuilder<PersonCountrySpecificFields<T>, T> {
    return new GetAllRequestBuilder<PersonCountrySpecificFields<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `PersonCountrySpecificFields` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PersonCountrySpecificFields`.
   */
  create(
    entity: PersonCountrySpecificFields<T>
  ): CreateRequestBuilder<PersonCountrySpecificFields<T>, T> {
    return new CreateRequestBuilder<PersonCountrySpecificFields<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `PersonCountrySpecificFields` entity based on its keys.
   * @param partyNumber Key property. See {@link PersonCountrySpecificFields.partyNumber}.
   * @returns A request builder for creating requests to retrieve one `PersonCountrySpecificFields` entity based on its keys.
   */
  getByKey(
    partyNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<PersonCountrySpecificFields<T>, T> {
    return new GetByKeyRequestBuilder<PersonCountrySpecificFields<T>, T>(
      this.entityApi,
      { PartyNumber: partyNumber }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `PersonCountrySpecificFields`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PersonCountrySpecificFields`.
   */
  update(
    entity: PersonCountrySpecificFields<T>
  ): UpdateRequestBuilder<PersonCountrySpecificFields<T>, T> {
    return new UpdateRequestBuilder<PersonCountrySpecificFields<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `PersonCountrySpecificFields`.
   * @param partyNumber Key property. See {@link PersonCountrySpecificFields.partyNumber}.
   * @returns A request builder for creating requests that delete an entity of type `PersonCountrySpecificFields`.
   */
  delete(
    partyNumber: string
  ): DeleteRequestBuilder<PersonCountrySpecificFields<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PersonCountrySpecificFields`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PersonCountrySpecificFields` by taking the entity as a parameter.
   */
  delete(
    entity: PersonCountrySpecificFields<T>
  ): DeleteRequestBuilder<PersonCountrySpecificFields<T>, T>;
  delete(
    partyNumberOrEntity: any
  ): DeleteRequestBuilder<PersonCountrySpecificFields<T>, T> {
    return new DeleteRequestBuilder<PersonCountrySpecificFields<T>, T>(
      this.entityApi,
      partyNumberOrEntity instanceof PersonCountrySpecificFields
        ? partyNumberOrEntity
        : { PartyNumber: partyNumberOrEntity! }
    );
  }
}
