/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  Entity,
  DefaultDeSerializers,
  DeSerializers,
  DeserializedType
} from '@sap-cloud-sdk/odata-v4';
import type { CustomerRebateReductionPrinciplesApi } from './CustomerRebateReductionPrinciplesApi';
import { NoYes } from './NoYes';
import { TamRebateReductionBasis } from './TamRebateReductionBasis';
import {
  RebateAndDeductionAgreementHeaders,
  RebateAndDeductionAgreementHeadersType
} from './RebateAndDeductionAgreementHeaders';

/**
 * This class represents the entity "CustomerRebateReductionPrinciples" of service "d365_metadata".
 */
export class CustomerRebateReductionPrinciples<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements CustomerRebateReductionPrinciplesType<T>
{
  /**
   * Technical entity name for CustomerRebateReductionPrinciples.
   */
  static override _entityName = 'CustomerRebateReductionPrinciples';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the CustomerRebateReductionPrinciples entity.
   */
  static _keys = ['PrincipleId'];
  /**
   * Principle Id.
   */
  declare principleId: DeserializedType<T, 'Edm.String'>;
  /**
   * Principle Description.
   * @nullable
   */
  declare principleDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Reduction Excluding Rebate.
   * @nullable
   */
  declare isReductionExcludingRebate?: NoYes | null;
  /**
   * Rebate Calculation Reduction Basis.
   * @nullable
   */
  declare rebateCalculationReductionBasis?: TamRebateReductionBasis | null;
  /**
   * Is Reduction Applying Rebate.
   * @nullable
   */
  declare isReductionApplyingRebate?: NoYes | null;
  /**
   * One-to-many navigation property to the {@link RebateAndDeductionAgreementHeaders} entity.
   */
  declare rebateAndDeductionsAgreementHeaders: RebateAndDeductionAgreementHeaders<T>[];

  constructor(_entityApi: CustomerRebateReductionPrinciplesApi<T>) {
    super(_entityApi);
  }
}

export interface CustomerRebateReductionPrinciplesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  principleId: DeserializedType<T, 'Edm.String'>;
  principleDescription?: DeserializedType<T, 'Edm.String'> | null;
  isReductionExcludingRebate?: NoYes | null;
  rebateCalculationReductionBasis?: TamRebateReductionBasis | null;
  isReductionApplyingRebate?: NoYes | null;
  rebateAndDeductionsAgreementHeaders: RebateAndDeductionAgreementHeadersType<T>[];
}
