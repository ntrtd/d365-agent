/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RebateAndDeductionsAgreementDateSetupCriteria } from './RebateAndDeductionsAgreementDateSetupCriteria';
import { RebateAndDeductionsAgreementDateSetupCriteriaRequestBuilder } from './RebateAndDeductionsAgreementDateSetupCriteriaRequestBuilder';
import { RebateAndDeductionsAgreementDateSetupCriterionItemsApi } from './RebateAndDeductionsAgreementDateSetupCriterionItemsApi';
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
  OneToManyLink
} from '@sap-cloud-sdk/odata-v4';
export class RebateAndDeductionsAgreementDateSetupCriteriaApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      RebateAndDeductionsAgreementDateSetupCriteria<DeSerializersT>,
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
  ): RebateAndDeductionsAgreementDateSetupCriteriaApi<DeSerializersT> {
    return new RebateAndDeductionsAgreementDateSetupCriteriaApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link rebateAndDeductionsAgreementHeaderDateSetupCriterionItems} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    REBATE_AND_DEDUCTIONS_AGREEMENT_HEADER_DATE_SETUP_CRITERION_ITEMS: OneToManyLink<
      RebateAndDeductionsAgreementDateSetupCriteria<DeSerializersT>,
      DeSerializersT,
      RebateAndDeductionsAgreementDateSetupCriterionItemsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      RebateAndDeductionsAgreementDateSetupCriterionItemsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      REBATE_AND_DEDUCTIONS_AGREEMENT_HEADER_DATE_SETUP_CRITERION_ITEMS:
        new OneToManyLink(
          'RebateAndDeductionsAgreementHeaderDateSetupCriterionItems',
          this,
          linkedApis[0]
        )
    };
    return this;
  }

  entityConstructor = RebateAndDeductionsAgreementDateSetupCriteria;

  requestBuilder(): RebateAndDeductionsAgreementDateSetupCriteriaRequestBuilder<DeSerializersT> {
    return new RebateAndDeductionsAgreementDateSetupCriteriaRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    RebateAndDeductionsAgreementDateSetupCriteria<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      RebateAndDeductionsAgreementDateSetupCriteria<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    RebateAndDeductionsAgreementDateSetupCriteria<DeSerializersT>,
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
    typeof RebateAndDeductionsAgreementDateSetupCriteria,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        RebateAndDeductionsAgreementDateSetupCriteria,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    AGREEMENT_NUMBER: OrderableEdmTypeField<
      RebateAndDeductionsAgreementDateSetupCriteria<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    AGREEMENT_LINE_NUMBER: OrderableEdmTypeField<
      RebateAndDeductionsAgreementDateSetupCriteria<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    REBATE_VALID_FROM_QUANTITY_AMOUNT: OrderableEdmTypeField<
      RebateAndDeductionsAgreementDateSetupCriteria<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    REBATE_VALID_TO_QUANTITY_AMOUNT: OrderableEdmTypeField<
      RebateAndDeductionsAgreementDateSetupCriteria<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    REBATE_AMOUNT: OrderableEdmTypeField<
      RebateAndDeductionsAgreementDateSetupCriteria<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    REBATE_CALCULATION_METHOD: EnumField<
      RebateAndDeductionsAgreementDateSetupCriteria<DeSerializers>,
      DeSerializersT,
      TamRebateMethod,
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link rebateAndDeductionsAgreementHeaderDateSetupCriterionItems} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    REBATE_AND_DEDUCTIONS_AGREEMENT_HEADER_DATE_SETUP_CRITERION_ITEMS: OneToManyLink<
      RebateAndDeductionsAgreementDateSetupCriteria<DeSerializersT>,
      DeSerializersT,
      RebateAndDeductionsAgreementDateSetupCriterionItemsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<
      RebateAndDeductionsAgreementDateSetupCriteria<DeSerializers>
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
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields(
          '*',
          RebateAndDeductionsAgreementDateSetupCriteria
        )
      };
    }

    return this._schema;
  }
}
