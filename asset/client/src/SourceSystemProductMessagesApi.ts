/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { SourceSystemProductMessages } from './SourceSystemProductMessages';
import { SourceSystemProductMessagesRequestBuilder } from './SourceSystemProductMessagesRequestBuilder';
import { EcoResProductSubtype } from './EcoResProductSubtype';
import { NoYes } from './NoYes';
import { WhsSourceSystemProductMessageProcessingStatus } from './WhsSourceSystemProductMessageProcessingStatus';
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
  EdmTypeField,
  EnumField
} from '@sap-cloud-sdk/odata-v4';
export class SourceSystemProductMessagesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<SourceSystemProductMessages<DeSerializersT>, DeSerializersT>
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
  ): SourceSystemProductMessagesApi<DeSerializersT> {
    return new SourceSystemProductMessagesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = SourceSystemProductMessages;

  requestBuilder(): SourceSystemProductMessagesRequestBuilder<DeSerializersT> {
    return new SourceSystemProductMessagesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    SourceSystemProductMessages<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      SourceSystemProductMessages<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    SourceSystemProductMessages<DeSerializersT>,
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
    typeof SourceSystemProductMessages,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        SourceSystemProductMessages,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      SourceSystemProductMessages<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    MESSAGE_ID: OrderableEdmTypeField<
      SourceSystemProductMessages<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SOURCE_SYSTEM_ID: OrderableEdmTypeField<
      SourceSystemProductMessages<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    FIELDS_WITH_VALUE: EdmTypeField<
      SourceSystemProductMessages<DeSerializers>,
      DeSerializersT,
      'Edm.Binary',
      true,
      true
    >;
    PRODUCT_DIMENSION_GROUP_NAME: OrderableEdmTypeField<
      SourceSystemProductMessages<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ORIGIN_STATE_ID: OrderableEdmTypeField<
      SourceSystemProductMessages<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    UNIT_COST_DATE: OrderableEdmTypeField<
      SourceSystemProductMessages<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    PRODUCT_SUBTYPE: EnumField<
      SourceSystemProductMessages<DeSerializers>,
      DeSerializersT,
      EcoResProductSubtype,
      true,
      true
    >;
    INVENTORY_COUNTING_REASON_CODE_POLICY_NAME: OrderableEdmTypeField<
      SourceSystemProductMessages<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    UPDATE_PRODUCT_VARIANT_LIFECYCLE_STATE: EnumField<
      SourceSystemProductMessages<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PRODUCT_VOLUME: OrderableEdmTypeField<
      SourceSystemProductMessages<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TARE_PRODUCT_WEIGHT: OrderableEdmTypeField<
      SourceSystemProductMessages<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SEARCH_NAME: OrderableEdmTypeField<
      SourceSystemProductMessages<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PHYSICAL_DIMENSION_GROUP_ID: OrderableEdmTypeField<
      SourceSystemProductMessages<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SOURCE_SYSTEM_PRODUCT_NUMBER: OrderableEdmTypeField<
      SourceSystemProductMessages<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCT_SEARCH_NAME: OrderableEdmTypeField<
      SourceSystemProductMessages<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVENTORY_RESERVATION_HIERARCHY_NAME: OrderableEdmTypeField<
      SourceSystemProductMessages<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SHELF_ADVICE_PERIOD_DAYS: OrderableEdmTypeField<
      SourceSystemProductMessages<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    STORAGE_DIMENSION_GROUP_NAME: OrderableEdmTypeField<
      SourceSystemProductMessages<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FIRST_PRODUCT_FILTER_GROUP_ID: OrderableEdmTypeField<
      SourceSystemProductMessages<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FIRST_PRODUCT_FILTER_CODE: OrderableEdmTypeField<
      SourceSystemProductMessages<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SIXTH_PRODUCT_FILTER_CODE: OrderableEdmTypeField<
      SourceSystemProductMessages<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SECOND_PRODUCT_FILTER_GROUP_ID: OrderableEdmTypeField<
      SourceSystemProductMessages<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    UNIT_COST_QUANTITY: OrderableEdmTypeField<
      SourceSystemProductMessages<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    BATCH_NUMBER_GROUP_CODE: OrderableEdmTypeField<
      SourceSystemProductMessages<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ITEM_MODEL_GROUP_ID: OrderableEdmTypeField<
      SourceSystemProductMessages<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCT_GROUP_ID: OrderableEdmTypeField<
      SourceSystemProductMessages<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    GROSS_PRODUCT_HEIGHT: OrderableEdmTypeField<
      SourceSystemProductMessages<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TENTH_PRODUCT_FILTER_CODE: OrderableEdmTypeField<
      SourceSystemProductMessages<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SHELF_LIFE_PERIOD_DAYS: OrderableEdmTypeField<
      SourceSystemProductMessages<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    UNIT_CONVERSION_SEQUENCE_GROUP_ID: OrderableEdmTypeField<
      SourceSystemProductMessages<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    GROSS_PRODUCT_DEPTH: OrderableEdmTypeField<
      SourceSystemProductMessages<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PRODUCT_LIFECYCLE_STATE_ID: OrderableEdmTypeField<
      SourceSystemProductMessages<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROCESSING_STATUS: EnumField<
      SourceSystemProductMessages<DeSerializers>,
      DeSerializersT,
      WhsSourceSystemProductMessageProcessingStatus,
      true,
      true
    >;
    TRACKING_DIMENSION_GROUP_NAME: OrderableEdmTypeField<
      SourceSystemProductMessages<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_PRODUCT_VARIANT_UNIT_CONVERSION_ENABLED: EnumField<
      SourceSystemProductMessages<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    TEMPLATE_NAME: OrderableEdmTypeField<
      SourceSystemProductMessages<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    THIRD_PRODUCT_FILTER_CODE: OrderableEdmTypeField<
      SourceSystemProductMessages<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_HAZARDOUS_MATERIAL: EnumField<
      SourceSystemProductMessages<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ORIGIN_COUNTRY_REGION_ID: OrderableEdmTypeField<
      SourceSystemProductMessages<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SOURCE_SYSTEM_ITEM_NUMBER: OrderableEdmTypeField<
      SourceSystemProductMessages<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BEST_BEFORE_PERIOD_DAYS: OrderableEdmTypeField<
      SourceSystemProductMessages<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    FOURTH_PRODUCT_FILTER_CODE: OrderableEdmTypeField<
      SourceSystemProductMessages<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SECOND_PRODUCT_FILTER_CODE: OrderableEdmTypeField<
      SourceSystemProductMessages<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SEVENTH_PRODUCT_FILTER_CODE: OrderableEdmTypeField<
      SourceSystemProductMessages<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PACK_SIZE_CATEGORY_ID: OrderableEdmTypeField<
      SourceSystemProductMessages<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PACKAGE_CLASS_ID: OrderableEdmTypeField<
      SourceSystemProductMessages<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    UNIT_COST: OrderableEdmTypeField<
      SourceSystemProductMessages<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SERIAL_NUMBER_GROUP_CODE: OrderableEdmTypeField<
      SourceSystemProductMessages<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PACKING_MATERIAL_GROUP_ID: OrderableEdmTypeField<
      SourceSystemProductMessages<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVENTORY_UNIT_SYMBOL: OrderableEdmTypeField<
      SourceSystemProductMessages<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FIFTH_PRODUCT_FILTER_CODE: OrderableEdmTypeField<
      SourceSystemProductMessages<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NINTH_PRODUCT_FILTER_CODE: OrderableEdmTypeField<
      SourceSystemProductMessages<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NET_PRODUCT_WEIGHT: OrderableEdmTypeField<
      SourceSystemProductMessages<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    EIGHTH_PRODUCT_FILTER_CODE: OrderableEdmTypeField<
      SourceSystemProductMessages<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WAREHOUSE_MOBILE_DEVICE_DESCRIPTION_LINE_1: OrderableEdmTypeField<
      SourceSystemProductMessages<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WAREHOUSE_MOBILE_DEVICE_DESCRIPTION_LINE_2: OrderableEdmTypeField<
      SourceSystemProductMessages<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    GROSS_PRODUCT_WIDTH: OrderableEdmTypeField<
      SourceSystemProductMessages<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ALL_FIELDS: AllFields<SourceSystemProductMessages<DeSerializers>>;
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
         * Static representation of the {@link messageId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MESSAGE_ID: fieldBuilder.buildEdmTypeField(
          'MessageId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link sourceSystemId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SOURCE_SYSTEM_ID: fieldBuilder.buildEdmTypeField(
          'SourceSystemId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link fieldsWithValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FIELDS_WITH_VALUE: fieldBuilder.buildEdmTypeField(
          'FieldsWithValue',
          'Edm.Binary',
          true
        ),
        /**
         * Static representation of the {@link productDimensionGroupName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_DIMENSION_GROUP_NAME: fieldBuilder.buildEdmTypeField(
          'ProductDimensionGroupName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link originStateId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORIGIN_STATE_ID: fieldBuilder.buildEdmTypeField(
          'OriginStateId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link unitCostDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UNIT_COST_DATE: fieldBuilder.buildEdmTypeField(
          'UnitCostDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link productSubtype} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_SUBTYPE: fieldBuilder.buildEnumField(
          'ProductSubtype',
          EcoResProductSubtype,
          true
        ),
        /**
         * Static representation of the {@link inventoryCountingReasonCodePolicyName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENTORY_COUNTING_REASON_CODE_POLICY_NAME:
          fieldBuilder.buildEdmTypeField(
            'InventoryCountingReasonCodePolicyName',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link updateProductVariantLifecycleState} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UPDATE_PRODUCT_VARIANT_LIFECYCLE_STATE: fieldBuilder.buildEnumField(
          'UpdateProductVariantLifecycleState',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link productVolume} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_VOLUME: fieldBuilder.buildEdmTypeField(
          'ProductVolume',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link tareProductWeight} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TARE_PRODUCT_WEIGHT: fieldBuilder.buildEdmTypeField(
          'TareProductWeight',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link searchName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SEARCH_NAME: fieldBuilder.buildEdmTypeField(
          'SearchName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link physicalDimensionGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PHYSICAL_DIMENSION_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'PhysicalDimensionGroupId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link sourceSystemProductNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SOURCE_SYSTEM_PRODUCT_NUMBER: fieldBuilder.buildEdmTypeField(
          'SourceSystemProductNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link productSearchName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_SEARCH_NAME: fieldBuilder.buildEdmTypeField(
          'ProductSearchName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link inventoryReservationHierarchyName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENTORY_RESERVATION_HIERARCHY_NAME: fieldBuilder.buildEdmTypeField(
          'InventoryReservationHierarchyName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link shelfAdvicePeriodDays} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHELF_ADVICE_PERIOD_DAYS: fieldBuilder.buildEdmTypeField(
          'ShelfAdvicePeriodDays',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link storageDimensionGroupName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STORAGE_DIMENSION_GROUP_NAME: fieldBuilder.buildEdmTypeField(
          'StorageDimensionGroupName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link firstProductFilterGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FIRST_PRODUCT_FILTER_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'FirstProductFilterGroupId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link firstProductFilterCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FIRST_PRODUCT_FILTER_CODE: fieldBuilder.buildEdmTypeField(
          'FirstProductFilterCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link sixthProductFilterCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SIXTH_PRODUCT_FILTER_CODE: fieldBuilder.buildEdmTypeField(
          'SixthProductFilterCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link secondProductFilterGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SECOND_PRODUCT_FILTER_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'SecondProductFilterGroupId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link unitCostQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UNIT_COST_QUANTITY: fieldBuilder.buildEdmTypeField(
          'UnitCostQuantity',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link batchNumberGroupCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BATCH_NUMBER_GROUP_CODE: fieldBuilder.buildEdmTypeField(
          'BatchNumberGroupCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link itemModelGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_MODEL_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'ItemModelGroupId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link productGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'ProductGroupId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link grossProductHeight} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GROSS_PRODUCT_HEIGHT: fieldBuilder.buildEdmTypeField(
          'GrossProductHeight',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link tenthProductFilterCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TENTH_PRODUCT_FILTER_CODE: fieldBuilder.buildEdmTypeField(
          'TenthProductFilterCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link shelfLifePeriodDays} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHELF_LIFE_PERIOD_DAYS: fieldBuilder.buildEdmTypeField(
          'ShelfLifePeriodDays',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link unitConversionSequenceGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UNIT_CONVERSION_SEQUENCE_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'UnitConversionSequenceGroupId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link grossProductDepth} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GROSS_PRODUCT_DEPTH: fieldBuilder.buildEdmTypeField(
          'GrossProductDepth',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link productLifecycleStateId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_LIFECYCLE_STATE_ID: fieldBuilder.buildEdmTypeField(
          'ProductLifecycleStateId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link processingStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROCESSING_STATUS: fieldBuilder.buildEnumField(
          'ProcessingStatus',
          WhsSourceSystemProductMessageProcessingStatus,
          true
        ),
        /**
         * Static representation of the {@link trackingDimensionGroupName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRACKING_DIMENSION_GROUP_NAME: fieldBuilder.buildEdmTypeField(
          'TrackingDimensionGroupName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isProductVariantUnitConversionEnabled} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_PRODUCT_VARIANT_UNIT_CONVERSION_ENABLED: fieldBuilder.buildEnumField(
          'IsProductVariantUnitConversionEnabled',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link templateName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TEMPLATE_NAME: fieldBuilder.buildEdmTypeField(
          'TemplateName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link thirdProductFilterCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        THIRD_PRODUCT_FILTER_CODE: fieldBuilder.buildEdmTypeField(
          'ThirdProductFilterCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isHazardousMaterial} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_HAZARDOUS_MATERIAL: fieldBuilder.buildEnumField(
          'IsHazardousMaterial',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link originCountryRegionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORIGIN_COUNTRY_REGION_ID: fieldBuilder.buildEdmTypeField(
          'OriginCountryRegionId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link sourceSystemItemNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SOURCE_SYSTEM_ITEM_NUMBER: fieldBuilder.buildEdmTypeField(
          'SourceSystemItemNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link bestBeforePeriodDays} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BEST_BEFORE_PERIOD_DAYS: fieldBuilder.buildEdmTypeField(
          'BestBeforePeriodDays',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link fourthProductFilterCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FOURTH_PRODUCT_FILTER_CODE: fieldBuilder.buildEdmTypeField(
          'FourthProductFilterCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link secondProductFilterCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SECOND_PRODUCT_FILTER_CODE: fieldBuilder.buildEdmTypeField(
          'SecondProductFilterCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link seventhProductFilterCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SEVENTH_PRODUCT_FILTER_CODE: fieldBuilder.buildEdmTypeField(
          'SeventhProductFilterCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link packSizeCategoryId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PACK_SIZE_CATEGORY_ID: fieldBuilder.buildEdmTypeField(
          'PackSizeCategoryId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link packageClassId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PACKAGE_CLASS_ID: fieldBuilder.buildEdmTypeField(
          'PackageClassId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link unitCost} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UNIT_COST: fieldBuilder.buildEdmTypeField(
          'UnitCost',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link serialNumberGroupCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SERIAL_NUMBER_GROUP_CODE: fieldBuilder.buildEdmTypeField(
          'SerialNumberGroupCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link packingMaterialGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PACKING_MATERIAL_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'PackingMaterialGroupId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link inventoryUnitSymbol} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENTORY_UNIT_SYMBOL: fieldBuilder.buildEdmTypeField(
          'InventoryUnitSymbol',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link fifthProductFilterCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FIFTH_PRODUCT_FILTER_CODE: fieldBuilder.buildEdmTypeField(
          'FifthProductFilterCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link ninthProductFilterCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NINTH_PRODUCT_FILTER_CODE: fieldBuilder.buildEdmTypeField(
          'NinthProductFilterCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link netProductWeight} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NET_PRODUCT_WEIGHT: fieldBuilder.buildEdmTypeField(
          'NetProductWeight',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link eighthProductFilterCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EIGHTH_PRODUCT_FILTER_CODE: fieldBuilder.buildEdmTypeField(
          'EighthProductFilterCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link warehouseMobileDeviceDescriptionLine1} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WAREHOUSE_MOBILE_DEVICE_DESCRIPTION_LINE_1:
          fieldBuilder.buildEdmTypeField(
            'WarehouseMobileDeviceDescriptionLine1',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link warehouseMobileDeviceDescriptionLine2} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WAREHOUSE_MOBILE_DEVICE_DESCRIPTION_LINE_2:
          fieldBuilder.buildEdmTypeField(
            'WarehouseMobileDeviceDescriptionLine2',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link grossProductWidth} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GROSS_PRODUCT_WIDTH: fieldBuilder.buildEdmTypeField(
          'GrossProductWidth',
          'Edm.Decimal',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', SourceSystemProductMessages)
      };
    }

    return this._schema;
  }
}
