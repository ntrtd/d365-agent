/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ElectronicTaxDeclarationParameters } from './ElectronicTaxDeclarationParameters';
import { ElectronicTaxDeclarationParametersRequestBuilder } from './ElectronicTaxDeclarationParametersRequestBuilder';
import { ContactPersonType } from './ContactPersonType';
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
export class ElectronicTaxDeclarationParametersApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      ElectronicTaxDeclarationParameters<DeSerializersT>,
      DeSerializersT
    >
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
  ): ElectronicTaxDeclarationParametersApi<DeSerializersT> {
    return new ElectronicTaxDeclarationParametersApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = ElectronicTaxDeclarationParameters;

  requestBuilder(): ElectronicTaxDeclarationParametersRequestBuilder<DeSerializersT> {
    return new ElectronicTaxDeclarationParametersRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    ElectronicTaxDeclarationParameters<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      ElectronicTaxDeclarationParameters<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ElectronicTaxDeclarationParameters<DeSerializersT>,
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
    typeof ElectronicTaxDeclarationParameters,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ElectronicTaxDeclarationParameters,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      ElectronicTaxDeclarationParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ID: OrderableEdmTypeField<
      ElectronicTaxDeclarationParameters<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    DIGIPOORT_STATUS_URL: OrderableEdmTypeField<
      ElectronicTaxDeclarationParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONTACT_INITIALS: OrderableEdmTypeField<
      ElectronicTaxDeclarationParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TIME_OUT: OrderableEdmTypeField<
      ElectronicTaxDeclarationParameters<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    CA_CERTIFICATE: OrderableEdmTypeField<
      ElectronicTaxDeclarationParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    AUTH_CERTIFICATE: OrderableEdmTypeField<
      ElectronicTaxDeclarationParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VAT_CONTACT_TYPE: EnumField<
      ElectronicTaxDeclarationParameters<DeSerializers>,
      DeSerializersT,
      ContactPersonType,
      true,
      true
    >;
    COMPANY: OrderableEdmTypeField<
      ElectronicTaxDeclarationParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ICP_CONTACT_TYPE: EnumField<
      ElectronicTaxDeclarationParameters<DeSerializers>,
      DeSerializersT,
      ContactPersonType,
      true,
      true
    >;
    FISCAL_GROUP: OrderableEdmTypeField<
      ElectronicTaxDeclarationParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    AUTHORIZATION_ADDRESS: OrderableEdmTypeField<
      ElectronicTaxDeclarationParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NAME: OrderableEdmTypeField<
      ElectronicTaxDeclarationParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONTACT_ID: OrderableEdmTypeField<
      ElectronicTaxDeclarationParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONTACT_PREFIX: OrderableEdmTypeField<
      ElectronicTaxDeclarationParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FORMAT_MAPPING: OrderableEdmTypeField<
      ElectronicTaxDeclarationParameters<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    TELEPHONE: OrderableEdmTypeField<
      ElectronicTaxDeclarationParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COMPANY_PART_OF_FISCAL_GROUP: EnumField<
      ElectronicTaxDeclarationParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DIGIPOORT_DELIVERY_URL: OrderableEdmTypeField<
      ElectronicTaxDeclarationParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<ElectronicTaxDeclarationParameters<DeSerializers>>;
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
         * Static representation of the {@link id} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ID: fieldBuilder.buildEdmTypeField('ID', 'Edm.Int32', false),
        /**
         * Static representation of the {@link digipoortStatusUrl} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DIGIPOORT_STATUS_URL: fieldBuilder.buildEdmTypeField(
          'DigipoortStatusURL',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link contactInitials} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONTACT_INITIALS: fieldBuilder.buildEdmTypeField(
          'ContactInitials',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link timeOut} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TIME_OUT: fieldBuilder.buildEdmTypeField('TimeOut', 'Edm.Int32', false),
        /**
         * Static representation of the {@link caCertificate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CA_CERTIFICATE: fieldBuilder.buildEdmTypeField(
          'CACertificate',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link authCertificate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AUTH_CERTIFICATE: fieldBuilder.buildEdmTypeField(
          'AuthCertificate',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link vatContactType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VAT_CONTACT_TYPE: fieldBuilder.buildEnumField(
          'VATContactType',
          ContactPersonType,
          true
        ),
        /**
         * Static representation of the {@link company} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMPANY: fieldBuilder.buildEdmTypeField('Company', 'Edm.String', true),
        /**
         * Static representation of the {@link icpContactType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ICP_CONTACT_TYPE: fieldBuilder.buildEnumField(
          'ICPContactType',
          ContactPersonType,
          true
        ),
        /**
         * Static representation of the {@link fiscalGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FISCAL_GROUP: fieldBuilder.buildEdmTypeField(
          'FiscalGroup',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link authorizationAddress} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AUTHORIZATION_ADDRESS: fieldBuilder.buildEdmTypeField(
          'AuthorizationAddress',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', true),
        /**
         * Static representation of the {@link contactId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONTACT_ID: fieldBuilder.buildEdmTypeField(
          'ContactId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link contactPrefix} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONTACT_PREFIX: fieldBuilder.buildEdmTypeField(
          'ContactPrefix',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link formatMapping} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FORMAT_MAPPING: fieldBuilder.buildEdmTypeField(
          'FormatMapping',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link telephone} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TELEPHONE: fieldBuilder.buildEdmTypeField(
          'Telephone',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link companyPartOfFiscalGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMPANY_PART_OF_FISCAL_GROUP: fieldBuilder.buildEnumField(
          'CompanyPartOfFiscalGroup',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link digipoortDeliveryUrl} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DIGIPOORT_DELIVERY_URL: fieldBuilder.buildEdmTypeField(
          'DigipoortDeliveryURL',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ElectronicTaxDeclarationParameters)
      };
    }

    return this._schema;
  }
}
