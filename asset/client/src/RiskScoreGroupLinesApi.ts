/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RiskScoreGroupLines } from './RiskScoreGroupLines';
import { RiskScoreGroupLinesRequestBuilder } from './RiskScoreGroupLinesRequestBuilder';
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
  OrderableEdmTypeField
} from '@sap-cloud-sdk/odata-v4';
export class RiskScoreGroupLinesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<RiskScoreGroupLines<DeSerializersT>, DeSerializersT>
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
  ): RiskScoreGroupLinesApi<DeSerializersT> {
    return new RiskScoreGroupLinesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = RiskScoreGroupLines;

  requestBuilder(): RiskScoreGroupLinesRequestBuilder<DeSerializersT> {
    return new RiskScoreGroupLinesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    RiskScoreGroupLines<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<RiskScoreGroupLines<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    RiskScoreGroupLines<DeSerializersT>,
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
    typeof RiskScoreGroupLines,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        RiskScoreGroupLines,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      RiskScoreGroupLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    GROUP_ID: OrderableEdmTypeField<
      RiskScoreGroupLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    RANGE_FROM: OrderableEdmTypeField<
      RiskScoreGroupLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    RANGE_TO: OrderableEdmTypeField<
      RiskScoreGroupLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    VALUE: OrderableEdmTypeField<
      RiskScoreGroupLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SCORE: OrderableEdmTypeField<
      RiskScoreGroupLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ALL_FIELDS: AllFields<RiskScoreGroupLines<DeSerializers>>;
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
         * Static representation of the {@link groupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GROUP_ID: fieldBuilder.buildEdmTypeField(
          'GroupId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link rangeFrom} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RANGE_FROM: fieldBuilder.buildEdmTypeField(
          'RangeFrom',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link rangeTo} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RANGE_TO: fieldBuilder.buildEdmTypeField(
          'RangeTo',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link value} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALUE: fieldBuilder.buildEdmTypeField('Value', 'Edm.String', false),
        /**
         * Static representation of the {@link score} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SCORE: fieldBuilder.buildEdmTypeField('Score', 'Edm.Decimal', false),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', RiskScoreGroupLines)
      };
    }

    return this._schema;
  }
}
