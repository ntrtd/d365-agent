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
import { AccrualPlanRules } from './AccrualPlanRules';

/**
 * Request builder class for operations supported on the {@link AccrualPlanRules} entity.
 */
export class AccrualPlanRulesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<AccrualPlanRules<T>, T> {
  /**
   * Returns a request builder for querying all `AccrualPlanRules` entities.
   * @returns A request builder for creating requests to retrieve all `AccrualPlanRules` entities.
   */
  getAll(): GetAllRequestBuilder<AccrualPlanRules<T>, T> {
    return new GetAllRequestBuilder<AccrualPlanRules<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `AccrualPlanRules` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AccrualPlanRules`.
   */
  create(
    entity: AccrualPlanRules<T>
  ): CreateRequestBuilder<AccrualPlanRules<T>, T> {
    return new CreateRequestBuilder<AccrualPlanRules<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `AccrualPlanRules` entity based on its keys.
   * @param accrualId Key property. See {@link AccrualPlanRules.accrualId}.
   * @param employmentMonths Key property. See {@link AccrualPlanRules.employmentMonths}.
   * @returns A request builder for creating requests to retrieve one `AccrualPlanRules` entity based on its keys.
   */
  getByKey(
    accrualId: DeserializedType<T, 'Edm.String'>,
    employmentMonths: DeserializedType<T, 'Edm.Decimal'>
  ): GetByKeyRequestBuilder<AccrualPlanRules<T>, T> {
    return new GetByKeyRequestBuilder<AccrualPlanRules<T>, T>(this.entityApi, {
      AccrualId: accrualId,
      EmploymentMonths: employmentMonths
    });
  }

  /**
   * Returns a request builder for updating an entity of type `AccrualPlanRules`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AccrualPlanRules`.
   */
  update(
    entity: AccrualPlanRules<T>
  ): UpdateRequestBuilder<AccrualPlanRules<T>, T> {
    return new UpdateRequestBuilder<AccrualPlanRules<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `AccrualPlanRules`.
   * @param accrualId Key property. See {@link AccrualPlanRules.accrualId}.
   * @param employmentMonths Key property. See {@link AccrualPlanRules.employmentMonths}.
   * @returns A request builder for creating requests that delete an entity of type `AccrualPlanRules`.
   */
  delete(
    accrualId: string,
    employmentMonths: BigNumber
  ): DeleteRequestBuilder<AccrualPlanRules<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `AccrualPlanRules`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AccrualPlanRules` by taking the entity as a parameter.
   */
  delete(
    entity: AccrualPlanRules<T>
  ): DeleteRequestBuilder<AccrualPlanRules<T>, T>;
  delete(
    accrualIdOrEntity: any,
    employmentMonths?: BigNumber
  ): DeleteRequestBuilder<AccrualPlanRules<T>, T> {
    return new DeleteRequestBuilder<AccrualPlanRules<T>, T>(
      this.entityApi,
      accrualIdOrEntity instanceof AccrualPlanRules
        ? accrualIdOrEntity
        : {
            AccrualId: accrualIdOrEntity!,
            EmploymentMonths: employmentMonths!
          }
    );
  }
}
