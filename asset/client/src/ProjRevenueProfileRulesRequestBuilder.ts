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
import { ProjRevenueProfileRules } from './ProjRevenueProfileRules';
import { ProjContractBillingMethod } from './ProjContractBillingMethod';

/**
 * Request builder class for operations supported on the {@link ProjRevenueProfileRules} entity.
 */
export class ProjRevenueProfileRulesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ProjRevenueProfileRules<T>, T> {
  /**
   * Returns a request builder for querying all `ProjRevenueProfileRules` entities.
   * @returns A request builder for creating requests to retrieve all `ProjRevenueProfileRules` entities.
   */
  getAll(): GetAllRequestBuilder<ProjRevenueProfileRules<T>, T> {
    return new GetAllRequestBuilder<ProjRevenueProfileRules<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ProjRevenueProfileRules` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ProjRevenueProfileRules`.
   */
  create(
    entity: ProjRevenueProfileRules<T>
  ): CreateRequestBuilder<ProjRevenueProfileRules<T>, T> {
    return new CreateRequestBuilder<ProjRevenueProfileRules<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ProjRevenueProfileRules` entity based on its keys.
   * @param dataAreaId Key property. See {@link ProjRevenueProfileRules.dataAreaId}.
   * @param projectRevenueProfileId Key property. See {@link ProjRevenueProfileRules.projectRevenueProfileId}.
   * @param projectContractBillingMethod Key property. See {@link ProjRevenueProfileRules.projectContractBillingMethod}.
   * @param projectContractId Key property. See {@link ProjRevenueProfileRules.projectContractId}.
   * @param projectId Key property. See {@link ProjRevenueProfileRules.projectId}.
   * @param projectGroupId Key property. See {@link ProjRevenueProfileRules.projectGroupId}.
   * @returns A request builder for creating requests to retrieve one `ProjRevenueProfileRules` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    projectRevenueProfileId: DeserializedType<T, 'Edm.String'>,
    projectContractBillingMethod: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.ProjContractBillingMethod'
    >,
    projectContractId: DeserializedType<T, 'Edm.String'>,
    projectId: DeserializedType<T, 'Edm.String'>,
    projectGroupId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ProjRevenueProfileRules<T>, T> {
    return new GetByKeyRequestBuilder<ProjRevenueProfileRules<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        ProjectRevenueProfileId: projectRevenueProfileId,
        ProjectContractBillingMethod: projectContractBillingMethod,
        ProjectContractId: projectContractId,
        ProjectId: projectId,
        ProjectGroupId: projectGroupId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ProjRevenueProfileRules`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ProjRevenueProfileRules`.
   */
  update(
    entity: ProjRevenueProfileRules<T>
  ): UpdateRequestBuilder<ProjRevenueProfileRules<T>, T> {
    return new UpdateRequestBuilder<ProjRevenueProfileRules<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ProjRevenueProfileRules`.
   * @param dataAreaId Key property. See {@link ProjRevenueProfileRules.dataAreaId}.
   * @param projectRevenueProfileId Key property. See {@link ProjRevenueProfileRules.projectRevenueProfileId}.
   * @param projectContractBillingMethod Key property. See {@link ProjRevenueProfileRules.projectContractBillingMethod}.
   * @param projectContractId Key property. See {@link ProjRevenueProfileRules.projectContractId}.
   * @param projectId Key property. See {@link ProjRevenueProfileRules.projectId}.
   * @param projectGroupId Key property. See {@link ProjRevenueProfileRules.projectGroupId}.
   * @returns A request builder for creating requests that delete an entity of type `ProjRevenueProfileRules`.
   */
  delete(
    dataAreaId: string,
    projectRevenueProfileId: string,
    projectContractBillingMethod: ProjContractBillingMethod,
    projectContractId: string,
    projectId: string,
    projectGroupId: string
  ): DeleteRequestBuilder<ProjRevenueProfileRules<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ProjRevenueProfileRules`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ProjRevenueProfileRules` by taking the entity as a parameter.
   */
  delete(
    entity: ProjRevenueProfileRules<T>
  ): DeleteRequestBuilder<ProjRevenueProfileRules<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    projectRevenueProfileId?: string,
    projectContractBillingMethod?: ProjContractBillingMethod,
    projectContractId?: string,
    projectId?: string,
    projectGroupId?: string
  ): DeleteRequestBuilder<ProjRevenueProfileRules<T>, T> {
    return new DeleteRequestBuilder<ProjRevenueProfileRules<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ProjRevenueProfileRules
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ProjectRevenueProfileId: projectRevenueProfileId!,
            ProjectContractBillingMethod: projectContractBillingMethod!,
            ProjectContractId: projectContractId!,
            ProjectId: projectId!,
            ProjectGroupId: projectGroupId!
          }
    );
  }
}
