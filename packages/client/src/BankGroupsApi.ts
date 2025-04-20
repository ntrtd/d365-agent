/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BankGroups } from './BankGroups';
import { BankGroupsRequestBuilder } from './BankGroupsRequestBuilder';
import { VendorBankAccountsApi } from './VendorBankAccountsApi';
import { BankAccountsApi } from './BankAccountsApi';
import { BankTypeRu } from './BankTypeRu';
import { Timezone } from './Timezone';
import { BankCodeType } from './BankCodeType';
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
  EnumField,
  OneToManyLink
} from '@sap-cloud-sdk/odata-v4';
export class BankGroupsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<BankGroups<DeSerializersT>, DeSerializersT>
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
  ): BankGroupsApi<DeSerializersT> {
    return new BankGroupsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link vendorBankAccounts} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VENDOR_BANK_ACCOUNTS: OneToManyLink<
      BankGroups<DeSerializersT>,
      DeSerializersT,
      VendorBankAccountsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link bankAccount} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BANK_ACCOUNT: OneToManyLink<
      BankGroups<DeSerializersT>,
      DeSerializersT,
      BankAccountsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      VendorBankAccountsApi<DeSerializersT>,
      BankAccountsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      VENDOR_BANK_ACCOUNTS: new OneToManyLink(
        'VendorBankAccounts',
        this,
        linkedApis[0]
      ),
      BANK_ACCOUNT: new OneToManyLink('BankAccount', this, linkedApis[1])
    };
    return this;
  }

  entityConstructor = BankGroups;

  requestBuilder(): BankGroupsRequestBuilder<DeSerializersT> {
    return new BankGroupsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    BankGroups<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<BankGroups<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<BankGroups<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof BankGroups, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(BankGroups, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      BankGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    BANK_GROUP_ID: OrderableEdmTypeField<
      BankGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ADDRESS_COUNTRY_ISO_CODE: OrderableEdmTypeField<
      BankGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BRANCH_CODE: OrderableEdmTypeField<
      BankGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BANK_TYPE_RU: EnumField<
      BankGroups<DeSerializers>,
      DeSerializersT,
      BankTypeRu,
      true,
      true
    >;
    ADDRESS_COUNTRY: OrderableEdmTypeField<
      BankGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_TIME_ZONE: EnumField<
      BankGroups<DeSerializers>,
      DeSerializersT,
      Timezone,
      true,
      true
    >;
    CONTACT_FAX: OrderableEdmTypeField<
      BankGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONTRACT_POST_ACCOUNT: OrderableEdmTypeField<
      BankGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_DESCRIPTION: OrderableEdmTypeField<
      BankGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BANK_CODE: OrderableEdmTypeField<
      BankGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONTACT_PHONE_EXTENSION: OrderableEdmTypeField<
      BankGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BASE_BANK_ID_RU: OrderableEdmTypeField<
      BankGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONTACT_PAGER: OrderableEdmTypeField<
      BankGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_LONGITUDE: OrderableEdmTypeField<
      BankGroups<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    BANK_SHORT_ADDRESSING_RU: OrderableEdmTypeField<
      BankGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BANK_NAME: OrderableEdmTypeField<
      BankGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_VALID_FROM: OrderableEdmTypeField<
      BankGroups<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    CONTACT_EMAIL: OrderableEdmTypeField<
      BankGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONTACT_URL: OrderableEdmTypeField<
      BankGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_LOCATION_ID: OrderableEdmTypeField<
      BankGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONTACT_TELEX: OrderableEdmTypeField<
      BankGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BANKS_IDENTIFICATION_OF_COMPANY: OrderableEdmTypeField<
      BankGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ROUTING_NUMBER: OrderableEdmTypeField<
      BankGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_STATE: OrderableEdmTypeField<
      BankGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_CITY: OrderableEdmTypeField<
      BankGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONTACT_SMS: OrderableEdmTypeField<
      BankGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ROUTING_NUMBER_TYPE: EnumField<
      BankGroups<DeSerializers>,
      DeSerializersT,
      BankCodeType,
      true,
      true
    >;
    ADDRESS_ZIP_CODE: OrderableEdmTypeField<
      BankGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BANK_ACCOUNT_OPENED_IN_RU: OrderableEdmTypeField<
      BankGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NAME: OrderableEdmTypeField<
      BankGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ORGANIZATION_NUMBER: OrderableEdmTypeField<
      BankGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SUFFIX: OrderableEdmTypeField<
      BankGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BANK_STATEMENT_NAME: OrderableEdmTypeField<
      BankGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    KANA_NAME: OrderableEdmTypeField<
      BankGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CELLULAR_PHONE: OrderableEdmTypeField<
      BankGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_LATITUDE: OrderableEdmTypeField<
      BankGroups<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    BANK_DESCRIPTION_RU: OrderableEdmTypeField<
      BankGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BRANCH_KANA_NAME: OrderableEdmTypeField<
      BankGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_STREET: OrderableEdmTypeField<
      BankGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FULL_PRIMARY_ADDRESS: OrderableEdmTypeField<
      BankGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BRANCH_NAME: OrderableEdmTypeField<
      BankGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    STATEMENT_FORMAT_ID: OrderableEdmTypeField<
      BankGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONTACT_NAME: OrderableEdmTypeField<
      BankGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BANK_ARCHIVE_RU: EnumField<
      BankGroups<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ADDRESS_DISTRICT_NAME: OrderableEdmTypeField<
      BankGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONTACT_PHONE: OrderableEdmTypeField<
      BankGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CURRENCY: OrderableEdmTypeField<
      BankGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VEND_ACCOUNT_NUM_RU: OrderableEdmTypeField<
      BankGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BANK_BIC_RU: OrderableEdmTypeField<
      BankGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DRAWER: OrderableEdmTypeField<
      BankGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_COUNTY: OrderableEdmTypeField<
      BankGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SWIFT_NO_EE: OrderableEdmTypeField<
      BankGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_VALID_TO: OrderableEdmTypeField<
      BankGroups<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link vendorBankAccounts} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VENDOR_BANK_ACCOUNTS: OneToManyLink<
      BankGroups<DeSerializersT>,
      DeSerializersT,
      VendorBankAccountsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link bankAccount} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BANK_ACCOUNT: OneToManyLink<
      BankGroups<DeSerializersT>,
      DeSerializersT,
      BankAccountsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<BankGroups<DeSerializers>>;
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
         * Static representation of the {@link bankGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BANK_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'BankGroupId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link addressCountryIsoCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_COUNTRY_ISO_CODE: fieldBuilder.buildEdmTypeField(
          'AddressCountryISOCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link branchCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BRANCH_CODE: fieldBuilder.buildEdmTypeField(
          'BranchCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link bankTypeRu} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BANK_TYPE_RU: fieldBuilder.buildEnumField(
          'BankType_RU',
          BankTypeRu,
          true
        ),
        /**
         * Static representation of the {@link addressCountry} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_COUNTRY: fieldBuilder.buildEdmTypeField(
          'AddressCountry',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link addressTimeZone} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_TIME_ZONE: fieldBuilder.buildEnumField(
          'AddressTimeZone',
          Timezone,
          true
        ),
        /**
         * Static representation of the {@link contactFax} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONTACT_FAX: fieldBuilder.buildEdmTypeField(
          'ContactFax',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link contractPostAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONTRACT_POST_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'ContractPostAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link addressDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'AddressDescription',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link bankCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BANK_CODE: fieldBuilder.buildEdmTypeField(
          'BankCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link contactPhoneExtension} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONTACT_PHONE_EXTENSION: fieldBuilder.buildEdmTypeField(
          'ContactPhoneExtension',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link baseBankIdRu} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BASE_BANK_ID_RU: fieldBuilder.buildEdmTypeField(
          'BaseBankId_RU',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link contactPager} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONTACT_PAGER: fieldBuilder.buildEdmTypeField(
          'ContactPager',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link addressLongitude} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_LONGITUDE: fieldBuilder.buildEdmTypeField(
          'AddressLongitude',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link bankShortAddressingRu} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BANK_SHORT_ADDRESSING_RU: fieldBuilder.buildEdmTypeField(
          'BankShortAddressing_RU',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link bankName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BANK_NAME: fieldBuilder.buildEdmTypeField(
          'BankName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link addressValidFrom} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_VALID_FROM: fieldBuilder.buildEdmTypeField(
          'AddressValidFrom',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link contactEmail} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONTACT_EMAIL: fieldBuilder.buildEdmTypeField(
          'ContactEmail',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link contactUrl} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONTACT_URL: fieldBuilder.buildEdmTypeField(
          'ContactURL',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link addressLocationId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_LOCATION_ID: fieldBuilder.buildEdmTypeField(
          'AddressLocationId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link contactTelex} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONTACT_TELEX: fieldBuilder.buildEdmTypeField(
          'ContactTelex',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link banksIdentificationOfCompany} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BANKS_IDENTIFICATION_OF_COMPANY: fieldBuilder.buildEdmTypeField(
          'BanksIdentificationOfCompany',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link routingNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ROUTING_NUMBER: fieldBuilder.buildEdmTypeField(
          'RoutingNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link addressState} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_STATE: fieldBuilder.buildEdmTypeField(
          'AddressState',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link addressCity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_CITY: fieldBuilder.buildEdmTypeField(
          'AddressCity',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link contactSms} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONTACT_SMS: fieldBuilder.buildEdmTypeField(
          'ContactSMS',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link routingNumberType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ROUTING_NUMBER_TYPE: fieldBuilder.buildEnumField(
          'RoutingNumberType',
          BankCodeType,
          true
        ),
        /**
         * Static representation of the {@link addressZipCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_ZIP_CODE: fieldBuilder.buildEdmTypeField(
          'AddressZipCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link bankAccountOpenedInRu} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BANK_ACCOUNT_OPENED_IN_RU: fieldBuilder.buildEdmTypeField(
          'BankAccountOpenedIn_RU',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', true),
        /**
         * Static representation of the {@link organizationNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORGANIZATION_NUMBER: fieldBuilder.buildEdmTypeField(
          'OrganizationNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link suffix} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUFFIX: fieldBuilder.buildEdmTypeField('Suffix', 'Edm.String', true),
        /**
         * Static representation of the {@link bankStatementName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BANK_STATEMENT_NAME: fieldBuilder.buildEdmTypeField(
          'BankStatementName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link kanaName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        KANA_NAME: fieldBuilder.buildEdmTypeField(
          'KanaName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link cellularPhone} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CELLULAR_PHONE: fieldBuilder.buildEdmTypeField(
          'CellularPhone',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link addressLatitude} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_LATITUDE: fieldBuilder.buildEdmTypeField(
          'AddressLatitude',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link bankDescriptionRu} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BANK_DESCRIPTION_RU: fieldBuilder.buildEdmTypeField(
          'BankDescription_RU',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link branchKanaName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BRANCH_KANA_NAME: fieldBuilder.buildEdmTypeField(
          'BranchKanaName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link addressStreet} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_STREET: fieldBuilder.buildEdmTypeField(
          'AddressStreet',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link fullPrimaryAddress} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FULL_PRIMARY_ADDRESS: fieldBuilder.buildEdmTypeField(
          'FullPrimaryAddress',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link branchName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BRANCH_NAME: fieldBuilder.buildEdmTypeField(
          'BranchName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link statementFormatId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STATEMENT_FORMAT_ID: fieldBuilder.buildEdmTypeField(
          'StatementFormatId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link contactName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONTACT_NAME: fieldBuilder.buildEdmTypeField(
          'ContactName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link bankArchiveRu} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BANK_ARCHIVE_RU: fieldBuilder.buildEnumField(
          'BankArchive_RU',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link addressDistrictName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_DISTRICT_NAME: fieldBuilder.buildEdmTypeField(
          'AddressDistrictName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link contactPhone} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONTACT_PHONE: fieldBuilder.buildEdmTypeField(
          'ContactPhone',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link currency} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CURRENCY: fieldBuilder.buildEdmTypeField(
          'Currency',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link vendAccountNumRu} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VEND_ACCOUNT_NUM_RU: fieldBuilder.buildEdmTypeField(
          'VendAccountNum_RU',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link bankBicRu} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BANK_BIC_RU: fieldBuilder.buildEdmTypeField(
          'BankBIC_RU',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link drawer} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DRAWER: fieldBuilder.buildEdmTypeField('Drawer', 'Edm.String', true),
        /**
         * Static representation of the {@link addressCounty} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_COUNTY: fieldBuilder.buildEdmTypeField(
          'AddressCounty',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link swiftNoEe} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SWIFT_NO_EE: fieldBuilder.buildEdmTypeField(
          'SWIFTNo_EE',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link addressValidTo} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_VALID_TO: fieldBuilder.buildEdmTypeField(
          'AddressValidTo',
          'Edm.DateTimeOffset',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', BankGroups)
      };
    }

    return this._schema;
  }
}
