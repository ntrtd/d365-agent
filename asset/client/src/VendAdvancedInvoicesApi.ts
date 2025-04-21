/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { VendAdvancedInvoices } from './VendAdvancedInvoices';
import { VendAdvancedInvoicesRequestBuilder } from './VendAdvancedInvoicesRequestBuilder';
import { NoYes } from './NoYes';
import { CzAdvanceInvoiceStatus } from './CzAdvanceInvoiceStatus';
import { Listcode } from './Listcode';
import { Timezone } from './Timezone';
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
export class VendAdvancedInvoicesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<VendAdvancedInvoices<DeSerializersT>, DeSerializersT>
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
  ): VendAdvancedInvoicesApi<DeSerializersT> {
    return new VendAdvancedInvoicesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = VendAdvancedInvoices;

  requestBuilder(): VendAdvancedInvoicesRequestBuilder<DeSerializersT> {
    return new VendAdvancedInvoicesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    VendAdvancedInvoices<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<VendAdvancedInvoices<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    VendAdvancedInvoices<DeSerializersT>,
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
    typeof VendAdvancedInvoices,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        VendAdvancedInvoices,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      VendAdvancedInvoices<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    HEAD_ID: OrderableEdmTypeField<
      VendAdvancedInvoices<DeSerializers>,
      DeSerializersT,
      'Edm.Guid',
      false,
      true
    >;
    LINE_NUM: OrderableEdmTypeField<
      VendAdvancedInvoices<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    NUMBER_SEQUENCE_GROUP: OrderableEdmTypeField<
      VendAdvancedInvoices<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_DELIVERY_PRIVATE: EnumField<
      VendAdvancedInvoices<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    VEND_GROUP: OrderableEdmTypeField<
      VendAdvancedInvoices<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONSTANT_SYMBOL: OrderableEdmTypeField<
      VendAdvancedInvoices<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NAME: OrderableEdmTypeField<
      VendAdvancedInvoices<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ITEM_SALES_TAX_GROUP: OrderableEdmTypeField<
      VendAdvancedInvoices<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_STATE: OrderableEdmTypeField<
      VendAdvancedInvoices<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_VALID_FROM: OrderableEdmTypeField<
      VendAdvancedInvoices<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    INVOICE_AMOUNT: OrderableEdmTypeField<
      VendAdvancedInvoices<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CURRENCY: OrderableEdmTypeField<
      VendAdvancedInvoices<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    METHOD_OF_PAYMENT: OrderableEdmTypeField<
      VendAdvancedInvoices<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    STATUS: EnumField<
      VendAdvancedInvoices<DeSerializers>,
      DeSerializersT,
      CzAdvanceInvoiceStatus,
      true,
      true
    >;
    CONTACT: OrderableEdmTypeField<
      VendAdvancedInvoices<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VARIABLE_SYMBOL: OrderableEdmTypeField<
      VendAdvancedInvoices<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VEND_ACCOUNT: OrderableEdmTypeField<
      VendAdvancedInvoices<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVOICE_ACCOUNT: OrderableEdmTypeField<
      VendAdvancedInvoices<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADVANCE_INVOICE: OrderableEdmTypeField<
      VendAdvancedInvoices<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      VendAdvancedInvoices<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_COUNTRY_REGION_ISO_CODE: OrderableEdmTypeField<
      VendAdvancedInvoices<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LIST_CODE: EnumField<
      VendAdvancedInvoices<DeSerializers>,
      DeSerializersT,
      Listcode,
      true,
      true
    >;
    DELIVERY_BUILDING_COMPLIMENT: OrderableEdmTypeField<
      VendAdvancedInvoices<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RECIPIENT: OrderableEdmTypeField<
      VendAdvancedInvoices<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_ZIP_CODE: OrderableEdmTypeField<
      VendAdvancedInvoices<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VEND_POSTAL_ADDRESS: OrderableEdmTypeField<
      VendAdvancedInvoices<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    DELIVERY_ADDRESS: OrderableEdmTypeField<
      VendAdvancedInvoices<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_LOCATION_ID: OrderableEdmTypeField<
      VendAdvancedInvoices<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_COUNTRY_REGION: OrderableEdmTypeField<
      VendAdvancedInvoices<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PURCHASE_ORDER: OrderableEdmTypeField<
      VendAdvancedInvoices<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LANGUAGE: OrderableEdmTypeField<
      VendAdvancedInvoices<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DUNS_NUMBER: OrderableEdmTypeField<
      VendAdvancedInvoices<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_VALID_TO: OrderableEdmTypeField<
      VendAdvancedInvoices<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    DELIVERY_TIME_ZONE: EnumField<
      VendAdvancedInvoices<DeSerializers>,
      DeSerializersT,
      Timezone,
      true,
      true
    >;
    POSTING_PROFILE: OrderableEdmTypeField<
      VendAdvancedInvoices<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_COUNTY: OrderableEdmTypeField<
      VendAdvancedInvoices<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ONE_TIME_SUPPLIER: EnumField<
      VendAdvancedInvoices<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DUE_DATE: OrderableEdmTypeField<
      VendAdvancedInvoices<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    INVOICE_TEXT: OrderableEdmTypeField<
      VendAdvancedInvoices<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_DISTRICT_NAME: OrderableEdmTypeField<
      VendAdvancedInvoices<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_STREET: OrderableEdmTypeField<
      VendAdvancedInvoices<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    POSTED: EnumField<
      VendAdvancedInvoices<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DELIVERY_POST_BOX: OrderableEdmTypeField<
      VendAdvancedInvoices<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_DESCRIPTION: OrderableEdmTypeField<
      VendAdvancedInvoices<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_STREET_NUMBER: OrderableEdmTypeField<
      VendAdvancedInvoices<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_LATITUDE: OrderableEdmTypeField<
      VendAdvancedInvoices<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DELIVERY_CITY: OrderableEdmTypeField<
      VendAdvancedInvoices<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVOICE_DATE: OrderableEdmTypeField<
      VendAdvancedInvoices<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    AMOUNT: OrderableEdmTypeField<
      VendAdvancedInvoices<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DELIVERY_LONGITUDE: OrderableEdmTypeField<
      VendAdvancedInvoices<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SALES_TAX_GROUP: OrderableEdmTypeField<
      VendAdvancedInvoices<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEFAULT_DIMENSION_DISPLAY_VALUE: OrderableEdmTypeField<
      VendAdvancedInvoices<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TERMS_OF_PAYMENT: OrderableEdmTypeField<
      VendAdvancedInvoices<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PAYMENT_SPECIFICATION: OrderableEdmTypeField<
      VendAdvancedInvoices<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<VendAdvancedInvoices<DeSerializers>>;
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
         * Static representation of the {@link headId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HEAD_ID: fieldBuilder.buildEdmTypeField('HeadId', 'Edm.Guid', false),
        /**
         * Static representation of the {@link lineNum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_NUM: fieldBuilder.buildEdmTypeField(
          'LineNum',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link numberSequenceGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NUMBER_SEQUENCE_GROUP: fieldBuilder.buildEdmTypeField(
          'NumberSequenceGroup',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isDeliveryPrivate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_DELIVERY_PRIVATE: fieldBuilder.buildEnumField(
          'IsDeliveryPrivate',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link vendGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VEND_GROUP: fieldBuilder.buildEdmTypeField(
          'VendGroup',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link constantSymbol} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONSTANT_SYMBOL: fieldBuilder.buildEdmTypeField(
          'ConstantSymbol',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', true),
        /**
         * Static representation of the {@link itemSalesTaxGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_SALES_TAX_GROUP: fieldBuilder.buildEdmTypeField(
          'ItemSalesTaxGroup',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link deliveryState} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_STATE: fieldBuilder.buildEdmTypeField(
          'DeliveryState',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link deliveryValidFrom} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_VALID_FROM: fieldBuilder.buildEdmTypeField(
          'DeliveryValidFrom',
          'Edm.DateTimeOffset',
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
         * Static representation of the {@link currency} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CURRENCY: fieldBuilder.buildEdmTypeField(
          'Currency',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link methodOfPayment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        METHOD_OF_PAYMENT: fieldBuilder.buildEdmTypeField(
          'MethodOfPayment',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link status} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STATUS: fieldBuilder.buildEnumField(
          'Status',
          CzAdvanceInvoiceStatus,
          true
        ),
        /**
         * Static representation of the {@link contact} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONTACT: fieldBuilder.buildEdmTypeField('Contact', 'Edm.String', true),
        /**
         * Static representation of the {@link variableSymbol} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VARIABLE_SYMBOL: fieldBuilder.buildEdmTypeField(
          'VariableSymbol',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link vendAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VEND_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'VendAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link invoiceAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'InvoiceAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link advanceInvoice} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADVANCE_INVOICE: fieldBuilder.buildEdmTypeField(
          'AdvanceInvoice',
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
         * Static representation of the {@link deliveryCountryRegionIsoCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_COUNTRY_REGION_ISO_CODE: fieldBuilder.buildEdmTypeField(
          'DeliveryCountryRegionISOCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link listCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LIST_CODE: fieldBuilder.buildEnumField('ListCode', Listcode, true),
        /**
         * Static representation of the {@link deliveryBuildingCompliment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_BUILDING_COMPLIMENT: fieldBuilder.buildEdmTypeField(
          'DeliveryBuildingCompliment',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link recipient} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECIPIENT: fieldBuilder.buildEdmTypeField(
          'Recipient',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link deliveryZipCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_ZIP_CODE: fieldBuilder.buildEdmTypeField(
          'DeliveryZipCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link vendPostalAddress} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VEND_POSTAL_ADDRESS: fieldBuilder.buildEdmTypeField(
          'VendPostalAddress',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link deliveryAddress} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_ADDRESS: fieldBuilder.buildEdmTypeField(
          'DeliveryAddress',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link deliveryLocationId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_LOCATION_ID: fieldBuilder.buildEdmTypeField(
          'DeliveryLocationId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link deliveryCountryRegion} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_COUNTRY_REGION: fieldBuilder.buildEdmTypeField(
          'DeliveryCountryRegion',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link purchaseOrder} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCHASE_ORDER: fieldBuilder.buildEdmTypeField(
          'PurchaseOrder',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link language} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LANGUAGE: fieldBuilder.buildEdmTypeField(
          'Language',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link dunsNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DUNS_NUMBER: fieldBuilder.buildEdmTypeField(
          'DunsNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link deliveryValidTo} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_VALID_TO: fieldBuilder.buildEdmTypeField(
          'DeliveryValidTo',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link deliveryTimeZone} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_TIME_ZONE: fieldBuilder.buildEnumField(
          'DeliveryTimeZone',
          Timezone,
          true
        ),
        /**
         * Static representation of the {@link postingProfile} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POSTING_PROFILE: fieldBuilder.buildEdmTypeField(
          'PostingProfile',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link deliveryCounty} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_COUNTY: fieldBuilder.buildEdmTypeField(
          'DeliveryCounty',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link oneTimeSupplier} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ONE_TIME_SUPPLIER: fieldBuilder.buildEnumField(
          'OneTimeSupplier',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link dueDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DUE_DATE: fieldBuilder.buildEdmTypeField(
          'DueDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link invoiceText} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_TEXT: fieldBuilder.buildEdmTypeField(
          'InvoiceText',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link deliveryDistrictName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_DISTRICT_NAME: fieldBuilder.buildEdmTypeField(
          'DeliveryDistrictName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link deliveryStreet} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_STREET: fieldBuilder.buildEdmTypeField(
          'DeliveryStreet',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link posted} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POSTED: fieldBuilder.buildEnumField('Posted', NoYes, true),
        /**
         * Static representation of the {@link deliveryPostBox} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_POST_BOX: fieldBuilder.buildEdmTypeField(
          'DeliveryPostBox',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link deliveryDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'DeliveryDescription',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link deliveryStreetNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_STREET_NUMBER: fieldBuilder.buildEdmTypeField(
          'DeliveryStreetNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link deliveryLatitude} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_LATITUDE: fieldBuilder.buildEdmTypeField(
          'DeliveryLatitude',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link deliveryCity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_CITY: fieldBuilder.buildEdmTypeField(
          'DeliveryCity',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link invoiceDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_DATE: fieldBuilder.buildEdmTypeField(
          'InvoiceDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link amount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AMOUNT: fieldBuilder.buildEdmTypeField('Amount', 'Edm.Decimal', false),
        /**
         * Static representation of the {@link deliveryLongitude} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_LONGITUDE: fieldBuilder.buildEdmTypeField(
          'DeliveryLongitude',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link salesTaxGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_TAX_GROUP: fieldBuilder.buildEdmTypeField(
          'SalesTaxGroup',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link defaultDimensionDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_DIMENSION_DISPLAY_VALUE: fieldBuilder.buildEdmTypeField(
          'DefaultDimensionDisplayValue',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link termsOfPayment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TERMS_OF_PAYMENT: fieldBuilder.buildEdmTypeField(
          'TermsOfPayment',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link paymentSpecification} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYMENT_SPECIFICATION: fieldBuilder.buildEdmTypeField(
          'PaymentSpecification',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', VendAdvancedInvoices)
      };
    }

    return this._schema;
  }
}
