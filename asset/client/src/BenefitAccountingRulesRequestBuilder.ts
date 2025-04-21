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
import { BenefitAccountingRules } from './BenefitAccountingRules';
import { PayrollType } from './PayrollType';

/**
 * Request builder class for operations supported on the {@link BenefitAccountingRules} entity.
 */
export class BenefitAccountingRulesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<BenefitAccountingRules<T>, T> {
  /**
   * Returns a request builder for querying all `BenefitAccountingRules` entities.
   * @returns A request builder for creating requests to retrieve all `BenefitAccountingRules` entities.
   */
  getAll(): GetAllRequestBuilder<BenefitAccountingRules<T>, T> {
    return new GetAllRequestBuilder<BenefitAccountingRules<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `BenefitAccountingRules` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `BenefitAccountingRules`.
   */
  create(
    entity: BenefitAccountingRules<T>
  ): CreateRequestBuilder<BenefitAccountingRules<T>, T> {
    return new CreateRequestBuilder<BenefitAccountingRules<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `BenefitAccountingRules` entity based on its keys.
   * @param planId Key property. See {@link BenefitAccountingRules.planId}.
   * @param legalEntityId Key property. See {@link BenefitAccountingRules.legalEntityId}.
   * @param payrollType Key property. See {@link BenefitAccountingRules.payrollType}.
   * @returns A request builder for creating requests to retrieve one `BenefitAccountingRules` entity based on its keys.
   */
  getByKey(
    planId: DeserializedType<T, 'Edm.String'>,
    legalEntityId: DeserializedType<T, 'Edm.String'>,
    payrollType: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.PayrollType'
    >
  ): GetByKeyRequestBuilder<BenefitAccountingRules<T>, T> {
    return new GetByKeyRequestBuilder<BenefitAccountingRules<T>, T>(
      this.entityApi,
      {
        PlanId: planId,
        LegalEntityId: legalEntityId,
        PayrollType: payrollType
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `BenefitAccountingRules`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `BenefitAccountingRules`.
   */
  update(
    entity: BenefitAccountingRules<T>
  ): UpdateRequestBuilder<BenefitAccountingRules<T>, T> {
    return new UpdateRequestBuilder<BenefitAccountingRules<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `BenefitAccountingRules`.
   * @param planId Key property. See {@link BenefitAccountingRules.planId}.
   * @param legalEntityId Key property. See {@link BenefitAccountingRules.legalEntityId}.
   * @param payrollType Key property. See {@link BenefitAccountingRules.payrollType}.
   * @returns A request builder for creating requests that delete an entity of type `BenefitAccountingRules`.
   */
  delete(
    planId: string,
    legalEntityId: string,
    payrollType: PayrollType
  ): DeleteRequestBuilder<BenefitAccountingRules<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `BenefitAccountingRules`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `BenefitAccountingRules` by taking the entity as a parameter.
   */
  delete(
    entity: BenefitAccountingRules<T>
  ): DeleteRequestBuilder<BenefitAccountingRules<T>, T>;
  delete(
    planIdOrEntity: any,
    legalEntityId?: string,
    payrollType?: PayrollType
  ): DeleteRequestBuilder<BenefitAccountingRules<T>, T> {
    return new DeleteRequestBuilder<BenefitAccountingRules<T>, T>(
      this.entityApi,
      planIdOrEntity instanceof BenefitAccountingRules
        ? planIdOrEntity
        : {
            PlanId: planIdOrEntity!,
            LegalEntityId: legalEntityId!,
            PayrollType: payrollType!
          }
    );
  }
}
