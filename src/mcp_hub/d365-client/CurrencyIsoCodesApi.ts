/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { CurrencyIsoCodes } from './CurrencyIsoCodes';
import { CurrencyIsoCodesRequestBuilder } from './CurrencyIsoCodesRequestBuilder';
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
export class CurrencyIsoCodesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<CurrencyIsoCodes<DeSerializersT>, DeSerializersT>
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
  ): CurrencyIsoCodesApi<DeSerializersT> {
    return new CurrencyIsoCodesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = CurrencyIsoCodes;

  requestBuilder(): CurrencyIsoCodesRequestBuilder<DeSerializersT> {
    return new CurrencyIsoCodesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    CurrencyIsoCodes<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<CurrencyIsoCodes<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<CurrencyIsoCodes<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof CurrencyIsoCodes, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        CurrencyIsoCodes,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    ISO_CURRENCY_CODE: OrderableEdmTypeField<
      CurrencyIsoCodes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ISO_CURRENCY_CODE_NUM: OrderableEdmTypeField<
      CurrencyIsoCodes<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    ISO_CURRENCY_NAME: OrderableEdmTypeField<
      CurrencyIsoCodes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<CurrencyIsoCodes<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link isoCurrencyCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ISO_CURRENCY_CODE: fieldBuilder.buildEdmTypeField(
          'ISOCurrencyCode',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link isoCurrencyCodeNum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ISO_CURRENCY_CODE_NUM: fieldBuilder.buildEdmTypeField(
          'ISOCurrencyCodeNum',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link isoCurrencyName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ISO_CURRENCY_NAME: fieldBuilder.buildEdmTypeField(
          'ISOCurrencyName',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', CurrencyIsoCodes)
      };
    }

    return this._schema;
  }
}
