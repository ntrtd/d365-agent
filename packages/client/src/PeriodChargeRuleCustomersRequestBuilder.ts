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
import { PeriodChargeRuleCustomers } from './PeriodChargeRuleCustomers';

/**
 * Request builder class for operations supported on the {@link PeriodChargeRuleCustomers} entity.
 */
export class PeriodChargeRuleCustomersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PeriodChargeRuleCustomers<T>, T> {
  /**
   * Returns a request builder for querying all `PeriodChargeRuleCustomers` entities.
   * @returns A request builder for creating requests to retrieve all `PeriodChargeRuleCustomers` entities.
   */
  getAll(): GetAllRequestBuilder<PeriodChargeRuleCustomers<T>, T> {
    return new GetAllRequestBuilder<PeriodChargeRuleCustomers<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `PeriodChargeRuleCustomers` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PeriodChargeRuleCustomers`.
   */
  create(
    entity: PeriodChargeRuleCustomers<T>
  ): CreateRequestBuilder<PeriodChargeRuleCustomers<T>, T> {
    return new CreateRequestBuilder<PeriodChargeRuleCustomers<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `PeriodChargeRuleCustomers` entity based on its keys.
   * @param dataAreaId Key property. See {@link PeriodChargeRuleCustomers.dataAreaId}.
   * @param ruleName Key property. See {@link PeriodChargeRuleCustomers.ruleName}.
   * @param validFrom Key property. See {@link PeriodChargeRuleCustomers.validFrom}.
   * @returns A request builder for creating requests to retrieve one `PeriodChargeRuleCustomers` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    ruleName: DeserializedType<T, 'Edm.String'>,
    validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>
  ): GetByKeyRequestBuilder<PeriodChargeRuleCustomers<T>, T> {
    return new GetByKeyRequestBuilder<PeriodChargeRuleCustomers<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        RuleName: ruleName,
        ValidFrom: validFrom
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `PeriodChargeRuleCustomers`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PeriodChargeRuleCustomers`.
   */
  update(
    entity: PeriodChargeRuleCustomers<T>
  ): UpdateRequestBuilder<PeriodChargeRuleCustomers<T>, T> {
    return new UpdateRequestBuilder<PeriodChargeRuleCustomers<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `PeriodChargeRuleCustomers`.
   * @param dataAreaId Key property. See {@link PeriodChargeRuleCustomers.dataAreaId}.
   * @param ruleName Key property. See {@link PeriodChargeRuleCustomers.ruleName}.
   * @param validFrom Key property. See {@link PeriodChargeRuleCustomers.validFrom}.
   * @returns A request builder for creating requests that delete an entity of type `PeriodChargeRuleCustomers`.
   */
  delete(
    dataAreaId: string,
    ruleName: string,
    validFrom: Moment
  ): DeleteRequestBuilder<PeriodChargeRuleCustomers<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PeriodChargeRuleCustomers`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PeriodChargeRuleCustomers` by taking the entity as a parameter.
   */
  delete(
    entity: PeriodChargeRuleCustomers<T>
  ): DeleteRequestBuilder<PeriodChargeRuleCustomers<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    ruleName?: string,
    validFrom?: Moment
  ): DeleteRequestBuilder<PeriodChargeRuleCustomers<T>, T> {
    return new DeleteRequestBuilder<PeriodChargeRuleCustomers<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof PeriodChargeRuleCustomers
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            RuleName: ruleName!,
            ValidFrom: validFrom!
          }
    );
  }
}
