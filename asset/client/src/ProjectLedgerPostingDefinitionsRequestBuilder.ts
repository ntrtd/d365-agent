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
import { ProjectLedgerPostingDefinitions } from './ProjectLedgerPostingDefinitions';
import { ProjAccountType } from './ProjAccountType';

/**
 * Request builder class for operations supported on the {@link ProjectLedgerPostingDefinitions} entity.
 */
export class ProjectLedgerPostingDefinitionsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ProjectLedgerPostingDefinitions<T>, T> {
  /**
   * Returns a request builder for querying all `ProjectLedgerPostingDefinitions` entities.
   * @returns A request builder for creating requests to retrieve all `ProjectLedgerPostingDefinitions` entities.
   */
  getAll(): GetAllRequestBuilder<ProjectLedgerPostingDefinitions<T>, T> {
    return new GetAllRequestBuilder<ProjectLedgerPostingDefinitions<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ProjectLedgerPostingDefinitions` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ProjectLedgerPostingDefinitions`.
   */
  create(
    entity: ProjectLedgerPostingDefinitions<T>
  ): CreateRequestBuilder<ProjectLedgerPostingDefinitions<T>, T> {
    return new CreateRequestBuilder<ProjectLedgerPostingDefinitions<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ProjectLedgerPostingDefinitions` entity based on its keys.
   * @param dataAreaId Key property. See {@link ProjectLedgerPostingDefinitions.dataAreaId}.
   * @param projectAccountType Key property. See {@link ProjectLedgerPostingDefinitions.projectAccountType}.
   * @param projectId Key property. See {@link ProjectLedgerPostingDefinitions.projectId}.
   * @param projectGroup Key property. See {@link ProjectLedgerPostingDefinitions.projectGroup}.
   * @param categoryId Key property. See {@link ProjectLedgerPostingDefinitions.categoryId}.
   * @param categoryGroup Key property. See {@link ProjectLedgerPostingDefinitions.categoryGroup}.
   * @param taxGroupId Key property. See {@link ProjectLedgerPostingDefinitions.taxGroupId}.
   * @param projectContractId Key property. See {@link ProjectLedgerPostingDefinitions.projectContractId}.
   * @param fundingSourceId Key property. See {@link ProjectLedgerPostingDefinitions.fundingSourceId}.
   * @param borrowingLegalEntity Key property. See {@link ProjectLedgerPostingDefinitions.borrowingLegalEntity}.
   * @param lendingLegalEntity Key property. See {@link ProjectLedgerPostingDefinitions.lendingLegalEntity}.
   * @returns A request builder for creating requests to retrieve one `ProjectLedgerPostingDefinitions` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    projectAccountType: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.ProjAccountType'
    >,
    projectId: DeserializedType<T, 'Edm.String'>,
    projectGroup: DeserializedType<T, 'Edm.String'>,
    categoryId: DeserializedType<T, 'Edm.String'>,
    categoryGroup: DeserializedType<T, 'Edm.String'>,
    taxGroupId: DeserializedType<T, 'Edm.String'>,
    projectContractId: DeserializedType<T, 'Edm.String'>,
    fundingSourceId: DeserializedType<T, 'Edm.String'>,
    borrowingLegalEntity: DeserializedType<T, 'Edm.String'>,
    lendingLegalEntity: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ProjectLedgerPostingDefinitions<T>, T> {
    return new GetByKeyRequestBuilder<ProjectLedgerPostingDefinitions<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        ProjectAccountType: projectAccountType,
        ProjectId: projectId,
        ProjectGroup: projectGroup,
        CategoryId: categoryId,
        CategoryGroup: categoryGroup,
        TaxGroupId: taxGroupId,
        ProjectContractId: projectContractId,
        FundingSourceId: fundingSourceId,
        BorrowingLegalEntity: borrowingLegalEntity,
        LendingLegalEntity: lendingLegalEntity
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ProjectLedgerPostingDefinitions`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ProjectLedgerPostingDefinitions`.
   */
  update(
    entity: ProjectLedgerPostingDefinitions<T>
  ): UpdateRequestBuilder<ProjectLedgerPostingDefinitions<T>, T> {
    return new UpdateRequestBuilder<ProjectLedgerPostingDefinitions<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ProjectLedgerPostingDefinitions`.
   * @param dataAreaId Key property. See {@link ProjectLedgerPostingDefinitions.dataAreaId}.
   * @param projectAccountType Key property. See {@link ProjectLedgerPostingDefinitions.projectAccountType}.
   * @param projectId Key property. See {@link ProjectLedgerPostingDefinitions.projectId}.
   * @param projectGroup Key property. See {@link ProjectLedgerPostingDefinitions.projectGroup}.
   * @param categoryId Key property. See {@link ProjectLedgerPostingDefinitions.categoryId}.
   * @param categoryGroup Key property. See {@link ProjectLedgerPostingDefinitions.categoryGroup}.
   * @param taxGroupId Key property. See {@link ProjectLedgerPostingDefinitions.taxGroupId}.
   * @param projectContractId Key property. See {@link ProjectLedgerPostingDefinitions.projectContractId}.
   * @param fundingSourceId Key property. See {@link ProjectLedgerPostingDefinitions.fundingSourceId}.
   * @param borrowingLegalEntity Key property. See {@link ProjectLedgerPostingDefinitions.borrowingLegalEntity}.
   * @param lendingLegalEntity Key property. See {@link ProjectLedgerPostingDefinitions.lendingLegalEntity}.
   * @returns A request builder for creating requests that delete an entity of type `ProjectLedgerPostingDefinitions`.
   */
  delete(
    dataAreaId: string,
    projectAccountType: ProjAccountType,
    projectId: string,
    projectGroup: string,
    categoryId: string,
    categoryGroup: string,
    taxGroupId: string,
    projectContractId: string,
    fundingSourceId: string,
    borrowingLegalEntity: string,
    lendingLegalEntity: string
  ): DeleteRequestBuilder<ProjectLedgerPostingDefinitions<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ProjectLedgerPostingDefinitions`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ProjectLedgerPostingDefinitions` by taking the entity as a parameter.
   */
  delete(
    entity: ProjectLedgerPostingDefinitions<T>
  ): DeleteRequestBuilder<ProjectLedgerPostingDefinitions<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    projectAccountType?: ProjAccountType,
    projectId?: string,
    projectGroup?: string,
    categoryId?: string,
    categoryGroup?: string,
    taxGroupId?: string,
    projectContractId?: string,
    fundingSourceId?: string,
    borrowingLegalEntity?: string,
    lendingLegalEntity?: string
  ): DeleteRequestBuilder<ProjectLedgerPostingDefinitions<T>, T> {
    return new DeleteRequestBuilder<ProjectLedgerPostingDefinitions<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ProjectLedgerPostingDefinitions
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ProjectAccountType: projectAccountType!,
            ProjectId: projectId!,
            ProjectGroup: projectGroup!,
            CategoryId: categoryId!,
            CategoryGroup: categoryGroup!,
            TaxGroupId: taxGroupId!,
            ProjectContractId: projectContractId!,
            FundingSourceId: fundingSourceId!,
            BorrowingLegalEntity: borrowingLegalEntity!,
            LendingLegalEntity: lendingLegalEntity!
          }
    );
  }
}
