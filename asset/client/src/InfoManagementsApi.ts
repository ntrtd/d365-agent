/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { InfoManagements } from './InfoManagements';
import { InfoManagementsRequestBuilder } from './InfoManagementsRequestBuilder';
import { NoYes } from './NoYes';
import { TaxRegistrationTypeIn } from './TaxRegistrationTypeIn';
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
export class InfoManagementsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<InfoManagements<DeSerializersT>, DeSerializersT>
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
  ): InfoManagementsApi<DeSerializersT> {
    return new InfoManagementsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = InfoManagements;

  requestBuilder(): InfoManagementsRequestBuilder<DeSerializersT> {
    return new InfoManagementsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    InfoManagements<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<InfoManagements<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<InfoManagements<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof InfoManagements, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        InfoManagements,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    NAME: OrderableEdmTypeField<
      InfoManagements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LOCATION_ID: OrderableEdmTypeField<
      InfoManagements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    IS_PRIMARY: EnumField<
      InfoManagements<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    COMMISSIONARATE: OrderableEdmTypeField<
      InfoManagements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REGISTRATION_TYPE: EnumField<
      InfoManagements<DeSerializers>,
      DeSerializersT,
      TaxRegistrationTypeIn,
      true,
      true
    >;
    LARGE_TAXPAYER_UNIT_CODE: OrderableEdmTypeField<
      InfoManagements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      InfoManagements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SALES_TAX_REGISTRATION_NUMBER: OrderableEdmTypeField<
      InfoManagements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TAX_ACCOUNT_NUMBER: OrderableEdmTypeField<
      InfoManagements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IEC_NUMBER: OrderableEdmTypeField<
      InfoManagements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NUM_SEQ_GROUP: OrderableEdmTypeField<
      InfoManagements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    GST_NUMBER: OrderableEdmTypeField<
      InfoManagements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ECC_NUMBER_OTHERS: OrderableEdmTypeField<
      InfoManagements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MANUFACTURER_ECC_NUMBER: OrderableEdmTypeField<
      InfoManagements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    STC_NUMBER: OrderableEdmTypeField<
      InfoManagements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RANGE: OrderableEdmTypeField<
      InfoManagements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRADER_ECC_NUMBER: OrderableEdmTypeField<
      InfoManagements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DIVISION: OrderableEdmTypeField<
      InfoManagements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TAX_IDENTIFICATION_NUMBER: OrderableEdmTypeField<
      InfoManagements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<InfoManagements<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', false),
        /**
         * Static representation of the {@link locationId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOCATION_ID: fieldBuilder.buildEdmTypeField(
          'LocationId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link isPrimary} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_PRIMARY: fieldBuilder.buildEnumField('IsPrimary', NoYes, true),
        /**
         * Static representation of the {@link commissionarate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMMISSIONARATE: fieldBuilder.buildEdmTypeField(
          'Commissionarate',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link registrationType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REGISTRATION_TYPE: fieldBuilder.buildEnumField(
          'RegistrationType',
          TaxRegistrationTypeIn,
          true
        ),
        /**
         * Static representation of the {@link largeTaxpayerUnitCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LARGE_TAXPAYER_UNIT_CODE: fieldBuilder.buildEdmTypeField(
          'LargeTaxpayerUnitCode',
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
        /**
         * Static representation of the {@link salesTaxRegistrationNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_TAX_REGISTRATION_NUMBER: fieldBuilder.buildEdmTypeField(
          'SalesTaxRegistrationNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link taxAccountNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_ACCOUNT_NUMBER: fieldBuilder.buildEdmTypeField(
          'TaxAccountNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link iecNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IEC_NUMBER: fieldBuilder.buildEdmTypeField(
          'IECNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link numSeqGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NUM_SEQ_GROUP: fieldBuilder.buildEdmTypeField(
          'NumSeqGroup',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link gstNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GST_NUMBER: fieldBuilder.buildEdmTypeField(
          'GSTNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link eccNumberOthers} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ECC_NUMBER_OTHERS: fieldBuilder.buildEdmTypeField(
          'ECCNumberOthers',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link manufacturerEccNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MANUFACTURER_ECC_NUMBER: fieldBuilder.buildEdmTypeField(
          'ManufacturerECCNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link stcNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STC_NUMBER: fieldBuilder.buildEdmTypeField(
          'STCNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link range} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RANGE: fieldBuilder.buildEdmTypeField('Range', 'Edm.String', true),
        /**
         * Static representation of the {@link traderEccNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRADER_ECC_NUMBER: fieldBuilder.buildEdmTypeField(
          'TraderECCNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link division} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DIVISION: fieldBuilder.buildEdmTypeField(
          'Division',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link taxIdentificationNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_IDENTIFICATION_NUMBER: fieldBuilder.buildEdmTypeField(
          'TaxIdentificationNumber',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', InfoManagements)
      };
    }

    return this._schema;
  }
}
