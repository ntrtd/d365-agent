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
import { PersonCountrySpecificFieldsV2 } from './PersonCountrySpecificFieldsV2';

/**
 * Request builder class for operations supported on the {@link PersonCountrySpecificFieldsV2} entity.
 */
export class PersonCountrySpecificFieldsV2RequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PersonCountrySpecificFieldsV2<T>, T> {
  /**
   * Returns a request builder for querying all `PersonCountrySpecificFieldsV2` entities.
   * @returns A request builder for creating requests to retrieve all `PersonCountrySpecificFieldsV2` entities.
   */
  getAll(): GetAllRequestBuilder<PersonCountrySpecificFieldsV2<T>, T> {
    return new GetAllRequestBuilder<PersonCountrySpecificFieldsV2<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `PersonCountrySpecificFieldsV2` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PersonCountrySpecificFieldsV2`.
   */
  create(
    entity: PersonCountrySpecificFieldsV2<T>
  ): CreateRequestBuilder<PersonCountrySpecificFieldsV2<T>, T> {
    return new CreateRequestBuilder<PersonCountrySpecificFieldsV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `PersonCountrySpecificFieldsV2` entity based on its keys.
   * @param partyNumber Key property. See {@link PersonCountrySpecificFieldsV2.partyNumber}.
   * @returns A request builder for creating requests to retrieve one `PersonCountrySpecificFieldsV2` entity based on its keys.
   */
  getByKey(
    partyNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<PersonCountrySpecificFieldsV2<T>, T> {
    return new GetByKeyRequestBuilder<PersonCountrySpecificFieldsV2<T>, T>(
      this.entityApi,
      { PartyNumber: partyNumber }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `PersonCountrySpecificFieldsV2`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PersonCountrySpecificFieldsV2`.
   */
  update(
    entity: PersonCountrySpecificFieldsV2<T>
  ): UpdateRequestBuilder<PersonCountrySpecificFieldsV2<T>, T> {
    return new UpdateRequestBuilder<PersonCountrySpecificFieldsV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `PersonCountrySpecificFieldsV2`.
   * @param partyNumber Key property. See {@link PersonCountrySpecificFieldsV2.partyNumber}.
   * @returns A request builder for creating requests that delete an entity of type `PersonCountrySpecificFieldsV2`.
   */
  delete(
    partyNumber: string
  ): DeleteRequestBuilder<PersonCountrySpecificFieldsV2<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PersonCountrySpecificFieldsV2`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PersonCountrySpecificFieldsV2` by taking the entity as a parameter.
   */
  delete(
    entity: PersonCountrySpecificFieldsV2<T>
  ): DeleteRequestBuilder<PersonCountrySpecificFieldsV2<T>, T>;
  delete(
    partyNumberOrEntity: any
  ): DeleteRequestBuilder<PersonCountrySpecificFieldsV2<T>, T> {
    return new DeleteRequestBuilder<PersonCountrySpecificFieldsV2<T>, T>(
      this.entityApi,
      partyNumberOrEntity instanceof PersonCountrySpecificFieldsV2
        ? partyNumberOrEntity
        : { PartyNumber: partyNumberOrEntity! }
    );
  }
}
