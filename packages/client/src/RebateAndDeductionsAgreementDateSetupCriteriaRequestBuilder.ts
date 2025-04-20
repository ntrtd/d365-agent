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
import { RebateAndDeductionsAgreementDateSetupCriteria } from './RebateAndDeductionsAgreementDateSetupCriteria';
import { TamRebateMethod } from './TamRebateMethod';

/**
 * Request builder class for operations supported on the {@link RebateAndDeductionsAgreementDateSetupCriteria} entity.
 */
export class RebateAndDeductionsAgreementDateSetupCriteriaRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RebateAndDeductionsAgreementDateSetupCriteria<T>, T> {
  /**
   * Returns a request builder for querying all `RebateAndDeductionsAgreementDateSetupCriteria` entities.
   * @returns A request builder for creating requests to retrieve all `RebateAndDeductionsAgreementDateSetupCriteria` entities.
   */
  getAll(): GetAllRequestBuilder<
    RebateAndDeductionsAgreementDateSetupCriteria<T>,
    T
  > {
    return new GetAllRequestBuilder<
      RebateAndDeductionsAgreementDateSetupCriteria<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `RebateAndDeductionsAgreementDateSetupCriteria` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RebateAndDeductionsAgreementDateSetupCriteria`.
   */
  create(
    entity: RebateAndDeductionsAgreementDateSetupCriteria<T>
  ): CreateRequestBuilder<RebateAndDeductionsAgreementDateSetupCriteria<T>, T> {
    return new CreateRequestBuilder<
      RebateAndDeductionsAgreementDateSetupCriteria<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `RebateAndDeductionsAgreementDateSetupCriteria` entity based on its keys.
   * @param agreementNumber Key property. See {@link RebateAndDeductionsAgreementDateSetupCriteria.agreementNumber}.
   * @param agreementLineNumber Key property. See {@link RebateAndDeductionsAgreementDateSetupCriteria.agreementLineNumber}.
   * @param rebateValidFromQuantityAmount Key property. See {@link RebateAndDeductionsAgreementDateSetupCriteria.rebateValidFromQuantityAmount}.
   * @param rebateValidToQuantityAmount Key property. See {@link RebateAndDeductionsAgreementDateSetupCriteria.rebateValidToQuantityAmount}.
   * @param rebateAmount Key property. See {@link RebateAndDeductionsAgreementDateSetupCriteria.rebateAmount}.
   * @param rebateCalculationMethod Key property. See {@link RebateAndDeductionsAgreementDateSetupCriteria.rebateCalculationMethod}.
   * @returns A request builder for creating requests to retrieve one `RebateAndDeductionsAgreementDateSetupCriteria` entity based on its keys.
   */
  getByKey(
    agreementNumber: DeserializedType<T, 'Edm.String'>,
    agreementLineNumber: DeserializedType<T, 'Edm.Decimal'>,
    rebateValidFromQuantityAmount: DeserializedType<T, 'Edm.Decimal'>,
    rebateValidToQuantityAmount: DeserializedType<T, 'Edm.Decimal'>,
    rebateAmount: DeserializedType<T, 'Edm.Decimal'>,
    rebateCalculationMethod: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.TAMRebateMethod'
    >
  ): GetByKeyRequestBuilder<
    RebateAndDeductionsAgreementDateSetupCriteria<T>,
    T
  > {
    return new GetByKeyRequestBuilder<
      RebateAndDeductionsAgreementDateSetupCriteria<T>,
      T
    >(this.entityApi, {
      AgreementNumber: agreementNumber,
      AgreementLineNumber: agreementLineNumber,
      RebateValidFromQuantityAmount: rebateValidFromQuantityAmount,
      RebateValidToQuantityAmount: rebateValidToQuantityAmount,
      RebateAmount: rebateAmount,
      RebateCalculationMethod: rebateCalculationMethod
    });
  }

  /**
   * Returns a request builder for updating an entity of type `RebateAndDeductionsAgreementDateSetupCriteria`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RebateAndDeductionsAgreementDateSetupCriteria`.
   */
  update(
    entity: RebateAndDeductionsAgreementDateSetupCriteria<T>
  ): UpdateRequestBuilder<RebateAndDeductionsAgreementDateSetupCriteria<T>, T> {
    return new UpdateRequestBuilder<
      RebateAndDeductionsAgreementDateSetupCriteria<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `RebateAndDeductionsAgreementDateSetupCriteria`.
   * @param agreementNumber Key property. See {@link RebateAndDeductionsAgreementDateSetupCriteria.agreementNumber}.
   * @param agreementLineNumber Key property. See {@link RebateAndDeductionsAgreementDateSetupCriteria.agreementLineNumber}.
   * @param rebateValidFromQuantityAmount Key property. See {@link RebateAndDeductionsAgreementDateSetupCriteria.rebateValidFromQuantityAmount}.
   * @param rebateValidToQuantityAmount Key property. See {@link RebateAndDeductionsAgreementDateSetupCriteria.rebateValidToQuantityAmount}.
   * @param rebateAmount Key property. See {@link RebateAndDeductionsAgreementDateSetupCriteria.rebateAmount}.
   * @param rebateCalculationMethod Key property. See {@link RebateAndDeductionsAgreementDateSetupCriteria.rebateCalculationMethod}.
   * @returns A request builder for creating requests that delete an entity of type `RebateAndDeductionsAgreementDateSetupCriteria`.
   */
  delete(
    agreementNumber: string,
    agreementLineNumber: BigNumber,
    rebateValidFromQuantityAmount: BigNumber,
    rebateValidToQuantityAmount: BigNumber,
    rebateAmount: BigNumber,
    rebateCalculationMethod: TamRebateMethod
  ): DeleteRequestBuilder<RebateAndDeductionsAgreementDateSetupCriteria<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RebateAndDeductionsAgreementDateSetupCriteria`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RebateAndDeductionsAgreementDateSetupCriteria` by taking the entity as a parameter.
   */
  delete(
    entity: RebateAndDeductionsAgreementDateSetupCriteria<T>
  ): DeleteRequestBuilder<RebateAndDeductionsAgreementDateSetupCriteria<T>, T>;
  delete(
    agreementNumberOrEntity: any,
    agreementLineNumber?: BigNumber,
    rebateValidFromQuantityAmount?: BigNumber,
    rebateValidToQuantityAmount?: BigNumber,
    rebateAmount?: BigNumber,
    rebateCalculationMethod?: TamRebateMethod
  ): DeleteRequestBuilder<RebateAndDeductionsAgreementDateSetupCriteria<T>, T> {
    return new DeleteRequestBuilder<
      RebateAndDeductionsAgreementDateSetupCriteria<T>,
      T
    >(
      this.entityApi,
      agreementNumberOrEntity instanceof
      RebateAndDeductionsAgreementDateSetupCriteria
        ? agreementNumberOrEntity
        : {
            AgreementNumber: agreementNumberOrEntity!,
            AgreementLineNumber: agreementLineNumber!,
            RebateValidFromQuantityAmount: rebateValidFromQuantityAmount!,
            RebateValidToQuantityAmount: rebateValidToQuantityAmount!,
            RebateAmount: rebateAmount!,
            RebateCalculationMethod: rebateCalculationMethod!
          }
    );
  }
}
