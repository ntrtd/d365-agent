/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { TaxExemptCodes } from './TaxExemptCodes';
import { TaxExemptCodesRequestBuilder } from './TaxExemptCodesRequestBuilder';
import { TaxGroupDatasApi } from './TaxGroupDatasApi';
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
  OneToManyLink
} from '@sap-cloud-sdk/odata-v4';
export class TaxExemptCodesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<TaxExemptCodes<DeSerializersT>, DeSerializersT>
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
  ): TaxExemptCodesApi<DeSerializersT> {
    return new TaxExemptCodesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link taxGroupData} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TAX_GROUP_DATA: OneToManyLink<
      TaxExemptCodes<DeSerializersT>,
      DeSerializersT,
      TaxGroupDatasApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [TaxGroupDatasApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      TAX_GROUP_DATA: new OneToManyLink('TaxGroupData', this, linkedApis[0])
    };
    return this;
  }

  entityConstructor = TaxExemptCodes;

  requestBuilder(): TaxExemptCodesRequestBuilder<DeSerializersT> {
    return new TaxExemptCodesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    TaxExemptCodes<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<TaxExemptCodes<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<TaxExemptCodes<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof TaxExemptCodes, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(TaxExemptCodes, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      TaxExemptCodes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TAX_EXEMPT_CODE: OrderableEdmTypeField<
      TaxExemptCodes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LANGUAGE: OrderableEdmTypeField<
      TaxExemptCodes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      TaxExemptCodes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TEXT: OrderableEdmTypeField<
      TaxExemptCodes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link taxGroupData} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TAX_GROUP_DATA: OneToManyLink<
      TaxExemptCodes<DeSerializersT>,
      DeSerializersT,
      TaxGroupDatasApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<TaxExemptCodes<DeSerializers>>;
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
         * Static representation of the {@link taxExemptCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_EXEMPT_CODE: fieldBuilder.buildEdmTypeField(
          'TaxExemptCode',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link language} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LANGUAGE: fieldBuilder.buildEdmTypeField(
          'Language',
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
         * Static representation of the {@link text} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TEXT: fieldBuilder.buildEdmTypeField('Text', 'Edm.String', true),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', TaxExemptCodes)
      };
    }

    return this._schema;
  }
}
