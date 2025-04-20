/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { InventTableModuleBiEntities } from './InventTableModuleBiEntities';
import { InventTableModuleBiEntitiesRequestBuilder } from './InventTableModuleBiEntitiesRequestBuilder';
import { ModuleInventPurchSales } from './ModuleInventPurchSales';
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
export class InventTableModuleBiEntitiesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<InventTableModuleBiEntities<DeSerializersT>, DeSerializersT>
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
  ): InventTableModuleBiEntitiesApi<DeSerializersT> {
    return new InventTableModuleBiEntitiesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = InventTableModuleBiEntities;

  requestBuilder(): InventTableModuleBiEntitiesRequestBuilder<DeSerializersT> {
    return new InventTableModuleBiEntitiesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    InventTableModuleBiEntities<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      InventTableModuleBiEntities<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    InventTableModuleBiEntities<DeSerializersT>,
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
    typeof InventTableModuleBiEntities,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        InventTableModuleBiEntities,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      InventTableModuleBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ITEM_ID: OrderableEdmTypeField<
      InventTableModuleBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    MODULE_TYPE: EnumField<
      InventTableModuleBiEntities<DeSerializers>,
      DeSerializersT,
      ModuleInventPurchSales,
      true,
      true
    >;
    SYS_CREATED_BY: OrderableEdmTypeField<
      InventTableModuleBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SUPP_ITEM_GROUP_ID: OrderableEdmTypeField<
      InventTableModuleBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MAXIMUM_RETAIL_PRICE_IN: OrderableEdmTypeField<
      InventTableModuleBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    END_DISC: EnumField<
      InventTableModuleBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SYS_MODIFIED_BY: OrderableEdmTypeField<
      InventTableModuleBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRICE_DATE: OrderableEdmTypeField<
      InventTableModuleBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    SYS_REC_VERSION: OrderableEdmTypeField<
      InventTableModuleBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    SYS_DATA_AREA_ID: OrderableEdmTypeField<
      InventTableModuleBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MARKUP: OrderableEdmTypeField<
      InventTableModuleBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    UNDER_DELIVERY_PCT: OrderableEdmTypeField<
      InventTableModuleBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    LINE_DISC: OrderableEdmTypeField<
      InventTableModuleBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    OVER_DELIVERY_PCT: OrderableEdmTypeField<
      InventTableModuleBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    MULTI_LINE_DISC: OrderableEdmTypeField<
      InventTableModuleBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SOURCE_KEY: OrderableEdmTypeField<
      InventTableModuleBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    TAX_ITEM_GROUP_ID: OrderableEdmTypeField<
      InventTableModuleBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RETAIL_INVENTORY_AVAILABILITY_BUFFER: OrderableEdmTypeField<
      InventTableModuleBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PRICE: OrderableEdmTypeField<
      InventTableModuleBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SYS_CREATED_DATE_TIME: OrderableEdmTypeField<
      InventTableModuleBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    TAX_WITHHOLD_ITEM_GROUP_HEADING_TH: OrderableEdmTypeField<
      InventTableModuleBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    ALLOCATE_MARKUP: EnumField<
      InventTableModuleBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    INTER_COMPANY_BLOCKED: EnumField<
      InventTableModuleBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PRICE_UNIT: OrderableEdmTypeField<
      InventTableModuleBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    RETAIL_INVENTORY_AVAILABILITY_LEVEL_PROFILE: OrderableEdmTypeField<
      InventTableModuleBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRICE_SEC_CUR_RU: OrderableEdmTypeField<
      InventTableModuleBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TAX_GST_RELIEF_CATEGORY_MY: OrderableEdmTypeField<
      InventTableModuleBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    PDS_PRICING_PRECISION: OrderableEdmTypeField<
      InventTableModuleBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    MARKUP_GROUP_ID: OrderableEdmTypeField<
      InventTableModuleBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MARKUP_SEC_CUR_RU: OrderableEdmTypeField<
      InventTableModuleBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    UNIT_ID: OrderableEdmTypeField<
      InventTableModuleBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRICE_QTY: OrderableEdmTypeField<
      InventTableModuleBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SYS_MODIFIED_DATE_TIME: OrderableEdmTypeField<
      InventTableModuleBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    TAX_WITHHOLD_CALCULATE_TH: EnumField<
      InventTableModuleBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ALL_FIELDS: AllFields<InventTableModuleBiEntities<DeSerializers>>;
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
         * Static representation of the {@link itemId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_ID: fieldBuilder.buildEdmTypeField('ItemId', 'Edm.String', false),
        /**
         * Static representation of the {@link moduleType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MODULE_TYPE: fieldBuilder.buildEnumField(
          'ModuleType',
          ModuleInventPurchSales,
          true
        ),
        /**
         * Static representation of the {@link sysCreatedBy} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SYS_CREATED_BY: fieldBuilder.buildEdmTypeField(
          'SysCreatedBy',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link suppItemGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUPP_ITEM_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'SuppItemGroupId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link maximumRetailPriceIn} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAXIMUM_RETAIL_PRICE_IN: fieldBuilder.buildEdmTypeField(
          'MaximumRetailPrice_IN',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link endDisc} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        END_DISC: fieldBuilder.buildEnumField('EndDisc', NoYes, true),
        /**
         * Static representation of the {@link sysModifiedBy} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SYS_MODIFIED_BY: fieldBuilder.buildEdmTypeField(
          'SysModifiedBy',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link priceDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRICE_DATE: fieldBuilder.buildEdmTypeField(
          'PriceDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link sysRecVersion} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SYS_REC_VERSION: fieldBuilder.buildEdmTypeField(
          'SysRecVersion',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link sysDataAreaId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SYS_DATA_AREA_ID: fieldBuilder.buildEdmTypeField(
          'SysDataAreaId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link markup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MARKUP: fieldBuilder.buildEdmTypeField('Markup', 'Edm.Decimal', false),
        /**
         * Static representation of the {@link underDeliveryPct} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UNDER_DELIVERY_PCT: fieldBuilder.buildEdmTypeField(
          'UnderDeliveryPct',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link lineDisc} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_DISC: fieldBuilder.buildEdmTypeField(
          'LineDisc',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link overDeliveryPct} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OVER_DELIVERY_PCT: fieldBuilder.buildEdmTypeField(
          'OverDeliveryPct',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link multiLineDisc} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MULTI_LINE_DISC: fieldBuilder.buildEdmTypeField(
          'MultiLineDisc',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link sourceKey} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SOURCE_KEY: fieldBuilder.buildEdmTypeField(
          'SourceKey',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link taxItemGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_ITEM_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'TaxItemGroupId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link retailInventoryAvailabilityBuffer} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RETAIL_INVENTORY_AVAILABILITY_BUFFER: fieldBuilder.buildEdmTypeField(
          'RetailInventoryAvailabilityBuffer',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link price} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRICE: fieldBuilder.buildEdmTypeField('Price', 'Edm.Decimal', false),
        /**
         * Static representation of the {@link sysCreatedDateTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SYS_CREATED_DATE_TIME: fieldBuilder.buildEdmTypeField(
          'SysCreatedDateTime',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link taxWithholdItemGroupHeadingTh} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_WITHHOLD_ITEM_GROUP_HEADING_TH: fieldBuilder.buildEdmTypeField(
          'TaxWithholdItemGroupHeading_TH',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link allocateMarkup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ALLOCATE_MARKUP: fieldBuilder.buildEnumField(
          'AllocateMarkup',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link interCompanyBlocked} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INTER_COMPANY_BLOCKED: fieldBuilder.buildEnumField(
          'InterCompanyBlocked',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link priceUnit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRICE_UNIT: fieldBuilder.buildEdmTypeField(
          'PriceUnit',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link retailInventoryAvailabilityLevelProfile} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RETAIL_INVENTORY_AVAILABILITY_LEVEL_PROFILE:
          fieldBuilder.buildEdmTypeField(
            'RetailInventoryAvailabilityLevelProfile',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link priceSecCurRu} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRICE_SEC_CUR_RU: fieldBuilder.buildEdmTypeField(
          'PriceSecCur_RU',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link taxGstReliefCategoryMy} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_GST_RELIEF_CATEGORY_MY: fieldBuilder.buildEdmTypeField(
          'TaxGSTReliefCategory_MY',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link pdsPricingPrecision} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PDS_PRICING_PRECISION: fieldBuilder.buildEdmTypeField(
          'PDSPricingPrecision',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link markupGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MARKUP_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'MarkupGroupId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link markupSecCurRu} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MARKUP_SEC_CUR_RU: fieldBuilder.buildEdmTypeField(
          'MarkupSecCur_RU',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link unitId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UNIT_ID: fieldBuilder.buildEdmTypeField('UnitId', 'Edm.String', true),
        /**
         * Static representation of the {@link priceQty} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRICE_QTY: fieldBuilder.buildEdmTypeField(
          'PriceQty',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link sysModifiedDateTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SYS_MODIFIED_DATE_TIME: fieldBuilder.buildEdmTypeField(
          'SysModifiedDateTime',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link taxWithholdCalculateTh} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_WITHHOLD_CALCULATE_TH: fieldBuilder.buildEnumField(
          'TaxWithholdCalculate_TH',
          NoYes,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', InventTableModuleBiEntities)
      };
    }

    return this._schema;
  }
}
