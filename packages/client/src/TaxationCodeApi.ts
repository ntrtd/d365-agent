/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { TaxationCode } from './TaxationCode';
import { TaxationCodeRequestBuilder } from './TaxationCodeRequestBuilder';
import { TaxTypeBr } from './TaxTypeBr';
import { TaxFiscalValueBr } from './TaxFiscalValueBr';
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
export class TaxationCodeApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<TaxationCode<DeSerializersT>, DeSerializersT>
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
  ): TaxationCodeApi<DeSerializersT> {
    return new TaxationCodeApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = TaxationCode;

  requestBuilder(): TaxationCodeRequestBuilder<DeSerializersT> {
    return new TaxationCodeRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    TaxationCode<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<TaxationCode<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<TaxationCode<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof TaxationCode, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(TaxationCode, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      TaxationCode<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TAX_TYPE: EnumField<
      TaxationCode<DeSerializers>,
      DeSerializersT,
      TaxTypeBr,
      true,
      true
    >;
    TAXATION_CODE: OrderableEdmTypeField<
      TaxationCode<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    FISCAL_VALUE: EnumField<
      TaxationCode<DeSerializers>,
      DeSerializersT,
      TaxFiscalValueBr,
      true,
      true
    >;
    SPED_CODE: OrderableEdmTypeField<
      TaxationCode<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FROM_DATE: OrderableEdmTypeField<
      TaxationCode<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    INPUT_CODE: OrderableEdmTypeField<
      TaxationCode<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      TaxationCode<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    OUTPUT_CODE: OrderableEdmTypeField<
      TaxationCode<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TO_DATE: OrderableEdmTypeField<
      TaxationCode<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    ALL_FIELDS: AllFields<TaxationCode<DeSerializers>>;
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
         * Static representation of the {@link taxType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_TYPE: fieldBuilder.buildEnumField('TaxType', TaxTypeBr, true),
        /**
         * Static representation of the {@link taxationCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAXATION_CODE: fieldBuilder.buildEdmTypeField(
          'TaxationCode',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link fiscalValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FISCAL_VALUE: fieldBuilder.buildEnumField(
          'FiscalValue',
          TaxFiscalValueBr,
          true
        ),
        /**
         * Static representation of the {@link spedCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SPED_CODE: fieldBuilder.buildEdmTypeField(
          'SpedCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link fromDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FROM_DATE: fieldBuilder.buildEdmTypeField(
          'FromDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link inputCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INPUT_CODE: fieldBuilder.buildEdmTypeField(
          'InputCode',
          'Edm.String',
          true
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
         * Static representation of the {@link outputCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OUTPUT_CODE: fieldBuilder.buildEdmTypeField(
          'OutputCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link toDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TO_DATE: fieldBuilder.buildEdmTypeField(
          'ToDate',
          'Edm.DateTimeOffset',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', TaxationCode)
      };
    }

    return this._schema;
  }
}
