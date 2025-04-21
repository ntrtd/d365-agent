/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { TrvExpMobileCompanyInfo } from './TrvExpMobileCompanyInfo';
import { TrvExpMobileCompanyInfoRequestBuilder } from './TrvExpMobileCompanyInfoRequestBuilder';
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
export class TrvExpMobileCompanyInfoApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<TrvExpMobileCompanyInfo<DeSerializersT>, DeSerializersT>
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
  ): TrvExpMobileCompanyInfoApi<DeSerializersT> {
    return new TrvExpMobileCompanyInfoApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = TrvExpMobileCompanyInfo;

  requestBuilder(): TrvExpMobileCompanyInfoRequestBuilder<DeSerializersT> {
    return new TrvExpMobileCompanyInfoRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    TrvExpMobileCompanyInfo<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      TrvExpMobileCompanyInfo<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    TrvExpMobileCompanyInfo<DeSerializersT>,
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
    typeof TrvExpMobileCompanyInfo,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        TrvExpMobileCompanyInfo,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    PARTY_ID: OrderableEdmTypeField<
      TrvExpMobileCompanyInfo<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    NAME: OrderableEdmTypeField<
      TrvExpMobileCompanyInfo<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COMPANY: OrderableEdmTypeField<
      TrvExpMobileCompanyInfo<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INTERCOMPANY_L_ES: OrderableEdmTypeField<
      TrvExpMobileCompanyInfo<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_EMPLOYED: EnumField<
      TrvExpMobileCompanyInfo<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    LANGUAGE: OrderableEdmTypeField<
      TrvExpMobileCompanyInfo<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEFAULT_CURRENCY: OrderableEdmTypeField<
      TrvExpMobileCompanyInfo<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<TrvExpMobileCompanyInfo<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link partyId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PARTY_ID: fieldBuilder.buildEdmTypeField(
          'PartyID',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', true),
        /**
         * Static representation of the {@link company} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMPANY: fieldBuilder.buildEdmTypeField('Company', 'Edm.String', true),
        /**
         * Static representation of the {@link intercompanyLEs} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INTERCOMPANY_L_ES: fieldBuilder.buildEdmTypeField(
          'IntercompanyLEs',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isEmployed} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_EMPLOYED: fieldBuilder.buildEnumField('IsEmployed', NoYes, true),
        /**
         * Static representation of the {@link language} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LANGUAGE: fieldBuilder.buildEdmTypeField(
          'Language',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link defaultCurrency} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_CURRENCY: fieldBuilder.buildEdmTypeField(
          'DefaultCurrency',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', TrvExpMobileCompanyInfo)
      };
    }

    return this._schema;
  }
}
