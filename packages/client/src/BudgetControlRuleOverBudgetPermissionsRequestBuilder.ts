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
import { BudgetControlRuleOverBudgetPermissions } from './BudgetControlRuleOverBudgetPermissions';
import { BudgetControlConfigurationStatus } from './BudgetControlConfigurationStatus';

/**
 * Request builder class for operations supported on the {@link BudgetControlRuleOverBudgetPermissions} entity.
 */
export class BudgetControlRuleOverBudgetPermissionsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<BudgetControlRuleOverBudgetPermissions<T>, T> {
  /**
   * Returns a request builder for querying all `BudgetControlRuleOverBudgetPermissions` entities.
   * @returns A request builder for creating requests to retrieve all `BudgetControlRuleOverBudgetPermissions` entities.
   */
  getAll(): GetAllRequestBuilder<BudgetControlRuleOverBudgetPermissions<T>, T> {
    return new GetAllRequestBuilder<
      BudgetControlRuleOverBudgetPermissions<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `BudgetControlRuleOverBudgetPermissions` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `BudgetControlRuleOverBudgetPermissions`.
   */
  create(
    entity: BudgetControlRuleOverBudgetPermissions<T>
  ): CreateRequestBuilder<BudgetControlRuleOverBudgetPermissions<T>, T> {
    return new CreateRequestBuilder<
      BudgetControlRuleOverBudgetPermissions<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `BudgetControlRuleOverBudgetPermissions` entity based on its keys.
   * @param dataAreaId Key property. See {@link BudgetControlRuleOverBudgetPermissions.dataAreaId}.
   * @param legalEntityId Key property. See {@link BudgetControlRuleOverBudgetPermissions.legalEntityId}.
   * @param status Key property. See {@link BudgetControlRuleOverBudgetPermissions.status}.
   * @param ruleName Key property. See {@link BudgetControlRuleOverBudgetPermissions.ruleName}.
   * @param userGroupId Key property. See {@link BudgetControlRuleOverBudgetPermissions.userGroupId}.
   * @returns A request builder for creating requests to retrieve one `BudgetControlRuleOverBudgetPermissions` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    legalEntityId: DeserializedType<T, 'Edm.String'>,
    status: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.BudgetControlConfigurationStatus'
    >,
    ruleName: DeserializedType<T, 'Edm.String'>,
    userGroupId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<BudgetControlRuleOverBudgetPermissions<T>, T> {
    return new GetByKeyRequestBuilder<
      BudgetControlRuleOverBudgetPermissions<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      LegalEntityId: legalEntityId,
      Status: status,
      RuleName: ruleName,
      UserGroupId: userGroupId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `BudgetControlRuleOverBudgetPermissions`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `BudgetControlRuleOverBudgetPermissions`.
   */
  update(
    entity: BudgetControlRuleOverBudgetPermissions<T>
  ): UpdateRequestBuilder<BudgetControlRuleOverBudgetPermissions<T>, T> {
    return new UpdateRequestBuilder<
      BudgetControlRuleOverBudgetPermissions<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `BudgetControlRuleOverBudgetPermissions`.
   * @param dataAreaId Key property. See {@link BudgetControlRuleOverBudgetPermissions.dataAreaId}.
   * @param legalEntityId Key property. See {@link BudgetControlRuleOverBudgetPermissions.legalEntityId}.
   * @param status Key property. See {@link BudgetControlRuleOverBudgetPermissions.status}.
   * @param ruleName Key property. See {@link BudgetControlRuleOverBudgetPermissions.ruleName}.
   * @param userGroupId Key property. See {@link BudgetControlRuleOverBudgetPermissions.userGroupId}.
   * @returns A request builder for creating requests that delete an entity of type `BudgetControlRuleOverBudgetPermissions`.
   */
  delete(
    dataAreaId: string,
    legalEntityId: string,
    status: BudgetControlConfigurationStatus,
    ruleName: string,
    userGroupId: string
  ): DeleteRequestBuilder<BudgetControlRuleOverBudgetPermissions<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `BudgetControlRuleOverBudgetPermissions`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `BudgetControlRuleOverBudgetPermissions` by taking the entity as a parameter.
   */
  delete(
    entity: BudgetControlRuleOverBudgetPermissions<T>
  ): DeleteRequestBuilder<BudgetControlRuleOverBudgetPermissions<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    legalEntityId?: string,
    status?: BudgetControlConfigurationStatus,
    ruleName?: string,
    userGroupId?: string
  ): DeleteRequestBuilder<BudgetControlRuleOverBudgetPermissions<T>, T> {
    return new DeleteRequestBuilder<
      BudgetControlRuleOverBudgetPermissions<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof BudgetControlRuleOverBudgetPermissions
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            LegalEntityId: legalEntityId!,
            Status: status!,
            RuleName: ruleName!,
            UserGroupId: userGroupId!
          }
    );
  }
}
