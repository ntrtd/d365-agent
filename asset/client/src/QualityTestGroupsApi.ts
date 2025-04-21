/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { QualityTestGroups } from './QualityTestGroups';
import { QualityTestGroupsRequestBuilder } from './QualityTestGroupsRequestBuilder';
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
export class QualityTestGroupsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<QualityTestGroups<DeSerializersT>, DeSerializersT>
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
  ): QualityTestGroupsApi<DeSerializersT> {
    return new QualityTestGroupsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = QualityTestGroups;

  requestBuilder(): QualityTestGroupsRequestBuilder<DeSerializersT> {
    return new QualityTestGroupsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    QualityTestGroups<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<QualityTestGroups<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<QualityTestGroups<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<
    typeof QualityTestGroups,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        QualityTestGroups,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      QualityTestGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    QUALITY_TEST_GROUP_ID: OrderableEdmTypeField<
      QualityTestGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      QualityTestGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_BATCH_ATTRIBUTE_VALUE_DEFAULTED_WITH_TEST_MEASUREMENT: EnumField<
      QualityTestGroups<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ACCEPTABLE_QUALITY_LEVEL_PERCENTAGE: OrderableEdmTypeField<
      QualityTestGroups<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PASSED_QUALITY_ORDER_INVENTORY_STATUS_ID: OrderableEdmTypeField<
      QualityTestGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FAILED_QUALITY_ORDER_INVENTORY_STATUS_ID: OrderableEdmTypeField<
      QualityTestGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FAILED_QUALITY_ORDER_BATCH_DISPOSITION_CODE: OrderableEdmTypeField<
      QualityTestGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_INVENTORY_STATUS_DEFAULTED_WITH_TEST_MEASUREMENT: EnumField<
      QualityTestGroups<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ITEM_SAMPLING_ID: OrderableEdmTypeField<
      QualityTestGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_DESTRUCTIVE_TEST: EnumField<
      QualityTestGroups<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    IS_BATCH_DISPOSITION_STATUS_DEFAULTED_WITH_TEST_MEASUREMENT: EnumField<
      QualityTestGroups<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PASSED_QUALITY_ORDER_BATCH_DISPOSITION_CODE: OrderableEdmTypeField<
      QualityTestGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<QualityTestGroups<DeSerializers>>;
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
         * Static representation of the {@link qualityTestGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        QUALITY_TEST_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'QualityTestGroupId',
          'Edm.String',
          false
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
         * Static representation of the {@link isBatchAttributeValueDefaultedWithTestMeasurement} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_BATCH_ATTRIBUTE_VALUE_DEFAULTED_WITH_TEST_MEASUREMENT:
          fieldBuilder.buildEnumField(
            'IsBatchAttributeValueDefaultedWithTestMeasurement',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link acceptableQualityLevelPercentage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCEPTABLE_QUALITY_LEVEL_PERCENTAGE: fieldBuilder.buildEdmTypeField(
          'AcceptableQualityLevelPercentage',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link passedQualityOrderInventoryStatusId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PASSED_QUALITY_ORDER_INVENTORY_STATUS_ID:
          fieldBuilder.buildEdmTypeField(
            'PassedQualityOrderInventoryStatusId',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link failedQualityOrderInventoryStatusId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FAILED_QUALITY_ORDER_INVENTORY_STATUS_ID:
          fieldBuilder.buildEdmTypeField(
            'FailedQualityOrderInventoryStatusId',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link failedQualityOrderBatchDispositionCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FAILED_QUALITY_ORDER_BATCH_DISPOSITION_CODE:
          fieldBuilder.buildEdmTypeField(
            'FailedQualityOrderBatchDispositionCode',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link isInventoryStatusDefaultedWithTestMeasurement} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_INVENTORY_STATUS_DEFAULTED_WITH_TEST_MEASUREMENT:
          fieldBuilder.buildEnumField(
            'IsInventoryStatusDefaultedWithTestMeasurement',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link itemSamplingId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_SAMPLING_ID: fieldBuilder.buildEdmTypeField(
          'ItemSamplingId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isDestructiveTest} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_DESTRUCTIVE_TEST: fieldBuilder.buildEnumField(
          'IsDestructiveTest',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link isBatchDispositionStatusDefaultedWithTestMeasurement} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_BATCH_DISPOSITION_STATUS_DEFAULTED_WITH_TEST_MEASUREMENT:
          fieldBuilder.buildEnumField(
            'IsBatchDispositionStatusDefaultedWithTestMeasurement',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link passedQualityOrderBatchDispositionCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PASSED_QUALITY_ORDER_BATCH_DISPOSITION_CODE:
          fieldBuilder.buildEdmTypeField(
            'PassedQualityOrderBatchDispositionCode',
            'Edm.String',
            true
          ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', QualityTestGroups)
      };
    }

    return this._schema;
  }
}
