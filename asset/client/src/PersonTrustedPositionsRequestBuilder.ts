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
import { PersonTrustedPositions } from './PersonTrustedPositions';

/**
 * Request builder class for operations supported on the {@link PersonTrustedPositions} entity.
 */
export class PersonTrustedPositionsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PersonTrustedPositions<T>, T> {
  /**
   * Returns a request builder for querying all `PersonTrustedPositions` entities.
   * @returns A request builder for creating requests to retrieve all `PersonTrustedPositions` entities.
   */
  getAll(): GetAllRequestBuilder<PersonTrustedPositions<T>, T> {
    return new GetAllRequestBuilder<PersonTrustedPositions<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `PersonTrustedPositions` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PersonTrustedPositions`.
   */
  create(
    entity: PersonTrustedPositions<T>
  ): CreateRequestBuilder<PersonTrustedPositions<T>, T> {
    return new CreateRequestBuilder<PersonTrustedPositions<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `PersonTrustedPositions` entity based on its keys.
   * @param partyNumber Key property. See {@link PersonTrustedPositions.partyNumber}.
   * @param position Key property. See {@link PersonTrustedPositions.position}.
   * @param employer Key property. See {@link PersonTrustedPositions.employer}.
   * @returns A request builder for creating requests to retrieve one `PersonTrustedPositions` entity based on its keys.
   */
  getByKey(
    partyNumber: DeserializedType<T, 'Edm.String'>,
    position: DeserializedType<T, 'Edm.String'>,
    employer: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<PersonTrustedPositions<T>, T> {
    return new GetByKeyRequestBuilder<PersonTrustedPositions<T>, T>(
      this.entityApi,
      {
        PartyNumber: partyNumber,
        Position: position,
        Employer: employer
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `PersonTrustedPositions`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PersonTrustedPositions`.
   */
  update(
    entity: PersonTrustedPositions<T>
  ): UpdateRequestBuilder<PersonTrustedPositions<T>, T> {
    return new UpdateRequestBuilder<PersonTrustedPositions<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `PersonTrustedPositions`.
   * @param partyNumber Key property. See {@link PersonTrustedPositions.partyNumber}.
   * @param position Key property. See {@link PersonTrustedPositions.position}.
   * @param employer Key property. See {@link PersonTrustedPositions.employer}.
   * @returns A request builder for creating requests that delete an entity of type `PersonTrustedPositions`.
   */
  delete(
    partyNumber: string,
    position: string,
    employer: string
  ): DeleteRequestBuilder<PersonTrustedPositions<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PersonTrustedPositions`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PersonTrustedPositions` by taking the entity as a parameter.
   */
  delete(
    entity: PersonTrustedPositions<T>
  ): DeleteRequestBuilder<PersonTrustedPositions<T>, T>;
  delete(
    partyNumberOrEntity: any,
    position?: string,
    employer?: string
  ): DeleteRequestBuilder<PersonTrustedPositions<T>, T> {
    return new DeleteRequestBuilder<PersonTrustedPositions<T>, T>(
      this.entityApi,
      partyNumberOrEntity instanceof PersonTrustedPositions
        ? partyNumberOrEntity
        : {
            PartyNumber: partyNumberOrEntity!,
            Position: position!,
            Employer: employer!
          }
    );
  }
}
