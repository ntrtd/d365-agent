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
import { ProjectExpensePolicyGroupEmployees } from './ProjectExpensePolicyGroupEmployees';

/**
 * Request builder class for operations supported on the {@link ProjectExpensePolicyGroupEmployees} entity.
 */
export class ProjectExpensePolicyGroupEmployeesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ProjectExpensePolicyGroupEmployees<T>, T> {
  /**
   * Returns a request builder for querying all `ProjectExpensePolicyGroupEmployees` entities.
   * @returns A request builder for creating requests to retrieve all `ProjectExpensePolicyGroupEmployees` entities.
   */
  getAll(): GetAllRequestBuilder<ProjectExpensePolicyGroupEmployees<T>, T> {
    return new GetAllRequestBuilder<ProjectExpensePolicyGroupEmployees<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ProjectExpensePolicyGroupEmployees` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ProjectExpensePolicyGroupEmployees`.
   */
  create(
    entity: ProjectExpensePolicyGroupEmployees<T>
  ): CreateRequestBuilder<ProjectExpensePolicyGroupEmployees<T>, T> {
    return new CreateRequestBuilder<ProjectExpensePolicyGroupEmployees<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ProjectExpensePolicyGroupEmployees` entity based on its keys.
   * @param dataAreaId Key property. See {@link ProjectExpensePolicyGroupEmployees.dataAreaId}.
   * @param personnelNumber Key property. See {@link ProjectExpensePolicyGroupEmployees.personnelNumber}.
   * @returns A request builder for creating requests to retrieve one `ProjectExpensePolicyGroupEmployees` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    personnelNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ProjectExpensePolicyGroupEmployees<T>, T> {
    return new GetByKeyRequestBuilder<ProjectExpensePolicyGroupEmployees<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        PersonnelNumber: personnelNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ProjectExpensePolicyGroupEmployees`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ProjectExpensePolicyGroupEmployees`.
   */
  update(
    entity: ProjectExpensePolicyGroupEmployees<T>
  ): UpdateRequestBuilder<ProjectExpensePolicyGroupEmployees<T>, T> {
    return new UpdateRequestBuilder<ProjectExpensePolicyGroupEmployees<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ProjectExpensePolicyGroupEmployees`.
   * @param dataAreaId Key property. See {@link ProjectExpensePolicyGroupEmployees.dataAreaId}.
   * @param personnelNumber Key property. See {@link ProjectExpensePolicyGroupEmployees.personnelNumber}.
   * @returns A request builder for creating requests that delete an entity of type `ProjectExpensePolicyGroupEmployees`.
   */
  delete(
    dataAreaId: string,
    personnelNumber: string
  ): DeleteRequestBuilder<ProjectExpensePolicyGroupEmployees<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ProjectExpensePolicyGroupEmployees`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ProjectExpensePolicyGroupEmployees` by taking the entity as a parameter.
   */
  delete(
    entity: ProjectExpensePolicyGroupEmployees<T>
  ): DeleteRequestBuilder<ProjectExpensePolicyGroupEmployees<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    personnelNumber?: string
  ): DeleteRequestBuilder<ProjectExpensePolicyGroupEmployees<T>, T> {
    return new DeleteRequestBuilder<ProjectExpensePolicyGroupEmployees<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ProjectExpensePolicyGroupEmployees
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            PersonnelNumber: personnelNumber!
          }
    );
  }
}
