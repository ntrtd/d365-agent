/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { LandedCostPurchaseLines } from './LandedCostPurchaseLines';
import { LandedCostPurchaseLinesRequestBuilder } from './LandedCostPurchaseLinesRequestBuilder';
import { ItmMeasurementUnit } from './ItmMeasurementUnit';
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
export class LandedCostPurchaseLinesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<LandedCostPurchaseLines<DeSerializersT>, DeSerializersT>
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
  ): LandedCostPurchaseLinesApi<DeSerializersT> {
    return new LandedCostPurchaseLinesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = LandedCostPurchaseLines;

  requestBuilder(): LandedCostPurchaseLinesRequestBuilder<DeSerializersT> {
    return new LandedCostPurchaseLinesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    LandedCostPurchaseLines<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      LandedCostPurchaseLines<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    LandedCostPurchaseLines<DeSerializersT>,
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
    typeof LandedCostPurchaseLines,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        LandedCostPurchaseLines,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      LandedCostPurchaseLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SHIP_DATA_AREA: OrderableEdmTypeField<
      LandedCostPurchaseLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PURCHASE_LINE_NUMBER: OrderableEdmTypeField<
      LandedCostPurchaseLines<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    PURCHASE_ORDER_ID: OrderableEdmTypeField<
      LandedCostPurchaseLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SHIP_ID: OrderableEdmTypeField<
      LandedCostPurchaseLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SHIP_POSITION: OrderableEdmTypeField<
      LandedCostPurchaseLines<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    WEIGHT: OrderableEdmTypeField<
      LandedCostPurchaseLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SHIP_NO_OF_CARTONS: OrderableEdmTypeField<
      LandedCostPurchaseLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    UNIT_ID: OrderableEdmTypeField<
      LandedCostPurchaseLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SHIP_QTY: OrderableEdmTypeField<
      LandedCostPurchaseLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SHIP_DECLARED_QTY: OrderableEdmTypeField<
      LandedCostPurchaseLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SHIP_CONTAINER_ID: OrderableEdmTypeField<
      LandedCostPurchaseLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VOLUME: OrderableEdmTypeField<
      LandedCostPurchaseLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CURRENCY_CODE: OrderableEdmTypeField<
      LandedCostPurchaseLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SHIP_ITEM_ID: OrderableEdmTypeField<
      LandedCostPurchaseLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SHIP_FOLIO_ID: OrderableEdmTypeField<
      LandedCostPurchaseLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SHIP_MEASUREMENT_UNIT: EnumField<
      LandedCostPurchaseLines<DeSerializers>,
      DeSerializersT,
      ItmMeasurementUnit,
      true,
      true
    >;
    LINE_AMOUNT_MST: OrderableEdmTypeField<
      LandedCostPurchaseLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SHIP_MEASUREMENT: OrderableEdmTypeField<
      LandedCostPurchaseLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ALL_FIELDS: AllFields<LandedCostPurchaseLines<DeSerializers>>;
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
         * Static representation of the {@link shipDataArea} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIP_DATA_AREA: fieldBuilder.buildEdmTypeField(
          'ShipDataArea',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link purchaseLineNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCHASE_LINE_NUMBER: fieldBuilder.buildEdmTypeField(
          'PurchaseLineNumber',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link purchaseOrderId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCHASE_ORDER_ID: fieldBuilder.buildEdmTypeField(
          'PurchaseOrderId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link shipId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIP_ID: fieldBuilder.buildEdmTypeField('ShipId', 'Edm.String', false),
        /**
         * Static representation of the {@link shipPosition} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIP_POSITION: fieldBuilder.buildEdmTypeField(
          'ShipPosition',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link weight} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WEIGHT: fieldBuilder.buildEdmTypeField('Weight', 'Edm.Decimal', false),
        /**
         * Static representation of the {@link shipNoOfCartons} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIP_NO_OF_CARTONS: fieldBuilder.buildEdmTypeField(
          'ShipNoOfCartons',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link unitId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UNIT_ID: fieldBuilder.buildEdmTypeField('UnitId', 'Edm.String', true),
        /**
         * Static representation of the {@link shipQty} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIP_QTY: fieldBuilder.buildEdmTypeField(
          'ShipQty',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link shipDeclaredQty} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIP_DECLARED_QTY: fieldBuilder.buildEdmTypeField(
          'ShipDeclaredQty',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link shipContainerId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIP_CONTAINER_ID: fieldBuilder.buildEdmTypeField(
          'ShipContainerId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link volume} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VOLUME: fieldBuilder.buildEdmTypeField('Volume', 'Edm.Decimal', false),
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
         * Static representation of the {@link shipItemId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIP_ITEM_ID: fieldBuilder.buildEdmTypeField(
          'ShipItemId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link shipFolioId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIP_FOLIO_ID: fieldBuilder.buildEdmTypeField(
          'ShipFolioId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link shipMeasurementUnit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIP_MEASUREMENT_UNIT: fieldBuilder.buildEnumField(
          'ShipMeasurementUnit',
          ItmMeasurementUnit,
          true
        ),
        /**
         * Static representation of the {@link lineAmountMst} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_AMOUNT_MST: fieldBuilder.buildEdmTypeField(
          'LineAmountMST',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link shipMeasurement} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIP_MEASUREMENT: fieldBuilder.buildEdmTypeField(
          'ShipMeasurement',
          'Edm.Decimal',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', LandedCostPurchaseLines)
      };
    }

    return this._schema;
  }
}
