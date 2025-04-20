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
import { GupRebateAndDeductionsAgreementDateSetupCriterions } from './GupRebateAndDeductionsAgreementDateSetupCriterions';
import { TamRebateMethod } from './TamRebateMethod';

/**
 * Request builder class for operations supported on the {@link GupRebateAndDeductionsAgreementDateSetupCriterions} entity.
 */
export class GupRebateAndDeductionsAgreementDateSetupCriterionsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<
  GupRebateAndDeductionsAgreementDateSetupCriterions<T>,
  T
> {
  /**
   * Returns a request builder for querying all `GupRebateAndDeductionsAgreementDateSetupCriterions` entities.
   * @returns A request builder for creating requests to retrieve all `GupRebateAndDeductionsAgreementDateSetupCriterions` entities.
   */
  getAll(): GetAllRequestBuilder<
    GupRebateAndDeductionsAgreementDateSetupCriterions<T>,
    T
  > {
    return new GetAllRequestBuilder<
      GupRebateAndDeductionsAgreementDateSetupCriterions<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `GupRebateAndDeductionsAgreementDateSetupCriterions` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `GupRebateAndDeductionsAgreementDateSetupCriterions`.
   */
  create(
    entity: GupRebateAndDeductionsAgreementDateSetupCriterions<T>
  ): CreateRequestBuilder<
    GupRebateAndDeductionsAgreementDateSetupCriterions<T>,
    T
  > {
    return new CreateRequestBuilder<
      GupRebateAndDeductionsAgreementDateSetupCriterions<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `GupRebateAndDeductionsAgreementDateSetupCriterions` entity based on its keys.
   * @param agreementNumber Key property. See {@link GupRebateAndDeductionsAgreementDateSetupCriterions.agreementNumber}.
   * @param agreementLineNumber Key property. See {@link GupRebateAndDeductionsAgreementDateSetupCriterions.agreementLineNumber}.
   * @param rebateValidFromQuantityAmount Key property. See {@link GupRebateAndDeductionsAgreementDateSetupCriterions.rebateValidFromQuantityAmount}.
   * @param rebateValidToQuantityAmount Key property. See {@link GupRebateAndDeductionsAgreementDateSetupCriterions.rebateValidToQuantityAmount}.
   * @param rebateAmount Key property. See {@link GupRebateAndDeductionsAgreementDateSetupCriterions.rebateAmount}.
   * @param rebateCalculationMethod Key property. See {@link GupRebateAndDeductionsAgreementDateSetupCriterions.rebateCalculationMethod}.
   * @returns A request builder for creating requests to retrieve one `GupRebateAndDeductionsAgreementDateSetupCriterions` entity based on its keys.
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
    GupRebateAndDeductionsAgreementDateSetupCriterions<T>,
    T
  > {
    return new GetByKeyRequestBuilder<
      GupRebateAndDeductionsAgreementDateSetupCriterions<T>,
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
   * Returns a request builder for updating an entity of type `GupRebateAndDeductionsAgreementDateSetupCriterions`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `GupRebateAndDeductionsAgreementDateSetupCriterions`.
   */
  update(
    entity: GupRebateAndDeductionsAgreementDateSetupCriterions<T>
  ): UpdateRequestBuilder<
    GupRebateAndDeductionsAgreementDateSetupCriterions<T>,
    T
  > {
    return new UpdateRequestBuilder<
      GupRebateAndDeductionsAgreementDateSetupCriterions<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `GupRebateAndDeductionsAgreementDateSetupCriterions`.
   * @param agreementNumber Key property. See {@link GupRebateAndDeductionsAgreementDateSetupCriterions.agreementNumber}.
   * @param agreementLineNumber Key property. See {@link GupRebateAndDeductionsAgreementDateSetupCriterions.agreementLineNumber}.
   * @param rebateValidFromQuantityAmount Key property. See {@link GupRebateAndDeductionsAgreementDateSetupCriterions.rebateValidFromQuantityAmount}.
   * @param rebateValidToQuantityAmount Key property. See {@link GupRebateAndDeductionsAgreementDateSetupCriterions.rebateValidToQuantityAmount}.
   * @param rebateAmount Key property. See {@link GupRebateAndDeductionsAgreementDateSetupCriterions.rebateAmount}.
   * @param rebateCalculationMethod Key property. See {@link GupRebateAndDeductionsAgreementDateSetupCriterions.rebateCalculationMethod}.
   * @returns A request builder for creating requests that delete an entity of type `GupRebateAndDeductionsAgreementDateSetupCriterions`.
   */
  delete(
    agreementNumber: string,
    agreementLineNumber: BigNumber,
    rebateValidFromQuantityAmount: BigNumber,
    rebateValidToQuantityAmount: BigNumber,
    rebateAmount: BigNumber,
    rebateCalculationMethod: TamRebateMethod
  ): DeleteRequestBuilder<
    GupRebateAndDeductionsAgreementDateSetupCriterions<T>,
    T
  >;
  /**
   * Returns a request builder for deleting an entity of type `GupRebateAndDeductionsAgreementDateSetupCriterions`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `GupRebateAndDeductionsAgreementDateSetupCriterions` by taking the entity as a parameter.
   */
  delete(
    entity: GupRebateAndDeductionsAgreementDateSetupCriterions<T>
  ): DeleteRequestBuilder<
    GupRebateAndDeductionsAgreementDateSetupCriterions<T>,
    T
  >;
  delete(
    agreementNumberOrEntity: any,
    agreementLineNumber?: BigNumber,
    rebateValidFromQuantityAmount?: BigNumber,
    rebateValidToQuantityAmount?: BigNumber,
    rebateAmount?: BigNumber,
    rebateCalculationMethod?: TamRebateMethod
  ): DeleteRequestBuilder<
    GupRebateAndDeductionsAgreementDateSetupCriterions<T>,
    T
  > {
    return new DeleteRequestBuilder<
      GupRebateAndDeductionsAgreementDateSetupCriterions<T>,
      T
    >(
      this.entityApi,
      agreementNumberOrEntity instanceof
      GupRebateAndDeductionsAgreementDateSetupCriterions
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
