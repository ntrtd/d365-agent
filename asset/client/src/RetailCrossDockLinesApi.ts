/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RetailCrossDockLines } from './RetailCrossDockLines';
import { RetailCrossDockLinesRequestBuilder } from './RetailCrossDockLinesRequestBuilder';
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
export class RetailCrossDockLinesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<RetailCrossDockLines<DeSerializersT>, DeSerializersT>
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
  ): RetailCrossDockLinesApi<DeSerializersT> {
    return new RetailCrossDockLinesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = RetailCrossDockLines;

  requestBuilder(): RetailCrossDockLinesRequestBuilder<DeSerializersT> {
    return new RetailCrossDockLinesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    RetailCrossDockLines<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<RetailCrossDockLines<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    RetailCrossDockLines<DeSerializersT>,
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
    typeof RetailCrossDockLines,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        RetailCrossDockLines,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      RetailCrossDockLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CROSS_DOCK_ID: OrderableEdmTypeField<
      RetailCrossDockLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LINE_NUMBER: OrderableEdmTypeField<
      RetailCrossDockLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    INVENTORY_DIMENSION_ID: OrderableEdmTypeField<
      RetailCrossDockLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    UNIT_OF_MEASURE_SYMBOL: OrderableEdmTypeField<
      RetailCrossDockLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    USER_SPECIFIED: EnumField<
      RetailCrossDockLines<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PURCHASE_LINE_INVENTORY_TRANSFER_ID: OrderableEdmTypeField<
      RetailCrossDockLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    USER_SPECIFIED_QUANTITY: OrderableEdmTypeField<
      RetailCrossDockLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ITEM_ID: OrderableEdmTypeField<
      RetailCrossDockLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<RetailCrossDockLines<DeSerializers>>;
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
         * Static representation of the {@link crossDockId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CROSS_DOCK_ID: fieldBuilder.buildEdmTypeField(
          'CrossDockId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link lineNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_NUMBER: fieldBuilder.buildEdmTypeField(
          'LineNumber',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link inventoryDimensionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENTORY_DIMENSION_ID: fieldBuilder.buildEdmTypeField(
          'InventoryDimensionId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link unitOfMeasureSymbol} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UNIT_OF_MEASURE_SYMBOL: fieldBuilder.buildEdmTypeField(
          'UnitOfMeasureSymbol',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link userSpecified} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USER_SPECIFIED: fieldBuilder.buildEnumField(
          'UserSpecified',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link purchaseLineInventoryTransferId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCHASE_LINE_INVENTORY_TRANSFER_ID: fieldBuilder.buildEdmTypeField(
          'PurchaseLineInventoryTransferId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link userSpecifiedQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USER_SPECIFIED_QUANTITY: fieldBuilder.buildEdmTypeField(
          'UserSpecifiedQuantity',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link itemId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_ID: fieldBuilder.buildEdmTypeField('ItemId', 'Edm.String', true),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', RetailCrossDockLines)
      };
    }

    return this._schema;
  }
}
