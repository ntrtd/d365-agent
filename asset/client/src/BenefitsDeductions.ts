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
import type { BenefitsDeductionsApi } from './BenefitsDeductionsApi';
import { NoYes } from './NoYes';
import { EarningCodes, EarningCodesType } from './EarningCodes';

/**
 * This class represents the entity "BenefitsDeductions" of service "d365_metadata".
 */
export class BenefitsDeductions<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements BenefitsDeductionsType<T>
{
  /**
   * Technical entity name for BenefitsDeductions.
   */
  static override _entityName = 'BenefitsDeductions';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the BenefitsDeductions entity.
   */
  static _keys = ['DeductionId', 'ValidFrom', 'ValidTo'];
  /**
   * Deduction Id.
   */
  declare deductionId: DeserializedType<T, 'Edm.String'>;
  /**
   * Valid From.
   */
  declare validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Valid To.
   */
  declare validTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Employee Deduction Amount Heading.
   * @nullable
   */
  declare employeeDeductionAmountHeading?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Paired Columns.
   * @nullable
   */
  declare pairedColumns?: NoYes | null;
  /**
   * Employer Deduction Amount Heading.
   * @nullable
   */
  declare employerDeductionAmountHeading?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Deduction Change Completed.
   * @nullable
   */
  declare deductionChangeCompleted?: NoYes | null;
  /**
   * Employee Deduction Heading.
   * @nullable
   */
  declare employeeDeductionHeading?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Employer Deduction Heading.
   * @nullable
   */
  declare employerDeductionHeading?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Payroll Employee Earning Code Id.
   * @nullable
   */
  declare payrollEmployeeEarningCodeId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Change Effective Date.
   */
  declare changeEffectiveDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Employee Deduction Payroll Reference.
   * @nullable
   */
  declare employeeDeductionPayrollReference?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Payroll Employer Earning Code Id.
   * @nullable
   */
  declare payrollEmployerEarningCodeId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Can Delete.
   * @nullable
   */
  declare canDelete?: NoYes | null;
  /**
   * Employer Deduction Payroll Reference.
   * @nullable
   */
  declare employerDeductionPayrollReference?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * One-to-one navigation property to the {@link EarningCodes} entity.
   */
  declare earningCode?: EarningCodes<T> | null;
  /**
   * One-to-one navigation property to the {@link EarningCodes} entity.
   */
  declare employerEarningCode?: EarningCodes<T> | null;

  constructor(_entityApi: BenefitsDeductionsApi<T>) {
    super(_entityApi);
  }
}

export interface BenefitsDeductionsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  deductionId: DeserializedType<T, 'Edm.String'>;
  validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  validTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  employeeDeductionAmountHeading?: DeserializedType<T, 'Edm.String'> | null;
  pairedColumns?: NoYes | null;
  employerDeductionAmountHeading?: DeserializedType<T, 'Edm.String'> | null;
  deductionChangeCompleted?: NoYes | null;
  employeeDeductionHeading?: DeserializedType<T, 'Edm.String'> | null;
  employerDeductionHeading?: DeserializedType<T, 'Edm.String'> | null;
  payrollEmployeeEarningCodeId?: DeserializedType<T, 'Edm.String'> | null;
  changeEffectiveDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  employeeDeductionPayrollReference?: DeserializedType<T, 'Edm.String'> | null;
  payrollEmployerEarningCodeId?: DeserializedType<T, 'Edm.String'> | null;
  canDelete?: NoYes | null;
  employerDeductionPayrollReference?: DeserializedType<T, 'Edm.String'> | null;
  earningCode?: EarningCodesType<T> | null;
  employerEarningCode?: EarningCodesType<T> | null;
}
