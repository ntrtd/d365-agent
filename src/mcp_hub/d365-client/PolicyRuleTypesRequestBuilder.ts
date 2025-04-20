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
import { PolicyRuleTypes } from './PolicyRuleTypes';
import { SysPolicyTypeEnum } from './SysPolicyTypeEnum';

/**
 * Request builder class for operations supported on the {@link PolicyRuleTypes} entity.
 */
export class PolicyRuleTypesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PolicyRuleTypes<T>, T> {
  /**
   * Returns a request builder for querying all `PolicyRuleTypes` entities.
   * @returns A request builder for creating requests to retrieve all `PolicyRuleTypes` entities.
   */
  getAll(): GetAllRequestBuilder<PolicyRuleTypes<T>, T> {
    return new GetAllRequestBuilder<PolicyRuleTypes<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `PolicyRuleTypes` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PolicyRuleTypes`.
   */
  create(
    entity: PolicyRuleTypes<T>
  ): CreateRequestBuilder<PolicyRuleTypes<T>, T> {
    return new CreateRequestBuilder<PolicyRuleTypes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `PolicyRuleTypes` entity based on its keys.
   * @param policyType Key property. See {@link PolicyRuleTypes.policyType}.
   * @param ruleName Key property. See {@link PolicyRuleTypes.ruleName}.
   * @returns A request builder for creating requests to retrieve one `PolicyRuleTypes` entity based on its keys.
   */
  getByKey(
    policyType: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.SysPolicyTypeEnum'
    >,
    ruleName: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<PolicyRuleTypes<T>, T> {
    return new GetByKeyRequestBuilder<PolicyRuleTypes<T>, T>(this.entityApi, {
      PolicyType: policyType,
      RuleName: ruleName
    });
  }

  /**
   * Returns a request builder for updating an entity of type `PolicyRuleTypes`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PolicyRuleTypes`.
   */
  update(
    entity: PolicyRuleTypes<T>
  ): UpdateRequestBuilder<PolicyRuleTypes<T>, T> {
    return new UpdateRequestBuilder<PolicyRuleTypes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `PolicyRuleTypes`.
   * @param policyType Key property. See {@link PolicyRuleTypes.policyType}.
   * @param ruleName Key property. See {@link PolicyRuleTypes.ruleName}.
   * @returns A request builder for creating requests that delete an entity of type `PolicyRuleTypes`.
   */
  delete(
    policyType: SysPolicyTypeEnum,
    ruleName: string
  ): DeleteRequestBuilder<PolicyRuleTypes<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PolicyRuleTypes`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PolicyRuleTypes` by taking the entity as a parameter.
   */
  delete(
    entity: PolicyRuleTypes<T>
  ): DeleteRequestBuilder<PolicyRuleTypes<T>, T>;
  delete(
    policyTypeOrEntity: any,
    ruleName?: string
  ): DeleteRequestBuilder<PolicyRuleTypes<T>, T> {
    return new DeleteRequestBuilder<PolicyRuleTypes<T>, T>(
      this.entityApi,
      policyTypeOrEntity instanceof PolicyRuleTypes
        ? policyTypeOrEntity
        : {
            PolicyType: policyTypeOrEntity!,
            RuleName: ruleName!
          }
    );
  }
}
