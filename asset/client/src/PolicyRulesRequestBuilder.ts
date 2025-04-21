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
import { PolicyRules } from './PolicyRules';
import { SysPolicyTypeEnum } from './SysPolicyTypeEnum';

/**
 * Request builder class for operations supported on the {@link PolicyRules} entity.
 */
export class PolicyRulesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PolicyRules<T>, T> {
  /**
   * Returns a request builder for querying all `PolicyRules` entities.
   * @returns A request builder for creating requests to retrieve all `PolicyRules` entities.
   */
  getAll(): GetAllRequestBuilder<PolicyRules<T>, T> {
    return new GetAllRequestBuilder<PolicyRules<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `PolicyRules` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PolicyRules`.
   */
  create(entity: PolicyRules<T>): CreateRequestBuilder<PolicyRules<T>, T> {
    return new CreateRequestBuilder<PolicyRules<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `PolicyRules` entity based on its keys.
   * @param policyName Key property. See {@link PolicyRules.policyName}.
   * @param policyType Key property. See {@link PolicyRules.policyType}.
   * @param policyRuleName Key property. See {@link PolicyRules.policyRuleName}.
   * @param validFrom Key property. See {@link PolicyRules.validFrom}.
   * @returns A request builder for creating requests to retrieve one `PolicyRules` entity based on its keys.
   */
  getByKey(
    policyName: DeserializedType<T, 'Edm.String'>,
    policyType: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.SysPolicyTypeEnum'
    >,
    policyRuleName: DeserializedType<T, 'Edm.String'>,
    validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>
  ): GetByKeyRequestBuilder<PolicyRules<T>, T> {
    return new GetByKeyRequestBuilder<PolicyRules<T>, T>(this.entityApi, {
      PolicyName: policyName,
      PolicyType: policyType,
      PolicyRuleName: policyRuleName,
      ValidFrom: validFrom
    });
  }

  /**
   * Returns a request builder for updating an entity of type `PolicyRules`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PolicyRules`.
   */
  update(entity: PolicyRules<T>): UpdateRequestBuilder<PolicyRules<T>, T> {
    return new UpdateRequestBuilder<PolicyRules<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `PolicyRules`.
   * @param policyName Key property. See {@link PolicyRules.policyName}.
   * @param policyType Key property. See {@link PolicyRules.policyType}.
   * @param policyRuleName Key property. See {@link PolicyRules.policyRuleName}.
   * @param validFrom Key property. See {@link PolicyRules.validFrom}.
   * @returns A request builder for creating requests that delete an entity of type `PolicyRules`.
   */
  delete(
    policyName: string,
    policyType: SysPolicyTypeEnum,
    policyRuleName: string,
    validFrom: Moment
  ): DeleteRequestBuilder<PolicyRules<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PolicyRules`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PolicyRules` by taking the entity as a parameter.
   */
  delete(entity: PolicyRules<T>): DeleteRequestBuilder<PolicyRules<T>, T>;
  delete(
    policyNameOrEntity: any,
    policyType?: SysPolicyTypeEnum,
    policyRuleName?: string,
    validFrom?: Moment
  ): DeleteRequestBuilder<PolicyRules<T>, T> {
    return new DeleteRequestBuilder<PolicyRules<T>, T>(
      this.entityApi,
      policyNameOrEntity instanceof PolicyRules
        ? policyNameOrEntity
        : {
            PolicyName: policyNameOrEntity!,
            PolicyType: policyType!,
            PolicyRuleName: policyRuleName!,
            ValidFrom: validFrom!
          }
    );
  }
}
