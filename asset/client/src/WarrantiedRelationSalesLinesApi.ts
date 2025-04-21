/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { WarrantiedRelationSalesLines } from './WarrantiedRelationSalesLines';
import { WarrantiedRelationSalesLinesRequestBuilder } from './WarrantiedRelationSalesLinesRequestBuilder';
import { WarrantiedRelationOrderType } from './WarrantiedRelationOrderType';
import { WarrantiedRelation } from './WarrantiedRelation';
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
export class WarrantiedRelationSalesLinesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<WarrantiedRelationSalesLines<DeSerializersT>, DeSerializersT>
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
  ): WarrantiedRelationSalesLinesApi<DeSerializersT> {
    return new WarrantiedRelationSalesLinesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = WarrantiedRelationSalesLines;

  requestBuilder(): WarrantiedRelationSalesLinesRequestBuilder<DeSerializersT> {
    return new WarrantiedRelationSalesLinesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    WarrantiedRelationSalesLines<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      WarrantiedRelationSalesLines<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    WarrantiedRelationSalesLines<DeSerializersT>,
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
    typeof WarrantiedRelationSalesLines,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        WarrantiedRelationSalesLines,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      WarrantiedRelationSalesLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    WARRANTIED_ORDER_TYPE: EnumField<
      WarrantiedRelationSalesLines<DeSerializers>,
      DeSerializersT,
      WarrantiedRelationOrderType,
      true,
      true
    >;
    WARRANTY_SALES_ID: OrderableEdmTypeField<
      WarrantiedRelationSalesLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    WARRANTY_SALES_LINE_NUMBER: OrderableEdmTypeField<
      WarrantiedRelationSalesLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    WARRANTIED_SERIAL_NUMBER: OrderableEdmTypeField<
      WarrantiedRelationSalesLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    WARRANTY_ORDER_TYPE: EnumField<
      WarrantiedRelationSalesLines<DeSerializers>,
      DeSerializersT,
      WarrantiedRelationOrderType,
      true,
      true
    >;
    WARRANTIED_SALES_ID: OrderableEdmTypeField<
      WarrantiedRelationSalesLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    WARRANTIED_SALES_LINE_NUMBER: OrderableEdmTypeField<
      WarrantiedRelationSalesLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    WARRANTY_ITEM_ID: OrderableEdmTypeField<
      WarrantiedRelationSalesLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CUSTOMER_ACCOUNT: OrderableEdmTypeField<
      WarrantiedRelationSalesLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WARRANTY_INVENTORY_LOT_ID: OrderableEdmTypeField<
      WarrantiedRelationSalesLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WARRANTIED_INVENTORY_LOT_ID: OrderableEdmTypeField<
      WarrantiedRelationSalesLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RELATION: EnumField<
      WarrantiedRelationSalesLines<DeSerializers>,
      DeSerializersT,
      WarrantiedRelation,
      true,
      true
    >;
    WARRANTIED_ITEM_ID: OrderableEdmTypeField<
      WarrantiedRelationSalesLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<WarrantiedRelationSalesLines<DeSerializers>>;
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
         * Static representation of the {@link warrantiedOrderType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WARRANTIED_ORDER_TYPE: fieldBuilder.buildEnumField(
          'WarrantiedOrderType',
          WarrantiedRelationOrderType,
          true
        ),
        /**
         * Static representation of the {@link warrantySalesId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WARRANTY_SALES_ID: fieldBuilder.buildEdmTypeField(
          'WarrantySalesId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link warrantySalesLineNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WARRANTY_SALES_LINE_NUMBER: fieldBuilder.buildEdmTypeField(
          'WarrantySalesLineNumber',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link warrantiedSerialNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WARRANTIED_SERIAL_NUMBER: fieldBuilder.buildEdmTypeField(
          'WarrantiedSerialNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link warrantyOrderType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WARRANTY_ORDER_TYPE: fieldBuilder.buildEnumField(
          'WarrantyOrderType',
          WarrantiedRelationOrderType,
          true
        ),
        /**
         * Static representation of the {@link warrantiedSalesId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WARRANTIED_SALES_ID: fieldBuilder.buildEdmTypeField(
          'WarrantiedSalesId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link warrantiedSalesLineNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WARRANTIED_SALES_LINE_NUMBER: fieldBuilder.buildEdmTypeField(
          'WarrantiedSalesLineNumber',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link warrantyItemId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WARRANTY_ITEM_ID: fieldBuilder.buildEdmTypeField(
          'WarrantyItemId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link customerAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOMER_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'CustomerAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link warrantyInventoryLotId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WARRANTY_INVENTORY_LOT_ID: fieldBuilder.buildEdmTypeField(
          'WarrantyInventoryLotId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link warrantiedInventoryLotId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WARRANTIED_INVENTORY_LOT_ID: fieldBuilder.buildEdmTypeField(
          'WarrantiedInventoryLotId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link relation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RELATION: fieldBuilder.buildEnumField(
          'Relation',
          WarrantiedRelation,
          true
        ),
        /**
         * Static representation of the {@link warrantiedItemId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WARRANTIED_ITEM_ID: fieldBuilder.buildEdmTypeField(
          'WarrantiedItemId',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', WarrantiedRelationSalesLines)
      };
    }

    return this._schema;
  }
}
