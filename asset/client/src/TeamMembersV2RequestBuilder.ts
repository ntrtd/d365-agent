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
import { TeamMembersV2 } from './TeamMembersV2';

/**
 * Request builder class for operations supported on the {@link TeamMembersV2} entity.
 */
export class TeamMembersV2RequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<TeamMembersV2<T>, T> {
  /**
   * Returns a request builder for querying all `TeamMembersV2` entities.
   * @returns A request builder for creating requests to retrieve all `TeamMembersV2` entities.
   */
  getAll(): GetAllRequestBuilder<TeamMembersV2<T>, T> {
    return new GetAllRequestBuilder<TeamMembersV2<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `TeamMembersV2` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `TeamMembersV2`.
   */
  create(entity: TeamMembersV2<T>): CreateRequestBuilder<TeamMembersV2<T>, T> {
    return new CreateRequestBuilder<TeamMembersV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `TeamMembersV2` entity based on its keys.
   * @param teamMemberPartyNumber Key property. See {@link TeamMembersV2.teamMemberPartyNumber}.
   * @param teamName Key property. See {@link TeamMembersV2.teamName}.
   * @param validFrom Key property. See {@link TeamMembersV2.validFrom}.
   * @returns A request builder for creating requests to retrieve one `TeamMembersV2` entity based on its keys.
   */
  getByKey(
    teamMemberPartyNumber: DeserializedType<T, 'Edm.String'>,
    teamName: DeserializedType<T, 'Edm.String'>,
    validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>
  ): GetByKeyRequestBuilder<TeamMembersV2<T>, T> {
    return new GetByKeyRequestBuilder<TeamMembersV2<T>, T>(this.entityApi, {
      TeamMemberPartyNumber: teamMemberPartyNumber,
      TeamName: teamName,
      ValidFrom: validFrom
    });
  }

  /**
   * Returns a request builder for updating an entity of type `TeamMembersV2`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `TeamMembersV2`.
   */
  update(entity: TeamMembersV2<T>): UpdateRequestBuilder<TeamMembersV2<T>, T> {
    return new UpdateRequestBuilder<TeamMembersV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `TeamMembersV2`.
   * @param teamMemberPartyNumber Key property. See {@link TeamMembersV2.teamMemberPartyNumber}.
   * @param teamName Key property. See {@link TeamMembersV2.teamName}.
   * @param validFrom Key property. See {@link TeamMembersV2.validFrom}.
   * @returns A request builder for creating requests that delete an entity of type `TeamMembersV2`.
   */
  delete(
    teamMemberPartyNumber: string,
    teamName: string,
    validFrom: Moment
  ): DeleteRequestBuilder<TeamMembersV2<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `TeamMembersV2`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `TeamMembersV2` by taking the entity as a parameter.
   */
  delete(entity: TeamMembersV2<T>): DeleteRequestBuilder<TeamMembersV2<T>, T>;
  delete(
    teamMemberPartyNumberOrEntity: any,
    teamName?: string,
    validFrom?: Moment
  ): DeleteRequestBuilder<TeamMembersV2<T>, T> {
    return new DeleteRequestBuilder<TeamMembersV2<T>, T>(
      this.entityApi,
      teamMemberPartyNumberOrEntity instanceof TeamMembersV2
        ? teamMemberPartyNumberOrEntity
        : {
            TeamMemberPartyNumber: teamMemberPartyNumberOrEntity!,
            TeamName: teamName!,
            ValidFrom: validFrom!
          }
    );
  }
}
