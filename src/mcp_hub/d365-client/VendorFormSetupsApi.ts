/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { VendorFormSetups } from './VendorFormSetups';
import { VendorFormSetupsRequestBuilder } from './VendorFormSetupsRequestBuilder';
import { NoYes } from './NoYes';
import { TaxSpecPrintLevel } from './TaxSpecPrintLevel';
import { FirstLast } from './FirstLast';
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
export class VendorFormSetupsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<VendorFormSetups<DeSerializersT>, DeSerializersT>
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
  ): VendorFormSetupsApi<DeSerializersT> {
    return new VendorFormSetupsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = VendorFormSetups;

  requestBuilder(): VendorFormSetupsRequestBuilder<DeSerializersT> {
    return new VendorFormSetupsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    VendorFormSetups<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<VendorFormSetups<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<VendorFormSetups<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof VendorFormSetups, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        VendorFormSetups,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      VendorFormSetups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    IS_SEPARATE_TAX_EXEMPT_BALANCE_IN_FORMS: EnumField<
      VendorFormSetups<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SALES_TAX_SPECIFICATION: EnumField<
      VendorFormSetups<DeSerializers>,
      DeSerializersT,
      TaxSpecPrintLevel,
      true,
      true
    >;
    PRINT_TAX_EXEMPT_NUMBER_ON_INVOICE: EnumField<
      VendorFormSetups<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    TOTALS: EnumField<
      VendorFormSetups<DeSerializers>,
      DeSerializersT,
      FirstLast,
      true,
      true
    >;
    INVENTORY_DIMENSIONS_FOR_PRINTING_INVOICE: OrderableEdmTypeField<
      VendorFormSetups<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    PRINT_AMOUNT_IN_EURO_CURRENCY: EnumField<
      VendorFormSetups<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ALL_FIELDS: AllFields<VendorFormSetups<DeSerializers>>;
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
         * Static representation of the {@link isSeparateTaxExemptBalanceInForms} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_SEPARATE_TAX_EXEMPT_BALANCE_IN_FORMS: fieldBuilder.buildEnumField(
          'IsSeparateTaxExemptBalanceInForms',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link salesTaxSpecification} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_TAX_SPECIFICATION: fieldBuilder.buildEnumField(
          'SalesTaxSpecification',
          TaxSpecPrintLevel,
          true
        ),
        /**
         * Static representation of the {@link printTaxExemptNumberOnInvoice} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRINT_TAX_EXEMPT_NUMBER_ON_INVOICE: fieldBuilder.buildEnumField(
          'PrintTaxExemptNumberOnInvoice',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link totals} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TOTALS: fieldBuilder.buildEnumField('Totals', FirstLast, true),
        /**
         * Static representation of the {@link inventoryDimensionsForPrintingInvoice} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENTORY_DIMENSIONS_FOR_PRINTING_INVOICE:
          fieldBuilder.buildEdmTypeField(
            'InventoryDimensionsForPrintingInvoice',
            'Edm.Int32',
            false
          ),
        /**
         * Static representation of the {@link printAmountInEuroCurrency} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRINT_AMOUNT_IN_EURO_CURRENCY: fieldBuilder.buildEnumField(
          'PrintAmountInEuroCurrency',
          NoYes,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', VendorFormSetups)
      };
    }

    return this._schema;
  }
}
