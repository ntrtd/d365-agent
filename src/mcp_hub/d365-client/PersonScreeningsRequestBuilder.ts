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
import { PersonScreenings } from './PersonScreenings';

/**
 * Request builder class for operations supported on the {@link PersonScreenings} entity.
 */
export class PersonScreeningsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PersonScreenings<T>, T> {
  /**
   * Returns a request builder for querying all `PersonScreenings` entities.
   * @returns A request builder for creating requests to retrieve all `PersonScreenings` entities.
   */
  getAll(): GetAllRequestBuilder<PersonScreenings<T>, T> {
    return new GetAllRequestBuilder<PersonScreenings<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `PersonScreenings` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PersonScreenings`.
   */
  create(
    entity: PersonScreenings<T>
  ): CreateRequestBuilder<PersonScreenings<T>, T> {
    return new CreateRequestBuilder<PersonScreenings<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `PersonScreenings` entity based on its keys.
   * @param partyNumber Key property. See {@link PersonScreenings.partyNumber}.
   * @param screeningTypeId Key property. See {@link PersonScreenings.screeningTypeId}.
   * @param requiredBy Key property. See {@link PersonScreenings.requiredBy}.
   * @returns A request builder for creating requests to retrieve one `PersonScreenings` entity based on its keys.
   */
  getByKey(
    partyNumber: DeserializedType<T, 'Edm.String'>,
    screeningTypeId: DeserializedType<T, 'Edm.String'>,
    requiredBy: DeserializedType<T, 'Edm.DateTimeOffset'>
  ): GetByKeyRequestBuilder<PersonScreenings<T>, T> {
    return new GetByKeyRequestBuilder<PersonScreenings<T>, T>(this.entityApi, {
      PartyNumber: partyNumber,
      ScreeningTypeId: screeningTypeId,
      RequiredBy: requiredBy
    });
  }

  /**
   * Returns a request builder for updating an entity of type `PersonScreenings`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PersonScreenings`.
   */
  update(
    entity: PersonScreenings<T>
  ): UpdateRequestBuilder<PersonScreenings<T>, T> {
    return new UpdateRequestBuilder<PersonScreenings<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `PersonScreenings`.
   * @param partyNumber Key property. See {@link PersonScreenings.partyNumber}.
   * @param screeningTypeId Key property. See {@link PersonScreenings.screeningTypeId}.
   * @param requiredBy Key property. See {@link PersonScreenings.requiredBy}.
   * @returns A request builder for creating requests that delete an entity of type `PersonScreenings`.
   */
  delete(
    partyNumber: string,
    screeningTypeId: string,
    requiredBy: Moment
  ): DeleteRequestBuilder<PersonScreenings<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PersonScreenings`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PersonScreenings` by taking the entity as a parameter.
   */
  delete(
    entity: PersonScreenings<T>
  ): DeleteRequestBuilder<PersonScreenings<T>, T>;
  delete(
    partyNumberOrEntity: any,
    screeningTypeId?: string,
    requiredBy?: Moment
  ): DeleteRequestBuilder<PersonScreenings<T>, T> {
    return new DeleteRequestBuilder<PersonScreenings<T>, T>(
      this.entityApi,
      partyNumberOrEntity instanceof PersonScreenings
        ? partyNumberOrEntity
        : {
            PartyNumber: partyNumberOrEntity!,
            ScreeningTypeId: screeningTypeId!,
            RequiredBy: requiredBy!
          }
    );
  }
}
