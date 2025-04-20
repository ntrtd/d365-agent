/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RoyaltyAgreementLines } from './RoyaltyAgreementLines';
import { RoyaltyAgreementLinesRequestBuilder } from './RoyaltyAgreementLinesRequestBuilder';
import { RoyaltyAgreementLineProductSelectionsApi } from './RoyaltyAgreementLineProductSelectionsApi';
import { RoyaltyAgreementLineAmountsApi } from './RoyaltyAgreementLineAmountsApi';
import { RoyaltyAgreementLineProductSelectionsV2Api } from './RoyaltyAgreementLineProductSelectionsV2Api';
import { RoyaltyAgreementHeadersApi } from './RoyaltyAgreementHeadersApi';
import { McrTradeCustCalcDates } from './McrTradeCustCalcDates';
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
  OneToManyLink,
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class RoyaltyAgreementLinesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<RoyaltyAgreementLines<DeSerializersT>, DeSerializersT>
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
  ): RoyaltyAgreementLinesApi<DeSerializersT> {
    return new RoyaltyAgreementLinesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link royaltyAgreementLineProductSelections} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ROYALTY_AGREEMENT_LINE_PRODUCT_SELECTIONS: OneToManyLink<
      RoyaltyAgreementLines<DeSerializersT>,
      DeSerializersT,
      RoyaltyAgreementLineProductSelectionsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link royaltyAgreementLineAmounts} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ROYALTY_AGREEMENT_LINE_AMOUNTS: OneToManyLink<
      RoyaltyAgreementLines<DeSerializersT>,
      DeSerializersT,
      RoyaltyAgreementLineAmountsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link royaltyAgreementLineProductSelectionsV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ROYALTY_AGREEMENT_LINE_PRODUCT_SELECTIONS_V_2: OneToManyLink<
      RoyaltyAgreementLines<DeSerializersT>,
      DeSerializersT,
      RoyaltyAgreementLineProductSelectionsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link royaltyAgreementHeader} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ROYALTY_AGREEMENT_HEADER: OneToOneLink<
      RoyaltyAgreementLines<DeSerializersT>,
      DeSerializersT,
      RoyaltyAgreementHeadersApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      RoyaltyAgreementLineProductSelectionsApi<DeSerializersT>,
      RoyaltyAgreementLineAmountsApi<DeSerializersT>,
      RoyaltyAgreementLineProductSelectionsV2Api<DeSerializersT>,
      RoyaltyAgreementHeadersApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      ROYALTY_AGREEMENT_LINE_PRODUCT_SELECTIONS: new OneToManyLink(
        'RoyaltyAgreementLineProductSelections',
        this,
        linkedApis[0]
      ),
      ROYALTY_AGREEMENT_LINE_AMOUNTS: new OneToManyLink(
        'RoyaltyAgreementLineAmounts',
        this,
        linkedApis[1]
      ),
      ROYALTY_AGREEMENT_LINE_PRODUCT_SELECTIONS_V_2: new OneToManyLink(
        'RoyaltyAgreementLineProductSelectionsV2',
        this,
        linkedApis[2]
      ),
      ROYALTY_AGREEMENT_HEADER: new OneToOneLink(
        'RoyaltyAgreementHeader',
        this,
        linkedApis[3]
      )
    };
    return this;
  }

  entityConstructor = RoyaltyAgreementLines;

  requestBuilder(): RoyaltyAgreementLinesRequestBuilder<DeSerializersT> {
    return new RoyaltyAgreementLinesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    RoyaltyAgreementLines<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<RoyaltyAgreementLines<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    RoyaltyAgreementLines<DeSerializersT>,
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
    typeof RoyaltyAgreementLines,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        RoyaltyAgreementLines,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      RoyaltyAgreementLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ROYALTY_AGREEMENT_LINE_ID: OrderableEdmTypeField<
      RoyaltyAgreementLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ROYALTY_AGREEMENT_ID: OrderableEdmTypeField<
      RoyaltyAgreementLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    EXPIRATION_DATE: OrderableEdmTypeField<
      RoyaltyAgreementLines<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    AGREEMENT_LINE_NOTES: OrderableEdmTypeField<
      RoyaltyAgreementLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VENDOR_ACCOUNT_NUMBER: OrderableEdmTypeField<
      RoyaltyAgreementLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CURRENCY_CODE: OrderableEdmTypeField<
      RoyaltyAgreementLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EFFECTIVE_DATE: OrderableEdmTypeField<
      RoyaltyAgreementLines<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    AGREEMENT_LINE_DESCRIPTION: OrderableEdmTypeField<
      RoyaltyAgreementLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SALES_UNIT_SYMBOL: OrderableEdmTypeField<
      RoyaltyAgreementLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CALCULATION_SEARCH_DATE_TYPE: EnumField<
      RoyaltyAgreementLines<DeSerializers>,
      DeSerializersT,
      McrTradeCustCalcDates,
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link royaltyAgreementLineProductSelections} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ROYALTY_AGREEMENT_LINE_PRODUCT_SELECTIONS: OneToManyLink<
      RoyaltyAgreementLines<DeSerializersT>,
      DeSerializersT,
      RoyaltyAgreementLineProductSelectionsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link royaltyAgreementLineAmounts} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ROYALTY_AGREEMENT_LINE_AMOUNTS: OneToManyLink<
      RoyaltyAgreementLines<DeSerializersT>,
      DeSerializersT,
      RoyaltyAgreementLineAmountsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link royaltyAgreementLineProductSelectionsV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ROYALTY_AGREEMENT_LINE_PRODUCT_SELECTIONS_V_2: OneToManyLink<
      RoyaltyAgreementLines<DeSerializersT>,
      DeSerializersT,
      RoyaltyAgreementLineProductSelectionsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link royaltyAgreementHeader} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ROYALTY_AGREEMENT_HEADER: OneToOneLink<
      RoyaltyAgreementLines<DeSerializersT>,
      DeSerializersT,
      RoyaltyAgreementHeadersApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<RoyaltyAgreementLines<DeSerializers>>;
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
         * Static representation of the {@link royaltyAgreementLineId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ROYALTY_AGREEMENT_LINE_ID: fieldBuilder.buildEdmTypeField(
          'RoyaltyAgreementLineId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link royaltyAgreementId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ROYALTY_AGREEMENT_ID: fieldBuilder.buildEdmTypeField(
          'RoyaltyAgreementId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link expirationDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXPIRATION_DATE: fieldBuilder.buildEdmTypeField(
          'ExpirationDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link agreementLineNotes} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AGREEMENT_LINE_NOTES: fieldBuilder.buildEdmTypeField(
          'AgreementLineNotes',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link vendorAccountNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VENDOR_ACCOUNT_NUMBER: fieldBuilder.buildEdmTypeField(
          'VendorAccountNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link currencyCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CURRENCY_CODE: fieldBuilder.buildEdmTypeField(
          'CurrencyCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link effectiveDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EFFECTIVE_DATE: fieldBuilder.buildEdmTypeField(
          'EffectiveDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link agreementLineDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AGREEMENT_LINE_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'AgreementLineDescription',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link salesUnitSymbol} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_UNIT_SYMBOL: fieldBuilder.buildEdmTypeField(
          'SalesUnitSymbol',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link calculationSearchDateType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CALCULATION_SEARCH_DATE_TYPE: fieldBuilder.buildEnumField(
          'CalculationSearchDateType',
          McrTradeCustCalcDates,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', RoyaltyAgreementLines)
      };
    }

    return this._schema;
  }
}
