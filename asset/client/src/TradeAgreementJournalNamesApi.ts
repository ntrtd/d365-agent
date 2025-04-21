/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { TradeAgreementJournalNames } from './TradeAgreementJournalNames';
import { TradeAgreementJournalNamesRequestBuilder } from './TradeAgreementJournalNamesRequestBuilder';
import { OpenTradeAgreementJournalHeadersV2Api } from './OpenTradeAgreementJournalHeadersV2Api';
import { TradeAgreementJournalHeadersApi } from './TradeAgreementJournalHeadersApi';
import { PriceType } from './PriceType';
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
  OneToManyLink
} from '@sap-cloud-sdk/odata-v4';
export class TradeAgreementJournalNamesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<TradeAgreementJournalNames<DeSerializersT>, DeSerializersT>
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
  ): TradeAgreementJournalNamesApi<DeSerializersT> {
    return new TradeAgreementJournalNamesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link openTradeAgreementJournalHeaders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OPEN_TRADE_AGREEMENT_JOURNAL_HEADERS: OneToManyLink<
      TradeAgreementJournalNames<DeSerializersT>,
      DeSerializersT,
      OpenTradeAgreementJournalHeadersV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link tradeAgreementJournalHeaders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TRADE_AGREEMENT_JOURNAL_HEADERS: OneToManyLink<
      TradeAgreementJournalNames<DeSerializersT>,
      DeSerializersT,
      TradeAgreementJournalHeadersApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      OpenTradeAgreementJournalHeadersV2Api<DeSerializersT>,
      TradeAgreementJournalHeadersApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      OPEN_TRADE_AGREEMENT_JOURNAL_HEADERS: new OneToManyLink(
        'OpenTradeAgreementJournalHeaders',
        this,
        linkedApis[0]
      ),
      TRADE_AGREEMENT_JOURNAL_HEADERS: new OneToManyLink(
        'TradeAgreementJournalHeaders',
        this,
        linkedApis[1]
      )
    };
    return this;
  }

  entityConstructor = TradeAgreementJournalNames;

  requestBuilder(): TradeAgreementJournalNamesRequestBuilder<DeSerializersT> {
    return new TradeAgreementJournalNamesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    TradeAgreementJournalNames<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      TradeAgreementJournalNames<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    TradeAgreementJournalNames<DeSerializersT>,
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
    typeof TradeAgreementJournalNames,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        TradeAgreementJournalNames,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      TradeAgreementJournalNames<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TRADE_AGREEMENT_JOURNAL_NAME_ID: OrderableEdmTypeField<
      TradeAgreementJournalNames<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DEFAULT_TRADE_AGREEMENT_TYPE: EnumField<
      TradeAgreementJournalNames<DeSerializers>,
      DeSerializersT,
      PriceType,
      true,
      true
    >;
    DEFAULT_JOURNAL_DESCRIPTION: OrderableEdmTypeField<
      TradeAgreementJournalNames<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRICE_DISC_PRICE_ATTRIBUTE_ENABLE: EnumField<
      TradeAgreementJournalNames<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link openTradeAgreementJournalHeaders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OPEN_TRADE_AGREEMENT_JOURNAL_HEADERS: OneToManyLink<
      TradeAgreementJournalNames<DeSerializersT>,
      DeSerializersT,
      OpenTradeAgreementJournalHeadersV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link tradeAgreementJournalHeaders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TRADE_AGREEMENT_JOURNAL_HEADERS: OneToManyLink<
      TradeAgreementJournalNames<DeSerializersT>,
      DeSerializersT,
      TradeAgreementJournalHeadersApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<TradeAgreementJournalNames<DeSerializers>>;
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
         * Static representation of the {@link tradeAgreementJournalNameId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRADE_AGREEMENT_JOURNAL_NAME_ID: fieldBuilder.buildEdmTypeField(
          'TradeAgreementJournalNameId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link defaultTradeAgreementType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_TRADE_AGREEMENT_TYPE: fieldBuilder.buildEnumField(
          'DefaultTradeAgreementType',
          PriceType,
          true
        ),
        /**
         * Static representation of the {@link defaultJournalDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_JOURNAL_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'DefaultJournalDescription',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link priceDiscPriceAttributeEnable} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRICE_DISC_PRICE_ATTRIBUTE_ENABLE: fieldBuilder.buildEnumField(
          'PriceDiscPriceAttributeEnable',
          NoYes,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', TradeAgreementJournalNames)
      };
    }

    return this._schema;
  }
}
