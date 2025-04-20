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
import { PartyRelationships } from './PartyRelationships';

/**
 * Request builder class for operations supported on the {@link PartyRelationships} entity.
 */
export class PartyRelationshipsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PartyRelationships<T>, T> {
  /**
   * Returns a request builder for querying all `PartyRelationships` entities.
   * @returns A request builder for creating requests to retrieve all `PartyRelationships` entities.
   */
  getAll(): GetAllRequestBuilder<PartyRelationships<T>, T> {
    return new GetAllRequestBuilder<PartyRelationships<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `PartyRelationships` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PartyRelationships`.
   */
  create(
    entity: PartyRelationships<T>
  ): CreateRequestBuilder<PartyRelationships<T>, T> {
    return new CreateRequestBuilder<PartyRelationships<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `PartyRelationships` entity based on its keys.
   * @param relationshipType Key property. See {@link PartyRelationships.relationshipType}.
   * @param parentPartyId Key property. See {@link PartyRelationships.parentPartyId}.
   * @param childPartyId Key property. See {@link PartyRelationships.childPartyId}.
   * @param legalEntityDataArea Key property. See {@link PartyRelationships.legalEntityDataArea}.
   * @param validTo Key property. See {@link PartyRelationships.validTo}.
   * @param validFrom Key property. See {@link PartyRelationships.validFrom}.
   * @returns A request builder for creating requests to retrieve one `PartyRelationships` entity based on its keys.
   */
  getByKey(
    relationshipType: DeserializedType<T, 'Edm.String'>,
    parentPartyId: DeserializedType<T, 'Edm.String'>,
    childPartyId: DeserializedType<T, 'Edm.String'>,
    legalEntityDataArea: DeserializedType<T, 'Edm.String'>,
    validTo: DeserializedType<T, 'Edm.DateTimeOffset'>,
    validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>
  ): GetByKeyRequestBuilder<PartyRelationships<T>, T> {
    return new GetByKeyRequestBuilder<PartyRelationships<T>, T>(
      this.entityApi,
      {
        RelationshipType: relationshipType,
        ParentPartyId: parentPartyId,
        ChildPartyId: childPartyId,
        LegalEntityDataArea: legalEntityDataArea,
        ValidTo: validTo,
        ValidFrom: validFrom
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `PartyRelationships`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PartyRelationships`.
   */
  update(
    entity: PartyRelationships<T>
  ): UpdateRequestBuilder<PartyRelationships<T>, T> {
    return new UpdateRequestBuilder<PartyRelationships<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `PartyRelationships`.
   * @param relationshipType Key property. See {@link PartyRelationships.relationshipType}.
   * @param parentPartyId Key property. See {@link PartyRelationships.parentPartyId}.
   * @param childPartyId Key property. See {@link PartyRelationships.childPartyId}.
   * @param legalEntityDataArea Key property. See {@link PartyRelationships.legalEntityDataArea}.
   * @param validTo Key property. See {@link PartyRelationships.validTo}.
   * @param validFrom Key property. See {@link PartyRelationships.validFrom}.
   * @returns A request builder for creating requests that delete an entity of type `PartyRelationships`.
   */
  delete(
    relationshipType: string,
    parentPartyId: string,
    childPartyId: string,
    legalEntityDataArea: string,
    validTo: Moment,
    validFrom: Moment
  ): DeleteRequestBuilder<PartyRelationships<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PartyRelationships`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PartyRelationships` by taking the entity as a parameter.
   */
  delete(
    entity: PartyRelationships<T>
  ): DeleteRequestBuilder<PartyRelationships<T>, T>;
  delete(
    relationshipTypeOrEntity: any,
    parentPartyId?: string,
    childPartyId?: string,
    legalEntityDataArea?: string,
    validTo?: Moment,
    validFrom?: Moment
  ): DeleteRequestBuilder<PartyRelationships<T>, T> {
    return new DeleteRequestBuilder<PartyRelationships<T>, T>(
      this.entityApi,
      relationshipTypeOrEntity instanceof PartyRelationships
        ? relationshipTypeOrEntity
        : {
            RelationshipType: relationshipTypeOrEntity!,
            ParentPartyId: parentPartyId!,
            ChildPartyId: childPartyId!,
            LegalEntityDataArea: legalEntityDataArea!,
            ValidTo: validTo!,
            ValidFrom: validFrom!
          }
    );
  }
}
