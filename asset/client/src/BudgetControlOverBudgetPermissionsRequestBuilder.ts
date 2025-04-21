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
import { BudgetControlOverBudgetPermissions } from './BudgetControlOverBudgetPermissions';
import { BudgetControlConfigurationStatus } from './BudgetControlConfigurationStatus';

/**
 * Request builder class for operations supported on the {@link BudgetControlOverBudgetPermissions} entity.
 */
export class BudgetControlOverBudgetPermissionsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<BudgetControlOverBudgetPermissions<T>, T> {
  /**
   * Returns a request builder for querying all `BudgetControlOverBudgetPermissions` entities.
   * @returns A request builder for creating requests to retrieve all `BudgetControlOverBudgetPermissions` entities.
   */
  getAll(): GetAllRequestBuilder<BudgetControlOverBudgetPermissions<T>, T> {
    return new GetAllRequestBuilder<BudgetControlOverBudgetPermissions<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `BudgetControlOverBudgetPermissions` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `BudgetControlOverBudgetPermissions`.
   */
  create(
    entity: BudgetControlOverBudgetPermissions<T>
  ): CreateRequestBuilder<BudgetControlOverBudgetPermissions<T>, T> {
    return new CreateRequestBuilder<BudgetControlOverBudgetPermissions<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `BudgetControlOverBudgetPermissions` entity based on its keys.
   * @param dataAreaId Key property. See {@link BudgetControlOverBudgetPermissions.dataAreaId}.
   * @param legalEntityId Key property. See {@link BudgetControlOverBudgetPermissions.legalEntityId}.
   * @param status Key property. See {@link BudgetControlOverBudgetPermissions.status}.
   * @param userGroupId Key property. See {@link BudgetControlOverBudgetPermissions.userGroupId}.
   * @returns A request builder for creating requests to retrieve one `BudgetControlOverBudgetPermissions` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    legalEntityId: DeserializedType<T, 'Edm.String'>,
    status: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.BudgetControlConfigurationStatus'
    >,
    userGroupId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<BudgetControlOverBudgetPermissions<T>, T> {
    return new GetByKeyRequestBuilder<BudgetControlOverBudgetPermissions<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        LegalEntityId: legalEntityId,
        Status: status,
        UserGroupId: userGroupId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `BudgetControlOverBudgetPermissions`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `BudgetControlOverBudgetPermissions`.
   */
  update(
    entity: BudgetControlOverBudgetPermissions<T>
  ): UpdateRequestBuilder<BudgetControlOverBudgetPermissions<T>, T> {
    return new UpdateRequestBuilder<BudgetControlOverBudgetPermissions<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `BudgetControlOverBudgetPermissions`.
   * @param dataAreaId Key property. See {@link BudgetControlOverBudgetPermissions.dataAreaId}.
   * @param legalEntityId Key property. See {@link BudgetControlOverBudgetPermissions.legalEntityId}.
   * @param status Key property. See {@link BudgetControlOverBudgetPermissions.status}.
   * @param userGroupId Key property. See {@link BudgetControlOverBudgetPermissions.userGroupId}.
   * @returns A request builder for creating requests that delete an entity of type `BudgetControlOverBudgetPermissions`.
   */
  delete(
    dataAreaId: string,
    legalEntityId: string,
    status: BudgetControlConfigurationStatus,
    userGroupId: string
  ): DeleteRequestBuilder<BudgetControlOverBudgetPermissions<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `BudgetControlOverBudgetPermissions`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `BudgetControlOverBudgetPermissions` by taking the entity as a parameter.
   */
  delete(
    entity: BudgetControlOverBudgetPermissions<T>
  ): DeleteRequestBuilder<BudgetControlOverBudgetPermissions<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    legalEntityId?: string,
    status?: BudgetControlConfigurationStatus,
    userGroupId?: string
  ): DeleteRequestBuilder<BudgetControlOverBudgetPermissions<T>, T> {
    return new DeleteRequestBuilder<BudgetControlOverBudgetPermissions<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof BudgetControlOverBudgetPermissions
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            LegalEntityId: legalEntityId!,
            Status: status!,
            UserGroupId: userGroupId!
          }
    );
  }
}
