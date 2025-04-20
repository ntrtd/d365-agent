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
import type { GupRebateAndDeductionsAgreementDateSetupCriterionsApi } from './GupRebateAndDeductionsAgreementDateSetupCriterionsApi';
import { TamRebateMethod } from './TamRebateMethod';
import {
  RebateAndDeductionsAgreementDateSetups,
  RebateAndDeductionsAgreementDateSetupsType
} from './RebateAndDeductionsAgreementDateSetups';

/**
 * This class represents the entity "GUPRebateAndDeductionsAgreementDateSetupCriterions" of service "d365_metadata".
 */
export class GupRebateAndDeductionsAgreementDateSetupCriterions<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements GupRebateAndDeductionsAgreementDateSetupCriterionsType<T>
{
  /**
   * Technical entity name for GupRebateAndDeductionsAgreementDateSetupCriterions.
   */
  static override _entityName =
    'GUPRebateAndDeductionsAgreementDateSetupCriterions';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the GupRebateAndDeductionsAgreementDateSetupCriterions entity.
   */
  static _keys = [
    'AgreementNumber',
    'AgreementLineNumber',
    'RebateValidFromQuantityAmount',
    'RebateValidToQuantityAmount',
    'RebateAmount',
    'RebateCalculationMethod'
  ];
  /**
   * Agreement Number.
   */
  declare agreementNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Agreement Line Number.
   */
  declare agreementLineNumber: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Rebate Valid From Quantity Amount.
   */
  declare rebateValidFromQuantityAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Rebate Valid To Quantity Amount.
   */
  declare rebateValidToQuantityAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Rebate Amount.
   */
  declare rebateAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Rebate Calculation Method.
   * @nullable
   */
  declare rebateCalculationMethod?: TamRebateMethod | null;
  /**
   * Occurrences.
   */
  declare occurrences: DeserializedType<T, 'Edm.Int32'>;
  /**
   * One-to-one navigation property to the {@link RebateAndDeductionsAgreementDateSetups} entity.
   */
  declare rebateAndDeductionsAgreementDateSetup?: RebateAndDeductionsAgreementDateSetups<T> | null;

  constructor(
    _entityApi: GupRebateAndDeductionsAgreementDateSetupCriterionsApi<T>
  ) {
    super(_entityApi);
  }
}

export interface GupRebateAndDeductionsAgreementDateSetupCriterionsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  agreementNumber: DeserializedType<T, 'Edm.String'>;
  agreementLineNumber: DeserializedType<T, 'Edm.Decimal'>;
  rebateValidFromQuantityAmount: DeserializedType<T, 'Edm.Decimal'>;
  rebateValidToQuantityAmount: DeserializedType<T, 'Edm.Decimal'>;
  rebateAmount: DeserializedType<T, 'Edm.Decimal'>;
  rebateCalculationMethod?: TamRebateMethod | null;
  occurrences: DeserializedType<T, 'Edm.Int32'>;
  rebateAndDeductionsAgreementDateSetup?: RebateAndDeductionsAgreementDateSetupsType<T> | null;
}
