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
import type { RebateAndDeductionsAgreementDateSetupCriteriaApi } from './RebateAndDeductionsAgreementDateSetupCriteriaApi';
import { TamRebateMethod } from './TamRebateMethod';
import {
  RebateAndDeductionsAgreementDateSetupCriterionItems,
  RebateAndDeductionsAgreementDateSetupCriterionItemsType
} from './RebateAndDeductionsAgreementDateSetupCriterionItems';

/**
 * This class represents the entity "RebateAndDeductionsAgreementDateSetupCriteria" of service "d365_metadata".
 */
export class RebateAndDeductionsAgreementDateSetupCriteria<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements RebateAndDeductionsAgreementDateSetupCriteriaType<T>
{
  /**
   * Technical entity name for RebateAndDeductionsAgreementDateSetupCriteria.
   */
  static override _entityName = 'RebateAndDeductionsAgreementDateSetupCriteria';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RebateAndDeductionsAgreementDateSetupCriteria entity.
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
   * One-to-many navigation property to the {@link RebateAndDeductionsAgreementDateSetupCriterionItems} entity.
   */
  declare rebateAndDeductionsAgreementHeaderDateSetupCriterionItems: RebateAndDeductionsAgreementDateSetupCriterionItems<T>[];

  constructor(_entityApi: RebateAndDeductionsAgreementDateSetupCriteriaApi<T>) {
    super(_entityApi);
  }
}

export interface RebateAndDeductionsAgreementDateSetupCriteriaType<
  T extends DeSerializers = DefaultDeSerializers
> {
  agreementNumber: DeserializedType<T, 'Edm.String'>;
  agreementLineNumber: DeserializedType<T, 'Edm.Decimal'>;
  rebateValidFromQuantityAmount: DeserializedType<T, 'Edm.Decimal'>;
  rebateValidToQuantityAmount: DeserializedType<T, 'Edm.Decimal'>;
  rebateAmount: DeserializedType<T, 'Edm.Decimal'>;
  rebateCalculationMethod?: TamRebateMethod | null;
  rebateAndDeductionsAgreementHeaderDateSetupCriterionItems: RebateAndDeductionsAgreementDateSetupCriterionItemsType<T>[];
}
