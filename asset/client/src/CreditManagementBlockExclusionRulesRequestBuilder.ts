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
import { CreditManagementBlockExclusionRules } from './CreditManagementBlockExclusionRules';
import { CredManBlockExclusionRuleType } from './CredManBlockExclusionRuleType';
import { CredManRuleType } from './CredManRuleType';
import { TableGroupAll } from './TableGroupAll';

/**
 * Request builder class for operations supported on the {@link CreditManagementBlockExclusionRules} entity.
 */
export class CreditManagementBlockExclusionRulesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CreditManagementBlockExclusionRules<T>, T> {
  /**
   * Returns a request builder for querying all `CreditManagementBlockExclusionRules` entities.
   * @returns A request builder for creating requests to retrieve all `CreditManagementBlockExclusionRules` entities.
   */
  getAll(): GetAllRequestBuilder<CreditManagementBlockExclusionRules<T>, T> {
    return new GetAllRequestBuilder<CreditManagementBlockExclusionRules<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `CreditManagementBlockExclusionRules` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CreditManagementBlockExclusionRules`.
   */
  create(
    entity: CreditManagementBlockExclusionRules<T>
  ): CreateRequestBuilder<CreditManagementBlockExclusionRules<T>, T> {
    return new CreateRequestBuilder<CreditManagementBlockExclusionRules<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `CreditManagementBlockExclusionRules` entity based on its keys.
   * @param dataAreaId Key property. See {@link CreditManagementBlockExclusionRules.dataAreaId}.
   * @param ruleId Key property. See {@link CreditManagementBlockExclusionRules.ruleId}.
   * @param ruleType Key property. See {@link CreditManagementBlockExclusionRules.ruleType}.
   * @param tableGroupAll Key property. See {@link CreditManagementBlockExclusionRules.tableGroupAll}.
   * @param custRelation Key property. See {@link CreditManagementBlockExclusionRules.custRelation}.
   * @param riskGroupId Key property. See {@link CreditManagementBlockExclusionRules.riskGroupId}.
   * @returns A request builder for creating requests to retrieve one `CreditManagementBlockExclusionRules` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    ruleId: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.CredManBlockExclusionRuleType'
    >,
    ruleType: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.CredManRuleType'
    >,
    tableGroupAll: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.TableGroupAll'
    >,
    custRelation: DeserializedType<T, 'Edm.String'>,
    riskGroupId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<CreditManagementBlockExclusionRules<T>, T> {
    return new GetByKeyRequestBuilder<
      CreditManagementBlockExclusionRules<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      RuleId: ruleId,
      RuleType: ruleType,
      TableGroupAll: tableGroupAll,
      CustRelation: custRelation,
      RiskGroupId: riskGroupId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `CreditManagementBlockExclusionRules`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CreditManagementBlockExclusionRules`.
   */
  update(
    entity: CreditManagementBlockExclusionRules<T>
  ): UpdateRequestBuilder<CreditManagementBlockExclusionRules<T>, T> {
    return new UpdateRequestBuilder<CreditManagementBlockExclusionRules<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `CreditManagementBlockExclusionRules`.
   * @param dataAreaId Key property. See {@link CreditManagementBlockExclusionRules.dataAreaId}.
   * @param ruleId Key property. See {@link CreditManagementBlockExclusionRules.ruleId}.
   * @param ruleType Key property. See {@link CreditManagementBlockExclusionRules.ruleType}.
   * @param tableGroupAll Key property. See {@link CreditManagementBlockExclusionRules.tableGroupAll}.
   * @param custRelation Key property. See {@link CreditManagementBlockExclusionRules.custRelation}.
   * @param riskGroupId Key property. See {@link CreditManagementBlockExclusionRules.riskGroupId}.
   * @returns A request builder for creating requests that delete an entity of type `CreditManagementBlockExclusionRules`.
   */
  delete(
    dataAreaId: string,
    ruleId: CredManBlockExclusionRuleType,
    ruleType: CredManRuleType,
    tableGroupAll: TableGroupAll,
    custRelation: string,
    riskGroupId: string
  ): DeleteRequestBuilder<CreditManagementBlockExclusionRules<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CreditManagementBlockExclusionRules`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CreditManagementBlockExclusionRules` by taking the entity as a parameter.
   */
  delete(
    entity: CreditManagementBlockExclusionRules<T>
  ): DeleteRequestBuilder<CreditManagementBlockExclusionRules<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    ruleId?: CredManBlockExclusionRuleType,
    ruleType?: CredManRuleType,
    tableGroupAll?: TableGroupAll,
    custRelation?: string,
    riskGroupId?: string
  ): DeleteRequestBuilder<CreditManagementBlockExclusionRules<T>, T> {
    return new DeleteRequestBuilder<CreditManagementBlockExclusionRules<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof CreditManagementBlockExclusionRules
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            RuleId: ruleId!,
            RuleType: ruleType!,
            TableGroupAll: tableGroupAll!,
            CustRelation: custRelation!,
            RiskGroupId: riskGroupId!
          }
    );
  }
}
