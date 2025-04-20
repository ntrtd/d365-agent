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
import { CreditLimitRules } from './CreditLimitRules';

/**
 * Request builder class for operations supported on the {@link CreditLimitRules} entity.
 */
export class CreditLimitRulesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CreditLimitRules<T>, T> {
  /**
   * Returns a request builder for querying all `CreditLimitRules` entities.
   * @returns A request builder for creating requests to retrieve all `CreditLimitRules` entities.
   */
  getAll(): GetAllRequestBuilder<CreditLimitRules<T>, T> {
    return new GetAllRequestBuilder<CreditLimitRules<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `CreditLimitRules` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CreditLimitRules`.
   */
  create(
    entity: CreditLimitRules<T>
  ): CreateRequestBuilder<CreditLimitRules<T>, T> {
    return new CreateRequestBuilder<CreditLimitRules<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `CreditLimitRules` entity based on its keys.
   * @param dataAreaId Key property. See {@link CreditLimitRules.dataAreaId}.
   * @param riskGroupId Key property. See {@link CreditLimitRules.riskGroupId}.
   * @param currencyCode Key property. See {@link CreditLimitRules.currencyCode}.
   * @returns A request builder for creating requests to retrieve one `CreditLimitRules` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    riskGroupId: DeserializedType<T, 'Edm.String'>,
    currencyCode: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<CreditLimitRules<T>, T> {
    return new GetByKeyRequestBuilder<CreditLimitRules<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      RiskGroupId: riskGroupId,
      CurrencyCode: currencyCode
    });
  }

  /**
   * Returns a request builder for updating an entity of type `CreditLimitRules`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CreditLimitRules`.
   */
  update(
    entity: CreditLimitRules<T>
  ): UpdateRequestBuilder<CreditLimitRules<T>, T> {
    return new UpdateRequestBuilder<CreditLimitRules<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `CreditLimitRules`.
   * @param dataAreaId Key property. See {@link CreditLimitRules.dataAreaId}.
   * @param riskGroupId Key property. See {@link CreditLimitRules.riskGroupId}.
   * @param currencyCode Key property. See {@link CreditLimitRules.currencyCode}.
   * @returns A request builder for creating requests that delete an entity of type `CreditLimitRules`.
   */
  delete(
    dataAreaId: string,
    riskGroupId: string,
    currencyCode: string
  ): DeleteRequestBuilder<CreditLimitRules<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CreditLimitRules`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CreditLimitRules` by taking the entity as a parameter.
   */
  delete(
    entity: CreditLimitRules<T>
  ): DeleteRequestBuilder<CreditLimitRules<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    riskGroupId?: string,
    currencyCode?: string
  ): DeleteRequestBuilder<CreditLimitRules<T>, T> {
    return new DeleteRequestBuilder<CreditLimitRules<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof CreditLimitRules
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            RiskGroupId: riskGroupId!,
            CurrencyCode: currencyCode!
          }
    );
  }
}
