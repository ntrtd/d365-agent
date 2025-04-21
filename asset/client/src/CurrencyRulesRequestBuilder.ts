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
import { CurrencyRules } from './CurrencyRules';

/**
 * Request builder class for operations supported on the {@link CurrencyRules} entity.
 */
export class CurrencyRulesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CurrencyRules<T>, T> {
  /**
   * Returns a request builder for querying all `CurrencyRules` entities.
   * @returns A request builder for creating requests to retrieve all `CurrencyRules` entities.
   */
  getAll(): GetAllRequestBuilder<CurrencyRules<T>, T> {
    return new GetAllRequestBuilder<CurrencyRules<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `CurrencyRules` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CurrencyRules`.
   */
  create(entity: CurrencyRules<T>): CreateRequestBuilder<CurrencyRules<T>, T> {
    return new CreateRequestBuilder<CurrencyRules<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `CurrencyRules` entity based on its keys.
   * @param dataAreaId Key property. See {@link CurrencyRules.dataAreaId}.
   * @param ruleGroup Key property. See {@link CurrencyRules.ruleGroup}.
   * @param currencyRuleGroup Key property. See {@link CurrencyRules.currencyRuleGroup}.
   * @param currency Key property. See {@link CurrencyRules.currency}.
   * @returns A request builder for creating requests to retrieve one `CurrencyRules` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    ruleGroup: DeserializedType<T, 'Edm.String'>,
    currencyRuleGroup: DeserializedType<T, 'Edm.String'>,
    currency: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<CurrencyRules<T>, T> {
    return new GetByKeyRequestBuilder<CurrencyRules<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      RuleGroup: ruleGroup,
      CurrencyRuleGroup: currencyRuleGroup,
      Currency: currency
    });
  }

  /**
   * Returns a request builder for updating an entity of type `CurrencyRules`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CurrencyRules`.
   */
  update(entity: CurrencyRules<T>): UpdateRequestBuilder<CurrencyRules<T>, T> {
    return new UpdateRequestBuilder<CurrencyRules<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `CurrencyRules`.
   * @param dataAreaId Key property. See {@link CurrencyRules.dataAreaId}.
   * @param ruleGroup Key property. See {@link CurrencyRules.ruleGroup}.
   * @param currencyRuleGroup Key property. See {@link CurrencyRules.currencyRuleGroup}.
   * @param currency Key property. See {@link CurrencyRules.currency}.
   * @returns A request builder for creating requests that delete an entity of type `CurrencyRules`.
   */
  delete(
    dataAreaId: string,
    ruleGroup: string,
    currencyRuleGroup: string,
    currency: string
  ): DeleteRequestBuilder<CurrencyRules<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CurrencyRules`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CurrencyRules` by taking the entity as a parameter.
   */
  delete(entity: CurrencyRules<T>): DeleteRequestBuilder<CurrencyRules<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    ruleGroup?: string,
    currencyRuleGroup?: string,
    currency?: string
  ): DeleteRequestBuilder<CurrencyRules<T>, T> {
    return new DeleteRequestBuilder<CurrencyRules<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof CurrencyRules
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            RuleGroup: ruleGroup!,
            CurrencyRuleGroup: currencyRuleGroup!,
            Currency: currency!
          }
    );
  }
}
