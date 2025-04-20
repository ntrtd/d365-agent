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
import { TeamMembers } from './TeamMembers';

/**
 * Request builder class for operations supported on the {@link TeamMembers} entity.
 */
export class TeamMembersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<TeamMembers<T>, T> {
  /**
   * Returns a request builder for querying all `TeamMembers` entities.
   * @returns A request builder for creating requests to retrieve all `TeamMembers` entities.
   */
  getAll(): GetAllRequestBuilder<TeamMembers<T>, T> {
    return new GetAllRequestBuilder<TeamMembers<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `TeamMembers` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `TeamMembers`.
   */
  create(entity: TeamMembers<T>): CreateRequestBuilder<TeamMembers<T>, T> {
    return new CreateRequestBuilder<TeamMembers<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `TeamMembers` entity based on its keys.
   * @param relationshipTypeId Key property. See {@link TeamMembers.relationshipTypeId}.
   * @param teamMemberPartyNumber Key property. See {@link TeamMembers.teamMemberPartyNumber}.
   * @param teamPartyNumber Key property. See {@link TeamMembers.teamPartyNumber}.
   * @param validTo Key property. See {@link TeamMembers.validTo}.
   * @param validFrom Key property. See {@link TeamMembers.validFrom}.
   * @returns A request builder for creating requests to retrieve one `TeamMembers` entity based on its keys.
   */
  getByKey(
    relationshipTypeId: DeserializedType<T, 'Edm.String'>,
    teamMemberPartyNumber: DeserializedType<T, 'Edm.String'>,
    teamPartyNumber: DeserializedType<T, 'Edm.String'>,
    validTo: DeserializedType<T, 'Edm.DateTimeOffset'>,
    validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>
  ): GetByKeyRequestBuilder<TeamMembers<T>, T> {
    return new GetByKeyRequestBuilder<TeamMembers<T>, T>(this.entityApi, {
      RelationshipTypeId: relationshipTypeId,
      TeamMemberPartyNumber: teamMemberPartyNumber,
      TeamPartyNumber: teamPartyNumber,
      ValidTo: validTo,
      ValidFrom: validFrom
    });
  }

  /**
   * Returns a request builder for updating an entity of type `TeamMembers`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `TeamMembers`.
   */
  update(entity: TeamMembers<T>): UpdateRequestBuilder<TeamMembers<T>, T> {
    return new UpdateRequestBuilder<TeamMembers<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `TeamMembers`.
   * @param relationshipTypeId Key property. See {@link TeamMembers.relationshipTypeId}.
   * @param teamMemberPartyNumber Key property. See {@link TeamMembers.teamMemberPartyNumber}.
   * @param teamPartyNumber Key property. See {@link TeamMembers.teamPartyNumber}.
   * @param validTo Key property. See {@link TeamMembers.validTo}.
   * @param validFrom Key property. See {@link TeamMembers.validFrom}.
   * @returns A request builder for creating requests that delete an entity of type `TeamMembers`.
   */
  delete(
    relationshipTypeId: string,
    teamMemberPartyNumber: string,
    teamPartyNumber: string,
    validTo: Moment,
    validFrom: Moment
  ): DeleteRequestBuilder<TeamMembers<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `TeamMembers`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `TeamMembers` by taking the entity as a parameter.
   */
  delete(entity: TeamMembers<T>): DeleteRequestBuilder<TeamMembers<T>, T>;
  delete(
    relationshipTypeIdOrEntity: any,
    teamMemberPartyNumber?: string,
    teamPartyNumber?: string,
    validTo?: Moment,
    validFrom?: Moment
  ): DeleteRequestBuilder<TeamMembers<T>, T> {
    return new DeleteRequestBuilder<TeamMembers<T>, T>(
      this.entityApi,
      relationshipTypeIdOrEntity instanceof TeamMembers
        ? relationshipTypeIdOrEntity
        : {
            RelationshipTypeId: relationshipTypeIdOrEntity!,
            TeamMemberPartyNumber: teamMemberPartyNumber!,
            TeamPartyNumber: teamPartyNumber!,
            ValidTo: validTo!,
            ValidFrom: validFrom!
          }
    );
  }
}
