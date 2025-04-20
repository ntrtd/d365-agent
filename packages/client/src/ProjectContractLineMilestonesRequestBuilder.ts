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
import { ProjectContractLineMilestones } from './ProjectContractLineMilestones';

/**
 * Request builder class for operations supported on the {@link ProjectContractLineMilestones} entity.
 */
export class ProjectContractLineMilestonesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ProjectContractLineMilestones<T>, T> {
  /**
   * Returns a request builder for querying all `ProjectContractLineMilestones` entities.
   * @returns A request builder for creating requests to retrieve all `ProjectContractLineMilestones` entities.
   */
  getAll(): GetAllRequestBuilder<ProjectContractLineMilestones<T>, T> {
    return new GetAllRequestBuilder<ProjectContractLineMilestones<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ProjectContractLineMilestones` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ProjectContractLineMilestones`.
   */
  create(
    entity: ProjectContractLineMilestones<T>
  ): CreateRequestBuilder<ProjectContractLineMilestones<T>, T> {
    return new CreateRequestBuilder<ProjectContractLineMilestones<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ProjectContractLineMilestones` entity based on its keys.
   * @param dataAreaId Key property. See {@link ProjectContractLineMilestones.dataAreaId}.
   * @param contractLineMilestoneIdentifier Key property. See {@link ProjectContractLineMilestones.contractLineMilestoneIdentifier}.
   * @returns A request builder for creating requests to retrieve one `ProjectContractLineMilestones` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    contractLineMilestoneIdentifier: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ProjectContractLineMilestones<T>, T> {
    return new GetByKeyRequestBuilder<ProjectContractLineMilestones<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        ContractLineMilestoneIdentifier: contractLineMilestoneIdentifier
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ProjectContractLineMilestones`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ProjectContractLineMilestones`.
   */
  update(
    entity: ProjectContractLineMilestones<T>
  ): UpdateRequestBuilder<ProjectContractLineMilestones<T>, T> {
    return new UpdateRequestBuilder<ProjectContractLineMilestones<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ProjectContractLineMilestones`.
   * @param dataAreaId Key property. See {@link ProjectContractLineMilestones.dataAreaId}.
   * @param contractLineMilestoneIdentifier Key property. See {@link ProjectContractLineMilestones.contractLineMilestoneIdentifier}.
   * @returns A request builder for creating requests that delete an entity of type `ProjectContractLineMilestones`.
   */
  delete(
    dataAreaId: string,
    contractLineMilestoneIdentifier: string
  ): DeleteRequestBuilder<ProjectContractLineMilestones<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ProjectContractLineMilestones`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ProjectContractLineMilestones` by taking the entity as a parameter.
   */
  delete(
    entity: ProjectContractLineMilestones<T>
  ): DeleteRequestBuilder<ProjectContractLineMilestones<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    contractLineMilestoneIdentifier?: string
  ): DeleteRequestBuilder<ProjectContractLineMilestones<T>, T> {
    return new DeleteRequestBuilder<ProjectContractLineMilestones<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ProjectContractLineMilestones
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ContractLineMilestoneIdentifier: contractLineMilestoneIdentifier!
          }
    );
  }
}
