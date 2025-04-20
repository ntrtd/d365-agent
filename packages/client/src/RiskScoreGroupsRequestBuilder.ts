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
import { RiskScoreGroups } from './RiskScoreGroups';

/**
 * Request builder class for operations supported on the {@link RiskScoreGroups} entity.
 */
export class RiskScoreGroupsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RiskScoreGroups<T>, T> {
  /**
   * Returns a request builder for querying all `RiskScoreGroups` entities.
   * @returns A request builder for creating requests to retrieve all `RiskScoreGroups` entities.
   */
  getAll(): GetAllRequestBuilder<RiskScoreGroups<T>, T> {
    return new GetAllRequestBuilder<RiskScoreGroups<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `RiskScoreGroups` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RiskScoreGroups`.
   */
  create(
    entity: RiskScoreGroups<T>
  ): CreateRequestBuilder<RiskScoreGroups<T>, T> {
    return new CreateRequestBuilder<RiskScoreGroups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RiskScoreGroups` entity based on its keys.
   * @param dataAreaId Key property. See {@link RiskScoreGroups.dataAreaId}.
   * @param groupId Key property. See {@link RiskScoreGroups.groupId}.
   * @returns A request builder for creating requests to retrieve one `RiskScoreGroups` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    groupId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<RiskScoreGroups<T>, T> {
    return new GetByKeyRequestBuilder<RiskScoreGroups<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      GroupId: groupId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `RiskScoreGroups`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RiskScoreGroups`.
   */
  update(
    entity: RiskScoreGroups<T>
  ): UpdateRequestBuilder<RiskScoreGroups<T>, T> {
    return new UpdateRequestBuilder<RiskScoreGroups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RiskScoreGroups`.
   * @param dataAreaId Key property. See {@link RiskScoreGroups.dataAreaId}.
   * @param groupId Key property. See {@link RiskScoreGroups.groupId}.
   * @returns A request builder for creating requests that delete an entity of type `RiskScoreGroups`.
   */
  delete(
    dataAreaId: string,
    groupId: string
  ): DeleteRequestBuilder<RiskScoreGroups<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RiskScoreGroups`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RiskScoreGroups` by taking the entity as a parameter.
   */
  delete(
    entity: RiskScoreGroups<T>
  ): DeleteRequestBuilder<RiskScoreGroups<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    groupId?: string
  ): DeleteRequestBuilder<RiskScoreGroups<T>, T> {
    return new DeleteRequestBuilder<RiskScoreGroups<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof RiskScoreGroups
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            GroupId: groupId!
          }
    );
  }
}
