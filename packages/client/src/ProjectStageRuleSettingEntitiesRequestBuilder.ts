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
import { ProjectStageRuleSettingEntities } from './ProjectStageRuleSettingEntities';
import { ProjStatus } from './ProjStatus';
import { ProjType } from './ProjType';
import { ProjStatusRule } from './ProjStatusRule';

/**
 * Request builder class for operations supported on the {@link ProjectStageRuleSettingEntities} entity.
 */
export class ProjectStageRuleSettingEntitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ProjectStageRuleSettingEntities<T>, T> {
  /**
   * Returns a request builder for querying all `ProjectStageRuleSettingEntities` entities.
   * @returns A request builder for creating requests to retrieve all `ProjectStageRuleSettingEntities` entities.
   */
  getAll(): GetAllRequestBuilder<ProjectStageRuleSettingEntities<T>, T> {
    return new GetAllRequestBuilder<ProjectStageRuleSettingEntities<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ProjectStageRuleSettingEntities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ProjectStageRuleSettingEntities`.
   */
  create(
    entity: ProjectStageRuleSettingEntities<T>
  ): CreateRequestBuilder<ProjectStageRuleSettingEntities<T>, T> {
    return new CreateRequestBuilder<ProjectStageRuleSettingEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ProjectStageRuleSettingEntities` entity based on its keys.
   * @param dataAreaId Key property. See {@link ProjectStageRuleSettingEntities.dataAreaId}.
   * @param projStatus Key property. See {@link ProjectStageRuleSettingEntities.projStatus}.
   * @param projType Key property. See {@link ProjectStageRuleSettingEntities.projType}.
   * @param projStatusRule Key property. See {@link ProjectStageRuleSettingEntities.projStatusRule}.
   * @returns A request builder for creating requests to retrieve one `ProjectStageRuleSettingEntities` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    projStatus: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.ProjStatus'
    >,
    projType: DeserializedType<T, 'Microsoft.Dynamics.DataEntities.ProjType'>,
    projStatusRule: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.ProjStatusRule'
    >
  ): GetByKeyRequestBuilder<ProjectStageRuleSettingEntities<T>, T> {
    return new GetByKeyRequestBuilder<ProjectStageRuleSettingEntities<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        ProjStatus: projStatus,
        ProjType: projType,
        ProjStatusRule: projStatusRule
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ProjectStageRuleSettingEntities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ProjectStageRuleSettingEntities`.
   */
  update(
    entity: ProjectStageRuleSettingEntities<T>
  ): UpdateRequestBuilder<ProjectStageRuleSettingEntities<T>, T> {
    return new UpdateRequestBuilder<ProjectStageRuleSettingEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ProjectStageRuleSettingEntities`.
   * @param dataAreaId Key property. See {@link ProjectStageRuleSettingEntities.dataAreaId}.
   * @param projStatus Key property. See {@link ProjectStageRuleSettingEntities.projStatus}.
   * @param projType Key property. See {@link ProjectStageRuleSettingEntities.projType}.
   * @param projStatusRule Key property. See {@link ProjectStageRuleSettingEntities.projStatusRule}.
   * @returns A request builder for creating requests that delete an entity of type `ProjectStageRuleSettingEntities`.
   */
  delete(
    dataAreaId: string,
    projStatus: ProjStatus,
    projType: ProjType,
    projStatusRule: ProjStatusRule
  ): DeleteRequestBuilder<ProjectStageRuleSettingEntities<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ProjectStageRuleSettingEntities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ProjectStageRuleSettingEntities` by taking the entity as a parameter.
   */
  delete(
    entity: ProjectStageRuleSettingEntities<T>
  ): DeleteRequestBuilder<ProjectStageRuleSettingEntities<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    projStatus?: ProjStatus,
    projType?: ProjType,
    projStatusRule?: ProjStatusRule
  ): DeleteRequestBuilder<ProjectStageRuleSettingEntities<T>, T> {
    return new DeleteRequestBuilder<ProjectStageRuleSettingEntities<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ProjectStageRuleSettingEntities
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ProjStatus: projStatus!,
            ProjType: projType!,
            ProjStatusRule: projStatusRule!
          }
    );
  }
}
