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
import { LedgerEliminationRuleLines } from './LedgerEliminationRuleLines';

/**
 * Request builder class for operations supported on the {@link LedgerEliminationRuleLines} entity.
 */
export class LedgerEliminationRuleLinesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<LedgerEliminationRuleLines<T>, T> {
  /**
   * Returns a request builder for querying all `LedgerEliminationRuleLines` entities.
   * @returns A request builder for creating requests to retrieve all `LedgerEliminationRuleLines` entities.
   */
  getAll(): GetAllRequestBuilder<LedgerEliminationRuleLines<T>, T> {
    return new GetAllRequestBuilder<LedgerEliminationRuleLines<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `LedgerEliminationRuleLines` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `LedgerEliminationRuleLines`.
   */
  create(
    entity: LedgerEliminationRuleLines<T>
  ): CreateRequestBuilder<LedgerEliminationRuleLines<T>, T> {
    return new CreateRequestBuilder<LedgerEliminationRuleLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `LedgerEliminationRuleLines` entity based on its keys.
   * @param dataAreaId Key property. See {@link LedgerEliminationRuleLines.dataAreaId}.
   * @param ruleId Key property. See {@link LedgerEliminationRuleLines.ruleId}.
   * @param lineNum Key property. See {@link LedgerEliminationRuleLines.lineNum}.
   * @returns A request builder for creating requests to retrieve one `LedgerEliminationRuleLines` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    ruleId: DeserializedType<T, 'Edm.String'>,
    lineNum: DeserializedType<T, 'Edm.Decimal'>
  ): GetByKeyRequestBuilder<LedgerEliminationRuleLines<T>, T> {
    return new GetByKeyRequestBuilder<LedgerEliminationRuleLines<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        RuleId: ruleId,
        LineNum: lineNum
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `LedgerEliminationRuleLines`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `LedgerEliminationRuleLines`.
   */
  update(
    entity: LedgerEliminationRuleLines<T>
  ): UpdateRequestBuilder<LedgerEliminationRuleLines<T>, T> {
    return new UpdateRequestBuilder<LedgerEliminationRuleLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `LedgerEliminationRuleLines`.
   * @param dataAreaId Key property. See {@link LedgerEliminationRuleLines.dataAreaId}.
   * @param ruleId Key property. See {@link LedgerEliminationRuleLines.ruleId}.
   * @param lineNum Key property. See {@link LedgerEliminationRuleLines.lineNum}.
   * @returns A request builder for creating requests that delete an entity of type `LedgerEliminationRuleLines`.
   */
  delete(
    dataAreaId: string,
    ruleId: string,
    lineNum: BigNumber
  ): DeleteRequestBuilder<LedgerEliminationRuleLines<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `LedgerEliminationRuleLines`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `LedgerEliminationRuleLines` by taking the entity as a parameter.
   */
  delete(
    entity: LedgerEliminationRuleLines<T>
  ): DeleteRequestBuilder<LedgerEliminationRuleLines<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    ruleId?: string,
    lineNum?: BigNumber
  ): DeleteRequestBuilder<LedgerEliminationRuleLines<T>, T> {
    return new DeleteRequestBuilder<LedgerEliminationRuleLines<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof LedgerEliminationRuleLines
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            RuleId: ruleId!,
            LineNum: lineNum!
          }
    );
  }
}
