/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { WithholdAuthorities } from './WithholdAuthorities';
import { WithholdAuthoritiesRequestBuilder } from './WithholdAuthoritiesRequestBuilder';
import { TaxWithholdTypeIn } from './TaxWithholdTypeIn';
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
export class WithholdAuthoritiesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<WithholdAuthorities<DeSerializersT>, DeSerializersT>
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
  ): WithholdAuthoritiesApi<DeSerializersT> {
    return new WithholdAuthoritiesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = WithholdAuthorities;

  requestBuilder(): WithholdAuthoritiesRequestBuilder<DeSerializersT> {
    return new WithholdAuthoritiesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    WithholdAuthorities<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<WithholdAuthorities<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    WithholdAuthorities<DeSerializersT>,
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
    typeof WithholdAuthorities,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        WithholdAuthorities,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      WithholdAuthorities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TAX_TYPE: EnumField<
      WithholdAuthorities<DeSerializers>,
      DeSerializersT,
      TaxWithholdTypeIn,
      true,
      true
    >;
    WITHHOLDING_TAX_AUTHORITY: OrderableEdmTypeField<
      WithholdAuthorities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    VEND_ACCOUNT: OrderableEdmTypeField<
      WithholdAuthorities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      WithholdAuthorities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<WithholdAuthorities<DeSerializers>>;
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
        TAX_TYPE: fieldBuilder.buildEnumField(
          'TaxType',
          TaxWithholdTypeIn,
          true
        ),
        /**
         * Static representation of the {@link withholdingTaxAuthority} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WITHHOLDING_TAX_AUTHORITY: fieldBuilder.buildEdmTypeField(
          'WithholdingTaxAuthority',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link vendAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VEND_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'VendAccount',
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
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', WithholdAuthorities)
      };
    }

    return this._schema;
  }
}
