/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { LoadTemplates } from './LoadTemplates';
import { LoadTemplatesRequestBuilder } from './LoadTemplatesRequestBuilder';
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
export class LoadTemplatesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<LoadTemplates<DeSerializersT>, DeSerializersT>
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
  ): LoadTemplatesApi<DeSerializersT> {
    return new LoadTemplatesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = LoadTemplates;

  requestBuilder(): LoadTemplatesRequestBuilder<DeSerializersT> {
    return new LoadTemplatesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    LoadTemplates<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<LoadTemplates<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<LoadTemplates<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof LoadTemplates, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(LoadTemplates, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      LoadTemplates<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TEMPLATE_ID: OrderableEdmTypeField<
      LoadTemplates<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    MAXIMUM_FREIGHT_PIECES: OrderableEdmTypeField<
      LoadTemplates<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    MAXIMUM_QUANTITY: OrderableEdmTypeField<
      LoadTemplates<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    LOAD_DEPTH: OrderableEdmTypeField<
      LoadTemplates<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    MAXIMUM_LOAD_WEIGHT: OrderableEdmTypeField<
      LoadTemplates<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    MAXIMUM_QUANTITY_UNIT_SYMBOL: OrderableEdmTypeField<
      LoadTemplates<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_LOAD_FLOOR_STACKED: EnumField<
      LoadTemplates<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    IS_LOAD_SPLIT_SHIP_CONFIRM_ALLOWED: EnumField<
      LoadTemplates<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    LOAD_HEIGHT: OrderableEdmTypeField<
      LoadTemplates<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    WAREHOUSE_EQUIPMENT_CODE: OrderableEdmTypeField<
      LoadTemplates<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MAXIMUM_GROSS_WEIGHT: OrderableEdmTypeField<
      LoadTemplates<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    LOAD_WIDTH: OrderableEdmTypeField<
      LoadTemplates<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    MAXIMUM_LOAD_VOLUME: OrderableEdmTypeField<
      LoadTemplates<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ALL_FIELDS: AllFields<LoadTemplates<DeSerializers>>;
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
         * Static representation of the {@link templateId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TEMPLATE_ID: fieldBuilder.buildEdmTypeField(
          'TemplateId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link maximumFreightPieces} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAXIMUM_FREIGHT_PIECES: fieldBuilder.buildEdmTypeField(
          'MaximumFreightPieces',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link maximumQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAXIMUM_QUANTITY: fieldBuilder.buildEdmTypeField(
          'MaximumQuantity',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link loadDepth} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOAD_DEPTH: fieldBuilder.buildEdmTypeField(
          'LoadDepth',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link maximumLoadWeight} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAXIMUM_LOAD_WEIGHT: fieldBuilder.buildEdmTypeField(
          'MaximumLoadWeight',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link maximumQuantityUnitSymbol} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAXIMUM_QUANTITY_UNIT_SYMBOL: fieldBuilder.buildEdmTypeField(
          'MaximumQuantityUnitSymbol',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isLoadFloorStacked} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_LOAD_FLOOR_STACKED: fieldBuilder.buildEnumField(
          'IsLoadFloorStacked',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link isLoadSplitShipConfirmAllowed} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_LOAD_SPLIT_SHIP_CONFIRM_ALLOWED: fieldBuilder.buildEnumField(
          'IsLoadSplitShipConfirmAllowed',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link loadHeight} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOAD_HEIGHT: fieldBuilder.buildEdmTypeField(
          'LoadHeight',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link warehouseEquipmentCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WAREHOUSE_EQUIPMENT_CODE: fieldBuilder.buildEdmTypeField(
          'WarehouseEquipmentCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link maximumGrossWeight} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAXIMUM_GROSS_WEIGHT: fieldBuilder.buildEdmTypeField(
          'MaximumGrossWeight',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link loadWidth} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOAD_WIDTH: fieldBuilder.buildEdmTypeField(
          'LoadWidth',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link maximumLoadVolume} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAXIMUM_LOAD_VOLUME: fieldBuilder.buildEdmTypeField(
          'MaximumLoadVolume',
          'Edm.Decimal',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', LoadTemplates)
      };
    }

    return this._schema;
  }
}
