/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ProdComs } from './ProdComs';
import { ProdComsRequestBuilder } from './ProdComsRequestBuilder';
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
export class ProdComsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<ProdComs<DeSerializersT>, DeSerializersT>
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
  ): ProdComsApi<DeSerializersT> {
    return new ProdComsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = ProdComs;

  requestBuilder(): ProdComsRequestBuilder<DeSerializersT> {
    return new ProdComsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<ProdComs<DeSerializersT>, DeSerializersT> {
    return entityBuilder<ProdComs<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<ProdComs<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof ProdComs, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(ProdComs, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      ProdComs<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PERIOD: OrderableEdmTypeField<
      ProdComs<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    COLUMN_A: OrderableEdmTypeField<
      ProdComs<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    BRANCH_NUMBER: OrderableEdmTypeField<
      ProdComs<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LINE_NUM: OrderableEdmTypeField<
      ProdComs<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ITEM_ID: OrderableEdmTypeField<
      ProdComs<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    END_DATE: OrderableEdmTypeField<
      ProdComs<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    SECTION_4: OrderableEdmTypeField<
      ProdComs<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    FIELD_13: OrderableEdmTypeField<
      ProdComs<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    FIELD_14: OrderableEdmTypeField<
      ProdComs<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    UNIT_ID: OrderableEdmTypeField<
      ProdComs<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SECTION_3: OrderableEdmTypeField<
      ProdComs<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    START_DATE: OrderableEdmTypeField<
      ProdComs<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    COMMODITY_NAME: OrderableEdmTypeField<
      ProdComs<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SALES_NAME: OrderableEdmTypeField<
      ProdComs<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COLUMN_G: OrderableEdmTypeField<
      ProdComs<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SECTION_1: OrderableEdmTypeField<
      ProdComs<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    COLUMN_F: OrderableEdmTypeField<
      ProdComs<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    COLUMN_E: OrderableEdmTypeField<
      ProdComs<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    COLUMN_D: OrderableEdmTypeField<
      ProdComs<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    COLUMN_C: OrderableEdmTypeField<
      ProdComs<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SALES_ID: OrderableEdmTypeField<
      ProdComs<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COLUMN_O: OrderableEdmTypeField<
      ProdComs<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    COLUMN_N: OrderableEdmTypeField<
      ProdComs<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    COLUMN_M: OrderableEdmTypeField<
      ProdComs<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    COLUMN_L: OrderableEdmTypeField<
      ProdComs<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    COLUMN_K: OrderableEdmTypeField<
      ProdComs<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    COLUMN_J: OrderableEdmTypeField<
      ProdComs<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    COLUMN_I: OrderableEdmTypeField<
      ProdComs<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    COLUMN_H: OrderableEdmTypeField<
      ProdComs<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SALES_PRICE: OrderableEdmTypeField<
      ProdComs<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SALES_QTY: OrderableEdmTypeField<
      ProdComs<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    COMMODITY_HIERARCHY_NAME: OrderableEdmTypeField<
      ProdComs<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SECTION_2: OrderableEdmTypeField<
      ProdComs<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    CUST_ACCOUNT: OrderableEdmTypeField<
      ProdComs<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CREATION_WORK: EnumField<
      ProdComs<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    OTHER_DELIVERY: EnumField<
      ProdComs<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ALL_FIELDS: AllFields<ProdComs<DeSerializers>>;
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
         * Static representation of the {@link period} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERIOD: fieldBuilder.buildEdmTypeField('Period', 'Edm.String', false),
        /**
         * Static representation of the {@link columnA} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COLUMN_A: fieldBuilder.buildEdmTypeField(
          'ColumnA',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link branchNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BRANCH_NUMBER: fieldBuilder.buildEdmTypeField(
          'BranchNumber',
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
         * Static representation of the {@link itemId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_ID: fieldBuilder.buildEdmTypeField('ItemId', 'Edm.String', false),
        /**
         * Static representation of the {@link endDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        END_DATE: fieldBuilder.buildEdmTypeField(
          'EndDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link section4} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SECTION_4: fieldBuilder.buildEdmTypeField(
          'Section4',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link field13} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FIELD_13: fieldBuilder.buildEdmTypeField('Field13', 'Edm.Int32', false),
        /**
         * Static representation of the {@link field14} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FIELD_14: fieldBuilder.buildEdmTypeField('Field14', 'Edm.Int32', false),
        /**
         * Static representation of the {@link unitId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UNIT_ID: fieldBuilder.buildEdmTypeField('UnitId', 'Edm.String', true),
        /**
         * Static representation of the {@link section3} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SECTION_3: fieldBuilder.buildEdmTypeField(
          'Section3',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link startDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        START_DATE: fieldBuilder.buildEdmTypeField(
          'StartDate',
          'Edm.DateTimeOffset',
          false
        ),
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
         * Static representation of the {@link salesName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_NAME: fieldBuilder.buildEdmTypeField(
          'SalesName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link columnG} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COLUMN_G: fieldBuilder.buildEdmTypeField(
          'ColumnG',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link section1} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SECTION_1: fieldBuilder.buildEdmTypeField(
          'Section1',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link columnF} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COLUMN_F: fieldBuilder.buildEdmTypeField(
          'ColumnF',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link columnE} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COLUMN_E: fieldBuilder.buildEdmTypeField(
          'ColumnE',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link columnD} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COLUMN_D: fieldBuilder.buildEdmTypeField(
          'ColumnD',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link columnC} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COLUMN_C: fieldBuilder.buildEdmTypeField('ColumnC', 'Edm.String', true),
        /**
         * Static representation of the {@link salesId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_ID: fieldBuilder.buildEdmTypeField('SalesId', 'Edm.String', true),
        /**
         * Static representation of the {@link columnO} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COLUMN_O: fieldBuilder.buildEdmTypeField(
          'ColumnO',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link columnN} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COLUMN_N: fieldBuilder.buildEdmTypeField(
          'ColumnN',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link columnM} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COLUMN_M: fieldBuilder.buildEdmTypeField(
          'ColumnM',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link columnL} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COLUMN_L: fieldBuilder.buildEdmTypeField(
          'ColumnL',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link columnK} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COLUMN_K: fieldBuilder.buildEdmTypeField(
          'ColumnK',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link columnJ} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COLUMN_J: fieldBuilder.buildEdmTypeField(
          'ColumnJ',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link columnI} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COLUMN_I: fieldBuilder.buildEdmTypeField(
          'ColumnI',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link columnH} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COLUMN_H: fieldBuilder.buildEdmTypeField(
          'ColumnH',
          'Edm.Decimal',
          false
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
         * Static representation of the {@link salesQty} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_QTY: fieldBuilder.buildEdmTypeField(
          'SalesQty',
          'Edm.Decimal',
          false
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
         * Static representation of the {@link section2} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SECTION_2: fieldBuilder.buildEdmTypeField(
          'Section2',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link custAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUST_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'CustAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link creationWork} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREATION_WORK: fieldBuilder.buildEnumField('CreationWork', NoYes, true),
        /**
         * Static representation of the {@link otherDelivery} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OTHER_DELIVERY: fieldBuilder.buildEnumField(
          'OtherDelivery',
          NoYes,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ProdComs)
      };
    }

    return this._schema;
  }
}
