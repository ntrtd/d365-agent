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
import { CurrencyRuleGroups } from './CurrencyRuleGroups';

/**
 * Request builder class for operations supported on the {@link CurrencyRuleGroups} entity.
 */
export class CurrencyRuleGroupsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CurrencyRuleGroups<T>, T> {
  /**
   * Returns a request builder for querying all `CurrencyRuleGroups` entities.
   * @returns A request builder for creating requests to retrieve all `CurrencyRuleGroups` entities.
   */
  getAll(): GetAllRequestBuilder<CurrencyRuleGroups<T>, T> {
    return new GetAllRequestBuilder<CurrencyRuleGroups<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `CurrencyRuleGroups` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CurrencyRuleGroups`.
   */
  create(
    entity: CurrencyRuleGroups<T>
  ): CreateRequestBuilder<CurrencyRuleGroups<T>, T> {
    return new CreateRequestBuilder<CurrencyRuleGroups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `CurrencyRuleGroups` entity based on its keys.
   * @param dataAreaId Key property. See {@link CurrencyRuleGroups.dataAreaId}.
   * @param currencyRuleGroupId Key property. See {@link CurrencyRuleGroups.currencyRuleGroupId}.
   * @param ruleGroupId Key property. See {@link CurrencyRuleGroups.ruleGroupId}.
   * @returns A request builder for creating requests to retrieve one `CurrencyRuleGroups` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    currencyRuleGroupId: DeserializedType<T, 'Edm.String'>,
    ruleGroupId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<CurrencyRuleGroups<T>, T> {
    return new GetByKeyRequestBuilder<CurrencyRuleGroups<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        CurrencyRuleGroupId: currencyRuleGroupId,
        RuleGroupId: ruleGroupId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `CurrencyRuleGroups`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CurrencyRuleGroups`.
   */
  update(
    entity: CurrencyRuleGroups<T>
  ): UpdateRequestBuilder<CurrencyRuleGroups<T>, T> {
    return new UpdateRequestBuilder<CurrencyRuleGroups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `CurrencyRuleGroups`.
   * @param dataAreaId Key property. See {@link CurrencyRuleGroups.dataAreaId}.
   * @param currencyRuleGroupId Key property. See {@link CurrencyRuleGroups.currencyRuleGroupId}.
   * @param ruleGroupId Key property. See {@link CurrencyRuleGroups.ruleGroupId}.
   * @returns A request builder for creating requests that delete an entity of type `CurrencyRuleGroups`.
   */
  delete(
    dataAreaId: string,
    currencyRuleGroupId: string,
    ruleGroupId: string
  ): DeleteRequestBuilder<CurrencyRuleGroups<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CurrencyRuleGroups`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CurrencyRuleGroups` by taking the entity as a parameter.
   */
  delete(
    entity: CurrencyRuleGroups<T>
  ): DeleteRequestBuilder<CurrencyRuleGroups<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    currencyRuleGroupId?: string,
    ruleGroupId?: string
  ): DeleteRequestBuilder<CurrencyRuleGroups<T>, T> {
    return new DeleteRequestBuilder<CurrencyRuleGroups<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof CurrencyRuleGroups
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            CurrencyRuleGroupId: currencyRuleGroupId!,
            RuleGroupId: ruleGroupId!
          }
    );
  }
}
