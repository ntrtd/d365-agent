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
import { OrganizationNames } from './OrganizationNames';

/**
 * Request builder class for operations supported on the {@link OrganizationNames} entity.
 */
export class OrganizationNamesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<OrganizationNames<T>, T> {
  /**
   * Returns a request builder for querying all `OrganizationNames` entities.
   * @returns A request builder for creating requests to retrieve all `OrganizationNames` entities.
   */
  getAll(): GetAllRequestBuilder<OrganizationNames<T>, T> {
    return new GetAllRequestBuilder<OrganizationNames<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `OrganizationNames` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `OrganizationNames`.
   */
  create(
    entity: OrganizationNames<T>
  ): CreateRequestBuilder<OrganizationNames<T>, T> {
    return new CreateRequestBuilder<OrganizationNames<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `OrganizationNames` entity based on its keys.
   * @param dirOrganizationBaseFkPartyNumber Key property. See {@link OrganizationNames.dirOrganizationBaseFkPartyNumber}.
   * @param validFrom Key property. See {@link OrganizationNames.validFrom}.
   * @returns A request builder for creating requests to retrieve one `OrganizationNames` entity based on its keys.
   */
  getByKey(
    dirOrganizationBaseFkPartyNumber: DeserializedType<T, 'Edm.String'>,
    validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>
  ): GetByKeyRequestBuilder<OrganizationNames<T>, T> {
    return new GetByKeyRequestBuilder<OrganizationNames<T>, T>(this.entityApi, {
      DirOrganizationBase_FK_PartyNumber: dirOrganizationBaseFkPartyNumber,
      ValidFrom: validFrom
    });
  }

  /**
   * Returns a request builder for updating an entity of type `OrganizationNames`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `OrganizationNames`.
   */
  update(
    entity: OrganizationNames<T>
  ): UpdateRequestBuilder<OrganizationNames<T>, T> {
    return new UpdateRequestBuilder<OrganizationNames<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `OrganizationNames`.
   * @param dirOrganizationBaseFkPartyNumber Key property. See {@link OrganizationNames.dirOrganizationBaseFkPartyNumber}.
   * @param validFrom Key property. See {@link OrganizationNames.validFrom}.
   * @returns A request builder for creating requests that delete an entity of type `OrganizationNames`.
   */
  delete(
    dirOrganizationBaseFkPartyNumber: string,
    validFrom: Moment
  ): DeleteRequestBuilder<OrganizationNames<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `OrganizationNames`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `OrganizationNames` by taking the entity as a parameter.
   */
  delete(
    entity: OrganizationNames<T>
  ): DeleteRequestBuilder<OrganizationNames<T>, T>;
  delete(
    dirOrganizationBaseFkPartyNumberOrEntity: any,
    validFrom?: Moment
  ): DeleteRequestBuilder<OrganizationNames<T>, T> {
    return new DeleteRequestBuilder<OrganizationNames<T>, T>(
      this.entityApi,
      dirOrganizationBaseFkPartyNumberOrEntity instanceof OrganizationNames
        ? dirOrganizationBaseFkPartyNumberOrEntity
        : {
            DirOrganizationBase_FK_PartyNumber:
              dirOrganizationBaseFkPartyNumberOrEntity!,
            ValidFrom: validFrom!
          }
    );
  }
}
