/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BlwiCurrencies } from './BlwiCurrencies';
import { BlwiCurrenciesRequestBuilder } from './BlwiCurrenciesRequestBuilder';
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
export class BlwiCurrenciesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<BlwiCurrencies<DeSerializersT>, DeSerializersT>
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
  ): BlwiCurrenciesApi<DeSerializersT> {
    return new BlwiCurrenciesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = BlwiCurrencies;

  requestBuilder(): BlwiCurrenciesRequestBuilder<DeSerializersT> {
    return new BlwiCurrenciesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    BlwiCurrencies<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<BlwiCurrencies<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<BlwiCurrencies<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof BlwiCurrencies, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(BlwiCurrencies, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      BlwiCurrencies<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CURRENCY: OrderableEdmTypeField<
      BlwiCurrencies<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    COLUMN_NUMBER: OrderableEdmTypeField<
      BlwiCurrencies<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    REPORT_IN_THIS_CURRENCY: EnumField<
      BlwiCurrencies<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    COMPANY: OrderableEdmTypeField<
      BlwiCurrencies<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<BlwiCurrencies<DeSerializers>>;
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
         * Static representation of the {@link currency} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CURRENCY: fieldBuilder.buildEdmTypeField(
          'Currency',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link columnNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COLUMN_NUMBER: fieldBuilder.buildEdmTypeField(
          'ColumnNumber',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link reportInThisCurrency} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REPORT_IN_THIS_CURRENCY: fieldBuilder.buildEnumField(
          'ReportInThisCurrency',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link company} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMPANY: fieldBuilder.buildEdmTypeField('Company', 'Edm.String', true),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', BlwiCurrencies)
      };
    }

    return this._schema;
  }
}
