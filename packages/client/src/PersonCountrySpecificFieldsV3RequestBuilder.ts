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
import { PersonCountrySpecificFieldsV3 } from './PersonCountrySpecificFieldsV3';

/**
 * Request builder class for operations supported on the {@link PersonCountrySpecificFieldsV3} entity.
 */
export class PersonCountrySpecificFieldsV3RequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PersonCountrySpecificFieldsV3<T>, T> {
  /**
   * Returns a request builder for querying all `PersonCountrySpecificFieldsV3` entities.
   * @returns A request builder for creating requests to retrieve all `PersonCountrySpecificFieldsV3` entities.
   */
  getAll(): GetAllRequestBuilder<PersonCountrySpecificFieldsV3<T>, T> {
    return new GetAllRequestBuilder<PersonCountrySpecificFieldsV3<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `PersonCountrySpecificFieldsV3` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PersonCountrySpecificFieldsV3`.
   */
  create(
    entity: PersonCountrySpecificFieldsV3<T>
  ): CreateRequestBuilder<PersonCountrySpecificFieldsV3<T>, T> {
    return new CreateRequestBuilder<PersonCountrySpecificFieldsV3<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `PersonCountrySpecificFieldsV3` entity based on its keys.
   * @param partyNumber Key property. See {@link PersonCountrySpecificFieldsV3.partyNumber}.
   * @returns A request builder for creating requests to retrieve one `PersonCountrySpecificFieldsV3` entity based on its keys.
   */
  getByKey(
    partyNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<PersonCountrySpecificFieldsV3<T>, T> {
    return new GetByKeyRequestBuilder<PersonCountrySpecificFieldsV3<T>, T>(
      this.entityApi,
      { PartyNumber: partyNumber }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `PersonCountrySpecificFieldsV3`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PersonCountrySpecificFieldsV3`.
   */
  update(
    entity: PersonCountrySpecificFieldsV3<T>
  ): UpdateRequestBuilder<PersonCountrySpecificFieldsV3<T>, T> {
    return new UpdateRequestBuilder<PersonCountrySpecificFieldsV3<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `PersonCountrySpecificFieldsV3`.
   * @param partyNumber Key property. See {@link PersonCountrySpecificFieldsV3.partyNumber}.
   * @returns A request builder for creating requests that delete an entity of type `PersonCountrySpecificFieldsV3`.
   */
  delete(
    partyNumber: string
  ): DeleteRequestBuilder<PersonCountrySpecificFieldsV3<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PersonCountrySpecificFieldsV3`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PersonCountrySpecificFieldsV3` by taking the entity as a parameter.
   */
  delete(
    entity: PersonCountrySpecificFieldsV3<T>
  ): DeleteRequestBuilder<PersonCountrySpecificFieldsV3<T>, T>;
  delete(
    partyNumberOrEntity: any
  ): DeleteRequestBuilder<PersonCountrySpecificFieldsV3<T>, T> {
    return new DeleteRequestBuilder<PersonCountrySpecificFieldsV3<T>, T>(
      this.entityApi,
      partyNumberOrEntity instanceof PersonCountrySpecificFieldsV3
        ? partyNumberOrEntity
        : { PartyNumber: partyNumberOrEntity! }
    );
  }
}
