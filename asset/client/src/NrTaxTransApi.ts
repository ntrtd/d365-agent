/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { NrTaxTrans } from './NrTaxTrans';
import { NrTaxTransRequestBuilder } from './NrTaxTransRequestBuilder';
import { LvNrTransType } from './LvNrTransType';
import { NoYes } from './NoYes';
import { InventTransType } from './InventTransType';
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
export class NrTaxTransApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<NrTaxTrans<DeSerializersT>, DeSerializersT>
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
  ): NrTaxTransApi<DeSerializersT> {
    return new NrTaxTransApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = NrTaxTrans;

  requestBuilder(): NrTaxTransRequestBuilder<DeSerializersT> {
    return new NrTaxTransRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    NrTaxTrans<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<NrTaxTrans<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<NrTaxTrans<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof NrTaxTrans, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(NrTaxTrans, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      NrTaxTrans<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LINE_ID: OrderableEdmTypeField<
      NrTaxTrans<DeSerializers>,
      DeSerializersT,
      'Edm.Guid',
      false,
      true
    >;
    PACKING_MATERIAL_CODE: OrderableEdmTypeField<
      NrTaxTrans<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRANS_REC_ID_REFERENCE: OrderableEdmTypeField<
      NrTaxTrans<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    REFERENCE_TABLE_ID: OrderableEdmTypeField<
      NrTaxTrans<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    ITEM_NUMBER: OrderableEdmTypeField<
      NrTaxTrans<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PACKING_UNIT_WEIGHT: OrderableEdmTypeField<
      NrTaxTrans<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PACKING_WEIGHT: OrderableEdmTypeField<
      NrTaxTrans<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PACKING_QTY: OrderableEdmTypeField<
      NrTaxTrans<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TRANS_DATE: OrderableEdmTypeField<
      NrTaxTrans<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    DIMENSION_NUMBER: OrderableEdmTypeField<
      NrTaxTrans<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NR_TAX_GROUP: OrderableEdmTypeField<
      NrTaxTrans<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TAX_AMOUNT: OrderableEdmTypeField<
      NrTaxTrans<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    NUMBER: OrderableEdmTypeField<
      NrTaxTrans<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TAX_BASE_AMOUNT: OrderableEdmTypeField<
      NrTaxTrans<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    INVOICE: OrderableEdmTypeField<
      NrTaxTrans<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PACKING_UNIT: OrderableEdmTypeField<
      NrTaxTrans<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VOUCHER: OrderableEdmTypeField<
      NrTaxTrans<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRANS_TYPE: EnumField<
      NrTaxTrans<DeSerializers>,
      DeSerializersT,
      LvNrTransType,
      true,
      true
    >;
    TAX_CODE: OrderableEdmTypeField<
      NrTaxTrans<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BOM_LINE: EnumField<
      NrTaxTrans<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    INVENT_TRANS_TYPE_REFERENCE: EnumField<
      NrTaxTrans<DeSerializers>,
      DeSerializersT,
      InventTransType,
      true,
      true
    >;
    ITEM_QTY: OrderableEdmTypeField<
      NrTaxTrans<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TAX_VALUE: OrderableEdmTypeField<
      NrTaxTrans<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SALES_TAX_GROUP: OrderableEdmTypeField<
      NrTaxTrans<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVENT_TRANS_ID: OrderableEdmTypeField<
      NrTaxTrans<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PACKING_UNIT_QTY: OrderableEdmTypeField<
      NrTaxTrans<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ALL_FIELDS: AllFields<NrTaxTrans<DeSerializers>>;
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
         * Static representation of the {@link lineId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_ID: fieldBuilder.buildEdmTypeField('LineId', 'Edm.Guid', false),
        /**
         * Static representation of the {@link packingMaterialCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PACKING_MATERIAL_CODE: fieldBuilder.buildEdmTypeField(
          'PackingMaterialCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link transRecIdReference} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANS_REC_ID_REFERENCE: fieldBuilder.buildEdmTypeField(
          'TransRecIdReference',
          'Edm.Int64',
          false
        ),
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
         * Static representation of the {@link itemNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_NUMBER: fieldBuilder.buildEdmTypeField(
          'ItemNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link packingUnitWeight} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PACKING_UNIT_WEIGHT: fieldBuilder.buildEdmTypeField(
          'PackingUnitWeight',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link packingWeight} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PACKING_WEIGHT: fieldBuilder.buildEdmTypeField(
          'PackingWeight',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link packingQty} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PACKING_QTY: fieldBuilder.buildEdmTypeField(
          'PackingQty',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link transDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANS_DATE: fieldBuilder.buildEdmTypeField(
          'TransDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link dimensionNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DIMENSION_NUMBER: fieldBuilder.buildEdmTypeField(
          'DimensionNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link nrTaxGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NR_TAX_GROUP: fieldBuilder.buildEdmTypeField(
          'NRTaxGroup',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link taxAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_AMOUNT: fieldBuilder.buildEdmTypeField(
          'TaxAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link number} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NUMBER: fieldBuilder.buildEdmTypeField('Number', 'Edm.String', true),
        /**
         * Static representation of the {@link taxBaseAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_BASE_AMOUNT: fieldBuilder.buildEdmTypeField(
          'TaxBaseAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link invoice} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE: fieldBuilder.buildEdmTypeField('Invoice', 'Edm.String', true),
        /**
         * Static representation of the {@link packingUnit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PACKING_UNIT: fieldBuilder.buildEdmTypeField(
          'PackingUnit',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link voucher} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VOUCHER: fieldBuilder.buildEdmTypeField('Voucher', 'Edm.String', true),
        /**
         * Static representation of the {@link transType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANS_TYPE: fieldBuilder.buildEnumField(
          'TransType',
          LvNrTransType,
          true
        ),
        /**
         * Static representation of the {@link taxCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_CODE: fieldBuilder.buildEdmTypeField('TaxCode', 'Edm.String', true),
        /**
         * Static representation of the {@link bomLine} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BOM_LINE: fieldBuilder.buildEnumField('BOMLine', NoYes, true),
        /**
         * Static representation of the {@link inventTransTypeReference} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENT_TRANS_TYPE_REFERENCE: fieldBuilder.buildEnumField(
          'InventTransTypeReference',
          InventTransType,
          true
        ),
        /**
         * Static representation of the {@link itemQty} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_QTY: fieldBuilder.buildEdmTypeField(
          'ItemQty',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link taxValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_VALUE: fieldBuilder.buildEdmTypeField(
          'TaxValue',
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
         * Static representation of the {@link inventTransId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENT_TRANS_ID: fieldBuilder.buildEdmTypeField(
          'InventTransId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link packingUnitQty} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PACKING_UNIT_QTY: fieldBuilder.buildEdmTypeField(
          'PackingUnitQty',
          'Edm.Decimal',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', NrTaxTrans)
      };
    }

    return this._schema;
  }
}
