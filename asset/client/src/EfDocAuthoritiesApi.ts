/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { EfDocAuthorities } from './EfDocAuthorities';
import { EfDocAuthoritiesRequestBuilder } from './EfDocAuthoritiesRequestBuilder';
import { EfDocAuthorityTypeBr } from './EfDocAuthorityTypeBr';
import { EfDocContingModeBr } from './EfDocContingModeBr';
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
export class EfDocAuthoritiesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<EfDocAuthorities<DeSerializersT>, DeSerializersT>
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
  ): EfDocAuthoritiesApi<DeSerializersT> {
    return new EfDocAuthoritiesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = EfDocAuthorities;

  requestBuilder(): EfDocAuthoritiesRequestBuilder<DeSerializersT> {
    return new EfDocAuthoritiesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    EfDocAuthorities<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<EfDocAuthorities<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<EfDocAuthorities<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof EfDocAuthorities, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        EfDocAuthorities,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    AUTHORITY: OrderableEdmTypeField<
      EfDocAuthorities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ICMS_TAX_BASE_AMOUNT_LIMIT: OrderableEdmTypeField<
      EfDocAuthorities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CANCEL_AS_EVENT: OrderableEdmTypeField<
      EfDocAuthorities<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      false,
      true
    >;
    PROCESS_NFCE_SYNCHRONOUS: OrderableEdmTypeField<
      EfDocAuthorities<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      false,
      true
    >;
    NFCE_MAX_AMOUNT_WITH_UNINDENTIFIED_CUSTOMER: OrderableEdmTypeField<
      EfDocAuthorities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    NFCE_CONSUMER_INQUIRY_URL: OrderableEdmTypeField<
      EfDocAuthorities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IGNORE_ACCENTS: OrderableEdmTypeField<
      EfDocAuthorities<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      false,
      true
    >;
    NAME: OrderableEdmTypeField<
      EfDocAuthorities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    AUTHORITY_TYPE: EnumField<
      EfDocAuthorities<DeSerializers>,
      DeSerializersT,
      EfDocAuthorityTypeBr,
      true,
      true
    >;
    CONTINGENCY_MODE: EnumField<
      EfDocAuthorities<DeSerializers>,
      DeSerializersT,
      EfDocContingModeBr,
      true,
      true
    >;
    SVC_AUTHORITY_ID: OrderableEdmTypeField<
      EfDocAuthorities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<EfDocAuthorities<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link authority} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AUTHORITY: fieldBuilder.buildEdmTypeField(
          'Authority',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link icmsTaxBaseAmountLimit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ICMS_TAX_BASE_AMOUNT_LIMIT: fieldBuilder.buildEdmTypeField(
          'ICMSTaxBaseAmountLimit',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link cancelAsEvent} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CANCEL_AS_EVENT: fieldBuilder.buildEdmTypeField(
          'CancelAsEvent',
          'Edm.Boolean',
          false
        ),
        /**
         * Static representation of the {@link processNfceSynchronous} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROCESS_NFCE_SYNCHRONOUS: fieldBuilder.buildEdmTypeField(
          'ProcessNfceSynchronous',
          'Edm.Boolean',
          false
        ),
        /**
         * Static representation of the {@link nfceMaxAmountWithUnindentifiedCustomer} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NFCE_MAX_AMOUNT_WITH_UNINDENTIFIED_CUSTOMER:
          fieldBuilder.buildEdmTypeField(
            'NfceMaxAmountWithUnindentifiedCustomer',
            'Edm.Decimal',
            false
          ),
        /**
         * Static representation of the {@link nfceConsumerInquiryUrl} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NFCE_CONSUMER_INQUIRY_URL: fieldBuilder.buildEdmTypeField(
          'NfceConsumerInquiryUrl',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link ignoreAccents} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IGNORE_ACCENTS: fieldBuilder.buildEdmTypeField(
          'IgnoreAccents',
          'Edm.Boolean',
          false
        ),
        /**
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', true),
        /**
         * Static representation of the {@link authorityType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AUTHORITY_TYPE: fieldBuilder.buildEnumField(
          'AuthorityType',
          EfDocAuthorityTypeBr,
          true
        ),
        /**
         * Static representation of the {@link contingencyMode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONTINGENCY_MODE: fieldBuilder.buildEnumField(
          'ContingencyMode',
          EfDocContingModeBr,
          true
        ),
        /**
         * Static representation of the {@link svcAuthorityId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SVC_AUTHORITY_ID: fieldBuilder.buildEdmTypeField(
          'SVCAuthorityId',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', EfDocAuthorities)
      };
    }

    return this._schema;
  }
}
