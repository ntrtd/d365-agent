/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { CfopCreditBaseSources } from './CfopCreditBaseSources';
import { CfopCreditBaseSourcesRequestBuilder } from './CfopCreditBaseSourcesRequestBuilder';
import { FbNonFiscalOpCreditSourceCodeBr } from './FbNonFiscalOpCreditSourceCodeBr';
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
  EnumField,
  OrderableEdmTypeField
} from '@sap-cloud-sdk/odata-v4';
export class CfopCreditBaseSourcesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<CfopCreditBaseSources<DeSerializersT>, DeSerializersT>
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
  ): CfopCreditBaseSourcesApi<DeSerializersT> {
    return new CfopCreditBaseSourcesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = CfopCreditBaseSources;

  requestBuilder(): CfopCreditBaseSourcesRequestBuilder<DeSerializersT> {
    return new CfopCreditBaseSourcesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    CfopCreditBaseSources<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<CfopCreditBaseSources<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    CfopCreditBaseSources<DeSerializersT>,
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
    typeof CfopCreditBaseSources,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        CfopCreditBaseSources,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    CREDIT_BASE_SOURCE: EnumField<
      CfopCreditBaseSources<DeSerializers>,
      DeSerializersT,
      FbNonFiscalOpCreditSourceCodeBr,
      true,
      true
    >;
    CFOP: OrderableEdmTypeField<
      CfopCreditBaseSources<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    VALID_TO_DATE: OrderableEdmTypeField<
      CfopCreditBaseSources<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    VALID_FROM_DATE: OrderableEdmTypeField<
      CfopCreditBaseSources<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    CFOP_DESCRIPTION: OrderableEdmTypeField<
      CfopCreditBaseSources<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<CfopCreditBaseSources<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link creditBaseSource} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREDIT_BASE_SOURCE: fieldBuilder.buildEnumField(
          'CreditBaseSource',
          FbNonFiscalOpCreditSourceCodeBr,
          true
        ),
        /**
         * Static representation of the {@link cfop} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CFOP: fieldBuilder.buildEdmTypeField('CFOP', 'Edm.String', false),
        /**
         * Static representation of the {@link validToDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALID_TO_DATE: fieldBuilder.buildEdmTypeField(
          'ValidToDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link validFromDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALID_FROM_DATE: fieldBuilder.buildEdmTypeField(
          'ValidFromDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link cfopDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CFOP_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'CFOPDescription',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', CfopCreditBaseSources)
      };
    }

    return this._schema;
  }
}
