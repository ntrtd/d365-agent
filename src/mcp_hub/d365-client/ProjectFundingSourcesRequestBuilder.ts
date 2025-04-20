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
import { ProjectFundingSources } from './ProjectFundingSources';

/**
 * Request builder class for operations supported on the {@link ProjectFundingSources} entity.
 */
export class ProjectFundingSourcesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ProjectFundingSources<T>, T> {
  /**
   * Returns a request builder for querying all `ProjectFundingSources` entities.
   * @returns A request builder for creating requests to retrieve all `ProjectFundingSources` entities.
   */
  getAll(): GetAllRequestBuilder<ProjectFundingSources<T>, T> {
    return new GetAllRequestBuilder<ProjectFundingSources<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ProjectFundingSources` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ProjectFundingSources`.
   */
  create(
    entity: ProjectFundingSources<T>
  ): CreateRequestBuilder<ProjectFundingSources<T>, T> {
    return new CreateRequestBuilder<ProjectFundingSources<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ProjectFundingSources` entity based on its keys.
   * @param dataAreaId Key property. See {@link ProjectFundingSources.dataAreaId}.
   * @param projectContractId Key property. See {@link ProjectFundingSources.projectContractId}.
   * @param fundingSourceId Key property. See {@link ProjectFundingSources.fundingSourceId}.
   * @returns A request builder for creating requests to retrieve one `ProjectFundingSources` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    projectContractId: DeserializedType<T, 'Edm.String'>,
    fundingSourceId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ProjectFundingSources<T>, T> {
    return new GetByKeyRequestBuilder<ProjectFundingSources<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        ProjectContractID: projectContractId,
        FundingSourceId: fundingSourceId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ProjectFundingSources`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ProjectFundingSources`.
   */
  update(
    entity: ProjectFundingSources<T>
  ): UpdateRequestBuilder<ProjectFundingSources<T>, T> {
    return new UpdateRequestBuilder<ProjectFundingSources<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ProjectFundingSources`.
   * @param dataAreaId Key property. See {@link ProjectFundingSources.dataAreaId}.
   * @param projectContractId Key property. See {@link ProjectFundingSources.projectContractId}.
   * @param fundingSourceId Key property. See {@link ProjectFundingSources.fundingSourceId}.
   * @returns A request builder for creating requests that delete an entity of type `ProjectFundingSources`.
   */
  delete(
    dataAreaId: string,
    projectContractId: string,
    fundingSourceId: string
  ): DeleteRequestBuilder<ProjectFundingSources<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ProjectFundingSources`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ProjectFundingSources` by taking the entity as a parameter.
   */
  delete(
    entity: ProjectFundingSources<T>
  ): DeleteRequestBuilder<ProjectFundingSources<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    projectContractId?: string,
    fundingSourceId?: string
  ): DeleteRequestBuilder<ProjectFundingSources<T>, T> {
    return new DeleteRequestBuilder<ProjectFundingSources<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ProjectFundingSources
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ProjectContractID: projectContractId!,
            FundingSourceId: fundingSourceId!
          }
    );
  }
}
