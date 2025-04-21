/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { QualityOrderLineResults } from './QualityOrderLineResults';
import { QualityOrderLineResultsRequestBuilder } from './QualityOrderLineResultsRequestBuilder';
import { NoYes } from './NoYes';
import { InventTestOutcomeStatus } from './InventTestOutcomeStatus';
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
export class QualityOrderLineResultsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<QualityOrderLineResults<DeSerializersT>, DeSerializersT>
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
  ): QualityOrderLineResultsApi<DeSerializersT> {
    return new QualityOrderLineResultsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = QualityOrderLineResults;

  requestBuilder(): QualityOrderLineResultsRequestBuilder<DeSerializersT> {
    return new QualityOrderLineResultsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    QualityOrderLineResults<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      QualityOrderLineResults<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    QualityOrderLineResults<DeSerializersT>,
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
    typeof QualityOrderLineResults,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        QualityOrderLineResults,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      QualityOrderLineResults<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    QUALITY_ORDER_NUMBER: OrderableEdmTypeField<
      QualityOrderLineResults<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    QUALITY_ORDER_SEQUENCE_NUMBER: OrderableEdmTypeField<
      QualityOrderLineResults<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    QUALITY_TEST_ID: OrderableEdmTypeField<
      QualityOrderLineResults<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    RESULT_LINE_NUMBER: OrderableEdmTypeField<
      QualityOrderLineResults<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    RESULT_VALUE: OrderableEdmTypeField<
      QualityOrderLineResults<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    QUALITY_TEST_VARIABLE_OUTCOME_ID: OrderableEdmTypeField<
      QualityOrderLineResults<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RESULT_INVENTORY_QUANTITY: OrderableEdmTypeField<
      QualityOrderLineResults<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    IS_TEST_VALIDATION_INCLUDING_RESULT: EnumField<
      QualityOrderLineResults<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    TEST_RESULT: EnumField<
      QualityOrderLineResults<DeSerializers>,
      DeSerializersT,
      InventTestOutcomeStatus,
      true,
      true
    >;
    RESULT_CATCH_WEIGHT_QUANTITY: OrderableEdmTypeField<
      QualityOrderLineResults<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ALL_FIELDS: AllFields<QualityOrderLineResults<DeSerializers>>;
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
         * Static representation of the {@link qualityOrderNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        QUALITY_ORDER_NUMBER: fieldBuilder.buildEdmTypeField(
          'QualityOrderNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link qualityOrderSequenceNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        QUALITY_ORDER_SEQUENCE_NUMBER: fieldBuilder.buildEdmTypeField(
          'QualityOrderSequenceNumber',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link qualityTestId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        QUALITY_TEST_ID: fieldBuilder.buildEdmTypeField(
          'QualityTestId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link resultLineNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RESULT_LINE_NUMBER: fieldBuilder.buildEdmTypeField(
          'ResultLineNumber',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link resultValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RESULT_VALUE: fieldBuilder.buildEdmTypeField(
          'ResultValue',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link qualityTestVariableOutcomeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        QUALITY_TEST_VARIABLE_OUTCOME_ID: fieldBuilder.buildEdmTypeField(
          'QualityTestVariableOutcomeId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link resultInventoryQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RESULT_INVENTORY_QUANTITY: fieldBuilder.buildEdmTypeField(
          'ResultInventoryQuantity',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link isTestValidationIncludingResult} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_TEST_VALIDATION_INCLUDING_RESULT: fieldBuilder.buildEnumField(
          'IsTestValidationIncludingResult',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link testResult} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TEST_RESULT: fieldBuilder.buildEnumField(
          'TestResult',
          InventTestOutcomeStatus,
          true
        ),
        /**
         * Static representation of the {@link resultCatchWeightQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RESULT_CATCH_WEIGHT_QUANTITY: fieldBuilder.buildEdmTypeField(
          'ResultCatchWeightQuantity',
          'Edm.Decimal',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', QualityOrderLineResults)
      };
    }

    return this._schema;
  }
}
