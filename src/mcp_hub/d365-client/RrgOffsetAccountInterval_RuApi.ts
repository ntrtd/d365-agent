/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RrgOffsetAccountInterval_Ru } from './RrgOffsetAccountInterval_Ru';
import { RrgOffsetAccountInterval_RuRequestBuilder } from './RrgOffsetAccountInterval_RuRequestBuilder';
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
export class RrgOffsetAccountInterval_RuApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<RrgOffsetAccountInterval_Ru<DeSerializersT>, DeSerializersT>
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
  ): RrgOffsetAccountInterval_RuApi<DeSerializersT> {
    return new RrgOffsetAccountInterval_RuApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = RrgOffsetAccountInterval_Ru;

  requestBuilder(): RrgOffsetAccountInterval_RuRequestBuilder<DeSerializersT> {
    return new RrgOffsetAccountInterval_RuRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    RrgOffsetAccountInterval_Ru<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      RrgOffsetAccountInterval_Ru<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    RrgOffsetAccountInterval_Ru<DeSerializersT>,
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
    typeof RrgOffsetAccountInterval_Ru,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        RrgOffsetAccountInterval_Ru,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      RrgOffsetAccountInterval_Ru<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    FROM_LEDGER_DIMENSION_DISPLAY_VALUE: OrderableEdmTypeField<
      RrgOffsetAccountInterval_Ru<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TO_LEDGER_DIMENSION_DISPLAY_VALUE: OrderableEdmTypeField<
      RrgOffsetAccountInterval_Ru<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    OPERATION_LINE_ID: OrderableEdmTypeField<
      RrgOffsetAccountInterval_Ru<DeSerializers>,
      DeSerializersT,
      'Edm.Guid',
      false,
      true
    >;
    ALL_FIELDS: AllFields<RrgOffsetAccountInterval_Ru<DeSerializers>>;
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
         * Static representation of the {@link fromLedgerDimensionDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FROM_LEDGER_DIMENSION_DISPLAY_VALUE: fieldBuilder.buildEdmTypeField(
          'FromLedgerDimensionDisplayValue',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link toLedgerDimensionDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TO_LEDGER_DIMENSION_DISPLAY_VALUE: fieldBuilder.buildEdmTypeField(
          'ToLedgerDimensionDisplayValue',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link operationLineId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OPERATION_LINE_ID: fieldBuilder.buildEdmTypeField(
          'OperationLineId',
          'Edm.Guid',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', RrgOffsetAccountInterval_Ru)
      };
    }

    return this._schema;
  }
}
