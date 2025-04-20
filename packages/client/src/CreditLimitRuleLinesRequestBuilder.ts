/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BigNumber } from 'bignumber.js';
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
import { CreditLimitRuleLines } from './CreditLimitRuleLines';

/**
 * Request builder class for operations supported on the {@link CreditLimitRuleLines} entity.
 */
export class CreditLimitRuleLinesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CreditLimitRuleLines<T>, T> {
  /**
   * Returns a request builder for querying all `CreditLimitRuleLines` entities.
   * @returns A request builder for creating requests to retrieve all `CreditLimitRuleLines` entities.
   */
  getAll(): GetAllRequestBuilder<CreditLimitRuleLines<T>, T> {
    return new GetAllRequestBuilder<CreditLimitRuleLines<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `CreditLimitRuleLines` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CreditLimitRuleLines`.
   */
  create(
    entity: CreditLimitRuleLines<T>
  ): CreateRequestBuilder<CreditLimitRuleLines<T>, T> {
    return new CreateRequestBuilder<CreditLimitRuleLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `CreditLimitRuleLines` entity based on its keys.
   * @param dataAreaId Key property. See {@link CreditLimitRuleLines.dataAreaId}.
   * @param ruleRiskGroupId Key property. See {@link CreditLimitRuleLines.ruleRiskGroupId}.
   * @param ruleCurrencyCode Key property. See {@link CreditLimitRuleLines.ruleCurrencyCode}.
   * @param lineNum Key property. See {@link CreditLimitRuleLines.lineNum}.
   * @returns A request builder for creating requests to retrieve one `CreditLimitRuleLines` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    ruleRiskGroupId: DeserializedType<T, 'Edm.String'>,
    ruleCurrencyCode: DeserializedType<T, 'Edm.String'>,
    lineNum: DeserializedType<T, 'Edm.Decimal'>
  ): GetByKeyRequestBuilder<CreditLimitRuleLines<T>, T> {
    return new GetByKeyRequestBuilder<CreditLimitRuleLines<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        RuleRiskGroupId: ruleRiskGroupId,
        RuleCurrencyCode: ruleCurrencyCode,
        LineNum: lineNum
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `CreditLimitRuleLines`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CreditLimitRuleLines`.
   */
  update(
    entity: CreditLimitRuleLines<T>
  ): UpdateRequestBuilder<CreditLimitRuleLines<T>, T> {
    return new UpdateRequestBuilder<CreditLimitRuleLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `CreditLimitRuleLines`.
   * @param dataAreaId Key property. See {@link CreditLimitRuleLines.dataAreaId}.
   * @param ruleRiskGroupId Key property. See {@link CreditLimitRuleLines.ruleRiskGroupId}.
   * @param ruleCurrencyCode Key property. See {@link CreditLimitRuleLines.ruleCurrencyCode}.
   * @param lineNum Key property. See {@link CreditLimitRuleLines.lineNum}.
   * @returns A request builder for creating requests that delete an entity of type `CreditLimitRuleLines`.
   */
  delete(
    dataAreaId: string,
    ruleRiskGroupId: string,
    ruleCurrencyCode: string,
    lineNum: BigNumber
  ): DeleteRequestBuilder<CreditLimitRuleLines<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CreditLimitRuleLines`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CreditLimitRuleLines` by taking the entity as a parameter.
   */
  delete(
    entity: CreditLimitRuleLines<T>
  ): DeleteRequestBuilder<CreditLimitRuleLines<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    ruleRiskGroupId?: string,
    ruleCurrencyCode?: string,
    lineNum?: BigNumber
  ): DeleteRequestBuilder<CreditLimitRuleLines<T>, T> {
    return new DeleteRequestBuilder<CreditLimitRuleLines<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof CreditLimitRuleLines
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            RuleRiskGroupId: ruleRiskGroupId!,
            RuleCurrencyCode: ruleCurrencyCode!,
            LineNum: lineNum!
          }
    );
  }
}
