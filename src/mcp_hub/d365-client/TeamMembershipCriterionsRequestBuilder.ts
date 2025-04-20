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
import { TeamMembershipCriterions } from './TeamMembershipCriterions';

/**
 * Request builder class for operations supported on the {@link TeamMembershipCriterions} entity.
 */
export class TeamMembershipCriterionsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<TeamMembershipCriterions<T>, T> {
  /**
   * Returns a request builder for querying all `TeamMembershipCriterions` entities.
   * @returns A request builder for creating requests to retrieve all `TeamMembershipCriterions` entities.
   */
  getAll(): GetAllRequestBuilder<TeamMembershipCriterions<T>, T> {
    return new GetAllRequestBuilder<TeamMembershipCriterions<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `TeamMembershipCriterions` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `TeamMembershipCriterions`.
   */
  create(
    entity: TeamMembershipCriterions<T>
  ): CreateRequestBuilder<TeamMembershipCriterions<T>, T> {
    return new CreateRequestBuilder<TeamMembershipCriterions<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `TeamMembershipCriterions` entity based on its keys.
   * @param name Key property. See {@link TeamMembershipCriterions.name}.
   * @returns A request builder for creating requests to retrieve one `TeamMembershipCriterions` entity based on its keys.
   */
  getByKey(
    name: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<TeamMembershipCriterions<T>, T> {
    return new GetByKeyRequestBuilder<TeamMembershipCriterions<T>, T>(
      this.entityApi,
      { Name: name }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `TeamMembershipCriterions`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `TeamMembershipCriterions`.
   */
  update(
    entity: TeamMembershipCriterions<T>
  ): UpdateRequestBuilder<TeamMembershipCriterions<T>, T> {
    return new UpdateRequestBuilder<TeamMembershipCriterions<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `TeamMembershipCriterions`.
   * @param name Key property. See {@link TeamMembershipCriterions.name}.
   * @returns A request builder for creating requests that delete an entity of type `TeamMembershipCriterions`.
   */
  delete(name: string): DeleteRequestBuilder<TeamMembershipCriterions<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `TeamMembershipCriterions`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `TeamMembershipCriterions` by taking the entity as a parameter.
   */
  delete(
    entity: TeamMembershipCriterions<T>
  ): DeleteRequestBuilder<TeamMembershipCriterions<T>, T>;
  delete(
    nameOrEntity: any
  ): DeleteRequestBuilder<TeamMembershipCriterions<T>, T> {
    return new DeleteRequestBuilder<TeamMembershipCriterions<T>, T>(
      this.entityApi,
      nameOrEntity instanceof TeamMembershipCriterions
        ? nameOrEntity
        : { Name: nameOrEntity! }
    );
  }
}
