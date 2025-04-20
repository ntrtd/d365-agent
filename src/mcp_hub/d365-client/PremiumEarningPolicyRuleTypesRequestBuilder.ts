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
import { PremiumEarningPolicyRuleTypes } from './PremiumEarningPolicyRuleTypes';

/**
 * Request builder class for operations supported on the {@link PremiumEarningPolicyRuleTypes} entity.
 */
export class PremiumEarningPolicyRuleTypesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PremiumEarningPolicyRuleTypes<T>, T> {
  /**
   * Returns a request builder for querying all `PremiumEarningPolicyRuleTypes` entities.
   * @returns A request builder for creating requests to retrieve all `PremiumEarningPolicyRuleTypes` entities.
   */
  getAll(): GetAllRequestBuilder<PremiumEarningPolicyRuleTypes<T>, T> {
    return new GetAllRequestBuilder<PremiumEarningPolicyRuleTypes<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `PremiumEarningPolicyRuleTypes` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PremiumEarningPolicyRuleTypes`.
   */
  create(
    entity: PremiumEarningPolicyRuleTypes<T>
  ): CreateRequestBuilder<PremiumEarningPolicyRuleTypes<T>, T> {
    return new CreateRequestBuilder<PremiumEarningPolicyRuleTypes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `PremiumEarningPolicyRuleTypes` entity based on its keys.
   * @param ruleName Key property. See {@link PremiumEarningPolicyRuleTypes.ruleName}.
   * @param queryName Key property. See {@link PremiumEarningPolicyRuleTypes.queryName}.
   * @returns A request builder for creating requests to retrieve one `PremiumEarningPolicyRuleTypes` entity based on its keys.
   */
  getByKey(
    ruleName: DeserializedType<T, 'Edm.String'>,
    queryName: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<PremiumEarningPolicyRuleTypes<T>, T> {
    return new GetByKeyRequestBuilder<PremiumEarningPolicyRuleTypes<T>, T>(
      this.entityApi,
      {
        RuleName: ruleName,
        QueryName: queryName
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `PremiumEarningPolicyRuleTypes`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PremiumEarningPolicyRuleTypes`.
   */
  update(
    entity: PremiumEarningPolicyRuleTypes<T>
  ): UpdateRequestBuilder<PremiumEarningPolicyRuleTypes<T>, T> {
    return new UpdateRequestBuilder<PremiumEarningPolicyRuleTypes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `PremiumEarningPolicyRuleTypes`.
   * @param ruleName Key property. See {@link PremiumEarningPolicyRuleTypes.ruleName}.
   * @param queryName Key property. See {@link PremiumEarningPolicyRuleTypes.queryName}.
   * @returns A request builder for creating requests that delete an entity of type `PremiumEarningPolicyRuleTypes`.
   */
  delete(
    ruleName: string,
    queryName: string
  ): DeleteRequestBuilder<PremiumEarningPolicyRuleTypes<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PremiumEarningPolicyRuleTypes`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PremiumEarningPolicyRuleTypes` by taking the entity as a parameter.
   */
  delete(
    entity: PremiumEarningPolicyRuleTypes<T>
  ): DeleteRequestBuilder<PremiumEarningPolicyRuleTypes<T>, T>;
  delete(
    ruleNameOrEntity: any,
    queryName?: string
  ): DeleteRequestBuilder<PremiumEarningPolicyRuleTypes<T>, T> {
    return new DeleteRequestBuilder<PremiumEarningPolicyRuleTypes<T>, T>(
      this.entityApi,
      ruleNameOrEntity instanceof PremiumEarningPolicyRuleTypes
        ? ruleNameOrEntity
        : {
            RuleName: ruleNameOrEntity!,
            QueryName: queryName!
          }
    );
  }
}
