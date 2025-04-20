/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { AgingPeriodDefinitions } from './AgingPeriodDefinitions';
import { AgingPeriodDefinitionsRequestBuilder } from './AgingPeriodDefinitionsRequestBuilder';
import { ForwardBackwardPrinting } from './ForwardBackwardPrinting';
import { PerDayWeekMthQtYr } from './PerDayWeekMthQtYr';
import { CustAgingIndicator } from './CustAgingIndicator';
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
export class AgingPeriodDefinitionsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<AgingPeriodDefinitions<DeSerializersT>, DeSerializersT>
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
  ): AgingPeriodDefinitionsApi<DeSerializersT> {
    return new AgingPeriodDefinitionsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = AgingPeriodDefinitions;

  requestBuilder(): AgingPeriodDefinitionsRequestBuilder<DeSerializersT> {
    return new AgingPeriodDefinitionsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    AgingPeriodDefinitions<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      AgingPeriodDefinitions<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    AgingPeriodDefinitions<DeSerializersT>,
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
    typeof AgingPeriodDefinitions,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        AgingPeriodDefinitions,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      AgingPeriodDefinitions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    AGING_PERIOD_DEFINITION: OrderableEdmTypeField<
      AgingPeriodDefinitions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LINE_NUM: OrderableEdmTypeField<
      AgingPeriodDefinitions<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      AgingPeriodDefinitions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRINT_DIRECTION: EnumField<
      AgingPeriodDefinitions<DeSerializers>,
      DeSerializersT,
      ForwardBackwardPrinting,
      true,
      true
    >;
    PERIOD: OrderableEdmTypeField<
      AgingPeriodDefinitions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INTERVAL: EnumField<
      AgingPeriodDefinitions<DeSerializers>,
      DeSerializersT,
      PerDayWeekMthQtYr,
      true,
      true
    >;
    AGING_INDICATOR: EnumField<
      AgingPeriodDefinitions<DeSerializers>,
      DeSerializersT,
      CustAgingIndicator,
      true,
      true
    >;
    UNIT: OrderableEdmTypeField<
      AgingPeriodDefinitions<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    ALL_FIELDS: AllFields<AgingPeriodDefinitions<DeSerializers>>;
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
         * Static representation of the {@link agingPeriodDefinition} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AGING_PERIOD_DEFINITION: fieldBuilder.buildEdmTypeField(
          'AgingPeriodDefinition',
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
         * Static representation of the {@link description} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'Description',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link printDirection} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRINT_DIRECTION: fieldBuilder.buildEnumField(
          'PrintDirection',
          ForwardBackwardPrinting,
          true
        ),
        /**
         * Static representation of the {@link period} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERIOD: fieldBuilder.buildEdmTypeField('Period', 'Edm.String', true),
        /**
         * Static representation of the {@link interval} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INTERVAL: fieldBuilder.buildEnumField(
          'Interval',
          PerDayWeekMthQtYr,
          true
        ),
        /**
         * Static representation of the {@link agingIndicator} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AGING_INDICATOR: fieldBuilder.buildEnumField(
          'AgingIndicator',
          CustAgingIndicator,
          true
        ),
        /**
         * Static representation of the {@link unit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UNIT: fieldBuilder.buildEdmTypeField('Unit', 'Edm.Int32', false),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', AgingPeriodDefinitions)
      };
    }

    return this._schema;
  }
}
