/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { LandedCostTransferLines } from './LandedCostTransferLines';
import { LandedCostTransferLinesRequestBuilder } from './LandedCostTransferLinesRequestBuilder';
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
export class LandedCostTransferLinesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<LandedCostTransferLines<DeSerializersT>, DeSerializersT>
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
  ): LandedCostTransferLinesApi<DeSerializersT> {
    return new LandedCostTransferLinesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = LandedCostTransferLines;

  requestBuilder(): LandedCostTransferLinesRequestBuilder<DeSerializersT> {
    return new LandedCostTransferLinesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    LandedCostTransferLines<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      LandedCostTransferLines<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    LandedCostTransferLines<DeSerializersT>,
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
    typeof LandedCostTransferLines,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        LandedCostTransferLines,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      LandedCostTransferLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SHIP_DATA_AREA: OrderableEdmTypeField<
      LandedCostTransferLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TRANSFER_LINE_NUMBER: OrderableEdmTypeField<
      LandedCostTransferLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TRANSFER_ORDER_ID: OrderableEdmTypeField<
      LandedCostTransferLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SHIP_ID: OrderableEdmTypeField<
      LandedCostTransferLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SHIP_POSITION: OrderableEdmTypeField<
      LandedCostTransferLines<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    WEIGHT: OrderableEdmTypeField<
      LandedCostTransferLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SHIP_NO_OF_CARTONS: OrderableEdmTypeField<
      LandedCostTransferLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    UNIT_ID: OrderableEdmTypeField<
      LandedCostTransferLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SHIP_QTY: OrderableEdmTypeField<
      LandedCostTransferLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SHIP_DECLARED_QTY: OrderableEdmTypeField<
      LandedCostTransferLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SHIP_CONTAINER_ID: OrderableEdmTypeField<
      LandedCostTransferLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VOLUME: OrderableEdmTypeField<
      LandedCostTransferLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CURRENCY_CODE: OrderableEdmTypeField<
      LandedCostTransferLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SHIP_ITEM_ID: OrderableEdmTypeField<
      LandedCostTransferLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SHIP_FOLIO_ID: OrderableEdmTypeField<
      LandedCostTransferLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SHIP_MEASUREMENT_UNIT: EnumField<
      LandedCostTransferLines<DeSerializers>,
      DeSerializersT,
      ItmMeasurementUnit,
      true,
      true
    >;
    LINE_AMOUNT_MST: OrderableEdmTypeField<
      LandedCostTransferLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SHIP_MEASUREMENT: OrderableEdmTypeField<
      LandedCostTransferLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ALL_FIELDS: AllFields<LandedCostTransferLines<DeSerializers>>;
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
         * Static representation of the {@link transferLineNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSFER_LINE_NUMBER: fieldBuilder.buildEdmTypeField(
          'TransferLineNumber',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link transferOrderId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSFER_ORDER_ID: fieldBuilder.buildEdmTypeField(
          'TransferOrderId',
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
        ALL_FIELDS: new AllFields('*', LandedCostTransferLines)
      };
    }

    return this._schema;
  }
}
