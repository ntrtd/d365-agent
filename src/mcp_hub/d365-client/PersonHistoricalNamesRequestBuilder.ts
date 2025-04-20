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
import { PersonHistoricalNames } from './PersonHistoricalNames';

/**
 * Request builder class for operations supported on the {@link PersonHistoricalNames} entity.
 */
export class PersonHistoricalNamesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PersonHistoricalNames<T>, T> {
  /**
   * Returns a request builder for querying all `PersonHistoricalNames` entities.
   * @returns A request builder for creating requests to retrieve all `PersonHistoricalNames` entities.
   */
  getAll(): GetAllRequestBuilder<PersonHistoricalNames<T>, T> {
    return new GetAllRequestBuilder<PersonHistoricalNames<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `PersonHistoricalNames` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PersonHistoricalNames`.
   */
  create(
    entity: PersonHistoricalNames<T>
  ): CreateRequestBuilder<PersonHistoricalNames<T>, T> {
    return new CreateRequestBuilder<PersonHistoricalNames<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `PersonHistoricalNames` entity based on its keys.
   * @param partyNumber Key property. See {@link PersonHistoricalNames.partyNumber}.
   * @param validFrom Key property. See {@link PersonHistoricalNames.validFrom}.
   * @returns A request builder for creating requests to retrieve one `PersonHistoricalNames` entity based on its keys.
   */
  getByKey(
    partyNumber: DeserializedType<T, 'Edm.String'>,
    validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>
  ): GetByKeyRequestBuilder<PersonHistoricalNames<T>, T> {
    return new GetByKeyRequestBuilder<PersonHistoricalNames<T>, T>(
      this.entityApi,
      {
        PartyNumber: partyNumber,
        ValidFrom: validFrom
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `PersonHistoricalNames`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PersonHistoricalNames`.
   */
  update(
    entity: PersonHistoricalNames<T>
  ): UpdateRequestBuilder<PersonHistoricalNames<T>, T> {
    return new UpdateRequestBuilder<PersonHistoricalNames<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `PersonHistoricalNames`.
   * @param partyNumber Key property. See {@link PersonHistoricalNames.partyNumber}.
   * @param validFrom Key property. See {@link PersonHistoricalNames.validFrom}.
   * @returns A request builder for creating requests that delete an entity of type `PersonHistoricalNames`.
   */
  delete(
    partyNumber: string,
    validFrom: Moment
  ): DeleteRequestBuilder<PersonHistoricalNames<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PersonHistoricalNames`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PersonHistoricalNames` by taking the entity as a parameter.
   */
  delete(
    entity: PersonHistoricalNames<T>
  ): DeleteRequestBuilder<PersonHistoricalNames<T>, T>;
  delete(
    partyNumberOrEntity: any,
    validFrom?: Moment
  ): DeleteRequestBuilder<PersonHistoricalNames<T>, T> {
    return new DeleteRequestBuilder<PersonHistoricalNames<T>, T>(
      this.entityApi,
      partyNumberOrEntity instanceof PersonHistoricalNames
        ? partyNumberOrEntity
        : {
            PartyNumber: partyNumberOrEntity!,
            ValidFrom: validFrom!
          }
    );
  }
}
