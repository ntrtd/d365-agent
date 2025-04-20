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
import { ReconciliationMatchRuleSets } from './ReconciliationMatchRuleSets';

/**
 * Request builder class for operations supported on the {@link ReconciliationMatchRuleSets} entity.
 */
export class ReconciliationMatchRuleSetsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ReconciliationMatchRuleSets<T>, T> {
  /**
   * Returns a request builder for querying all `ReconciliationMatchRuleSets` entities.
   * @returns A request builder for creating requests to retrieve all `ReconciliationMatchRuleSets` entities.
   */
  getAll(): GetAllRequestBuilder<ReconciliationMatchRuleSets<T>, T> {
    return new GetAllRequestBuilder<ReconciliationMatchRuleSets<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ReconciliationMatchRuleSets` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ReconciliationMatchRuleSets`.
   */
  create(
    entity: ReconciliationMatchRuleSets<T>
  ): CreateRequestBuilder<ReconciliationMatchRuleSets<T>, T> {
    return new CreateRequestBuilder<ReconciliationMatchRuleSets<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ReconciliationMatchRuleSets` entity based on its keys.
   * @param matchingRuleSet Key property. See {@link ReconciliationMatchRuleSets.matchingRuleSet}.
   * @param lineNumber Key property. See {@link ReconciliationMatchRuleSets.lineNumber}.
   * @returns A request builder for creating requests to retrieve one `ReconciliationMatchRuleSets` entity based on its keys.
   */
  getByKey(
    matchingRuleSet: DeserializedType<T, 'Edm.String'>,
    lineNumber: DeserializedType<T, 'Edm.Decimal'>
  ): GetByKeyRequestBuilder<ReconciliationMatchRuleSets<T>, T> {
    return new GetByKeyRequestBuilder<ReconciliationMatchRuleSets<T>, T>(
      this.entityApi,
      {
        MatchingRuleSet: matchingRuleSet,
        LineNumber: lineNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ReconciliationMatchRuleSets`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ReconciliationMatchRuleSets`.
   */
  update(
    entity: ReconciliationMatchRuleSets<T>
  ): UpdateRequestBuilder<ReconciliationMatchRuleSets<T>, T> {
    return new UpdateRequestBuilder<ReconciliationMatchRuleSets<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ReconciliationMatchRuleSets`.
   * @param matchingRuleSet Key property. See {@link ReconciliationMatchRuleSets.matchingRuleSet}.
   * @param lineNumber Key property. See {@link ReconciliationMatchRuleSets.lineNumber}.
   * @returns A request builder for creating requests that delete an entity of type `ReconciliationMatchRuleSets`.
   */
  delete(
    matchingRuleSet: string,
    lineNumber: BigNumber
  ): DeleteRequestBuilder<ReconciliationMatchRuleSets<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ReconciliationMatchRuleSets`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ReconciliationMatchRuleSets` by taking the entity as a parameter.
   */
  delete(
    entity: ReconciliationMatchRuleSets<T>
  ): DeleteRequestBuilder<ReconciliationMatchRuleSets<T>, T>;
  delete(
    matchingRuleSetOrEntity: any,
    lineNumber?: BigNumber
  ): DeleteRequestBuilder<ReconciliationMatchRuleSets<T>, T> {
    return new DeleteRequestBuilder<ReconciliationMatchRuleSets<T>, T>(
      this.entityApi,
      matchingRuleSetOrEntity instanceof ReconciliationMatchRuleSets
        ? matchingRuleSetOrEntity
        : {
            MatchingRuleSet: matchingRuleSetOrEntity!,
            LineNumber: lineNumber!
          }
    );
  }
}
