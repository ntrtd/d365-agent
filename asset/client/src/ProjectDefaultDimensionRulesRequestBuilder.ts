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
import { ProjectDefaultDimensionRules } from './ProjectDefaultDimensionRules';
import { TableAll } from './TableAll';
import { TableGroupAll } from './TableGroupAll';

/**
 * Request builder class for operations supported on the {@link ProjectDefaultDimensionRules} entity.
 */
export class ProjectDefaultDimensionRulesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ProjectDefaultDimensionRules<T>, T> {
  /**
   * Returns a request builder for querying all `ProjectDefaultDimensionRules` entities.
   * @returns A request builder for creating requests to retrieve all `ProjectDefaultDimensionRules` entities.
   */
  getAll(): GetAllRequestBuilder<ProjectDefaultDimensionRules<T>, T> {
    return new GetAllRequestBuilder<ProjectDefaultDimensionRules<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ProjectDefaultDimensionRules` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ProjectDefaultDimensionRules`.
   */
  create(
    entity: ProjectDefaultDimensionRules<T>
  ): CreateRequestBuilder<ProjectDefaultDimensionRules<T>, T> {
    return new CreateRequestBuilder<ProjectDefaultDimensionRules<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ProjectDefaultDimensionRules` entity based on its keys.
   * @param dataAreaId Key property. See {@link ProjectDefaultDimensionRules.dataAreaId}.
   * @param contractLineGroupRelation Key property. See {@link ProjectDefaultDimensionRules.contractLineGroupRelation}.
   * @param contractLineGroupId Key property. See {@link ProjectDefaultDimensionRules.contractLineGroupId}.
   * @param revenueProfileRelation Key property. See {@link ProjectDefaultDimensionRules.revenueProfileRelation}.
   * @param revenueProfileId Key property. See {@link ProjectDefaultDimensionRules.revenueProfileId}.
   * @param contractRelation Key property. See {@link ProjectDefaultDimensionRules.contractRelation}.
   * @param contractId Key property. See {@link ProjectDefaultDimensionRules.contractId}.
   * @param projectRelation Key property. See {@link ProjectDefaultDimensionRules.projectRelation}.
   * @param projectRelationId Key property. See {@link ProjectDefaultDimensionRules.projectRelationId}.
   * @returns A request builder for creating requests to retrieve one `ProjectDefaultDimensionRules` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    contractLineGroupRelation: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.TableAll'
    >,
    contractLineGroupId: DeserializedType<T, 'Edm.String'>,
    revenueProfileRelation: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.TableAll'
    >,
    revenueProfileId: DeserializedType<T, 'Edm.String'>,
    contractRelation: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.TableAll'
    >,
    contractId: DeserializedType<T, 'Edm.String'>,
    projectRelation: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.TableGroupAll'
    >,
    projectRelationId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ProjectDefaultDimensionRules<T>, T> {
    return new GetByKeyRequestBuilder<ProjectDefaultDimensionRules<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        ContractLineGroupRelation: contractLineGroupRelation,
        ContractLineGroupId: contractLineGroupId,
        RevenueProfileRelation: revenueProfileRelation,
        RevenueProfileId: revenueProfileId,
        ContractRelation: contractRelation,
        ContractId: contractId,
        ProjectRelation: projectRelation,
        ProjectRelationId: projectRelationId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ProjectDefaultDimensionRules`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ProjectDefaultDimensionRules`.
   */
  update(
    entity: ProjectDefaultDimensionRules<T>
  ): UpdateRequestBuilder<ProjectDefaultDimensionRules<T>, T> {
    return new UpdateRequestBuilder<ProjectDefaultDimensionRules<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ProjectDefaultDimensionRules`.
   * @param dataAreaId Key property. See {@link ProjectDefaultDimensionRules.dataAreaId}.
   * @param contractLineGroupRelation Key property. See {@link ProjectDefaultDimensionRules.contractLineGroupRelation}.
   * @param contractLineGroupId Key property. See {@link ProjectDefaultDimensionRules.contractLineGroupId}.
   * @param revenueProfileRelation Key property. See {@link ProjectDefaultDimensionRules.revenueProfileRelation}.
   * @param revenueProfileId Key property. See {@link ProjectDefaultDimensionRules.revenueProfileId}.
   * @param contractRelation Key property. See {@link ProjectDefaultDimensionRules.contractRelation}.
   * @param contractId Key property. See {@link ProjectDefaultDimensionRules.contractId}.
   * @param projectRelation Key property. See {@link ProjectDefaultDimensionRules.projectRelation}.
   * @param projectRelationId Key property. See {@link ProjectDefaultDimensionRules.projectRelationId}.
   * @returns A request builder for creating requests that delete an entity of type `ProjectDefaultDimensionRules`.
   */
  delete(
    dataAreaId: string,
    contractLineGroupRelation: TableAll,
    contractLineGroupId: string,
    revenueProfileRelation: TableAll,
    revenueProfileId: string,
    contractRelation: TableAll,
    contractId: string,
    projectRelation: TableGroupAll,
    projectRelationId: string
  ): DeleteRequestBuilder<ProjectDefaultDimensionRules<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ProjectDefaultDimensionRules`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ProjectDefaultDimensionRules` by taking the entity as a parameter.
   */
  delete(
    entity: ProjectDefaultDimensionRules<T>
  ): DeleteRequestBuilder<ProjectDefaultDimensionRules<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    contractLineGroupRelation?: TableAll,
    contractLineGroupId?: string,
    revenueProfileRelation?: TableAll,
    revenueProfileId?: string,
    contractRelation?: TableAll,
    contractId?: string,
    projectRelation?: TableGroupAll,
    projectRelationId?: string
  ): DeleteRequestBuilder<ProjectDefaultDimensionRules<T>, T> {
    return new DeleteRequestBuilder<ProjectDefaultDimensionRules<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ProjectDefaultDimensionRules
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ContractLineGroupRelation: contractLineGroupRelation!,
            ContractLineGroupId: contractLineGroupId!,
            RevenueProfileRelation: revenueProfileRelation!,
            RevenueProfileId: revenueProfileId!,
            ContractRelation: contractRelation!,
            ContractId: contractId!,
            ProjectRelation: projectRelation!,
            ProjectRelationId: projectRelationId!
          }
    );
  }
}
