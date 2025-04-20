/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { OpenTradeAgreementJournals } from './OpenTradeAgreementJournals';
import { OpenTradeAgreementJournalsRequestBuilder } from './OpenTradeAgreementJournalsRequestBuilder';
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
  EnumField
} from '@sap-cloud-sdk/odata-v4';
export class OpenTradeAgreementJournalsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<OpenTradeAgreementJournals<DeSerializersT>, DeSerializersT>
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
  ): OpenTradeAgreementJournalsApi<DeSerializersT> {
    return new OpenTradeAgreementJournalsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = OpenTradeAgreementJournals;

  requestBuilder(): OpenTradeAgreementJournalsRequestBuilder<DeSerializersT> {
    return new OpenTradeAgreementJournalsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    OpenTradeAgreementJournals<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      OpenTradeAgreementJournals<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    OpenTradeAgreementJournals<DeSerializersT>,
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
    typeof OpenTradeAgreementJournals,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        OpenTradeAgreementJournals,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      OpenTradeAgreementJournals<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    JOURNAL_NUMBER: OrderableEdmTypeField<
      OpenTradeAgreementJournals<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    IS_CURRENT_PRICE_EXPORTED: EnumField<
      OpenTradeAgreementJournals<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PRICE_GROUP: OrderableEdmTypeField<
      OpenTradeAgreementJournals<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    JOURNAL_DESCRIPTION: OrderableEdmTypeField<
      OpenTradeAgreementJournals<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRICE_COMPONENT_CODE_NAME: OrderableEdmTypeField<
      OpenTradeAgreementJournals<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRICE_COMPONENT_COMBINATION: OrderableEdmTypeField<
      OpenTradeAgreementJournals<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRADE_AGREEMENT_JOURNAL_NAME_ID: OrderableEdmTypeField<
      OpenTradeAgreementJournals<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    POSTED_DATE: OrderableEdmTypeField<
      OpenTradeAgreementJournals<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    PRICE_APPLY_ADJUSTMENT: EnumField<
      OpenTradeAgreementJournals<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ALL_FIELDS: AllFields<OpenTradeAgreementJournals<DeSerializers>>;
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
         * Static representation of the {@link journalNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JOURNAL_NUMBER: fieldBuilder.buildEdmTypeField(
          'JournalNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link isCurrentPriceExported} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_CURRENT_PRICE_EXPORTED: fieldBuilder.buildEnumField(
          'IsCurrentPriceExported',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link priceGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRICE_GROUP: fieldBuilder.buildEdmTypeField(
          'PriceGroup',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link journalDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JOURNAL_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'JournalDescription',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link priceComponentCodeName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRICE_COMPONENT_CODE_NAME: fieldBuilder.buildEdmTypeField(
          'PriceComponentCodeName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link priceComponentCombination} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRICE_COMPONENT_COMBINATION: fieldBuilder.buildEdmTypeField(
          'PriceComponentCombination',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link tradeAgreementJournalNameId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRADE_AGREEMENT_JOURNAL_NAME_ID: fieldBuilder.buildEdmTypeField(
          'TradeAgreementJournalNameId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link postedDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POSTED_DATE: fieldBuilder.buildEdmTypeField(
          'PostedDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link priceApplyAdjustment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRICE_APPLY_ADJUSTMENT: fieldBuilder.buildEnumField(
          'PriceApplyAdjustment',
          NoYes,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', OpenTradeAgreementJournals)
      };
    }

    return this._schema;
  }
}
