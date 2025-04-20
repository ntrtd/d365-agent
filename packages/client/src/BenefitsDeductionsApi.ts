/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BenefitsDeductions } from './BenefitsDeductions';
import { BenefitsDeductionsRequestBuilder } from './BenefitsDeductionsRequestBuilder';
import { EarningCodesApi } from './EarningCodesApi';
import { NoYes } from './NoYes';
import {
  CustomField,
  defaultDeSerializers,
  DefaultDeSerializers,
  DeSerializers,
  AllFields,
  entityBuilder,
  EntityBuilderType,
  EntityApi,
  FieldBuilder,
  OrderableEdmTypeField,
  EnumField,
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class BenefitsDeductionsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<BenefitsDeductions<DeSerializersT>, DeSerializersT>
{
  public deSerializers: DeSerializersT;

  private constructor(
    deSerializers: DeSerializersT = defaultDeSerializers as any
  ) {
    this.deSerializers = deSerializers;
  }

  /**
   * Do not use this method or the constructor directly.
   * Use the service function as described in the documentation to get an API instance.
   */
  public static _privateFactory<
    DeSerializersT extends DeSerializers = DefaultDeSerializers
  >(
    deSerializers: DeSerializersT = defaultDeSerializers as any
  ): BenefitsDeductionsApi<DeSerializersT> {
    return new BenefitsDeductionsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link earningCode} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EARNING_CODE: OneToOneLink<
      BenefitsDeductions<DeSerializersT>,
      DeSerializersT,
      EarningCodesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link employerEarningCode} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EMPLOYER_EARNING_CODE: OneToOneLink<
      BenefitsDeductions<DeSerializersT>,
      DeSerializersT,
      EarningCodesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      EarningCodesApi<DeSerializersT>,
      EarningCodesApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      EARNING_CODE: new OneToOneLink('EarningCode', this, linkedApis[0]),
      EMPLOYER_EARNING_CODE: new OneToOneLink(
        'EmployerEarningCode',
        this,
        linkedApis[1]
      )
    };
    return this;
  }

  entityConstructor = BenefitsDeductions;

  requestBuilder(): BenefitsDeductionsRequestBuilder<DeSerializersT> {
    return new BenefitsDeductionsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    BenefitsDeductions<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<BenefitsDeductions<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    BenefitsDeductions<DeSerializersT>,
    DeSerializersT,
    NullableT
  > {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<
    typeof BenefitsDeductions,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        BenefitsDeductions,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DEDUCTION_ID: OrderableEdmTypeField<
      BenefitsDeductions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    VALID_FROM: OrderableEdmTypeField<
      BenefitsDeductions<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    VALID_TO: OrderableEdmTypeField<
      BenefitsDeductions<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      BenefitsDeductions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EMPLOYEE_DEDUCTION_AMOUNT_HEADING: OrderableEdmTypeField<
      BenefitsDeductions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PAIRED_COLUMNS: EnumField<
      BenefitsDeductions<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    EMPLOYER_DEDUCTION_AMOUNT_HEADING: OrderableEdmTypeField<
      BenefitsDeductions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEDUCTION_CHANGE_COMPLETED: EnumField<
      BenefitsDeductions<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    EMPLOYEE_DEDUCTION_HEADING: OrderableEdmTypeField<
      BenefitsDeductions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EMPLOYER_DEDUCTION_HEADING: OrderableEdmTypeField<
      BenefitsDeductions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PAYROLL_EMPLOYEE_EARNING_CODE_ID: OrderableEdmTypeField<
      BenefitsDeductions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CHANGE_EFFECTIVE_DATE: OrderableEdmTypeField<
      BenefitsDeductions<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    EMPLOYEE_DEDUCTION_PAYROLL_REFERENCE: OrderableEdmTypeField<
      BenefitsDeductions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PAYROLL_EMPLOYER_EARNING_CODE_ID: OrderableEdmTypeField<
      BenefitsDeductions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CAN_DELETE: EnumField<
      BenefitsDeductions<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    EMPLOYER_DEDUCTION_PAYROLL_REFERENCE: OrderableEdmTypeField<
      BenefitsDeductions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link earningCode} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EARNING_CODE: OneToOneLink<
      BenefitsDeductions<DeSerializersT>,
      DeSerializersT,
      EarningCodesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link employerEarningCode} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EMPLOYER_EARNING_CODE: OneToOneLink<
      BenefitsDeductions<DeSerializersT>,
      DeSerializersT,
      EarningCodesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<BenefitsDeductions<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link deductionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEDUCTION_ID: fieldBuilder.buildEdmTypeField(
          'DeductionId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link validFrom} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALID_FROM: fieldBuilder.buildEdmTypeField(
          'ValidFrom',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link validTo} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALID_TO: fieldBuilder.buildEdmTypeField(
          'ValidTo',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link description} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'Description',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link employeeDeductionAmountHeading} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EMPLOYEE_DEDUCTION_AMOUNT_HEADING: fieldBuilder.buildEdmTypeField(
          'EmployeeDeductionAmountHeading',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link pairedColumns} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAIRED_COLUMNS: fieldBuilder.buildEnumField(
          'PairedColumns',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link employerDeductionAmountHeading} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EMPLOYER_DEDUCTION_AMOUNT_HEADING: fieldBuilder.buildEdmTypeField(
          'EmployerDeductionAmountHeading',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link deductionChangeCompleted} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEDUCTION_CHANGE_COMPLETED: fieldBuilder.buildEnumField(
          'DeductionChangeCompleted',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link employeeDeductionHeading} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EMPLOYEE_DEDUCTION_HEADING: fieldBuilder.buildEdmTypeField(
          'EmployeeDeductionHeading',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link employerDeductionHeading} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EMPLOYER_DEDUCTION_HEADING: fieldBuilder.buildEdmTypeField(
          'EmployerDeductionHeading',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link payrollEmployeeEarningCodeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYROLL_EMPLOYEE_EARNING_CODE_ID: fieldBuilder.buildEdmTypeField(
          'PayrollEmployeeEarningCodeId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link changeEffectiveDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CHANGE_EFFECTIVE_DATE: fieldBuilder.buildEdmTypeField(
          'ChangeEffectiveDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link employeeDeductionPayrollReference} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EMPLOYEE_DEDUCTION_PAYROLL_REFERENCE: fieldBuilder.buildEdmTypeField(
          'EmployeeDeductionPayrollReference',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link payrollEmployerEarningCodeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYROLL_EMPLOYER_EARNING_CODE_ID: fieldBuilder.buildEdmTypeField(
          'PayrollEmployerEarningCodeId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link canDelete} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CAN_DELETE: fieldBuilder.buildEnumField('CanDelete', NoYes, true),
        /**
         * Static representation of the {@link employerDeductionPayrollReference} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EMPLOYER_DEDUCTION_PAYROLL_REFERENCE: fieldBuilder.buildEdmTypeField(
          'EmployerDeductionPayrollReference',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', BenefitsDeductions)
      };
    }

    return this._schema;
  }
}
