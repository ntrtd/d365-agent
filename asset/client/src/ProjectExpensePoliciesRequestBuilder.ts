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
import { ProjectExpensePolicies } from './ProjectExpensePolicies';
import { ProjExpPolicyPerUnit } from './ProjExpPolicyPerUnit';
import { ProjExpPolicyType } from './ProjExpPolicyType';

/**
 * Request builder class for operations supported on the {@link ProjectExpensePolicies} entity.
 */
export class ProjectExpensePoliciesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ProjectExpensePolicies<T>, T> {
  /**
   * Returns a request builder for querying all `ProjectExpensePolicies` entities.
   * @returns A request builder for creating requests to retrieve all `ProjectExpensePolicies` entities.
   */
  getAll(): GetAllRequestBuilder<ProjectExpensePolicies<T>, T> {
    return new GetAllRequestBuilder<ProjectExpensePolicies<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ProjectExpensePolicies` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ProjectExpensePolicies`.
   */
  create(
    entity: ProjectExpensePolicies<T>
  ): CreateRequestBuilder<ProjectExpensePolicies<T>, T> {
    return new CreateRequestBuilder<ProjectExpensePolicies<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ProjectExpensePolicies` entity based on its keys.
   * @param dataAreaId Key property. See {@link ProjectExpensePolicies.dataAreaId}.
   * @param city Key property. See {@link ProjectExpensePolicies.city}.
   * @param expenseCategory Key property. See {@link ProjectExpensePolicies.expenseCategory}.
   * @param customerAccount Key property. See {@link ProjectExpensePolicies.customerAccount}.
   * @param startDate Key property. See {@link ProjectExpensePolicies.startDate}.
   * @param endDate Key property. See {@link ProjectExpensePolicies.endDate}.
   * @param currency Key property. See {@link ProjectExpensePolicies.currency}.
   * @param perUnit Key property. See {@link ProjectExpensePolicies.perUnit}.
   * @param policyType Key property. See {@link ProjectExpensePolicies.policyType}.
   * @param projectId Key property. See {@link ProjectExpensePolicies.projectId}.
   * @param projectContractId Key property. See {@link ProjectExpensePolicies.projectContractId}.
   * @param personnelNumber Key property. See {@link ProjectExpensePolicies.personnelNumber}.
   * @param projectExpensePolicyWorkerGroup Key property. See {@link ProjectExpensePolicies.projectExpensePolicyWorkerGroup}.
   * @returns A request builder for creating requests to retrieve one `ProjectExpensePolicies` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    city: DeserializedType<T, 'Edm.String'>,
    expenseCategory: DeserializedType<T, 'Edm.String'>,
    customerAccount: DeserializedType<T, 'Edm.String'>,
    startDate: DeserializedType<T, 'Edm.DateTimeOffset'>,
    endDate: DeserializedType<T, 'Edm.DateTimeOffset'>,
    currency: DeserializedType<T, 'Edm.String'>,
    perUnit: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.ProjExpPolicyPerUnit'
    >,
    policyType: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.ProjExpPolicyType'
    >,
    projectId: DeserializedType<T, 'Edm.String'>,
    projectContractId: DeserializedType<T, 'Edm.String'>,
    personnelNumber: DeserializedType<T, 'Edm.String'>,
    projectExpensePolicyWorkerGroup: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ProjectExpensePolicies<T>, T> {
    return new GetByKeyRequestBuilder<ProjectExpensePolicies<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        City: city,
        ExpenseCategory: expenseCategory,
        CustomerAccount: customerAccount,
        StartDate: startDate,
        EndDate: endDate,
        Currency: currency,
        PerUnit: perUnit,
        PolicyType: policyType,
        ProjectID: projectId,
        ProjectContractID: projectContractId,
        PersonnelNumber: personnelNumber,
        ProjectExpensePolicyWorkerGroup: projectExpensePolicyWorkerGroup
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ProjectExpensePolicies`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ProjectExpensePolicies`.
   */
  update(
    entity: ProjectExpensePolicies<T>
  ): UpdateRequestBuilder<ProjectExpensePolicies<T>, T> {
    return new UpdateRequestBuilder<ProjectExpensePolicies<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ProjectExpensePolicies`.
   * @param dataAreaId Key property. See {@link ProjectExpensePolicies.dataAreaId}.
   * @param city Key property. See {@link ProjectExpensePolicies.city}.
   * @param expenseCategory Key property. See {@link ProjectExpensePolicies.expenseCategory}.
   * @param customerAccount Key property. See {@link ProjectExpensePolicies.customerAccount}.
   * @param startDate Key property. See {@link ProjectExpensePolicies.startDate}.
   * @param endDate Key property. See {@link ProjectExpensePolicies.endDate}.
   * @param currency Key property. See {@link ProjectExpensePolicies.currency}.
   * @param perUnit Key property. See {@link ProjectExpensePolicies.perUnit}.
   * @param policyType Key property. See {@link ProjectExpensePolicies.policyType}.
   * @param projectId Key property. See {@link ProjectExpensePolicies.projectId}.
   * @param projectContractId Key property. See {@link ProjectExpensePolicies.projectContractId}.
   * @param personnelNumber Key property. See {@link ProjectExpensePolicies.personnelNumber}.
   * @param projectExpensePolicyWorkerGroup Key property. See {@link ProjectExpensePolicies.projectExpensePolicyWorkerGroup}.
   * @returns A request builder for creating requests that delete an entity of type `ProjectExpensePolicies`.
   */
  delete(
    dataAreaId: string,
    city: string,
    expenseCategory: string,
    customerAccount: string,
    startDate: Moment,
    endDate: Moment,
    currency: string,
    perUnit: ProjExpPolicyPerUnit,
    policyType: ProjExpPolicyType,
    projectId: string,
    projectContractId: string,
    personnelNumber: string,
    projectExpensePolicyWorkerGroup: string
  ): DeleteRequestBuilder<ProjectExpensePolicies<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ProjectExpensePolicies`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ProjectExpensePolicies` by taking the entity as a parameter.
   */
  delete(
    entity: ProjectExpensePolicies<T>
  ): DeleteRequestBuilder<ProjectExpensePolicies<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    city?: string,
    expenseCategory?: string,
    customerAccount?: string,
    startDate?: Moment,
    endDate?: Moment,
    currency?: string,
    perUnit?: ProjExpPolicyPerUnit,
    policyType?: ProjExpPolicyType,
    projectId?: string,
    projectContractId?: string,
    personnelNumber?: string,
    projectExpensePolicyWorkerGroup?: string
  ): DeleteRequestBuilder<ProjectExpensePolicies<T>, T> {
    return new DeleteRequestBuilder<ProjectExpensePolicies<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ProjectExpensePolicies
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            City: city!,
            ExpenseCategory: expenseCategory!,
            CustomerAccount: customerAccount!,
            StartDate: startDate!,
            EndDate: endDate!,
            Currency: currency!,
            PerUnit: perUnit!,
            PolicyType: policyType!,
            ProjectID: projectId!,
            ProjectContractID: projectContractId!,
            PersonnelNumber: personnelNumber!,
            ProjectExpensePolicyWorkerGroup: projectExpensePolicyWorkerGroup!
          }
    );
  }
}
