/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RetailStoreTenderTypeCards } from './RetailStoreTenderTypeCards';
import { RetailStoreTenderTypeCardsRequestBuilder } from './RetailStoreTenderTypeCardsRequestBuilder';
import { DimensionCombinationsApi } from './DimensionCombinationsApi';
import { NoYes } from './NoYes';
import { RetailLedgerBank } from './RetailLedgerBank';
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
export class RetailStoreTenderTypeCardsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<RetailStoreTenderTypeCards<DeSerializersT>, DeSerializersT>
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
  ): RetailStoreTenderTypeCardsApi<DeSerializersT> {
    return new RetailStoreTenderTypeCardsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link dimensionCombination} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DIMENSION_COMBINATION: OneToOneLink<
      RetailStoreTenderTypeCards<DeSerializersT>,
      DeSerializersT,
      DimensionCombinationsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [DimensionCombinationsApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      DIMENSION_COMBINATION: new OneToOneLink(
        'DimensionCombination',
        this,
        linkedApis[0]
      )
    };
    return this;
  }

  entityConstructor = RetailStoreTenderTypeCards;

  requestBuilder(): RetailStoreTenderTypeCardsRequestBuilder<DeSerializersT> {
    return new RetailStoreTenderTypeCardsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    RetailStoreTenderTypeCards<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      RetailStoreTenderTypeCards<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    RetailStoreTenderTypeCards<DeSerializersT>,
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
    typeof RetailStoreTenderTypeCards,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        RetailStoreTenderTypeCards,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      RetailStoreTenderTypeCards<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TENDER_TYPE_ID: OrderableEdmTypeField<
      RetailStoreTenderTypeCards<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CARD_TYPE_ID: OrderableEdmTypeField<
      RetailStoreTenderTypeCards<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    OM_OPERATING_UNIT_NUMBER: OrderableEdmTypeField<
      RetailStoreTenderTypeCards<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    NAME: OrderableEdmTypeField<
      RetailStoreTenderTypeCards<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CARD_FEE_OFFSET_LEDGER_DIMENSION_DISPLAY_VALUE: OrderableEdmTypeField<
      RetailStoreTenderTypeCards<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CARD_FEE_MAX: OrderableEdmTypeField<
      RetailStoreTenderTypeCards<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CASH_BACK_LIMIT: OrderableEdmTypeField<
      RetailStoreTenderTypeCards<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CARD_INQUIRY_FEE: OrderableEdmTypeField<
      RetailStoreTenderTypeCards<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SAME_CARD_ALLOWED: EnumField<
      RetailStoreTenderTypeCards<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    IS_PIN_REQUIRED: EnumField<
      RetailStoreTenderTypeCards<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    MANUAL_AUTHORIZATION: EnumField<
      RetailStoreTenderTypeCards<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    BROKER_ID: OrderableEdmTypeField<
      RetailStoreTenderTypeCards<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROCESS_LOCALLY: EnumField<
      RetailStoreTenderTypeCards<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CARD_FEE_LEDGER_DIMENSION_DISPLAY_VALUE: OrderableEdmTypeField<
      RetailStoreTenderTypeCards<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MAX_NORMAL_DIFFERENCE_AMOUNT: OrderableEdmTypeField<
      RetailStoreTenderTypeCards<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ENTER_FLEET_INFO: EnumField<
      RetailStoreTenderTypeCards<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CHECK_MODULUS: EnumField<
      RetailStoreTenderTypeCards<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DIFFERENCE_ACC_LEDGER_DIMENSION_DISPLAY_VALUE: OrderableEdmTypeField<
      RetailStoreTenderTypeCards<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_EXPIRATION_DATE_REQUIRED: EnumField<
      RetailStoreTenderTypeCards<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CARD_FEE: OrderableEdmTypeField<
      RetailStoreTenderTypeCards<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CARD_FEE_MIN: OrderableEdmTypeField<
      RetailStoreTenderTypeCards<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CARD_NUMBER_SWIPED: EnumField<
      RetailStoreTenderTypeCards<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PREAPPROVAL_DURATION_DAYS: OrderableEdmTypeField<
      RetailStoreTenderTypeCards<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    DIFF_ACC_BIG_DIFF_LEDGER_DIMENSION_DISPLAY_VALUE: OrderableEdmTypeField<
      RetailStoreTenderTypeCards<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALLOW_MANUAL_INPUT: EnumField<
      RetailStoreTenderTypeCards<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ACCOUNT_TYPE: EnumField<
      RetailStoreTenderTypeCards<DeSerializers>,
      DeSerializersT,
      RetailLedgerBank,
      true,
      true
    >;
    LEDGER_DIMENSION_DISPLAY_VALUE: OrderableEdmTypeField<
      RetailStoreTenderTypeCards<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COUNTING_REQUIRED: EnumField<
      RetailStoreTenderTypeCards<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CHECK_EXPIRED_DATE: EnumField<
      RetailStoreTenderTypeCards<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link dimensionCombination} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DIMENSION_COMBINATION: OneToOneLink<
      RetailStoreTenderTypeCards<DeSerializersT>,
      DeSerializersT,
      DimensionCombinationsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<RetailStoreTenderTypeCards<DeSerializers>>;
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
         * Static representation of the {@link tenderTypeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TENDER_TYPE_ID: fieldBuilder.buildEdmTypeField(
          'TenderTypeId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link cardTypeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CARD_TYPE_ID: fieldBuilder.buildEdmTypeField(
          'CardTypeId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link omOperatingUnitNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OM_OPERATING_UNIT_NUMBER: fieldBuilder.buildEdmTypeField(
          'OMOperatingUnitNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', true),
        /**
         * Static representation of the {@link cardFeeOffsetLedgerDimensionDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CARD_FEE_OFFSET_LEDGER_DIMENSION_DISPLAY_VALUE:
          fieldBuilder.buildEdmTypeField(
            'CardFeeOffsetLedgerDimensionDisplayValue',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link cardFeeMax} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CARD_FEE_MAX: fieldBuilder.buildEdmTypeField(
          'CardFeeMax',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link cashBackLimit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CASH_BACK_LIMIT: fieldBuilder.buildEdmTypeField(
          'CashBackLimit',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link cardInquiryFee} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CARD_INQUIRY_FEE: fieldBuilder.buildEdmTypeField(
          'CardInquiryFee',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link sameCardAllowed} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SAME_CARD_ALLOWED: fieldBuilder.buildEnumField(
          'SameCardAllowed',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link isPinRequired} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_PIN_REQUIRED: fieldBuilder.buildEnumField(
          'IsPinRequired',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link manualAuthorization} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MANUAL_AUTHORIZATION: fieldBuilder.buildEnumField(
          'ManualAuthorization',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link brokerId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BROKER_ID: fieldBuilder.buildEdmTypeField(
          'BrokerId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link processLocally} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROCESS_LOCALLY: fieldBuilder.buildEnumField(
          'ProcessLocally',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link cardFeeLedgerDimensionDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CARD_FEE_LEDGER_DIMENSION_DISPLAY_VALUE: fieldBuilder.buildEdmTypeField(
          'CardFeeLedgerDimensionDisplayValue',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link maxNormalDifferenceAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAX_NORMAL_DIFFERENCE_AMOUNT: fieldBuilder.buildEdmTypeField(
          'MaxNormalDifferenceAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link enterFleetInfo} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENTER_FLEET_INFO: fieldBuilder.buildEnumField(
          'EnterFleetInfo',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link checkModulus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CHECK_MODULUS: fieldBuilder.buildEnumField('CheckModulus', NoYes, true),
        /**
         * Static representation of the {@link differenceAccLedgerDimensionDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DIFFERENCE_ACC_LEDGER_DIMENSION_DISPLAY_VALUE:
          fieldBuilder.buildEdmTypeField(
            'DifferenceAccLedgerDimensionDisplayValue',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link isExpirationDateRequired} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_EXPIRATION_DATE_REQUIRED: fieldBuilder.buildEnumField(
          'IsExpirationDateRequired',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link cardFee} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CARD_FEE: fieldBuilder.buildEdmTypeField(
          'CardFee',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link cardFeeMin} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CARD_FEE_MIN: fieldBuilder.buildEdmTypeField(
          'CardFeeMin',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link cardNumberSwiped} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CARD_NUMBER_SWIPED: fieldBuilder.buildEnumField(
          'CardNumberSwiped',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link preapprovalDurationDays} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PREAPPROVAL_DURATION_DAYS: fieldBuilder.buildEdmTypeField(
          'PreapprovalDurationDays',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link diffAccBigDiffLedgerDimensionDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DIFF_ACC_BIG_DIFF_LEDGER_DIMENSION_DISPLAY_VALUE:
          fieldBuilder.buildEdmTypeField(
            'DiffAccBigDiffLedgerDimensionDisplayValue',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link allowManualInput} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ALLOW_MANUAL_INPUT: fieldBuilder.buildEnumField(
          'AllowManualInput',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link accountType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCOUNT_TYPE: fieldBuilder.buildEnumField(
          'AccountType',
          RetailLedgerBank,
          true
        ),
        /**
         * Static representation of the {@link ledgerDimensionDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEDGER_DIMENSION_DISPLAY_VALUE: fieldBuilder.buildEdmTypeField(
          'LedgerDimensionDisplayValue',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link countingRequired} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COUNTING_REQUIRED: fieldBuilder.buildEnumField(
          'CountingRequired',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link checkExpiredDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CHECK_EXPIRED_DATE: fieldBuilder.buildEnumField(
          'CheckExpiredDate',
          NoYes,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', RetailStoreTenderTypeCards)
      };
    }

    return this._schema;
  }
}
