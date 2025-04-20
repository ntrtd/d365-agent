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
import { PersonUsers } from './PersonUsers';

/**
 * Request builder class for operations supported on the {@link PersonUsers} entity.
 */
export class PersonUsersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PersonUsers<T>, T> {
  /**
   * Returns a request builder for querying all `PersonUsers` entities.
   * @returns A request builder for creating requests to retrieve all `PersonUsers` entities.
   */
  getAll(): GetAllRequestBuilder<PersonUsers<T>, T> {
    return new GetAllRequestBuilder<PersonUsers<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `PersonUsers` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PersonUsers`.
   */
  create(entity: PersonUsers<T>): CreateRequestBuilder<PersonUsers<T>, T> {
    return new CreateRequestBuilder<PersonUsers<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `PersonUsers` entity based on its keys.
   * @param userId Key property. See {@link PersonUsers.userId}.
   * @param partyNumber Key property. See {@link PersonUsers.partyNumber}.
   * @param validFrom Key property. See {@link PersonUsers.validFrom}.
   * @returns A request builder for creating requests to retrieve one `PersonUsers` entity based on its keys.
   */
  getByKey(
    userId: DeserializedType<T, 'Edm.String'>,
    partyNumber: DeserializedType<T, 'Edm.String'>,
    validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>
  ): GetByKeyRequestBuilder<PersonUsers<T>, T> {
    return new GetByKeyRequestBuilder<PersonUsers<T>, T>(this.entityApi, {
      UserId: userId,
      PartyNumber: partyNumber,
      ValidFrom: validFrom
    });
  }

  /**
   * Returns a request builder for updating an entity of type `PersonUsers`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PersonUsers`.
   */
  update(entity: PersonUsers<T>): UpdateRequestBuilder<PersonUsers<T>, T> {
    return new UpdateRequestBuilder<PersonUsers<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `PersonUsers`.
   * @param userId Key property. See {@link PersonUsers.userId}.
   * @param partyNumber Key property. See {@link PersonUsers.partyNumber}.
   * @param validFrom Key property. See {@link PersonUsers.validFrom}.
   * @returns A request builder for creating requests that delete an entity of type `PersonUsers`.
   */
  delete(
    userId: string,
    partyNumber: string,
    validFrom: Moment
  ): DeleteRequestBuilder<PersonUsers<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PersonUsers`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PersonUsers` by taking the entity as a parameter.
   */
  delete(entity: PersonUsers<T>): DeleteRequestBuilder<PersonUsers<T>, T>;
  delete(
    userIdOrEntity: any,
    partyNumber?: string,
    validFrom?: Moment
  ): DeleteRequestBuilder<PersonUsers<T>, T> {
    return new DeleteRequestBuilder<PersonUsers<T>, T>(
      this.entityApi,
      userIdOrEntity instanceof PersonUsers
        ? userIdOrEntity
        : {
            UserId: userIdOrEntity!,
            PartyNumber: partyNumber!,
            ValidFrom: validFrom!
          }
    );
  }
}
