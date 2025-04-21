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
import { ComponentectGroupAssignments } from './ComponentectGroupAssignments';

/**
 * Request builder class for operations supported on the {@link ComponentectGroupAssignments} entity.
 */
export class ComponentectGroupAssignmentsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ComponentectGroupAssignments<T>, T> {
  /**
   * Returns a request builder for querying all `ComponentectGroupAssignments` entities.
   * @returns A request builder for creating requests to retrieve all `ComponentectGroupAssignments` entities.
   */
  getAll(): GetAllRequestBuilder<ComponentectGroupAssignments<T>, T> {
    return new GetAllRequestBuilder<ComponentectGroupAssignments<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ComponentectGroupAssignments` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ComponentectGroupAssignments`.
   */
  create(
    entity: ComponentectGroupAssignments<T>
  ): CreateRequestBuilder<ComponentectGroupAssignments<T>, T> {
    return new CreateRequestBuilder<ComponentectGroupAssignments<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ComponentectGroupAssignments` entity based on its keys.
   * @param dataAreaId Key property. See {@link ComponentectGroupAssignments.dataAreaId}.
   * @param projectContractId Key property. See {@link ComponentectGroupAssignments.projectContractId}.
   * @param customerAccount Key property. See {@link ComponentectGroupAssignments.customerAccount}.
   * @param effectiveFrom Key property. See {@link ComponentectGroupAssignments.effectiveFrom}.
   * @param projectId Key property. See {@link ComponentectGroupAssignments.projectId}.
   * @param category Key property. See {@link ComponentectGroupAssignments.category}.
   * @returns A request builder for creating requests to retrieve one `ComponentectGroupAssignments` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    projectContractId: DeserializedType<T, 'Edm.String'>,
    customerAccount: DeserializedType<T, 'Edm.String'>,
    effectiveFrom: DeserializedType<T, 'Edm.DateTimeOffset'>,
    projectId: DeserializedType<T, 'Edm.String'>,
    category: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ComponentectGroupAssignments<T>, T> {
    return new GetByKeyRequestBuilder<ComponentectGroupAssignments<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        ProjectContractID: projectContractId,
        CustomerAccount: customerAccount,
        EffectiveFrom: effectiveFrom,
        ProjectID: projectId,
        Category: category
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ComponentectGroupAssignments`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ComponentectGroupAssignments`.
   */
  update(
    entity: ComponentectGroupAssignments<T>
  ): UpdateRequestBuilder<ComponentectGroupAssignments<T>, T> {
    return new UpdateRequestBuilder<ComponentectGroupAssignments<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ComponentectGroupAssignments`.
   * @param dataAreaId Key property. See {@link ComponentectGroupAssignments.dataAreaId}.
   * @param projectContractId Key property. See {@link ComponentectGroupAssignments.projectContractId}.
   * @param customerAccount Key property. See {@link ComponentectGroupAssignments.customerAccount}.
   * @param effectiveFrom Key property. See {@link ComponentectGroupAssignments.effectiveFrom}.
   * @param projectId Key property. See {@link ComponentectGroupAssignments.projectId}.
   * @param category Key property. See {@link ComponentectGroupAssignments.category}.
   * @returns A request builder for creating requests that delete an entity of type `ComponentectGroupAssignments`.
   */
  delete(
    dataAreaId: string,
    projectContractId: string,
    customerAccount: string,
    effectiveFrom: Moment,
    projectId: string,
    category: string
  ): DeleteRequestBuilder<ComponentectGroupAssignments<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ComponentectGroupAssignments`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ComponentectGroupAssignments` by taking the entity as a parameter.
   */
  delete(
    entity: ComponentectGroupAssignments<T>
  ): DeleteRequestBuilder<ComponentectGroupAssignments<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    projectContractId?: string,
    customerAccount?: string,
    effectiveFrom?: Moment,
    projectId?: string,
    category?: string
  ): DeleteRequestBuilder<ComponentectGroupAssignments<T>, T> {
    return new DeleteRequestBuilder<ComponentectGroupAssignments<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ComponentectGroupAssignments
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ProjectContractID: projectContractId!,
            CustomerAccount: customerAccount!,
            EffectiveFrom: effectiveFrom!,
            ProjectID: projectId!,
            Category: category!
          }
    );
  }
}
