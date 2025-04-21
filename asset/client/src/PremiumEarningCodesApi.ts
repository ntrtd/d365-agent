/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { PremiumEarningCodes } from './PremiumEarningCodes';
import { PremiumEarningCodesRequestBuilder } from './PremiumEarningCodesRequestBuilder';
import { PayrollCalculationFrequenciesApi } from './PayrollCalculationFrequenciesApi';
import { EarningCodesApi } from './EarningCodesApi';
import { EarningStatementLineInquiriesApi } from './EarningStatementLineInquiriesApi';
import { PayrollPayoutBasis } from './PayrollPayoutBasis';
import { SysPolicyTypeEnum } from './SysPolicyTypeEnum';
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
  OneToOneLink,
  OneToManyLink
} from '@sap-cloud-sdk/odata-v4';
export class PremiumEarningCodesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<PremiumEarningCodes<DeSerializersT>, DeSerializersT>
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
  ): PremiumEarningCodesApi<DeSerializersT> {
    return new PremiumEarningCodesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link calculationFrequency} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CALCULATION_FREQUENCY: OneToOneLink<
      PremiumEarningCodes<DeSerializersT>,
      DeSerializersT,
      PayrollCalculationFrequenciesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link earningCode} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EARNING_CODE: OneToOneLink<
      PremiumEarningCodes<DeSerializersT>,
      DeSerializersT,
      EarningCodesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link earningStatementLineInquiry} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EARNING_STATEMENT_LINE_INQUIRY: OneToManyLink<
      PremiumEarningCodes<DeSerializersT>,
      DeSerializersT,
      EarningStatementLineInquiriesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      PayrollCalculationFrequenciesApi<DeSerializersT>,
      EarningCodesApi<DeSerializersT>,
      EarningStatementLineInquiriesApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      CALCULATION_FREQUENCY: new OneToOneLink(
        'CalculationFrequency',
        this,
        linkedApis[0]
      ),
      EARNING_CODE: new OneToOneLink('EarningCode', this, linkedApis[1]),
      EARNING_STATEMENT_LINE_INQUIRY: new OneToManyLink(
        'EarningStatementLineInquiry',
        this,
        linkedApis[2]
      )
    };
    return this;
  }

  entityConstructor = PremiumEarningCodes;

  requestBuilder(): PremiumEarningCodesRequestBuilder<DeSerializersT> {
    return new PremiumEarningCodesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    PremiumEarningCodes<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<PremiumEarningCodes<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    PremiumEarningCodes<DeSerializersT>,
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
    typeof PremiumEarningCodes,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        PremiumEarningCodes,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    PREMIUM_EARNING_CODE: OrderableEdmTypeField<
      PremiumEarningCodes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    EARNING_CODE_ID: OrderableEdmTypeField<
      PremiumEarningCodes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CALCULATION_FREQUENCY_ID: OrderableEdmTypeField<
      PremiumEarningCodes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      PremiumEarningCodes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PAYOUT_BASIS: EnumField<
      PremiumEarningCodes<DeSerializers>,
      DeSerializersT,
      PayrollPayoutBasis,
      true,
      true
    >;
    POLICY_RULE_TYPE_ID: OrderableEdmTypeField<
      PremiumEarningCodes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    POLICY_TYPE_ID: EnumField<
      PremiumEarningCodes<DeSerializers>,
      DeSerializersT,
      SysPolicyTypeEnum,
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link calculationFrequency} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CALCULATION_FREQUENCY: OneToOneLink<
      PremiumEarningCodes<DeSerializersT>,
      DeSerializersT,
      PayrollCalculationFrequenciesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link earningCode} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EARNING_CODE: OneToOneLink<
      PremiumEarningCodes<DeSerializersT>,
      DeSerializersT,
      EarningCodesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link earningStatementLineInquiry} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EARNING_STATEMENT_LINE_INQUIRY: OneToManyLink<
      PremiumEarningCodes<DeSerializersT>,
      DeSerializersT,
      EarningStatementLineInquiriesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<PremiumEarningCodes<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link premiumEarningCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PREMIUM_EARNING_CODE: fieldBuilder.buildEdmTypeField(
          'PremiumEarningCode',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link earningCodeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EARNING_CODE_ID: fieldBuilder.buildEdmTypeField(
          'EarningCodeId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link calculationFrequencyId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CALCULATION_FREQUENCY_ID: fieldBuilder.buildEdmTypeField(
          'CalculationFrequencyId',
          'Edm.String',
          true
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
         * Static representation of the {@link payoutBasis} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYOUT_BASIS: fieldBuilder.buildEnumField(
          'PayoutBasis',
          PayrollPayoutBasis,
          true
        ),
        /**
         * Static representation of the {@link policyRuleTypeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POLICY_RULE_TYPE_ID: fieldBuilder.buildEdmTypeField(
          'PolicyRuleTypeId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link policyTypeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POLICY_TYPE_ID: fieldBuilder.buildEnumField(
          'PolicyTypeId',
          SysPolicyTypeEnum,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', PremiumEarningCodes)
      };
    }

    return this._schema;
  }
}
