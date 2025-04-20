/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { DocumentFacilityAgreements } from './DocumentFacilityAgreements';
import { DocumentFacilityAgreementsRequestBuilder } from './DocumentFacilityAgreementsRequestBuilder';
import { BankLgAmountCalcType } from './BankLgAmountCalcType';
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
  EnumField
} from '@sap-cloud-sdk/odata-v4';
export class DocumentFacilityAgreementsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<DocumentFacilityAgreements<DeSerializersT>, DeSerializersT>
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
  ): DocumentFacilityAgreementsApi<DeSerializersT> {
    return new DocumentFacilityAgreementsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = DocumentFacilityAgreements;

  requestBuilder(): DocumentFacilityAgreementsRequestBuilder<DeSerializersT> {
    return new DocumentFacilityAgreementsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    DocumentFacilityAgreements<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      DocumentFacilityAgreements<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    DocumentFacilityAgreements<DeSerializersT>,
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
    typeof DocumentFacilityAgreements,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        DocumentFacilityAgreements,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      DocumentFacilityAgreements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    AGREEMENT_NUMBER: OrderableEdmTypeField<
      DocumentFacilityAgreements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    FACILITY_TYPE: OrderableEdmTypeField<
      DocumentFacilityAgreements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    END_DATE: OrderableEdmTypeField<
      DocumentFacilityAgreements<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    LG_EXTENSION_COMMISSION_PERCENTAGE: OrderableEdmTypeField<
      DocumentFacilityAgreements<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    LG_INCREASE_VALUE_COMMISSION_CALC_METHOD: EnumField<
      DocumentFacilityAgreements<DeSerializers>,
      DeSerializersT,
      BankLgAmountCalcType,
      true,
      true
    >;
    BANK_ACCOUNT: OrderableEdmTypeField<
      DocumentFacilityAgreements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LG_ISSUANCE_COMMISSION_AMOUNT: OrderableEdmTypeField<
      DocumentFacilityAgreements<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    START_DATE: OrderableEdmTypeField<
      DocumentFacilityAgreements<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    LG_ISSUANCE_COMMISSION_CALC_METHOD: EnumField<
      DocumentFacilityAgreements<DeSerializers>,
      DeSerializersT,
      BankLgAmountCalcType,
      true,
      true
    >;
    LG_DECREASE_VALUE_COMMISSION_AMOUNT: OrderableEdmTypeField<
      DocumentFacilityAgreements<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    LG_EXTENSION_COMMISSION_AMOUNT: OrderableEdmTypeField<
      DocumentFacilityAgreements<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    LG_CASH_MARGIN_CALC_METHOD: EnumField<
      DocumentFacilityAgreements<DeSerializers>,
      DeSerializersT,
      BankLgAmountCalcType,
      true,
      true
    >;
    LG_DECREASE_VALUE_COMMISSION_CALC_METHOD: EnumField<
      DocumentFacilityAgreements<DeSerializers>,
      DeSerializersT,
      BankLgAmountCalcType,
      true,
      true
    >;
    LG_DECREASE_VALUE_COMMISSION_PERCENTAGE: OrderableEdmTypeField<
      DocumentFacilityAgreements<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    AMOUNT_USED: OrderableEdmTypeField<
      DocumentFacilityAgreements<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    AMOUNT_LIMIT: OrderableEdmTypeField<
      DocumentFacilityAgreements<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    LG_INCREASE_VALUE_COMMISSION_PERCENTAGE: OrderableEdmTypeField<
      DocumentFacilityAgreements<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    LG_CASH_MARGIN_PERCENTAGE: OrderableEdmTypeField<
      DocumentFacilityAgreements<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    LG_CASH_MARGIN_AMOUNT: OrderableEdmTypeField<
      DocumentFacilityAgreements<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    LG_EXTENSION_COMMISSION_CALC_METHOD: EnumField<
      DocumentFacilityAgreements<DeSerializers>,
      DeSerializersT,
      BankLgAmountCalcType,
      true,
      true
    >;
    LG_INCREASE_VALUE_COMMISSION_AMOUNT: OrderableEdmTypeField<
      DocumentFacilityAgreements<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    LG_ISSUANCE_COMMISSION_PERCENTAGE: OrderableEdmTypeField<
      DocumentFacilityAgreements<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ALL_FIELDS: AllFields<DocumentFacilityAgreements<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link dataAreaId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DATA_AREA_ID: fieldBuilder.buildEdmTypeField(
          'dataAreaId',
          'Edm.String',
          false
        ),
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
         * Static representation of the {@link facilityType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FACILITY_TYPE: fieldBuilder.buildEdmTypeField(
          'FacilityType',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link endDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        END_DATE: fieldBuilder.buildEdmTypeField(
          'EndDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link lgExtensionCommissionPercentage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LG_EXTENSION_COMMISSION_PERCENTAGE: fieldBuilder.buildEdmTypeField(
          'LGExtensionCommissionPercentage',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link lgIncreaseValueCommissionCalcMethod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LG_INCREASE_VALUE_COMMISSION_CALC_METHOD: fieldBuilder.buildEnumField(
          'LGIncreaseValueCommissionCalcMethod',
          BankLgAmountCalcType,
          true
        ),
        /**
         * Static representation of the {@link bankAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BANK_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'BankAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link lgIssuanceCommissionAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LG_ISSUANCE_COMMISSION_AMOUNT: fieldBuilder.buildEdmTypeField(
          'LGIssuanceCommissionAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link startDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        START_DATE: fieldBuilder.buildEdmTypeField(
          'StartDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link lgIssuanceCommissionCalcMethod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LG_ISSUANCE_COMMISSION_CALC_METHOD: fieldBuilder.buildEnumField(
          'LGIssuanceCommissionCalcMethod',
          BankLgAmountCalcType,
          true
        ),
        /**
         * Static representation of the {@link lgDecreaseValueCommissionAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LG_DECREASE_VALUE_COMMISSION_AMOUNT: fieldBuilder.buildEdmTypeField(
          'LGDecreaseValueCommissionAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link lgExtensionCommissionAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LG_EXTENSION_COMMISSION_AMOUNT: fieldBuilder.buildEdmTypeField(
          'LGExtensionCommissionAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link lgCashMarginCalcMethod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LG_CASH_MARGIN_CALC_METHOD: fieldBuilder.buildEnumField(
          'LGCashMarginCalcMethod',
          BankLgAmountCalcType,
          true
        ),
        /**
         * Static representation of the {@link lgDecreaseValueCommissionCalcMethod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LG_DECREASE_VALUE_COMMISSION_CALC_METHOD: fieldBuilder.buildEnumField(
          'LGDecreaseValueCommissionCalcMethod',
          BankLgAmountCalcType,
          true
        ),
        /**
         * Static representation of the {@link lgDecreaseValueCommissionPercentage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LG_DECREASE_VALUE_COMMISSION_PERCENTAGE: fieldBuilder.buildEdmTypeField(
          'LGDecreaseValueCommissionPercentage',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link amountUsed} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AMOUNT_USED: fieldBuilder.buildEdmTypeField(
          'AmountUsed',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link amountLimit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AMOUNT_LIMIT: fieldBuilder.buildEdmTypeField(
          'AmountLimit',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link lgIncreaseValueCommissionPercentage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LG_INCREASE_VALUE_COMMISSION_PERCENTAGE: fieldBuilder.buildEdmTypeField(
          'LGIncreaseValueCommissionPercentage',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link lgCashMarginPercentage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LG_CASH_MARGIN_PERCENTAGE: fieldBuilder.buildEdmTypeField(
          'LGCashMarginPercentage',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link lgCashMarginAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LG_CASH_MARGIN_AMOUNT: fieldBuilder.buildEdmTypeField(
          'LGCashMarginAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link lgExtensionCommissionCalcMethod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LG_EXTENSION_COMMISSION_CALC_METHOD: fieldBuilder.buildEnumField(
          'LGExtensionCommissionCalcMethod',
          BankLgAmountCalcType,
          true
        ),
        /**
         * Static representation of the {@link lgIncreaseValueCommissionAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LG_INCREASE_VALUE_COMMISSION_AMOUNT: fieldBuilder.buildEdmTypeField(
          'LGIncreaseValueCommissionAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link lgIssuanceCommissionPercentage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LG_ISSUANCE_COMMISSION_PERCENTAGE: fieldBuilder.buildEdmTypeField(
          'LGIssuanceCommissionPercentage',
          'Edm.Decimal',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', DocumentFacilityAgreements)
      };
    }

    return this._schema;
  }
}
