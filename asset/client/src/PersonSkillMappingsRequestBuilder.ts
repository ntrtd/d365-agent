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
import { PersonSkillMappings } from './PersonSkillMappings';

/**
 * Request builder class for operations supported on the {@link PersonSkillMappings} entity.
 */
export class PersonSkillMappingsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PersonSkillMappings<T>, T> {
  /**
   * Returns a request builder for querying all `PersonSkillMappings` entities.
   * @returns A request builder for creating requests to retrieve all `PersonSkillMappings` entities.
   */
  getAll(): GetAllRequestBuilder<PersonSkillMappings<T>, T> {
    return new GetAllRequestBuilder<PersonSkillMappings<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `PersonSkillMappings` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PersonSkillMappings`.
   */
  create(
    entity: PersonSkillMappings<T>
  ): CreateRequestBuilder<PersonSkillMappings<T>, T> {
    return new CreateRequestBuilder<PersonSkillMappings<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `PersonSkillMappings` entity based on its keys.
   * @param partyNumber Key property. See {@link PersonSkillMappings.partyNumber}.
   * @returns A request builder for creating requests to retrieve one `PersonSkillMappings` entity based on its keys.
   */
  getByKey(
    partyNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<PersonSkillMappings<T>, T> {
    return new GetByKeyRequestBuilder<PersonSkillMappings<T>, T>(
      this.entityApi,
      { PartyNumber: partyNumber }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `PersonSkillMappings`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PersonSkillMappings`.
   */
  update(
    entity: PersonSkillMappings<T>
  ): UpdateRequestBuilder<PersonSkillMappings<T>, T> {
    return new UpdateRequestBuilder<PersonSkillMappings<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `PersonSkillMappings`.
   * @param partyNumber Key property. See {@link PersonSkillMappings.partyNumber}.
   * @returns A request builder for creating requests that delete an entity of type `PersonSkillMappings`.
   */
  delete(partyNumber: string): DeleteRequestBuilder<PersonSkillMappings<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PersonSkillMappings`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PersonSkillMappings` by taking the entity as a parameter.
   */
  delete(
    entity: PersonSkillMappings<T>
  ): DeleteRequestBuilder<PersonSkillMappings<T>, T>;
  delete(
    partyNumberOrEntity: any
  ): DeleteRequestBuilder<PersonSkillMappings<T>, T> {
    return new DeleteRequestBuilder<PersonSkillMappings<T>, T>(
      this.entityApi,
      partyNumberOrEntity instanceof PersonSkillMappings
        ? partyNumberOrEntity
        : { PartyNumber: partyNumberOrEntity! }
    );
  }
}
