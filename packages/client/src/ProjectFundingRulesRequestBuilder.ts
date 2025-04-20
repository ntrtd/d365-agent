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
import { ProjectFundingRules } from './ProjectFundingRules';
import { ProjAllTrxType } from './ProjAllTrxType';

/**
 * Request builder class for operations supported on the {@link ProjectFundingRules} entity.
 */
export class ProjectFundingRulesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ProjectFundingRules<T>, T> {
  /**
   * Returns a request builder for querying all `ProjectFundingRules` entities.
   * @returns A request builder for creating requests to retrieve all `ProjectFundingRules` entities.
   */
  getAll(): GetAllRequestBuilder<ProjectFundingRules<T>, T> {
    return new GetAllRequestBuilder<ProjectFundingRules<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ProjectFundingRules` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ProjectFundingRules`.
   */
  create(
    entity: ProjectFundingRules<T>
  ): CreateRequestBuilder<ProjectFundingRules<T>, T> {
    return new CreateRequestBuilder<ProjectFundingRules<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ProjectFundingRules` entity based on its keys.
   * @param dataAreaId Key property. See {@link ProjectFundingRules.dataAreaId}.
   * @param projectContractId Key property. See {@link ProjectFundingRules.projectContractId}.
   * @param priority Key property. See {@link ProjectFundingRules.priority}.
   * @param projectId Key property. See {@link ProjectFundingRules.projectId}.
   * @param activityNumber Key property. See {@link ProjectFundingRules.activityNumber}.
   * @param transactionType Key property. See {@link ProjectFundingRules.transactionType}.
   * @param categoryId Key property. See {@link ProjectFundingRules.categoryId}.
   * @param categoryGroupId Key property. See {@link ProjectFundingRules.categoryGroupId}.
   * @param itemId Key property. See {@link ProjectFundingRules.itemId}.
   * @param endDate Key property. See {@link ProjectFundingRules.endDate}.
   * @param startDate Key property. See {@link ProjectFundingRules.startDate}.
   * @param resourceId Key property. See {@link ProjectFundingRules.resourceId}.
   * @param fundingSourceId Key property. See {@link ProjectFundingRules.fundingSourceId}.
   * @returns A request builder for creating requests to retrieve one `ProjectFundingRules` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    projectContractId: DeserializedType<T, 'Edm.String'>,
    priority: DeserializedType<T, 'Edm.Int32'>,
    projectId: DeserializedType<T, 'Edm.String'>,
    activityNumber: DeserializedType<T, 'Edm.String'>,
    transactionType: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.ProjAllTrxType'
    >,
    categoryId: DeserializedType<T, 'Edm.String'>,
    categoryGroupId: DeserializedType<T, 'Edm.String'>,
    itemId: DeserializedType<T, 'Edm.String'>,
    endDate: DeserializedType<T, 'Edm.DateTimeOffset'>,
    startDate: DeserializedType<T, 'Edm.DateTimeOffset'>,
    resourceId: DeserializedType<T, 'Edm.String'>,
    fundingSourceId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ProjectFundingRules<T>, T> {
    return new GetByKeyRequestBuilder<ProjectFundingRules<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        ProjectContractId: projectContractId,
        Priority: priority,
        ProjectId: projectId,
        ActivityNumber: activityNumber,
        TransactionType: transactionType,
        CategoryId: categoryId,
        CategoryGroupId: categoryGroupId,
        ItemId: itemId,
        EndDate: endDate,
        StartDate: startDate,
        ResourceId: resourceId,
        FundingSourceId: fundingSourceId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ProjectFundingRules`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ProjectFundingRules`.
   */
  update(
    entity: ProjectFundingRules<T>
  ): UpdateRequestBuilder<ProjectFundingRules<T>, T> {
    return new UpdateRequestBuilder<ProjectFundingRules<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ProjectFundingRules`.
   * @param dataAreaId Key property. See {@link ProjectFundingRules.dataAreaId}.
   * @param projectContractId Key property. See {@link ProjectFundingRules.projectContractId}.
   * @param priority Key property. See {@link ProjectFundingRules.priority}.
   * @param projectId Key property. See {@link ProjectFundingRules.projectId}.
   * @param activityNumber Key property. See {@link ProjectFundingRules.activityNumber}.
   * @param transactionType Key property. See {@link ProjectFundingRules.transactionType}.
   * @param categoryId Key property. See {@link ProjectFundingRules.categoryId}.
   * @param categoryGroupId Key property. See {@link ProjectFundingRules.categoryGroupId}.
   * @param itemId Key property. See {@link ProjectFundingRules.itemId}.
   * @param endDate Key property. See {@link ProjectFundingRules.endDate}.
   * @param startDate Key property. See {@link ProjectFundingRules.startDate}.
   * @param resourceId Key property. See {@link ProjectFundingRules.resourceId}.
   * @param fundingSourceId Key property. See {@link ProjectFundingRules.fundingSourceId}.
   * @returns A request builder for creating requests that delete an entity of type `ProjectFundingRules`.
   */
  delete(
    dataAreaId: string,
    projectContractId: string,
    priority: number,
    projectId: string,
    activityNumber: string,
    transactionType: ProjAllTrxType,
    categoryId: string,
    categoryGroupId: string,
    itemId: string,
    endDate: Moment,
    startDate: Moment,
    resourceId: string,
    fundingSourceId: string
  ): DeleteRequestBuilder<ProjectFundingRules<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ProjectFundingRules`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ProjectFundingRules` by taking the entity as a parameter.
   */
  delete(
    entity: ProjectFundingRules<T>
  ): DeleteRequestBuilder<ProjectFundingRules<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    projectContractId?: string,
    priority?: number,
    projectId?: string,
    activityNumber?: string,
    transactionType?: ProjAllTrxType,
    categoryId?: string,
    categoryGroupId?: string,
    itemId?: string,
    endDate?: Moment,
    startDate?: Moment,
    resourceId?: string,
    fundingSourceId?: string
  ): DeleteRequestBuilder<ProjectFundingRules<T>, T> {
    return new DeleteRequestBuilder<ProjectFundingRules<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ProjectFundingRules
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ProjectContractId: projectContractId!,
            Priority: priority!,
            ProjectId: projectId!,
            ActivityNumber: activityNumber!,
            TransactionType: transactionType!,
            CategoryId: categoryId!,
            CategoryGroupId: categoryGroupId!,
            ItemId: itemId!,
            EndDate: endDate!,
            StartDate: startDate!,
            ResourceId: resourceId!,
            FundingSourceId: fundingSourceId!
          }
    );
  }
}
