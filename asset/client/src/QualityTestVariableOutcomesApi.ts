/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { QualityTestVariableOutcomes } from './QualityTestVariableOutcomes';
import { QualityTestVariableOutcomesRequestBuilder } from './QualityTestVariableOutcomesRequestBuilder';
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
export class QualityTestVariableOutcomesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<QualityTestVariableOutcomes<DeSerializersT>, DeSerializersT>
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
  ): QualityTestVariableOutcomesApi<DeSerializersT> {
    return new QualityTestVariableOutcomesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = QualityTestVariableOutcomes;

  requestBuilder(): QualityTestVariableOutcomesRequestBuilder<DeSerializersT> {
    return new QualityTestVariableOutcomesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    QualityTestVariableOutcomes<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      QualityTestVariableOutcomes<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    QualityTestVariableOutcomes<DeSerializersT>,
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
    typeof QualityTestVariableOutcomes,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        QualityTestVariableOutcomes,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      QualityTestVariableOutcomes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    QUALITY_TEST_VARIABLE_ID: OrderableEdmTypeField<
      QualityTestVariableOutcomes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    OUTCOME_ID: OrderableEdmTypeField<
      QualityTestVariableOutcomes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    OUTCOME_STATUS: EnumField<
      QualityTestVariableOutcomes<DeSerializers>,
      DeSerializersT,
      InventTestOutcomeStatus,
      true,
      true
    >;
    OUTCOME_DESCRIPTION: OrderableEdmTypeField<
      QualityTestVariableOutcomes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<QualityTestVariableOutcomes<DeSerializers>>;
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
         * Static representation of the {@link qualityTestVariableId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        QUALITY_TEST_VARIABLE_ID: fieldBuilder.buildEdmTypeField(
          'QualityTestVariableId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link outcomeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OUTCOME_ID: fieldBuilder.buildEdmTypeField(
          'OutcomeId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link outcomeStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OUTCOME_STATUS: fieldBuilder.buildEnumField(
          'OutcomeStatus',
          InventTestOutcomeStatus,
          true
        ),
        /**
         * Static representation of the {@link outcomeDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OUTCOME_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'OutcomeDescription',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', QualityTestVariableOutcomes)
      };
    }

    return this._schema;
  }
}
