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
import { ProjectLinePropertySetupEntities } from './ProjectLinePropertySetupEntities';
import { TableGroupAll } from './TableGroupAll';

/**
 * Request builder class for operations supported on the {@link ProjectLinePropertySetupEntities} entity.
 */
export class ProjectLinePropertySetupEntitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ProjectLinePropertySetupEntities<T>, T> {
  /**
   * Returns a request builder for querying all `ProjectLinePropertySetupEntities` entities.
   * @returns A request builder for creating requests to retrieve all `ProjectLinePropertySetupEntities` entities.
   */
  getAll(): GetAllRequestBuilder<ProjectLinePropertySetupEntities<T>, T> {
    return new GetAllRequestBuilder<ProjectLinePropertySetupEntities<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ProjectLinePropertySetupEntities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ProjectLinePropertySetupEntities`.
   */
  create(
    entity: ProjectLinePropertySetupEntities<T>
  ): CreateRequestBuilder<ProjectLinePropertySetupEntities<T>, T> {
    return new CreateRequestBuilder<ProjectLinePropertySetupEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ProjectLinePropertySetupEntities` entity based on its keys.
   * @param dataAreaId Key property. See {@link ProjectLinePropertySetupEntities.dataAreaId}.
   * @param projectCode Key property. See {@link ProjectLinePropertySetupEntities.projectCode}.
   * @param projectRelation Key property. See {@link ProjectLinePropertySetupEntities.projectRelation}.
   * @param categoryCode Key property. See {@link ProjectLinePropertySetupEntities.categoryCode}.
   * @param categoryRelation Key property. See {@link ProjectLinePropertySetupEntities.categoryRelation}.
   * @returns A request builder for creating requests to retrieve one `ProjectLinePropertySetupEntities` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    projectCode: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.TableGroupAll'
    >,
    projectRelation: DeserializedType<T, 'Edm.String'>,
    categoryCode: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.TableGroupAll'
    >,
    categoryRelation: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ProjectLinePropertySetupEntities<T>, T> {
    return new GetByKeyRequestBuilder<ProjectLinePropertySetupEntities<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        ProjectCode: projectCode,
        ProjectRelation: projectRelation,
        CategoryCode: categoryCode,
        CategoryRelation: categoryRelation
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ProjectLinePropertySetupEntities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ProjectLinePropertySetupEntities`.
   */
  update(
    entity: ProjectLinePropertySetupEntities<T>
  ): UpdateRequestBuilder<ProjectLinePropertySetupEntities<T>, T> {
    return new UpdateRequestBuilder<ProjectLinePropertySetupEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ProjectLinePropertySetupEntities`.
   * @param dataAreaId Key property. See {@link ProjectLinePropertySetupEntities.dataAreaId}.
   * @param projectCode Key property. See {@link ProjectLinePropertySetupEntities.projectCode}.
   * @param projectRelation Key property. See {@link ProjectLinePropertySetupEntities.projectRelation}.
   * @param categoryCode Key property. See {@link ProjectLinePropertySetupEntities.categoryCode}.
   * @param categoryRelation Key property. See {@link ProjectLinePropertySetupEntities.categoryRelation}.
   * @returns A request builder for creating requests that delete an entity of type `ProjectLinePropertySetupEntities`.
   */
  delete(
    dataAreaId: string,
    projectCode: TableGroupAll,
    projectRelation: string,
    categoryCode: TableGroupAll,
    categoryRelation: string
  ): DeleteRequestBuilder<ProjectLinePropertySetupEntities<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ProjectLinePropertySetupEntities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ProjectLinePropertySetupEntities` by taking the entity as a parameter.
   */
  delete(
    entity: ProjectLinePropertySetupEntities<T>
  ): DeleteRequestBuilder<ProjectLinePropertySetupEntities<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    projectCode?: TableGroupAll,
    projectRelation?: string,
    categoryCode?: TableGroupAll,
    categoryRelation?: string
  ): DeleteRequestBuilder<ProjectLinePropertySetupEntities<T>, T> {
    return new DeleteRequestBuilder<ProjectLinePropertySetupEntities<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ProjectLinePropertySetupEntities
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ProjectCode: projectCode!,
            ProjectRelation: projectRelation!,
            CategoryCode: categoryCode!,
            CategoryRelation: categoryRelation!
          }
    );
  }
}
