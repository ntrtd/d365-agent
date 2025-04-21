/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { GupRebateAndDeductionsAgreementDateSetupCriterions } from './GupRebateAndDeductionsAgreementDateSetupCriterions';
import { GupRebateAndDeductionsAgreementDateSetupCriterionsRequestBuilder } from './GupRebateAndDeductionsAgreementDateSetupCriterionsRequestBuilder';
import { RebateAndDeductionsAgreementDateSetupsApi } from './RebateAndDeductionsAgreementDateSetupsApi';
import { TamRebateMethod } from './TamRebateMethod';
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
export class GupRebateAndDeductionsAgreementDateSetupCriterionsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      GupRebateAndDeductionsAgreementDateSetupCriterions<DeSerializersT>,
      DeSerializersT
    >
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
  ): GupRebateAndDeductionsAgreementDateSetupCriterionsApi<DeSerializersT> {
    return new GupRebateAndDeductionsAgreementDateSetupCriterionsApi(
      deSerializers
    );
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link rebateAndDeductionsAgreementDateSetup} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    REBATE_AND_DEDUCTIONS_AGREEMENT_DATE_SETUP: OneToOneLink<
      GupRebateAndDeductionsAgreementDateSetupCriterions<DeSerializersT>,
      DeSerializersT,
      RebateAndDeductionsAgreementDateSetupsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [RebateAndDeductionsAgreementDateSetupsApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      REBATE_AND_DEDUCTIONS_AGREEMENT_DATE_SETUP: new OneToOneLink(
        'RebateAndDeductionsAgreementDateSetup',
        this,
        linkedApis[0]
      )
    };
    return this;
  }

  entityConstructor = GupRebateAndDeductionsAgreementDateSetupCriterions;

  requestBuilder(): GupRebateAndDeductionsAgreementDateSetupCriterionsRequestBuilder<DeSerializersT> {
    return new GupRebateAndDeductionsAgreementDateSetupCriterionsRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    GupRebateAndDeductionsAgreementDateSetupCriterions<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      GupRebateAndDeductionsAgreementDateSetupCriterions<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    GupRebateAndDeductionsAgreementDateSetupCriterions<DeSerializersT>,
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
    typeof GupRebateAndDeductionsAgreementDateSetupCriterions,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        GupRebateAndDeductionsAgreementDateSetupCriterions,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    AGREEMENT_NUMBER: OrderableEdmTypeField<
      GupRebateAndDeductionsAgreementDateSetupCriterions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    AGREEMENT_LINE_NUMBER: OrderableEdmTypeField<
      GupRebateAndDeductionsAgreementDateSetupCriterions<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    REBATE_VALID_FROM_QUANTITY_AMOUNT: OrderableEdmTypeField<
      GupRebateAndDeductionsAgreementDateSetupCriterions<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    REBATE_VALID_TO_QUANTITY_AMOUNT: OrderableEdmTypeField<
      GupRebateAndDeductionsAgreementDateSetupCriterions<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    REBATE_AMOUNT: OrderableEdmTypeField<
      GupRebateAndDeductionsAgreementDateSetupCriterions<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    REBATE_CALCULATION_METHOD: EnumField<
      GupRebateAndDeductionsAgreementDateSetupCriterions<DeSerializers>,
      DeSerializersT,
      TamRebateMethod,
      true,
      true
    >;
    OCCURRENCES: OrderableEdmTypeField<
      GupRebateAndDeductionsAgreementDateSetupCriterions<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link rebateAndDeductionsAgreementDateSetup} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    REBATE_AND_DEDUCTIONS_AGREEMENT_DATE_SETUP: OneToOneLink<
      GupRebateAndDeductionsAgreementDateSetupCriterions<DeSerializersT>,
      DeSerializersT,
      RebateAndDeductionsAgreementDateSetupsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<
      GupRebateAndDeductionsAgreementDateSetupCriterions<DeSerializers>
    >;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link agreementNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AGREEMENT_NUMBER: fieldBuilder.buildEdmTypeField(
          'AgreementNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link agreementLineNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AGREEMENT_LINE_NUMBER: fieldBuilder.buildEdmTypeField(
          'AgreementLineNumber',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link rebateValidFromQuantityAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REBATE_VALID_FROM_QUANTITY_AMOUNT: fieldBuilder.buildEdmTypeField(
          'RebateValidFromQuantityAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link rebateValidToQuantityAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REBATE_VALID_TO_QUANTITY_AMOUNT: fieldBuilder.buildEdmTypeField(
          'RebateValidToQuantityAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link rebateAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REBATE_AMOUNT: fieldBuilder.buildEdmTypeField(
          'RebateAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link rebateCalculationMethod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REBATE_CALCULATION_METHOD: fieldBuilder.buildEnumField(
          'RebateCalculationMethod',
          TamRebateMethod,
          true
        ),
        /**
         * Static representation of the {@link occurrences} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OCCURRENCES: fieldBuilder.buildEdmTypeField(
          'Occurrences',
          'Edm.Int32',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields(
          '*',
          GupRebateAndDeductionsAgreementDateSetupCriterions
        )
      };
    }

    return this._schema;
  }
}
