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
import { ProjectCostTemplateLineCategories } from './ProjectCostTemplateLineCategories';

/**
 * Request builder class for operations supported on the {@link ProjectCostTemplateLineCategories} entity.
 */
export class ProjectCostTemplateLineCategoriesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ProjectCostTemplateLineCategories<T>, T> {
  /**
   * Returns a request builder for querying all `ProjectCostTemplateLineCategories` entities.
   * @returns A request builder for creating requests to retrieve all `ProjectCostTemplateLineCategories` entities.
   */
  getAll(): GetAllRequestBuilder<ProjectCostTemplateLineCategories<T>, T> {
    return new GetAllRequestBuilder<ProjectCostTemplateLineCategories<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ProjectCostTemplateLineCategories` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ProjectCostTemplateLineCategories`.
   */
  create(
    entity: ProjectCostTemplateLineCategories<T>
  ): CreateRequestBuilder<ProjectCostTemplateLineCategories<T>, T> {
    return new CreateRequestBuilder<ProjectCostTemplateLineCategories<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ProjectCostTemplateLineCategories` entity based on its keys.
   * @param dataAreaId Key property. See {@link ProjectCostTemplateLineCategories.dataAreaId}.
   * @param controlId Key property. See {@link ProjectCostTemplateLineCategories.controlId}.
   * @param costGroupId Key property. See {@link ProjectCostTemplateLineCategories.costGroupId}.
   * @param projectCategoryId Key property. See {@link ProjectCostTemplateLineCategories.projectCategoryId}.
   * @returns A request builder for creating requests to retrieve one `ProjectCostTemplateLineCategories` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    controlId: DeserializedType<T, 'Edm.String'>,
    costGroupId: DeserializedType<T, 'Edm.String'>,
    projectCategoryId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ProjectCostTemplateLineCategories<T>, T> {
    return new GetByKeyRequestBuilder<ProjectCostTemplateLineCategories<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        ControlId: controlId,
        CostGroupId: costGroupId,
        ProjectCategoryId: projectCategoryId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ProjectCostTemplateLineCategories`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ProjectCostTemplateLineCategories`.
   */
  update(
    entity: ProjectCostTemplateLineCategories<T>
  ): UpdateRequestBuilder<ProjectCostTemplateLineCategories<T>, T> {
    return new UpdateRequestBuilder<ProjectCostTemplateLineCategories<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ProjectCostTemplateLineCategories`.
   * @param dataAreaId Key property. See {@link ProjectCostTemplateLineCategories.dataAreaId}.
   * @param controlId Key property. See {@link ProjectCostTemplateLineCategories.controlId}.
   * @param costGroupId Key property. See {@link ProjectCostTemplateLineCategories.costGroupId}.
   * @param projectCategoryId Key property. See {@link ProjectCostTemplateLineCategories.projectCategoryId}.
   * @returns A request builder for creating requests that delete an entity of type `ProjectCostTemplateLineCategories`.
   */
  delete(
    dataAreaId: string,
    controlId: string,
    costGroupId: string,
    projectCategoryId: string
  ): DeleteRequestBuilder<ProjectCostTemplateLineCategories<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ProjectCostTemplateLineCategories`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ProjectCostTemplateLineCategories` by taking the entity as a parameter.
   */
  delete(
    entity: ProjectCostTemplateLineCategories<T>
  ): DeleteRequestBuilder<ProjectCostTemplateLineCategories<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    controlId?: string,
    costGroupId?: string,
    projectCategoryId?: string
  ): DeleteRequestBuilder<ProjectCostTemplateLineCategories<T>, T> {
    return new DeleteRequestBuilder<ProjectCostTemplateLineCategories<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ProjectCostTemplateLineCategories
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ControlId: controlId!,
            CostGroupId: costGroupId!,
            ProjectCategoryId: projectCategoryId!
          }
    );
  }
}
