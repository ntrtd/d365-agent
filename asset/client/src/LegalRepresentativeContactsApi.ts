/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { LegalRepresentativeContacts } from './LegalRepresentativeContacts';
import { LegalRepresentativeContactsRequestBuilder } from './LegalRepresentativeContactsRequestBuilder';
import { LegalRepresentativeTypeBr } from './LegalRepresentativeTypeBr';
import { NoYes } from './NoYes';
import { LogisticsElectronicAddressMethodType } from './LogisticsElectronicAddressMethodType';
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
export class LegalRepresentativeContactsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<LegalRepresentativeContacts<DeSerializersT>, DeSerializersT>
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
  ): LegalRepresentativeContactsApi<DeSerializersT> {
    return new LegalRepresentativeContactsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = LegalRepresentativeContacts;

  requestBuilder(): LegalRepresentativeContactsRequestBuilder<DeSerializersT> {
    return new LegalRepresentativeContactsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    LegalRepresentativeContacts<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      LegalRepresentativeContacts<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    LegalRepresentativeContacts<DeSerializersT>,
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
    typeof LegalRepresentativeContacts,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        LegalRepresentativeContacts,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    FISCAL_ORGANIZATION_ROOT_FISCAL_ESTABLISHMENT_DATA_AREA: OrderableEdmTypeField<
      LegalRepresentativeContacts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    FISCAL_ORGANIZATION_ROOT_FISCAL_ESTABLISHMENT: OrderableEdmTypeField<
      LegalRepresentativeContacts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LEGAL_REPRESENTATIVE_CPF: OrderableEdmTypeField<
      LegalRepresentativeContacts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LEGAL_REPRESENTATIVE_ROLE: EnumField<
      LegalRepresentativeContacts<DeSerializers>,
      DeSerializersT,
      LegalRepresentativeTypeBr,
      true,
      true
    >;
    CONTACT_NUMBER_OR_ADDRESS: OrderableEdmTypeField<
      LegalRepresentativeContacts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    IS_PRIVATE: EnumField<
      LegalRepresentativeContacts<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      LegalRepresentativeContacts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_PRIMARY: EnumField<
      LegalRepresentativeContacts<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    EXTENSION: OrderableEdmTypeField<
      LegalRepresentativeContacts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TYPE: EnumField<
      LegalRepresentativeContacts<DeSerializers>,
      DeSerializersT,
      LogisticsElectronicAddressMethodType,
      true,
      true
    >;
    IS_MOBILE_PHONE: EnumField<
      LegalRepresentativeContacts<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    IS_INSTANT_MESSAGE: EnumField<
      LegalRepresentativeContacts<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    INTERNATIONAL_CALLING_CODE: OrderableEdmTypeField<
      LegalRepresentativeContacts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<LegalRepresentativeContacts<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link fiscalOrganizationRootFiscalEstablishmentDataArea} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FISCAL_ORGANIZATION_ROOT_FISCAL_ESTABLISHMENT_DATA_AREA:
          fieldBuilder.buildEdmTypeField(
            'FiscalOrganizationRootFiscalEstablishmentDataArea',
            'Edm.String',
            false
          ),
        /**
         * Static representation of the {@link fiscalOrganizationRootFiscalEstablishment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FISCAL_ORGANIZATION_ROOT_FISCAL_ESTABLISHMENT:
          fieldBuilder.buildEdmTypeField(
            'FiscalOrganizationRootFiscalEstablishment',
            'Edm.String',
            false
          ),
        /**
         * Static representation of the {@link legalRepresentativeCpf} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEGAL_REPRESENTATIVE_CPF: fieldBuilder.buildEdmTypeField(
          'LegalRepresentativeCPF',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link legalRepresentativeRole} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEGAL_REPRESENTATIVE_ROLE: fieldBuilder.buildEnumField(
          'LegalRepresentativeRole',
          LegalRepresentativeTypeBr,
          true
        ),
        /**
         * Static representation of the {@link contactNumberOrAddress} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONTACT_NUMBER_OR_ADDRESS: fieldBuilder.buildEdmTypeField(
          'ContactNumberOrAddress',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link isPrivate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_PRIVATE: fieldBuilder.buildEnumField('IsPrivate', NoYes, true),
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
         * Static representation of the {@link isPrimary} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_PRIMARY: fieldBuilder.buildEnumField('IsPrimary', NoYes, true),
        /**
         * Static representation of the {@link extension} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXTENSION: fieldBuilder.buildEdmTypeField(
          'Extension',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link type} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TYPE: fieldBuilder.buildEnumField(
          'Type',
          LogisticsElectronicAddressMethodType,
          true
        ),
        /**
         * Static representation of the {@link isMobilePhone} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_MOBILE_PHONE: fieldBuilder.buildEnumField(
          'IsMobilePhone',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link isInstantMessage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_INSTANT_MESSAGE: fieldBuilder.buildEnumField(
          'IsInstantMessage',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link internationalCallingCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INTERNATIONAL_CALLING_CODE: fieldBuilder.buildEdmTypeField(
          'InternationalCallingCode',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', LegalRepresentativeContacts)
      };
    }

    return this._schema;
  }
}
