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
import { ProjectControlCostGroups } from './ProjectControlCostGroups';

/**
 * Request builder class for operations supported on the {@link ProjectControlCostGroups} entity.
 */
export class ProjectControlCostGroupsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ProjectControlCostGroups<T>, T> {
  /**
   * Returns a request builder for querying all `ProjectControlCostGroups` entities.
   * @returns A request builder for creating requests to retrieve all `ProjectControlCostGroups` entities.
   */
  getAll(): GetAllRequestBuilder<ProjectControlCostGroups<T>, T> {
    return new GetAllRequestBuilder<ProjectControlCostGroups<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ProjectControlCostGroups` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ProjectControlCostGroups`.
   */
  create(
    entity: ProjectControlCostGroups<T>
  ): CreateRequestBuilder<ProjectControlCostGroups<T>, T> {
    return new CreateRequestBuilder<ProjectControlCostGroups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ProjectControlCostGroups` entity based on its keys.
   * @param dataAreaId Key property. See {@link ProjectControlCostGroups.dataAreaId}.
   * @param costTemplateId Key property. See {@link ProjectControlCostGroups.costTemplateId}.
   * @param costLineId Key property. See {@link ProjectControlCostGroups.costLineId}.
   * @returns A request builder for creating requests to retrieve one `ProjectControlCostGroups` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    costTemplateId: DeserializedType<T, 'Edm.String'>,
    costLineId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ProjectControlCostGroups<T>, T> {
    return new GetByKeyRequestBuilder<ProjectControlCostGroups<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        CostTemplateId: costTemplateId,
        CostLineId: costLineId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ProjectControlCostGroups`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ProjectControlCostGroups`.
   */
  update(
    entity: ProjectControlCostGroups<T>
  ): UpdateRequestBuilder<ProjectControlCostGroups<T>, T> {
    return new UpdateRequestBuilder<ProjectControlCostGroups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ProjectControlCostGroups`.
   * @param dataAreaId Key property. See {@link ProjectControlCostGroups.dataAreaId}.
   * @param costTemplateId Key property. See {@link ProjectControlCostGroups.costTemplateId}.
   * @param costLineId Key property. See {@link ProjectControlCostGroups.costLineId}.
   * @returns A request builder for creating requests that delete an entity of type `ProjectControlCostGroups`.
   */
  delete(
    dataAreaId: string,
    costTemplateId: string,
    costLineId: string
  ): DeleteRequestBuilder<ProjectControlCostGroups<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ProjectControlCostGroups`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ProjectControlCostGroups` by taking the entity as a parameter.
   */
  delete(
    entity: ProjectControlCostGroups<T>
  ): DeleteRequestBuilder<ProjectControlCostGroups<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    costTemplateId?: string,
    costLineId?: string
  ): DeleteRequestBuilder<ProjectControlCostGroups<T>, T> {
    return new DeleteRequestBuilder<ProjectControlCostGroups<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ProjectControlCostGroups
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            CostTemplateId: costTemplateId!,
            CostLineId: costLineId!
          }
    );
  }
}
