/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { VendorSettlementTax1099S } from './VendorSettlementTax1099S';
import { VendorSettlementTax1099SRequestBuilder } from './VendorSettlementTax1099SRequestBuilder';
import { Tax1099Type } from './Tax1099Type';
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
export class VendorSettlementTax1099SApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<VendorSettlementTax1099S<DeSerializersT>, DeSerializersT>
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
  ): VendorSettlementTax1099SApi<DeSerializersT> {
    return new VendorSettlementTax1099SApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = VendorSettlementTax1099S;

  requestBuilder(): VendorSettlementTax1099SRequestBuilder<DeSerializersT> {
    return new VendorSettlementTax1099SRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    VendorSettlementTax1099S<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      VendorSettlementTax1099S<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    VendorSettlementTax1099S<DeSerializersT>,
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
    typeof VendorSettlementTax1099S,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        VendorSettlementTax1099S,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      VendorSettlementTax1099S<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    RECORD_ID: OrderableEdmTypeField<
      VendorSettlementTax1099S<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    G_10_A_STATE: OrderableEdmTypeField<
      VendorSettlementTax1099S<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COUNTRY_REGION: OrderableEdmTypeField<
      VendorSettlementTax1099S<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    S_3_ADDRESS_OR_LEGAL_DESCRIPTION: OrderableEdmTypeField<
      VendorSettlementTax1099S<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TAX_1099_TYPE: EnumField<
      VendorSettlementTax1099S<DeSerializers>,
      DeSerializersT,
      Tax1099Type,
      true,
      true
    >;
    S_1_DATE_OF_CLOSING: OrderableEdmTypeField<
      VendorSettlementTax1099S<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    SETTLED_STATE_1099: OrderableEdmTypeField<
      VendorSettlementTax1099S<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TRANS_DATE: OrderableEdmTypeField<
      VendorSettlementTax1099S<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    G_8_TRADE_OR_BUSINESS_INCOME: EnumField<
      VendorSettlementTax1099S<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    VENDOR_ACCOUNT: OrderableEdmTypeField<
      VendorSettlementTax1099S<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    S_4_TRANSFEROR_RECIEVED_PROPERTY: EnumField<
      VendorSettlementTax1099S<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SETTLED_FEDERAL_1099: OrderableEdmTypeField<
      VendorSettlementTax1099S<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TAX_1099_BOX_ID: OrderableEdmTypeField<
      VendorSettlementTax1099S<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    STATE: OrderableEdmTypeField<
      VendorSettlementTax1099S<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    G_11_STATE_INCOME_TAX_WITHHELD: OrderableEdmTypeField<
      VendorSettlementTax1099S<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    G_3_TAX_YEAR: OrderableEdmTypeField<
      VendorSettlementTax1099S<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    S_5_BUYER_PART_OF_REAL_ESTATE_TAX: OrderableEdmTypeField<
      VendorSettlementTax1099S<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    G_10_B_STATE_ID_NUMBER: OrderableEdmTypeField<
      VendorSettlementTax1099S<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PSN_TAX_1099_BY_MAIN_ACCOUNT: EnumField<
      VendorSettlementTax1099S<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ALL_FIELDS: AllFields<VendorSettlementTax1099S<DeSerializers>>;
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
         * Static representation of the {@link recordId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECORD_ID: fieldBuilder.buildEdmTypeField(
          'RecordId',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link g10AState} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        G_10_A_STATE: fieldBuilder.buildEdmTypeField(
          'G10aState',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link countryRegion} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COUNTRY_REGION: fieldBuilder.buildEdmTypeField(
          'CountryRegion',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link s3AddressOrLegalDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        S_3_ADDRESS_OR_LEGAL_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'S3AddressOrLegalDescription',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link tax1099Type} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_1099_TYPE: fieldBuilder.buildEnumField(
          'Tax1099Type',
          Tax1099Type,
          true
        ),
        /**
         * Static representation of the {@link s1DateOfClosing} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        S_1_DATE_OF_CLOSING: fieldBuilder.buildEdmTypeField(
          'S1DateOfClosing',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link settledState1099} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SETTLED_STATE_1099: fieldBuilder.buildEdmTypeField(
          'SettledState1099',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link transDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANS_DATE: fieldBuilder.buildEdmTypeField(
          'TransDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link g8TradeOrBusinessIncome} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        G_8_TRADE_OR_BUSINESS_INCOME: fieldBuilder.buildEnumField(
          'G8TradeOrBusinessIncome',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link vendorAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VENDOR_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'VendorAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link s4TransferorRecievedProperty} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        S_4_TRANSFEROR_RECIEVED_PROPERTY: fieldBuilder.buildEnumField(
          'S4TransferorRecievedProperty',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link settledFederal1099} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SETTLED_FEDERAL_1099: fieldBuilder.buildEdmTypeField(
          'SettledFederal1099',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link tax1099BoxId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_1099_BOX_ID: fieldBuilder.buildEdmTypeField(
          'Tax1099BoxId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link state} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STATE: fieldBuilder.buildEdmTypeField('State', 'Edm.String', true),
        /**
         * Static representation of the {@link g11StateIncomeTaxWithheld} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        G_11_STATE_INCOME_TAX_WITHHELD: fieldBuilder.buildEdmTypeField(
          'G11StateIncomeTaxWithheld',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link g3TaxYear} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        G_3_TAX_YEAR: fieldBuilder.buildEdmTypeField(
          'G3TaxYear',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link s5BuyerPartOfRealEstateTax} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        S_5_BUYER_PART_OF_REAL_ESTATE_TAX: fieldBuilder.buildEdmTypeField(
          'S5BuyerPartOfRealEstateTax',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link g10BStateIdNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        G_10_B_STATE_ID_NUMBER: fieldBuilder.buildEdmTypeField(
          'G10bStateIdNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link psnTax1099ByMainAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PSN_TAX_1099_BY_MAIN_ACCOUNT: fieldBuilder.buildEnumField(
          'PSNTax1099ByMainAccount',
          NoYes,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', VendorSettlementTax1099S)
      };
    }

    return this._schema;
  }
}
