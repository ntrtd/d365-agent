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
import { MasterPlanningProductCoverageGroups } from './MasterPlanningProductCoverageGroups';

/**
 * Request builder class for operations supported on the {@link MasterPlanningProductCoverageGroups} entity.
 */
export class MasterPlanningProductCoverageGroupsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<MasterPlanningProductCoverageGroups<T>, T> {
  /**
   * Returns a request builder for querying all `MasterPlanningProductCoverageGroups` entities.
   * @returns A request builder for creating requests to retrieve all `MasterPlanningProductCoverageGroups` entities.
   */
  getAll(): GetAllRequestBuilder<MasterPlanningProductCoverageGroups<T>, T> {
    return new GetAllRequestBuilder<MasterPlanningProductCoverageGroups<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `MasterPlanningProductCoverageGroups` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `MasterPlanningProductCoverageGroups`.
   */
  create(
    entity: MasterPlanningProductCoverageGroups<T>
  ): CreateRequestBuilder<MasterPlanningProductCoverageGroups<T>, T> {
    return new CreateRequestBuilder<MasterPlanningProductCoverageGroups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `MasterPlanningProductCoverageGroups` entity based on its keys.
   * @param dataAreaId Key property. See {@link MasterPlanningProductCoverageGroups.dataAreaId}.
   * @param groupId Key property. See {@link MasterPlanningProductCoverageGroups.groupId}.
   * @returns A request builder for creating requests to retrieve one `MasterPlanningProductCoverageGroups` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    groupId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<MasterPlanningProductCoverageGroups<T>, T> {
    return new GetByKeyRequestBuilder<
      MasterPlanningProductCoverageGroups<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      GroupId: groupId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `MasterPlanningProductCoverageGroups`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `MasterPlanningProductCoverageGroups`.
   */
  update(
    entity: MasterPlanningProductCoverageGroups<T>
  ): UpdateRequestBuilder<MasterPlanningProductCoverageGroups<T>, T> {
    return new UpdateRequestBuilder<MasterPlanningProductCoverageGroups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `MasterPlanningProductCoverageGroups`.
   * @param dataAreaId Key property. See {@link MasterPlanningProductCoverageGroups.dataAreaId}.
   * @param groupId Key property. See {@link MasterPlanningProductCoverageGroups.groupId}.
   * @returns A request builder for creating requests that delete an entity of type `MasterPlanningProductCoverageGroups`.
   */
  delete(
    dataAreaId: string,
    groupId: string
  ): DeleteRequestBuilder<MasterPlanningProductCoverageGroups<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `MasterPlanningProductCoverageGroups`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `MasterPlanningProductCoverageGroups` by taking the entity as a parameter.
   */
  delete(
    entity: MasterPlanningProductCoverageGroups<T>
  ): DeleteRequestBuilder<MasterPlanningProductCoverageGroups<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    groupId?: string
  ): DeleteRequestBuilder<MasterPlanningProductCoverageGroups<T>, T> {
    return new DeleteRequestBuilder<MasterPlanningProductCoverageGroups<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof MasterPlanningProductCoverageGroups
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            GroupId: groupId!
          }
    );
  }
}
