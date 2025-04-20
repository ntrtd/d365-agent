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
import { BudgetControlGroupOverBudgetPermissions } from './BudgetControlGroupOverBudgetPermissions';
import { BudgetControlConfigurationStatus } from './BudgetControlConfigurationStatus';

/**
 * Request builder class for operations supported on the {@link BudgetControlGroupOverBudgetPermissions} entity.
 */
export class BudgetControlGroupOverBudgetPermissionsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<BudgetControlGroupOverBudgetPermissions<T>, T> {
  /**
   * Returns a request builder for querying all `BudgetControlGroupOverBudgetPermissions` entities.
   * @returns A request builder for creating requests to retrieve all `BudgetControlGroupOverBudgetPermissions` entities.
   */
  getAll(): GetAllRequestBuilder<
    BudgetControlGroupOverBudgetPermissions<T>,
    T
  > {
    return new GetAllRequestBuilder<
      BudgetControlGroupOverBudgetPermissions<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `BudgetControlGroupOverBudgetPermissions` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `BudgetControlGroupOverBudgetPermissions`.
   */
  create(
    entity: BudgetControlGroupOverBudgetPermissions<T>
  ): CreateRequestBuilder<BudgetControlGroupOverBudgetPermissions<T>, T> {
    return new CreateRequestBuilder<
      BudgetControlGroupOverBudgetPermissions<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `BudgetControlGroupOverBudgetPermissions` entity based on its keys.
   * @param dataAreaId Key property. See {@link BudgetControlGroupOverBudgetPermissions.dataAreaId}.
   * @param legalEntityId Key property. See {@link BudgetControlGroupOverBudgetPermissions.legalEntityId}.
   * @param status Key property. See {@link BudgetControlGroupOverBudgetPermissions.status}.
   * @param budgetGroupName Key property. See {@link BudgetControlGroupOverBudgetPermissions.budgetGroupName}.
   * @param userGroupId Key property. See {@link BudgetControlGroupOverBudgetPermissions.userGroupId}.
   * @returns A request builder for creating requests to retrieve one `BudgetControlGroupOverBudgetPermissions` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    legalEntityId: DeserializedType<T, 'Edm.String'>,
    status: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.BudgetControlConfigurationStatus'
    >,
    budgetGroupName: DeserializedType<T, 'Edm.String'>,
    userGroupId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<BudgetControlGroupOverBudgetPermissions<T>, T> {
    return new GetByKeyRequestBuilder<
      BudgetControlGroupOverBudgetPermissions<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      LegalEntityId: legalEntityId,
      Status: status,
      BudgetGroupName: budgetGroupName,
      UserGroupId: userGroupId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `BudgetControlGroupOverBudgetPermissions`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `BudgetControlGroupOverBudgetPermissions`.
   */
  update(
    entity: BudgetControlGroupOverBudgetPermissions<T>
  ): UpdateRequestBuilder<BudgetControlGroupOverBudgetPermissions<T>, T> {
    return new UpdateRequestBuilder<
      BudgetControlGroupOverBudgetPermissions<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `BudgetControlGroupOverBudgetPermissions`.
   * @param dataAreaId Key property. See {@link BudgetControlGroupOverBudgetPermissions.dataAreaId}.
   * @param legalEntityId Key property. See {@link BudgetControlGroupOverBudgetPermissions.legalEntityId}.
   * @param status Key property. See {@link BudgetControlGroupOverBudgetPermissions.status}.
   * @param budgetGroupName Key property. See {@link BudgetControlGroupOverBudgetPermissions.budgetGroupName}.
   * @param userGroupId Key property. See {@link BudgetControlGroupOverBudgetPermissions.userGroupId}.
   * @returns A request builder for creating requests that delete an entity of type `BudgetControlGroupOverBudgetPermissions`.
   */
  delete(
    dataAreaId: string,
    legalEntityId: string,
    status: BudgetControlConfigurationStatus,
    budgetGroupName: string,
    userGroupId: string
  ): DeleteRequestBuilder<BudgetControlGroupOverBudgetPermissions<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `BudgetControlGroupOverBudgetPermissions`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `BudgetControlGroupOverBudgetPermissions` by taking the entity as a parameter.
   */
  delete(
    entity: BudgetControlGroupOverBudgetPermissions<T>
  ): DeleteRequestBuilder<BudgetControlGroupOverBudgetPermissions<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    legalEntityId?: string,
    status?: BudgetControlConfigurationStatus,
    budgetGroupName?: string,
    userGroupId?: string
  ): DeleteRequestBuilder<BudgetControlGroupOverBudgetPermissions<T>, T> {
    return new DeleteRequestBuilder<
      BudgetControlGroupOverBudgetPermissions<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof BudgetControlGroupOverBudgetPermissions
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            LegalEntityId: legalEntityId!,
            Status: status!,
            BudgetGroupName: budgetGroupName!,
            UserGroupId: userGroupId!
          }
    );
  }
}
