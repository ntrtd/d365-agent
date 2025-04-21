/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { McrTaxGroupDefaultRules } from './McrTaxGroupDefaultRules';
import { McrTaxGroupDefaultRulesRequestBuilder } from './McrTaxGroupDefaultRulesRequestBuilder';
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
export class McrTaxGroupDefaultRulesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<McrTaxGroupDefaultRules<DeSerializersT>, DeSerializersT>
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
  ): McrTaxGroupDefaultRulesApi<DeSerializersT> {
    return new McrTaxGroupDefaultRulesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = McrTaxGroupDefaultRules;

  requestBuilder(): McrTaxGroupDefaultRulesRequestBuilder<DeSerializersT> {
    return new McrTaxGroupDefaultRulesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    McrTaxGroupDefaultRules<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      McrTaxGroupDefaultRules<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    McrTaxGroupDefaultRules<DeSerializersT>,
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
    typeof McrTaxGroupDefaultRules,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        McrTaxGroupDefaultRules,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      McrTaxGroupDefaultRules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRIORITY: OrderableEdmTypeField<
      McrTaxGroupDefaultRules<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    INCLUDE_ZIP_CODE: EnumField<
      McrTaxGroupDefaultRules<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    INCLUDE_STATE: EnumField<
      McrTaxGroupDefaultRules<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    INCLUDE_CITY: EnumField<
      McrTaxGroupDefaultRules<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    INCLUDE_COUNTRY: EnumField<
      McrTaxGroupDefaultRules<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    INCLUDE_COUNTY: EnumField<
      McrTaxGroupDefaultRules<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ALL_FIELDS: AllFields<McrTaxGroupDefaultRules<DeSerializers>>;
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
         * Static representation of the {@link priority} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIORITY: fieldBuilder.buildEdmTypeField(
          'Priority',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link includeZipCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INCLUDE_ZIP_CODE: fieldBuilder.buildEnumField(
          'IncludeZipCode',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link includeState} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INCLUDE_STATE: fieldBuilder.buildEnumField('IncludeState', NoYes, true),
        /**
         * Static representation of the {@link includeCity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INCLUDE_CITY: fieldBuilder.buildEnumField('IncludeCity', NoYes, true),
        /**
         * Static representation of the {@link includeCountry} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INCLUDE_COUNTRY: fieldBuilder.buildEnumField(
          'IncludeCountry',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link includeCounty} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INCLUDE_COUNTY: fieldBuilder.buildEnumField(
          'IncludeCounty',
          NoYes,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', McrTaxGroupDefaultRules)
      };
    }

    return this._schema;
  }
}
