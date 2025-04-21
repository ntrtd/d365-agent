/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { SiteGateEntryLines } from './SiteGateEntryLines';
import { SiteGateEntryLinesRequestBuilder } from './SiteGateEntryLinesRequestBuilder';
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
  OrderableEdmTypeField
} from '@sap-cloud-sdk/odata-v4';
export class SiteGateEntryLinesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<SiteGateEntryLines<DeSerializersT>, DeSerializersT>
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
  ): SiteGateEntryLinesApi<DeSerializersT> {
    return new SiteGateEntryLinesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = SiteGateEntryLines;

  requestBuilder(): SiteGateEntryLinesRequestBuilder<DeSerializersT> {
    return new SiteGateEntryLinesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    SiteGateEntryLines<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<SiteGateEntryLines<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    SiteGateEntryLines<DeSerializersT>,
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
    typeof SiteGateEntryLines,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        SiteGateEntryLines,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      SiteGateEntryLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    GATE_ENTRY: OrderableEdmTypeField<
      SiteGateEntryLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LINE_NUM: OrderableEdmTypeField<
      SiteGateEntryLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    MEASURING_RUNNING_NUMBER: OrderableEdmTypeField<
      SiteGateEntryLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      SiteGateEntryLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CHALLAN_DATE: OrderableEdmTypeField<
      SiteGateEntryLines<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    CHALLAN_QTY: OrderableEdmTypeField<
      SiteGateEntryLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    MEASURING_INSTRUMENT_ID: OrderableEdmTypeField<
      SiteGateEntryLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ITEM_NUMBER: OrderableEdmTypeField<
      SiteGateEntryLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TARE_QTY: OrderableEdmTypeField<
      SiteGateEntryLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    INVENTORY_UNIT: OrderableEdmTypeField<
      SiteGateEntryLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TARE_WEIGHT_UNIT: OrderableEdmTypeField<
      SiteGateEntryLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CHALLAN_NUMBER: OrderableEdmTypeField<
      SiteGateEntryLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MEASURED_QTY: OrderableEdmTypeField<
      SiteGateEntryLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    UNIT_OF_MEASUREMENT: OrderableEdmTypeField<
      SiteGateEntryLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<SiteGateEntryLines<DeSerializers>>;
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
         * Static representation of the {@link gateEntry} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GATE_ENTRY: fieldBuilder.buildEdmTypeField(
          'GateEntry',
          'Edm.String',
          false
        ),
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
         * Static representation of the {@link measuringRunningNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MEASURING_RUNNING_NUMBER: fieldBuilder.buildEdmTypeField(
          'MeasuringRunningNumber',
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
         * Static representation of the {@link challanDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CHALLAN_DATE: fieldBuilder.buildEdmTypeField(
          'ChallanDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link challanQty} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CHALLAN_QTY: fieldBuilder.buildEdmTypeField(
          'ChallanQty',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link measuringInstrumentId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MEASURING_INSTRUMENT_ID: fieldBuilder.buildEdmTypeField(
          'MeasuringInstrumentId',
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
         * Static representation of the {@link tareQty} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TARE_QTY: fieldBuilder.buildEdmTypeField(
          'TareQty',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link inventoryUnit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENTORY_UNIT: fieldBuilder.buildEdmTypeField(
          'InventoryUnit',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link tareWeightUnit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TARE_WEIGHT_UNIT: fieldBuilder.buildEdmTypeField(
          'TareWeightUnit',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link challanNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CHALLAN_NUMBER: fieldBuilder.buildEdmTypeField(
          'ChallanNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link measuredQty} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MEASURED_QTY: fieldBuilder.buildEdmTypeField(
          'MeasuredQty',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link unitOfMeasurement} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UNIT_OF_MEASUREMENT: fieldBuilder.buildEdmTypeField(
          'UnitOfMeasurement',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', SiteGateEntryLines)
      };
    }

    return this._schema;
  }
}
