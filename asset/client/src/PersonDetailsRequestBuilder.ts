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
import { PersonDetails } from './PersonDetails';

/**
 * Request builder class for operations supported on the {@link PersonDetails} entity.
 */
export class PersonDetailsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PersonDetails<T>, T> {
  /**
   * Returns a request builder for querying all `PersonDetails` entities.
   * @returns A request builder for creating requests to retrieve all `PersonDetails` entities.
   */
  getAll(): GetAllRequestBuilder<PersonDetails<T>, T> {
    return new GetAllRequestBuilder<PersonDetails<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `PersonDetails` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PersonDetails`.
   */
  create(entity: PersonDetails<T>): CreateRequestBuilder<PersonDetails<T>, T> {
    return new CreateRequestBuilder<PersonDetails<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `PersonDetails` entity based on its keys.
   * @param partyNumber Key property. See {@link PersonDetails.partyNumber}.
   * @param validFrom Key property. See {@link PersonDetails.validFrom}.
   * @param validTo Key property. See {@link PersonDetails.validTo}.
   * @returns A request builder for creating requests to retrieve one `PersonDetails` entity based on its keys.
   */
  getByKey(
    partyNumber: DeserializedType<T, 'Edm.String'>,
    validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>,
    validTo: DeserializedType<T, 'Edm.DateTimeOffset'>
  ): GetByKeyRequestBuilder<PersonDetails<T>, T> {
    return new GetByKeyRequestBuilder<PersonDetails<T>, T>(this.entityApi, {
      PartyNumber: partyNumber,
      ValidFrom: validFrom,
      ValidTo: validTo
    });
  }

  /**
   * Returns a request builder for updating an entity of type `PersonDetails`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PersonDetails`.
   */
  update(entity: PersonDetails<T>): UpdateRequestBuilder<PersonDetails<T>, T> {
    return new UpdateRequestBuilder<PersonDetails<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `PersonDetails`.
   * @param partyNumber Key property. See {@link PersonDetails.partyNumber}.
   * @param validFrom Key property. See {@link PersonDetails.validFrom}.
   * @param validTo Key property. See {@link PersonDetails.validTo}.
   * @returns A request builder for creating requests that delete an entity of type `PersonDetails`.
   */
  delete(
    partyNumber: string,
    validFrom: Moment,
    validTo: Moment
  ): DeleteRequestBuilder<PersonDetails<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PersonDetails`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PersonDetails` by taking the entity as a parameter.
   */
  delete(entity: PersonDetails<T>): DeleteRequestBuilder<PersonDetails<T>, T>;
  delete(
    partyNumberOrEntity: any,
    validFrom?: Moment,
    validTo?: Moment
  ): DeleteRequestBuilder<PersonDetails<T>, T> {
    return new DeleteRequestBuilder<PersonDetails<T>, T>(
      this.entityApi,
      partyNumberOrEntity instanceof PersonDetails
        ? partyNumberOrEntity
        : {
            PartyNumber: partyNumberOrEntity!,
            ValidFrom: validFrom!,
            ValidTo: validTo!
          }
    );
  }
}
