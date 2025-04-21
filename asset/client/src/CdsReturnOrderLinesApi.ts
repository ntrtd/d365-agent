/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { CdsReturnOrderLines } from './CdsReturnOrderLines';
import { CdsReturnOrderLinesRequestBuilder } from './CdsReturnOrderLinesRequestBuilder';
import { CdsReturnOrderHeadersApi } from './CdsReturnOrderHeadersApi';
import { ReturnStatusLine } from './ReturnStatusLine';
import { NoYes } from './NoYes';
import { InventRefType } from './InventRefType';
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
  EnumField,
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class CdsReturnOrderLinesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<CdsReturnOrderLines<DeSerializersT>, DeSerializersT>
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
  ): CdsReturnOrderLinesApi<DeSerializersT> {
    return new CdsReturnOrderLinesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link cdsReturnOrderHeader} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CDS_RETURN_ORDER_HEADER: OneToOneLink<
      CdsReturnOrderLines<DeSerializersT>,
      DeSerializersT,
      CdsReturnOrderHeadersApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [CdsReturnOrderHeadersApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      CDS_RETURN_ORDER_HEADER: new OneToOneLink(
        'CDSReturnOrderHeader',
        this,
        linkedApis[0]
      )
    };
    return this;
  }

  entityConstructor = CdsReturnOrderLines;

  requestBuilder(): CdsReturnOrderLinesRequestBuilder<DeSerializersT> {
    return new CdsReturnOrderLinesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    CdsReturnOrderLines<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<CdsReturnOrderLines<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    CdsReturnOrderLines<DeSerializersT>,
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
    typeof CdsReturnOrderLines,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        CdsReturnOrderLines,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      CdsReturnOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    RETURN_ORDER_NUMBER: OrderableEdmTypeField<
      CdsReturnOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LINE_CREATION_SEQUENCE_NUMBER: OrderableEdmTypeField<
      CdsReturnOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    FORMATTED_RETURN_ADDRESS: OrderableEdmTypeField<
      CdsReturnOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RETURN_ADDRESS_DUNS_NUMBER: OrderableEdmTypeField<
      CdsReturnOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RETURN_POSTAL_ADDRESS_REC_ID: OrderableEdmTypeField<
      CdsReturnOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    TOTAL_TAX_AMOUNT: OrderableEdmTypeField<
      CdsReturnOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    RETURNING_INVENTORY_LOT_ID: OrderableEdmTypeField<
      CdsReturnOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCT_CONFIGURATION_ID: OrderableEdmTypeField<
      CdsReturnOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RETURN_ADDRESS_COUNTRY_REGION_ID: OrderableEdmTypeField<
      CdsReturnOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RETURN_STATUS: EnumField<
      CdsReturnOrderLines<DeSerializers>,
      DeSerializersT,
      ReturnStatusLine,
      true,
      true
    >;
    REFERENCE_NUMBER: OrderableEdmTypeField<
      CdsReturnOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_RETURN_ADDRESS_PRIVATE: EnumField<
      CdsReturnOrderLines<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    RETURN_ADDRESS_POST_BOX: OrderableEdmTypeField<
      CdsReturnOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RETURN_SALES_QUANTITY: OrderableEdmTypeField<
      CdsReturnOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TOTAL_CHARGES_AMOUNT: OrderableEdmTypeField<
      CdsReturnOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    RETURN_ADDRESS_ZIP_CODE: OrderableEdmTypeField<
      CdsReturnOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TOTAL_DISCOUNT_AMOUNT: OrderableEdmTypeField<
      CdsReturnOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PRODUCT_SIZE_ID: OrderableEdmTypeField<
      CdsReturnOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RETURN_ADDRESS_COUNTY_ID: OrderableEdmTypeField<
      CdsReturnOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RETURN_ADDRESS_LOCATION_ID: OrderableEdmTypeField<
      CdsReturnOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RETURN_DISPOSITION_CODE: OrderableEdmTypeField<
      CdsReturnOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LINE_DESCRIPTION: OrderableEdmTypeField<
      CdsReturnOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RETURN_ADDRESS_DESCRIPTION: OrderableEdmTypeField<
      CdsReturnOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RETURN_SITE_ID: OrderableEdmTypeField<
      CdsReturnOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RETURN_ADDRESS_STREET: OrderableEdmTypeField<
      CdsReturnOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ITEM_NUMBER: OrderableEdmTypeField<
      CdsReturnOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCT_COLOR_ID: OrderableEdmTypeField<
      CdsReturnOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RETURN_WAREHOUSE_ID: OrderableEdmTypeField<
      CdsReturnOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RETURN_ADDRESS_STATE_ID: OrderableEdmTypeField<
      CdsReturnOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RETURN_ADDRESS_CITY: OrderableEdmTypeField<
      CdsReturnOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCT_VERSION_ID: OrderableEdmTypeField<
      CdsReturnOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RETURN_ADDRESS_STREET_NUMBER: OrderableEdmTypeField<
      CdsReturnOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCT_STYLE_ID: OrderableEdmTypeField<
      CdsReturnOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SALES_PRICE: OrderableEdmTypeField<
      CdsReturnOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    RETURN_ADDRESS_NAME: OrderableEdmTypeField<
      CdsReturnOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REFERENCE_TYPE: EnumField<
      CdsReturnOrderLines<DeSerializers>,
      DeSerializersT,
      InventRefType,
      true,
      true
    >;
    IS_RETURN_ADDRESS_ORDER_SPECIFIC: EnumField<
      CdsReturnOrderLines<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    RETURN_ADDRESS_TIME_ZONE: EnumField<
      CdsReturnOrderLines<DeSerializers>,
      DeSerializersT,
      Timezone,
      true,
      true
    >;
    RETURN_ADDRESS_LATITUDE: OrderableEdmTypeField<
      CdsReturnOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    RETURN_INVENTORY_LOT_ID: OrderableEdmTypeField<
      CdsReturnOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SALES_UNIT_SYMBOL: OrderableEdmTypeField<
      CdsReturnOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RETURN_ADDRESS_LONGITUDE: OrderableEdmTypeField<
      CdsReturnOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    RETURN_ADDRESS_DISTRICT_NAME: OrderableEdmTypeField<
      CdsReturnOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RETURN_CLOSED_DATE: OrderableEdmTypeField<
      CdsReturnOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    RETURNED_SALES_QUANTITY: OrderableEdmTypeField<
      CdsReturnOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    REFERENCE_INVENTORY_LOT_ID: OrderableEdmTypeField<
      CdsReturnOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LINE_AMOUNT: OrderableEdmTypeField<
      CdsReturnOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    EXPECTED_RETURN_ARRIVAL_DATE: OrderableEdmTypeField<
      CdsReturnOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    ACTUAL_RETURN_ARRIVAL_DATE: OrderableEdmTypeField<
      CdsReturnOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    RMA_NUMBER: OrderableEdmTypeField<
      CdsReturnOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link cdsReturnOrderHeader} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CDS_RETURN_ORDER_HEADER: OneToOneLink<
      CdsReturnOrderLines<DeSerializersT>,
      DeSerializersT,
      CdsReturnOrderHeadersApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<CdsReturnOrderLines<DeSerializers>>;
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
         * Static representation of the {@link returnOrderNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RETURN_ORDER_NUMBER: fieldBuilder.buildEdmTypeField(
          'ReturnOrderNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link lineCreationSequenceNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_CREATION_SEQUENCE_NUMBER: fieldBuilder.buildEdmTypeField(
          'LineCreationSequenceNumber',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link formattedReturnAddress} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FORMATTED_RETURN_ADDRESS: fieldBuilder.buildEdmTypeField(
          'FormattedReturnAddress',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link returnAddressDunsNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RETURN_ADDRESS_DUNS_NUMBER: fieldBuilder.buildEdmTypeField(
          'ReturnAddressDunsNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link returnPostalAddressRecId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RETURN_POSTAL_ADDRESS_REC_ID: fieldBuilder.buildEdmTypeField(
          'ReturnPostalAddressRecId',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link totalTaxAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TOTAL_TAX_AMOUNT: fieldBuilder.buildEdmTypeField(
          'TotalTaxAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link returningInventoryLotId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RETURNING_INVENTORY_LOT_ID: fieldBuilder.buildEdmTypeField(
          'ReturningInventoryLotId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link productConfigurationId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_CONFIGURATION_ID: fieldBuilder.buildEdmTypeField(
          'ProductConfigurationId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link returnAddressCountryRegionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RETURN_ADDRESS_COUNTRY_REGION_ID: fieldBuilder.buildEdmTypeField(
          'ReturnAddressCountryRegionId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link returnStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RETURN_STATUS: fieldBuilder.buildEnumField(
          'ReturnStatus',
          ReturnStatusLine,
          true
        ),
        /**
         * Static representation of the {@link referenceNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REFERENCE_NUMBER: fieldBuilder.buildEdmTypeField(
          'ReferenceNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isReturnAddressPrivate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_RETURN_ADDRESS_PRIVATE: fieldBuilder.buildEnumField(
          'IsReturnAddressPrivate',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link returnAddressPostBox} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RETURN_ADDRESS_POST_BOX: fieldBuilder.buildEdmTypeField(
          'ReturnAddressPostBox',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link returnSalesQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RETURN_SALES_QUANTITY: fieldBuilder.buildEdmTypeField(
          'ReturnSalesQuantity',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link totalChargesAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TOTAL_CHARGES_AMOUNT: fieldBuilder.buildEdmTypeField(
          'TotalChargesAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link returnAddressZipCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RETURN_ADDRESS_ZIP_CODE: fieldBuilder.buildEdmTypeField(
          'ReturnAddressZipCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link totalDiscountAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TOTAL_DISCOUNT_AMOUNT: fieldBuilder.buildEdmTypeField(
          'TotalDiscountAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link productSizeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_SIZE_ID: fieldBuilder.buildEdmTypeField(
          'ProductSizeId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link returnAddressCountyId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RETURN_ADDRESS_COUNTY_ID: fieldBuilder.buildEdmTypeField(
          'ReturnAddressCountyId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link returnAddressLocationId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RETURN_ADDRESS_LOCATION_ID: fieldBuilder.buildEdmTypeField(
          'ReturnAddressLocationId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link returnDispositionCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RETURN_DISPOSITION_CODE: fieldBuilder.buildEdmTypeField(
          'ReturnDispositionCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link lineDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'LineDescription',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link returnAddressDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RETURN_ADDRESS_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'ReturnAddressDescription',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link returnSiteId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RETURN_SITE_ID: fieldBuilder.buildEdmTypeField(
          'ReturnSiteId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link returnAddressStreet} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RETURN_ADDRESS_STREET: fieldBuilder.buildEdmTypeField(
          'ReturnAddressStreet',
          'Edm.String',
          true
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
         * Static representation of the {@link productColorId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_COLOR_ID: fieldBuilder.buildEdmTypeField(
          'ProductColorId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link returnWarehouseId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RETURN_WAREHOUSE_ID: fieldBuilder.buildEdmTypeField(
          'ReturnWarehouseId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link returnAddressStateId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RETURN_ADDRESS_STATE_ID: fieldBuilder.buildEdmTypeField(
          'ReturnAddressStateId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link returnAddressCity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RETURN_ADDRESS_CITY: fieldBuilder.buildEdmTypeField(
          'ReturnAddressCity',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link productVersionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_VERSION_ID: fieldBuilder.buildEdmTypeField(
          'ProductVersionId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link returnAddressStreetNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RETURN_ADDRESS_STREET_NUMBER: fieldBuilder.buildEdmTypeField(
          'ReturnAddressStreetNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link productStyleId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_STYLE_ID: fieldBuilder.buildEdmTypeField(
          'ProductStyleId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link salesPrice} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_PRICE: fieldBuilder.buildEdmTypeField(
          'SalesPrice',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link returnAddressName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RETURN_ADDRESS_NAME: fieldBuilder.buildEdmTypeField(
          'ReturnAddressName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link referenceType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REFERENCE_TYPE: fieldBuilder.buildEnumField(
          'ReferenceType',
          InventRefType,
          true
        ),
        /**
         * Static representation of the {@link isReturnAddressOrderSpecific} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_RETURN_ADDRESS_ORDER_SPECIFIC: fieldBuilder.buildEnumField(
          'IsReturnAddressOrderSpecific',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link returnAddressTimeZone} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RETURN_ADDRESS_TIME_ZONE: fieldBuilder.buildEnumField(
          'ReturnAddressTimeZone',
          Timezone,
          true
        ),
        /**
         * Static representation of the {@link returnAddressLatitude} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RETURN_ADDRESS_LATITUDE: fieldBuilder.buildEdmTypeField(
          'ReturnAddressLatitude',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link returnInventoryLotId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RETURN_INVENTORY_LOT_ID: fieldBuilder.buildEdmTypeField(
          'ReturnInventoryLotId',
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
         * Static representation of the {@link returnAddressLongitude} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RETURN_ADDRESS_LONGITUDE: fieldBuilder.buildEdmTypeField(
          'ReturnAddressLongitude',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link returnAddressDistrictName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RETURN_ADDRESS_DISTRICT_NAME: fieldBuilder.buildEdmTypeField(
          'ReturnAddressDistrictName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link returnClosedDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RETURN_CLOSED_DATE: fieldBuilder.buildEdmTypeField(
          'ReturnClosedDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link returnedSalesQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RETURNED_SALES_QUANTITY: fieldBuilder.buildEdmTypeField(
          'ReturnedSalesQuantity',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link referenceInventoryLotId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REFERENCE_INVENTORY_LOT_ID: fieldBuilder.buildEdmTypeField(
          'ReferenceInventoryLotId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link lineAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_AMOUNT: fieldBuilder.buildEdmTypeField(
          'LineAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link expectedReturnArrivalDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXPECTED_RETURN_ARRIVAL_DATE: fieldBuilder.buildEdmTypeField(
          'ExpectedReturnArrivalDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link actualReturnArrivalDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACTUAL_RETURN_ARRIVAL_DATE: fieldBuilder.buildEdmTypeField(
          'ActualReturnArrivalDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link rmaNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RMA_NUMBER: fieldBuilder.buildEdmTypeField(
          'RMANumber',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', CdsReturnOrderLines)
      };
    }

    return this._schema;
  }
}
