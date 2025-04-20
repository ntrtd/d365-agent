/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RTax25StdRateTableTables } from './RTax25StdRateTableTables';
import { RTax25StdRateTableTablesRequestBuilder } from './RTax25StdRateTableTablesRequestBuilder';
import { RTax25StdRateCritMode } from './RTax25StdRateCritMode';
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
export class RTax25StdRateTableTablesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<RTax25StdRateTableTables<DeSerializersT>, DeSerializersT>
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
  ): RTax25StdRateTableTablesApi<DeSerializersT> {
    return new RTax25StdRateTableTablesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = RTax25StdRateTableTables;

  requestBuilder(): RTax25StdRateTableTablesRequestBuilder<DeSerializersT> {
    return new RTax25StdRateTableTablesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    RTax25StdRateTableTables<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      RTax25StdRateTableTables<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    RTax25StdRateTableTables<DeSerializersT>,
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
    typeof RTax25StdRateTableTables,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        RTax25StdRateTableTables,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      RTax25StdRateTableTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    RATE_CODE: OrderableEdmTypeField<
      RTax25StdRateTableTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      RTax25StdRateTableTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CALCULATION_METHOD: EnumField<
      RTax25StdRateTableTables<DeSerializers>,
      DeSerializersT,
      RTax25StdRateCritMode,
      true,
      true
    >;
    ALL_FIELDS: AllFields<RTax25StdRateTableTables<DeSerializers>>;
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
         * Static representation of the {@link rateCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RATE_CODE: fieldBuilder.buildEdmTypeField(
          'RateCode',
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
         * Static representation of the {@link calculationMethod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CALCULATION_METHOD: fieldBuilder.buildEnumField(
          'CalculationMethod',
          RTax25StdRateCritMode,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', RTax25StdRateTableTables)
      };
    }

    return this._schema;
  }
}
