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
import { PeriodChargeRuleLineCustomers } from './PeriodChargeRuleLineCustomers';

/**
 * Request builder class for operations supported on the {@link PeriodChargeRuleLineCustomers} entity.
 */
export class PeriodChargeRuleLineCustomersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PeriodChargeRuleLineCustomers<T>, T> {
  /**
   * Returns a request builder for querying all `PeriodChargeRuleLineCustomers` entities.
   * @returns A request builder for creating requests to retrieve all `PeriodChargeRuleLineCustomers` entities.
   */
  getAll(): GetAllRequestBuilder<PeriodChargeRuleLineCustomers<T>, T> {
    return new GetAllRequestBuilder<PeriodChargeRuleLineCustomers<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `PeriodChargeRuleLineCustomers` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PeriodChargeRuleLineCustomers`.
   */
  create(
    entity: PeriodChargeRuleLineCustomers<T>
  ): CreateRequestBuilder<PeriodChargeRuleLineCustomers<T>, T> {
    return new CreateRequestBuilder<PeriodChargeRuleLineCustomers<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `PeriodChargeRuleLineCustomers` entity based on its keys.
   * @param dataAreaId Key property. See {@link PeriodChargeRuleLineCustomers.dataAreaId}.
   * @param ruleName Key property. See {@link PeriodChargeRuleLineCustomers.ruleName}.
   * @param lineNumber Key property. See {@link PeriodChargeRuleLineCustomers.lineNumber}.
   * @returns A request builder for creating requests to retrieve one `PeriodChargeRuleLineCustomers` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    ruleName: DeserializedType<T, 'Edm.String'>,
    lineNumber: DeserializedType<T, 'Edm.Decimal'>
  ): GetByKeyRequestBuilder<PeriodChargeRuleLineCustomers<T>, T> {
    return new GetByKeyRequestBuilder<PeriodChargeRuleLineCustomers<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        RuleName: ruleName,
        LineNumber: lineNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `PeriodChargeRuleLineCustomers`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PeriodChargeRuleLineCustomers`.
   */
  update(
    entity: PeriodChargeRuleLineCustomers<T>
  ): UpdateRequestBuilder<PeriodChargeRuleLineCustomers<T>, T> {
    return new UpdateRequestBuilder<PeriodChargeRuleLineCustomers<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `PeriodChargeRuleLineCustomers`.
   * @param dataAreaId Key property. See {@link PeriodChargeRuleLineCustomers.dataAreaId}.
   * @param ruleName Key property. See {@link PeriodChargeRuleLineCustomers.ruleName}.
   * @param lineNumber Key property. See {@link PeriodChargeRuleLineCustomers.lineNumber}.
   * @returns A request builder for creating requests that delete an entity of type `PeriodChargeRuleLineCustomers`.
   */
  delete(
    dataAreaId: string,
    ruleName: string,
    lineNumber: BigNumber
  ): DeleteRequestBuilder<PeriodChargeRuleLineCustomers<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PeriodChargeRuleLineCustomers`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PeriodChargeRuleLineCustomers` by taking the entity as a parameter.
   */
  delete(
    entity: PeriodChargeRuleLineCustomers<T>
  ): DeleteRequestBuilder<PeriodChargeRuleLineCustomers<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    ruleName?: string,
    lineNumber?: BigNumber
  ): DeleteRequestBuilder<PeriodChargeRuleLineCustomers<T>, T> {
    return new DeleteRequestBuilder<PeriodChargeRuleLineCustomers<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof PeriodChargeRuleLineCustomers
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            RuleName: ruleName!,
            LineNumber: lineNumber!
          }
    );
  }
}
