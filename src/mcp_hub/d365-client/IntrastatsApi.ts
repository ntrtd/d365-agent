/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Intrastats } from './Intrastats';
import { IntrastatsRequestBuilder } from './IntrastatsRequestBuilder';
import { IntrastatItemTypeIt } from './IntrastatItemTypeIt';
import { IntrastatServicesDeliveryIt } from './IntrastatServicesDeliveryIt';
import { NoYes } from './NoYes';
import { ModuleInventCustVend } from './ModuleInventCustVend';
import { IntrastatDirection } from './IntrastatDirection';
import { MonthsOfYear } from './MonthsOfYear';
import { IntrastatPaymentMethodIt } from './IntrastatPaymentMethodIt';
import { IntrastatOrderType } from './IntrastatOrderType';
import { QuarterOfYear } from './QuarterOfYear';
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
export class IntrastatsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<Intrastats<DeSerializersT>, DeSerializersT>
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
  ): IntrastatsApi<DeSerializersT> {
    return new IntrastatsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = Intrastats;

  requestBuilder(): IntrastatsRequestBuilder<DeSerializersT> {
    return new IntrastatsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    Intrastats<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<Intrastats<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<Intrastats<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof Intrastats, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(Intrastats, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      Intrastats<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SHIPMENT_BATCH: OrderableEdmTypeField<
      Intrastats<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SEQUENCE_NUMBER: OrderableEdmTypeField<
      Intrastats<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    COMMODITY: OrderableEdmTypeField<
      Intrastats<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COUNTY_OF_ORIGIN: OrderableEdmTypeField<
      Intrastats<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DIRECTION_CODE: OrderableEdmTypeField<
      Intrastats<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    STATUS_TRANS: OrderableEdmTypeField<
      Intrastats<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    CHARGES_AMOUNT: OrderableEdmTypeField<
      Intrastats<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    RELATION: OrderableEdmTypeField<
      Intrastats<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    ACCOUNT_NUMBER: OrderableEdmTypeField<
      Intrastats<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CHARGES_PERCENTAGE: OrderableEdmTypeField<
      Intrastats<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ITEM_NUMBER: OrderableEdmTypeField<
      Intrastats<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CUSTOMS_CODE: OrderableEdmTypeField<
      Intrastats<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    STATISTICAL_AMOUNT: OrderableEdmTypeField<
      Intrastats<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    STATE: OrderableEdmTypeField<
      Intrastats<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WEIGHT: OrderableEdmTypeField<
      Intrastats<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ITEM_TYPE: EnumField<
      Intrastats<DeSerializers>,
      DeSerializersT,
      IntrastatItemTypeIt,
      true,
      true
    >;
    DELIVERY_TERMS: OrderableEdmTypeField<
      Intrastats<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ORIGINAL_INTRASTAT_RECORD: OrderableEdmTypeField<
      Intrastats<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IDENTIFICATION_OF_THE_PACKING_SLIP_OR_PRODUCT_RECEIPT: OrderableEdmTypeField<
      Intrastats<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LOT_ID: OrderableEdmTypeField<
      Intrastats<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COMMODITY_NAME: OrderableEdmTypeField<
      Intrastats<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COMMODITY_ADDITIONAL_UNITS: OrderableEdmTypeField<
      Intrastats<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDITIONAL_UNIT: OrderableEdmTypeField<
      Intrastats<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COUNTRY_REGION_ID: OrderableEdmTypeField<
      Intrastats<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SPECIAL_MOVEMENT: OrderableEdmTypeField<
      Intrastats<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INTRASTAT_STATISTICAL_VALUE: OrderableEdmTypeField<
      Intrastats<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    NUMBER: OrderableEdmTypeField<
      Intrastats<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NET_WEIGHT_BY_UNIT: OrderableEdmTypeField<
      Intrastats<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    STATISTICAL_CHARGES_AMOUNT: OrderableEdmTypeField<
      Intrastats<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TRANSPORT: OrderableEdmTypeField<
      Intrastats<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PARENT_COMMODITY_NAME: OrderableEdmTypeField<
      Intrastats<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FULFILLMENT_DATE: OrderableEdmTypeField<
      Intrastats<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    NGP_CODE: OrderableEdmTypeField<
      Intrastats<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    DELIVERY_SCHEDULE: EnumField<
      Intrastats<DeSerializers>,
      DeSerializersT,
      IntrastatServicesDeliveryIt,
      true,
      true
    >;
    COMMODITY_HIERARCHY_NAME: OrderableEdmTypeField<
      Intrastats<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PARTIAL_CONSIGNMENT: EnumField<
      Intrastats<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      Intrastats<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PARENT_COMMODITY: OrderableEdmTypeField<
      Intrastats<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NGP_DESCRIPTION: OrderableEdmTypeField<
      Intrastats<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONSIGNMENTS: OrderableEdmTypeField<
      Intrastats<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    DELIVERY_MODE: OrderableEdmTypeField<
      Intrastats<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COMPRESS: EnumField<
      Intrastats<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    REFERENCE_TABLE_ID: OrderableEdmTypeField<
      Intrastats<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    TRANSACTION_CODE: OrderableEdmTypeField<
      Intrastats<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MODULE: EnumField<
      Intrastats<DeSerializers>,
      DeSerializersT,
      ModuleInventCustVend,
      true,
      true
    >;
    DIRECTION: EnumField<
      Intrastats<DeSerializers>,
      DeSerializersT,
      IntrastatDirection,
      true,
      true
    >;
    INTRASTAT_STATISTICAL_ADJUSTMENT_AMOUNT: OrderableEdmTypeField<
      Intrastats<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    COUNTY: OrderableEdmTypeField<
      Intrastats<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVOICE: OrderableEdmTypeField<
      Intrastats<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    STATISTICS_PROCEDURE: OrderableEdmTypeField<
      Intrastats<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVOICE_AMOUNT_TRANS_CUR: OrderableEdmTypeField<
      Intrastats<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TARIFF_NUMBER: OrderableEdmTypeField<
      Intrastats<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    CORRECTION_YEAR: OrderableEdmTypeField<
      Intrastats<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    MONTH: EnumField<
      Intrastats<DeSerializers>,
      DeSerializersT,
      MonthsOfYear,
      true,
      true
    >;
    LOG: OrderableEdmTypeField<
      Intrastats<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COUNTRY_REGION_SENDER_RECEIVER: OrderableEdmTypeField<
      Intrastats<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    AMOUNT: OrderableEdmTypeField<
      Intrastats<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PAYMENT_METHOD: EnumField<
      Intrastats<DeSerializers>,
      DeSerializersT,
      IntrastatPaymentMethodIt,
      true,
      true
    >;
    STATEMENT_NUMBER: OrderableEdmTypeField<
      Intrastats<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    STATE_SENDER_RECEIVER: OrderableEdmTypeField<
      Intrastats<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INTRASTAT_ORDER_TYPE: EnumField<
      Intrastats<DeSerializers>,
      DeSerializersT,
      IntrastatOrderType,
      true,
      true
    >;
    QUARTER: EnumField<
      Intrastats<DeSerializers>,
      DeSerializersT,
      QuarterOfYear,
      true,
      true
    >;
    TAX_REGISTRATION_NUMBER: OrderableEdmTypeField<
      Intrastats<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ORIG_COUNTRY_REGION_ID: OrderableEdmTypeField<
      Intrastats<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    QUANTITY: OrderableEdmTypeField<
      Intrastats<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    MISC_CHARGE_PER_KG: OrderableEdmTypeField<
      Intrastats<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PORT: OrderableEdmTypeField<
      Intrastats<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PREFERENCE: OrderableEdmTypeField<
      Intrastats<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    CATEGORY_NAME: OrderableEdmTypeField<
      Intrastats<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CORRECTION: EnumField<
      Intrastats<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    INVOICE_CHARGES_AMOUNT_TRANS_CURRENCY: OrderableEdmTypeField<
      Intrastats<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TAX_EXEMPT_NUMBER: OrderableEdmTypeField<
      Intrastats<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SEND_RECEIVE_STATE: OrderableEdmTypeField<
      Intrastats<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONTAINER: EnumField<
      Intrastats<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CURRENCY_CODE: OrderableEdmTypeField<
      Intrastats<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVOICE_CHARGES_AMOUNT: OrderableEdmTypeField<
      Intrastats<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    INVOICE_AMOUNT: OrderableEdmTypeField<
      Intrastats<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CATEGORY_HIERARCHY_NAME: OrderableEdmTypeField<
      Intrastats<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CURRENT_AGREEMENT: EnumField<
      Intrastats<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DATE: OrderableEdmTypeField<
      Intrastats<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    ADDITIONAL_UNITS_QUANTITY: OrderableEdmTypeField<
      Intrastats<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    STATE_OF_ORIGIN: OrderableEdmTypeField<
      Intrastats<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<Intrastats<DeSerializers>>;
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
         * Static representation of the {@link shipmentBatch} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIPMENT_BATCH: fieldBuilder.buildEdmTypeField(
          'ShipmentBatch',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link sequenceNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SEQUENCE_NUMBER: fieldBuilder.buildEdmTypeField(
          'SequenceNumber',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link commodity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMMODITY: fieldBuilder.buildEdmTypeField(
          'Commodity',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link countyOfOrigin} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COUNTY_OF_ORIGIN: fieldBuilder.buildEdmTypeField(
          'CountyOfOrigin',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link directionCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DIRECTION_CODE: fieldBuilder.buildEdmTypeField(
          'DirectionCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link statusTrans} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STATUS_TRANS: fieldBuilder.buildEdmTypeField(
          'StatusTrans',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link chargesAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CHARGES_AMOUNT: fieldBuilder.buildEdmTypeField(
          'ChargesAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link relation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RELATION: fieldBuilder.buildEdmTypeField(
          'relation',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link accountNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCOUNT_NUMBER: fieldBuilder.buildEdmTypeField(
          'AccountNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link chargesPercentage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CHARGES_PERCENTAGE: fieldBuilder.buildEdmTypeField(
          'ChargesPercentage',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link itemNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_NUMBER: fieldBuilder.buildEdmTypeField(
          'ItemNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link customsCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOMS_CODE: fieldBuilder.buildEdmTypeField(
          'CustomsCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link statisticalAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STATISTICAL_AMOUNT: fieldBuilder.buildEdmTypeField(
          'StatisticalAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link state} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STATE: fieldBuilder.buildEdmTypeField('State', 'Edm.String', true),
        /**
         * Static representation of the {@link weight} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WEIGHT: fieldBuilder.buildEdmTypeField('Weight', 'Edm.Decimal', false),
        /**
         * Static representation of the {@link itemType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_TYPE: fieldBuilder.buildEnumField(
          'ItemType',
          IntrastatItemTypeIt,
          true
        ),
        /**
         * Static representation of the {@link deliveryTerms} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_TERMS: fieldBuilder.buildEdmTypeField(
          'DeliveryTerms',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link originalIntrastatRecord} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORIGINAL_INTRASTAT_RECORD: fieldBuilder.buildEdmTypeField(
          'OriginalIntrastatRecord',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link identificationOfThePackingSlipOrProductReceipt} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IDENTIFICATION_OF_THE_PACKING_SLIP_OR_PRODUCT_RECEIPT:
          fieldBuilder.buildEdmTypeField(
            'IdentificationOfThePackingSlipOrProductReceipt',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link lotId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOT_ID: fieldBuilder.buildEdmTypeField('LotID', 'Edm.String', true),
        /**
         * Static representation of the {@link commodityName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMMODITY_NAME: fieldBuilder.buildEdmTypeField(
          'CommodityName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link commodityAdditionalUnits} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMMODITY_ADDITIONAL_UNITS: fieldBuilder.buildEdmTypeField(
          'CommodityAdditionalUnits',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link additionalUnit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDITIONAL_UNIT: fieldBuilder.buildEdmTypeField(
          'AdditionalUnit',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link countryRegionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COUNTRY_REGION_ID: fieldBuilder.buildEdmTypeField(
          'CountryRegionId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link specialMovement} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SPECIAL_MOVEMENT: fieldBuilder.buildEdmTypeField(
          'SpecialMovement',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link intrastatStatisticalValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INTRASTAT_STATISTICAL_VALUE: fieldBuilder.buildEdmTypeField(
          'IntrastatStatisticalValue',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link number} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NUMBER: fieldBuilder.buildEdmTypeField('Number', 'Edm.String', true),
        /**
         * Static representation of the {@link netWeightByUnit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NET_WEIGHT_BY_UNIT: fieldBuilder.buildEdmTypeField(
          'NetWeightByUnit',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link statisticalChargesAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STATISTICAL_CHARGES_AMOUNT: fieldBuilder.buildEdmTypeField(
          'StatisticalChargesAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link transport} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSPORT: fieldBuilder.buildEdmTypeField(
          'Transport',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link parentCommodityName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PARENT_COMMODITY_NAME: fieldBuilder.buildEdmTypeField(
          'ParentCommodityName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link fulfillmentDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FULFILLMENT_DATE: fieldBuilder.buildEdmTypeField(
          'FulfillmentDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link ngpCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NGP_CODE: fieldBuilder.buildEdmTypeField('NGPCode', 'Edm.Int32', false),
        /**
         * Static representation of the {@link deliverySchedule} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_SCHEDULE: fieldBuilder.buildEnumField(
          'DeliverySchedule',
          IntrastatServicesDeliveryIt,
          true
        ),
        /**
         * Static representation of the {@link commodityHierarchyName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMMODITY_HIERARCHY_NAME: fieldBuilder.buildEdmTypeField(
          'CommodityHierarchyName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link partialConsignment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PARTIAL_CONSIGNMENT: fieldBuilder.buildEnumField(
          'PartialConsignment',
          NoYes,
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
         * Static representation of the {@link parentCommodity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PARENT_COMMODITY: fieldBuilder.buildEdmTypeField(
          'ParentCommodity',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link ngpDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NGP_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'NGPDescription',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link consignments} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONSIGNMENTS: fieldBuilder.buildEdmTypeField(
          'Consignments',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link deliveryMode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_MODE: fieldBuilder.buildEdmTypeField(
          'DeliveryMode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link compress} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMPRESS: fieldBuilder.buildEnumField('Compress', NoYes, true),
        /**
         * Static representation of the {@link referenceTableId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REFERENCE_TABLE_ID: fieldBuilder.buildEdmTypeField(
          'ReferenceTableID',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link transactionCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSACTION_CODE: fieldBuilder.buildEdmTypeField(
          'TransactionCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link module} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MODULE: fieldBuilder.buildEnumField(
          'Module',
          ModuleInventCustVend,
          true
        ),
        /**
         * Static representation of the {@link direction} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DIRECTION: fieldBuilder.buildEnumField(
          'Direction',
          IntrastatDirection,
          true
        ),
        /**
         * Static representation of the {@link intrastatStatisticalAdjustmentAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INTRASTAT_STATISTICAL_ADJUSTMENT_AMOUNT: fieldBuilder.buildEdmTypeField(
          'IntrastatStatisticalAdjustmentAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link county} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COUNTY: fieldBuilder.buildEdmTypeField('County', 'Edm.String', true),
        /**
         * Static representation of the {@link invoice} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE: fieldBuilder.buildEdmTypeField('Invoice', 'Edm.String', true),
        /**
         * Static representation of the {@link statisticsProcedure} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STATISTICS_PROCEDURE: fieldBuilder.buildEdmTypeField(
          'StatisticsProcedure',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link invoiceAmountTransCur} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_AMOUNT_TRANS_CUR: fieldBuilder.buildEdmTypeField(
          'InvoiceAmountTransCur',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link tariffNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TARIFF_NUMBER: fieldBuilder.buildEdmTypeField(
          'TariffNumber',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link correctionYear} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CORRECTION_YEAR: fieldBuilder.buildEdmTypeField(
          'CorrectionYear',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link month} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MONTH: fieldBuilder.buildEnumField('Month', MonthsOfYear, true),
        /**
         * Static representation of the {@link log} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOG: fieldBuilder.buildEdmTypeField('Log', 'Edm.String', true),
        /**
         * Static representation of the {@link countryRegionSenderReceiver} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COUNTRY_REGION_SENDER_RECEIVER: fieldBuilder.buildEdmTypeField(
          'CountryRegionSenderReceiver',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link amount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AMOUNT: fieldBuilder.buildEdmTypeField('Amount', 'Edm.Decimal', false),
        /**
         * Static representation of the {@link paymentMethod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYMENT_METHOD: fieldBuilder.buildEnumField(
          'PaymentMethod',
          IntrastatPaymentMethodIt,
          true
        ),
        /**
         * Static representation of the {@link statementNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STATEMENT_NUMBER: fieldBuilder.buildEdmTypeField(
          'StatementNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link stateSenderReceiver} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STATE_SENDER_RECEIVER: fieldBuilder.buildEdmTypeField(
          'StateSenderReceiver',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link intrastatOrderType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INTRASTAT_ORDER_TYPE: fieldBuilder.buildEnumField(
          'IntrastatOrderType',
          IntrastatOrderType,
          true
        ),
        /**
         * Static representation of the {@link quarter} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        QUARTER: fieldBuilder.buildEnumField('Quarter', QuarterOfYear, true),
        /**
         * Static representation of the {@link taxRegistrationNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_REGISTRATION_NUMBER: fieldBuilder.buildEdmTypeField(
          'TaxRegistrationNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link origCountryRegionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORIG_COUNTRY_REGION_ID: fieldBuilder.buildEdmTypeField(
          'OrigCountryRegionId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link quantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        QUANTITY: fieldBuilder.buildEdmTypeField(
          'Quantity',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link miscChargePerKg} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MISC_CHARGE_PER_KG: fieldBuilder.buildEdmTypeField(
          'MiscChargePerKg',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link port} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PORT: fieldBuilder.buildEdmTypeField('Port', 'Edm.String', true),
        /**
         * Static representation of the {@link preference} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PREFERENCE: fieldBuilder.buildEdmTypeField(
          'Preference',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link categoryName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CATEGORY_NAME: fieldBuilder.buildEdmTypeField(
          'CategoryName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link correction} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CORRECTION: fieldBuilder.buildEnumField('Correction', NoYes, true),
        /**
         * Static representation of the {@link invoiceChargesAmountTransCurrency} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_CHARGES_AMOUNT_TRANS_CURRENCY: fieldBuilder.buildEdmTypeField(
          'InvoiceChargesAmountTransCurrency',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link taxExemptNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_EXEMPT_NUMBER: fieldBuilder.buildEdmTypeField(
          'TaxExemptNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link sendReceiveState} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SEND_RECEIVE_STATE: fieldBuilder.buildEdmTypeField(
          'SendReceiveState',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link container} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONTAINER: fieldBuilder.buildEnumField('Container', NoYes, true),
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
         * Static representation of the {@link invoiceChargesAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_CHARGES_AMOUNT: fieldBuilder.buildEdmTypeField(
          'InvoiceChargesAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link invoiceAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_AMOUNT: fieldBuilder.buildEdmTypeField(
          'InvoiceAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link categoryHierarchyName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CATEGORY_HIERARCHY_NAME: fieldBuilder.buildEdmTypeField(
          'CategoryHierarchyName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link currentAgreement} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CURRENT_AGREEMENT: fieldBuilder.buildEnumField(
          'CurrentAgreement',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link date} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DATE: fieldBuilder.buildEdmTypeField(
          'Date',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link additionalUnitsQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDITIONAL_UNITS_QUANTITY: fieldBuilder.buildEdmTypeField(
          'AdditionalUnitsQuantity',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link stateOfOrigin} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STATE_OF_ORIGIN: fieldBuilder.buildEdmTypeField(
          'StateOfOrigin',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', Intrastats)
      };
    }

    return this._schema;
  }
}
